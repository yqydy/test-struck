---
name: ai-native-project-kit
description: Use when starting, scoping, designing, building, reviewing, or shipping a non-trivial software or AI product — especially architecture, agents/RAG/MCP, stack choice, MVP scope, demo-to-production, or AI-generated code review. Distills Awesome-Architecture, Hello-Agents, and Easy-Vibe into one architecture-first, agent-aware, delivery-oriented workflow with checklists, templates, chapter notes, and code patterns. 中文触发：做项目、架构设计、Agent/RAG、MVP、技术选型、方案评审、上线、从 Demo 到生产。Skip trivial one-file edits.
whenToUse: The user asks to build or plan a project, design a system or agent, choose a stack, audit an architecture, ship an MVP, review AI-generated code, or convert a prototype into a production service. Also use when the project involves LLM features, RAG, tools/MCP, multi-agent workflows, or AI-assisted coding.
---

# AI Native Project Kit

## What this is

A project operating system distilled from three sources:

- **Awesome-Architecture** — think before coding: requirements → constraints → quality attributes → tradeoffs, C4/ADR, scale, failure, evolution.
- **Hello-Agents** — when and how to build an AI-native agent: loop, tools, memory/RAG, context, protocols, evaluation, training.
- **Easy-Vibe** — turn it into a product: validate, prototype, full-stack, deploy, bill, ship.

Apply it to the current project, not as a repo summary. The kit ships with chapter notes and reference patterns, not just this file.

## Operating rules

1. **Start with constraints, not frameworks.** Name users, goal, scale, latency, consistency, cost, security, and non-goals before choosing a stack.
2. **Use the smallest architecture that passes the known constraints.** Prefer a modular monolith over microservices, managed over custom, and deterministic workflows over agents until evidence says otherwise.
3. **No agent without job, loop, tools, stop conditions, and eval.** A single LLM call is not an agent.
4. **Every AI feature gets an eval plan and guardrails.** Define good, bad, refusal, cost, latency, and regression behavior before launch.
5. **Build one vertical slice first.** UI → API → data → model → observable result. No horizontal “all backend first” builds.
6. **Demo is not production.** State the gap: auth, tenancy, retries, idempotency, observability, backups, rate limits, rollback, support, cost caps.
7. **Record decisions.** Non-trivial choices get a short ADR; changes need a rollback path.
8. **Treat the three repos as references, current repo as truth.** Cite chapter/template; verify against the user's code. Never invent facts.

## Route first

Classify the request before working. Use the lightest route that still protects quality.

| Mode | Use when | Read | Produce |
|---|---|---|---|
| **M0 · Quick task** | Hours, one narrow change | This file + `templates/delivery-checklist.md` subset | Tiny plan, code, smoke test |
| **M1 · MVP** | New product/prototype in days | `references/00-pipeline.md`, `references/01-architecture-playbook.md`, `references/03-delivery-playbook.md`, `templates/project-brief.md`, `templates/delivery-checklist.md` | Brief, architecture sketch, one slice, demo |
| **M2 · Production** | Real users, data, money, uptime | All references + templates + `patterns/` | Brief, C4, ADRs, evals, hardened delivery |
| **M3 · Agent feature** | LLM decisions, tools, RAG, multi-step | `references/01-architecture-playbook.md` + `references/02-agent-playbook.md` + `references/03-delivery-playbook.md`, `templates/agent-spec.md`, `templates/eval-plan.md`, `patterns/` | Agent spec, tool contracts, eval set, guardrails |
| **M4 · Review/audit** | Existing design, PR, AI code | `references/01-architecture-playbook.md` + checklist | Severity-ranked findings + minimal fixes |
| **M5 · Architecture-only** | Research/design, no build | `references/01-architecture-playbook.md` + `references/04-repo-map.md` | One-pager, diagram, options/tradeoffs, questions |

