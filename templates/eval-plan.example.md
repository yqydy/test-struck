# 评测计划示例 · AI 客服草稿

> 这是一个填写示例，用来展示“可执行的评测”长什么样。实际项目按 `templates/eval-plan.md` 改写。
> 样例数据：`patterns/eval_cases.sample.jsonl`；运行骨架：`patterns/eval_runner.py`。

## 1. 目标

- 评测功能：根据工单 + 知识库，生成带引用的回复草稿；不自动发送。
- “够好”：
  - 草稿可直接发送或仅小改 **≥ 60%**；
  - 引用正确率 **≥ 95%**；
  - 无依据编造 **≤ 2%**；
  - 安全/越权高危 **0**；
  - p95 **≤ 8s**，单次成本 **≤ ¥0.2**。
- 审阅人：客服主管 + 产品。
- 频率：每次改 prompt/模型/检索/工具必跑；上线前全量；上线后每周抽样。

## 2. 数据集（示例）

| 分组 | 示例数 | 来源 | 是否 holdout |
|---|---|---|---|
| 正常问答 | 50 | 真实历史工单（脱敏） | 10 条 |
| 无答案 | 15 | 知识库未覆盖问题 | 是 |
| 订单查询 | 15 | 订单/物流场景 | 5 条 |
| 工具超时/失败 | 10 | 人为注入 | 是 |
| 提示注入 | 5 | 文档/用户输入注入样例 | 是 |
| 越权/跨租户 | 5 | 构造/安全测试 | 是 |

**样例 JSONL 结构**

```json
{"id":"normal-001","input":"客户问：未发货订单如何取消？","expected":"引用退款政策，给出取消步骤；不得承诺立即到账。","tags":["normal","rag"]}
```

完整 8 条见 `patterns/eval_cases.sample.jsonl`。生产集应至少 100 条，来自真实工单。

## 3. 指标与门禁

| 指标 | 定义 | 阈值 | 失败处理 |
|---|---|---|---|
| 可用率 | 人工评分 ≥ 4/5 | ≥ 60% | 分析失败聚类 |
| 引用正确率 | 引用片段确实支持结论 | ≥ 95% | 阻断发布 |
| 无依据率 | 无证据却给出肯定断言 | ≤ 2% | 阻断发布 |
| 安全高危 | 越权/泄露/注入成功 | 0 | 阻断发布 |
| p95 延迟 | 端到端 | ≤ 8s | 优化/降级 |
| 单次成本 | token + 检索 + 工具 | ≤ ¥0.2 | 路由/压缩 |

## 4. 运行

```bash
python patterns/eval_runner.py
# 或在自己的项目中：
# from patterns.eval_runner import load_cases, run_suite
# cases = load_cases("patterns/eval_cases.sample.jsonl")
```

把 `run_case` 换成你的真实调用，把 `judge` 换成：
- 规则判分（引用 id 是否存在、是否含敏感词、格式）；
- 人工 rubric；
- 或 LLM-as-judge + 人工抽检（不能只信 LLM judge）。

## 5. CI 门禁

```text
for each PR touching prompts/retrieval/tools:
  run eval on holdout
  if pass_rate < baseline - 2% → fail
  if safety/security case fails → fail
  if p95 > budget or cost > budget → fail
  else → pass and publish report
```

## 6. 线上

- 抽样 5% 对话做人工复核；
- 用户点踩/编辑幅度作为弱信号；
- 每周聚类失败原因；
- 失败样例加入回归集；
- 模型/prompt 版本与评测结果一起记录。
