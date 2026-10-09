# srs-web lenses assessment (2026-10-09)

Why srs-web is confusing, a three-pane lens model that answers it, and what a working proof of concept on four real corpora showed. Source for problem and remedy scouts. Cite a section as `srs-programme:source-documents/srs-web-lenses-2026-10-09/assessment.md#<section>`.

- Owner request (2026-10-09): "srs-web is difficult to use. It's a generic tool for a complex related system. It just ends up being confusing most of the time." Asked for first-principles interface proposals: lenses, several views of the same data, column layouts, generic exploration plus curated views and editors.
- Proof of concept: srs-web branch `poc/ux-lenses` (local, not pushed; commits 733f724 and 4c68181), hidden route `/lens`, design in `plans/ux-lenses.md` on that branch. Gates green: typecheck, lint, 1007 tests.
- Corpora used: the SRS spec (`srs/srs`), muSrs, srs-programme, semanticops.com `source/`, packed as `.srs` and loaded through the real WASM engine.
- Illustrated version (private): https://claude.ai/artifact/9HgYQBeBRShbnYEYqt6PTv

## causes

Read from srs-web at commit 2141000, not from impressions.

1. Every open path lands in GenericSrsShell, a four-surface engine explorer (Document, Structure, Records, Map), whatever the repository holds. The specialised editors (Governance, Guides, Essay, Method) are chosen only on repository creation or a deep link.
2. Switching editor is one-way. Only Essay offers a route back to the explorer. Governance, Guides and Method exit only by "Open another", which closes the document.
3. The generic navigation rail mixes four unrelated axes: compositions (labelled by package namespace), containers, tool modes, and editors.
4. Relations are visible only as an SVG on the Map surface. The inspector promises "fields and relations" and shows fields. Nothing answers "what links here".
5. Lists, record detail and forms each exist in three to five copies (RecordsView, LogTable, Card list, MethodBoard, BlockStack; field dump, Card, RecordReading; RecordForm, SectionForm). The same record looks and edits differently per editor. srs-web#137 (converge Governance and Guides) has been parked.
6. Selection has no address and is lost on every switch (srs-web#426).
7. Engine vocabulary reaches the person: "composition", containerType, tier marks, raw field names.
8. The frame is unified (three-pane AppShell) but the meaning of each pane changes per editor and per surface.

## corpus-shapes

The four corpora have different shapes and the same underlying features.

| Corpus | Records | Shape | Dominant links |
|---|---|---|---|
| SRS spec | 678 records, 27 notes | a book (Parts of ordered leaves) on a concept spine | contains, precedes, depends-on |
| muSrs | 865 records, 25 notes | a graph (claims, evidence, problems) with curated readers and a stewardship list | authored-by, contains, derived-from, depends-on, evidences |
| srs-programme | 512 records, 1 note | an outline (the only corpus using container depth) and a work log | contains, held-by, requires-contract, derived-from |
| semanticops.com source | 88 records | a site (page containers of arranged blocks) | depends-on only |

Features every view must handle: long markdown fields (100 characters to 100k), several long fields per record, selects, list strings, inline composite tables, anchored and nested containers, precedes order and arranged order side by side, custom relation types, hub records with hundreds of edges, lifecycle on some types only, tags, createdBy. A generic explorer shows these features. A person wants the shape.

## model

A person is always asking one of three questions. Each gets one pane, built once.

- **Collection: where am I working?** A set to move through: a container outline, a composition's sections, every record of a type, a search facet.
- **Focus: what is this?** One thing, read or edited whole: a rendered document, a record as reading, a form, a writing surface.
- **Context: what is around it?** Links in and out grouped by meaning, plus the containers and documents it appears in.

A **lens** is presentation-only wiring of the three panes plus a layout (trail, reader, board, graph). Derived lenses come from navigation sections, compositions and types, with no configuration. Curated lenses name the context groups in the domain's words ("Evidence", "Quotes pulled", "Challenged by"). Switching lens keeps the selected record. The selection has one address, which an agent can also set.

Owner note (2026-10-09): "I have found myself wanting to work by drawing boundaries, creating distinctions and then seeing relationships. A boundary defines the set I want to see. A distinction allows me to define what I want to distinguish: sometimes all fields are just fields, sometimes I want types of fields. Sometimes I want types of containers, sometimes I just want to see nesting. I'm looking for systems in systems." In the model: the boundary is the Collection, the distinction is a per-pane "tell apart by" control where "nothing" is a first-class choice, and relationships are the Context and graph, with links inside the set told apart from links that cross it. An ad hoc selection saved as a set is how a curated lens is born from use.

## evidence

Fourteen curated lenses across the four corpora ran on existing bindings. A separate agent captured twenty screens and critiqued them without seeing the design intent. No console errors or error notices.

Held up:
- The trail layout (list, one thing, its links) was immediately legible. Context groups that read as sentences ("Answers 2", "Supports 2") were the strongest part.
- Research, then a source, then the claims it supports, is a natural researcher's trail.
- Board is the most scannable layout for flat typed sets.
- Switching lens kept the selected record in every scripted check.

Did not hold up:
- Focus was always "a record as a schema form" whatever the lens: "you never know whether you are reading or administering". The lens changed the list but not what the centre is.
- Following a link lost your place: nothing highlighted, an empty Context for a record just reached by a link, no way back. Fixed in a second pass with a link trail and Back, typed context groups and a fallback to default groups.
- Reader layout hides Context, so essays and the spec lose their links.
- Writing is not served. "The case" promises an argument and shows twenty claim forms. Essay writing needs its own Focus surface.
- The site corpus renders literal markdown in its page compositions.

## engine-gaps

Worked around in the client and belonging in the core (capability layering):

1. No binding returns a whole Composition with its sections. A composition with no root type and a fixed container section can be matched to its container only by rendering it.
2. Rendered HTML carries no per-record ids, so a document view cannot scroll to or highlight the selected record.
3. No count of relation usage per relation type; hiding unused types needs a full relation read.
4. Reading a Tier 0 note through the record binding throws instead of returning a note.
5. `neighbours` has no type filter, so a context group such as "Quotes pulled" filters client-side.
6. Compositions have no title field; labels are humanised from the key.

## recommendation

1. Adopt the three-pane lens model as the srs-web shell and make today's editors curated lenses of it.
2. Make Focus lens-driven first: reading (fields as prose), document (rendered composition with the selection highlighted, needs engine gap 2), and a registered writing surface per type (Essay).
3. Add the "tell apart by" control to every pane, with "nothing" as the default for reading lenses.
4. Open on a lens, never on the explorer. Keep the explorer as the "Everything" lens.
5. Later, move lens definitions into packages beside Composition and Theme, by RFC, so package authors name the groups once.
