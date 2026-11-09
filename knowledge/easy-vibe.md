# Easy-Vibe · 章节知识笔记

> Vibe Coding 101 · AI 产品实战

> 原仓库：https://github.com/datawhalechina/easy-vibe

> 在线文档：https://datawhalechina.github.io/easy-vibe/

> ★ 20k+ · ⑂ 1.9k+ · JavaScript · CC BY-NC-SA 4.0 · 数据 2026-11-06

## 一句话

一套中文 Vibe Coding（用自然语言指挥 AI 写代码）教程：从想法到可演示原型、全栈应用，再到跨端发布。

## 定位

从想法到上线的 AI 产品实战路线

## 它到底讲什么

- 它教的是向 AI 描述需求、检查产物、修掉报错的协作方式，而不是背语法和 API。
- 主线分三个 Stage：先做可演示原型，再补前端、数据库、部署与支付，最后学 Claude Code 与跨端发布。
- 仓库自带 9 大知识领域、80+ 个可点击的动画专题，用来补计算机基础、网络、数据库、LLM 与 RAG。
- 项目库收录 AI 文案、旅行规划、在线考试等作业，也有老师、学生、货车司机的真实作品故事。

## 它不是什么

不是从零讲语法的编程教材，也不是保证学完能独立设计大型系统的速成班。

## 适合谁 / 前置 / 产出 / 难度

- 适合：零基础想做出第一个作品的人、要低成本验证 MVP 的产品经理和创业者、想补齐上线链路的初中级开发者。
- 前置：会用浏览器、能安装软件和跑命令行；不需要编程基础，但需要坚持动手做项目。
- 产出：能独立把需求做成可演示原型，接上数据库、登录与支付并部署上线，还能发布成小程序或桌面应用。
- 难度：2 / 5（入门友好）
- 建议时间：建议 40-80 小时

## 框架结构

**从想法到上线的五层路径** — 三个 Stage 分别解决“做什么、怎么造、怎么发”，附录负责随时补齐底层概念；每层都对应明确章节与可交付作品，所以能顺着走而不迷路。

> 想法 → 原型 → 全栈 → AI 原生 → 跨端上线

| 层 | 角色 | 说明 | 关键词 |
|---|---|---|---|
| 知识底座层 | 卡住时随时回头补概念 | 9 大领域、80+ 交互式专题，从晶体管、网络、Git 到数据库、大模型、RAG，用动画演示解释教程没展开的底层原理。 | 计算机基础 / 网络 / 数据库 / LLM / RAG |
| 问题与原型层 | 把想法变成能看的样子 | 从真实麻烦出发找方向，用双钻模型和 The Mom Test 筛掉伪需求，再在 AI IDE 里生成单页或多页原型并接入 AI 能力。 | 学习地图 / AI IDE / 双钻模型 / The Mom Test |
| 全栈装配层 | 让原型有数据、能收钱 | 补上设计到代码、Supabase 数据库、后端接口、云端部署与 Stripe 支付，把玩具原型变成可注册、可付费的 Web 应用。 | Figma / Supabase / 后端 API / Stripe |
| AI 原生工作流层 | 学会指挥 AI 团队干活 | MCP 连外部服务、Skills 沉淀做法、Agent Teams 并行、Spec Coding 写规格，Claude Code 持续交付。 | Claude Code / MCP / Skills / Agent Teams / Spec Coding |
| 跨端交付层 | 把产品交付到用户手里 | 按场景选择微信小程序、Android/iOS、PWA、浏览器插件、Electron 桌面端或 Qt 工业应用等形态，走通发布上架流程。 | 微信小程序 / PWA / Electron / VS Code 插件 / 应用上架 |

## 模块与章节

### 1. Stage 1 · 新手与产品原型

- 角色：入门 / 产品原型
- 摘要：零基础起点：先感受对话写代码，再从真实问题出发做需求访谈与方案收敛，最后在 AI IDE 里做出原型并接入 AI 能力。
- 产出：一个可演示、能讲清楚解决什么问题的 AI 产品原型。
- 要点：先跑通贪吃蛇等小例子，建立“说需求→看结果→改对话”的循环。；用双钻模型、The Mom Test 等方法判断需求真伪。；在 AI IDE 里从单页做到多页原型，而不是停在示例代码。；最后接上文本、图片、视频模型，并拿真实用户反馈迭代。

