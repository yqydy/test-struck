# Hello-Agents · 章节知识笔记

> 从零开始构建智能体 · Agent 系统构建指南

> 原仓库：https://github.com/datawhalechina/hello-agents

> 在线文档：https://hello-agents.datawhale.cc

> ★ 86k+ · ⑂ 10k+ · Python · CC BY-NC-SA 4.0 · 更新 2026-11

## 一句话

开源中文教程：从智能体原理讲到自研 HelloAgents 框架，再做出真实的多智能体应用。

## 定位

从零开始构建智能体的系统教程

## 它到底讲什么

- 它不是某个框架的 API 手册，而是把 16 章分成五部分递进的体系化教程，每章配可运行代码。
- 主线是自研 HelloAgents：仅依赖 OpenAI 兼容接口，从消息、Agent 基类逐步长成轻量框架。
- 覆盖三大范式、主流框架对比、记忆与 RAG、上下文工程、MCP/A2A/ANP、Agentic RL 与评估。
- 用旅行助手、DeepResearch、赛博小镇三个项目收尾，毕业设计要求独立交付多智能体应用。

## 它不是什么

不是低代码平台手册，也不讲预训练，重点是 AI 原生 Agent 的工程实现。

## 适合谁 / 前置 / 产出 / 难度

- 适合：有 Python 基础、想从调用 LLM 进阶到设计 Agent 系统的开发者与在校学生。
- 前置：会写 Python，知道如何用 API 调用大模型即可；无需算法或模型训练背景。
- 产出：能独立实现经典范式与轻量 Agent 框架，为它加记忆、RAG、上下文管理与 MCP 工具，并交付多智能体应用。
- 难度：3 / 5（进阶）
- 建议时间：建议 60-100 小时（含配套代码）

## 框架结构

**五段式 Agent 成长阶梯** — 16 章分五部分：理论 → 手写经典范式 → 自研 HelloAgents 框架 → 记忆/协议/训练/评估 → 综合项目与毕业设计。

> 理论 → 范式 → 框架 → 高级能力 → 实战

| 层 | 角色 | 说明 | 关键词 |
|---|---|---|---|
| 理论底座 | 先弄清智能体究竟是什么 | 第一至三章定义智能体的感知-决策-行动结构，梳理从符号主义到 LLM 的演进，再补齐 Transformer 与提示工程。 | 智能体定义 / 发展史 / Transformer / 提示工程 / LLM 局限 |
| 范式内核 | 把思考与行动写成代码 | 第四章用 Python 手写 ReAct 循环、Plan-and-Solve 两阶段与 Reflection 反思迭代，比较三者成本与场景。 | ReAct / Plan-and-Solve / Reflection / 提示词模板 / 工具调用 |
| 框架锻造 | 既会用轮子也会造轮子 | 第五、六章用低代码平台与 AutoGen、LangGraph 建立工程对照；第七章从 OpenAI 接口造出 HelloAgents。 | 低代码平台 / AutoGen / AgentScope / LangGraph / Agent 基类 |
| 能力扩展 | 让 Agent 有记忆会协作 | 第八至十二章在框架上加记忆与 RAG、上下文工程、MCP/A2A/ANP 协议、SFT 到 GRPO 的 Agentic RL 训练与评估。 | 记忆与 RAG / 上下文工程 / MCP/A2A/ANP / Agentic RL / 性能评估 |
| 综合实战 | 把各个零件拼成真实系统 | 第十三至十六章把前四层拼成旅行助手、DeepResearch 与赛博小镇三个项目，并用毕业设计要求独立完成多智能体应用。 | 智能旅行助手 / DeepResearch / 赛博小镇 / 毕业设计 / 多智能体协作 |

## 模块与章节

### 1. 第一部分 · 智能体与语言模型基础

- 角色：理论 / 入门
- 摘要：第一至三章打底：定义智能体并梳理发展史，再补齐 LLM 的 Transformer 原理、提示技巧与能力边界，为后续代码奠基。
- 产出：能讲清智能体的构成与 LLM 的局限，看懂后续代码的设计动机。
- 要点：智能体 = 感知 + 决策 + 行动，LLM 提供决策核心；从符号主义、专家系统到 LLM 驱动的演进线索；Transformer 与提示工程决定 Agent 的上限；幻觉与上下文长度是必须面对的能力边界

