// Negative fixtures for checkGates (node:test, in-memory data). CI runs this.
import test from "node:test";
import assert from "node:assert/strict";
import { checkGates } from "./check-method.mjs";

const M = "com.semanticops.method";
const rec = (id, typeName, fieldValues = {}, createdBy = { kind: "human", id: "h" }) => ({ instanceId: id, record: { typeName, fieldValues, createdBy } });
const rel = (s, t, y) => ({ sourceId: s, relationType: y, targetId: t });
const base = () => ({
  records: [rec("p1", "problem", { problem_id: "SP-1", title: "P" }), rec("r1", "remedy", { title: "R", falsifier: "f" }),
    rec("e1", "epic", { title: "E" }), rec("o1", "objective", { title: "O" }), rec("pe", "period", { starts_on: "2026-01-01", objective_rank: ["o1"] })],
  relations: [rel("r1", "p1", `${M}/answers`), rel("e1", "r1", `${M}/implements`), rel("e1", "o1", "com.semanticops.programme/serves")],
  affirmed: new Set(["p1", "r1"]),
});
const run = (f) => { const b = base(); f(b); return checkGates(b.records, b.relations, b.affirmed, b.setAside ?? new Set()); };

test("good data is clean", () => assert.deepEqual(run(() => {}), { errors: [], warnings: [] }));
test("AI member of Affirmed", () => assert.match(run((b) => { b.records[0].record.createdBy = { kind: "ai", id: "a" }; }).errors[0], /AI actor/));
test("AI member of Set aside", () => assert.match(run((b) => { b.records[0].record.createdBy = { kind: "ai", id: "a" }; b.affirmed = new Set(["r1"]); b.setAside = new Set(["p1"]); }).errors[0], /Set aside/));
test("duplicate problem_id", () => assert.match(run((b) => { b.records.push(rec("p2", "problem", { problem_id: "SP-1" })); b.affirmed.add("p2"); }).errors[0], /duplicate problem_id SP-1 in Affirmed/));
test("remedy without affirmed problem", () => assert.match(run((b) => { b.affirmed.delete("p1"); }).errors[0], /answers no affirmed problem/));
test("remedy without falsifier", () => assert.match(run((b) => { b.records[1].record.fieldValues.falsifier = " "; }).errors[0], /no falsifier/));
test("epic on ranked objective without affirmed problem warns", () => {
  const r = run((b) => { b.affirmed.delete("p1"); b.affirmed.delete("r1"); });
  assert.equal(r.errors.length, 0);
  assert.match(r.warnings[0], /answers no affirmed problem/);
});
test("same problem_id across layers (a fork) is fine", () => assert.deepEqual(run((b) => b.records.push(rec("p2", "problem", { problem_id: "SP-1" }))).errors, []));
test("record in both layers", () => assert.match(run((b) => { b.setAside = new Set(["p1"]); }).errors[0], /both Affirmed and Set aside/));
test("unaffirmed remedy does not satisfy the epic", () => assert.match(run((b) => { b.affirmed.delete("r1"); }).warnings[0], /answers no affirmed problem/));
test("ended period ranks nothing", () => assert.deepEqual(run((b) => { b.records[4].record.fieldValues.ends_on = "2026-02-01"; b.affirmed.clear(); }).warnings, []));
