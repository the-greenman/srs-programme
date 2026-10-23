### s:0118e938 (srs spec)
Title: A construct has one layer: a crossing is a stated goal, never a design option
Chosen (the decision statement): Layer rule 4 is refined. Its ruling clause - a crossing is declared where it occurs, and the lower layer wins - stands. Its permission clause - 'where a layer legitimately carries another layer's data' - is withdrawn as a standing option.

The rule now reads: A CONSTRUCT HAS ONE LAYER. Every construct is defined on one plane and one layer, and its schema carries only that layer's data. A layer carries another layer's data only for a specific, named goal that cannot be met within one layer. That goal is stated in the decision or RFC that introduces the crossing, the crossing is declared at the site where it occurs, and conflicts resolve downward, visibly. Absent a stated goal the layer test fails: the proposal is re-drawn inside one layer, not accepted with a declaration attached. Identity conflicts remain fatal per the Earth rule - they are not crossings.

The two examples the original r
Alternatives considered (as recorded): (1) Leave rule 4 as written and rely on review to judge 'legitimately' case by case. Rejected: an undefined word in a rule is a preference, not a rule, and the container history shows how a preference erodes one RFC at a time. (2) Forbid crossings outright and retire Invariant 28's hints. Rejected: the hints serve a real goal (a readable record file without its package) and removing them is a breaking change with no consumer asking for it; a goal-gated exception keeps the one real case and closes the door on speculative ones. (3) Move the tightening into the Container decision alone. Rejected: the failure is general - any construct on any plane could grow a second plane's data by declaration - so the fix belongs in the layer register, and the Container ruling becomes its first application.

### s:0225099b (srs spec)
Title: Defaults arrive later, as one mechanism
Chosen (the decision statement): Defaults are an essential FUTURE capability, and both current defaultValue sites are removed now. `Field.defaultValue` (already ruled removed, #234 2026-08-08) and `FieldAssignment.defaultValue` are removed together in the #273 train — the latter EXPLICITLY SUPERSEDING #274's ledger row "Generate defaultValue". When defaults arrive they arrive once, as a single layered-override capability — a higher level overrides a lower: a Protocol may override a Type, which may override a Field — designed whole in its own RFC as a versioned metamodel capability. There must never be two ways of doing the job; no fragment of the old mechanism survives to seed a second way.
Alternatives considered (as recorded): - Define the consistent rule now: rejected by the owner's own conditional — the rule is not simple (three-layer resolution including a defaults-less Protocol layer; timing, required, inheritance, and sovereignty semantics; no corpus evidence to design against).
- Keep `FieldAssignment.defaultValue` per #274's ledger while removing the Field-level site: rejected — a half-specified single-site fragment contradicts the one-mechanism rule and pre-empts the future design's own choice of carrier.
- Remove without recording intent: rejected — the intent (defaults essential, layered override, one mechanism) is the part that must not be lost; this record and the roadmap entry carry it.

### s:0750c62f (srs spec)
Title: A Container is a declared selection: it lives on the expression plane
Chosen (the decision statement): A Container is a named, declared selection of instances. It lives on the EXPRESSION plane, at the selection layer. It carries no meaning of its own: its identity record is the semantic carrier, which is why a Container has no Fields (design-note 013).

MEANING between instances lives in Relations. The contains relation is the part-of tree - 'A is semantically inside B' - and it is the tree that the concept graph, navigation depth, layering and the tree walk are built on. A Container never asserts a semantic claim; that is a Relation's job.

Consequences, each following from the plane assignment rather than argued separately:

1. MEMBERSHIP IS DECLARED. A selection is a declaration. Container.memberInstanceIds and rootInstanceIds are the membership; the contains traversal is no longer a membership rule. Invariant I-66's traversal branch is superseded. This is RFC-034 Change C, adopted.

2
Alternatives considered (as recorded): (1) Container on the MEANING plane: membership is a semantic claim derived from contains. Keeps I-66 as written. Rejected: the scope claim and the semantic claim collapse into one, design-note 013's distinction is retired, and a Container becomes a meaning-bearer with no Fields - a strange object. RFC-034 would be withdrawn. (2) Two constructs: a semantic grouping in MEANING and a scope in EXPRESSION, each with a schema. Rejected: a new construct plus a migration of every existing container, creating two homes for grouping-of-instances against the one-way-per-goal preference. (3) Defer for more evidence. Rejected on timing: the formation phase is where a breaking change is cheap, and the question had already been deferred three times with nothing scheduled to answer it.

### s:0c403e15 (srs spec)
Title: Concepts describe themselves: bridging and introductory prose is the concept record's own prose
Chosen (the decision statement): A concept record carries the human-readable prose that introduces it and bridges to what follows. That prose is part of the concept, not an accessory to it, and it renders at the concept's heading in every projection of the corpus.

A Part's introduction is the Part concept's prose. There is no separate object holding the words that open a Part; the Part is a concept, and a concept describes itself.

No narrative leaf type is added. No presentation-only text is added to a Composition section. Where a reader needs to be told what is coming or how what they have just read connects to what follows, the concept that owns the material says it.
Alternatives considered (as recorded): A narrative leaf type, a Type whose records carry introductory and bridging prose as leaves under the concepts they bridge. Rejected: it is a type for prose-about-prose, it multiplies the records a reader and an author must keep in step, and it puts the introduction of a concept somewhere other than the concept. Presentation-only text on a Composition section, an authored string rendered before or between the section's members. Rejected: it is invisible to the spec-language checks, which only reach records, and it is unreusable across tellings, so every telling that needs the same bridge writes its own copy.

### s:0df19d60 (srs spec)
Title: Context order is declared on the Container as an ordered outline of entries; the Composition declares only where its order comes from
Chosen (the decision statement): The sequence and nesting of the records a document holds are declared on the document's Container, as the ordered list memberInstanceIds whose entries carry an instanceId and an optional depth. The set of instanceIds is the membership, read flat. Nesting is derived from depth and never stored. A Composition section names no record and holds no order: it declares only an ordering source, either arranged (render the container's entries in their own sequence and at their own depth) or rule (order by a field or by Rule [N+12]). Membership and nesting of scopes stay with Containers as rfc-decision-8aed3412 ruled, with childContainerIds for nested scopes; what is superseded is the single sentence that located context order in the Composition's memberOrder, which is retired. The precedes relation remains semantic order only and is neither removed nor read for presentation.
Alternatives considered (as recorded): Keep memberOrder and add depth to it inside the Composition. Rejected by the owner: it keeps record ids in a type-layer template and requires editing a versioned package definition on every drag. Declare order and nesting as contains or precedes edges per document. Rejected: an edge is a global claim and a record shared by two essays would have one parent, which is the context-on-an-edge outcome rfc-decision-8aed3412 already declined. A separate arrangement record referenced by the Container. Rejected: two objects per document that can disagree, and a copy needs both. A recursive tree of nodes in the member list. Replaced by the flat outline: it stores nesting twice and needs a self-referential Type the metamodel generator does not model.

### s:16b20c56 (srs spec)
Title: Attribution is optional, single-shaped, and never authority
Chosen (the decision statement): Axis 4-10 (Office over Testimony - Athena over Aphrodite) and the Attribution cell (stated over assumed), ruled as the cell's foundation principle:

OPTIONAL - attribution is never required for validity. An unattributed statement is unattributed, not invalid and not implicitly attributed to anyone.

SINGLE-SHAPED - when attribution is expressed, there is ONE shape for who/when/why across the standard: one asserter vocabulary (one casing, one set of kinds - replacing the five spellings the audit found), one timestamp convention, one reference-to-source convention (sourceRefs). The concrete shape is designed when the machinery returns (see below); this ruling fixes its constraints in advance.

NEVER AUTHORITY - attribution informs trust and diagnosis; it never overrides the record. The catalog, the manifest, the validated content are office; who-said-so is testimony, which fills gaps and c
Alternatives considered (as recorded): Unifying the five shapes now (rejected: unifying unused machinery is speculative - axis 2-8; the constraint is recorded instead so the return is shaped); making attribution mandatory for AI-asserted writes (deferred, not rejected: a real candidate for the verification design when agent-written content needs marking - noted for the return trigger).

### s:1967b8eb (srs spec)
Title: The .srs repository marker is a directory; its non-emptiness convention is spec, the satisfying file is implementation-owned
Chosen (the decision statement): (1) The `.srs` repository marker is a directory, not a file. A conforming repository's marker is `is_dir(".srs")`, matching Invariant 45, the `ext:repository` mechanism, and RFC-038 [R5]. This ratifies, retroactively, the ruling the owner made on srs#313 (2026-08-02) and that commit 88323e2 already folded into normative text.

(2) The marker directory's non-emptiness is a convention (SHOULD), not a MUST justified by git. An emptied `.srs/` does not fail silently: `repository_exists()`'s `is_dir` check returns false and the tool reports "not an SRS repository" at first use — a loud but misdiagnosable failure (a documentation problem, not a conformance problem), which is why this is a convention rather than a hard rule. The spec does not encode a VCS's limitation (git drops empty directories) as a property of the SRS format; the convention stands on its own terms, independent of git.

(3) 
Alternatives considered (as recorded): Migrate the implementation to a marker *file* instead — the alternative srs#313 itself named. Rejected: every implementation code path already treated the marker as a directory before the spec was consulted (RFC-038 [R5] predates this ruling); the corpus's disagreement was the spec being wrong, not the implementation.

Make non-emptiness a MUST rather than a SHOULD — considered, since an emptied `.srs/` does make `repository_exists()` return false. Rejected: the failure is loud (the tool reports "not an SRS repository"; it does not silently misbehave) but misdiagnosable — a documentation/tooling problem, not a conformance violation to enforce at the format level. Encoding it as a hard rule would also mean encoding around one VCS's limitation (git drops empty directories), which the spec should not assume every SRS repository even uses.

Name `.gitkeep` as the convention's satisfying file — the status quo `repo create` still emits. Rejected on srs#313 itself: "a git artifact leaking into a format specification. SRS repositories need not live in git, and the spec should not assume they do." `.gitkeep` is not treated here as a neutral baseline the README merely improves on; it is a rejected form still shipping, tracked for replacement at srs-rust#1066.

