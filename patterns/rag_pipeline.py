"""A dependency-free RAG skeleton with permission filtering, citations, and refusal.

Run: python patterns/rag_pipeline.py

Reference only. Production upgrades:
- semantic/embedding + hybrid retrieval + reranker;
- document parsing, OCR, chunking strategy, incremental updates;
- tenant/row-level ACL enforced in the store, not after retrieval;
- prompt-injection defenses, evals, trace and cost accounting.
"""

from __future__ import annotations

import re
from dataclasses import dataclass, field
from typing import Callable, Literal


@dataclass(frozen=True)
class Document:
    doc_id: str
    title: str
    text: str
    tenant: str
    allowed_roles: tuple[str, ...] = ("member",)


@dataclass(frozen=True)
class Chunk:
    doc_id: str
    title: str
    text: str
    tenant: str
    allowed_roles: tuple[str, ...]


def chunk_text(text: str, *, max_chars: int = 320, overlap: int = 40) -> list[str]:
    if max_chars <= overlap:
        raise ValueError("max_chars must be greater than overlap")
    paragraphs = [p.strip() for p in re.split(r"\n\s*\n", text) if p.strip()]
    chunks: list[str] = []
    for p in paragraphs:
        if len(p) <= max_chars:
            chunks.append(p)
            continue
        start = 0
        while start < len(p):
            end = min(len(p), start + max_chars)
            chunks.append(p[start:end])
            if end == len(p):
                break
            start = end - overlap
    return chunks


class KeywordRetriever:
    """Naive lexical retrieval. Replace with hybrid/embedding + rerank in production."""

    def __init__(self, chunks: list[Chunk]) -> None:
        self.chunks = chunks

    @staticmethod
    def _terms(text: str) -> set[str]:
        # CJK chars are kept individually; this is intentionally simple.
        return set(re.findall(r"[A-Za-z0-9_]+|[\u4e00-\u9fff]", text.lower()))

    def search(
        self,
        query: str,
        *,
        tenant: str,
        role: str,
        limit: int = 5,
    ) -> list[Chunk]:
        # Authorization happens before scoring/returning. Never retrieve first, filter later.
        allowed = [c for c in self.chunks if c.tenant == tenant and role in c.allowed_roles]
        q = self._terms(query)
        scored = []
        for c in allowed:
            score = len(q & self._terms(c.text + " " + c.title))
            if score:
                scored.append((score, c))
        scored.sort(key=lambda item: item[0], reverse=True)
        return [c for _, c in scored[:limit]]


@dataclass
class Answer:
    kind: Literal["answer", "insufficient_evidence"]
    text: str
    citations: list[dict[str, str]] = field(default_factory=list)


def answer_question(
    question: str,
    retriever: KeywordRetriever,
    llm: Callable[[str, list[Chunk]], str],
    *,
    tenant: str,
    role: str,
) -> Answer:
    chunks = retriever.search(question, tenant=tenant, role=role, limit=5)
    if not chunks:
        return Answer(
            kind="insufficient_evidence",
            text="没有找到有权限访问的依据，无法回答。请补充资料或转人工。",
        )
    text = llm(question, chunks).strip()
    if not text:
        return Answer(kind="insufficient_evidence", text="模型没有产生可用答案。")
    return Answer(
        kind="answer",
        text=text,
        citations=[
            {"doc_id": c.doc_id, "title": c.title, "snippet": c.text[:120]}
            for c in chunks
        ],
    )


def _mock_llm(question: str, chunks: list[Chunk]) -> str:
    return "根据资料：" + chunks[0].text[:160] + "（仅基于提供的片段）"


if __name__ == "__main__":
    docs = [
        Document(
            doc_id="policy-1",
            title="退款政策",
            text="未发货订单可在 24 小时内取消并全额退款。已发货订单需先拒收。",
            tenant="shop-a",
            allowed_roles=("support", "admin"),
        ),
        Document(
            doc_id="secret-1",
            title="其他租户政策",
            text="这是另一个租户的机密政策。",
            tenant="shop-b",
            allowed_roles=("admin",),
        ),
    ]
    chunks = [
        Chunk(d.doc_id, d.title, piece, d.tenant, d.allowed_roles)
        for d in docs
        for piece in chunk_text(d.text)
    ]
    retriever = KeywordRetriever(chunks)
    result = answer_question("未发货订单怎么退款？", retriever, _mock_llm, tenant="shop-a", role="support")
    print(result.kind, "|", result.text)
    print("citations:", result.citations)
    blocked = answer_question("shop-b confidential", retriever, _mock_llm, tenant="shop-a", role="support")
    print("cross-tenant:", blocked.kind, "|", blocked.text)
