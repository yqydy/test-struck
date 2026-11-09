#!/usr/bin/env node
/**
 * Validate the local skill bundle:
 * - SKILL.md frontmatter (name/description, kebab-case)
 * - body size suitable for a skill loader
 * - required files and relative Markdown links
 * No dependencies.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const errors = [];
const warnings = [];

const required = [
  'SKILL.md',
  'README.md',
  'LICENSE',
  'NOTICE.md',
  'knowledge/README.md',
  'knowledge/00-overview.md',
  'knowledge/easy-vibe.md',
  'knowledge/hello-agents.md',
  'knowledge/awesome-architecture.md',
  'knowledge/raw/easy-vibe.json',
  'knowledge/raw/hello-agents.json',
  'knowledge/raw/awesome-architecture.json',
  'knowledge/raw/combined.json',
  'references/00-pipeline.md',
  'references/01-architecture-playbook.md',
  'references/02-agent-playbook.md',
  'references/03-delivery-playbook.md',
  'references/04-repo-map.md',
  'references/05-source-notes.md',
  'patterns/README.md',
  'patterns/react_agent.py',
  'patterns/rag_pipeline.py',
  'patterns/eval_runner.py',
  'patterns/eval_cases.sample.jsonl',
  'patterns/tool_contract.md',
  'patterns/vertical-slice.md',
  'templates/project-brief.md',
  'templates/adr.md',
  'templates/agent-spec.md',
  'templates/eval-plan.md',
  'templates/eval-plan.example.md',
  'templates/delivery-checklist.md',
  'examples/README.md',
  'examples/m1-ai-copywriting.md',
  'examples/ai-support-workspace.md'
];

for (const rel of required) {
  if (!fs.existsSync(path.join(ROOT, rel))) errors.push(`缺少文件：${rel}`);
}

const skillPath = path.join(ROOT, 'SKILL.md');
if (!fs.existsSync(skillPath)) {
  console.error('✖ 缺少 SKILL.md');
  process.exit(1);
}

const text = fs.readFileSync(skillPath, 'utf8');
const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
if (!match) {
  errors.push('SKILL.md 缺少 YAML frontmatter（--- ... ---）');
} else {
  const yaml = match[1];
  const get = (key) => {
    const line = yaml.split(/\r?\n/).find((l) => l.startsWith(`${key}:`));
    return line ? line.slice(key.length + 1).trim().replace(/^["']|["']$/g, '') : '';
  };
  const name = get('name');
  const description = get('description');
  const whenToUse = get('whenToUse');
  if (!name) errors.push('frontmatter 缺少 name');
  if (!description) errors.push('frontmatter 缺少 description');
  if (name && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)) errors.push(`name 不是 kebab-case：${name}`);
  if (description && description.length > 1200) warnings.push(`description 偏长：${description.length} chars`);
  if (whenToUse && whenToUse.length > 1200) warnings.push(`whenToUse 偏长：${whenToUse.length} chars`);
  if (name && name !== path.basename(ROOT)) warnings.push(`name "${name}" 与目录名 "${path.basename(ROOT)}" 不一致`);
}

const body = match ? text.slice(match[0].length) : text;
if (text.length > 8192) errors.push(`SKILL.md 共 ${text.length} chars，超过 8192 的常见加载阈值`);
else if (text.length > 7800) warnings.push(`SKILL.md 共 ${text.length} chars，接近 8192 阈值`);

function checkLinks(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const re = /\[[^\]]*\]\(([^)\s]+)\)/g;
  let m;
  while ((m = re.exec(raw))) {
    const target = m[1];
    if (/^(https?:|mailto:|#)/i.test(target)) continue;
    const clean = target.split('#')[0];
    if (!clean || !/\.md$/i.test(clean)) continue;
    const resolved = path.resolve(path.dirname(file), clean);
    if (!fs.existsSync(resolved)) {
      errors.push(`${path.relative(ROOT, file)} 链接不存在：${target}`);
    }
  }
}

for (const rel of required.filter((r) => /\.(md)$/i.test(r))) {
  const full = path.join(ROOT, rel);
  if (fs.existsSync(full)) checkLinks(full);
}

// Template headings sanity: each template should have at least one H1 or H2.
for (const rel of required.filter((r) => r.startsWith('templates/') && r.endsWith('.md'))) {
  const raw = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  if (!/^#{1,2}\s+/m.test(raw)) errors.push(`${rel} 缺少标题`);
}

console.log(`\nAI Native Project Kit · validation`);
console.log(`  root: ${ROOT}`);
console.log(`  SKILL.md: ${text.length} chars`);
console.log(`  files: ${required.filter((r) => fs.existsSync(path.join(ROOT, r))).length}/${required.length}`);
for (const w of warnings) console.warn(`  ⚠ ${w}`);
if (errors.length) {
  console.error('\n✖ 校验失败：');
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log('\n✓ 校验通过\n');
