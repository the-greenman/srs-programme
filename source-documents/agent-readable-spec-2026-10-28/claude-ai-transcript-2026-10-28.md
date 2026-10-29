# claude.ai conversation, 2026-10-28: reading srs.semanticops.com

Relayed by the owner into Claude Code on 2026-10-28, as pasted (claude.ai's turns, with the owner's two prompts inside it).

---

Yes, I can open it now. The research agent couldn’t reach it earlier and worked from the GitHub repos instead. Having read it, the report’s recommendations still fit, and in a few places they’re more directly aligned with SRS than the report assumed:

“Records are the source, documents are projections” is the same principle the report recommends for the RAG side. The search index becomes one more projection, next to Markdown, HTML, JSON and agent context, so it’s disposable and rebuilt from the records.
Typed relations already exist (depends-on, derived-from, supersedes). The report’s dependency record doesn’t need to be a new construct. Make it an SRS Relation with extra fields: pinned version or date, a quote selector, and a content hash. The ELI terms (based_on, cites) can be mapped onto your relation types rather than replacing them.
The MCP server is already there (srs mcp serve). The reference tools (search, resolve, dependents, check_impacts) slot in as extra tools on it rather than as a separate service.
User-defined Types mean “Policy”, “Standard”, “Law”, “Contract” and “Clause” can ship as a Package for small orgs, not be baked into the spec.
The .srs archive and /llms.txt are already a portable, agent-readable bundle. That’s a natural unit to index.
The one thing I couldn’t confirm from the homepage is how SRS identifies records and fragments today: the ID scheme and whether there’s a URI form. That’s the piece the report says everything else depends on. Want me to read the Model page and check it against the proposed address scheme?

Can you find addressability in the spec at srs.semanticops.com

Read 13 pages, ran 2 commands
Partly. I can read the spec through the web tool, but it cuts off at about 117,000 characters, which is before the Extensions part where ext:addressability is defined in full. My shell can’t reach srs.semanticops.com because it isn’t on this session’s network allowlist, and GitHub raw fetches failed. Here’s what I could confirm.

What the spec defines today

Stable identity: every entity carries a UUID minted once and never changed, whether it’s an instance, relation, container, document or repository. Identity is declared in the file, never taken from the path or filename. UUID conflicts are fatal.
Definition references: the display form is namespace/name@version, but what gets stored is the UUID, so renames don’t break pointers.
Fragments today: SourceAnchor on a source document excerpt, with kind being one of line-range, char-range, timestamp-range, message-id, json-pointer or custom, plus a value string. An excerpt also stores sourceChecksumAtCapture (<algo>:<hex>).
Source links: SourceReference with sourceType set to transcript-chunk, transcript-segment, external-document or repository-document, plus a sourceRole such as evidence, quoted-from or extracted-from.
ext:addressability: the glossary describes one scheme across document, process and conversation spaces, so a transcript fragment and a record field are “co-addressable”. It separates a stable address from a live cursor. Transcript chunks get tagged with the cursor (AttentionState) at production time, which makes “everything said while we were on this field” a query rather than a search.
Gaps relative to the reference-layer needs

No URI or address grammar is visible. I found no example address strings. UUIDs are stable, but there’s nothing yet that resolves across repositories or reads well in a policy citation.
SourceAnchor is one locator with no fallback. A char-range breaks silently when the text changes. Adding a quote-plus-prefix/suffix variant, in the style of the W3C TextQuoteSelector, would give you recovery.
Source documents carry no checksum of their own. Only excerpts have one, so you can’t detect “this standard changed since we cited it”.
External references are free strings. external-document + sourceId + sourceStandard could carry legislation.gov.uk URIs or ISO URNs, but nothing pins the version or date of the target.
There’s no stable sub-record fragment ID. Notes have unique section names, but there’s no clause-level ID that survives renumbering.
The good news is that SourceReference/SourceAnchor is the natural slot for the reference layer, and the timestamp anchors plus streamId already link it to TSS.

To check the full ext:addressability and Distribution text, you can either allow srs.semanticops.com (or GitHub) under Settings > Capabilities, or paste that section here.

Ok. Perhaps I should actually consider this a bit of a bug. Or more. 

I need my spec to be agent readable. That's kind of the point of srs. 

What should I expect of a spec so that I can point an LLM at it and it will understand?

Checking the spec's packaging and glossary gaps
Yes, I’d treat it as a bug, and a fairly central one. The spec failed for me in exactly the way it will fail for most agents. The marketing site already does this well (/llms.txt, /agents/<page>.md), but the spec site doesn’t.

What went wrong when I tried to read it

It’s one 117k-character file. Web-fetch tools typically read about 100k characters and then stop, so I never reached the Extensions, Distribution or Conformance parts. ext:addressability was literally out of reach.
The complete version is a .srs archive. Agents with only a fetch tool can’t open it without an SRS client.
Pages point to content they don’t contain. Text like “see the generated reference below” and terms such as SourceAnchor appear in the glossary without a definition there.
The repo route failed too. Raw GitHub fetches errored for me, though that may be my environment rather than your setup.
What to expect of an agent-readable spec

An index first. Serve a srs.semanticops.com/llms.txt that lists every concept page with a one-line description and its URL. An agent reads that and then fetches only what it needs.
One concept per page, under about 20–30k characters. RFC-042’s concept tree already gives you natural boundaries, for example /spec/concepts/addressability.md.
Every page self-contained. Each page should have the definition, its normative rules with IDs, the shape, one concrete JSON example, and links to the concepts it depends on. Avoid pointers like “see below”.
Plain text as well as the archive. Offer .md and .json projections alongside .srs, so any tool can read it.
A complete glossary. Every term used anywhere should be defined, with a link to its page.
Stable, dereferenceable URLs per concept. These are your own addressing problem: if record:concepts/addressability resolves to a URL, the spec is using its own addressing scheme.
Rules kept apart from rationale. Agents should be able to fetch just the normative rules when that’s all they need.
How to know it works

Write an eval. Give a fresh agent nothing but a fetch tool and the root URL, ask it 20 or so real questions, such as “How do I anchor a quote into a source document?” or “What does ext:addressability require?”, and check the answers against the records. Run it in CI next to validate-all. Agent-readability then becomes a conformance property you can test, not just a hope.

Because the spec is already authored as records, most of this is one more projection rather than a rewrite. The agent projection that semanticops.com uses is the template.