Name `.srs/README.md` specifically in this decision record — an earlier draft of this record did exactly that, and the owner identified it as a second instance of the same over-specification (2026-09-16). Rejected: the spec's job is to state the convention and its purpose (discovery/orientation, part 3), not pick a filename the implementation is free to change; the spec repo's own `.srs/profiles/foundation.json` already satisfies non-emptiness today, so binding the spec to `README.md` would make an already-conforming reposi

### s:19997e24 (srs spec)
Title: Conformance checks are declared in one registry
Chosen (the decision statement): Cell: Conformance. Every spec-repo conformance check is declared in a single registry (scripts/checks.json) rather than hand-wired: each entry names the check's id, script, arguments, tier (always | pinned-cli | ci-only), the grid cell it guards, the governing decision or RFC that introduced it, and an optional expiry for checks born of grandfathering. validate-all.mjs becomes a loop over the registry filtered by tier, and it ends every run by naming the checks deferred to other tiers, so its exit 0 can never again be mistaken for the full gate surface. A membership guard enforces the registry: a check script present on disk but absent from the registry fails the build, which makes piecemeal addition structurally impossible. New checks follow one naming convention; existing script names migrate only when next touched (rename is a migration). The registry is a stepping stone, not the dest
Alternatives considered (as recorded): (1) Status quo hand-wiring - rejected by evidence: it produced four conventions and today's red PR. (2) Jumping straight to checks-as-records - deferred, not rejected: it is the declared end state, but building it now widens the current phase; the registry file is the smallest declaration that makes the later fold trivial. (3) Adopting a test-framework dependency to organise the checks - rejected: the problem is undeclared structure, not missing machinery; the fix is data, not a framework.

### s:1e5df0d9 (srs spec)
Title: Define the SRS decision-log inclusion boundary
Chosen (the decision statement): Maintain the SRS RFC decision log as a curated record of active consequential judgment. Record a decision when legitimate alternatives remained and the choice establishes, changes, applies with discretion, excepts, or supersedes guidance that future work may need to understand. Do not record a mechanical derivation: when competent contributors accepting the same governing decisions and evidence have only one valid outcome, record the task, implementation consequence, test, or pull request instead.
Alternatives considered (as recorded): - Backfill every atomic research card, including mechanical derivations.
- Treat tactical or operational work as sufficient reason to record a decision.
- Record only RFC lifecycle outcomes, without reusable rationale or exceptions.
- Leave the decision-log boundary implicit.

### s:1e7c0c8e (srs spec)
Title: Retirement rules speak at two levels; a Type elimination deletes retired instances once provenance is recorded
Chosen (the decision statement): Retirement rules exist at two levels, and rfc-decision-5f8204bc's instance clause was written at the wrong one without saying so.

The standard and its tooling provide mechanisms for retiring instances - the supersedes, refines, and derived-from relation types, lifecycle states, and record delete - and enforce nothing beyond honesty about what each mechanism does. Provenance (a successor recording what it replaced) is a capability the tool must make achievable; it is not a mandate the tool imposes on every repository that uses it. A generic tool defines what is possible, not what every corpus must do with it.

rfc-decision-5f8204bc's instance clause reads, verbatim: "INSTANCES (Records) retire by SUPERSESSION - successor-and-link (supersedes/refines), per the Fire column principle; history stays addressable." That sentence is repository-governance policy, adopted by governed corpora such
Alternatives considered (as recorded): (1) Never delete a retired instance once a successor exists - keep every retiring section/subsection Record alive indefinitely alongside its concept successor. Rejected: it makes the Type definitions themselves undeletable, since a Type cannot be removed from the package while any instance still binds to it - the whole point of a Type elimination (RFC-042 Change B) would be permanently unreachable, and record list --type <retiring-type> would never reach zero by any mechanism, ruled or not. (2) Treat this as a correction to rfc-decision-5f8204bc rather than a successor. Rejected under rfc-decision-4431046e's own test: a reader who acted on 5f8204bc's instance clause as written - assuming it bound every SRS repository - would act differently after this ruling, so it is a refinement of position, not a fix to a wrong detail, and must ship as a successor record, never an in-place edit.

### s:2a1e1590 (srs spec)
Title: State is mutable, semantics are not: the Fire carve-out, and Revisions and Changelog are removed
Chosen (the decision statement): Cell: Versioning (Fire, individual), carving the boundary of the column principle change preserves what it replaces. The Fire principle governs SEMANTIC content: a record's meaning changes by version increment or successor-and-link, never in place. STATE is the sanctioned exception: designated state fields - lifecycleState is the canonical case - mutate in place, because a state value is the record's current position in a process, not part of its meaning. The carve-out is exact: a field is state only if it is bound to a defined machine (a Lifecycle) whose transitions make some changes legal and others not; nothing else earns in-place mutation by calling itself state.

With the carve-out ruled, the transition-history machinery loses its structural necessity and its removal follows under axis 2-8's evidence clause: per-field Revision sidecars (revisions.json) and ChangelogCollection (chang
Alternatives considered (as recorded): (1) Require transition traces (keep a minimal changelog): honest under a strict reading of the Fire principle, and re-legitimizes the machinery - rejected because no present consumer needs history, the specified mechanism has documented defects, and axis 2-8 prices maintaining defective unused machinery as speculative. When the Decision Log's audit surface arrives, a mechanism designed against real requirements will be better than this one preserved. (2) Remove the machinery without ruling the carve-out - rejected: it silently decides the principle by default, the exact failure mode the coupling flag existed to prevent. (3) Make lifecycleState itself versioned/successor-based - rejected: it would make every state transition a record-identity event, conflating process position with meaning.

### s:2e0cd70a (srs spec)
Title: Carry meaning you do not recognise
Chosen (the decision statement): Unknown content in instance-layer data is governed by a three-verb contract with graded diagnostics. DETECT: unknown elements are always identified — content in `meta` gets at most a quiet mention (it is the sanctioned extension carrier; not recognising its contents is expected, not a defect); unknown fields elsewhere draw a louder warning. LOAD: unknown instance-layer content never fails a load — it must not break the reader, and the reader should not break it. WRITE: a conformant writer preserves what it does not understand (the ideal), or refuses loudly when preservation is genuinely impossible; silently discarding unknown content is the one forbidden behaviour. Emitted JSON Schemas express the PRODUCTION contract — closed except `meta` — while round-tripped out-of-contract keys are carried despite being schema-invalid: the validation complaint IS the louder diagnostic. The definition
Alternatives considered (as recorded): - Strictly closed everywhere (emit `additionalProperties: false` universally, reject on load): rejected — overturns the ruled instance-layer tolerance, breaks carriage of foreign extension content, and sacrifices the extensibility the meta bag exists to sanction.
- Open everywhere (sanction arbitrary top-level unknowns, full writer passthrough): rejected — the record's shape stops being knowable and the write contract stops being schema-checkable; reopens one layer down the silent-drift surface the definition-layer ruling closed.
- Refuse-only on write (no preservation obligation): rejected as the default — loud refusal remains the sanctioned fallback, but preservation is the ideal; a standard whose writers routinely refuse foreign content does not carry meaning.

### s:2f048790 (srs spec)
Title: Generate structural reference projections from semantic records
Chosen (the decision statement): Resolved Field, Type, and value-object records are the semantic source; contributors keep narrative in published subsection records around a stable typed view slot, while tooling generates a property-table reference, optional pseudo-IDL, and schema from the resolved model.
Alternatives considered (as recorded): - Continue comparing hand-authored pseudo-IDL to generated schemas.
- Generate human prose from JSON Schema and make the schema canonical.
- Embed raw JSON Schema as the main contributor-facing reference.

### s:2fb87c1e (srs spec)
Title: Make the authoritative store, not the manifest, define repository content
Chosen (the decision statement): A repository's authoritative content is what its authoritative store reports across the instance, relation, container, source-document, definition, and extension sets; manifest.json is not content authority except for its inline root container.
Alternatives considered (as recorded): - Keep manifest indexes authoritative.
- Let each implementation choose between index and tree authority.

### s:4269c744 (srs spec)
Title: Place composite-renderer dispatch in the view layer
Chosen (the decision statement): Composite renderer selection is owned by the view layer rather than Field or Type, so different views may present the same semantic records differently.
Alternatives considered (as recorded): - Keep compositeRenderer on FieldGroup or the replacement Type.
- Put renderer selection on each instance.
- Allow only a repository-wide renderer choice.

### s:43249f53 (srs spec)
Title: One state mechanism: workflow status is a Lifecycle
Chosen (the decision statement): Cell: Conformance (one way over many), with Versioning owning the state value. Anything in the standard's own corpus or its packages that models workflow state - named stages a record moves through - is a Lifecycle (ext:lifecycle): a defined state set with transitions, bound to the Type via lifecycleRef, with the record's position carried in lifecycleState. Bare status enum Fields for workflow state are retired as a parallel mechanism. First migration: the spec's own rfc_status field (49 records, seven values, no transitions) becomes a real spec-rfc-process Lifecycle - the standard dogfoods its own state machinery, and RFC supersession gains RFC-022 requiresRelation coupling (rfc_status superseded requires the supersedes assertion it today carries only in prose).

The line this draws: Lifecycle = workflow state on records (Fire, individual: where the record is in its process). Substrate 
Alternatives considered (as recorded): Sanctioning two tiers (bare enum for light cases, Lifecycle when transitions matter, boundary stated once) was the honest alternative - cheaper, matching current practice. Rejected by the owner in favor of one mechanism: the two-tier boundary would itself become a drift seam, and the spec's own workflow is exactly the case where transition enforcement has value (the audit found nothing prevents impossible status jumps today).

### s:4431046e (srs spec)
Title: A correction is not a refinement: how a decision record may change
Chosen (the decision statement): A decision record may change in exactly two ways, and they are not the same act.

A REFINEMENT changes the position the record takes - what was decided, or on what condition it holds. A refinement is recorded as a SUCCESSOR decision record linked by a supersedes relation. The earlier record is never edited. This is rfc-decision-cce3c00e's standing rule, unchanged.

A CORRECTION fixes a statement of fact that was wrong when written, without changing the position: a misidentified property, a wrong count, a mistaken citation, a scope note that prevents a misreading. A correction MAY be made in place. It MUST carry a visible marker in the record itself - not only in the commit message - naming what was corrected and when, so a reader of the corpus can see that the record once said otherwise.

