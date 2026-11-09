#!/usr/bin/env node
/**
 * Build human/agent-readable knowledge notes from knowledge/raw/*.json.
 * Source data was extracted from the public README/docs of the three repositories.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const RAW = path.join(ROOT, 'knowledge', 'raw');
const OUT = path.join(ROOT, 'knowledge');

const order = ['easy-vibe', 'hello-agents', 'awesome-architecture'];
const repos = order.map((id) => JSON.parse(fs.readFileSync(path.join(RAW, `${id}.json`), 'utf8')));
const combined = JSON.parse(fs.readFileSync(path.join(RAW, 'combined.json'), 'utf8'));
const byId = Object.fromEntries(repos.map((r) => [r.id, r]));

const line = (s = '') => `${s}\n`;
const h = (level, text) => `${'#'.repeat(level)} ${text}\n`;

function finish(parts) {
  return parts.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
}

function metaLine(repo) {
  const m = repo.meta || {};
  const bits = [
    m.stars ? `★ ${m.stars}` : '',
    m.forks ? `⑂ ${m.forks}` : '',
    m.language || '',
    m.license || '',
    m.fetchedAt ? `数据 ${m.fetchedAt}` : m.updated ? `更新 ${m.updated}` : ''
  ].filter(Boolean);
  return bits.join(' · ');
}

function renderOverview() {
  const out = [];
  out.push(h(1, '三仓总览 · 一条 AI 原生开发链路'));
  out.push('> 本文件由 `knowledge/raw/combined.json` 生成；上游来源与许可见 `NOTICE.md`。\n');
  out.push(combined.oneLine + '\n');
  out.push(`**合体公式：** ${combined.formula}\n`);
  out.push(combined.thesis + '\n');
  out.push(h(2, '三层结构'));
  out.push('| 层 | 负责 | 对应仓库 | 关键词 |');
  out.push('|---|---|---|---|');
  for (const layer of combined.layers || []) {
    out.push(`| ${layer.name} | ${layer.role} | ${layer.repoName || layer.repoId} | ${(layer.keywords || []).join(' / ')} |`);
  }
  out.push('');
  out.push(h(2, '三仓之间的桥'));
  for (const bridge of combined.bridges || []) {
    out.push(`### ${bridge.label}\n`);
    out.push(`${byId[bridge.from]?.name || bridge.from} → ${byId[bridge.to]?.name || bridge.to}\n`);
    out.push(bridge.detail + '\n');
  }
  out.push(h(2, '合体读法'));
  for (const step of combined.readingOrder || []) {
    out.push(`- **${step.step} · ${step.title}**（${byId[step.repoId]?.name || step.repoId}）：${step.why}`);
  }
  out.push('');
  out.push(h(2, '同一概念，三仓各讲什么'));
  out.push('| 概念 | Easy-Vibe | Hello-Agents | Awesome-Architecture |');
  out.push('|---|---|---|---|');
  for (const item of combined.conceptMatrix || []) {
    out.push(`| ${item.concept} | ${item['easy-vibe']} | ${item['hello-agents']} | ${item['awesome-architecture']} |`);
  }
  out.push('');
  out.push(`> ${combined.caveat}\n`);
  return finish(out);
}

function renderRepo(repo) {
  const out = [];
  out.push(h(1, `${repo.name} · 章节知识笔记`));
  out.push(`> ${repo.cnTitle}\n`);
  out.push(`> 原仓库：${repo.repo}\n`);
  out.push(`> 在线文档：${repo.site}\n`);
  out.push(`> ${metaLine(repo)}\n`);
  out.push(h(2, '一句话'));
  out.push(repo.oneLine + '\n');
  out.push(h(2, '定位'));
  out.push(repo.positioning + '\n');
  out.push(h(2, '它到底讲什么'));
  for (const item of repo.whatItIs || []) out.push(`- ${item}`);
  out.push('');
  out.push(h(2, '它不是什么'));
  out.push(repo.notWhat + '\n');
  out.push(h(2, '适合谁 / 前置 / 产出 / 难度'));
  out.push(`- 适合：${repo.audience}`);
  out.push(`- 前置：${repo.prerequisites}`);
  out.push(`- 产出：${repo.outcome}`);
  out.push(`- 难度：${repo.difficulty} / 5（${repo.difficultyLabel}）`);
  out.push(`- 建议时间：${repo.timeBudget}\n`);
  out.push(h(2, '框架结构'));
  out.push(`**${repo.framework.name}** — ${repo.framework.summary}\n`);
  out.push(`> ${repo.framework.formula}\n`);
  out.push('| 层 | 角色 | 说明 | 关键词 |');
  out.push('|---|---|---|---|');
  for (const layer of repo.framework.layers || []) {
    out.push(`| ${layer.name} | ${layer.role} | ${layer.description} | ${(layer.items || []).join(' / ')} |`);
  }
  out.push('');
  out.push(h(2, '模块与章节'));
  repo.modules.forEach((mod, i) => {
    out.push(h(3, `${i + 1}. ${mod.title}`));
    out.push(`- 角色：${mod.role}`);
    out.push(`- 摘要：${mod.summary}`);
    out.push(`- 产出：${mod.output}`);
    if ((mod.keyPoints || []).length) out.push(`- 要点：${mod.keyPoints.join('；')}`);
    out.push('');
    out.push('| # | 章节 | 这一章讲什么 |');
    out.push('|---|---|---|');
    (mod.chapters || []).forEach((ch, j) => {
      out.push(`| ${String(j + 1).padStart(2, '0')} | [${ch.title}](${ch.url}) | ${ch.summary} |`);
    });
    out.push('');
  });
  out.push(h(2, '最短学习路径'));
  for (const step of repo.path || []) {
    out.push(`- **${step.step} · ${step.title}** — ${step.goal}；产出：${step.result}`);
  }
  out.push('');
  out.push(h(2, '最值钱的地方'));
  for (const item of repo.highlights || []) out.push(`- ${item}`);
  out.push('');
  out.push(h(2, '学习时注意'));
  for (const item of repo.blindSpots || []) out.push(`- ${item}`);
  out.push('');
  out.push(h(2, '它在三仓里的位置'));
  out.push(`- 角色：${repo.crossRepo.role}`);
  out.push(`- 上游：${repo.crossRepo.upstream}`);
  out.push(`- 下游：${repo.crossRepo.downstream}`);
  out.push(`- 桥接：${repo.crossRepo.bridge}`);
  out.push(`- 共享概念：${(repo.crossRepo.sharedConcepts || []).join('、')}\n`);
  out.push(h(2, '数据来源'));
  for (const source of repo.sources || []) out.push(`- ${source}`);
  out.push('');
  out.push(`> 生成时间：${new Date().toISOString().slice(0, 10)}。章节标题/摘要来自 README 与公开文档的结构化整理；以上游最新内容为准。\n`);
  return finish(out);
}

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, '00-overview.md'), renderOverview(), 'utf8');
for (const repo of repos) {
  fs.writeFileSync(path.join(OUT, `${repo.id}.md`), renderRepo(repo), 'utf8');
  console.log(`✓ ${repo.id}.md · ${repo.modules.length} modules / ${repo.modules.reduce((n, m) => n + m.chapters.length, 0)} chapters`);
}
fs.writeFileSync(path.join(OUT, 'README.md'), `# 三仓知识笔记\n\n> 由 \`knowledge/raw/*.json\` 生成；数据整理于 2026-11-06，来源为三个仓库的 README 与公开文档。\n\n- [00-overview.md](00-overview.md) — 三仓合体：判断 → 智能 → 交付\n- [easy-vibe.md](easy-vibe.md) — Vibe Coding 产品实战\n- [hello-agents.md](hello-agents.md) — 从零构建智能体\n- [awesome-architecture.md](awesome-architecture.md) — 架构判断与系统设计\n\n原始结构化数据保存在 [raw/](raw/)；需要引用具体章节时打开对应源仓库。\n`, 'utf8');
console.log('✓ knowledge/README.md');
