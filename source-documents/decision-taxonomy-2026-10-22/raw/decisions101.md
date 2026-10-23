### s:0118e938 (srs spec, 2026-09-06)
Title: A construct has one layer: a crossing is a stated goal, never a design option
Statement: Layer rule 4 is refined. Its ruling clause - a crossing is declared where it occurs, and the lower layer wins - stands. Its permission clause - 'where a layer legitimately carries another layer's data' - is withdrawn as a standing option.

The rule now reads: A CONSTRUCT HAS ONE LAYER. Every construct is defined on one plane and one layer, and its schema carries only that layer's data. A layer carries another layer's data only for a specific, named goal that cannot be met within one layer. That goal is stated in the decision or RFC that introduces the crossing, the crossing is declared at the site where it occurs, and conflicts resolve downward, visibly. Absent a stated goal the layer test fails: the proposal is re-drawn inside one layer, not accepted with a declaration attached. Identity conflicts remain fatal per the Earth rule - they are not crossings.

The two examples the original rule named are re-read under this reading. Denormalized type hints on a Record (typeNamespace, typeName; Invariant 28) are a crossing with a stated goal - a record file is readable without its package present - and remain the one grandfathered crossing in the core. Composition order defaulting to the
Scope: Layer rule 4 of rfc-decision-9ee14517, every construct schema in the core and the extensions, and the layer test applied to every proposal. Does not change rules 1, 2, 3, 5 or 6. Does not alter Invariant 28. Does not change any schema on disk today.

### s:0225099b (srs spec, 2026-08-21)
Title: Defaults arrive later, as one mechanism
Statement: Defaults are an essential FUTURE capability, and both current defaultValue sites are removed now. `Field.defaultValue` (already ruled removed, #234 2026-08-08) and `FieldAssignment.defaultValue` are removed together in the #273 train — the latter EXPLICITLY SUPERSEDING #274's ledger row "Generate defaultValue". When defaults arrive they arrive once, as a single layered-override capability — a higher level overrides a lower: a Protocol may override a Type, which may override a Field — designed whole in its own RFC as a versioned metamodel capability. There must never be two ways of doing the job; no fragment of the old mechanism survives to seed a second way.
Scope: Definition-layer defaults: removal now, the shape of their future return, and the supersession of #274's FieldAssignment.defaultValue ledger row

### s:0750c62f (srs spec, 2026-09-06)
Title: A Container is a declared selection: it lives on the expression plane
Statement: A Container is a named, declared selection of instances. It lives on the EXPRESSION plane, at the selection layer. It carries no meaning of its own: its identity record is the semantic carrier, which is why a Container has no Fields (design-note 013).

MEANING between instances lives in Relations. The contains relation is the part-of tree - 'A is semantically inside B' - and it is the tree that the concept graph, navigation depth, layering and the tree walk are built on. A Container never asserts a semantic claim; that is a Relation's job.

Consequences, each following from the plane assignment rather than argued separately:

1. MEMBERSHIP IS DECLARED. A selection is a declaration. Container.memberInstanceIds and rootInstanceIds are the membership; the contains traversal is no longer a membership rule. Invariant I-66's traversal branch is superseded. This is RFC-034 Change C, adopted.

2. NESTING IS DECLARED. A sub-selection is a declaration. RFC-034's childContainerIds is the mechanism.

3. NAVIGATION BELOW THE ROOT FOLLOWS THE PART-OF TREE. Containers mark where a scope begins; contains says what is inside it. There is one tree, with named scopes over it, not two trees.

4. DEPTH
Scope: The Container construct and every consumer of it: membership resolution, navigation derivation, section sourcing, slice bounding, Composition matching, and the tree walk. Does not change the Container schema's properties; changes what they mean. Does not touch the contains relation's definition; confirms its role as the part-of tree.

### s:0c403e15 (srs spec, 2026-09-17)
Title: Concepts describe themselves: bridging and introductory prose is the concept record's own prose
Statement: A concept record carries the human-readable prose that introduces it and bridges to what follows. That prose is part of the concept, not an accessory to it, and it renders at the concept's heading in every projection of the corpus.

A Part's introduction is the Part concept's prose. There is no separate object holding the words that open a Part; the Part is a concept, and a concept describes itself.

No narrative leaf type is added. No presentation-only text is added to a Composition section. Where a reader needs to be told what is coming or how what they have just read connects to what follows, the concept that owns the material says it.
Scope: Where bridging and introductory prose lives in the com.semanticops.spec authoring package: the concept Type's own prose fields and their rendering at the concept's heading. Does not add, remove or change any Type. Does not change the leaf Types of RFC-042 Change B. Does not decide the wording of any particular concept's prose.

### s:0df19d60 (srs spec, 2026-10-01)
Title: Context order is declared on the Container as an ordered outline of entries; the Composition declares only where its order comes from
Statement: The sequence and nesting of the records a document holds are declared on the document's Container, as the ordered list memberInstanceIds whose entries carry an instanceId and an optional depth. The set of instanceIds is the membership, read flat. Nesting is derived from depth and never stored. A Composition section names no record and holds no order: it declares only an ordering source, either arranged (render the container's entries in their own sequence and at their own depth) or rule (order by a field or by Rule [N+12]). Membership and nesting of scopes stay with Containers as rfc-decision-8aed3412 ruled, with childContainerIds for nested scopes; what is superseded is the single sentence that located context order in the Composition's memberOrder, which is retired. The precedes relation remains semantic order only and is neither removed nor read for presentation.
Scope: Where a document's presentational sequence is declared: the Container's memberInstanceIds entries, the Composition section's ordering.source, and the retirement of ordering.memberOrder (RFC-015 [N+29], Invariants I-126 and I-127). Does not change which relations are the MEANING tree, does not change childContainerIds or the nesting of scopes, and does not change rfc-decision-8aed3412's other dispo

### s:16b20c56 (srs spec, 2026-08-22)
Title: Attribution is optional, single-shaped, and never authority
Statement: Axis 4-10 (Office over Testimony - Athena over Aphrodite) and the Attribution cell (stated over assumed), ruled as the cell's foundation principle:

OPTIONAL - attribution is never required for validity. An unattributed statement is unattributed, not invalid and not implicitly attributed to anyone.

SINGLE-SHAPED - when attribution is expressed, there is ONE shape for who/when/why across the standard: one asserter vocabulary (one casing, one set of kinds - replacing the five spellings the audit found), one timestamp convention, one reference-to-source convention (sourceRefs). The concrete shape is designed when the machinery returns (see below); this ruling fixes its constraints in advance.

NEVER AUTHORITY - attribution informs trust and diagnosis; it never overrides the record. The catalog, the manifest, the validated content are office; who-said-so is testimony, which fills gaps and can be PROMOTED into office only by a verification mechanism (a signature, a ratified decision, a verified publisher) - promotion is the sanctioned path by which testimony hardens, and it produces office artifacts, not privileged testimony.

With the principle ruled, the current machinery's removal (
Scope: Establishes the Attribution cell's principle and the constraints on any future attribution mechanism. Enables the removal of the current provenance machinery (executed under the attested-removals record). Governs the future verification design (testimony-to-office promotion) when practice-sharing demands publisher trust. The single-shape constraint retroactively governs FieldMeta if it survives in

### s:1967b8eb (srs spec, 2026-09-16)
Title: The .srs repository marker is a directory; its non-emptiness convention is spec, the satisfying file is implementation-owned
Statement: (1) The `.srs` repository marker is a directory, not a file. A conforming repository's marker is `is_dir(".srs")`, matching Invariant 45, the `ext:repository` mechanism, and RFC-038 [R5]. This ratifies, retroactively, the ruling the owner made on srs#313 (2026-08-02) and that commit 88323e2 already folded into normative text.

(2) The marker directory's non-emptiness is a convention (SHOULD), not a MUST justified by git. An emptied `.srs/` does not fail silently: `repository_exists()`'s `is_dir` check returns false and the tool reports "not an SRS repository" at first use — a loud but misdiagnosable failure (a documentation problem, not a conformance problem), which is why this is a convention rather than a hard rule. The spec does not encode a VCS's limitation (git drops empty directories) as a property of the SRS format; the convention stands on its own terms, independent of git.

(3) The convention's default member is an "About SRS" orientation document, whose purpose is discovery and LLM orientation for a reader who lands cold in the repository — not merely keeping the directory alive under git (that survival is a side effect of the file being worth having, not its justificatio
Scope: Governs the `.srs` marker's kind (directory, part 1), the convention-not-MUST status of its non-emptiness and the reasoning for that status (part 2), the discovery/orientation purpose of its conventional default member (part 3), and the delegation of selecting and producing that member to the implementation (part 4) — across every SRS repository (spec, srs-rust, srs-vscode, and any conforming corp

### s:19997e24 (srs spec, 2026-08-26)
Title: Conformance checks are declared in one registry
Statement: Cell: Conformance. Every spec-repo conformance check is declared in a single registry (scripts/checks.json) rather than hand-wired: each entry names the check's id, script, arguments, tier (always | pinned-cli | ci-only), the grid cell it guards, the governing decision or RFC that introduced it, and an optional expiry for checks born of grandfathering. validate-all.mjs becomes a loop over the registry filtered by tier, and it ends every run by naming the checks deferred to other tiers, so its exit 0 can never again be mistaken for the full gate surface. A membership guard enforces the registry: a check script present on disk but absent from the registry fails the build, which makes piecemeal addition structurally impossible. New checks follow one naming convention; existing script names migrate only when next touched (rename is a migration). The registry is a stepping stone, not the destination: the end state is the checks described as records - the spec repository declaring its own conformance gates the way it declares everything else, with the JSON registry generated as a projection. Owner, 2026-08-26: as long as we keep working towards the goal where all meaning is in SRS we are
Scope: Binds how conformance checks are added to the srs spec repository from ratification: declaration in the registry precedes wiring, the membership guard enforces it, and the tier vocabulary is the one named here. Does not force-rename existing scripts, does not bind sibling repositories (their gates follow their own contracts), and does not build the checks-as-records fold now - that lands with the 

### s:1e5df0d9 (srs spec, 2026-08-02)
Title: Define the SRS decision-log inclusion boundary
Statement: Maintain the SRS RFC decision log as a curated record of active consequential judgment. Record a decision when legitimate alternatives remained and the choice establishes, changes, applies with discretion, excepts, or supersedes guidance that future work may need to understand. Do not record a mechanical derivation: when competent contributors accepting the same governing decisions and evidence have only one valid outcome, record the task, implementation consequence, test, or pull request instead.
Scope: SRS RFC decision log and consequential SRS technical decisions

### s:1e7c0c8e (srs spec, 2026-09-10)
Title: Retirement rules speak at two levels; a Type elimination deletes retired instances once provenance is recorded
Statement: Retirement rules exist at two levels, and rfc-decision-5f8204bc's instance clause was written at the wrong one without saying so.

The standard and its tooling provide mechanisms for retiring instances - the supersedes, refines, and derived-from relation types, lifecycle states, and record delete - and enforce nothing beyond honesty about what each mechanism does. Provenance (a successor recording what it replaced) is a capability the tool must make achievable; it is not a mandate the tool imposes on every repository that uses it. A generic tool defines what is possible, not what every corpus must do with it.