**Modes combine.** M1+M3 for an MVP with AI: `00 → 01 → 02 → 03`; produce brief → agent spec → slice. M2 adds hardening after the slice. M4 reviews without taking over the build. For exact chapter pointers use `references/04-repo-map.md`; for full chapter notes use `knowledge/`.

State the chosen mode and assumptions in one or two sentences. Ask **at most 3 blocking questions**; default and label non-blocking unknowns.

## Default workflow

### 1. Frame
Write a half-page project brief (or use `templates/project-brief.md`): user, job, outcome, non-goals, constraints, 3 quality attributes, success metric, risk. Ask “what happens if this is wrong?” before coding.

### 2. Decide the architecture
Run the 8-step loop in `references/01-architecture-playbook.md`: scope → scale → data/state → API boundaries → C4 L1/L2 → failure/security → ADR → evolution triggers.

### 3. Decide the AI shape
Use the decision table in `references/02-agent-playbook.md`: deterministic → code/workflow; one transformation → single LLM call; dynamic planning + tools + feedback → agent; measurable specialization/parallelism/verification → multi-agent. If AI is not justified, say so.

### 4. Specify the first slice
One user-visible outcome, acceptance criteria, smallest end-to-end path. For agents, write `templates/agent-spec.md`; for eval, use `templates/eval-plan.md` and `patterns/eval_runner.py`.

### 5. Build and verify
Implement with tests. For AI behavior, run the eval plan before calling it done. For production, apply `references/03-delivery-playbook.md` + `templates/delivery-checklist.md`.

### 6. Ship and learn
Deploy behind a rollback path. Capture logs, traces, cost, feedback, and the metric from the brief. Decide stay/evolve/revert on evidence.

## Required outputs

- **Build:** 5–10 line plan → thin-slice code → test/eval evidence → explicit production gaps.
- **Design:** one-page brief, diagram, 1–3 ADRs, tradeoffs, open questions.
- **Agent:** agent spec, tool contracts, context budget, eval plan, guardrails.
- **Review:** severity-ranked findings with file/line and minimal fix; no rewrite unless asked.
- **MVP:** validated scope, demo, delivery checklist, next-step decision.

## Quality gates

- **Architecture:** constraints, quality attributes, source of truth, failure/rollback, one ADR — `references/01-architecture-playbook.md`.
- **Agent:** AI justified, tool contracts, context/memory, stop conditions, eval set, cost caps — `references/02-agent-playbook.md`.
- **Delivery:** auth/tenancy, migrations/backups, observability, limits/retries, payment reconciliation, AI disclosure — `templates/delivery-checklist.md`.

## Anti-patterns

- Microservices/event sourcing/Kubernetes before a real constraint demands them.
- “RAG” = vector DB; “agent” = prompt + tools.
- Fine-tuning before prompt/retrieval/eval; hiding flaky demos.
- Treating a happy-path prototype as production.

## Reference files

- `knowledge/` — full chapter notes: 47 Easy-Vibe chapters, 16 Hello-Agents chapters, 51 Awesome-Architecture entries, plus the combined view. Read the exact section before citing.
- `patterns/` — runnable skeletons: ReAct loop, RAG with permissions/citations, eval runner, tool contract, vertical slice.
- `references/00-pipeline.md` — unified six-phase pipeline and modes.
- `references/01-architecture-playbook.md` — 8-step architecture method, tradeoffs, failure/AI-era checks.
- `references/02-agent-playbook.md` — agent decision, tools/MCP, memory/RAG, context, eval, guardrails.
- `references/03-delivery-playbook.md` — MVP, full-stack, deploy, payment, cross-platform, launch.
- `references/04-repo-map.md` — exact chapters/templates/cases by project need.
- `references/05-source-notes.md` — provenance, licenses, caveats.
- `templates/` — brief, ADR, agent spec, eval plan (+ filled example), delivery checklist.
- `examples/` — M1 short build and M2/M3 full walkthrough.