| # | 章节 | 这一章讲什么 |
|---|---|---|
| 01 | [学习地图](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-1/learning-map/) | 把整条学习路线摊开：先做什么、后做什么、每个阶段该交出什么作品。 |
| 02 | [AI 时代，会说话就会编程](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-1/ai-capabilities-through-games/) | 用贪吃蛇等小游戏演示：只描述想要的效果，AI 就能生成可运行的程序。 |
| 03 | [寻找好想法](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-1/finding-great-idea/) | 从自己的日常麻烦和身边人的抱怨里找候选项目，判断哪个值得投入时间做。 |
| 04 | [双钻设计模型](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-1/appendix-double-diamond/) | 先用发散—收敛两轮，把零散灵感收成一个能说清的目标问题再动手。 |
| 05 | [The Mom Test：用户访谈方法](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-1/appendix-mom-test/) | 教你怎么问用户才听得到真话，避免被“听起来不错”的假反馈带偏。 |
| 06 | [认识 AI IDE 工具](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-1/introduction-to-ai-ide/) | 认识 AI IDE 的对话、改文件、跑项目用法，并在本地做出小游戏。 |
| 07 | [动手做出原型](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-1/building-prototype/) | 从需求分析开始，让 AI 生成单页面界面，再扩展成有多页面、能点能跳转的产品原型。 |
| 08 | [给原型加上 AI 能力](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-1/integrating-ai-capabilities/) | 把文本、图片、视频生成接入页面，让原型真的能对话、能出图，而不是静态壳子。 |
| 09 | [完整项目实战](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-1/complete-project-practice/) | 模拟真实场景走完发现需求、做原型、收集用户反馈、迭代的整轮流程，补齐演示材料。 |

### 2. Stage 2 · 初中级开发：全栈与上线

- 角色：全栈 / 上线交付
- 摘要：从前端设计稿、数据库、后端接口讲到 Git 协作、云端部署和 Stripe 收款，再用两个大作业把零件装成能注册、能付费、能管理的完整应用。
- 产出：一个可访问、可注册、可付费的全栈 Web 应用与项目仓库。
- 要点：从设计稿出发写前端，用组件库统一多产品视觉。；用 Supabase 管数据、用 AI 辅助写接口与接口文档。；用 Git 管版本，云端部署，Stripe 收款。；两个大作业分别练 SaaS 主链路和业务系统权限流程。；交付物是仓库 + 可访问链接 + README 与演示视频。

| # | 章节 | 这一章讲什么 |
|---|---|---|
| 01 | [学会使用 Git 与 GitHub](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-2/backend/git-workflow/) | 从提交、分支到合并请求，学会用版本控制保存代码、回到旧版本和与人协作。 |
| 02 | [从设计原型到项目代码](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-2/frontend/design-to-code/) | 把 Figma、MasterGo 里的设计稿转成能在浏览器跑起来的页面，理解设计到代码的三种路径。 |
| 03 | [从数据库到 Supabase](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-2/backend/database-supabase/) | 讲关系型数据库的表、字段、关系和查询，再用 Supabase 落地数据库、登录与 API。 |
| 04 | [应用后端接口设计与开发](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-2/backend/ai-interface-code/) | 让大模型辅助设计接口、生成后端代码和标准接口文档，让前后端能对上话。 |
| 05 | [从 IDE 到 CLI AI 编程工具](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-2/backend/modern-cli/) | 认识 Claude Code 这类命令行 AI 工具，学会在终端里读代码、改代码、跑调试。 |
| 06 | [发布你的产品原型](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-2/backend/zeabur-deployment/) | 用 Cloudflare Pages、Vercel 等把前后端发到公网，拿到能点开的网址。 |
| 07 | [如何集成 Stripe 等收费系统](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-2/backend/stripe-payment/) | 给应用接上支付：创建商品、走通结算、处理回调和订单，让产品能真的收钱。 |
| 08 | [大作业 1：第一个 SaaS 全栈应用——文案生成网站](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-2/assignments/copywriting-platform-supabase/) | 从零做 AI 营销文案工作台：登录、生成、数据库、Stripe 支付、管理后台一条龙。 |
| 09 | [大作业 2：在线考试与管理系统](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-2/assignments/exam-management-express/) | 做在线考试系统：角色权限、题库建模、答题流程、提交记录、批改和后台管理。 |

