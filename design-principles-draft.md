# Design principles for packages, types and fields (DRAFT for owner review)

Status: draft, not committed. Not normative: under the level test (`rfc-decision-c20fcff8`) these are authoring and governance rules, so they belong beside `docs/charter/decision-compass.md` in `srs`, not in the spec. Nothing here has been ruled; sections marked **Proposal** need the owner's decision.

## 0. What is already ruled (we build on it, we do not restate it)

| Rule | Source |
|---|---|
| Field semantics are immutable; a Type cannot override them; `displayLabel` is rendering only. Different semantics means a new Field with a new UUID. | srs-usage.md |
| Changing a Field's or Type's `namespace` or `name` is a new UUID, not a new version. | srs-usage.md |
| One name over many; increment over edit; identifier over label. | Compass cells Description, Versioning, Identity |
| Presentation is view-owned, never type-owned. | RFC-015, RFC-036 |
| A construct has one layer; behaviour enters the standard only with a contract, otherwise it is application-private. | Layer rules 4 and 6 |
| Packages require other packages by `packageId` and a version in the same compatibility band, at least the stated version. | RFC-044 |
| Structure is declared, never inferred. | Earth column principle |

Everything below fills the gaps these leave: when to reuse, when to add, where it lives, and what each change costs.

## 1. Fields

**F1. A field is one meaning, not a column.** Test: write the definition as one sentence. If it is true of every type that uses the field without "for a problem... for a remedy...", it is one field. If the sentence needs a clause per type, it is several fields sharing a name.

**F2. Reuse or new: three questions, all must be yes to reuse.**
1. Same meaning (the F1 sentence is true as written)?
2. Same range: datatype, cardinality, format, value domain and vocabulary?
3. Could a consumer (validator, view, agent) treat the field identically on both types?

Any "no" means a new field. A shared name is not reuse; a shared UUID is.

**F3. A name collision with a different range is a defect in the name.** `kind` in method (vocabulary 7d21013f) and `kind` in argument (vocabulary 0422ac58) are correctly different fields, but identical names make them look interchangeable. Prefer a name that carries the difference (`problem_kind`, `statement_kind`).

**F4. Generic fields live once, in a base package.** `title`, `description`, `summary`, `purpose`-style fields that mean the same everywhere are defined in a package everything may require (the core package or a small common one), and other packages reference them through a declared requirement. They are never copied. Domain fields live in the domain's package.

**F5. A reference to a record is a reference, never a string.** Use a `ref` datatype or a Relation. A string holding an id or a label is inferred structure. (Citation ids such as `SP-nn` are fine: they are names for humans and are not what the system joins on.)

**F6. A fact about one record belongs on that record.** A flag, state or attribute of a single paragraph is a field (or lifecycle state) on that type. Collecting it into a list on a different record (as `hidden_instance_ids` does) is allowed only when the fact is application-private, per-editor state that is not part of the record's meaning.

**F7. No presentation, no behaviour.** A field never carries ordering, rendering hints or UI behaviour (F: RFC-015/036).

**F8. Every field has a one-sentence description that says what it means, not where it is shown.** Guidance for agents goes in `aiGuidance`.

## 2. Types

**T1. A type is a thing that can be pointed at.** If nothing will ever reference an instance, create or relate it, it is a field or a composite value, not a type. If it is pointed at, relation-ed or has a lifecycle, it is a type.

**T2. One type or two.** Same fields, same relations, same lifecycle, different flavour: one type with a `kind` vocabulary. Different relations, lifecycle or validity rules: separate types. If two types share most of their fields, ask which of these it is before adding the second.

**T3. `required` is a promise about validity.** It is never a UI convenience. A required field is what makes a record invalid without it.

**T4. State is lifecycle, membership is containment, order is the container's.** A type does not carry these.

**T5. Application-private state stays out of shared packages.** A package that other tools or repositories install describes shared meaning only. Editor bookkeeping (selection, hidden, draft/bin containers) is either application-private or earns a contract (layer rule 6).

## 3. Packages

**P1. A package has a one-sentence purpose and is one unit of release.** Every type exists to serve that sentence. If the sentence needs "and", suspect two packages.

**P2. Dependencies point down and form no cycle.** A package may require another only to reuse its definitions (F4), by `packageId`. Nothing below may know of what is above (layer rule 5).

**P3. Add to a package or start a new one.** Add when the concept serves the purpose sentence and its consumers are the package's consumers. Start a new package when the audience, release cadence or required dependencies differ, so that adding it would force an unrelated dependency on existing consumers.

