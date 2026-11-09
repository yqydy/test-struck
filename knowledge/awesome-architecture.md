# Awesome Architecture · 章节知识笔记

> Awesome Architecture · 架构图谱

> 原仓库：https://github.com/study8677/awesome-architecture

> 在线文档：https://study8677.github.io/awesome-architecture/

> ★ 2.5k · ⑂ 285 · Vue · MIT · 更新 2026-11-05

## 一句话

只讲架构、不讲语法的开源知识库：40 章教程教你在约束里做取舍，31 个真实系统模板和 6 个端到端案例用来验证判断。

## 定位

先想清楚系统长什么样，再写代码

## 它到底讲什么

- 一套可迁移的架构判断流程：把模糊需求拆成约束与质量属性，再在候选方案之间做「拿什么换什么」的取舍。
- 一套统一的架构表达方式：用 C4 模型从上下文画到容器，用 ADR 记录每个决策的理由、代价和复审条件。
- 31 张真实系统的架构地图：只讲组件、数据流、关键权衡与瓶颈，不讨论具体语言、框架和语法。
- 6 个端到端案例加 40 章教程：从 0 推到上线、再推到真实压力，展示架构如何被量化信号逼着演进。

## 它不是什么

它不是代码大全、框架教程或面试八股，也不提供能直接复制进项目的业务代码。

## 适合谁 / 前置 / 产出 / 难度

- 适合：想从「会写代码」升级到「会设计系统」的初中级工程师、技术负责人，以及准备系统设计面试的人。
- 前置：写过项目、接触过数据库与后端服务即可；不必精通某门语言或框架。
- 产出：拿到需求能先问清规模、读写比、一致性等约束，画出 C4 图，用 ADR 记录取舍，并预判系统会先死在哪。
- 难度：3 / 5（中等偏上）
- 建议时间：建议 40-60 小时通读；模板与案例可按需查阅

## 框架结构

**从判断到证据的架构框架** — 先建立「需求→约束→质量属性→取舍」的判断，用 C4 与 ADR 表达；再处理规模、失败、演进、AI 新约束与组织落地，最后用 31 个模板、6 个案例校验。

> 需求 → 约束 → 质量属性 → 取舍 → 表达 → 演进 → AI → 组织 → 证据

| 层 | 角色 | 说明 | 关键词 |
|---|---|---|---|
| 判断框架 | 把模糊需求变成可比较的取舍 | 第 02 章那套需求→约束→质量属性→取舍流程：先分清功能需求与质量属性，用灵魂六问问出规模、读写比、一致性等约束，再翻译成质量目标。 | 需求 vs 质量属性 / 约束清单 / 灵魂六问 / 取舍 |
| 架构表达 | 让团队看懂并记住你的系统 | 先画 Context 再画 Container，先粗后细，让产品、后端、前端看懂同一张图；用 ADR 记录决策背景、放弃的选项与复审条件。 | C4 模型 / Context / Container / ADR / 决策记录 |
| 规模与演进 | 驾驭做大做关键后才咬人的硬骨头 | 系统做大后才暴露的硬骨头：部分失败、一致性、韧性、规模与安全多租户，分别用 Saga / Outbox、熔断降级、多活与绞杀者迁移处理。 | 部分失败 / 一致性 / 幂等 / 熔断降级 / 绞杀者迁移 |
| AI 时代 | 把非确定性当成一等架构约束 | vibe coding 让实现廉价、判断更值钱；LLM 系统多了非确定性、上下文工程与成本/延迟/质量三角，要靠 eval 门禁和规格收口。 | vibe coding / 非确定性 / 上下文工程 / eval 门禁 |
| 组织落地 | 把架构变成团队可执行的约束 | 康威定律、团队拓扑与平台工程说明系统会长得像组织；AI 原生组织篇把共享上下文、工作流、责任与治理做成组织级生产系统，让约束真正落地。 | 康威定律 / 团队拓扑 / 共享上下文 / 责任与治理 |
| 证据校验 | 用模板与案例检验你的判断 | 31 个统一 14 段结构的模板覆盖经典系统、AI 原生、编码 Agent、系统提示词与工业嵌入式；6 个案例演示架构如何被约束逼着演进。 | 31 个模板 / 14 段结构 / 6 个案例 / 演进剧本 |