### 3. Stage 3 · 进阶开发：AI 原生与跨端

- 角色：进阶 / 跨端交付
- 摘要：把 Claude Code 的 MCP、Skills、Agent Teams 当作主线，学会先写规格再让 AI 实现，最后跨端发布。
- 产出：一套可复用的 AI 原生开发工作流与一个跨端上线作品。
- 要点：MCP 让 Claude Code 连上 GitHub 和 API。；Skills 打包重复做法，Agent Teams 并行干活。；Spec Coding：先把需求写成文档，再让 AI 按规格实现。；十种以上跨端形态按用户场景选，最后要能发布上架。

| # | 章节 | 这一章讲什么 |
|---|---|---|
| 01 | [Claude Code 快速上手核心指南](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-3/core-skills/basics/) | 安装配置、基础操作、常用指令和实用技巧，先把命令行 AI 编程跑起来。 |
| 02 | [MCP 与 Claude Code 完全指南](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-3/core-skills/mcp/) | 理解 MCP 协议，让 Claude Code 通过服务器连接 GitHub、数据库和外部 API。 |
| 03 | [Claude Code Skills 完全指南](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-3/core-skills/skills/) | 把专业知识和工作流程打包成可复用技能包，一次配置反复调用。 |
| 04 | [Claude Agent Teams 完全指南](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-3/core-skills/agent-teams/) | 让多个 AI 实例像开发团队一样分工、并行、互相检查，处理更大的任务。 |
| 05 | [用 GitHub Issues 驱动 AI 全流程开发：从需求讨论到 macOS 成品](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-3/core-skills/github-iterative-development/) | 用真实仓库走一遍需求讨论、Issue 拆解、逐条实现、测试与代码审查。 |
| 06 | [从 Vibe Coding 到 Spec Coding：先把需求写清楚，再让 AI 写代码](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-3/core-skills/spec-coding/) | 把随口提需求升级成写规格文档，让 AI 产出更可控、更接近工程标准。 |
| 07 | [如何构建微信小程序](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-3/cross-platform/wechat-miniprogram/) | 从模板和基础语法开始，做出一个能发布、能上线的前端微信小程序。 |
| 08 | [如何开发浏览器 AI 助手插件](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-3/cross-platform/browser-ai-extension/) | 写一个 Chrome 插件，一键总结任意网页，支持云端 API 或浏览器内置 AI。 |
| 09 | [如何开发工业级 Qt 桌面应用](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-3/cross-platform/qt-industrial-hmi/) | 用 Qt 做水泵监控 HMI：实时数据、趋势图、报警和监控界面。 |
| 10 | [什么是 RAG 以及它如何工作](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-3/ai-advanced/rag-introduction/) | 讲清检索增强生成（RAG）的原理与常见架构，为做知识库类应用打底。 |

### 4. Appendix · 9 大知识领域知识底座

- 角色：参考 / 查漏补缺
- 摘要：9 大知识领域、80+ 交互式专题：从计算机基础、开发工具、前后端、数据、架构到 AI 与工程素养，用动画和点击演示讲原理。
- 产出：遇到概念卡点时可随时回查的长期参考资料。
- 要点：每个专题尽量用一个可点的动画或演示讲清概念。；覆盖从晶体管、网络到 LLM、RAG 的整条技术栈。；和 Stage 1-3 章节互相引用，不按考试大纲组织。；适合当字典查，不适合从头到尾硬读。