The test between them: if a reader who acted on the earlier text would have acted differently, it is
Alternatives considered (as recorded): (1) No exception - reconstruct the whole 4f1e12e5 amendment as a successor, corrections included. Rejected: it makes a typo fix cost a decision record, and a log filled with those is skimmed rather than read. The mechanism would be formally intact and practically dead. (2) Accept the in-place edit and rule forward only. Rejected on evidence rather than principle: the pre-amendment text survives only in git history, and an SRS repository travels as a bundle of records, so the earlier position is lost on first export. (3) Make decision records mutable, dropping the successor requirement. Rejected: it contradicts the Succession cell outright and makes every past decision's audit trail retrospectively untrustworthy.

### s:4f1e12e5 (srs spec)
Title: The attested removals: pruning the dormant machinery
Chosen (the decision statement): Under the dormancy rule (rfc-decision-cce3c00e) and axis 2-8's evidence clause, the constructs the 2026-08-21 usage attestation found exercised nowhere are removed from the standard. Each entry keeps its cell's name and carries its return trigger to the roadmap; a return re-enters through the charter as an evidence-shaped design.

REMOVED:
1. Relation provenance fields (assertedBy, confidence, status, createdBy, validFrom, validUntil) - 0 of 250 relations anywhere. Cell: Attribution; the cell's principle is ruled separately and survives the machinery. Trigger: the attribution mechanism's return claimant.
2. Federation entities (registry, events, cross-repository relation fields) - zero data; 34 prose records and 7 invariants specify it. Cell: Portability. Return: COMMITTED, not evidence-gated - federation is core to SRS (owner, 2026-08-22); this removal is a deliberate reset of a design 
Alternatives considered (as recorded): Keeping the machinery marked experimental (rejected: a third conformance class for zero-user constructs); removing the supersedes family for symmetry with its zero usage (rejected: the dormancy rule's limit case - preference-required machinery stays); deleting protocols wholesale (rejected on the owner's cost condition: fixing the well-designed definition model is clearly cheaper than re-planning it).