## 模块与章节

### 1. 教程 01-09 · 建立架构判断

- 角色：入门 · 判断框架
- 摘要：从「为什么先有架构思维」讲到「架构品味」：用需求→约束→质量属性→取舍的流程，把拍脑袋变成有章法的判断，并学会用 C4 和 ADR 表达。
- 产出：能对任意需求写出约束、质量目标与候选方案，画出第一版 C4 图并写下 ADR。
- 要点：功能性需求决定能不能用，质量属性决定该怎么搭；约束不是添堵，是帮你把选项砍到只剩几个；灵魂六问：规模、读写比、一致性、增长、失败代价、约束；没有银弹只有取舍，看不出代价的方案等于没想清楚；八步流程把模糊需求推进到能讲清数据流的架构图

| # | 章节 | 这一章讲什么 |
|---|---|---|
| 01 | [为什么先有架构思维](https://github.com/study8677/awesome-architecture/blob/main/tutorial/01-为什么先有架构思维.md) | 在 AI 写代码的时代，实现力贬值、判断力升值：为什么要在动手前先看清系统地图。 |
| 02 | [架构师的思考框架](https://github.com/study8677/awesome-architecture/blob/main/tutorial/02-架构师的思考框架.md) | 给出「需求→约束→质量属性→取舍」通用流程，附灵魂六问与短链接服务的完整推演。 |
| 03 | [读懂与画好架构图](https://github.com/study8677/awesome-architecture/blob/main/tutorial/03-读懂与画好架构图.md) | 用 C4 模型从系统上下文画到容器，先粗后细，让产品、后端、前端都看懂同一张图。 |
| 04 | [十大核心架构模式](https://github.com/study8677/awesome-architecture/blob/main/tutorial/04-十大核心架构模式.md) | 分层、微服务、事件驱动、CQRS 等十种模式各自回答什么问题，又各自引入什么复杂度。 |
| 05 | [数据与状态](https://github.com/study8677/awesome-architecture/blob/main/tutorial/05-数据与状态.md) | 系统真正的难点是数据：数据放哪、怎么一致，读写形态如何决定存储类型与索引。 |
| 06 | [质量属性与取舍](https://github.com/study8677/awesome-architecture/blob/main/tutorial/06-质量属性与取舍.md) | 逐项过性能、可用性、一致性、成本清单，把「做得多好」翻译成可比较的取舍。 |
| 07 | [从 0 到 1 设计一个系统](https://github.com/study8677/awesome-architecture/blob/main/tutorial/07-从0到1设计一个系统.md) | 八步方法论：澄清范围、信封背面估算、定义 API 边界、建数据模型、画图、找瓶颈、回顾风险。 |
| 08 | [架构决策记录与演进](https://github.com/study8677/awesome-architecture/blob/main/tutorial/08-架构决策记录与演进.md) | 用 ADR 记录每个决策的背景、代价和复审条件，让架构随业务长大而不是推倒重来。 |
| 09 | [架构品味](https://github.com/study8677/awesome-architecture/blob/main/tutorial/09-架构品味.md) | 用微服务回单体、各大公司架构审美等真实案例，养出框架之外的判断力与品味。 |

### 2. 教程 10-17 · 分布式与演进

- 角色：进阶 · 硬骨头
- 摘要：系统做大做关键后才暴露的问题：部分失败、一致性、韧性、规模化、拆分迁移、组织与安全，最后收束到 AI 时代仍然成立的那套架构判断。
- 产出：能判断系统在一致性、失败、规模、演进上的风险，并说出对应的工程抓手。
- 要点：分布式三件套：部分失败、没有全局时钟、共识很贵；一致性靠 Saga、Outbox、幂等与事件溯源，而非分布式事务；高可用把杠杆压在 MTTR：隔离、熔断、降载、降级、混沌演练；规模化先找第一个会裂的地方：分片、热点、多活、尾延迟；安全是结构：威胁建模、零信任、爆炸半径、租户隔离

| # | 章节 | 这一章讲什么 |
|---|---|---|
| 01 | [分布式系统的硬道理](https://github.com/study8677/awesome-architecture/blob/main/tutorial/10-分布式系统的硬道理.md) | 部分失败、灰色失败、没有全局时钟与共识的代价，解释分布式到底难在哪。 |
| 02 | [数据一致性工程](https://github.com/study8677/awesome-architecture/blob/main/tutorial/11-数据一致性工程.md) | 没有跨服务事务的世界里，用 Saga、Outbox、幂等、事件溯源与 CQRS 把数据弄对。 |
| 03 | [为失败而设计：韧性工程](https://github.com/study8677/awesome-architecture/blob/main/tutorial/12-为失败而设计.md) | 预设一定会出事：级联失败、舱壁隔离、熔断、降载、SLO、降级与混沌工程。 |
| 04 | [规模化的力学](https://github.com/study8677/awesome-architecture/blob/main/tutorial/13-规模化的力学.md) | 分片、一致性哈希、热点、多活、尾延迟与扇出放大：规模会在哪里先裂开。 |
| 05 | [演进与拆分大型系统](https://github.com/study8677/awesome-architecture/blob/main/tutorial/14-演进与拆分大型系统.md) | 给飞行中的飞机换引擎：绞杀者、并行运行、零停机迁移、拆单体与 DDD 限界上下文。 |
| 06 | [组织即架构](https://github.com/study8677/awesome-architecture/blob/main/tutorial/15-组织即架构.md) | 康威定律与逆康威、团队拓扑、平台工程：组织形状如何长成系统形状。 |
| 07 | [安全与多租户架构](https://github.com/study8677/awesome-architecture/blob/main/tutorial/16-安全与多租户架构.md) | 把安全当结构设计：威胁建模、零信任、爆炸半径控制与多租户隔离。 |
| 08 | [大模型时代的架构判断](https://github.com/study8677/awesome-architecture/blob/main/tutorial/17-大模型时代的架构判断.md) | vibe coding 让实现廉价、判断更值钱；非确定性、上下文工程、成本三角与 Agent 刹车。 |

### 3. 教程 18-26 · 实战演练与 AI 协同

- 角色：实战 · 落地
- 摘要：同一个 AI 智能客服走三遍：读陌生系统、从 0 设计、MVP 到规模化、拆分迁移；再练把约束写给 AI、审查产出、用 eval 收口。
- 产出：能完整走一遍「读懂→设计→演进→迁移」，并把架构约束写成 AI 可执行的规格。
- 要点：读陌生系统四步法：先找需求约束，再看组件与数据流，然后找权衡与瓶颈；07 章八步在 AI 客服上走第二遍，包含 token 成本估算；演进由量化信号触发：先看指标，再写 ADR，最后决定何时升级；拆分迁移四件套：绞杀者、抽象分支、影子流量、零停机替换；原型尽情 vibe，生产用 spec-first 与 eval 收口

| # | 章节 | 这一章讲什么 |
|---|---|---|
| 01 | [读地图：用框架拆解陌生系统](https://github.com/study8677/awesome-architecture/blob/main/tutorial/18-读地图用框架拆解陌生系统.md) | 用四步法逆向读懂陌生系统，对着 RAG 与 AI 对话产品练「为什么这么设计」的眼力。 |
| 02 | [完整设计演练：中等复杂度系统](https://github.com/study8677/awesome-architecture/blob/main/tutorial/19-完整设计演练中等复杂度系统.md) | 07 章八步的第二次走法：从 0 设计能查单、能退款的 AI 智能客服，并估算 token 成本。 |
| 03 | [演进剧本：MVP 到规模化](https://github.com/study8677/awesome-architecture/blob/main/tutorial/20-演进剧本MVP到规模化.md) | 同一个 AI 客服从 MVP 走到规模化：看量化信号、写 ADR、决定何时升级架构。 |
| 04 | [拆分与迁移实战](https://github.com/study8677/awesome-architecture/blob/main/tutorial/21-拆分与迁移实战.md) | 14 章案例化：绞杀者、抽象分支、影子流量，做到零停机替换向量库。 |
| 05 | [AI 原生系统设计](https://github.com/study8677/awesome-architecture/blob/main/tutorial/22-AI原生系统设计.md) | 把客服升级为自主 Agent，落地 17 章的非确定性、上下文与成本三个新约束。 |
| 06 | [规格即架构：约束怎么写给 AI](https://github.com/study8677/awesome-architecture/blob/main/tutorial/23-规格即架构约束怎么写给AI.md) | 把 ADR 和质量目标写成 AGENTS.md 一类可执行护栏，让 AI 持续遵守架构约束。 |
| 07 | [审查清单：AI 产出默认缺什么](https://github.com/study8677/awesome-architecture/blob/main/tutorial/24-审查清单AI产出默认缺什么.md) | 用 11/12/16 章的生产级清单审查 AI 产出：超时、重试、幂等、降级、安全缺什么。 |
| 08 | [评测驱动：把「够好」写进架构](https://github.com/study8677/awesome-architecture/blob/main/tutorial/25-评测驱动把够好写进架构.md) | 把 eval 当 CI 门禁，用评测集和评分衡量「够好」，防止换模型或改提示后悄悄退化。 |
| 09 | [协作决策树：何时 vibe、何时 spec-first](https://github.com/study8677/awesome-architecture/blob/main/tutorial/26-协作决策树何时vibe何时spec-first.md) | 用决策树判断什么时候尽情 vibe、什么时候必须 spec-first，把原型和生产分开。 |

### 4. 教程 27-34 · AI 时代的技术选型

- 角色：进阶 · 选型判断
- 摘要：不做框架教程和排行榜，而是把「需求→约束→质量属性→取舍」落到语言、数据库、缓存、API、部署、可观测与 AI 基础设施，最后收成决策树。
- 产出：能把「用什么技术」写成可复盘的 ADR，而不是凭热度或喜好拍板。
- 要点：语言/框架是否算架构决策，看它是否显著改变质量属性；先画数据生命周期，再决定事实源、读模型、搜索与向量库；Redis / Kafka 不是银弹：分清读热点、削峰与业务事实广播；从用户 SLO 倒推指标、日志、链路、告警与事故流程；技术选型决策树串起阶段、失败模式、团队能力与退出方案

| # | 章节 | 这一章讲什么 |
|---|---|---|
| 01 | [编程语言与后端框架选型](https://github.com/study8677/awesome-architecture/blob/main/tutorial/27-编程语言与后端框架选型.md) | 语言、运行时、框架分别影响什么；用五把尺子判断何时换栈，并把结论写成 ADR。 |
| 02 | [数据库与存储选型](https://github.com/study8677/awesome-architecture/blob/main/tutorial/28-数据库与存储选型.md) | 先画数据生命周期，再分工事实源、读模型、搜索、对象存储与向量库。 |
| 03 | [缓存、消息队列与事件系统选型](https://github.com/study8677/awesome-architecture/blob/main/tutorial/29-缓存消息队列与事件系统选型.md) | 分清读热点、时间错配与业务事实广播，判断缓存、消息队列和事件系统的边界。 |
| 04 | [API 与服务通信选型](https://github.com/study8677/awesome-architecture/blob/main/tutorial/30-API与服务通信选型.md) | 判断同步/异步、内部/外部、契约强度，再谈 REST、gRPC、GraphQL 与 Webhook。 |
| 05 | [云原生与部署平台选型](https://github.com/study8677/awesome-architecture/blob/main/tutorial/31-云原生与部署平台选型.md) | 云原生不是上 K8s，而是选一套团队养得起的部署、扩缩、回滚模型。 |
| 06 | [可观测性与可靠性技术栈选型](https://github.com/study8677/awesome-architecture/blob/main/tutorial/32-可观测性与可靠性技术栈选型.md) | 从用户 SLO 倒推指标、日志、链路、告警、值班和事故流程，而不是先买工具。 |
| 07 | [AI 基础设施技术栈选型](https://github.com/study8677/awesome-architecture/blob/main/tutorial/33-AI基础设施技术栈选型.md) | 先看稀缺资源是模型、GPU、上下文、检索质量、成本还是可控性，再决定 AI 栈。 |
| 08 | [技术选型决策树](https://github.com/study8677/awesome-architecture/blob/main/tutorial/34-技术选型决策树.md) | 一棵树串起是否引入新技术、所处阶段、失败模式、团队能力与退出方案。 |

### 5. 教程 35-40 · AI 原生组织与治理

- 角色：进阶 · 组织落地
- 摘要：把 AI 从个人临时工具升级为组织级生产系统：超级个体与超级团队、共享上下文、工作流沉淀、责任与治理，以及从试点到复用的演进路线。
- 产出：能判断团队如何把 AI 变成共享上下文、可复用工作流和可审计的治理机制。
- 要点：人人用 AI 不等于组织 AI 原生，关键是把 AI 放进生产系统；AI 放大个人之后，值钱的是人才密度与低摩擦小队；PRD、ADR、任务、trace、复盘要成为人和 Agent 的事实源；个人 prompt 沉淀为模板、Skill 与 Flow；Owner、权限、审批、审计和激励不能因 AI 参与执行而缺位

| # | 章节 | 这一章讲什么 |
|---|---|---|
| 01 | [AI 原生组织架构](https://github.com/study8677/awesome-architecture/blob/main/tutorial/35-AI原生组织架构.md) | 为什么「人人用 AI」不等于组织 AI 原生：先把 AI 放进真实价值流与生产系统。 |
| 02 | [超级个体与超级团队](https://github.com/study8677/awesome-architecture/blob/main/tutorial/36-超级个体与超级团队.md) | AI 放大个人以后，人才密度、AI 杠杆和组织摩擦如何共同决定竞争力。 |
| 03 | [共享上下文架构](https://github.com/study8677/awesome-architecture/blob/main/tutorial/37-共享上下文架构.md) | 让 PRD、ADR、任务、trace 和复盘成为人与 Agent 共用的事实源与上下文接口。 |
| 04 | [AI 工作流架构](https://github.com/study8677/awesome-architecture/blob/main/tutorial/38-AI工作流架构.md) | 把个人 prompt 升级成模板、Skill、Flow 和 Golden Path，让好实践可复制。 |
| 05 | [责任与治理架构](https://github.com/study8677/awesome-architecture/blob/main/tutorial/39-责任与治理架构.md) | AI 可以参与执行，但 Owner、权限、审批、审计和激励必须有人负责。 |
| 06 | [AI 原生组织演进路线](https://github.com/study8677/awesome-architecture/blob/main/tutorial/40-AI原生组织演进路线.md) | 从 3-5 人真实价值流试点，走到多小队复用和组织级 AI 操作系统的演进路线。 |

### 6. 架构模板库 · 31 张真实系统地图

- 角色：参考 · 架构地图
- 摘要：31 个模板统一按 14 段结构写：定位、需求约束、组件、数据流、关键决策、瓶颈、误区、演进；只讲架构不讲语言，每篇末尾附真实开源项目链接。
- 产出：拿到一个陌生系统，能顺着 14 段快速读懂它为什么这么设计、会死在哪。
- 要点：31 个模板分五类：经典、AI 原生、编码 Agent、提示词与工业；每篇第 8、9、11 段最值钱：关键权衡、规模化瓶颈、常见误区；模板是教学地图，不是某公司的内部真实图纸，数字与命名已通用化；每篇都带演进路线，提醒别拿成熟期架构去套 MVP

| # | 章节 | 这一章讲什么 |
|---|---|---|
| 01 | [经典 / 通用系统（16 个模板）](https://github.com/study8677/awesome-architecture/blob/main/templates/README.md) | 覆盖 AI 对话、电商、支付、Feed、视频、实时通讯、协同文档等 16 类系统的架构地图。 |
| 02 | [AI 原生系统（5 个模板）](https://github.com/study8677/awesome-architecture/blob/main/templates/README.md) | AI 网关、RAG、Agent 平台、推理服务与向量库：讲清统一入口、检索与行动循环。 |
| 03 | [AI 编码 / 自治 Agent（4 个模板）](https://github.com/study8677/awesome-architecture/blob/main/templates/README.md) | Claude Code、Codex 等四个 Agent：本地优先、云端沙箱、双层权限与上下文压缩。 |
| 04 | [系统提示词架构（1 个模板）](https://github.com/study8677/awesome-architecture/blob/main/templates/README.md) | 把大模型包装成分层 Agent OS：六层模块、决策树路由、Skills 外化与运行时注入。 |
| 05 | [工业 / 嵌入式系统（5 个模板）](https://github.com/study8677/awesome-architecture/blob/main/templates/README.md) | 固件、IoT 接入、工业边缘、车载 E/E 与机器人：软件错误会变成物理后果，重隔离与兜底。 |

### 7. 案例库 · 6 个端到端推演

- 角色：实战 · 完整推演
- 摘要：6 个案例把项目从 0 推到上线、再推到真实压力：每个都给出起始架构为什么合理、哪个量化信号逼它升级、新架构选了什么又放弃了什么。
- 产出：能用「没有数字不是案例、没有取舍不是架构」的标准，讲清一个系统的演进推理。
- 要点：6 个案例：票务、SaaS、RAG、协同、Feed、编码 Agent；旧架构为何合理、哪个信号逼升级、新架构放弃什么、约束变了还成立吗；标准：没有数字不是案例，没有取舍不是架构，没有演进不配进案例篇

| # | 章节 | 这一章讲什么 |
|---|---|---|
| 01 | [01 · StarArena：2 万座演唱会抢票系统](https://github.com/study8677/awesome-architecture/blob/main/cases/stararena-ticketing/README.md) | 有限库存、虚拟等候室、锁座、支付状态机与对账补偿，练在线票务的完整链路。 |
| 02 | [02 · PatchDesk：给 20 人团队用的轻量工单 SaaS](https://github.com/study8677/awesome-architecture/blob/main/cases/patchdesk-saas/README.md) | 模块化单体、多租户隔离、RBAC、Outbox 与异步通知，再演进到搜索报表。 |
| 03 | [03 · DocuMind：给 500 人公司用的企业 RAG 知识库](https://github.com/study8677/awesome-architecture/blob/main/cases/documind-rag/README.md) | 文档入库、切块、混合检索、重排、引用、权限过滤、提示注入与评测回归。 |
| 04 | [04 · SyncRoom：给远程团队用的实时协同工作台](https://github.com/study8677/awesome-architecture/blob/main/cases/syncroom-collaboration/README.md) | 长连接、服务端序号、离线补齐、多端同步、OT / CRDT、Presence 与通知降级。 |
| 05 | [05 · FeedStream：社交 Feed 与视频内容分发系统](https://github.com/study8677/awesome-architecture/blob/main/cases/feedstream-content/README.md) | 推拉混合、大 V 扇出、时间线收件箱、推荐排序、搜索索引、视频转码、CDN 与审核召回。 |
| 06 | [06 · CodePilot：AI Agent / 编码 Agent 平台](https://github.com/study8677/awesome-architecture/blob/main/cases/codepilot-agent/README.md) | 工具调用、权限网关、沙箱、人工审批、上下文压缩、检查点、子代理、trace 与 eval 门禁。 |

## 最短学习路径

- **1 · 先建立判断框架** — 读 01-06 章，分清功能需求与质量属性，学会灵魂六问与质量属性清单；产出：拿到需求不再急着画框，而是先问清约束
- **2 · 走通一次 0→1** — 用 07 章八步流程设计一个系统，用 08 章 ADR 把取舍写下来；产出：产出一份能讲清数据流和代价的架构方案
- **3 · 补上分布式硬骨头** — 读 10-16 章，理解一致性、失败、规模、演进与安全；产出：能预判系统做大后会在哪先裂开
- **4 · 对准 AI 时代** — 读 17、22-26 章，把非确定性、上下文、成本当约束设计，并给 AI 写规格；产出：能用 eval 门禁收口 AI 产出
- **5 · 用模板与案例校验** — 逆向读 31 个模板，跟完 6 个案例的演进推理，回看自己的方案；产出：把方法沉淀成可复用的判断直觉

## 最值钱的地方

- 31 个模板全部采用同一套 14 段结构，从定位、需求约束一直问到演进路线；越读越快，也把设计时要问的问题固定下来。
- 把「没有银弹，只有取舍」变成可操作动作：每个决策都要写出拿什么换什么，看不到取舍就说明还没想清楚。
- 教程→模板→案例三段衔接：方法、地图、完整推演各司其职，补上「学了方法却不会用」的断点。
- AI 部分不追工具榜单，而是把非确定性、上下文工程、成本/延迟/质量三角和 eval 门禁当作架构约束来讲。
- 明确反对拿成熟期架构套 MVP：每个模板都带演进路线，讲清何时该升级、何时属于过度设计。

## 学习时注意

- 模板是把公开架构理念通用化后的教学地图，不是任何公司的内部真实图纸，具体数字与组件命名不能当事实引用。
- 它刻意不写代码与框架配置，缺动手实现的人需要另找工程实践材料，否则容易「会讲不会做」。
- 40 章体量偏大，且 23 章之后偏 AI 时代 workflow；传统后端读者可先读到 18 章左右，再按需跳读。
- 案例给的是推理过程与量化信号，不是可运行代码；想复刻仍需自己补实现与压测。

## 它在三仓里的位置

- 角色：三仓合体中的架构判断层
- 上游：以编程与后端基础为前提，问题常来自 Easy-Vibe 的真实产品实践。
- 下游：为 Hello-Agents 提供 Agent 系统的沙箱、权限、评估与成本边界。
- 桥接：它教的「需求→约束→质量属性→取舍」正好是把 Agent 当系统设计、给 Agent 划边界和写 eval 门禁的共同语言。
- 共享概念：需求→约束→质量属性→取舍、C4 / ADR、Agent 平台、RAG / 知识库、上下文工程、Eval / SLO

## 数据来源

- https://raw.githubusercontent.com/study8677/awesome-architecture/main/README.md
- https://raw.githubusercontent.com/study8677/awesome-architecture/main/tutorial/README.md
- https://raw.githubusercontent.com/study8677/awesome-architecture/main/templates/README.md
- https://raw.githubusercontent.com/study8677/awesome-architecture/main/cases/README.md
- https://raw.githubusercontent.com/study8677/awesome-architecture/main/tutorial/02-架构师的思考框架.md
- https://raw.githubusercontent.com/study8677/awesome-architecture/main/tutorial/07-从0到1设计一个系统.md
- https://raw.githubusercontent.com/study8677/awesome-architecture/main/tutorial/12-为失败而设计.md
- https://raw.githubusercontent.com/study8677/awesome-architecture/main/tutorial/17-大模型时代的架构判断.md
- https://raw.githubusercontent.com/study8677/awesome-architecture/main/tutorial/27-编程语言与后端框架选型.md
- https://api.github.com/repos/study8677/awesome-architecture

> 生成时间：2026-11-09。章节标题/摘要来自 README 与公开文档的结构化整理；以上游最新内容为准。
