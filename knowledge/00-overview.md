# 三仓总览 · 一条 AI 原生开发链路

> 本文件由 `knowledge/raw/combined.json` 生成；上游来源与许可见 `NOTICE.md`。

Awesome-Architecture 给你系统判断力，Hello-Agents 给你智能体内核，Easy-Vibe 给你把产品做出来并上线的路径。

**合体公式：** 先判断 → 再造智能 → 最后交付

这三份仓库不是三门互不相干的课：它们分别回答“系统应该长什么样”“智能体怎么造”“产品怎么落地”。把三者的顺序理顺，就得到一条从架构判断到产品上线的 AI 原生开发链路。

## 三层结构

| 层 | 负责 | 对应仓库 | 关键词 |
|---|---|---|---|
| 判断层 | 先想清楚 | awesome-architecture | 需求 → 约束 → 质量属性 → 取舍 / C4 架构图 / ADR 决策记录 / 演进路线 |
| 智能层 | 造出智能 | hello-agents | ReAct / Reflection / 记忆与 RAG / 上下文工程 / MCP / A2A / Agentic RL |
| 交付层 | 做成产品 | easy-vibe | AI IDE / 原型 → 全栈 / Claude Code / MCP / Spec Coding / 跨端上线 |

## 三仓之间的桥

### 把 Agent 当成一个系统来设计

Awesome Architecture → Hello-Agents

方向一：先有架构判断，再决定 Agent 的记忆、工具、沙箱、评估与成本边界。Awesome-Architecture 的 AI Agent 平台模板、RAG 模板和 CodePilot 案例，正好是 Hello-Agents 知识的系统化放大。

### 把 Agent 能力接进产品

Hello-Agents → Easy-Vibe

方向二：Hello-Agents 负责“会想会做”的内核，Easy-Vibe 负责把它变成用户可用的产品：AI 写作、旅行规划、浏览器助手、客服与工作流。

### 真实产品倒逼架构升级

Easy-Vibe → Awesome Architecture

方向三：当产品从 Demo 走向真实用户，流量、数据一致性、成本、权限与可靠性开始咬人，Easy-Vibe 的实践会把你推回 Awesome-Architecture 的取舍与演进问题。

## 合体读法

- **01 · 先建立架构判断**（Awesome Architecture）：用 1→9 章建立“需求 → 约束 → 质量属性 → 取舍”的思考框架，知道什么样的系统值得做、能做成、扛得住。
- **02 · 再理解智能体内核**（Hello-Agents）：从第 1→7 章理解 Agent 的定义、经典范式与框架分层，能自己实现 ReAct/Reflection，而不是只会调平台。
- **03 · 最后做成产品**（Easy-Vibe）：从 Stage 1 做到可演示原型，再用 Stage 2/3 的全栈与 Claude Code 工作流把原型推到真实用户面前。

## 同一概念，三仓各讲什么

| 概念 | Easy-Vibe | Hello-Agents | Awesome-Architecture |
|---|---|---|---|
| Agent | 把 Agent 能力接进 AI 产品：写作、旅行规划、浏览器助手、客服工作流。 | 从零实现 Agent 框架：ReAct/Reflection、工具、记忆、多智能体与训练。 | 把 Agent 平台当成系统设计：沙箱、权限、上下文、评估、成本与治理。 |
| RAG / 知识库 | Dify 知识库、RAG 原理与 LangGraph 进阶 RAG 的实战。 | 记忆系统与 RAG 的底层实现：切分、检索、重排、存储。 | RAG 知识库模板 + DocuMind 企业案例：权限、引用、评测、提示注入。 |
| 上下文工程 | 在 Claude Code 中通过 Skills、MCP、AGENTS.md 与 Spec Coding 管理上下文。 | 独立一章：持续交互中的情境理解、上下文压缩与工程化。 | 系统提示词架构、共享上下文架构、AI 原生工作流。 |
| 工具与协议 | Claude Code MCP、Agent SDK、远程开发与 Agent Teams。 | MCP / A2A / ANP 通信协议，工具调用与多智能体协作。 | API/服务通信选型、Agent 权限网关、MCP 与沙箱边界。 |
| 评估与质量 | 从 Demo 到上线的可用性意识、部署、支付与真实用户反馈。 | 智能体性能评估：指标、基准与评估框架。 | 把 eval 当 CI 门禁、SLO、可观测性与生产级 review checklist。 |
| 工程落地 | AI IDE → 前后端 → 数据库/API → 部署/支付 → 跨端发布。 | 自研框架 + 综合项目 + 毕业设计，形成可复用代码。 | 31 个架构模板 + 6 个端到端案例，从 MVP 演进到规模化。 |

> 三仓定位不同、难度不同：Awesome-Architecture 偏“判断与设计”，Hello-Agents 偏“原理与实现”，Easy-Vibe 偏“产品与交付”。不建议零基础同时硬啃三仓；按下方“合体读法”串起来，缺什么补什么。
