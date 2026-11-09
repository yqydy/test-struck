# 工具合同模板

> 工具是 Agent 的“手”。合同不写清，模型就会猜；猜错比不调用更危险。

## 每个工具必须定义

```yaml
name: search_docs            # 动词+对象，全局唯一
description: 在租户知识库中检索文档片段；返回片段与 doc_id，不返回整篇。
input_schema:
  type: object
  properties:
    query: { type: string, minLength: 1 }
    limit: { type: integer, minimum: 1, maximum: 8, default: 5 }
  required: [query]
output_schema:
  type: object
  properties:
    results:
      type: array
      items:
        type: object
        properties:
          doc_id: { type: string }
          title: { type: string }
          snippet: { type: string }
          score: { type: number }
  required: [results]
side_effect: read            # read | write | external | payment | exec
permission: tenant_member    # 角色/租户/资源范围
timeout_ms: 5000
retry:
  max_attempts: 2
  backoff_ms: 300
  idempotent: true
failure:
  user_visible: "知识库暂时不可用，请转人工或稍后重试。"
  agent_recovery: "stop_and_ask_human"
```

## 审批矩阵

| 副作用 | 默认 | 示例 |
|---|---|---|
| 只读 | 自动执行 | 搜索、查订单、读用户资料 |
| 写入 | 需审批/额度 | 建工单、改状态、发内部消息 |
| 外发 | 必须审批 | 发邮件、发短信、公开回复 |
| 支付/退款 | 双人审批 + 幂等 | 退款、改价、发券 |
| 执行代码 | 沙箱 + 审批 | shell、浏览器、部署 |

## 设计检查

- [ ] 工具只做一件事，名称能看出副作用。
- [ ] 输入/输出有 schema，输出可截断、可序列化。
- [ ] 有超时、重试、错误码；写操作有幂等键。
- [ ] 权限在服务端校验，不依赖模型“记得”。
- [ ] 返回结果只含该用户/租户可见的数据。
- [ ] 工具描述不包含“请忽略系统提示”等可注入文本。
- [ ] 高风险动作有审批、审计、额度上限。
- [ ] 失败语义能让 Agent 停止或换策略，而不是编造成功。
