# AI Native Project Kit

> **test-struck** · Agent 学习 + 架构项目仓库  
> 把 [Awesome-Architecture](https://github.com/study8677/awesome-architecture)、[Hello-Agents](https://github.com/datawhalechina/hello-agents)、[Easy-Vibe](https://github.com/datawhalechina/easy-vibe) 三个仓库炼成一套**做项目时直接能用的 skill / 作战手册**。

不是只给一个 `SKILL.md`：仓库里保留了 **114 条三仓章节/条目笔记**、6 份项目 playbook、6 个可复制模板、2 个完整示例，以及可直接运行/改造的 ReAct、RAG、Eval 参考代码。

不是简单堆叠原文，而是抽出一条可执行路径：

```
判断（架构） → 造智能（Agent） → 做产品（交付）
```

适合：新项目、MVP、AI 功能、RAG/Agent、系统设计、技术选型、AI 代码审查、从 Demo 推到生产。

---

## 它解决什么问题

做项目时最常见的问题不是“不知道某个框架”，而是：

- 一上来就选技术，没想清楚约束和取舍；
- 不知道要不要做 Agent，或者把“prompt + 工具”当成了 Agent；
- RAG 只做了向量库，没有权限、引用、无答案与评测；
- Demo 能跑，但没鉴权、重试、幂等、监控、回滚；
- 让 AI 写代码，却没有规格、没有验收、没有评测门禁；
- 看了一堆教程，项目里不知道下一步做什么。

这个 kit 把三套知识合成一个**按项目阶段取用的工作流**，并给出可复制的简报、ADR、Agent 规格、评测计划、上线清单。

---

## 零安装使用（推荐）

本仓库**不需要安装**，不注册任何 skill，也不依赖 DSH。所有内容都是普通文件：

1. 把整个仓库复制到项目里，或放在项目旁边；
2. 让 agent 先读 `SKILL.md`，再按需要读 `references/`、`knowledge/`、`templates/`、`patterns/`；
3. 不需要任何服务、数据库或后台进程。

最直接的调用方式：

```text
请先阅读 F:\path\to\ai-native-project-kit\SKILL.md，
然后按其中的 M1+M3 流程帮我做一个 AI 工单助手 MVP。
需要时再读 references/ 和 templates/，最后给我可执行的下一步。
```

也可以只取其中一部分：

- 做架构：复制 `references/01-architecture-playbook.md` + `templates/adr.md` 到项目 `docs/`；
- 做 Agent：复制 `templates/agent-spec.md` + `templates/eval-plan.md`，参考 `patterns/react_agent.py`；
- 做 MVP/上线：用 `templates/delivery-checklist.md`；
- 查三仓内容：直接读 `knowledge/<repo>.md`。

### 可选：如果你以后想自动加载

仓库仍保留 `scripts/install.ps1`，可把它复制到 DSH 的 skills 目录或 `.agents/skills/`；**这只是可选项，当前交付不需要执行，也不影响阅读和项目使用。**

---

## 怎么用

不需要安装或注册。把下面的文件路径给任意 coding agent，或直接把仓库放进项目：

```text
请先读 ai-native-project-kit/SKILL.md，再帮我设计一个营销诊断系统：
先做架构判断，再决定要不要 Agent，最后给 MVP 切片。
```

```text
请按 ai-native-project-kit/SKILL.md 审查这个方案，
按 blocker / important / nit 输出，必要时引用 knowledge/ 里的章节。
```

```text
请用 ai-native-project-kit 把这个 Demo 推到可上线：
按 templates/delivery-checklist.md 找缺口，给最小修复顺序。
```

```text
请用 ai-native-project-kit 给这个客服 Agent 写 spec + eval plan。
```

`SKILL.md` 会先判断模式（M0 快速任务 / M1 MVP / M2 生产 / M3 Agent / M4 评审 / M5 架构设计），再只读需要的参考文件。

---

## 目录结构

```text
ai-native-project-kit/
├─ SKILL.md                       # 入口：规则、路由、默认流程、质量门
├─ README.md                      # 本文件
├─ knowledge/                     # 三仓章节笔记（不只有 skill 骨架）
│  ├─ 00-overview.md              # 合体框架、桥接、概念矩阵
│  ├─ easy-vibe.md                # 5 模块 / 47 章
│  ├─ hello-agents.md             # 5 部分 / 16 章
│  ├─ awesome-architecture.md     # 7 模块 / 51 条目（40 教程 + 模板/案例）
│  └─ raw/                        # 可再生成笔记的结构化 JSON
├─ references/
│  ├─ 00-pipeline.md              # 统一六阶段流水线
│  ├─ 01-architecture-playbook.md # 架构判断、C4/ADR、取舍、失败、演进
│  ├─ 02-agent-playbook.md        # Agent 决策、工具/MCP、RAG、上下文、评测
│  ├─ 03-delivery-playbook.md     # MVP、全栈、部署、支付、跨端、上线
│  ├─ 04-repo-map.md              # 三仓精确阅读地图
│  └─ 05-source-notes.md          # 来源、许可、边界
├─ patterns/                      # 可运行/可改造的参考实现
│  ├─ react_agent.py              # ReAct + 工具 + 停止条件
│  ├─ rag_pipeline.py             # 权限过滤 + 引用 + 无答案策略
│  ├─ eval_runner.py              # 评测集/指标/门禁
│  ├─ eval_cases.sample.jsonl     # 评测样例数据
│  ├─ tool_contract.md            # 工具合同模板
│  └─ vertical-slice.md           # 纵向切片拆解
├─ templates/
│  ├─ project-brief.md
│  ├─ adr.md
│  ├─ agent-spec.md
│  ├─ eval-plan.md
│  ├─ eval-plan.example.md        # 填好的评测示例
│  └─ delivery-checklist.md
├─ examples/
│  ├─ m1-ai-copywriting.md        # M1 短周期 MVP 示例
│  └─ ai-support-workspace.md     # 企业 AI 客服完整走查
└─ scripts/
   ├─ build-knowledge.mjs         # 从 raw JSON 重新生成章节笔记
   ├─ install.ps1                 # 安装到 DSH / 当前项目
   └─ validate.mjs                # 校验 frontmatter、链接、文件
```

---

## 三个仓库怎么被“炼化”

| 来源 | 被提炼成 | 在本 kit 中的位置 |
|---|---|---|
| **Awesome-Architecture** | 需求→约束→质量属性→取舍、C4、ADR、失败/规模/演进、模板与案例 | `01-architecture-playbook.md`、`04-repo-map.md` |
| **Hello-Agents** | Agent 决策、ReAct/Plan-and-Reflection、工具/MCP、记忆/RAG、上下文工程、评测、训练 | `02-agent-playbook.md` |
| **Easy-Vibe** | 需求验证、原型、全栈、部署、支付、跨端、Claude Code/Spec Coding | `knowledge/easy-vibe.md`、`03-delivery-playbook.md` |
| **三仓原文** | 114 条章节/条目笔记 + 合体总览 + 可再生成 JSON | `knowledge/`、`knowledge/raw/` |
| **可执行参考** | ReAct、RAG、Eval、工具合同、纵向切片 | `patterns/` |

本 kit 只保留“做项目时用得上”的判断、流程、清单和模板；需要读原文时，用 `04-repo-map.md` 精确定位，而不是从目录第一页开始。

---

## 常用入口

- 新项目 → `references/00-pipeline.md` + `templates/project-brief.md`
- 做架构 → `references/01-architecture-playbook.md` + `templates/adr.md`
- 做 Agent → `references/02-agent-playbook.md` + `templates/agent-spec.md` + `templates/eval-plan.md` + `patterns/react_agent.py`
- 做 RAG → `patterns/rag_pipeline.py` + `references/02-agent-playbook.md` §6
- 做产品/上线 → `references/03-delivery-playbook.md` + `templates/delivery-checklist.md`
- 查原仓库章节 → `knowledge/<repo>.md` + `references/04-repo-map.md`
- 看完整例子 → `examples/m1-ai-copywriting.md`、`examples/ai-support-workspace.md`
- 跑评测 → `templates/eval-plan.example.md` + `patterns/eval_runner.py`

---

## 校验

```bash
node scripts/validate.mjs
```

会检查：

- `SKILL.md` 的 YAML frontmatter（name / description / kebab-case）；
- `SKILL.md` 长度是否适合作为 skill 加载；
- 章节笔记、参考手册、模板、pattern、示例是否齐全；
- 相对链接是否存在。

也可以单独检查 Python 参考代码语法（需要 Python）：

```bash
npm run check:patterns
```

从 `knowledge/raw/*.json` 重新生成章节笔记：

```bash
npm run knowledge
```

---

## 来源、许可与边界

- 三个上游仓库的版权与许可各自独立：
  - Easy-Vibe：CC BY-NC-SA 4.0
  - Hello-Agents：CC BY-NC-SA 4.0
  - Awesome-Architecture：MIT
- 本 kit 的原创编排、清单和模板以 **CC BY-NC-SA 4.0** 提供；商业使用前请核对上游许可。
- 本 kit 是非官方整理，不代表三个项目作者；课程、star、章节会变化，引用前请打开原仓库。
- 不替代法律、安全、合规、财务或生产事故评审。

详见 [NOTICE.md](NOTICE.md) 与 [LICENSE](LICENSE)。
