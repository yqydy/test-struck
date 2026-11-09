"""A minimal ReAct-style agent loop with hard stop conditions.

Run: python patterns/react_agent.py

This is a reference skeleton, not a production agent:
- wire `LLM.complete` to your provider;
- add persistence, tracing, cost accounting, permissions and evals;
- never let a tool decide its own authorization.
"""

from __future__ import annotations

import json
from dataclasses import dataclass
from typing import Any, Callable, Protocol


@dataclass(frozen=True)
class Tool:
    name: str
    description: str
    input_schema: dict[str, Any]
    run: Callable[[dict[str, Any]], Any]
    side_effect: str = "read"  # read | write | external | payment | exec


class LLM(Protocol):
    def complete(self, messages: list[dict[str, str]], tools: list[Tool]) -> dict[str, Any]:
        """Return {"type": "final", "content": ...} or {"type": "tool", "name": ..., "args": {...}}."""


class AgentError(RuntimeError):
    pass


class MockLLM:
    """Small deterministic adapter for the demo; replace with a real provider adapter."""

    def complete(self, messages: list[dict[str, str]], tools: list[Tool]) -> dict[str, Any]:
        last = messages[-1]["content"] if messages else ""
        if last.startswith("Observation:"):
            return {"type": "final", "content": "工具结果：" + last[len('Observation:'):].strip()}
        return {"type": "tool", "name": "add", "args": {"a": 2, "b": 3}}


def _tool_prompt(tools: list[Tool]) -> str:
    rows = [f"- {t.name}: {t.description} (side_effect={t.side_effect})" for t in tools]
    return "可用工具：\n" + "\n".join(rows)


def run_agent(
    task: str,
    tools: list[Tool],
    llm: LLM,
    *,
    max_steps: int = 8,
    max_observation_chars: int = 4000,
) -> str:
    if max_steps < 1:
        raise ValueError("max_steps must be >= 1")
    by_name = {t.name: t for t in tools}
    messages: list[dict[str, str]] = [
        {
            "role": "system",
            "content": (
                "You are a careful agent. Use tools only when needed. "
                "If evidence is missing, say so. Never claim a tool succeeded without an observation.\n"
                + _tool_prompt(tools)
            ),
        },
        {"role": "user", "content": task},
    ]

    for step in range(1, max_steps + 1):
        decision = llm.complete(messages, tools)
        kind = decision.get("type")

        if kind == "final":
            content = str(decision.get("content", "")).strip()
            if not content:
                raise AgentError("empty final answer")
            return content

        if kind != "tool":
            raise AgentError(f"invalid model decision at step {step}: {decision!r}")

        name = decision.get("name")
        args = decision.get("args") or {}
        tool = by_name.get(name)
        if tool is None:
            observation = f"ERROR: unknown tool {name!r}. Available: {sorted(by_name)}"
        elif not isinstance(args, dict):
            observation = "ERROR: tool args must be a JSON object"
        else:
            try:
                observation = tool.run(args)  # authorization must be enforced inside run()
            except Exception as exc:  # tool failures must be visible, never silent
                observation = f"ERROR: {type(exc).__name__}: {exc}"

        text = observation if isinstance(observation, str) else json.dumps(observation, ensure_ascii=False)
        if len(text) > max_observation_chars:
            text = text[:max_observation_chars] + "\n...[truncated]"
        messages.append({"role": "assistant", "content": json.dumps(decision, ensure_ascii=False)})
        messages.append({"role": "user", "content": "Observation: " + text})

    raise AgentError(f"step budget exceeded ({max_steps}); stop and ask a human")


def add(args: dict[str, Any]) -> dict[str, int]:
    return {"sum": int(args["a"]) + int(args["b"])}


if __name__ == "__main__":
    tools = [
        Tool(
            name="add",
            description="Add two integers.",
            input_schema={"type": "object", "required": ["a", "b"]},
            run=add,
        )
    ]
    print(run_agent("用工具计算 2 + 3，并给出结果。", tools, MockLLM(), max_steps=4))