### s:53635966 (srs spec)
Title: Tier 1 was a theory: TypedRecord is removed
Chosen (the decision statement): Cell: Identity (Earth, individual), under axis 2-8's evidence clause. The record model goes from three tiers to two: Tier 0 (Note - free text sections, no type binding) and Tier 2 (Record - instantiated Type). Tier 1 (TypedRecord - named fields without a Type binding) and the graduatedAt timestamps are removed from the standard. The gradual-refinement theory the middle tier expressed - meaning matures from free text toward typed structure - survives without it: graduation is Note to Record, linked by derived-from, and partial structure inside a Note remains what it always was, sections. Tier numbering (0 and 2) is retained as-is to keep every existing reference, invariant, and discussion stable; renumbering would be churn without meaning.
Alternatives considered (as recorded): (1) Keep Tier 1 as specified - rejected: it is the definition of specified-but-unexercised surface, and the audit showed such surface is where drift accumulates (the tier's ordering, for example, was un-overridable by the view layer, finding B4, and nobody had ever hit it). (2) Keep the tier but mark it experimental - rejected: a third conformance class for a construct with zero users is complexity without evidence. (3) Remove Note instead and make Records the only tier - rejected without debate: Notes are heavily used (26 across corpora) and are the capture surface the mission depends on.

### s:5c1e3068 (srs spec)
Title: Put a deterministic target-neutral IR between records and emitters
Chosen (the decision statement): Projection resolves semantic meaning into a target-neutral intermediate representation before any target back end renders it.
Alternatives considered (as recorded): - Let each target define an independent semantic interpretation.

### s:5f18603e (srs spec)
Title: Federation's return is committed, not evidence-gated
Chosen (the decision statement): Federation returns to SRS as a planned roadmap phase. Its return is COMMITTED and is not gated on evidence of demand - federation is core to SRS. The 2026-08-21 removal was a deliberate reset of a design that predated real practice, not a judgment on the capability.

The redesign is grounded in the sharing forms that actually emerged - bundles, slices, git-hosted repositories - and in the axis 4-10 verification path. The owner schedules it. The travel mandate covers artifact-form portability meanwhile.

WHAT THIS CHANGED. rfc-decision-4f1e12e5, as accepted on 2026-08-21, gated the return on evidence. Its federation entry read, verbatim:

  'Trigger: a second real repository needing live cross-repo assertions; the travel mandate covers artifact-form portability meanwhile.'

That position is superseded by this record. The change was made on 2026-08-22 (commit b623475) as an in-place edit t
Alternatives considered (as recorded): (1) Leave the position in 4f1e12e5 as amended and record nothing. Rejected: the prior position survives only in git and is lost on export, which is the concrete harm rather than a procedural one. (2) Supersede 4f1e12e5 entirely with a fresh record carrying all its entries. Rejected: eight entries are unchanged, and superseding a compound record to change one entry destroys the provenance of the other eight. (3) Reconstruct the whole 2026-08-22 amendment, corrections included. Rejected by the governing rule, which reserves succession for changes of position.

### s:5f8204bc (srs spec)
Title: Retirement has one way per layer
Chosen (the decision statement): Axis 5-11 (Reliability over Renewal) applied: each layer has exactly one retirement mechanism, and renewal never silently breaks a standing contract.

DEFINITIONS (Field, Type, View, Composition, Theme, Blueprint, Protocol, Package definitions) retire by DELETION, with version history as the trail - there is no deprecation state at the definition layer (the audit's carve-out C10, now stated). A definition that must signal replacement does so by a successor version; consumers pin, so deletion cannot break a pinned reference retroactively.

SUBSTRATE ENTRIES (Terms, LifecycleStates, RelationTypeDefinitions) retire by STATUS - the existing four-stage vocabulary (active, deprecated, tombstone, retired) - because instance data addresses them by string key and cannot be version-pinned; the key must keep resolving while carrying its retirement.

INSTANCES (Records) retire by SUPERSESSION - succ
Alternatives considered (as recorded): A single cross-layer deprecation status (rejected: definitions are pinned, so status on them is dead weight - deletion with version history is strictly cleaner); no expiry rule for exceptions (rejected: finding C5 showed an allowlist justification silently expiring when its cited schema condition changed).

### s:628cf6c4 (srs spec)
Title: A rename is a migration
Chosen (the decision statement): Axis 3-9 (Shared Coherence over Local Autonomy) with Description's preference (one name over many): a name in the standard - a property key, a substrate key, an entity name, a spec term - is a contract, and changing one is a MIGRATION, never an edit. A rename ships as: the ruled decision naming old and new; a deterministic data/schema migration where stored forms carry the name; a generation stamp where the carrier changes (dataModelRevision); and the one-name end state - the old name does not linger as an accepted alias (KEYED is key-only per the reference taxonomy; substrate renames go through supersession status per the retirement ruling). Already-executed instances of this pattern are its precedent, not exceptions: valueType to fieldType (RFC-032), properties to meta (#433), Evolution to Governance (grid cell), DocumentView to Composition (#272). A rename that cannot afford its migra
Alternatives considered (as recorded): Alias-based grace periods for renames (rejected - two live names is the C8/C20 state this rule exists to prevent; grace lives in the migration tooling, not the name space); treating prose-only renames as exempt (rejected - A13 showed normative records lagging a ruled rename for months).

### s:6523cf5e (srs spec)
Title: Keep presentation hints outside the semantic type model
Chosen (the decision statement): Editor and composite-renderer hints remain presentation-layer concerns and are not encoded as fieldType facets.
Alternatives considered (as recorded): - Treat input widgets and composite renderers as semantic type facets.

### s:693b9458 (srs spec)
Title: Pin the CLI that defines a required semantic drift gate
Chosen (the decision statement): The required release-drift check uses one named srs-rust release declared once, so its semantic rendering behavior changes only through a reviewable repository commit.
Alternatives considered (as recorded): - Always download the latest CLI release.
- Accept that a required check can change behavior without a commit to this repository.

### s:6fc7e142 (srs spec)
Title: One escape bag, one name: meta
Chosen (the decision statement): The per-layer escape bag has one name everywhere: `meta`. The substrate layer's `properties` bag (VocabularyEntry, Term, RelationTypeDefinition) renames to `meta`, matching the instance layer's existing convention. The per-layer POLICIES remain distinct as ruled (#237's three-layer table: definitions have no bag; substrate reject-unknown with a `meta` escape; instances tolerate with `meta`) — the name is unified, the semantics stay layered. Executed as its own small breaking unit, not a #273 rider: substrate schemas + engine structs + substrate data migration + mirror choreography together.
Alternatives considered (as recorded): - Keep both names with a stated normative distinction (substrate `properties` = definitional extension surface; instance `meta` = tolerated annotation): rejected by the ruling — the layered policies already carry the distinction; a second NAME adds nothing the policy table does not, and costs a permanent explanation.
- Fold the rename into the #273 train: rejected — #273 is definition-layer; the substrate rename is its own bounded breaking change with its own migration.

### s:7255aecc (srs spec)
Title: Type-keyed `type-query`: KEYED namespace/name replaces semanticObjectType dispatch
Chosen (the decision statement): The `SectionSource` `type-query` variant's selection key becomes Type-keyed: a `typeKey` string in `namespace/name` form (version-independent, KEYED per rfc-decision-c8704763), resolved against the effective installed package set at query time — the same resolution `typeFilter`/`typeDispatch` already perform elsewhere in `document-view.json`. `semanticObjectType` (a bare, unscoped string with no installed-definition backing) is retired from `SectionSource` once #272 migrates every consumer; until then it stays modelled as sanctioned-until-collapsed (RFC-040 metamodel v1.1.0, #383). Every other `type-query` filter axis (lifecycleState, lifecycleStates, excludeLifecycleStates, containerIds, containerScope) is unchanged — only the selection key changes shape, from an unscoped free string to a scoped, installed-definition-backed key. A `typeKey` that does not resolve in the effective package
Alternatives considered (as recorded): Keep semanticObjectType as the permanent dispatch key (rejected: the owner's one-way-per-goal ruling already found this a parallel taxonomy that must collapse into the Type system, srs-rust#826/#383). PINNED {typeId, typeVersion} dispatch (rejected: rfc-decision-c8704763's axis 2-8 corollary — presentation/dispatch must not absorb a version bump; a DocumentSection authored against one Type version would silently stop matching Records of a newer version). A fifth reference strength invented specifically for this case (rejected: c8704763 states no fifth strength without a charter amendment, and KEYED already covers this shape with existing precedent in the same schema).

### s:7bd99afd (srs spec)
Title: Close definition-layer gaps in the model rather than a remainder overlay
Chosen (the decision statement): Metamodel v1.1.0 must express the live definition-layer surface in SRS records and emit the complete artifact; it must not depend on a hand-maintained remainder overlay for meaning the records cannot carry.
Alternatives considered (as recorded): - Keep the core metamodel smaller and merge a hand-maintained remainder/*.json overlay into generated schemas.

### s:7caca3a1 (srs spec)
Title: Decision modes: rules for the clear, geometry for the complex, a boundary against chaos
Chosen (the decision statement): Cell: Governance. Every charter-checked decision names its mode - clear, complicated, complex, chaotic, or unresolved - and the mode determines which decision machinery applies:

CLEAR and COMPLICATED decisions are addressed through rules: the charter check as specified (cell citation, governing preference, boundary-clause justification for a non-default pole, past-decision search) is sufficient. Complicated decisions may additionally need expert analysis, but the charter's existing adjudication machinery governs them.

COMPLEX decisions require a stronger judgment mechanism, and charter citation alone is INSUFFICIENT - forcing a complex case into a single cell to produce a citation is the premature-classification pathology, forbidden by name. The mechanism for complexity is THE GEOMETRY OF THE MATRIX: the decision is mapped, not cited - located across the cells it genuinely touches (com
Alternatives considered (as recorded): (1) decision_mode as an optional field (the pre-ruling proposal on #463) - rejected by the owner's adoption: the mode determines the machinery, so it cannot be optional. (2) Charter adjudication for complex cases with extra review - rejected: complexity is not complicated-plus-effort; look-ahead and emergence-mapping are a different kind of act, and pretending otherwise is the ritualization pathology. (3) Charter jurisdiction over chaotic response (a 'break-glass process') - rejected: chaos is placed outside the spec boundary deliberately; governing the ungovernable corrupts the record.

### s:7d3dda60 (srs spec)
Title: Use authored Field names as Record value keys
Chosen (the decision statement): The revision-2 Record carrier will store fieldValues as an object keyed verbatim by Field.name, with field identity recovered through the Record's version-pinned Type rather than repeated as a fieldId in each value.
Alternatives considered (as recorded): - Keep the UUID-keyed FieldValue array.
- Key the object by field UUID.
- Transform authored names to lowerCamelCase.
- Add a separate fieldId map to each Type.

### s:86f49083 (srs spec)
Title: Land carrier and storage changes as one final generation
Chosen (the decision statement): The RFC-039 carrier migration and RFC-038 repository-storage migration land as one composed first-party release train at dataModelRevision 2; neither design ships alone and no intermediate repository generation is supported.
Alternatives considered (as recorded): - Ship the carrier change before the repository-authority change.
- Support an intermediate generation between the two contracts.
- Defer one known first-party population to a later release.

### s:8948e43f (srs spec)
Title: What a container can hold, a bundle can carry
Chosen (the decision statement): Axis 6-12 (Portability over Possession) applied as the travel mandate: every construct the standard lets a repository hold MUST be expressible in the standard's travelling forms - the package bundle for definitions, the archive/slice forms for content. A capability that exists only in place is captivity, the purpose statement's named failure mode. Concretely and immediately: the package-bundle format's inability to carry Themes, Blueprints, and Protocols (srs#390) is promoted from bug to mandate violation - the bundle grows to carry every one of the package-manifest's ten definition kinds, and the two lists are derived from one source so they cannot diverge again (finding A6's enum derivation). Standing rule for every future construct: the travelling form ships in the same RFC that introduces the held form, or the RFC states the explicit axis 3-9 local-boundary exception that keeps it in
Alternatives considered (as recorded): Treating #390 as an ordinary capability gap to schedule on demand (rejected: the mission's own failure mode deserves a standing rule, not a ticket); mandating full parity including runtime state (rejected: state and runtime surfaces are not held constructs; the mandate covers what the standard defines as holdable).

### s:8aed3412 (srs spec)
Title: A story is built at EXPRESSION from reusable parts: containers carry context membership and nesting, the Composition carries context order
Chosen (the decision statement): The contains, precedes and depends-on relations remain the single MEANING tree. They are claims about the records: what is part of what, what semantically or temporally follows what, and what must be understood first (RFC-042). Nothing in this ruling adds to them, weakens them, or makes them contextual.

Any arrangement that differs from that tree is built at EXPRESSION. A narrative, an appendix, a reader's path, a tour for a newcomer: each is a telling of the same records, not a competing statement about them. Such a telling is assembled from reusable parts rather than from copies.

Context membership and nesting are carried by Containers. A Container is a declared selection (rfc-decision-0750c62f), so the parts a telling draws on are named explicitly, and childContainerIds carries the nesting of one context inside another. One record may be a member of many containers at once; reuse ac
Alternatives considered (as recorded): Context-scoped relations, in which an edge carries the context it holds in. Rejected: it puts a field on Relation, so every traversal in every consumer must learn a filter or silently read the wrong graph, and it breaks RFC-042's zero-new-fields property. It also makes a claim about records depend on which story is being told, which inverts the plane assignment this ruling rests on. Duplicating content per context, in which a record that belongs in two tellings is copied. Rejected: it corrodes the corpus on every reuse, because the copies drift and nothing says which is the original; the cost is paid forever and grows with every new telling.

### s:8f5aca2c (srs spec)
Title: The grid grows three operations: reach, sequence, balance
Chosen (the decision statement): Cell: Governance. The Pattern Grid (rfc-decision-cce3c00e) gains three standing operations, adopted from their proven use in a sibling application of the same method (a launch-prep risk assessment running the identical 4x3 geometry in an operational public-service domain):

1. REACH MARKING. Every cell carries a reach mark - INSIDE (assessable from the standard, its corpora, and first-party stewardship alone), SHARED (the standard's half is ours; the other half belongs to implementations, adopters, or counterparties - assess our part and NAME the missing half rather than estimate it), or BEYOND (not answerable from inside the spec boundary; carried as a named dependency on the counterparty with an owner, never as an open discovery item that quietly stays open). The rule that makes reach matter: a thin cell has two possible causes needing opposite responses - thin-and-inside is our own di
Alternatives considered (as recorded): Adopting the sibling's full apparatus (per-cell discovery questions, offset-3 squares, evidence packs) - deferred, not rejected: the owner adopted the three that earned it; squares and per-cell question banks remain available to complex-mode maps without a standing rule. Leaving the operations informal - rejected: unrecorded operations are how the audit's half-built-mechanism pattern starts.

### s:92d2da05 (srs spec)
Title: Rename DocumentView to Composition
Chosen (the decision statement): The document-composition entity is named Composition; the name DocumentView retires. The rendering-chain vocabulary is Composition → Presentation → Projection: a Composition defines how records compose into a document; a Presentation is a repository's declared commitment to render a Composition in a format (manifest.renderedPresentations); a Projection is the produced artifact. "Export" retires as vocabulary with the VIEW_EXPORTS mechanism.
Alternatives considered (as recorded): - Keep DocumentView: rejected — the View/DocumentView collision is unresolvable in prose and already confused RFC-015's own key naming.
- Arrangement, Edition, Outline, Assembly: rejected — weaker semantic fit; none name the composing act.
- Rename in vocabulary only, keep the entity name in schemas: rejected — a permanent prose/model split is the drift class this project retires.

### s:991c062f (srs spec)
Title: Versioning cell's Field-immutability rule does not reach the generated metamodel package
Chosen (the decision statement): The metamodel package (srs/package/metamodel/**) is out of scope for the versioning cell's Field-immutability rule (rfc-decision-2a1e1590; 04-2-4-2-field#r2). It is a frozen, hand-verified bootstrap fixed point, regenerated wholesale by scripts/gen-metamodel-package.mjs from its FIELD_SPECS table and proven against the frozen seed (docs/schema/2.0/{field,type}.json) by the RFC-033 and RFC-035 closure tests; nothing resolves a metamodel Field by namespace/name@version, so the version number on a generated Field carries no lineage for any consumer to protect. check-versioning-cell.mjs excludes srs/package/metamodel/** from its walk by name, the same exclusion shape it already applies to rfcs/rfc-004/.
Alternatives considered (as recorded): Add an optional per-field version override to FIELD_SPECS (default 1, explicit bump for entries like value_range), bump value_range to version 2, and re-verify the frozen-seed pipeline. Rejected for now: it touches the closure-tested generation pipeline to make a number honest that no consumer reads, since nothing resolves a metamodel Field by version. If something later does resolve a metamodel Field by version, this ruling's premise fails and the per-field override becomes the right fix (see review_trigger).

### s:9ee14517 (srs spec)
Title: Layers stay separate: the layer rules
Chosen (the decision statement): A companion register to the Pattern Grid (rfc-decision-cce3c00e): where the grid locates concerns by element and level, the layer rules govern STACKING - what sits on what, what may know about what. The stack has three planes, each with named layers:

MEANING (what things are): substrate -> definitions -> instances. Per-layer contracts already ruled: the three-layer unknown-key policy, retirement one-way-per-layer, the reference taxonomy binding the layers (instances PIN definitions; definitions KEY substrate).

EXPRESSION (how meaning is shown): selection -> composition -> presentation -> projection. Selection is the one query shape (the discovery contract); composition arranges selected meaning into document structure; presentation renders it (views, themes); projection is the emitted artifact. Each stage consumes its predecessor's output and adds exactly its own concern.

OPERATION (w
Alternatives considered (as recorded): Folding layer discipline into the grid's cell preferences (rejected: layers are orthogonal to element x level - SectionSource's violation crossed cells but was invisible to cell preferences; stacking needs its own register). Leaving it as accumulated precedent (rejected: that is the rule-stated-once-sites-silent failure shape the audit diagnosed).

### s:a270e98a (srs spec)
Title: Protocol shape: unprefixed identity wins, aiGuidance is structured-only (srs#379)
Chosen (the decision statement): Protocol's identity and structural properties are UNPREFIXED, matching every other package-declared definition entity: `id`, `namespace`, `name`, `version`, `description` (optional), `targetType` (required, LINEAGE bare-UUID-or-empty-string, unchanged value shape — renamed only), `stages` (required), `tags` (optional), `createdAt` (required). ProtocolStage keeps its already-correct property names (`stageId`, `name`, `order`, `purpose`, `question`, `dependsOn`, `completionCriteria`, `contributesTo`, `outputType`) and additionally: `name` becomes documented as required (it always was, in the implementation and every corpus instance — the old prose simply omitted it); `aiGuidance` becomes the closed, structured `AiGuidance` object exclusively (`purpose` required, `extraction`/`negativeGuidance`/`examples[]` optional) — the `string` alternative is retired. `docs/schema/2.0/protocol.json` and
Alternatives considered (as recorded): Keep the prefixed shape as canonical and rewrite prose to match (srs#379's own "cheaper, matches every witness" framing): rejected — it is cheaper only until the entity is modelled through the self-hosting generator, at which point it requires either duplicating the shared identity Fields under Protocol-only names (violating the generator's own reuse-over-duplication principle) or hand-authoring Protocol's schema outside the generator (a second, undisciplined path the srs#526/#541 units exist to retire, violating one-way-per-goal). Leaving aiGuidance as `oneOf:[string,object]` on the grounds every live instance is currently a string: rejected — that is the definition of accepted structural debt the structured-over-serialised rule exists to prevent, and every instance's string content already fits `{purpose: <text>}` losslessly.

### s:a8dcbfe5 (srs spec)
Title: A whole-package export declares the embedded core package in dependencyRefs instead of carrying it
Chosen (the decision statement): A whole-package export does not carry definitions of the RFC-029 core package in its definition arrays, in either mode, and lists every core definition version reached by a followed PINNED or LINEAGE reference in dependencyRefs, one entry per id and version. The closure rule is unchanged; only what is carried differs. The exception covers core definitions reached from another package, never the source package's own: an export of the core package itself carries every definition its manifest lists. The bundled-mode clauses of Invariants 8, 15, 35, 36, 37 and 43 carry the same exception.
Alternatives considered (as recorded): Carry core definitions like any other (Revision 9 literal): rejected, it repeats the substrate in every bundle and makes every install deduplicate it, preserving nothing a consumer could lack. Omit core and write dependencyRefs as [] (srs-rust#1210 as merged): rejected, the dependency is assumed rather than stated and followed references are dropped (Attribution, Water). Let the exporter choose per call: rejected, two ways for one goal and two different bundles for the same package (Conformance, one way over many).

### s:aee09992 (srs spec)
Title: A package requirement is keyed by the required package's id, with a SemVer compatibility constraint
Chosen (the decision statement): A package dependency (packageDependencies, DependencyRef) names the required package by its packageId, the package's own UUID, which is the key that decides satisfaction; namespace and name are kept as required display labels and never decide it. The constraint stays the one sanctioned package-layer form, a version rule on a lineage key: an installed version satisfies a requirement when it is in the requirement's compatibility band (same MAJOR; below 1.0 the same 0.MINOR; for 0.0.z the same release), is not a pre-release of a different release, and has equal or higher SemVer precedence. This supersedes only rfc-decision-c8704763's sentence 'Package dependencies are the one sanctioned constraint form: KEYED with a semver range, existing only at the package layer.' Its other rulings stand: the constraint form exists only at the package layer, and there is no fifth reference strength.
Alternatives considered (as recorded): Keep namespace/name as the key and add an optional packageId: rejected, it leaves two ways to match and a client would match by label until a rename. A version range grammar (^1.2.0, >=1 <3): rejected, a second grammar for no present need. No special treatment of 0.x: rejected by the owner, it lets 0.9.0 satisfy 0.1.0.

### s:b2ff7c91 (srs spec)
Title: Identifier over label governs machine-facing outputs
Chosen (the decision statement): The Identity cell preference "identifier over label" (rfc-decision-cce3c00e) applies on the OPERATION plane (core service -> adapters -> clients; rfc-decision-9ee14517), not only to stored data on the MEANING plane. Any fact a consumer acts on in a machine-facing output - to group, filter, suppress, branch, or link to documentation - is carried as a typed field with a stable identifier. Machine-facing outputs include diagnostics, CLI, WASM and MCP payloads, and errors. Human-readable text (message, notes, titles) is presentation: it may change freely and no consumer parses it. An identifier computed in the core and then interpolated into prose is a violation in the emitting layer; a client that matches on prose is a violation in the client. This is a clarification of the existing Identity preference, not a new cell preference: a thirteenth preference would duplicate "identifier over labe
Alternatives considered (as recorded): A thirteenth cell preference for outputs (rejected: it would duplicate "identifier over label" and break one way over many). Leaving it as implementation practice in ADR-048 alone (rejected: clients outside srs-rust, such as srs-web, need the charter rule to judge prose matching as a violation).

### s:b9d7096e (srs spec)
Title: The grid learns to read: autoclassification and the stance vocabulary
Chosen (the decision statement): Cell: Governance. Two further operations join the grid (extending rfc-decision-8f5aca2c), adopted from the Systemic Data Ethics sibling - the method's earliest large application, which mapped the external data-ethics field into the same 4x3 geometry:

1. AUTOCLASSIFICATION. Statements of a corpus are classified into grid cells at scale. The label set is the twelve cell slugs (the #462 vocabulary); the rubric is the cells' definitions and preferences as recorded; the modern mechanism is LLM classification (superseding the sibling's 2021 AutoML ancestor, trained on ~732 hand-labelled citations from external ethics frameworks). Three uses, in order of adoption: (a) MECHANIZED BALANCE - the standard's own normative corpus (invariants, rules, RFC statements, decision records) is auto-placed into cells each assessment cycle, making the cyclical balance counts (rfc-decision-8f5aca2c) instrument
Alternatives considered (as recorded): Adopting autoclassification as authoritative placement (rejected outright: Office over Testimony - a classifier's placement never outranks the reviewed record; the 2021 ancestor was a suggestion engine and so is this). Inventing fresh stance names rather than adopting the sibling's (deferred: the sibling's names are attested by use; refinement stays open under rename-is-a-migration). Waiting for #273's self-hosting to add classification (rejected: the balance cycle needs it now, and the mechanism is prompt-plus-slugs, not schema work).

### s:be253dd6 (srs spec)
Title: A Container is stored as a directory of one-line entry files, so concurrent membership edits merge per entry
Chosen (the decision statement): At dataModelRevision 11 every Container is stored as a directory: a one-line head carrying its own fields, and one one-line file per entry naming the entry's container, its parent and a fractional-index key. The logical memberInstanceIds outline and every member operation's behaviour are unchanged; storage decides only what is written. A three-way merge is per path, and its result is the decoding of the merged files. Orphans and loops left by a clean merge are warnings with a deterministic decode, re-attached by repair. Keys come from one shared algorithm. This supersedes, in part, rfc-decision-0df19d60: its accepted cost that two writers who reorder one container conflict as a whole no longer holds, since conflicts are per entry; its position, that context order is declared on the Container, stands.
Alternatives considered (as recorded): A merge driver implementing RFC-043 [R14] as tooling only: conforming, kept as the fallback, but conflict-freedom would depend on tool configuration and GitHub's server-side merge ignores it. Per-entry files keeping depth: a clean merge can break the outline. Order kept in the head: the shared file again. Records declaring their containers: two ways to declare membership. Sharding the array: reduces conflicts rather than eliminating them. git merge=union: produces invalid JSON. A sequence CRDT or LSEQ/Logoot: site identifiers solve ties that the instanceId tie-break already makes harmless. Detached entries as fatal errors (rejected: a routine merge would leave an unloadable repository) or tombstones (rejected: a second way to remove). Writer-chosen keys (rejected: the same edit would conflict across branches).

### s:bed7a41a (srs spec)
Title: The root container is stored in the container set; the manifest names it and holds no content
Chosen (the decision statement): The repository's root container is stored in the container set like every other container, and manifest.json names it by a required rootContainerId instead of carrying it inline. The root container keeps every role it has: it is the repository's identity object, and its entry order is the navigation order. manifest.json is authoritative for no content set. This supersedes, in part, rfc-decision-2fb87c1e: its exception "except for its inline root container" is withdrawn, and its position, that a repository's authoritative content is what its authoritative store reports, stands unchanged.
Alternatives considered (as recorded): Keep the root inline in manifest.json. Rejected by the owner: two encodings, made permanent at the Continuity flip. Keep the property name container holding only an id. Rejected: one name with two shapes across revisions, and a rename is a migration either way (rfc-decision-628cf6c4). Compose with RFC-051 at one revision (precedent rfc-decision-86f49083). Rejected: the changes are independent and one combined migration is larger and harder to gate.

### s:c20fcff8 (srs spec)
Title: The level test: a spec rule must be declarable and checkable, or it is an authoring rule
Chosen (the decision statement): A normative statement belongs in the SRS specification only if some repository can DECLARE it through SRS machinery and some implementation can CHECK it. If it can only be obeyed, it is an authoring or governance rule and lives at that level - this repository's spec-language guide, or the charter. Declarable and checkable are one conjunction: a constraint nobody can state in a repository's own data is not made normative by an implementation enforcing it, and a constraint that is declarable but that no implementation reads is an affordance without a contract (layer rule 6), not a rule.

This generalises rfc-decision-1e7c0c8e from the one clause it was written for into a standing placement test. That record ruled, of rfc-decision-5f8204bc's instance clause alone, verbatim: "The standard and its tooling provide mechanisms for retiring instances ... and enforce nothing beyond honesty about w
Alternatives considered (as recorded): (1) Leave rfc-decision-1e7c0c8e clause-scoped and apply its principle ad hoc, unit by unit. Rejected: that is the status quo, and it is what produced about nineteen restatements of one authoring rule as universal spec text; a principle with no section in the compass is re-derived (or not) by every reader, which is the drift shape the charter names. (2) State the test with two dispositions only - relocate or retire - which is what design-note 044 R10 says on its own. Rejected by the owner: it would cut rules whose only defect is that the machinery is unbuilt (RFC-042 [R2] single-parent, precedes acyclicity, the naming grammar of mechanism-b3c293f9), turning an honesty measure into a demolition order and foreclosing the very capabilities srs#820 exists to add. (3) Make the test a mechanical check rather than a review test. Rejected: "can some repository declare this" has no machine predicate today, and a guard that could be written would only re-express the reviewer's judgement as a keyword scan - the observability-pressure audit's own warning about citing a test without honouring it. (4) Treat this as a correction to rfc-decision-1e7c0c8e rather than a successor. Rejected under rfc-decision-4431046e's test: a reader acting on 1e7c0c8e as written applies it to rfc-decision-5f8204bc's instance clause and nothing else; a reader acting on this record applies it to every normative statement in the spec. The position's reach changed, so it ships as a successor record and 1e7c0c8e is never edited.

### s:c4fffe93 (srs spec)
Title: Replace valueType with orthogonal fieldType facets
Chosen (the decision statement): A Field expresses datatype, cardinality, value domain, format, and constraints as independent fieldType facets instead of extending the conflated valueType enum with more parallel patch properties.
Alternatives considered (as recorded): - Keep valueType and add composite as a ninth enum value.
- Keep separate contentFormat, allowed-values, validation-rule, and repeatable mechanisms.

### s:c8704763 (srs spec)
Title: Every reference names its strength: the Reference taxonomy
Chosen (the decision statement): Cell: Reference (Air, relational) - declared strength over convenient reach; the axis 1-7 preference (Semantic Integrity over Practical Expression) made mechanism. Four reference strengths, one form each:

PINNED - this thing, this version; semantics frozen. Form: the domain-named {id, version} pair, both required. Appears as an object when the reference is a value (arrays, slots - the ExactTypeRef shape, collapsed to one shared definition) and as flat sibling properties when spread at an entity root (Record.typeId + typeVersion, the extends* pairs). One rule, two positions; the pair, not the wrapper, is the canonical thing. Used by: record-to-type binding, Blueprint.rootTypes, rootTypeRefs, inheritance extends, bundle dependencyRefs.

LINEAGE - this thing, whatever version the context installs. Form: bare UUID (format: uuid); the effective package set resolves. Used by: fieldId in assig
Alternatives considered (as recorded): Object-form-everywhere (rejected: breaking without evidence); keeping ns/name@version as a stored form (rejected: the fifth shape the taxonomy exists to eliminate); implementing aliases (rejected: a second resolution path needing its own justification; returns via the roadmap only with practice-sharing evidence).

### s:cce3c00e (srs spec)
Title: The Pattern Grid: the preference layer for spec decisions
Chosen (the decision statement): The SRS standard adopts the Pattern Grid as its decision framework: a 3x4 matrix of four elements (Fire: action/change; Earth: structure/data; Air: information/process/standards; Water: relation/connection/attribution/trust) crossed with three levels (Individual, Relational, Systemic), yielding twelve zodiac-anchored cells whose row-by-row reading reproduces the zodiac in order, with modality constant on the diagonals (Cardinal = where authority is anchored, Fixed = the stability core, Mutable = where change is legal) and opposites forming six axes.

Ratified with the grid, as one system:

SIX AXIS PREFERENCES (default pole + boundary clause): 1-7 Semantic Integrity over Practical Expression; 2-8 Evolution over Continuity, phase-bound, precommitted to flip to Continuity at the first full public release; 3-9 Shared Coherence over Local Autonomy (all three restating subsection 01-5); 4-10 
Alternatives considered (as recorded): (1) Continue ruling case-at-a-time with the four foundational values as a checklist - rejected: this is the regime under which the audited drift accumulated; values without located tensions and preferences do not compose into consistent rulings. (2) A flat principle list per audit concern (identity, reference, ordering, ...) - rejected: the ten concern families are not orthogonal (three straddle two cells), so a flat list re-creates the unowned-seam problem the audit exposed; the grid locates each concern and names which cell owns a straddle. (3) A different lens set (the T3 cube, a 2x2, per-entity axes) - not pursued: the 3x4 element-by-level matrix is the owner's selected practice instrument, and its in-order zodiac reproduction plus the independent convergence with 01-5 and the census gave positive evidence of fit that alternatives were not tested against.

### s:cd27c096 (srs spec)
Title: A Container is a declared selection that may be an ordered, depth-annotated outline; membership is the entry ids
Chosen (the decision statement): A Container remains a named, declared selection on the EXPRESSION plane and carries no semantic claim. Its membership is the set of instanceIds in its memberInstanceIds entries, read flat, and rootInstanceIds is removed. The entries are ordered and carry an optional depth, which is layout only: it changes no record, relation or other container. Navigation of the repository is the root container's entry order, with the entry named by identityInstanceId excluded, as a declared exception to the rule that position carries no role; navigation below a section still follows the part-of tree. Depth in a rendered document is the Container's declared depth for an arranged section and the part-of tree otherwise. The Container still holds no per-entry data beyond placement, so no layer is crossed and rfc-decision-0118e938 is neither amended nor superseded.
Alternatives considered (as recorded): Keep rootInstanceIds beside an ordered memberInstanceIds. Rejected by the owner: two membership lists, and an id could sit in both. Keep Rule [N+12] as the navigation rule and order only documents. Rejected: a presentational fact would stay derived from semantic edges, and the root container would carry two orders that must agree. Add a per-entry fold or visibility flag. Rejected by the owner: that is an editor mechanic and would have required declaring a layer crossing against rfc-decision-0118e938.

### s:d5524758 (srs spec)
Title: Attribution returns as one optional createdBy Actor on Record, Note and Relation, stamped by the implementation from the session actor
Chosen (the decision statement): Record, Note and Relation each gain one optional property, createdBy, holding an Actor: a kind of human or ai, a stable opaque id and an optional display name, the same shape everywhere and the same actor vocabulary as FieldMeta.source. The implementation sets it once, when a new instance is persisted, from the session actor its host supplies outside the request, and never from the request: a creation request that carries createdBy is refused. Every other operation preserves it exactly, and it is testimony, never authority: validity never depends on it, and an instance without it is unattributed, not invalid. The data model moves to revision 9, so an implementation that does not support revision 9 refuses a corpus carrying createdBy instead of reading or dropping it.
Alternatives considered (as recorded): An author field on the Types that need it. Rejected: it is self-asserted, covers only the Types that declare it, cannot exist on a Relation, and is a second attribution shape beside FieldMeta.source. createdBy plus updatedBy. Deferred: no consumer has asked, a single last-modifier slot loses every earlier modifier now that revisions are removed, and adding it later is additive and reuses the Actor shape. Actors as records, with createdBy holding an instance id. Rejected for now: every repository would need actor records before it could attribute anything, and the inline Actor can be linked to such records later by matching id. Restoring the full removed provenance set. Rejected: zero of 250 relations used it, and the return claimant needs the creator only. Letting a privileged caller supply createdBy. Rejected: any creation path that accepts a supplied actor is the forgery path this closes. No revision bump. Rejected: the schemas are closed, so every pinned binary would reject stamped files one by one or drop the field on rewrite with no corpus-level signal.

### s:d67e3d76 (srs spec)
Title: Express the definition-layer metamodel in its own Field and Type language
Chosen (the decision statement): Field, Type, FieldAssignment, and the in-scope value objects are authored as SRS definitions in the canonical com.semanticops.srs/metamodel package, replacing RFC-004's parallel schema-source vocabulary.
Alternatives considered (as recorded): - Keep RFC-004 schema-definition/schema-member as a second source language.
- Define the metamodel only through hand-authored JSON Schema.

### s:dd0a33fc (srs spec)
Title: Make projection loss explicit in a per-emitter fidelity contract
Chosen (the decision statement): Every metamodel feature is classified as authoritative or approximated for each emitter; authoritative meaning cannot be silently dropped and approximated meaning must emit its documented lossy shape.
Alternatives considered (as recorded): - Describe generation as lossless despite known semantic gaps.
- Silently omit constructs that a target cannot represent.

### s:e5828aa8 (srs spec)
Title: Package upgrade overwrites a clean same-version definition before publication, and refuses it from the first public release
Chosen (the decision statement): RULE (phase-bound). When a package bundle carries a definition with the same `id` and the same `version` as an installed definition but different content, `package upgrade` overwrites the installed definition and refreshes the reference copy recorded at install if the installed definition still equals that reference copy; if the installed definition was edited locally (`conflictState: local-ahead`), it is a conflict, and the local edit is kept and the conflict is reported.

SUNSET. At the first full public release (charter axis 2-8, Evolution flipping to Continuity), the overwrite becomes a refusal: increment over edit.

SETTLED BY EXISTING RFCs, no change needed. Upgrade is in place in the same package boundary with the boundary version bumped (RFC-003). New definition versions install alongside old ones and old versions stay resolvable (RFC-014 R6). Records are never rewritten (RFC-014
Alternatives considered (as recorded): (1) Refuse every same-version difference now (increment over edit). Rejected for formation: packages under development edit v1 in place and every upgrade would fail. (2) Always overwrite, including local edits. Rejected: it destroys a local edit silently. (3) Always keep the local copy. Rejected: a clean copy would never receive its upstream fix.

### s:e99a9437 (srs spec)
Title: The three doors: which change to the spec surface may merge, and by whom
Chosen (the decision statement): Every change to the specification names which door it passes through. There are three doors and one category outside them.

DOOR 1 - EXECUTE A RULING. The change implements a recorded decision. The PR cites the rfc-decision id it executes. No RFC is needed.

DOOR 2 - NEW NORMATIVE MEANING. No ruling covers the change. It goes through an RFC, and the RFC passes the Charter Check. A draft proposes only; folds land at acceptance with the integration manifest.

DOOR 3 - AMEND AN ACCEPTED RFC. A conformance rule, schema element or normative statement that lives under an existing RFC is changed by an RFC revision: the Revision is bumped, the history row is added, and the .md and the canonical records change in the same PR.

NON-NORMATIVE. Tooling, checks, documentation and the programme repository carry no normative meaning. They pass through no door.

HARD RULE. A conformance rule or a file u
Alternatives considered (as recorded): (1) Leave the doors in CLAUDE.md prose only. Rejected: a rule with no record has no home and no drift guard. The prose can be edited by any docs-only commit, which is exactly how srs#581 changed the merge boundary without a ruling. (2) Fold the doors into the decision-modes record as a successor. Rejected: modes are about who resolves, doors are about what may merge. They are two axes, and merge right is their product. One record carrying both would hide the product as a single classification. (3) Build a checker that reads door labels off PR bodies. Rejected for now: the existing compass drift guard already binds this record to its citing section, and the merge gates on master enforce the outcome. A PR-body checker is a new mechanism with no evidence yet that the classification is being misstated.

### p:04b78189 (programme)
Title: Convention: one filename slug scheme for new package definition files (srs-rust#1209)
Chosen (the decision statement): New definition files of every kind, lifecycle and vocabulary included, are named by package_service::definition_rel_path. This is a convention, used as a test until proven; enforcement across the board needs a separate later decision.
Alternatives considered (as recorded): A. Shared scheme as convention for new files, nothing renamed (chosen). B. Enforce now and rename existing files (rejected: churn, and the owner ruled enforcement comes only after proof). C. Do nothing (rejected: the divergence persists and one-way-per-goal is breached).

### p:05c3ddcb (programme)
Title: Work is held as holons: revived units, one GitHub tree, ranked in the period
Chosen (the decision statement): 1. The frozen com.semanticops.programme/unit type is revived as the holon: a connected whole of work. Its record holds the meaning (summary, serves an objective, a 'Done when:' section in body); issue_ref[0] names its tracking issue. 2. The GitHub sub-issue tree is the one authority for a holon's parts and their order, and native blocked-by edges for what must precede; units do not also record parts as relations (landed units keep theirs as history). 3. The active period ranks holons in a new unit_rank field: rank 1 gives P0, any other ranked holon P1, unranked no override; the holon's tier replaces the epic cap for its parts in both directions; the issue's own parked label, the bug floor and bump labels still apply. 4. A handover is a blocked-by edge across lanes (a wg: label, else the central group); a handed-over edge that crosses groups or lands in the central group goes to the owner
Alternatives considered (as recorded): GitHub only: a labelled tracking issue with no record, cheapest but carries no link to an objective or ruling. SRS outline authoritative: a container outline lists the parts and issues mirror it, richest but two trees to keep in sync. A new type beside the frozen unit (kept unit frozen). Expedite flag or display-only priority instead of ranking.

### p:0b1c25b1 (programme)
Title: What counts as a recorded ruling for a group's mandate
Chosen (the decision statement): For WG Third-party ready, a recorded ruling is an rfc-decision record, an accepted RFC requirement or a spec invariant; for implementation-internal work in srs-rust that changes no CLI, payload or WASM contract, an accepted srs-rust ADR also counts. An owner ruling written anywhere else is recorded as a decision before it is cited.
Alternatives considered (as recorded): (a) Spec records only. Leads to one source of authority and a short spec workload before about ten issues can move. Leans to Office over Testimony.
(b) Spec records for the spec; accepted ADRs for implementation-internal work. Leads to the storage-refactor family and #1147 moving at once, while contract changes still need the spec. Follows the layer rule: implementation decisions live in srs-rust ADRs (ADR-048).
(c) Any owner ruling. Leads to the most work moving, with authority that cannot be traced to a record.
(d) Do nothing. Leads to the queue staying dry and the backlog parked.

### p:2637af0a (programme)
Title: An affirmed remedy is a recorded ruling for a group's mandate
Chosen (the decision statement): A remedy the owner has affirmed counts as a recorded ruling for a working group's mandate: a group may build and, with a valid quorum, auto-merge work that executes an affirmed remedy named in the issue and the PR, within its repositories and budget. Anything that changes a spec ruling, a public contract or a gate still escalates.
Alternatives considered (as recorded): Keep owner merge for all remedy work (safe, but every editor PR waits on the owner). Amend each charter to list the remedies it may execute (precise, but a charter edit per remedy). Do nothing (the editor group cannot auto-merge anything it is asked to build).

### p:31e9fd27 (programme)
Title: Federation returns, starting with cross-repository addressing
Chosen (the decision statement): Federation's return is scheduled now, in three steps: (1) take RFC-049 through review to acceptance (cross-repository addressing and read-only resolution); (2) a follow-up RFC for cross-repository relations, so a record in one repository can link to a record in another; (3) multi-repository MCP serving (srs-rust#683) implementing (1), with conformance tests. Until (2) lands, essays stay in muSrs.
Alternatives considered (as recorded): Keep essays in muSrs and defer federation (no spec change; muSrs keeps growing). Copy linked records into each essay repository (duplicates that drift; SP-34). Implement multi-repo MCP ahead of the spec (an implementation leading the spec, against the charter).

### p:3b910d90 (programme)
Title: A working group operates independently only in a mature domain
Chosen (the decision statement): Domains mature. A domain may be defined and affirmed without tensions; it is mature when it names at least three tensions (axes). A working group may be set up in an immature domain, but it must establish a mature domain before it can operate independently. Until then it works under the owner: no delegated merges, every PR owner-merged.
Alternatives considered (as recorded): Require three tensions before a domain is defined or affirmed (blocks early domains, when we do not yet know their trade-offs). Refuse to charter a group on an immature domain (the group best placed to find the tensions cannot be set up to find them). Never require tensions (decisions in a domain have no default measure for their bias).

### p:46bb7a8c (programme)
Title: The clerk's HTTP contract is one OpenAPI 3.1 document that routes, validation and client types derive from
Chosen (the decision statement): clerk/api/openapi.json (OpenAPI 3.1) is the single source of clerk serve's contract: the server's routes and request validation derive from it, and clients generate their types from it.
Alternatives considered (as recorded): Protobuf: a second schema language beside the JSON Schema every SRS schema uses. Schemas generated from code with golden files, as srs-rust does: the route that drifted. Client types written by hand: drift between server and client is found in the browser. Do nothing: the client and server agree only by convention, as the control room and the clerk did when a missing export broke the page on 2026-10-20.

### p:559bfb9e (programme)
Title: Experiment now, unify later
Chosen (the decision statement): We work as if every model of meaning in use now is an experiment: overlapping models are practised side by side, and agents resist collapsing them into one before practice shows how. One way per goal is a principle of the SRS specification and of every code implementation (srs-rust and any other code: the SRS charter's Charter Check, srs-rust ADR-048 rule 3); it cannot hold in the repositories themselves, whose records are where these models are practised.
Alternatives considered (as recorded): Converge the models now under one way per goal (fast, but locks in a guess, and applies a spec and code principle to data where it cannot hold). Pick one model and retire the others (loses what each one teaches). Do nothing (agents keep proposing convergence case by case).

### p:5d5feb79 (programme)
Title: Where an essay keeps each agent's brief (srs-web#567, Funding 2)
Chosen (the decision statement): Add the brief to the essay package as typed data (option A), released as a new essay package version that srs-web then pins. Funding 3 (context documents) and Funding 4 (feedback flag) use the same release.
Alternatives considered (as recorded): A: new field or type in the essay package (typed, validated, needs a release and pin bump). B: Tier-0 notes in a per-essay container (no release, untyped, new client code). C: localStorage (rejected, fails the issue). D: do nothing (Funding 2 stays blocked).

### p:7270e772 (programme)
Title: WG Third-party ready leans Initiator on its domain's three axes
Chosen (the decision statement): WG Third-party ready leans toward Office (Attribution and Repository), Portability (Containment and Portability) and Evolution (Identity and Assertion): the Initiator stance. The domain's paired defaults on axes 5-11 and 1-7 bind it as rules.
Alternatives considered (as recorded): (a) Initiator (Office, Portability, Evolution), with the paired stabilising defaults binding as rules. Leads to fast change now, with drift against the domain visible and bounded.
(b) Steward-like (Office, Possession or Portability, Continuity). Leads to a slower group that matches the domain's eventual phase, before third parties need it.
(c) Do nothing. Leads to an open Seed gate and no reading of drift.

### p:7ee8fa01 (programme)
Title: A decision is shown with its compass
Chosen (the decision statement): Every decision record is set against the principles and standing decisions it rests on, and its rationale says whether it applies or departs from each.
Alternatives considered (as recorded): (a) Do nothing: a decision record need not show what it was weighed against; a reader judges it without its compass.
(b) The compass in prose only: readable, but nothing can check it or bring a decision back with its principles.
(c) A set-against link from the decision to each principle or standing decision it rests on, with the rationale saying applies or departs (chosen).

### p:926c059f (programme)
Title: Rules for adding to the clerk
Chosen (the decision statement): Adopt the ten clerk rules, each enforced by a check in npm test with a shrinking allowlist for existing exceptions.
Alternatives considered (as recorded): (a) Enforced layering. Ten rules:
1. every governance decision is a pure function in lib/practice; bash, YAML and briefs only call 'clerk <cmd>';
2. lib/practice imports only lib/practice and reads no clock;
3. adapters do I/O only and never import scripts;
4. scripts are thin entry points;
5. every lib/practice export is named in a test;
6. each comment marker or label format has one parser;
7. one command contract: dry run by default, one --apply, --json on reads, exit 0/1/2;
8. consumers use only 'clerk <cmd>' or a package exports map;
9. every GitHub write goes through github.mjs, so it is signed;
10. a contract test against the pinned srs CLI.
Each is enforced in npm test with a shrinking allowlist. Leads to drift being caught mechanically, at the cost of about a week of refactoring. Leans to 'one way over many' (Conformance).
(b) The same rules as prose in CLAUDE.md, checked by review. Leads to no build cost, and to drift, as the stale srs-web line shows.
(c) Do nothing: today's CLAUDE.md rules. Leads to the duplicates and fail-open checks staying until something breaks.

### p:9e2c2950 (programme)
Title: The owner can drive a feature idea directly, through the chain
Chosen (the decision statement): An owner feature idea may be grounded on the spot in an owner session (/session or a clerked conversation): a problem and a remedy are suggested, the owner affirms them as worded, and the issue is filed under its epic with Answers:, routed to its group and claimed. Building, the independent review and the merge rules are never skipped. Code built before grounding stays unpushed until the issue is claimed.
Alternatives considered (as recorded): (a) Do nothing: an owner idea goes through Intake once it is in force; until then each session improvises, and work is built ungrounded, as here.
(b) Owner ideas skip the chain: fastest, but the work answers no recorded problem, I1 falls, and groups cannot see or ratify it.
(c) This policy: an owner session grounds the idea on the spot (suggest, affirm, file, route, claim) and only the waiting is removed; nothing in build, review or merge is skipped.

### p:a1b06725 (programme)
Title: A capability enters clerk serve only after it is a clerk command, used for real, unchanged since the last session, and tested
Chosen (the decision statement): A capability enters clerk serve only after it is a clerk command with --json output, has been used for real, has not changed shape since the last session of the group that holds it, and has tests at every layer it touches. Until then it stays in srs-lab.
Alternatives considered (as recorded): Move all of the control room's server code into the clerk now: a larger core holding experiments that still change weekly. Build the service in srs-lab and lift it later: a second home for programme code (SP-49). Do nothing: the lab's dev server stays the only server, and nothing is always on (SP-61).

### p:a8bc55ef (programme)
Title: Who governs the clerk long term
Chosen (the decision statement): Charter a working group for the Programme coordination domain to govern the clerk repository once the central group's hardening lands, with every change to gates, merge rules, quorum, budget, pause or the authority signal kept with the owner.
Alternatives considered (as recorded): (a) Charter 'WG Programme practice' holding Programme coordination and governing the clerk repo. Its mandate: clerk code within the clerk rules (decision on rules for adding to the clerk). Its boundary: any change to gates, merge rules, quorum, budget, pause or the authority signal escalates to the owner. Leads to most clerk PRs merging on a group quorum, while the rules that grant authority stay with the owner. Leans to throughput on the 'Human judgement and agent throughput' tension.
(b) Widen the proposed WG SRS operations (clerk#56) to include the clerk. Leads to one group with fewer seats. But that proposal lists the clerk as out of scope, and it mixes product reliability (MEANING and OPERATION of SRS) with governance machinery: two layers in one mandate.
(c) Do nothing: the central group holds the clerk. Leads to every clerk PR staying an owner merge, and the owner remaining the bottleneck and the only check on the merge machinery.

### p:a8e833f1 (programme)
Title: Every release can open every repository that exists
Chosen (the decision statement): A new data-model revision lands in one change together with the migration that brings older repositories to it, so every release can open every repository that exists. Preparation that alters no behaviour may land ahead of it.
Alternatives considered (as recorded): 1. One change: the reader of a new revision lands together with the migration from older repositories; preparation that alters no behaviour may land ahead. Leads to: master is always releasable; one larger review per revision.
2. Dual read: each revision first ships a reader of both forms, then the migration in a later change. Leads to: smaller reviews, plus interim code to carry and remove every time.
3. Release after the migration: the reader merges first and releases wait until the migration lands. Leads to: every unrelated fix is held up behind the revision.
4. Do nothing: each revision chooses its own order. Leads to: the question is argued again every time, and a reader landed alone can leave every repository unreadable.

### p:b80d2d1e (programme)
Title: Escalation: what naming rule do Type and Vocabulary names follow? (srs#236)
Chosen (the decision statement): Lets investigate the history of this a little more. How did we end up with this split? Has kebab case not been selected previously? Does this mean two ways of doing things? Check this against principles?
Alternatives considered (as recorded): 1. Rename all 151 Type and Vocabulary names to snake_case. 2. Split the convention by kind: Field names snake_case, Type and Vocabulary names kebab-case (recommended). 3. Grandfather existing names and enforce only for new ones.

### p:bbb03bff (programme)
Title: srs-rust#1417 (RFC-052): how to land the root-container move, since PR 1 alone would refuse every existing repository
Chosen (the decision statement): answered by a8e833f1: a new data-model revision lands in one change with its migration. It is then ratified as a one-line case of the practice, and leaves your agenda.
Alternatives considered (as recorded): 1. One PR: loader plus 9 to 10 migration together. 2. Two PRs with a temporary dual-read loader. 3. Two PRs as written, PR 1 merged but unreleased until PR 2 lands. 4. Do nothing.

### p:bf4a5af5 (programme)
Title: Escalation: how do structured diagnostics reach the existing text lists? (srs-rust#1264)
Chosen (the decision statement): Land the optional `code` on validation diagnostics first (ruling scope item 1), additive and without a revision bump; deliver structured diagnostics on the other surfaces as a parallel list beside the existing text list, and decide separately when to retire the text list. Legacy code renames go in their own issue.
Alternatives considered (as recorded): A. Replace text lists with objects on every surface in one release. B. Add a structured list beside the text list, retire the text later. C. Add the optional code to validation results only now, other surfaces in later issues (recommended first step). D. Do nothing.

### p:c04d8164 (programme)
Title: The clerk's runtime imports nothing outside Node's standard library
Chosen (the decision statement): The clerk's runtime (bin, lib and scripts) imports only Node built-ins and its own modules. npm packages are devDependencies, used by tests only.
Alternatives considered (as recorded): Allow runtime dependencies and add `npm ci` to every workflow and routine: every caller gains an install step and a network fetch, and a missed one breaks only when it runs. Scope the rule to the code the workflows and routines run, and let clerk serve (on the owner's desktop, where `npm ci` is cheap) have dependencies: clerk serve imports the same lib/adapters and lib/practice the workflows run, so a dependency added for it would creep into shared modules, and the line between the two would need a guard of its own. Vendor the dependencies into the repository: copied code to keep current. Do nothing: nothing stops the next change from adding one, and the break shows first in a scheduled job.

### p:c7fefad9 (programme)
Title: Diagnostics shape before srs-rust#1339
Chosen (the decision statement): Build srs-rust#1264 (or ratify its Diagnostic shape) first; srs-rust#1339 follows as a mechanical conversion. The builder does not define the shared type.
Alternatives considered (as recorded): A) Land srs-rust#1264 first, then build #1339. B) Builder defines the Diagnostic type within #1339. C) Do nothing.

### p:cdd272a3 (programme)
Title: Polarity is assigned per domain and per axis: an axis-in-domain record
Chosen (the decision statement): Owner, 2026-10-22: 'Ideally, we need to assign a yin/yang pole. These will again be relative to the axis and domain. The same pole may be yang when we zoom in to a different boundary.' Chosen: an axis record per domain. New method type com.semanticops.method/axis-in-domain v1. Fields: title, line (1-3, line 1 at the bottom), summary. Relations: refines to its tension, in-domain to the domain record, and a new yang-pole to one of that tension's two poles, exactly one of each. A domain has at most three affirmed axes, on distinct lines, with distinct tensions. A domain with no affirmed axes inherits its parent's. A narrower domain flips a pole by holding its own axis for the same tension with the other yang-pole. Polarity exists only on an axis. The global Initiator/refines rule only suggests yang-pole on agent-suggested axes. 'First three tensions in the outline' is retired as the rule fo
Alternatives considered (as recorded): 1. An axis-in-domain record per domain (chosen). 2. A yang-in relation only, from pole to domain, one per tension per context: lighter, but a relation has no Suggested/Affirmed layers. 3. Keep global polarity and mark tensions without it as unrecorded: zooming in cannot flip a pole.

### p:d529294a (programme)
Title: Pin bumps are automatable PRs
Chosen (the decision statement): A PR that only bumps a pin to something already merged or released at its source is gate:auto-merge, for the central group and for every working group.
Alternatives considered (as recorded): (a) A PR whose diff only changes pinned versions, tags or commit SHAs of something already merged or released at its source is gate:auto-merge, and merges when clean like any other. A pin bump that also changes code is classed by that code. Leads to deploys landing without a second owner review; the review happened at the source. Leans to throughput on 'Human judgement and agent throughput'.
(b) The same, but auto-merge only with a green dry run or CI run that exercises the new version. Leads to one more gate, which most pins already get from CI.
(c) Do nothing: pin bumps stay owner merges, and groups keep escalating them. Leads to the owner re-reviewing work already reviewed at its source.

### p:e745e9b2 (programme)
Title: The owner's desk is reachable only from loopback and the owner's private ZeroTier network
Chosen (the decision statement): clerk serve binds to loopback only. The control room is published only to loopback and the owner's private ZeroTier network, and requests from other sources are dropped. Membership of that network, which the owner authorises, is the access control.
Alternatives considered (as recorded): The plain LAN with bearer tokens. The LAN with TLS and tokens. A hosted service acting as a bot identity. Do nothing: the dev server on localhost only.

### p:f58db200 (programme)
Title: Meaning in the definition over meaning in the surface
Chosen (the decision statement): Meaning in the definition is preferred over meaning in the surface, unless the surface is the only reader and nothing else acts on it.
Alternatives considered (as recorded): (a) Do nothing: meaning stays wherever each tool put it; the srs-web#595 failure repeats whenever two readers differ.
(b) Code constants in the clerk: code agrees with itself, but records and briefs cannot read the meaning and the group does not hold it as data (SP-76); against the direction that all meaning is in SRS (srs 19997e24).
(c) SRS definitions that also carry the display strings (meta on each state): one home, but presentation inside the meaning layer is a layer crossing (srs 9ee14517 rule 4) and load-bearing data in an unvalidated bag (ADR-048 a).
(d) SRS definitions hold the meaning; each programme binds its surfaces to them as typed records (chosen): meaning reusable across programmes, surfaces owned by the programme, checked against the definition.

### p:ff946eb1 (programme)
Title: A response to a comment is a typed comment on it; conversation stays flat
Chosen (the decision statement): A writer's judgement on a comment is a comment of its own that comments-on the target comment, with a response kind: agree or disagree (the thumbs), done or rejected (a task; the text is the reason). Only response kinds may target a comment; every other comment targets a record that is not a comment, and conversation stays a flat sequence per paragraph (ruling 3 of semanticops.com#17 stands for conversation). The current verdict or task state is the latest response by that author; changing one's mind is a new response, and history is kept. Clients show responses as badges on their target, not as nested replies.
Alternatives considered (as recorded): (a) Fields on the comment (task_state, verdict): simplest read, but the writer edits the agent's record and the judgement's provenance is lost. Rejected by the owner.
(b) Typed response comments, response kinds only (chosen): a judgement is the writer's own comment that comments-on the target comment; only response kinds may target a comment; shown as a badge on the target.
(c) Any comment may reply to any comment: general threads; supersedes ruling 3. Not now.
(d) Do nothing: comments stay text only and both remedies cannot land.