rfc-decision-5f8204bc's instance clause reads, verbatim: "INSTANCES (Records) retire by SUPERSESSION - successor-and-link (supersedes/refines), per the Fire column principle; history stays addressable." That sentence is repository-governance policy, adopted by governed corpora such as this one - not a rule of the standard itself. A future worker or agent must not read it as binding every SRS repository's retirement behavior; it binds only corpora that adopt this charter.

The owner's ruling states the distinction directly: "we are building a generic tool. We are defining rule
Scope: The instance clause of rfc-decision-5f8204bc only - the sentence quoted above and nothing else in that record. Every other clause of 5f8204bc stands exactly as ratified: DEFINITIONS (Field, Type, View, Composition, Theme, Blueprint, Protocol, Package definitions) retire by deletion with version history as the trail; SUBSTRATE ENTRIES (Terms, LifecycleStates, RelationTypeDefinitions) retire by stat

### s:2a1e1590 (srs spec, 2026-08-21)
Title: State is mutable, semantics are not: the Fire carve-out, and Revisions and Changelog are removed
Statement: Cell: Versioning (Fire, individual), carving the boundary of the column principle change preserves what it replaces. The Fire principle governs SEMANTIC content: a record's meaning changes by version increment or successor-and-link, never in place. STATE is the sanctioned exception: designated state fields - lifecycleState is the canonical case - mutate in place, because a state value is the record's current position in a process, not part of its meaning. The carve-out is exact: a field is state only if it is bound to a defined machine (a Lifecycle) whose transitions make some changes legal and others not; nothing else earns in-place mutation by calling itself state.