| # | 章节 | 这一章讲什么 |
|---|---|---|
| 01 | [第一章 初识智能体](https://github.com/datawhalechina/hello-agents/blob/main/docs/chapter1/%E7%AC%AC%E4%B8%80%E7%AB%A0%20%E5%88%9D%E8%AF%86%E6%99%BA%E8%83%BD%E4%BD%93.md) | 定义智能体与经典范式，建立「感知-决策-行动」认识，说明 LLM 让 Agent 可用的原因。 |
| 02 | [第二章 智能体发展史](https://github.com/datawhalechina/hello-agents/blob/main/docs/chapter2/%E7%AC%AC%E4%BA%8C%E7%AB%A0%20%E6%99%BA%E8%83%BD%E4%BD%93%E5%8F%91%E5%B1%95%E5%8F%B2.md) | 梳理从符号主义、专家系统到强化学习与 LLM 驱动的演进脉络，理解今天设计选择的历史来源。 |
| 03 | [第三章 大语言模型基础](https://github.com/datawhalechina/hello-agents/blob/main/docs/chapter3/%E7%AC%AC%E4%B8%89%E7%AB%A0%20%E5%A4%A7%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B%E5%9F%BA%E7%A1%80.md) | 讲清 Transformer、提示工程与主流 LLM 的调用方式，以及幻觉、上下文长度等能力边界。 |

### 2. 第二部分 · 构建你的大语言模型智能体

- 角色：动手 / 框架
- 摘要：第四至七章动手：手写三种经典范式，再用低代码平台与主流框架对照，最后从零造出自研 HelloAgents 框架。
- 产出：拥有四种 Agent 范式实现与一个可扩展的轻量框架。
- 要点：ReAct：思考-行动-观察循环，边走边修正；Plan-and-Solve：先出计划，再逐步执行；Reflection：执行-反思-优化，用成本换质量；低代码平台体现流程驱动与 AI 原生的差别；HelloAgents：核心、Agent、工具三层，极简依赖

| # | 章节 | 这一章讲什么 |
|---|---|---|
| 01 | [第四章 智能体经典范式构建](https://github.com/datawhalechina/hello-agents/blob/main/docs/chapter4/%E7%AC%AC%E5%9B%9B%E7%AB%A0%20%E6%99%BA%E8%83%BD%E4%BD%93%E7%BB%8F%E5%85%B8%E8%8C%83%E5%BC%8F%E6%9E%84%E5%BB%BA.md) | 手写三大范式：ReAct 循环、Plan-and-Solve 两阶段、Reflection 迭代。 |
| 02 | [第五章 基于低代码平台的智能体搭建](https://github.com/datawhalechina/hello-agents/blob/main/docs/chapter5/%E7%AC%AC%E4%BA%94%E7%AB%A0%20%E5%9F%BA%E4%BA%8E%E4%BD%8E%E4%BB%A3%E7%A0%81%E5%B9%B3%E5%8F%B0%E7%9A%84%E6%99%BA%E8%83%BD%E4%BD%93%E6%90%AD%E5%BB%BA.md) | 对比 Coze、Dify、n8n 等低代码平台，用可视化流程搭智能体，体会 AI 原生的差别。 |
| 03 | [第六章 框架开发实践](https://github.com/datawhalechina/hello-agents/blob/main/docs/chapter6/%E7%AC%AC%E5%85%AD%E7%AB%A0%20%E6%A1%86%E6%9E%B6%E5%BC%80%E5%8F%91%E5%AE%9E%E8%B7%B5.md) | 上手 AutoGen、AgentScope、LangGraph，比较编排与工具调用的设计取舍。 |
| 04 | [第七章 构建你的Agent框架](https://github.com/datawhalechina/hello-agents/blob/main/docs/chapter7/%E7%AC%AC%E4%B8%83%E7%AB%A0%20%E6%9E%84%E5%BB%BA%E4%BD%A0%E7%9A%84Agent%E6%A1%86%E6%9E%B6.md) | 从 OpenAI 接口写出 HelloAgents 的 LLM 客户端、Agent 基类与工具注册。 |

### 3. 第三部分 · 高级知识扩展

- 角色：进阶 / 能力扩展
- 摘要：第八至十二章给框架升级：记忆与 RAG、上下文工程、通信协议、Agentic RL 训练与性能评估依次接入自研框架。
- 产出：把 HelloAgents 扩展成带记忆、检索、协议与评估的智能体系统。
- 要点：记忆系统负责长程经验的写入与检索；RAG：切分、向量化、向量加关键词混合检索；上下文工程：筛选、压缩并结构化有限窗口；MCP 管工具、A2A 管 Agent、ANP 管网络；SFT 到 GRPO 的训练与指标评估形成闭环

| # | 章节 | 这一章讲什么 |
|---|---|---|
| 01 | [第八章 记忆与检索](https://github.com/datawhalechina/hello-agents/blob/main/docs/chapter8/%E7%AC%AC%E5%85%AB%E7%AB%A0%20%E8%AE%B0%E5%BF%86%E4%B8%8E%E6%A3%80%E7%B4%A2.md) | 给自研框架加记忆系统与 RAG：让智能体保存经验并按需检索，走通切分、向量化与混合检索链路。 |
| 02 | [第九章 上下文工程](https://github.com/datawhalechina/hello-agents/blob/main/docs/chapter9/%E7%AC%AC%E4%B9%9D%E7%AB%A0%20%E4%B8%8A%E4%B8%8B%E6%96%87%E5%B7%A5%E7%A8%8B.md) | 做上下文工程：管理有限上下文窗口，通过筛选、压缩与结构化组织，让长任务保持情境理解。 |
| 03 | [第十章 智能体通信协议](https://github.com/datawhalechina/hello-agents/blob/main/docs/chapter10/%E7%AC%AC%E5%8D%81%E7%AB%A0%20%E6%99%BA%E8%83%BD%E4%BD%93%E9%80%9A%E4%BF%A1%E5%8D%8F%E8%AE%AE.md) | 解析 MCP、A2A、ANP：工具怎么接入、Agent 怎么协作、网络怎么互联，并接入框架。 |
| 04 | [第十一章 Agentic-RL](https://github.com/datawhalechina/hello-agents/blob/main/docs/chapter11/%E7%AC%AC%E5%8D%81%E4%B8%80%E7%AB%A0%20Agentic-RL.md) | 从 SFT 到 GRPO 训练 LLM 做 Agent：准备轨迹数据、设计奖励并处理 KL 发散。 |
| 05 | [第十二章 智能体性能评估](https://github.com/datawhalechina/hello-agents/blob/main/docs/chapter12/%E7%AC%AC%E5%8D%81%E4%BA%8C%E7%AB%A0%20%E6%99%BA%E8%83%BD%E4%BD%93%E6%80%A7%E8%83%BD%E8%AF%84%E4%BC%B0.md) | 给出评估方法：任务成功率、工具调用与轨迹质量等指标，结合 BFCL 等基准把效果量化。 |

### 4. 第四部分 · 综合案例进阶

- 角色：实战 / 综合
- 摘要：第十三至十五章做真实项目：MCP 与多智能体旅行助手、DeepResearch 研究智能体，以及会涌现社会行为的赛博小镇。
- 产出：交付 3 个可运行的综合项目，形成完整工程范式。
- 要点：旅行助手：MCP 工具加多智能体分工协作；DeepResearch：检索-阅读-笔记-写作长链编排；赛博小镇：NPC 人设、记忆与对话驱动社会模拟；三个项目复用同一套 HelloAgents 底座

| # | 章节 | 这一章讲什么 |
|---|---|---|
| 01 | [第十三章 智能旅行助手](https://github.com/datawhalechina/hello-agents/blob/main/docs/chapter13/%E7%AC%AC%E5%8D%81%E4%B8%89%E7%AB%A0%20%E6%99%BA%E8%83%BD%E6%97%85%E8%A1%8C%E5%8A%A9%E6%89%8B.md) | 用 MCP 工具与多智能体搭旅行助手，从需求理解、行程规划到结果呈现，走完产品级 Agent 链路。 |
| 02 | [第十四章 自动化深度研究智能体](https://github.com/datawhalechina/hello-agents/blob/main/docs/chapter14/%E7%AC%AC%E5%8D%81%E5%9B%9B%E7%AB%A0%20%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B7%B1%E5%BA%A6%E7%A0%94%E7%A9%B6%E6%99%BA%E8%83%BD%E4%BD%93.md) | 复现并解析 DeepResearch：拆解检索、阅读、笔记与报告生成的多阶段流程与编排方式。 |
| 03 | [第十五章 构建赛博小镇](https://github.com/datawhalechina/hello-agents/blob/main/docs/chapter15/%E7%AC%AC%E5%8D%81%E4%BA%94%E7%AB%A0%20%E6%9E%84%E5%BB%BA%E8%B5%9B%E5%8D%9A%E5%B0%8F%E9%95%87.md) | 把 Agent 放进游戏构建赛博小镇：为 NPC 设计人设、记忆与对话，观察多智能体的社会动态。 |

### 5. 第五部分 · 毕业设计及未来展望

- 角色：收口 / 自主创作
- 摘要：第十六章要求你自选场景，独立完成需求拆解、架构设计、编码实现与效果评估，交付一个完整多智能体应用。
- 产出：独立交付一个自己的多智能体应用，完成从学习者到构建者的转变。
- 要点：自选题目，走完需求-架构-实现-评估全流程；复用 HelloAgents 与全部高级模块；参考社区共创项目与面试题自查掌握度

| # | 章节 | 这一章讲什么 |
|---|---|---|
| 01 | [第十六章 毕业设计](https://github.com/datawhalechina/hello-agents/blob/main/docs/chapter16/%E7%AC%AC%E5%8D%81%E5%85%AD%E7%AB%A0%20%E6%AF%95%E4%B8%9A%E8%AE%BE%E8%AE%A1.md) | 毕业设计：自选主题，从需求、架构到实现独立交付完整多智能体应用，并展望 Agent 前沿方向。 |

## 最短学习路径

- **1 · 补智能体与 LLM 基础** — 读懂智能体的定义、发展史与 LLM 的能力边界；产出：建立理论地图
- **2 · 手写三种经典范式** — 用 Python 跑通 ReAct、Plan-and-Solve、Reflection；产出：理解 Agent Loop 的本质
- **3 · 对照低代码与主流框架** — 用 Coze/Dify/n8n 与 AutoGen/AgentScope/LangGraph 各做一个任务；产出：建立工程直觉与选型判断
- **4 · 从零构建 HelloAgents** — 实现 LLM 客户端、Agent 基类、工具注册表与四种 Agent；产出：拿到自己的轻量框架
- **5 · 为框架加高级能力** — 接入记忆、RAG、上下文工程与 MCP/A2A/ANP 协议；产出：智能体能记住并协作
- **6 · 训练与评估** — 跑通 SFT 到 GRPO 流程，用指标与基准评估效果；产出：能度量并改进 Agent
- **7 · 做综合项目与毕业设计** — 完成旅行助手、DeepResearch、赛博小镇与自选毕业设计；产出：形成可展示的作品集

## 最值钱的地方

- 把「从零造框架」写进主线：HelloAgents 源码与第四、七、八、九、十章一一对应，可以跟读、改坏再修好。
- 每章都不止讲概念：给出完整代码、真实运行日志、局限性与成本分析，例如三种范式的选择策略与 Reflection 的收益成本。
- 高级能力覆盖到工业界常见的 Agent 技术栈：记忆与 RAG、上下文工程、MCP/A2A/ANP、Agentic RL 与性能评估。
- 三个综合项目加毕业设计可直接作为作品集；配套 code 目录、PDF 与在线站点，中文社区更新活跃。
- 86k+ star 的中文 Agent 教程，术语体系与 Datawhale 其他课程一致，适合作为团队内部培训教材。

## 学习时注意

- 不教基座模型预训练与多模态 Agent；Agentic RL 一章是入门级实战，真正训练需要 GPU 与数据工程能力。
- 示例依赖云端 LLM 与搜索 API（Tavily、SerpApi 等），要自备 key 并承担调用成本；本地模型需自行部署 VLLM/Ollama。
- HelloAgents 定位是教学框架，生产级的并发、权限、可观测性与安全护栏需要自己补。
- 16 章篇幅长、代码多，只读不跑很容易停在第七章；建议每部分结束做一个小项目再往下走。

## 它在三仓里的位置

- 角色：Agent 构建能力的主干
- 上游：以书内手写范式为地基，向上依赖模型 API 与外部工具。
- 下游：为产品教程提供 Agent 实现，为架构教程提供参考实现。
- 桥接：easy-vibe 管产品落地，awesome-architecture 管系统设计，它补上「亲手构建」这一段。
- 共享概念：Agent、ReAct、RAG、Context Engineering、MCP、Evaluation

## 数据来源

- https://raw.githubusercontent.com/datawhalechina/hello-agents/main/README.md
- https://raw.githubusercontent.com/datawhalechina/hello-agents/main/docs/README.md
- https://raw.githubusercontent.com/datawhalechina/hello-agents/main/docs/%E5%89%8D%E8%A8%80.md
- https://raw.githubusercontent.com/datawhalechina/hello-agents/main/docs/chapter4/%E7%AC%AC%E5%9B%9B%E7%AB%A0%20%E6%99%BA%E8%83%BD%E4%BD%93%E7%BB%8F%E5%85%B8%E8%8C%83%E5%BC%8F%E6%9E%84%E5%BB%BA.md
- https://raw.githubusercontent.com/datawhalechina/hello-agents/main/docs/chapter7/%E7%AC%AC%E4%B8%83%E7%AB%A0%20%E6%9E%84%E5%BB%BA%E4%BD%A0%E7%9A%84Agent%E6%A1%86%E6%9E%B6.md
- https://api.github.com/repos/datawhalechina/hello-agents

> 生成时间：2026-11-09。章节标题/摘要来自 README 与公开文档的结构化整理；以上游最新内容为准。
