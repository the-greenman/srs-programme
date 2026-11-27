# Strata: a defined set of layers for an SRS document

Design note, 2026-11-27. The owner: "I want a human to be able to view the minutes and then drill down. But
the current experiences of drilling down feel difficult. Once we drill we have a graph or a mess. What if we
actually created a defined set of strata?"

## Answer

Yes. A document type should declare its strata: an ordered list of layers, each naming the record types
that sit in it. With that one declaration, "drill down" has a meaning (one stratum down, following only
relations that mean *rests on*), and everything else a record is related to falls into a small number of
named directions instead of a graph.

The lab's earlier strata experiment reached the same point for writing: it made the strata a declared
mapping of types to layers, rejected deriving them from graph position as circular, and left a trigger to
revisit "if a package should declare its own layer". This is that.

## What was measured

On a master repository holding two real meetings (850 relations), with five strata declared for minutes:
memory (subjects and their standing), record (minutes, decisions, tasks, attendance, references), working
(topics, decision points, precedent checks, follow-ups, open questions), evidence (fragments), source (the
transcript).

- 600 relations mean "rests on" (evidence, derivation, provenance). 250 are arrangement (`about`,
  `refers-to`).
- Within one meeting, all 483 rests-on relations go down or stay level. None goes up.
- 209 go exactly one stratum down; 180 skip one (a minute resting directly on a fragment); 110 stay within a
  stratum (a precedent check resting on a decision point).
- The only upward ones (7) cross meetings: a follow-up resting on an earlier meeting's task. That is not up.
  It is back in time. 89 more go to the group's standing records, which are beside the meeting, not under it.

On the LiveWyer Insight report, with strata opportunity, problem, finding, talk, event: all 737 rests-on
relations go exactly one stratum down, and its 361 `contains` relations are arrangement.

## Four directions, not a graph

From any record:

| Direction | Means | Follows |
|---|---|---|
| **Down** | What this rests on, stratum by stratum, to the source | Relations of category evidence, derivation or provenance, within the document |
| **Back** (and forward) | The same matter at other documents of the series | The same relations, where the other end is in an earlier document |
| **Across** | Standing records beside the document: rules, roles, earlier decisions | The same relations, where the other end is outside any document of the series |
| **Around** | Where this sits: its topic, its subject | Arrangement relations and containers |

The prototype page (`strata.py --html`) shows a meeting's minutes as fixed bands. Picking a minute leaves it
in place and fills each band beneath with only what it rests on at that depth; the subject and its standing
appear above; standing records and other meetings appear beside. The mess goes because depth, time and
standing are no longer drawn as one thing.

## What it unifies

- **Drill-down**: one stratum at a time.
- **What travels and what stays** (the outcome and working layers of the project definition): merge the
  strata from the record upward into the master; leave working and evidence in the meeting file. The mark
  that needed a ruling is the stratum.
- **The rules for minutes**: what the meeting did is *down* (it rests on fragments). Context is *across* or
  *back* (it comes from a standing record or an earlier meeting). A minute may not present something from
  across or back as if it came from below.
- **Search noise**: discovery can default to the upper strata.
- **The protocol**: a stage writes into one stratum and may rest only on strata below it, so the order of
  stages can be checked against the strata.

## Where each part goes

| | Spec | Engine | Package | Processor / editor |
|---|---|---|---|---|
| The strata | `Blueprint.strata`: an ordered list, each with a key, a label and its types; optional lanes beside the stack | Read it | Declare it for minutes, and for any other document type | |
| Which relations mean "rests on" | Already there: a relation type's `category` (evidence, derivation, provenance). Missing: which end rests on which, today only prose in `canonicalDirection` | | File the package's own relations under the right category (the prototype filed them as association) | |
| No upward provenance inside a document | One invariant, reported as a diagnostic | Check it at validation | | |
| Drill | | A query: for a record, what it rests on by stratum, and what lies back, across and around | | Show it; let a reader set how deep to open |
| Rendering | A composition that opens a record one stratum at a time | Render it | A drill-down composition for minutes | The page, the PDF |
| What merges | | Merge or slice by stratum | Which strata are the record | The policy and the moment |

## Open

- Whether a stratum needs an order inside it (precedent checks rest on decision points in the same layer),
  or whether that is a sign of one stratum too few.
- Whether strata belong to the Blueprint (one stack per document type) or to the package.
- How strata relate to tiers (tier 0 notes, tier 2 records). They are different axes: a tier says how typed
  a record is; a stratum says how far it is from the source.
- Whether skipping is allowed. The data says it has to be: a minute rests on fragments directly as well as
  through a decision point.
