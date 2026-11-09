# 04 · 三仓阅读地图

> 不用从头读到尾。先看项目问题，再按表定位章节/模板/案例。完整逐章笔记在 `knowledge/<repo>.md`，这里只做“去哪读”的路由。

## 快速路由

| 你正在… | 先看 |
|---|---|
| 判断要不要做 Agent | 本仓库 `02-agent-playbook.md` §1；Hello-Agents 第 1、5 章；Awesome 17、22、26 章 |
| 设计 RAG 知识库 | Hello-Agents 第 8 章；Awesome DocuMind 案例 + RAG 知识库模板；`02-agent-playbook.md` §6 |
| 设计 MCP/工具接入 | Hello-Agents 第 10 章；Awesome AI Agent 平台模板、CodePilot 案例 |
| 做 Agent 评测 | Hello-Agents 第 12 章；Awesome 25 章（eval 当 CI 门禁）；`templates/eval-plan.md` |
| 从 0 设计一个系统 | Awesome 02、04、06、07、08 章；`01-architecture-playbook.md` |
| 画架构图 / 写 ADR | Awesome 03、08 章；`templates/adr.md` |
| 判断 MVP 范围 | Easy-Vibe Stage 1；`03-delivery-playbook.md` §2–3 |
| 做全栈上线 | Easy-Vibe Stage 2；Awesome 27–34 选型 |
| 接 Stripe / 支付 | Easy-Vibe Stage 2 支付章节；`03-delivery-playbook.md` §6 |
| 做 Claude Code / 多 Agent 工作流 | Easy-Vibe Stage 3；Awesome 23–26 章 |
| 做跨端发布 | Easy-Vibe Stage 3 跨端章节；`03-delivery-playbook.md` §9 |
| 系统设计面试/评审 | Awesome 01–17 章 + 31 模板；`01-architecture-playbook.md` |
| 生产级代码审查 | Awesome 18–26 章；Hello-Agents 第 12 章；`templates/delivery-checklist.md` |
| 技术选型 | Awesome 27–34 章；`01-architecture-playbook.md` 取舍卡 |
| 组织/流程/治理 | Awesome 35–40 章 |

## 一、Awesome-Architecture

原仓库：<https://github.com/study8677/awesome-architecture>

**定位**：只讲架构、不讲语法；核心是“先想清楚系统长什么样，再写代码”。

### 教程 40 章

| 范围 | 主题 | 典型用途 |
|---|---|---|
| 01–09 | 架构思维、思考框架、C4、十大模式、数据与状态、质量属性、0→1、ADR、架构品味 | 新系统设计、评审、面试 |
| 10–17 | 分布式、一致性、韧性、规模化、演进/拆分、组织、安全、多租户、LLM 时代 | 做大/做关键后的硬问题 |
| 18–26 | 读陌生系统、AI 客服完整设计、MVP→规模化、拆分迁移、AI 原生、规格、审查、评测、协作决策 | 实战演练、AI 协同 |
| 27–34 | 语言/框架、数据库、缓存/MQ、API、云原生、可观测、AI 基础设施、决策树 | 技术选型 |
| 35–40 | AI 原生组织、超级个体/团队、共享上下文、AI 工作流、治理、演进 | 团队/流程 |

### 模板 31 个（统一 14 段结构）

- 经典/通用 16：AI 对话、浏览器插件、普通网站、移动 App、电商、Feed、视频、实时通讯、短链、支付、搜索、网约车、协同文档、云存储、通知、票务
- AI 原生 5：AI 网关、RAG、Agent 平台、推理服务、向量库
- AI 编码/自治 Agent 4：Claude Code、Codex、OpenClaw、Hermes
- 系统提示词 1
- 工业/嵌入式 5：固件、IoT、工业边缘、车载 E/E、机器人

### 案例 6 个

1. StarArena：演唱会抢票（库存、锁座、支付、对账）
2. PatchDesk：轻量工单 SaaS（多租户、RBAC、Outbox）
3. DocuMind：企业 RAG（权限、引用、注入、评测）
4. SyncRoom：实时协同（OT/CRDT、离线补齐）
5. FeedStream：内容分发（推拉、扇出、推荐、CDN）
6. CodePilot：编码 Agent 平台（沙箱、权限、子代理、eval）

**使用建议**：先读 01–09 建立判断，再按项目类型读模板/案例；不要背图，盯“起始架构为什么合理、哪个信号逼它升级、升级后放弃了什么”。

## 二、Hello-Agents

原仓库：<https://github.com/datawhalechina/hello-agents>

**定位**：从零构建 AI Native Agent，不是某个框架 API 手册；主线是自研 HelloAgents 框架。

### 五部分 16 章

| 部分 | 章节 | 内容 |
|---|---|---|
| 基础 | 1–3 | 智能体定义/发展史；Transformer、提示工程、LLM 局限 |
| 构建 | 4–7 | 手写 ReAct/Plan-and-Solve/Reflection；Coze/Dify/n8n；AutoGen/AgentScope/LangGraph；从零造框架 |
| 高级 | 8–12 | 记忆/RAG、上下文工程、MCP/A2A/ANP、Agentic RL、性能评估 |
| 综合 | 13–15 | 旅行助手、DeepResearch、赛博小镇 |
| 毕业设计 | 16 | 自选主题，独立交付多智能体应用 |

### 使用时注意

- 第 4、7 章：要理解 Agent 内部实现时读；
- 第 8、9 章：做知识库/长任务/上下文管理时读；
- 第 10 章：接入工具/多 Agent 前读；
- 第 11 章：只有前四步都做好、确有数据和评测需求时再考虑训练；
- 第 12 章：任何 AI 功能上线前必读；
- 第 13–16 章：找端到端案例和代码结构。

**不是**：不教基座预训练，不保证生产级并发/权限/可观测；这些要结合架构手册补。

## 三、Easy-Vibe

原仓库：<https://github.com/datawhalechina/easy-vibe>

**定位**：用 Vibe Coding 从想法做出产品并上线；不是语法教材。

### 5 个模块

| 模块 | 内容 | 产出 |
|---|---|---|
| Stage 1 新手与产品原型 | AI IDE、找想法、双钻、Mom Test、单/多页原型、接入 AI、完整实战 | 可演示原型 |
| Stage 2 全栈与上线 | Git、设计到代码、Supabase、API、CLI、部署、Stripe、两个大作业 | 可注册/可付费 Web 应用 |
| Stage 3 AI 原生与跨端 | Claude Code、MCP、Skills、Agent Teams、Issues、Spec Coding、跨端、RAG | 工作流 + 跨端作品 |
| Appendix | 9 大领域 80+ 交互专题（CPU/网络/Git/HTTP/认证/DB/LLM/RAG/提示） | 查漏补缺 |
| 项目库 | 6 个作业 + 4 个真实用户故事 | 作品集/参考 |

### 什么时候翻

- 不知道做什么：Stage 1 找想法/双钻/Mom Test；
- 要快速演示：Stage 1 原型 + 接入 AI；
- 要上线：Stage 2 数据库/API/部署/支付；
- 要 AI 原生开发：Stage 3 Claude Code/MCP/Skills/Agent Teams/Spec Coding；
- 要跨端：Stage 3 小程序/App/PWA/Electron/插件等；
- 概念卡住：Appendix。

## 三仓合体读法

```
Awesome 01–09：建立判断
      ↓
Hello 1–7：理解 Agent 内核（只做 AI 功能时）
      ↓
Easy Stage 1–3：做出产品并上线
      ↓
Awesome 10–26 + Hello 12：真实规模/失败/评测
```

不是必须全读；按你当前项目缺什么补什么。
