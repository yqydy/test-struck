"""A minimal eval/regression runner for LLM and agent features.

Run: python patterns/eval_runner.py

Input JSONL fields:
  {"id": "...", "input": "...", "expected": "...", "tags": ["normal"], "meta": {}}

Replace `run_case` and `judge` with your feature and scorer. In CI, exit non-zero
when the aggregate threshold or any safety case fails.
"""

from __future__ import annotations

import json
import statistics
import time
from pathlib import Path
from typing import Any, Callable, Dict, List, Union


Case = Dict[str, Any]
Result = Dict[str, Any]


def load_cases(path: Union[str, Path]) -> List[Case]:
    cases: list[Case] = []
    with open(path, "r", encoding="utf-8") as fh:
        for lineno, raw in enumerate(fh, 1):
            raw = raw.strip()
            if not raw:
                continue
            try:
                case = json.loads(raw)
            except json.JSONDecodeError as exc:
                raise ValueError(f"invalid JSONL at line {lineno}: {exc}") from exc
            for key in ("id", "input", "expected"):
                if key not in case:
                    raise ValueError(f"case at line {lineno} missing {key!r}")
            cases.append(case)
    return cases


def _exact_judge(case: Case, output: str) -> bool:
    return output.strip() == str(case["expected"]).strip()


def run_suite(
    cases: list[Case],
    run_case: Callable[[Case], Result],
    judge: Callable[[Case, str], bool] = _exact_judge,
    *,
    min_pass_rate: float = 0.9,
    max_avg_latency_ms: float | None = None,
    hard_fail_tags: tuple[str, ...] = ("security", "privacy"),
) -> dict[str, Any]:
    rows: list[dict[str, Any]] = []
    for case in cases:
        started = time.perf_counter()
        try:
            result = run_case(case)
            latency = float(result.get("latency_ms", (time.perf_counter() - started) * 1000))
            output = str(result.get("output", ""))
            passed = judge(case, output)
            rows.append(
                {
                    "id": case["id"],
                    "tags": case.get("tags", []),
                    "passed": passed,
                    "latency_ms": latency,
                    "cost": float(result.get("cost", 0.0)),
                    "output": output,
                    "error": None,
                }
            )
        except Exception as exc:  # a crashed run is a failed case, not a skipped one
            rows.append(
                {
                    "id": case["id"],
                    "tags": case.get("tags", []),
                    "passed": False,
                    "latency_ms": (time.perf_counter() - started) * 1000,
                    "cost": 0.0,
                    "output": "",
                    "error": f"{type(exc).__name__}: {exc}",
                }
            )

    total = len(rows)
    passed = sum(1 for r in rows if r["passed"])
    pass_rate = passed / total if total else 0.0
    latencies = [r["latency_ms"] for r in rows]
    hard_failed = [
        r for r in rows if not r["passed"] and set(r["tags"]) & set(hard_fail_tags)
    ]
    summary = {
        "total": total,
        "passed": passed,
        "pass_rate": round(pass_rate, 4),
        "avg_latency_ms": round(statistics.mean(latencies), 1) if latencies else 0,
        "p95_latency_ms": round(_percentile(latencies, 95), 1) if latencies else 0,
        "total_cost": round(sum(r["cost"] for r in rows), 4),
        "hard_failed": hard_failed,
        "failed_ids": [r["id"] for r in rows if not r["passed"]],
        "gate_passed": pass_rate >= min_pass_rate
        and not hard_failed
        and (max_avg_latency_ms is None or (latencies and statistics.mean(latencies) <= max_avg_latency_ms)),
        "rows": rows,
    }
    return summary


def _percentile(values: list[float], p: int) -> float:
    if not values:
        return 0.0
    ordered = sorted(values)
    k = max(0, min(len(ordered) - 1, int(round((p / 100) * (len(ordered) - 1)))))
    return ordered[k]


def _demo_case(case: Case) -> Result:
    return {"output": case["expected"], "latency_ms": 42.0, "cost": 0.001}


if __name__ == "__main__":
    demo = [
        {"id": "ok-1", "input": "2+2", "expected": "4", "tags": ["normal"]},
        {"id": "ok-2", "input": "2+3", "expected": "5", "tags": ["normal"]},
    ]
    summary = run_suite(demo, _demo_case, min_pass_rate=0.9)
    print(json.dumps({k: v for k, v in summary.items() if k != "rows"}, ensure_ascii=False, indent=2))
    raise SystemExit(0 if summary["gate_passed"] else 1)
