import assert from "node:assert/strict";
import { derive } from "./roadmap.mjs";

const rec = (instanceId, typeName, fieldValues) => ({ instanceId, record: { typeName, fieldValues } });
const obj = (id) => rec(id, "objective", { title: id });
const epic = (id, n) => rec(id, "epic", { title: id, issue_ref: [`r#${n}`] });
const serves = (s, t) => ({ relationType: "com.semanticops.programme/serves", sourceId: s, targetId: t });
const period = (id, a, b, rank) => rec(id, "period", { title: id, starts_on: a, ends_on: b, objective_rank: rank });
const base = [obj("A"), obj("B"), obj("C"), obj("D"), epic("e1", 1), epic("e2", 2), epic("e3", 3), epic("e4", 4), epic("e5", 5)];
const links = [serves("e1", "A"), serves("e2", "B"), serves("e3", "C"), serves("e4", "D")];
const q4 = period("q4", "2026-10-01", "2026-12-31", ["A", "B", "C"]);

const r = derive([...base, q4], links, "2026-10-08");
const p = Object.fromEntries(r.epics.map((e) => [e.ref, e.priority]));
assert.deepEqual([p["r#1"], p["r#2"], p["r#3"]], ["P0", "P1", "P2"]); // rank -> tier
assert.equal(p["r#4"], null); // serves an unranked objective -> parked
assert.deepEqual(r.parked, ["r#4", "r#5"]); // unlinked epic parked too
assert.equal(derive([...base, q4, period("q1", "2027-01-01", "2027-03-31", ["D"])], links, "2027-02-01").epics[3].priority, "P0"); // date picks period
assert.throws(() => derive([...base, q4], links, "2027-01-15"), /0 periods/); // no active period
assert.throws(() => derive([...base, q4, period("x", "2026-12-31", "2027-03-31", [])], links, "2026-10-08"), /overlap/);
assert.throws(() => derive([...base, period("q4", "2026-10-01", "2026-12-31", ["e1"])], links, "2026-10-08"), /not an objective/);
console.log("roadmap.test: ok");

// Affirmed layer: an epic answering an affirmed problem shows the chain; a suggestion-only problem is ignored.
{
  const MNS = "com.semanticops.method";
  const rl = (t, s, d) => ({ relationType: t.includes("/") || t === "contains" ? t : `${MNS}/${t}`, sourceId: s, targetId: d });
  const data = [...base, q4, rec("pr", "problem", { problem_id: "SP-01", title: "pr" }), rec("ps", "problem", { problem_id: "SP-02", title: "ps" }),
    rec("pe", "persona", { title: "Writer" }), rec("cl", "cluster", { title: "Cluster X" })];
  const rels = [...links, rl("answers", "e1", "pr"), rl("answers", "e1", "ps"), rl("held-by", "pr", "pe"), rl("contains", "cl", "pr"), rl("addresses", "A", "cl")];
  const [e1] = derive(data, rels, "2026-10-08", new Set(["pr", "pe", "cl"])).epics;
  assert.deepEqual(e1.answers, [{ problem: "SP-01", persona: "Writer", cluster: "Cluster X", objective: "A" }]); // SP-02 is a suggestion only
  assert.equal(derive(data, rels, "2026-10-08").epics[0].answers, undefined); // empty Affirmed layer: unchanged output
  assert.equal(derive(data, rels, "2026-10-08", new Set(["pr", "pe", "cl"])).epics[0].priority, "P0"); // ranking unaffected
}
console.log("roadmap.test (affirmed layer): ok");
