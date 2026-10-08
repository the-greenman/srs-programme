#!/usr/bin/env node
/**
 * One-shot: migrate the frozen v12 strategy roadmap (srs docs/strategy/roadmap.json) into this
 * repository through the pinned CLI (srs-programme#15 U2). Committed, run once, then deleted.
 *   node scripts/migrate-roadmap-v12.mjs <path-to-roadmap.json>
 * record create cannot preserve instanceIds, so new ones are minted and the v12 readable key is
 * kept in `strategy_key`.
 */
import { execFileSync } from "child_process";
import { randomUUID } from "crypto";
import { readFileSync } from "fs";

const CLI = process.env.SRS_CLI_PATH || "srs";
const NS = "com.semanticops.programme";
const d = JSON.parse(readFileSync(process.argv[2], "utf8"));
const cli = (args, obj) => {
  const o = JSON.parse(execFileSync(CLI, [...args, "--repo", "."], { input: JSON.stringify(obj), encoding: "utf8" }));
  if (!o.ok) { console.error(args.join(" "), JSON.stringify(o)); process.exit(1); }
  return o;
};

const label = (k) => k.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());
const md = (x) => Array.isArray(x)
  ? x.map((i) => `- ${typeof i === "object" ? Object.values(i).join(": ") : i}`).join("\n")
  : String(x);
const body = (o, skip) => Object.entries(o)
  .filter(([k, v]) => !skip.includes(k) && v != null && v.length !== 0)
  .map(([k, v]) => `## ${label(k)}\n\n${md(v)}`).join("\n\n");
const evid = (e) => e.map((x) => `${x.type}: ${x.ref}${x.kind ? ` (${x.kind})` : ""}`);

const idOf = {};
const make = (type, key, fieldValues) => {
  const o = cli(["record", "create", "--type", `${NS}/${type}`], { fieldValues: { strategy_key: key, ...fieldValues } });
  idOf[key] = o.payload.record?.instanceId ?? o.payload.instanceId;
  if (!idOf[key]) { console.error(JSON.stringify(o)); process.exit(1); }
};
const clean = (o) => Object.fromEntries(Object.entries(o).filter(([, v]) => v != null && v.length !== 0));

for (const b of d.boundaries)
  make("boundary", b.id, clean({ title: `${b.id} ${b.name}`, summary: b.promise, issue_ref: [...new Set(b.tasks.map((t) => t.ref))],
    body: body(b, ["id", "name", "promise", "tasks", "instanceId"]) }));
for (const s of d.capabilityPipelines.flatMap((p) => p.stages))
  make("capability_stage", s.id, clean({ title: `${s.id} ${s.name}`, summary: s.promise, issue_ref: s.executionAnchors,
    body: body(s, ["id", "name", "promise", "executionAnchors", "instanceId"]) }));
for (const c of d.standardContracts)
  make("strategy_contract", c.id, clean({ title: c.name, summary: c.promise, stability: c.stability,
    issue_ref: c.sources.filter((x) => x.type === "issue").map((x) => x.ref),
    body: body(c, ["id", "name", "promise", "stability", "instanceId", "kind"]) }));
for (const a of d.assessments)
  make("assessment", a.id, clean({ title: a.title, reality_state: a.state, summary: a.exists, evidence: evid(a.evidence),
    body: body(a, ["id", "title", "state", "evidence", "instanceId", "kind"]) }));

const RT = { "com.semanticops.strategy/": `${NS}/` };
let n = 0;
for (const l of d.links) {
  const t = Object.entries(RT).reduce((s, [a, b]) => s.replace(a, b), l.type);
  cli(["relation", "create"], { relationId: randomUUID(), relationType: t, sourceInstanceId: idOf[l.from], targetInstanceId: idOf[l.to], createdAt: new Date().toISOString() });
  n++;
}
console.log(`records ${Object.keys(idOf).length}, relations ${n}`);