With the carve-out ruled, the transition-history machinery loses its structural necessity and its removal follows under axis 2-8's evidence clause: per-field Revision sidecars (revisions.json) and ChangelogCollection (changelog.json) are removed from the standard, with the ext:addressability coupling that depends on revision provenance ([LC-AX2]'s provenance.lifecycleTransition matching) simplified accordingly. Dormancy rule applies: return trigger is a real consumer needing transition history or field-level audit - t
Scope: Amends the Fire column principle's boundary in the Pattern Grid (rfc-decision-cce3c00e): increment over edit governs semantics; machine-bound state mutates in place. Removes revisions.json, changelog.json, ext:changelog prose records, and the revision-dependent clauses of ext:addressability's lifecycle coupling. Does not touch: the Lifecycle machinery itself (strengthened by the status-unification

### s:2e0cd70a (srs spec, 2026-08-20)
Title: Carry meaning you do not recognise
Statement: Unknown content in instance-layer data is governed by a three-verb contract with graded diagnostics. DETECT: unknown elements are always identified — content in `meta` gets at most a quiet mention (it is the sanctioned extension carrier; not recognising its contents is expected, not a defect); unknown fields elsewhere draw a louder warning. LOAD: unknown instance-layer content never fails a load — it must not break the reader, and the reader should not break it. WRITE: a conformant writer preserves what it does not understand (the ideal), or refuses loudly when preservation is genuinely impossible; silently discarding unknown content is the one forbidden behaviour. Emitted JSON Schemas express the PRODUCTION contract — closed except `meta` — while round-tripped out-of-contract keys are carried despite being schema-invalid: the validation complaint IS the louder diagnostic. The definition layer is unchanged by this decision: definitions remain reject-unknown (they are the trust boundary), and extension remains inheritance-only.
Scope: Instance-layer unknown-content handling: reader, writer, and emitted-schema conformance

### s:2f048790 (srs spec, 2026-07-31)
Title: Generate structural reference projections from semantic records
Statement: Resolved Field, Type, and value-object records are the semantic source; contributors keep narrative in published subsection records around a stable typed view slot, while tooling generates a property-table reference, optional pseudo-IDL, and schema from the resolved model.
Scope: Canonical prose and structural reference publication

### s:2fb87c1e (srs spec, 2026-08-01)
Title: Make the authoritative store, not the manifest, define repository content
Statement: A repository's authoritative content is what its authoritative store reports across the instance, relation, container, source-document, definition, and extension sets; manifest.json is not content authority except for its inline root container.
Scope: Repository content authority and enumeration

### s:4269c744 (srs spec, 2026-07-31)
Title: Place composite-renderer dispatch in the view layer
Statement: Composite renderer selection is owned by the view layer rather than Field or Type, so different views may present the same semantic records differently.
Scope: Composite rendering and view semantics

### s:43249f53 (srs spec, 2026-08-21)
Title: One state mechanism: workflow status is a Lifecycle
Statement: Cell: Conformance (one way over many), with Versioning owning the state value. Anything in the standard's own corpus or its packages that models workflow state - named stages a record moves through - is a Lifecycle (ext:lifecycle): a defined state set with transitions, bound to the Type via lifecycleRef, with the record's position carried in lifecycleState. Bare status enum Fields for workflow state are retired as a parallel mechanism. First migration: the spec's own rfc_status field (49 records, seven values, no transitions) becomes a real spec-rfc-process Lifecycle - the standard dogfoods its own state machinery, and RFC supersession gains RFC-022 requiresRelation coupling (rfc_status superseded requires the supersedes assertion it today carries only in prose).

The line this draws: Lifecycle = workflow state on records (Fire, individual: where the record is in its process). Substrate entry status (active/deprecated/tombstone/retired) is NOT workflow state - it is the retirement mechanism of the substrate layer under axis 5-11 (Reliability over Renewal) and stays as-is. Enum value domains remain legal for genuinely stateless labels; the test is transitions: if some value changes 
Scope: Governs the spec repository's rfc-status field and all future package authoring guidance: workflow state is modelled as Lifecycle, not enum. Does not change the substrate retirement status vocabulary (axis 5-11 territory), does not resurrect Relation.status (removed with relation provenance machinery), and does not forbid stateless enum value domains. Execution is a post-train unit: define the spe

### s:4431046e (srs spec, 2026-09-06)
Title: A correction is not a refinement: how a decision record may change
Statement: A decision record may change in exactly two ways, and they are not the same act.

A REFINEMENT changes the position the record takes - what was decided, or on what condition it holds. A refinement is recorded as a SUCCESSOR decision record linked by a supersedes relation. The earlier record is never edited. This is rfc-decision-cce3c00e's standing rule, unchanged.

A CORRECTION fixes a statement of fact that was wrong when written, without changing the position: a misidentified property, a wrong count, a mistaken citation, a scope note that prevents a misreading. A correction MAY be made in place. It MUST carry a visible marker in the record itself - not only in the commit message - naming what was corrected and when, so a reader of the corpus can see that the record once said otherwise.

The test between them: if a reader who acted on the earlier text would have acted differently, it is a refinement. If they would have acted the same way and merely held a wrong detail, it is a correction.

Why corrections are not forced through succession: a decision log that accumulates successor records for misspellings stops being read, and an unread mechanism defends nothing. Succession is res
Scope: Governs how any decision record in this repository changes after creation. Does not govern records of other types, which have their own lifecycle and versioning rules, and does not change what a decision record contains.

### s:4f1e12e5 (srs spec, 2026-08-22)
Title: The attested removals: pruning the dormant machinery
Statement: Under the dormancy rule (rfc-decision-cce3c00e) and axis 2-8's evidence clause, the constructs the 2026-08-21 usage attestation found exercised nowhere are removed from the standard. Each entry keeps its cell's name and carries its return trigger to the roadmap; a return re-enters through the charter as an evidence-shaped design.

REMOVED:
1. Relation provenance fields (assertedBy, confidence, status, createdBy, validFrom, validUntil) - 0 of 250 relations anywhere. Cell: Attribution; the cell's principle is ruled separately and survives the machinery. Trigger: the attribution mechanism's return claimant.
2. Federation entities (registry, events, cross-repository relation fields) - zero data; 34 prose records and 7 invariants specify it. Cell: Portability. Return: COMMITTED, not evidence-gated - federation is core to SRS (owner, 2026-08-22); this removal is a deliberate reset of a design that predates real practice, not a judgment on the capability. The redesign returns as a planned roadmap phase, grounded in the sharing forms that actually emerged (bundles, slices, git-hosted repositories) and the axis 4-10 verification path; the owner schedules it. The travel mandate covers artifa
Scope: Authorizes the removal execution units (relation provenance, federation, small surfaces) and the sourceRole in-train migration. Each removal PR cites this record; each roadmap entry carries cell + trigger and lands when the roadmap (PR #389) merges. Implementation follow-ups in srs-rust are filed as each spec unit lands.

### s:53635966 (srs spec, 2026-08-21)
Title: Tier 1 was a theory: TypedRecord is removed
Statement: Cell: Identity (Earth, individual), under axis 2-8's evidence clause. The record model goes from three tiers to two: Tier 0 (Note - free text sections, no type binding) and Tier 2 (Record - instantiated Type). Tier 1 (TypedRecord - named fields without a Type binding) and the graduatedAt timestamps are removed from the standard. The gradual-refinement theory the middle tier expressed - meaning matures from free text toward typed structure - survives without it: graduation is Note to Record, linked by derived-from, and partial structure inside a Note remains what it always was, sections. Tier numbering (0 and 2) is retained as-is to keep every existing reference, invariant, and discussion stable; renumbering would be churn without meaning.
Scope: Removes: the TypedRecord entity (typed-record.json), the graduatedAt field on Note and TypedRecord, Tier 1 from the discovery Text Projection (re-expressed I-120 covers two tiers), tier-1 handling in implementations, and Tier 1 from the tier taxonomy prose. Keeps: Note (Tier 0) and Record (Tier 2) unchanged; the graduation concept as Note-to-Record via derived-from. Execution is its own breaking u

### s:5c1e3068 (srs spec, 2026-07-29)
Title: Put a deterministic target-neutral IR between records and emitters
Statement: Projection resolves semantic meaning into a target-neutral intermediate representation before any target back end renders it.
Scope: Schema projection architecture

### s:5f18603e (srs spec, 2026-08-22)
Title: Federation's return is committed, not evidence-gated
Statement: Federation returns to SRS as a planned roadmap phase. Its return is COMMITTED and is not gated on evidence of demand - federation is core to SRS. The 2026-08-21 removal was a deliberate reset of a design that predated real practice, not a judgment on the capability.

The redesign is grounded in the sharing forms that actually emerged - bundles, slices, git-hosted repositories - and in the axis 4-10 verification path. The owner schedules it. The travel mandate covers artifact-form portability meanwhile.

WHAT THIS CHANGED. rfc-decision-4f1e12e5, as accepted on 2026-08-21, gated the return on evidence. Its federation entry read, verbatim:

  'Trigger: a second real repository needing live cross-repo assertions; the travel mandate covers artifact-form portability meanwhile.'

That position is superseded by this record. The change was made on 2026-08-22 (commit b623475) as an in-place edit to 4f1e12e5, before the correction-versus-refinement rule existed to say it needed a record of its own.
Scope: The federation entry of rfc-decision-4f1e12e5 only. Every other entry in that record - the other removals, the dispositions without removal, and the EXPLICITLY KEPT section - stands unchanged and is not touched by this record.

### s:5f8204bc (srs spec, 2026-08-22)
Title: Retirement has one way per layer
Statement: Axis 5-11 (Reliability over Renewal) applied: each layer has exactly one retirement mechanism, and renewal never silently breaks a standing contract.

DEFINITIONS (Field, Type, View, Composition, Theme, Blueprint, Protocol, Package definitions) retire by DELETION, with version history as the trail - there is no deprecation state at the definition layer (the audit's carve-out C10, now stated). A definition that must signal replacement does so by a successor version; consumers pin, so deletion cannot break a pinned reference retroactively.

SUBSTRATE ENTRIES (Terms, LifecycleStates, RelationTypeDefinitions) retire by STATUS - the existing four-stage vocabulary (active, deprecated, tombstone, retired) - because instance data addresses them by string key and cannot be version-pinned; the key must keep resolving while carrying its retirement.

INSTANCES (Records) retire by SUPERSESSION - successor-and-link (supersedes/refines), per the Fire column principle; history stays addressable.

Cross-layer rules: every retirement exception (allowlist entry, grandfather clause, compatibility label) carries its expiry condition and dies when the condition is met - a justification whose cited groun
Scope: Governs all future retirements and the removal executions now queued. Dispositioned findings: C10 (stated as rule), C15 direction (extension retirement becomes a status-bearing declaration when extensions gain structure - until then prose retirement is a known gap, not a sanctioned mechanism), C16, C20 (the word 'tombstone' stays substrate-only; the source-document index concept is renamed in its 

### s:628cf6c4 (srs spec, 2026-08-22)
Title: A rename is a migration
Statement: Axis 3-9 (Shared Coherence over Local Autonomy) with Description's preference (one name over many): a name in the standard - a property key, a substrate key, an entity name, a spec term - is a contract, and changing one is a MIGRATION, never an edit. A rename ships as: the ruled decision naming old and new; a deterministic data/schema migration where stored forms carry the name; a generation stamp where the carrier changes (dataModelRevision); and the one-name end state - the old name does not linger as an accepted alias (KEYED is key-only per the reference taxonomy; substrate renames go through supersession status per the retirement ruling). Already-executed instances of this pattern are its precedent, not exceptions: valueType to fieldType (RFC-032), properties to meta (#433), Evolution to Governance (grid cell), DocumentView to Composition (#272). A rename that cannot afford its migration is not ready to happen.
Scope: Governs every future rename in spec text, schemas, substrate keys, and grid vocabulary. The pending renames it disciplines: properties→meta (srs#433, already scoped this way), Composition (#272), packageRef external→remote and the dependencyRefs→packageDependencies rename (reference-taxonomy execution), the evidence/evidences vocabulary reconciliation (#273 train). Stale-reference cleanups from pa

### s:6523cf5e (srs spec, 2026-07-29)
Title: Keep presentation hints outside the semantic type model
Statement: Editor and composite-renderer hints remain presentation-layer concerns and are not encoded as fieldType facets.
Scope: Semantic model and rendering boundary

### s:693b9458 (srs spec, 2026-08-01)
Title: Pin the CLI that defines a required semantic drift gate
Statement: The required release-drift check uses one named srs-rust release declared once, so its semantic rendering behavior changes only through a reviewable repository commit.
Scope: Required release-drift conformance gate

### s:6fc7e142 (srs spec, 2026-08-21)
Title: One escape bag, one name: meta
Statement: The per-layer escape bag has one name everywhere: `meta`. The substrate layer's `properties` bag (VocabularyEntry, Term, RelationTypeDefinition) renames to `meta`, matching the instance layer's existing convention. The per-layer POLICIES remain distinct as ruled (#237's three-layer table: definitions have no bag; substrate reject-unknown with a `meta` escape; instances tolerate with `meta`) — the name is unified, the semantics stay layered. Executed as its own small breaking unit, not a #273 rider: substrate schemas + engine structs + substrate data migration + mirror choreography together.
Scope: Escape-bag naming across the substrate and instance layers

### s:7255aecc (srs spec, 2026-08-25)
Title: Type-keyed `type-query`: KEYED namespace/name replaces semanticObjectType dispatch
Statement: The `SectionSource` `type-query` variant's selection key becomes Type-keyed: a `typeKey` string in `namespace/name` form (version-independent, KEYED per rfc-decision-c8704763), resolved against the effective installed package set at query time — the same resolution `typeFilter`/`typeDispatch` already perform elsewhere in `document-view.json`. `semanticObjectType` (a bare, unscoped string with no installed-definition backing) is retired from `SectionSource` once #272 migrates every consumer; until then it stays modelled as sanctioned-until-collapsed (RFC-040 metamodel v1.1.0, #383). Every other `type-query` filter axis (lifecycleState, lifecycleStates, excludeLifecycleStates, containerIds, containerScope) is unchanged — only the selection key changes shape, from an unscoped free string to a scoped, installed-definition-backed key. A `typeKey` that does not resolve in the effective package set is a validation error at query time, not a silent empty result (matching typeFilter's existing contract) — the same fail-closed posture RFC-040 applies throughout: an unrecognised dispatch target is an error, never quietly ignored. This is a design record only: no schema file changes here. #272
Scope: Governs the eventual SectionSource type-query redesign and nothing else; does not itself change any schema, package, or Rust code. Placement per the 2026-08-15 owner ruling on srs#383 and the 2026-08-24 #273 planning session's routing comment. Supersedes no accepted RFC; narrows no standing contract. #272 is execution-ready to consume this design directly.

### s:7bd99afd (srs spec, 2026-07-31)
Title: Close definition-layer gaps in the model rather than a remainder overlay
Statement: Metamodel v1.1.0 must express the live definition-layer surface in SRS records and emit the complete artifact; it must not depend on a hand-maintained remainder overlay for meaning the records cannot carry.
Scope: Definition-layer self-hosting and schema emission

### s:7caca3a1 (srs spec, 2026-08-23)
Title: Decision modes: rules for the clear, geometry for the complex, a boundary against chaos
Statement: Cell: Governance. Every charter-checked decision names its mode - clear, complicated, complex, chaotic, or unresolved - and the mode determines which decision machinery applies:

CLEAR and COMPLICATED decisions are addressed through rules: the charter check as specified (cell citation, governing preference, boundary-clause justification for a non-default pole, past-decision search) is sufficient. Complicated decisions may additionally need expert analysis, but the charter's existing adjudication machinery governs them.

COMPLEX decisions require a stronger judgment mechanism, and charter citation alone is INSUFFICIENT - forcing a complex case into a single cell to produce a citation is the premature-classification pathology, forbidden by name. The mechanism for complexity is THE GEOMETRY OF THE MATRIX: the decision is mapped, not cited - located across the cells it genuinely touches (complex concerns straddle), its options plotted for consequences along the axes and polarities, checked for column coherence, and examined for emergence through look-ahead rather than rule application. This is the decision-map method as practiced (the #273 decision-consequence map and the construction 
Scope: Binds the Charter Check (#463): decision_mode becomes a required field with these semantics, and the check's hard rule is that complex-mode cases produce a map and rulings, never a citation-only resolution. The Decision Compass (#461) documents the modes. The decision-map method (locate across cells, plot options along axes and polarities, check column coherence, look ahead for emergence) is the n

### s:7d3dda60 (srs spec, 2026-07-31)
Title: Use authored Field names as Record value keys
Statement: The revision-2 Record carrier will store fieldValues as an object keyed verbatim by Field.name, with field identity recovered through the Record's version-pinned Type rather than repeated as a fieldId in each value.
Scope: Revision-2 Record value carrier

### s:86f49083 (srs spec, 2026-08-01)
Title: Land carrier and storage changes as one final generation
Statement: The RFC-039 carrier migration and RFC-038 repository-storage migration land as one composed first-party release train at dataModelRevision 2; neither design ships alone and no intermediate repository generation is supported.
Scope: RFC-038/RFC-039 first-party migration and release generation

### s:8948e43f (srs spec, 2026-08-22)
Title: What a container can hold, a bundle can carry
Statement: Axis 6-12 (Portability over Possession) applied as the travel mandate: every construct the standard lets a repository hold MUST be expressible in the standard's travelling forms - the package bundle for definitions, the archive/slice forms for content. A capability that exists only in place is captivity, the purpose statement's named failure mode. Concretely and immediately: the package-bundle format's inability to carry Themes, Blueprints, and Protocols (srs#390) is promoted from bug to mandate violation - the bundle grows to carry every one of the package-manifest's ten definition kinds, and the two lists are derived from one source so they cannot diverge again (finding A6's enum derivation). Standing rule for every future construct: the travelling form ships in the same RFC that introduces the held form, or the RFC states the explicit axis 3-9 local-boundary exception that keeps it in place.
Scope: Promotes srs#390 to mandated work (bundle carries all ten kinds; execution scheduled with the #272/#273 window where bundle schemas are already open). Binds all future RFCs introducing holdable constructs. Does not mandate federation machinery (removed separately) - travel here is the artifact forms, not the transport.

### s:8aed3412 (srs spec, 2026-09-17)
Title: A story is built at EXPRESSION from reusable parts: containers carry context membership and nesting, the Composition carries context order
Statement: The contains, precedes and depends-on relations remain the single MEANING tree. They are claims about the records: what is part of what, what semantically or temporally follows what, and what must be understood first (RFC-042). Nothing in this ruling adds to them, weakens them, or makes them contextual.

Any arrangement that differs from that tree is built at EXPRESSION. A narrative, an appendix, a reader's path, a tour for a newcomer: each is a telling of the same records, not a competing statement about them. Such a telling is assembled from reusable parts rather than from copies.

Context membership and nesting are carried by Containers. A Container is a declared selection (rfc-decision-0750c62f), so the parts a telling draws on are named explicitly, and childContainerIds carries the nesting of one context inside another. One record may be a member of many containers at once; reuse across tellings is the normal case, not an exception, and it costs nothing on disk.

Context order is carried by the Composition section's memberOrder (RFC-015 [N+29]), with the Rule [N+12] precedes order as the fallback when no memberOrder is declared. The renderer honours memberOrder for the listed 
Scope: How an alternate arrangement of existing records is expressed and rendered: Container membership and childContainerIds, the Composition section's memberOrder, and the renderer's treatment of a nested container. Does not change contains, precedes or depends-on, their definitions, or their role as the MEANING tree. Does not change the Container or Relation schemas. Does not decide the content of any

### s:8f5aca2c (srs spec, 2026-08-23)
Title: The grid grows three operations: reach, sequence, balance
Statement: Cell: Governance. The Pattern Grid (rfc-decision-cce3c00e) gains three standing operations, adopted from their proven use in a sibling application of the same method (a launch-prep risk assessment running the identical 4x3 geometry in an operational public-service domain):

1. REACH MARKING. Every cell carries a reach mark - INSIDE (assessable from the standard, its corpora, and first-party stewardship alone), SHARED (the standard's half is ours; the other half belongs to implementations, adopters, or counterparties - assess our part and NAME the missing half rather than estimate it), or BEYOND (not answerable from inside the spec boundary; carried as a named dependency on the counterparty with an owner, never as an open discovery item that quietly stays open). The rule that makes reach matter: a thin cell has two possible causes needing opposite responses - thin-and-inside is our own discovery gap; thin-and-shared-or-beyond needs a conversation, not more solo work. The evidence-first discipline applies to reach itself: do not score what cannot be seen from here. Reach is PHASE-DEPENDENT and re-marked each cycle: in formation, nearly everything is inside; the first public release m
Scope: Extends rfc-decision-cce3c00e's instrument; changes no preference, boundary clause, or layer rule. The grid page and the Decision Compass (#461) document the three operations; reach marks and the balance snapshot live with the grid and are re-recorded each assessment cycle; the #273 charter self-hosting design inherits them as data (reach as a cell property, balance counts as cycle records). The s

### s:92d2da05 (srs spec, 2026-08-19)
Title: Rename DocumentView to Composition
Statement: The document-composition entity is named Composition; the name DocumentView retires. The rendering-chain vocabulary is Composition → Presentation → Projection: a Composition defines how records compose into a document; a Presentation is a repository's declared commitment to render a Composition in a format (manifest.renderedPresentations); a Projection is the produced artifact. "Export" retires as vocabulary with the VIEW_EXPORTS mechanism.
Scope: Rendering-chain vocabulary and the document-composition entity name

### s:991c062f (srs spec, 2026-09-12)
Title: Versioning cell's Field-immutability rule does not reach the generated metamodel package
Statement: The metamodel package (srs/package/metamodel/**) is out of scope for the versioning cell's Field-immutability rule (rfc-decision-2a1e1590; 04-2-4-2-field#r2). It is a frozen, hand-verified bootstrap fixed point, regenerated wholesale by scripts/gen-metamodel-package.mjs from its FIELD_SPECS table and proven against the frozen seed (docs/schema/2.0/{field,type}.json) by the RFC-033 and RFC-035 closure tests; nothing resolves a metamodel Field by namespace/name@version, so the version number on a generated Field carries no lineage for any consumer to protect. check-versioning-cell.mjs excludes srs/package/metamodel/** from its walk by name, the same exclusion shape it already applies to rfcs/rfc-004/.
Scope: Narrows check-versioning-cell.mjs's walk (srs#649) by excluding the generated metamodel package by name. Does not touch scripts/gen-metamodel-package.mjs, the FIELD_SPECS table, or the RFC-033/RFC-035 closure tests, and does not alter the versioning cell's rule for any authored (non-generated) Field definition. srs/package/metamodel/fields/value_range.json's version stays 1; the versioning-cell al

### s:9ee14517 (srs spec, 2026-08-22)
Title: Layers stay separate: the layer rules
Statement: A companion register to the Pattern Grid (rfc-decision-cce3c00e): where the grid locates concerns by element and level, the layer rules govern STACKING - what sits on what, what may know about what. The stack has three planes, each with named layers:

MEANING (what things are): substrate -> definitions -> instances. Per-layer contracts already ruled: the three-layer unknown-key policy, retirement one-way-per-layer, the reference taxonomy binding the layers (instances PIN definitions; definitions KEY substrate).

EXPRESSION (how meaning is shown): selection -> composition -> presentation -> projection. Selection is the one query shape (the discovery contract); composition arranges selected meaning into document structure; presentation renders it (views, themes); projection is the emitted artifact. Each stage consumes its predecessor's output and adds exactly its own concern.

OPERATION (who does what): core service -> adapters (CLI, WASM, MCP) -> clients. Capability layering, raised from implementation ADR to charter level: semantics live once in the core; adapters translate; clients present.

THE SIX LAYER RULES:
1. ONE HOME - every construct names its plane and layer; a concern ex
Scope: Governs all future design decisions and reviews alongside the Pattern Grid; the #272 Composition remodel executes rules 1-3 for the expression plane (selection via the one query shape, exportConfig relocation, the required distinction); the operation plane's rule binds spec-adjacent tooling decisions (the capability-layering ADR remains the implementation-side elaboration). Refinable by successor 

### s:a270e98a (srs spec, 2026-09-04)
Title: Protocol shape: unprefixed identity wins, aiGuidance is structured-only (srs#379)
Statement: Protocol's identity and structural properties are UNPREFIXED, matching every other package-declared definition entity: `id`, `namespace`, `name`, `version`, `description` (optional), `targetType` (required, LINEAGE bare-UUID-or-empty-string, unchanged value shape — renamed only), `stages` (required), `tags` (optional), `createdAt` (required). ProtocolStage keeps its already-correct property names (`stageId`, `name`, `order`, `purpose`, `question`, `dependsOn`, `completionCriteria`, `contributesTo`, `outputType`) and additionally: `name` becomes documented as required (it always was, in the implementation and every corpus instance — the old prose simply omitted it); `aiGuidance` becomes the closed, structured `AiGuidance` object exclusively (`purpose` required, `extraction`/`negativeGuidance`/`examples[]` optional) — the `string` alternative is retired. `docs/schema/2.0/protocol.json` and the canonical prose (`records/subsections/07-3-ext-protocol.json`) both move to this shape in the same change (Door 1 — no RFC owns ext:protocol's surface; RFC-038 [R8] only obligated a schema, never claimed ext:protocol's normative content). The metamodel models Protocol/ProtocolStage/FieldRef to 
Scope: ext:protocol's Protocol and ProtocolStage property names and ProtocolStage.aiGuidance's value shape, in docs/schema/2.0/protocol.json, records/subsections/07-3-ext-protocol.json, the com.semanticops.srs/metamodel package, and this repo's own Node-validated package corpus.

### s:a8dcbfe5 (srs spec, 2026-10-03)
Title: A whole-package export declares the embedded core package in dependencyRefs instead of carrying it
Statement: A whole-package export does not carry definitions of the RFC-029 core package in its definition arrays, in either mode, and lists every core definition version reached by a followed PINNED or LINEAGE reference in dependencyRefs, one entry per id and version. The closure rule is unchanged; only what is carried differs. The exception covers core definitions reached from another package, never the source package's own: an export of the core package itself carries every definition its manifest lists. The bundled-mode clauses of Invariants 8, 15, 35, 36, 37 and 43 carry the same exception.
Scope: The definition arrays and dependencyRefs of a Package Bundle written by a whole-package export (RFC-003 [C1]), and the bundled-mode clause of the six Package invariants. Does not change the reference strengths, the standalone mode, or how a consumer installs a bundle.

### s:aee09992 (srs spec, 2026-10-02)
Title: A package requirement is keyed by the required package's id, with a SemVer compatibility constraint
Statement: A package dependency (packageDependencies, DependencyRef) names the required package by its packageId, the package's own UUID, which is the key that decides satisfaction; namespace and name are kept as required display labels and never decide it. The constraint stays the one sanctioned package-layer form, a version rule on a lineage key: an installed version satisfies a requirement when it is in the requirement's compatibility band (same MAJOR; below 1.0 the same 0.MINOR; for 0.0.z the same release), is not a pre-release of a different release, and has equal or higher SemVer precedence. This supersedes only rfc-decision-c8704763's sentence 'Package dependencies are the one sanctioned constraint form: KEYED with a semver range, existing only at the package layer.' Its other rulings stand: the constraint form exists only at the package layer, and there is no fifth reference strength.
Scope: The key and the version rule of DependencyRef in package-manifest.json and package-bundle.json. Does not change the four reference strengths, PINNED dependencyRefs (definition References), PackageRef or upstreamPackage, and adds no range grammar.

### s:b2ff7c91 (srs spec, 2026-10-08)
Title: Identifier over label governs machine-facing outputs
Statement: The Identity cell preference "identifier over label" (rfc-decision-cce3c00e) applies on the OPERATION plane (core service -> adapters -> clients; rfc-decision-9ee14517), not only to stored data on the MEANING plane. Any fact a consumer acts on in a machine-facing output - to group, filter, suppress, branch, or link to documentation - is carried as a typed field with a stable identifier. Machine-facing outputs include diagnostics, CLI, WASM and MCP payloads, and errors. Human-readable text (message, notes, titles) is presentation: it may change freely and no consumer parses it. An identifier computed in the core and then interpolated into prose is a violation in the emitting layer; a client that matches on prose is a violation in the client. This is a clarification of the existing Identity preference, not a new cell preference: a thirteenth preference would duplicate "identifier over label" (Conformance: one way over many). The Description preference "one name over many" applies alongside it: one spelling per identifier.
Scope: Every machine-facing output of the core and its adapters (CLI, WASM, MCP), and every client that consumes them. Stored data on the meaning plane is unchanged: it was already governed by the Identity preference. The implementation-side rule is srs-rust ADR-048 (docs/adr/048-implementation-decision-rules.md), amended on branch adr/048-identifier-over-label-outputs. Refinable by successor decision pe

### s:b9d7096e (srs spec, 2026-08-23)
Title: The grid learns to read: autoclassification and the stance vocabulary
Statement: Cell: Governance. Two further operations join the grid (extending rfc-decision-8f5aca2c), adopted from the Systemic Data Ethics sibling - the method's earliest large application, which mapped the external data-ethics field into the same 4x3 geometry:

1. AUTOCLASSIFICATION. Statements of a corpus are classified into grid cells at scale. The label set is the twelve cell slugs (the #462 vocabulary); the rubric is the cells' definitions and preferences as recorded; the modern mechanism is LLM classification (superseding the sibling's 2021 AutoML ancestor, trained on ~732 hand-labelled citations from external ethics frameworks). Three uses, in order of adoption: (a) MECHANIZED BALANCE - the standard's own normative corpus (invariants, rules, RFC statements, decision records) is auto-placed into cells each assessment cycle, making the cyclical balance counts (rfc-decision-8f5aca2c) instrumented rather than hand-censused; (b) COVERAGE MAPS OF EXTERNAL FRAMEWORKS - any peer framework's text yields its shape (which cells it fills, where it is blind) in minutes, mechanizing the precedents research's comparison work; (c) later, the muDemocracy instrument: a community's constitution and polic
Scope: Extends the grid's operations register; changes no preference or layer rule. Execution: a pool unit implements the mechanized census of the normative corpus (classification prompt + first run + counts diffed against the 2026-08-21 hand census), gated on #462's slug vocabulary landing; the grid page and compass (#461) document both operations; the stance vocabulary applies immediately to hexagram r

### s:be253dd6 (srs spec, 2026-10-20)
Title: A Container is stored as a directory of one-line entry files, so concurrent membership edits merge per entry
Statement: At dataModelRevision 11 every Container is stored as a directory: a one-line head carrying its own fields, and one one-line file per entry naming the entry's container, its parent and a fractional-index key. The logical memberInstanceIds outline and every member operation's behaviour are unchanged; storage decides only what is written. A three-way merge is per path, and its result is the decoding of the merged files. Orphans and loops left by a clean merge are warnings with a deterministic decode, re-attached by repair. Keys come from one shared algorithm. This supersedes, in part, rfc-decision-0df19d60: its accepted cost that two writers who reorder one container conflict as a whole no longer holds, since conflicts are per entry; its position, that context order is declared on the Container, stands.
Scope: How a Container is stored and merged at revision 11: the directory layout, the entry file, the decoding, the write set of each member operation, the key algorithm, the per-path merge and the migration. Does not change the logical Container, the member operations' behaviour or inputs, or how conflicts are reported (RFC-010).

### s:bed7a41a (srs spec, 2026-10-20)
Title: The root container is stored in the container set; the manifest names it and holds no content
Statement: The repository's root container is stored in the container set like every other container, and manifest.json names it by a required rootContainerId instead of carrying it inline. The root container keeps every role it has: it is the repository's identity object, and its entry order is the navigation order. manifest.json is authoritative for no content set. This supersedes, in part, rfc-decision-2fb87c1e: its exception "except for its inline root container" is withdrawn, and its position, that a repository's authoritative content is what its authoritative store reports, stands unchanged.
Scope: Where the root container is stored and how the manifest refers to it: manifest.json's container property (replaced by rootContainerId), RFC-013 [R1] and [R9], RFC-038 [R1], [R22], Change F and Change K, and every accepted rule naming manifest.container (read by RFC-052's reading rule). Does not change the root container's roles, its identity rule, or navigation order.

### s:c20fcff8 (srs spec, 2026-09-17)
Title: The level test: a spec rule must be declarable and checkable, or it is an authoring rule
Statement: A normative statement belongs in the SRS specification only if some repository can DECLARE it through SRS machinery and some implementation can CHECK it. If it can only be obeyed, it is an authoring or governance rule and lives at that level - this repository's spec-language guide, or the charter. Declarable and checkable are one conjunction: a constraint nobody can state in a repository's own data is not made normative by an implementation enforcing it, and a constraint that is declarable but that no implementation reads is an affordance without a contract (layer rule 6), not a rule.

This generalises rfc-decision-1e7c0c8e from the one clause it was written for into a standing placement test. That record ruled, of rfc-decision-5f8204bc's instance clause alone, verbatim: "The standard and its tooling provide mechanisms for retiring instances ... and enforce nothing beyond honesty about what each mechanism does. ... A generic tool defines what is possible, not what every corpus must do with it." The principle was never clause-specific; only its application was. It is now a test asked of every normative statement, at Charter Check time and at review, alongside the cell check and the 
Scope: The placement of normative statements on the SRS specification's normative surface - the record Types that scripts/spec-language-registry.json declares normative (com.semanticops.spec/invariant and com.semanticops.spec/mechanism) and the conformance rules of accepted RFCs. This record's own level is repository governance (Governance); it binds the authoring of this specification and corpora that a

### s:c4fffe93 (srs spec, 2026-07-29)
Title: Replace valueType with orthogonal fieldType facets
Statement: A Field expresses datatype, cardinality, value domain, format, and constraints as independent fieldType facets instead of extending the conflated valueType enum with more parallel patch properties.
Scope: Field semantic model

### s:c8704763 (srs spec, 2026-08-21)
Title: Every reference names its strength: the Reference taxonomy
Statement: Cell: Reference (Air, relational) - declared strength over convenient reach; the axis 1-7 preference (Semantic Integrity over Practical Expression) made mechanism. Four reference strengths, one form each:

PINNED - this thing, this version; semantics frozen. Form: the domain-named {id, version} pair, both required. Appears as an object when the reference is a value (arrays, slots - the ExactTypeRef shape, collapsed to one shared definition) and as flat sibling properties when spread at an entity root (Record.typeId + typeVersion, the extends* pairs). One rule, two positions; the pair, not the wrapper, is the canonical thing. Used by: record-to-type binding, Blueprint.rootTypes, rootTypeRefs, inheritance extends, bundle dependencyRefs.

LINEAGE - this thing, whatever version the context installs. Form: bare UUID (format: uuid); the effective package set resolves. Used by: fieldId in assignments/views/themes, renderViewId, typeDispatch values, lifecycleRef, discovery and theme typeId, vocabularyRef (migrated), Protocol TypeRef (typeVersion dropped - version-optional hybrids are forbidden).

KEYED - whatever matches this name in an explicitly-scoped set. Form: string key with the scop
Scope: Governs every reference in the standard. Execution: schema and IDL edits ride the #273 train (they touch the same files); the ExactTypeRef $ref collapse and small annotations ride the schema-mechanical unit; vocabularyRef and packageRef.external migrations are in-train data moves. Dispositioned findings: A2, A5, A6, A7, A8, A9, A11, C5.

### s:cce3c00e (srs spec, 2026-08-21)
Title: The Pattern Grid: the preference layer for spec decisions
Statement: The SRS standard adopts the Pattern Grid as its decision framework: a 3x4 matrix of four elements (Fire: action/change; Earth: structure/data; Air: information/process/standards; Water: relation/connection/attribution/trust) crossed with three levels (Individual, Relational, Systemic), yielding twelve zodiac-anchored cells whose row-by-row reading reproduces the zodiac in order, with modality constant on the diagonals (Cardinal = where authority is anchored, Fixed = the stability core, Mutable = where change is legal) and opposites forming six axes.

Ratified with the grid, as one system:

SIX AXIS PREFERENCES (default pole + boundary clause): 1-7 Semantic Integrity over Practical Expression; 2-8 Evolution over Continuity, phase-bound, precommitted to flip to Continuity at the first full public release; 3-9 Shared Coherence over Local Autonomy (all three restating subsection 01-5); 4-10 Office over Testimony (in the mythic register, Athena over Aphrodite) - the procedural record over the personal vouch; testimony fills gaps, never contradicts authority, and can be promoted into office by verification; 5-11 Reliability over Renewal - standing contracts hold; renewal only as explicit
Scope: Governs how decisions about the SRS standard are made and reviewed: the charter rulings, the pattern-audit dispositions, the removal shortlist, and all future RFCs and decision records, which name their cell from this ruling forward. The grid is an instrument of the standard's governance, not a normative data-model construct; nothing in this decision changes any schema or record format. Cell names

### s:cd27c096 (srs spec, 2026-10-01)
Title: A Container is a declared selection that may be an ordered, depth-annotated outline; membership is the entry ids
Statement: A Container remains a named, declared selection on the EXPRESSION plane and carries no semantic claim. Its membership is the set of instanceIds in its memberInstanceIds entries, read flat, and rootInstanceIds is removed. The entries are ordered and carry an optional depth, which is layout only: it changes no record, relation or other container. Navigation of the repository is the root container's entry order, with the entry named by identityInstanceId excluded, as a declared exception to the rule that position carries no role; navigation below a section still follows the part-of tree. Depth in a rendered document is the Container's declared depth for an arranged section and the part-of tree otherwise. The Container still holds no per-entry data beyond placement, so no layer is crossed and rfc-decision-0118e938 is neither amended nor superseded.
Scope: The Container schema's memberInstanceIds and rootInstanceIds properties and what they mean, the root container's role in navigation order, and where a renderer takes depth from. Does not change that a Container is a selection and nothing else, does not change identityInstanceId or anchorInstanceId beyond requiring them to name an entry, and does not touch the contains relation's role as the part-o

### s:d5524758 (srs spec, 2026-10-02)
Title: Attribution returns as one optional createdBy Actor on Record, Note and Relation, stamped by the implementation from the session actor
Statement: Record, Note and Relation each gain one optional property, createdBy, holding an Actor: a kind of human or ai, a stable opaque id and an optional display name, the same shape everywhere and the same actor vocabulary as FieldMeta.source. The implementation sets it once, when a new instance is persisted, from the session actor its host supplies outside the request, and never from the request: a creation request that carries createdBy is refused. Every other operation preserves it exactly, and it is testimony, never authority: validity never depends on it, and an instance without it is unattributed, not invalid. The data model moves to revision 9, so an implementation that does not support revision 9 refuses a corpus carrying createdBy instead of reading or dropping it.
Scope: The createdBy property on Record, Note and Relation, the shared Actor shape and its single vocabulary with FieldMeta.source, the session-actor stamping and preservation rules, and the dataModelRevision 9 stamp (RFC-046 [R1] to [R13]). Does not restore the other removed Relation provenance fields (assertedBy, confidence, status, validFrom, validUntil), does not add createdBy to definitions, Contain

### s:d67e3d76 (srs spec, 2026-07-29)
Title: Express the definition-layer metamodel in its own Field and Type language
Statement: Field, Type, FieldAssignment, and the in-scope value objects are authored as SRS definitions in the canonical com.semanticops.srs/metamodel package, replacing RFC-004's parallel schema-source vocabulary.
Scope: Definition-layer metamodel

### s:dd0a33fc (srs spec, 2026-07-29)
Title: Make projection loss explicit in a per-emitter fidelity contract
Statement: Every metamodel feature is classified as authoritative or approximated for each emitter; authoritative meaning cannot be silently dropped and approximated meaning must emit its documented lossy shape.
Scope: Metamodel projection and emitters

### s:e5828aa8 (srs spec, 2026-10-05)
Title: Package upgrade overwrites a clean same-version definition before publication, and refuses it from the first public release
Statement: RULE (phase-bound). When a package bundle carries a definition with the same `id` and the same `version` as an installed definition but different content, `package upgrade` overwrites the installed definition and refreshes the reference copy recorded at install if the installed definition still equals that reference copy; if the installed definition was edited locally (`conflictState: local-ahead`), it is a conflict, and the local edit is kept and the conflict is reported.

SUNSET. At the first full public release (charter axis 2-8, Evolution flipping to Continuity), the overwrite becomes a refusal: increment over edit.

SETTLED BY EXISTING RFCs, no change needed. Upgrade is in place in the same package boundary with the boundary version bumped (RFC-003). New definition versions install alongside old ones and old versions stay resolvable (RFC-014 R6). Records are never rewritten (RFC-014 R3). Definitions absent from the newer bundle are never deleted, only reported.
Scope: The behaviour of `package upgrade` (CLI and MCP) for a same-id, same-version definition whose content differs. Does not change RFC-003, RFC-014, the Package Bundle format, any schema under docs/schema/2.0/, or the versioning cell's rule for authored Field definitions outside this upgrade path.

### s:e99a9437 (srs spec, 2026-09-06)
Title: The three doors: which change to the spec surface may merge, and by whom
Statement: Every change to the specification names which door it passes through. There are three doors and one category outside them.

DOOR 1 - EXECUTE A RULING. The change implements a recorded decision. The PR cites the rfc-decision id it executes. No RFC is needed.

DOOR 2 - NEW NORMATIVE MEANING. No ruling covers the change. It goes through an RFC, and the RFC passes the Charter Check. A draft proposes only; folds land at acceptance with the integration manifest.

DOOR 3 - AMEND AN ACCEPTED RFC. A conformance rule, schema element or normative statement that lives under an existing RFC is changed by an RFC revision: the Revision is bumped, the history row is added, and the .md and the canonical records change in the same PR.

NON-NORMATIVE. Tooling, checks, documentation and the programme repository carry no normative meaning. They pass through no door.

HARD RULE. A conformance rule or a file under docs/schema/2.0/ never changes without one of the three door citations.

MERGE RIGHT = DECISION MODE x DOOR. The decision mode (rfc-decision-7caca3a1) says who resolves the question. The door says what the change does to the normative surface. Together they say who may merge:

- Mode clear or c
Scope: Governs every PR against this repository that touches a conformance rule, a schema under docs/schema/2.0/, a normative statement, or a decision record, and every PR that claims a merge right. Does not change the decision modes (rfc-decision-7caca3a1), the Charter Check, or the RFC process itself. Does not govern sibling repositories, which carry their own CLAUDE.md pointer to this rule.

### p:04b78189 (programme governance, 2026-10-16)
Title: Convention: one filename slug scheme for new package definition files (srs-rust#1209)
Question: Which slug scheme should new definition files use, so lifecycle and vocabulary stop diverging from every other definition kind?
Statement: New definition files of every kind, lifecycle and vocabulary included, are named by package_service::definition_rel_path. This is a convention, used as a test until proven; enforcement across the board needs a separate later decision.
Context: Problem: srs-rust writes definition files under two slug schemes. Eight definition kinds use package_service::definition_rel_path (non-alphanumerics dropped, spaces to '-'); lifecycle and vocabulary used their own (every non-alphanumeric to '-'), so the same name gives different filenames depending on kind. Why it matters: one way per goal; a reader cannot predict a filename, and tools that derive

### p:05c3ddcb (programme governance, 2026-10-21)
Title: Work is held as holons: revived units, one GitHub tree, ranked in the period
Question: How is a connected whole of work (an accepted RFC with its implementation, release, spec fold, pin advances and migrations across repos) held, prioritised and seen, so that it is implemented and not lost after acceptance?
Statement: 1. The frozen com.semanticops.programme/unit type is revived as the holon: a connected whole of work. Its record holds the meaning (summary, serves an objective, a 'Done when:' section in body); issue_ref[0] names its tracking issue. 2. The GitHub sub-issue tree is the one authority for a holon's parts and their order, and native blocked-by edges for what must precede; units do not also record parts as relations (landed units keep theirs as history). 3. The active period ranks holons in a new unit_rank field: rank 1 gives P0, any other ranked holon P1, unranked no override; the holon's tier replaces the epic cap for its parts in both directions; the issue's own parked label, the bug floor and bump labels still apply. 4. A handover is a blocked-by edge across lanes (a wg: label, else the central group); a handed-over edge that crosses groups or lands in the central group goes to the owner's Needs you. 5. A unit lands only in a session, after its parts have closed; drift is flagged meanwhile. 6. An accepted RFC is decomposed into a unit on acceptance (/rfc Stage 8) and its issue stays open until the unit lands.
Context: RFC-051 and RFC-052 were accepted on 2026-10-20 and work stopped: the /rfc pipeline closed the RFC issues at acceptance; srs-rust#1417 inherited P2 from epic semanticops.com#28 and sat 10th in the queue behind July P2s although the owner asked for it 'soon, and not lost'; the pin advances and corpus migrations in five repos were checkboxes in srs#948, not issues; srs#948/949 carried a hand-set blo

### p:06e480d4 (programme governance, 2026-10-15)
Title: Every kind of meeting is one session record with a kind
Question: How are the different kinds of meeting recorded?
Statement: Every kind of meeting is recorded as one session record with a kind.
Context: Relayed from the owner on 2026-10-15, in a clerked session; proposed in clerk#57 (plans/wg-srs-operations.md). The owner instructed: record and hold.

### p:09ea5368 (programme governance, 2026-10-16)
Title: Requests reach a group only through its input queue
Question: How does a request reach a working group?
Statement: A request reaches a group only through that group's input queue, never filed straight as ready work.
Context: D5 of clerk#57 (plans/wg-srs-operations.md, section 8), asked of the owner since 2026-10-12. Recorded as a proposed decision on 2026-10-16 so a session can take it: until now it existed only as PR text, which no session agenda reads.

### p:0a87ebf6 (programme governance, 2026-10-16)
Title: A group's charter names the domains it holds
Question: How is a request routed to the right working group?
Statement: We model a group's boundary as the domains its charter names; a request placed in a domain goes to the input queue of the group that holds that domain, and a domain no group holds goes to the central group.
Context: Raised 2026-10-16 in the owner's flow review (why nothing is moving): issues are parked until domains, problems and personas are established, and there was no rule for which group a grounded issue goes to. Complements D4 to D6 of clerk#57.

### p:0b1c25b1 (programme governance, 2026-10-20)
Title: What counts as a recorded ruling for a group's mandate
Question: Which records count as a recorded ruling when WG Third-party ready decides an issue is inside its mandate ('executes a recorded ruling, RFC or invariant and names it')?
Statement: For WG Third-party ready, a recorded ruling is an rfc-decision record, an accepted RFC requirement or a spec invariant; for implementation-internal work in srs-rust that changes no CLI, payload or WASM contract, an accepted srs-rust ADR also counts. An owner ruling written anywhere else is recorded as a decision before it is cited.
Context: Problem: the 2026-10-20 triage of the group's 63 parked issues found the same question deciding about one in six of them. The group's analyst may unpark only ruling-backed work, but the authority behind much of the backlog is not an rfc-decision record:
- the relation principles R1-R11 live in design-note 044, ratified 2026-07-14 through the srs#171 epic, with no rfc-decision record (srs-rust#557,

### p:21ee9352 (programme governance, 2026-10-17)
Title: Every agent comment names its actor
Question: How is an agent comment told apart from the owner, when agents post with the owner token?
Statement: Every comment an agent posts carries its actor on its own line, as <!-- actor: agent:<id> -->.
Context: Proposed by agent:claude-code from the srs-lab control room (clerk#77). Prototyped against the live PRs on 2026-10-17: clerk#57 asked for thirteen decisions already ratified; srs-programme#154 and #155 proposed decisions only inside their diffs, in state draft; clerk#75 stated a constraining design principle in prose.

### p:2550585a (programme governance, 2026-10-16)
Title: Every request is placed in a domain first
Question: When is a request placed in a domain?
Statement: Every request is placed in a domain before any group assesses it.
Context: D4 of clerk#57 (plans/wg-srs-operations.md, section 8), asked of the owner since 2026-10-12. Recorded as a proposed decision on 2026-10-16 so a session can take it: until now it existed only as PR text, which no session agenda reads.

### p:2637af0a (programme governance, 2026-10-16)
Title: An affirmed remedy is a recorded ruling for a group's mandate
Question: May a working group auto-merge work that executes an affirmed remedy rather than a spec ruling, RFC or invariant?
Statement: A remedy the owner has affirmed counts as a recorded ruling for a working group's mandate: a group may build and, with a valid quorum, auto-merge work that executes an affirmed remedy named in the issue and the PR, within its repositories and budget. Anything that changes a spec ruling, a public contract or a gate still escalates.
Context: 2026-10-16: WG Agent-supported editor's charter (384a704a) lets it auto-merge work that executes a recorded ruling, RFC or invariant. Its first issues (srs-web#566 to #572, the funding application objective) execute remedies the owner affirmed, which are client features with no spec ruling. Until this is decided the editor reviewer marks approved PRs gate:owner-merge.

### p:2800bea0 (programme governance, 2026-10-16)
Title: Affirmed clusters are the owner's; suggested clusters are the synthesiser's
Question: What may an agent do to clusters?
Statement: The synthesiser may add, merge, reshape and rename the clusters it suggested. An affirmed cluster belongs to the owner: no agent removes it or rewrites its name or description, but an agent may add problems to it.
Context: Stated by the owner on 2026-10-16 after affirming the Agent memory clusters, together with problem SP-73 (clusters cannot be compared side by side). Applies to the synthesiser standing job (clerk#39).

### p:31961020 (programme governance, 2026-10-16)
Title: Every level runs the same intake cycle
Question: Do the programme, groups and sub-groups handle requests the same way?
Statement: We work as if every level (programme, group, sub-group) runs the same intake cycle: receive, place, assess, propose, decide, report.
Context: D2 of clerk#57 (plans/wg-srs-operations.md, section 8), asked of the owner since 2026-10-12. Recorded as a proposed decision on 2026-10-16 so a session can take it: until now it existed only as PR text, which no session agenda reads.

### p:31e9fd27 (programme governance, 2026-10-16)
Title: Federation returns, starting with cross-repository addressing
Question: Is federation's committed return (decision 4f1e12e5) scheduled now, and in what order?
Statement: Federation's return is scheduled now, in three steps: (1) take RFC-049 through review to acceptance (cross-repository addressing and read-only resolution); (2) a follow-up RFC for cross-repository relations, so a record in one repository can link to a record in another; (3) multi-repository MCP serving (srs-rust#683) implementing (1), with conformance tests. Until (2) lands, essays stay in muSrs.
Context: Owner, 2026-10-16: essays will live in their own repository and link into muSrs and other repositories within a federation; the MCP server should address several repositories, tested and managed. This is the trigger 4f1e12e5 first named (a second real repository needing live cross-repository assertions); its return is committed and the owner schedules it. RFC-049 (Draft Rev 3, srs#913) already spe

### p:39ffe8e5 (programme governance, 2026-10-16)
Title: SRS operations covers using, running and repairing SRS
Question: What does the SRS operations domain cover?
Statement: SRS operations covers how we use, run and repair SRS in our own work, not what the spec should mean.
Context: D1 of clerk#57 (plans/wg-srs-operations.md, section 8), asked of the owner since 2026-10-12. Recorded as a proposed decision on 2026-10-16 so a session can take it: until now it existed only as PR text, which no session agenda reads.

### p:3b910d90 (programme governance, 2026-10-17)
Title: A working group operates independently only in a mature domain
Question: Must a domain name its tensions, and what may a working group do in a domain that names fewer than three?
Statement: Domains mature. A domain may be defined and affirmed without tensions; it is mature when it names at least three tensions (axes). A working group may be set up in an immature domain, but it must establish a mature domain before it can operate independently. Until then it works under the owner: no delegated merges, every PR owner-merged.
Context: 2026-10-17: SP-94 (srs-programme#158). Only Semantic records (12 tensions) and Stance (3) of the seven domains name any trade-offs. Working groups hold domains (holds-domain, D4/D5/D15 ratified 2026-10-16), so a group can be chartered on a domain with nothing to test its decisions against.

### p:46bb7a8c (programme governance, 2026-10-20)
Title: The clerk's HTTP contract is one OpenAPI 3.1 document that routes, validation and client types derive from
Question: How is the contract between clerk serve and its clients kept from drifting?
Statement: clerk/api/openapi.json (OpenAPI 3.1) is the single source of clerk serve's contract: the server's routes and request validation derive from it, and clients generate their types from it.
Context: Proposed from /ship clerk#96. In srs-rust, interface drift got through three gaps: embedded types emitted as {} (srs-rust#818, #1258), client types written by hand and checked only against fixtures (ADR-011), and cross-repo checks that skip when the repos are not side by side.

### p:559bfb9e (programme governance, 2026-10-16)
Title: Experiment now, unify later
Question: How do we treat overlapping models of meaning (boundaries, tensions, archetypes; domains, personas, problems, claims, remedies) during this phase?
Statement: We work as if every model of meaning in use now is an experiment: overlapping models are practised side by side, and agents resist collapsing them into one before practice shows how. One way per goal is a principle of the SRS specification and of every code implementation (srs-rust and any other code: the SRS charter's Charter Check, srs-rust ADR-048 rule 3); it cannot hold in the repositories themselves, whose records are where these models are practised.
Context: Owner, 2026-10-16: all of this work is experiments towards related goals; the owner is developing a practice. Boundaries, tensions, archetypes; problems, claims, remedies: all of it will need to be unified as it is practised. Everything now is dogfooding. Owner, same day: one way per goal is specific to the SRS spec and is a general principle for srs-rust and any code implementation; it cannot hol

### p:5d5feb79 (programme governance, 2026-10-16)
Title: Where an essay keeps each agent's brief (srs-web#567, Funding 2)
Question: Where does an essay store each connected agent's brief so it persists in the essay's records and opens on another device?
Statement: Add the brief to the essay package as typed data (option A), released as a new essay package version that srs-web then pins. Funding 3 (context documents) and Funding 4 (feedback flag) use the same release.
Context: Problem: Funding 2 (srs-web#567) needs a brief per connected agent, plus a shared 'how to work on this essay', kept WITH the essay, not in localStorage. The essay package (com.mudemocracy.essay 1.7.0) has no field or type that can hold it: the document-state record carries only hidden ids and container ids, and srs-web has no client call for free-text notes. Why it matters: the writer pastes these

### p:6494df0f (programme governance, 2026-10-16)
Title: A member's stance comes from an archetype
Question: How is a group member's stance modelled?
Statement: We model a member's stance as its seat-holder `derived-from` a stance agent that `instantiates` an archetype, because those types and relations already exist.
Context: D8 of clerk#57 (plans/wg-srs-operations.md, section 8), asked of the owner since 2026-10-12. Recorded as a proposed decision on 2026-10-16 so a session can take it: until now it existed only as PR text, which no session agenda reads.

### p:684f84ab (programme governance, 2026-10-15)
Title: A decision that cannot be made now is recorded at once as a proposal
Question: What happens to a decision that cannot be made in the moment?
Statement: A decision that cannot be made in the moment is recorded at once as a proposal in the log of the level that owns it.
Context: Relayed from the owner on 2026-10-15, in a clerked session. Proposed in clerk#57 as parking a decision as an exercise; the owner corrected it: an exercise records a discussion working towards shared understanding and is not a decision. A decision starts as a proposal, is held and may move through many sessions.

### p:708c9373 (programme governance, 2026-10-16)
Title: A problem may occur in several domains
Question: Can one problem belong to more than one domain, and be held by more than one persona?
Statement: We model a problem that occurs in several domains as one problem held by one persona-in-domain in each domain where it occurs, because held-by already allows several holders and a problem's domains are derived from its holders, never stored.
Context: Stated by the owner on 2026-10-16 while fixing personas: ten affirmed problems sit in two domain outlines (SP-01 to SP-04, SP-08, SP-28, SP-30, SP-31, SP-42, SP-43). The in-domain rule stays: each persona-in-domain is in exactly one domain.

### p:70a84bb7 (programme governance, 2026-10-17)
Title: A choice follows the group lean, or it is asked
Question: When may an agent take a choice that sits on one of the group tension axes without asking?
Statement: A choice that follows the group lean on one of its axes is taken and cites the lean or principle; a choice against the lean is asked of the group or its parent; on an axis with no lean it is a ruling.
Context: Proposed by agent:claude-code from the srs-lab control room (clerk#77). Prototyped against the live PRs on 2026-10-17: clerk#57 asked for thirteen decisions already ratified; srs-programme#154 and #155 proposed decisions only inside their diffs, in state draft; clerk#75 stated a constraining design principle in prose.

### p:7270e772 (programme governance, 2026-10-20)
Title: WG Third-party ready leans Initiator on its domain's three axes
Question: Which pole does WG Third-party ready lean toward on each of the three axes of its domain, Semantic records?
Statement: WG Third-party ready leans toward Office (Attribution and Repository), Portability (Containment and Portability) and Evolution (Identity and Assertion): the Initiator stance. The domain's paired defaults on axes 5-11 and 1-7 bind it as rules.
Context: Problem: the group role 834b61fd records no lean (control room growth gate 'trigram', 0 of 3), so its compass says nothing about where it pulls when values conflict, and the group cannot pass its Seed gate.
The domain's axes are now one compass axis per T3 line: Attribution and Repository (Space: Office or Testimony), Containment and Portability (Energy: Portability or Possession), Identity and As

### p:7ee8fa01 (programme governance, 2026-10-22)
Title: A decision is shown with its compass
Question: How does a decision record show the compass it was weighed on?
Statement: Every decision record is set against the principles and standing decisions it rests on, and its rationale says whether it applies or departs from each.
Context: Owner, 2026-10-22: decisions should always be set against the principles and the compass; avoid seeing decisions without their context and compass. Where the principles give the answer and nothing argues against it, record the choice inline and proceed.
Compass: the Reviewable and fast tension held at SemanticOps. Mode: clear; it extends ratified 70a84bb7 and e56d6893.

### p:8e1ae42a (programme governance, 2026-10-16)
Title: Groups sit beside each other, not nested
Question: Are working groups nested or side by side?
Statement: Groups sit beside each other rather than nested, unless an observed overlap is recorded in a decision that nests them.
Context: D10 of clerk#57 (plans/wg-srs-operations.md, section 8), asked of the owner since 2026-10-12. Recorded as a proposed decision on 2026-10-16 so a session can take it: until now it existed only as PR text, which no session agenda reads.

### p:926c059f (programme governance, 2026-10-20)
Title: Rules for adding to the clerk
Question: How do we keep the clerk's code solid, reusable and tested now that it is core to the process?
Statement: Adopt the ten clerk rules, each enforced by a check in npm test with a shrinking allowlist for existing exceptions.
Context: Problem: the clerk is now the home for the programme's decision-making logic (owner, 2026-10-20), but its rules are prose in CLAUDE.md, and some are already wrong (srs-web does not import lib/practice). A review on 2026-10-20 found:
- the merge rules live in bash, with a drifted JS copy;
- pure logic lives in scripts;
- there are three queue rules;
- there is no output contract (five write verbs, 

### p:9e2c2950 (programme governance, 2026-10-21)
Title: The owner can drive a feature idea directly, through the chain
Question: When the owner brings a feature idea and wants to drive it now, which steps of the chain may the owner session take on the spot, and which may never be skipped?
Statement: An owner feature idea may be grounded on the spot in an owner session (/session or a clerked conversation): a problem and a remedy are suggested, the owner affirms them as worded, and the issue is filed under its epic with Answers:, routed to its group and claimed. Building, the independent review and the merge rules are never skipped. Code built before grounding stays unpushed until the issue is claimed.
Context: Problem: on 2026-10-21 the owner asked for a feature in the essay editor (Ctrl-Enter splits a paragraph, with undo). A Claude Code session built it at once, before any issue existed, any problem or remedy was affirmed, or anything was claimed: the chain was skipped. The owner wants to push feature ideas in and sometimes drive them directly, but not skip the rest of the process. The handbook alread

### p:a1b06725 (programme governance, 2026-10-20)
Title: A capability enters clerk serve only after it is a clerk command, used for real, unchanged since the last session, and tested
Question: When does a capability prototyped in the srs-lab control room move into the clerk and its local service?
Statement: A capability enters clerk serve only after it is a clerk command with --json output, has been used for real, has not changed shape since the last session of the group that holds it, and has tests at every layer it touches. Until then it stays in srs-lab.
Context: Proposed from /ship clerk#96 (semanticops.com#38, remedy 6858b178, affirmed 2026-10-20). The control room's dev-server middleware already carries load-bearing parts (live sync, owner acts, affirmation rounds) beside experiments. The owner asked for a core kept small and grown only with stable elements.

### p:a47964f9 (programme governance, 2026-10-16)
Title: A group's input queue is its wg label plus intake
Question: How is a group's input queue modelled?
Statement: We model a group's input queue as its `wg:` label plus `intake`, because labels are the execution surface every routine already reads.
Context: D6 of clerk#57 (plans/wg-srs-operations.md, section 8), asked of the owner since 2026-10-12. Recorded as a proposed decision on 2026-10-16 so a session can take it: until now it existed only as PR text, which no session agenda reads.

### p:a5c769be (programme governance, 2026-10-15)
Title: The decision log holds only choices that govern later choices
Question: Which of the owner's acts go into the decision log as proposed and ratified decisions?
Statement: The decision log holds only choices that govern later choices. Every other act is taken where its item lives and is listed on the desk.
Context: Relayed from the owner on 2026-10-15, in a clerked session, once the desk (semanticops.com#35, clerk#64) began listing everything that waits on the owner. Most of what reaches the owner (merges, task triage, affirmations, report receipts, answers) is not a governing choice. Awaiting ratification.

### p:a8bc55ef (programme governance, 2026-10-20)
Title: Who governs the clerk long term
Question: Which group holds authority over the clerk's code and rules once its initial hardening is done?
Statement: Charter a working group for the Programme coordination domain to govern the clerk repository once the central group's hardening lands, with every change to gates, merge rules, quorum, budget, pause or the authority signal kept with the owner.
Context: Problem: the clerk has outgrown its experiment. It now merges PRs for every group (pr-upkeep), claims work, records sessions and builds the desk. A review on 2026-10-20 found its merge path fails open in four ways and its rules live in bash. No group holds the Programme coordination domain (346e323e, affirmed), whose scope names the clerk, so every clerk PR is an owner merge: 17 in the two weeks t

### p:a8e833f1 (programme governance, 2026-10-22)
Title: Every release can open every repository that exists
Question: When the stored form of SRS data changes (a new data-model revision), in what order do the reader of the new form and the migration from the old form land?
Statement: A new data-model revision lands in one change together with the migration that brings older repositories to it, so every release can open every repository that exists. Preparation that alters no behaviour may land ahead of it.
Context: A stored-form change is already ruled to be a migration (srs rfc-decision-628cf6c4, 'A rename is a migration': a deterministic migration plus a generation stamp). What was never ruled is when the migration ships relative to the code that reads the new form. The srs CLAUDE.md revision-bump choreography assumes 'the binary loads old AND new revisions', but as a convention, not a decision. The gap st

### p:acf486d8 (programme governance, 2026-10-16)
Title: A level escalates, never decides for the level above
Question: What does a level do with a request outside its mandate?
Statement: A level never decides a request for the level above it; it escalates one proposed decision instead.
Context: D3 of clerk#57 (plans/wg-srs-operations.md, section 8), asked of the owner since 2026-10-12. Recorded as a proposed decision on 2026-10-16 so a session can take it: until now it existed only as PR text, which no session agenda reads.

### p:aeb9c0a2 (programme governance, 2026-10-16)
Title: An accepted domain estimate is a suggested problem
Question: How is an accepted domain estimate for a request recorded?
Statement: We model an accepted domain estimate as a suggested problem `held-by` a persona-in-domain, because a domain is derived, never stored.
Context: D7 of clerk#57 (plans/wg-srs-operations.md, section 8), asked of the owner since 2026-10-12. Recorded as a proposed decision on 2026-10-16 so a session can take it: until now it existed only as PR text, which no session agenda reads.

### p:b80d2d1e (programme governance, 2026-10-17)
Title: Escalation: what naming rule do Type and Vocabulary names follow? (srs#236)
Question: Should the SRS standard require snake_case for Type and Vocabulary names, as its text says, or keep the kebab-case that every existing Type and Vocabulary already uses?
Statement: Lets investigate the history of this a little more. How did we end up with this split? Has kebab case not been selected previously? Does this mean two ways of doing things? Check this against principles?
Context: Problem: The standard says Field and Type names are snake_case, but 151 of the live Type, View, Composition, Blueprint and Vocabulary names (including the standard's own self-description) are kebab-case. A builder tried to turn the rule into an enforced check (srs#236, P0, blocks the gate) and found the check would fail on all of them, because Fields, Types and Vocabularies share one `name` Field.

### p:bbb03bff (programme governance, 2026-10-21)
Title: srs-rust#1417 (RFC-052): how to land the root-container move, since PR 1 alone would refuse every existing repository
Question: RFC-052 moves the root container out of manifest.json. The issue says its two PRs are each shippable alone, but the first one would make the binary refuse every repository we have until the second lands. In what shape should the work go in?
Statement: answered by a8e833f1: a new data-model revision lands in one change with its migration. It is then ratified as a one-line case of the practice, and leaves your agenda.
Context: Problem: srs-rust#1417 asks for PR 1 (manifest names the root by rootContainerId; loader resolves it from the container set) and PR 2 (the 9 to 10 migration), each shippable alone. RFC-052 [R7] says a revision-10 binary must refuse revision-9 data and point to the migration. So after PR 1 alone, every first-party repository (srs-programme, srs, srs-context, muSrs, all test fixtures) is unreadable 

### p:bbb23e36 (programme governance, 2026-10-17)
Title: A PR carries its decisions in one srs-decisions block
Question: Where does a pull request record the decisions it makes and the decisions it asks for?
Statement: Every pull request records each decision it makes or asks for in one srs-decisions block in its body, classed and naming its actor; nothing a PR decides lives only in its prose.
Context: Proposed by agent:claude-code from the srs-lab control room (clerk#77). Prototyped against the live PRs on 2026-10-17: clerk#57 asked for thirteen decisions already ratified; srs-programme#154 and #155 proposed decisions only inside their diffs, in state draft; clerk#75 stated a constraining design principle in prose.

### p:bd852068 (programme governance, 2026-10-15)
Title: A meeting's kind sets its agenda
Question: Should every meeting take the same agenda, or should a meeting's kind decide what it handles?
Statement: A meeting's kind sets its agenda: decision, affirmation review, unblock, intake triage or retrospective.
Context: Relayed from the owner on 2026-10-15, in a clerked session; proposed in clerk#57 (plans/wg-srs-operations.md). The owner instructed: record and hold.

### p:bf4a5af5 (programme governance, 2026-10-22)
Title: Escalation: how do structured diagnostics reach the existing text lists? (srs-rust#1264)
Question: May the diagnostics lists on about 16 command results change from plain text to structured objects (breaking existing readers), or must the structured form arrive beside the text list?
Statement: Land the optional `code` on validation diagnostics first (ruling scope item 1), additive and without a revision bump; deliver structured diagnostics on the other surfaces as a parallel list beside the existing text list, and decide separately when to retire the text list. Legacy code renames go in their own issue.
Context: Problem: The owner ruled on srs-rust#1264 (2026-10-08) that stable diagnostic codes are adopted. Today most commands report problems as plain text lines (`diagnostics: string[]`). Carrying a code and severity means each of about 16 command results changes those lines into small objects, and the ruling's scope also renames every legacy code scheme once with no aliases and rewrites about 235 test as

### p:c04d8164 (programme governance, 2026-10-22)
Title: The clerk's runtime imports nothing outside Node's standard library
Question: May the clerk's runtime code depend on npm packages?
Statement: The clerk's runtime (bin, lib and scripts) imports only Node built-ins and its own modules. npm packages are devDependencies, used by tests only.
Context: Proposed from /ship clerk#97 (clerk serve). The plan for clerk serve named ajv as its one runtime dependency, to validate requests against api/openapi.json. srs-programme's workflows (programme-validate, upkeep, board sync, roadmap) and the cloud routines run `node bin/clerk.mjs` from a bare checkout with no npm install. A runtime dependency would break every one of them, silently until it ran. It

### p:cdd272a3 (programme governance, 2026-10-22)
Title: Polarity is assigned per domain and per axis: an axis-in-domain record
Question: Where does a tension's yin and yang live, given that the same pole may be yang in one boundary and yin in a narrower one?
Statement: Owner, 2026-10-22: 'Ideally, we need to assign a yin/yang pole. These will again be relative to the axis and domain. The same pole may be yang when we zoom in to a different boundary.' Chosen: an axis record per domain. New method type com.semanticops.method/axis-in-domain v1. Fields: title, line (1-3, line 1 at the bottom), summary. Relations: refines to its tension, in-domain to the domain record, and a new yang-pole to one of that tension's two poles, exactly one of each. A domain has at most three affirmed axes, on distinct lines, with distinct tensions. A domain with no affirmed axes inherits its parent's. A narrower domain flips a pole by holding its own axis for the same tension with the other yang-pole. Polarity exists only on an axis. The global Initiator/refines rule only suggests yang-pole on agent-suggested axes. 'First three tensions in the outline' is retired as the rule for axes. This supersedes the global-polarity part of the 2026-10-20 ruling; the line pairing it fixed stays.
Context: Problem: polarity is global today. A pole is yang wherever the Initiator archetype leans toward it or wherever it refines such a pole (ruling 2026-10-20, srs-context cc05d4c9). That cannot say 'Portability is yang in Semantic records but yin in a narrower boundary'. A domain's axes are also 'the first three tensions in its container outline', which is arrangement standing in for meaning, against t

### p:d529294a (programme governance, 2026-10-20)
Title: Pin bumps are automatable PRs
Question: Which merge gate does a PR take when it only bumps a pin?
Statement: A PR that only bumps a pin to something already merged or released at its source is gate:auto-merge, for the central group and for every working group.
Context: Problem: pin bumps have been owner merges. The two group charters escalate 'a pin bump in another repo' (boundary on roles 834b61fd and 1fc9ce85), and central-group pin bumps were labelled gate:owner-merge. Yet a pin only deploys code that was already reviewed and merged at its source. srs-programme#173, which deploys the upkeep from clerk#90, waited on the owner after the owner had already merged

### p:e3505ded (programme governance, 2026-10-17)
Title: A PR decision is a choice, a ruling or an escalation
Question: Which decisions made in a PR go to a decision log?
Statement: A choice fails the Reuse test and stays in the PR block; a ruling passes the four tests inside the group mandate and is proposed in the group own log; an escalation is outside the mandate and is proposed in the parent log, with an ask in the PR.
Context: Proposed by agent:claude-code from the srs-lab control room (clerk#77). Prototyped against the live PRs on 2026-10-17: clerk#57 asked for thirteen decisions already ratified; srs-programme#154 and #155 proposed decisions only inside their diffs, in state draft; clerk#75 stated a constraining design principle in prose.

### p:e745e9b2 (programme governance, 2026-10-20)
Title: The owner's desk is reachable only from loopback and the owner's private ZeroTier network
Question: Who may reach the control room and clerk serve, given that both act with the owner's authority?
Statement: clerk serve binds to loopback only. The control room is published only to loopback and the owner's private ZeroTier network, and requests from other sources are dropped. Membership of that network, which the owner authorises, is the access control.
Context: Escalated to the owner and answered by the owner on 2026-10-20 (from /ship clerk#96). The desk runs on the main desktop and is viewed from another machine's browser over ZeroTier. It is published as control.semanticops.com through the desktop's Caddy, which drops any source outside ZeroTier or loopback. The service signs commits and uses the owner's GitHub token, so access to it is access to the o

### p:ea96a678 (programme governance, 2026-10-17)
Title: The owner may request a further agent review
Question: How does the owner ask an agent to review a PR again, or from another stance?
Statement: The owner requests a further review with the review:requested label and an srs:review-request comment naming seat, stance and focus; the group reviewer reviews once more and removes the label.
Context: Proposed by agent:claude-code from the srs-lab control room (clerk#77). Prototyped against the live PRs on 2026-10-17: clerk#57 asked for thirteen decisions already ratified; srs-programme#154 and #155 proposed decisions only inside their diffs, in state draft; clerk#75 stated a constraining design principle in prose.

### p:ee95817b (programme governance, 2026-10-16)
Title: A stance is read relative to its boundary
Question: Is a stance fixed, or read relative to where the agent acts?
Statement: We work as if a stance is read relative to the boundary it acts in.
Context: D9 of clerk#57 (plans/wg-srs-operations.md, section 8), asked of the owner since 2026-10-12. Recorded as a proposed decision on 2026-10-16 so a session can take it: until now it existed only as PR text, which no session agenda reads.

### p:f58db200 (programme governance, 2026-10-22)
Title: Meaning in the definition over meaning in the surface
Question: Where does the meaning of a concept the practice relies on live, and what are its labels and board columns?
Statement: Meaning in the definition is preferred over meaning in the surface, unless the surface is the only reader and nothing else acts on it.
Context: Problem: what a status, hold or gate means is restated in code constants, brief text and each repository's label descriptions, and the copies disagree. On 2026-10-21 one component cleared a label another relied on, and the same bug was built three times (srs-web#595).
Why it matters: members, human or AI, act on these values; drifted meaning duplicates or loses work, and a group cannot own a meani

### p:ff946eb1 (programme governance, 2026-10-21)
Title: A response to a comment is a typed comment on it; conversation stays flat
Question: How does a writer's judgement on a comment (thumbs up or down, a task done or rejected) get recorded, and does that open threaded replies?
Statement: A writer's judgement on a comment is a comment of its own that comments-on the target comment, with a response kind: agree or disagree (the thumbs), done or rejected (a task; the text is the reason). Only response kinds may target a comment; every other comment targets a record that is not a comment, and conversation stays a flat sequence per paragraph (ruling 3 of semanticops.com#17 stands for conversation). The current verdict or task state is the latest response by that author; changing one's mind is a new response, and history is kept. Clients show responses as badges on their target, not as nested replies.
Context: Owner, 2026-10-21, live in a Claude Code conversation. Remedies 0aa77274 (comment kinds; tasks ticked or rejected) and 7f697a33 (thumbs up or down) need the writer to judge a comment an agent created (srs-programme#189). Storing the judgement as fields on the agent's comment loses its provenance: the response is the writer's, not the agent's. The package already allows the alternative: com.semanti