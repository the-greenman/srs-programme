#!/usr/bin/env node
/**
 * roadmap.mjs — derive epic priority from the active period's objective ranking (srs-programme#15).
 * Rank 1 -> P0, 2 -> P1, 3+ -> P2; an epic serving no ranked objective is parked.
 *
 *   node scripts/roadmap.mjs --json [--today YYYY-MM-DD]
 *   node scripts/roadmap.mjs --explain <repo#n>
 *   node scripts/roadmap.mjs --apply [--dry-run | --yes]   (dry-run unless --yes; needs GHP_SCRIPT for priorities)
 *
 * The only writer of epic priority. Owners reprioritise by editing a period's objective_rank.
 */
import { execFileSync } from "child_process";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const NS = "com.semanticops.programme";
const OWNER = "the-greenman";

/** records: `srs record list` entries; relations: `srs relation list` entries. Throws on a broken ranking. */
export function derive(records, relations, today) {
  const rows = records.map((r) => ({ id: r.instanceId, type: r.record.typeName, fv: r.record.fieldValues }));
  const byId = new Map(rows.map((r) => [r.id, r]));
  const periods = rows.filter((r) => r.type === "period").sort((a, b) => a.fv.starts_on.localeCompare(b.fv.starts_on));
  for (let i = 1; i < periods.length; i++)
    if (periods[i].fv.starts_on <= periods[i - 1].fv.ends_on) throw new Error(`periods overlap: ${periods[i - 1].fv.title} and ${periods[i].fv.title}`);
  const covering = periods.filter((p) => p.fv.starts_on <= today && today <= p.fv.ends_on);
  if (covering.length !== 1) throw new Error(`${covering.length} periods cover ${today}; exactly one required`);
  const period = covering[0];
  const ranking = period.fv.objective_rank ?? [];
  for (const id of ranking)
    if (byId.get(id)?.type !== "objective") throw new Error(`objective_rank of ${period.fv.title} references ${id}, which is not an objective`);
  const tier = (rank) => (rank == null ? null : `P${Math.min(rank, 3) - 1}`);
  const rankOf = (id) => (ranking.includes(id) ? ranking.indexOf(id) + 1 : null);
  const objectives = rows.filter((r) => r.type === "objective")
    .map((o) => ({ id: o.id, title: o.fv.title, rank: rankOf(o.id), tier: tier(rankOf(o.id)) }))
    .sort((a, b) => (a.rank ?? 99) - (b.rank ?? 99));
  const epics = rows.filter((r) => r.type === "epic").map((e) => {
    const served = relations.filter((l) => l.relationType === `${NS}/serves` && l.sourceId === e.id)
      .map((l) => objectives.find((o) => o.id === l.targetId)).filter((o) => o?.rank != null)
      .sort((a, b) => a.rank - b.rank)[0];
    const [ref] = e.fv.issue_ref;
    const [repo, number] = ref.split("#");
    return { ref, refs: e.fv.issue_ref, repo, number: Number(number), title: e.fv.title,
      objective: served?.title ?? null, rank: served?.rank ?? null, priority: served?.tier ?? null, parked: !served };
  });
  return { activePeriod: { title: period.fv.title, starts_on: period.fv.starts_on, ends_on: period.fv.ends_on },
    objectives, epics, parked: epics.filter((e) => e.parked).map((e) => e.ref) };
}

function load() {
  const cli = process.env.SRS_CLI_PATH?.trim() || "srs";
  const run = (args) => JSON.parse(execFileSync(cli, [...args, "--repo", ROOT], { encoding: "utf8", maxBuffer: 1 << 28 })).payload;
  return [run(["record", "list"]).records, run(["relation", "list"]).relations];
}

function main(argv) {
  const arg = (k) => (argv.includes(k) ? argv[argv.indexOf(k) + 1] : undefined);
  const today = arg("--today") ?? new Date().toISOString().slice(0, 10);
  const result = derive(...load(), today);
  if (argv.includes("--explain")) {
    const ref = arg("--explain");
    const e = result.epics.find((x) => x.refs.includes(ref));
    if (!e) throw new Error(`${ref} is not a known epic`);
    console.log(e.parked
      ? `${ref} -> ${e.title} -> no ranked objective in ${result.activePeriod.title} -> parked`
      : `${ref} -> ${e.title} -> ${e.objective} -> rank ${e.rank} in ${result.activePeriod.title} -> ${e.priority}`);
  } else if (argv.includes("--apply")) {
    const live = argv.includes("--yes") && !argv.includes("--dry-run");
    const ghp = process.env.GHP_SCRIPT;
    if (live && !ghp) throw new Error("GHP_SCRIPT (path to gh-project.mjs) is required with --yes");
    const sh = (cmd, args, env = {}) => {
      console.log(`${live ? "run" : "dry-run"}: ${cmd} ${args.join(" ")}`);
      if (live) execFileSync(cmd, args, { stdio: "inherit", env: { ...process.env, ...env } });
    };
    for (const e of result.epics) {
      if (!e.parked) sh("node", [ghp ?? "$GHP_SCRIPT", "epic", "set", String(e.number), "--priority", e.priority], { GHP_STORY_REPO: e.repo });
      sh("gh", ["issue", "edit", String(e.number), "-R", `${OWNER}/${e.repo}`, e.parked ? "--add-label" : "--remove-label", "parked"]);
    }
  } else console.log(JSON.stringify(result, null, 2));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try { main(process.argv.slice(2)); } catch (err) { console.error(`✗ ${err.message}`); process.exit(1); }
}