| # | 章节 | 这一章讲什么 |
|---|---|---|
| 01 | [从晶体管到 CPU](https://datawhalechina.github.io/easy-vibe/zh-cn/appendix/1-computer-fundamentals/transistor-to-cpu.html) | 从开关和晶体管讲到芯片怎么执行指令，补上“代码到底跑在哪”这一课。 |
| 02 | [网络：两台电脑如何对话](https://datawhalechina.github.io/easy-vibe/zh-cn/appendix/1-computer-fundamentals/computer-networks.html) | 用分层模型讲数据怎么从一台电脑发到另一台，理解 IP、端口和请求响应。 |
| 03 | [Git：代码的时光机](https://datawhalechina.github.io/easy-vibe/zh-cn/appendix/2-development-tools/git-version-control.html) | 解释提交、分支、合并背后的对象模型，知道 Git 为什么能回滚和协作。 |
| 04 | [HTTP 协议](https://datawhalechina.github.io/easy-vibe/zh-cn/appendix/4-server-and-backend/http-protocol.html) | 拆开一次网页请求：方法、状态码、请求头、响应体，看懂接口调试面板。 |
| 05 | [认证与授权体系](https://datawhalechina.github.io/easy-vibe/zh-cn/appendix/4-server-and-backend/auth-authorization.html) | 区分“你是谁”和“你能做什么”，讲清 Cookie、Token、OAuth 的设计取舍。 |
| 06 | [数据库原理与 SQL](https://datawhalechina.github.io/easy-vibe/zh-cn/appendix/5-data/database-fundamentals.html) | 从表、索引、事务讲到 SQL 查询，理解数据为什么这样存、慢在哪。 |
| 07 | [大语言模型的工作原理](https://datawhalechina.github.io/easy-vibe/zh-cn/appendix/8-artificial-intelligence/llm-principles.html) | 用可视化的方式讲 token、概率预测和上下文窗口，知道模型为什么会产生幻觉。 |
| 08 | [RAG 架构](https://datawhalechina.github.io/easy-vibe/zh-cn/appendix/8-artificial-intelligence/rag.html) | 拆解检索、切分、向量化、重排这几个环节，看懂知识库应用的数据流。 |
| 09 | [提示词工程](https://datawhalechina.github.io/easy-vibe/zh-cn/appendix/8-artificial-intelligence/prompt-engineering.html) | 讲角色设定、示例、约束和分步推理，说明好提示为什么能稳定输出。 |

### 5. 项目库 · 作业与真实用户作品

- 角色：作品集 / 案例参考
- 摘要：6 个扩展作业覆盖落地页、智能体平台、推荐系统、微服务与数据看板；4 个真实故事展示不同背景的人做出的产品。
- 产出：可照着做的完整项目清单，以及一份属于自己的作品集。
- 要点：作业按技术方向分：AI 平台、推荐、微服务、数据可视化。；每个项目都给目标、技术栈与交付物，不是只给题目。；真实故事说明：背景不同的人靠 AI 也能做出产品。；适合作为学完 Stage 2/3 后的练手与简历素材。

| # | 章节 | 这一章讲什么 |
|---|---|---|
| 01 | [现代 AI 生图 SaaS 开发实战](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-2/assignments/modern-landing-page/) | 围绕价值表达、转化路径和埋点做一个能承接流量的现代落地页。 |
| 02 | [类 Dify 智能体平台开发实战](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-2/assignments/custom-dify-agent-platform/) | 实现智能体管理、对话、日志与权限控制，做出最小可用的 AI 平台。 |
| 03 | [智能旅游规划 Agent 平台开发实战](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-2/assignments/travel-planning-agent-platform/) | 用结构化输入、Agent 编排和历史计划管理，做可执行的旅行规划产品。 |
| 04 | [Spring Boot 电影推荐系统开发实战](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-2/assignments/movie-recommendation-springboot/) | 结合 Spring Boot、评分收藏和可解释推荐，完成完整推荐系统原型。 |
| 05 | [生鲜电商微服务系统开发实战](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-2/assignments/simple-grocery-microservices/) | 练习服务拆分、网关转发、库存与订单协作，体验从单体到微服务。 |
| 06 | [Go 交通数据分析平台开发实战](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-2/assignments/traffic-data-visualization-go/) | 从数据接入、窗口聚合做到趋势看板与告警，完成一个数据产品原型。 |
| 07 | [放弃月入过万，他在农村小学带孩子们“用AI赶苍蝇”](https://datawhalechina.github.io/easy-vibe/zh-cn/vibe-stories/story-1.html) | 一位乡村小学老师用 AI 做出课堂里能用的小工具，解决真实的教学管理问题。 |
| 08 | [期末考试周，我偷偷用AI造了个“校园闲鱼”](https://datawhalechina.github.io/easy-vibe/zh-cn/vibe-stories/story-2.html) | 大学生把闲置交易需求做成校园二手市场，先服务身边的同学。 |
| 09 | [我给每个学生，做了一个不会累的“学霸同桌”](https://datawhalechina.github.io/easy-vibe/zh-cn/vibe-stories/story-3.html) | 高中信息技术老师做了一个编程学伴，帮学生按自己的节奏学代码。 |
| 10 | [48岁货车司机，熬了几个通宵，硬是用AI磕出一个出海工具站](https://datawhalechina.github.io/easy-vibe/zh-cn/vibe-stories/story-4.html) | 货车司机把跑车途中攒下的想法做成面向海外用户的 AI 工具站。 |

## 最短学习路径

- **1 · 先感受 AI 编程** — 用贪吃蛇等小例子体验只靠对话写出可运行程序；产出：建立信心，知道 AI 能做什么、不能做什么
- **2 · 找真问题并验证** — 用双钻模型、Jobs to Be Done、The Mom Test 筛掉伪需求；产出：得到值得投入时间的方向
- **3 · 做出可演示原型** — 在 AI IDE 里生成单页/多页界面并接入文本、图片、视频能力；产出：能拿给真实用户看的 demo
- **4 · 补全栈并上线** — 接 Supabase、后端接口、登录与 Stripe 支付并部署，做完两个大作业；产出：可访问、可注册、可付费的全栈应用
- **5 · 升级 AI 原生工作流并跨端发布** — 用 Claude Code、MCP、Skills、Agent Teams 交付并发布到小程序、App 或桌面端；产出：一套工作流与一份能展示的作品集

## 最值钱的地方

- 三个 Stage 首尾相接：每个阶段都有可交付物，不是看完就忘的目录式教程。
- 把 Claude Code 的 MCP、Skills、Agent Teams、Spec Coding 写成了可照做的中文实战，而不是停在概念。
- 附录 9 大知识领域 80+ 交互式专题，用动画讲清 CPU、网络、Git、RAG 等卡点。
- 覆盖 Web、微信小程序、Android/iOS、PWA、Electron、VS Code 插件、Qt 等十余种交付形态。
- 项目库和用户故事给出真实参照：老师、学生、货车司机都做出了自己的产品。

## 学习时注意

- 不会替你补数学、算法和系统设计功底；遇到性能、安全、架构取舍问题，仍要回到专门资料。
- 教程默认你能联网调用大模型与云服务，API Key、额度与部分工具可能需要付费或自行申请。
- 章节以步骤演示为主，代码级原理讲得较少，遇到报错要自己读日志、查文档。
- 项目模板不等于生产系统：真实用户量上来后，权限、测试、监控这些要另外补。

## 它在三仓里的位置

- 角色：把想法做成产品并交付上线
- 上游：需要 Hello-Agents 的智能体内核、Awesome-Architecture 的架构判断
- 下游：为产品经理、独立开发者提供从原型到跨端上线的交付能力
- 桥接：它把 Agent 和 RAG 接进真实产品界面，并把架构判断落到 Web、小程序、桌面端的交付上。
- 共享概念：Agent、RAG、上下文工程、MCP、评估

## 数据来源

- https://raw.githubusercontent.com/datawhalechina/easy-vibe/main/README.md
- https://raw.githubusercontent.com/datawhalechina/easy-vibe/main/docs-readme/zh-CN/README.md
- https://raw.githubusercontent.com/datawhalechina/easy-vibe/main/docs/zh-cn/stage-2/index.md
- https://raw.githubusercontent.com/datawhalechina/easy-vibe/main/docs/zh-cn/stage-3/index.md
- https://raw.githubusercontent.com/datawhalechina/easy-vibe/main/user-cases/README.md
- https://api.github.com/repos/datawhalechina/easy-vibe

> 生成时间：2026-11-09。章节标题/摘要来自 README 与公开文档的结构化整理；以上游最新内容为准。