**P4. Two packages naming the same concept is a decision, not an accident.** Method's `problem` and argument's `problem statement` are the live example. Exactly one of three outcomes must be stated: merge; bridge (a declared relation such as `derived-from` or `refines`, plus a note); or declare them disjoint and say why. Silence is the failure.

## 4. Assessing coherence

A package is coherent when it passes these, each checkable:

| Check | Pass condition | Automatable |
|---|---|---|
| Purpose | One sentence, every type traces to it | review |
| Connected | The graph of types (ref fields and relation types) is connected; no orphan type | yes |
| No cross-package duplicates | No field name defined with differing UUIDs in two packages without a stated reason | yes |
| No in-package near-duplicates | No two fields with similar descriptions and the same range | yes (lexical `similar`) |
| Descriptions | Every field and type has one, no "TODO" | yes |
| Dependencies | Acyclic, declared by `packageId`, none unused | yes |
| Vocabularies | Closed domains name a vocabulary; no vocabulary used by one field only without reason | yes |
| Private state | No editor-only state in a shared package | review |

Today's measured baseline in srs-programme: 13 field names are defined in two or three packages with different UUIDs (`title` x3, `context` x3; `statement`, `kind`, `purpose`, `problem_id`, `falsifier`, `brief`, `description`, `use_when`, `actor_id`, `size`, `governed_repos` x2). Some are right (different ranges), some are copies. No tool currently says which.

## 5. What a change costs (Proposal)

The versioning arithmetic is not yet written down for definitions. Proposed mapping, on top of RFC-044 bands:

| Change | Definition version | Package version | Existing records | Route |
|---|---|---|---|---|
| Add an optional field to a type | Type +1 | MINOR | stay valid | agent may propose, auto-merge when non-normative |
| Add a type or a field no type uses | none | MINOR | none | same |
| Add a term to an open or closed vocabulary | Vocabulary +1 | MINOR | stay valid | same |
| Add a required field | Type +1 | MAJOR | invalid until migrated | owner-merge, migration shipped |
| Change a field's meaning or range | New UUID, old superseded | MAJOR | migration | owner-merge |
| Remove or tighten (drop a term, narrow a range) | New version, `supersedes` | MAJOR | migration | owner-merge |
| Rename | New UUID (srs-usage rule) | MAJOR | migration | owner-merge |
| New package or new dependency | n/a | 0.1.0 / n/a | none | owner-merge (P3, P4 decisions stated) |

Open point: field `version` is an integer yet field semantics are immutable. State what a field version increment may change (description wording? `aiGuidance`? nothing?) so that "increment" has a defined meaning.

## 6. Procedure before adding anything

1. Write the F1 sentence. Search for it (`find`, `similar`) in this package, its requirements and the other packages.
2. Run F2. Reuse if all three are yes.
3. If new: F3 (name), F4 (home), F5 (ref or string), F6 (record or private state).
4. For a type: T1, T2.
5. For a package: P1 to P4.
6. Classify the change in section 5 and take the route in its last column. State the F1 sentence, the reuse search and the classification in the PR body.

## 7. Applying it to the two blocked issues

- **srs-web#571 (essay domain and map).** The map's domain is a record in method's `domain` type. By F5 the essay stores a `ref`, not a string (rejects option B). By P2 the essay package requires the method package by `packageId` and references its domain, problem and remedy types; it does not copy them. That is option A with the dependency made explicit. P4 applies: the muSrs argument model and the method model both describe problems, and #571 says not to merge them, so the bridge or disjoint statement must be written, not skipped.
- **srs-web#569 (feedback wanted flag).** By F6 the flag is a fact about one paragraph. If it is part of the essay's meaning (agents read it), it is an optional boolean on the paragraph type: a section 5 MINOR change an agent can propose. If it is editor-only it joins `hidden_instance_ids` in document-state. The choice is the owner's: is "feedback wanted" meaning or editor state?

## 8. Questions for the owner

1. Where do these live: a charter page beside the compass in `srs` (recommended), or a handbook in clerk?
2. Is a common base package for generic fields (F4) acceptable, given the core package (RFC-029) already exists?
3. Section 5: confirm the MINOR/MAJOR mapping and the routes, and define the field-version question.
4. Should an agent be allowed to make the "optional field, same package" change unattended (section 5, first row)?
5. For P4: ruling on method `problem` against argument `problem statement`: merge, bridge or disjoint.
