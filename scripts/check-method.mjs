#!/usr/bin/env node
// check-method.mjs — structural rules the method package cannot declare itself (no cardinality in SRS):
// every tension contains exactly two poles; every principle governs exactly one tension and leans
// toward exactly one of that tension's poles. Runs over both layers (Suggestions and Affirmed).
import { execFileSync } from "child_process";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const MNS = "com.semanticops.method";

/** records: `srs record list` entries; relations: `srs relation list` entries. Returns error strings. */
export function checkMethod(records, relations) {
  const type = (n) => records.filter((r) => r.record.typeName === n);
  const label = (r) => `${r.record.typeName} ${r.record.fieldValues.title ?? r.record.fieldValues.statement} (${r.instanceId.slice(0, 8)})`;
  const out = (id, t) => relations.filter((x) => x.sourceId === id && x.relationType === t).map((x) => x.targetId);
  const errors = [];
  for (const t of type("tension")) {
    const poles = out(t.instanceId, "contains").filter((id) => records.some((r) => r.instanceId === id && r.record.typeName === "pole"));
    if (poles.length !== 2) errors.push(`${label(t)} contains ${poles.length} poles, expected exactly 2`);
  }
  for (const p of type("principle")) {
    const gov = out(p.instanceId, `${MNS}/governs`);
    if (gov.length !== 1) { errors.push(`${label(p)} governs ${gov.length} tensions, expected exactly 1`); continue; }
    const poles = out(gov[0], "contains");
    const leans = out(p.instanceId, `${MNS}/leans-toward`);
    if (leans.length !== 1 || !poles.includes(leans[0])) errors.push(`${label(p)} must lean toward exactly one pole of its tension`);
  }
  return errors;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const cli = process.env.SRS_CLI_PATH?.trim() || "srs";
  const run = (args) => JSON.parse(execFileSync(cli, [...args, "--repo", ROOT], { encoding: "utf8", maxBuffer: 1 << 28 })).payload;
  const errors = checkMethod(run(["record", "list"]).records, run(["relation", "list"]).relations);
  if (errors.length) { errors.forEach((e) => console.error(`✗ ${e}`)); process.exit(1); }
  console.log("✓ method: every tension has 2 poles; every principle governs one tension and leans toward one of its poles.");
}
