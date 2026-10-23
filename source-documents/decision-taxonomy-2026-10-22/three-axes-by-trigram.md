# The three axes, by trigram

SemanticOps' local reference for how a three-axis structure is laid out. **The three-axis structure is trigram based** (owner, 2026-10-23). It applies to the T3 stance lines, a domain's three axes, and decisions placed on them. The SRS compass is zodiac based (owner, 2026-10-23); it is placed on these lines only through the alignment below, as a translation.

This is a local version of greenmans_creation `obsidian-vault/1-Systems-and-Topology/I-Ching-Zodiac-Isomorphism.md`, aligned to the trigrams. The original is unchanged. Where this page and another instrument disagree, the disagreement is listed under "Where instruments differ" and waits for a ruling. Nothing here changes a ratified record by itself.

## The rule

1. **A trigram is three lines, read from the bottom.**
   - Line 1 is **Earth**, line 2 is **Human**, line 3 is **Heaven**: the Three Powers.
   - A hexagram is two trigrams: lines 1 to 3 below, lines 4 to 6 above. Lines 4, 5 and 6 are Earth, Human and Heaven of the upper trigram.
2. **Line k is the zodiac axis that begins at sign k.**
   - Line 1 is Aries ↔ Libra, line 2 Taurus ↔ Scorpio, and so on to line 6, Virgo ↔ Pisces.
   - Each line's Three Powers position corresponds to a **modality**: Earth is Cardinal, Human is Fixed, Heaven is Mutable.
3. **The two trigrams pair line by line through modality.** Lines 1 and 4 are Cardinal, 2 and 5 are Fixed, 3 and 6 are Mutable. So "the same line" in both trigrams means the same modality.
4. **The line's position, not its name, carries the meaning.** Each instrument names its lines in its own words. The table below is the one place where they meet.

## The lines

| Line | Three Powers | Modality | Zodiac axis | SRS grid cells (compass axis, by the alignment) | Compass default | T3 stance line | Its question |
|---|---|---|---|---|---|---|---|
| 1 | Earth | Cardinal | Aries ↔ Libra | Versioning ↔ Reference (1-7) | Semantic Integrity over Practical Expression | **Act ↔ Observe** | Does the energy go out onto the world, or in to change the system itself? |
| 2 | Human | Fixed | Taurus ↔ Scorpio | Identity ↔ Assertion (2-8) | Evolution over Continuity (phase-bound) | **Disrupt ↔ Stabilise** | Do we add energy to change state, or let the system settle? |
| 3 | Heaven | Mutable | Gemini ↔ Sagittarius | Description ↔ Governance (3-9) | Shared Coherence over Local Autonomy | **Focus ↔ Zoom out** | Is the boundary closed and steered by our will, or open and sensing? |
| 4 | Earth (upper) | Cardinal | Cancer ↔ Capricorn | Attribution ↔ Repository (4-10) | Office over Testimony | | |
| 5 | Human (upper) | Fixed | Leo ↔ Aquarius | Succession ↔ Conformance (5-11) | Reliability over Renewal | | |
| 6 | Heaven (upper) | Mutable | Virgo ↔ Pisces | Containment ↔ Portability (6-12) | Portability over Possession | | |

The stance questions are the owner's definitions of 2026-10-22, the ones the decision ratings use (srs-programme exercise b430b7e0). The stance lines and their zodiac (Leadership-Archetypes: line 1 Aries/Libra, line 2 Scorpio/Taurus, line 3 Gemini/Sagittarius) already follow this order.

## Polarity

- **Odd lines are yang positions, even lines are yin positions.** The zodiac agrees: the axes on lines 1, 3 and 5 join Fire and Air signs (yang elements), and the axes on lines 2, 4 and 6 join Earth and Water signs (yin elements). Opposite signs always share an element polarity, so element polarity classifies the line, not the pole within it.
- **Which pole of a line is yang is a separate assignment, made per domain.**
  - A narrower domain may flip it (decision cdd272a3).
  - The original note's yang column takes the first sign of each axis (Aries, Taurus, Gemini, Cancer, Leo, Virgo), but that is a convention, not something it derives. This page does not use it.
  - Use the owner's yang attributes instead (clerk#159): thing over relation, movement over stillness, outward over inward, assertive over reflective, forward looking over retrospective.
- **Yang is not the preferred pole.** Preference is a lean, recorded separately.

## Other triads, which are not line positions

These triads are real, but they are not the trigram's line triad. Do not use them to number lines.

| Triad | What it is | How it relates to the lines |
|---|---|---|
| Individual, Relational, Systemic | the rows of the Pattern Grid, and the basis of Systemic Data Ethics | Each axis spans two levels: 1-7 and 2-8 are Individual ↔ Relational; 3-9 and 4-10 are Individual ↔ Systemic; 5-11 and 6-12 are Relational ↔ Systemic. Levels do not run along the lines. |
| Action, Form, Time | Systemic Data Ethics' movements, built on the zodiac levels | A different rubric. It pairs the six axes as {3-9, 4-10}, {2-8, 5-11}, {1-7, 6-12}, which crosses modality on two of the three pairs. |
| Energy, Time, Space | T3's dimensions | They describe the stance lines (Leadership-Archetypes maps Action to Trust, Change to Time, Focus to Topology), not line positions in other instruments. |
| Lived, Structured | Systemic Data Ethics' layers | A reading of the two trigrams, not their definition. |

## Where instruments differ (open for a ruling)

1. **The SRS compass is zodiac based, not trigram based** (owner, 2026-10-23).
   - It is built from the Pattern Grid: elements × levels, with six opposite-cell axes.
   - Its own grouping of the axes into three pairs follows Systemic Data Ethics' movements: {3-9, 4-10}, {2-8, 5-11}, {1-7, 6-12} (rfc-decision-b9d7096e; concept cc05d4c9). That is the compass's rubric, not an error, and nothing here proposes to change it.
   - The table above places compass axes on trigram lines through the I Ching ↔ zodiac alignment (axis k on line k). That is a translation for comparing instruments.
   - Two translations give different trigrams for the same compass defaults. By the compass's movement grouping, the inner trigram reads 110 (Engagement). By the alignment it reads 011. The outer trigram reads 101 both ways.
   - When the compass is read as a trigram (b9d7096e's stance vocabulary), say which translation is meant.
2. **A domain's axes in clerk#159** (Programme coordination, first pass).
   - The chapter places Core once ↔ Adapter convenience on line 2 and Compatibility ↔ One way on line 3, by Action, Form, Time.
   - By trigram, line 2 (Human, Fixed, foundation ↔ transformation) is the keep-or-transform axis, Compatibility ↔ One way. Line 3 (Heaven, Mutable, local ↔ expansive) is the concentrate-or-distribute axis, Core once ↔ Adapter convenience.
   - So lines 2 and 3 swap. Line 1 (Human layer ↔ Agent throughput, who acts) is unchanged.
3. **clerk#159's lens paragraph** offers "Action, Form, Time" and "Energy, Scope, Time" as interchangeable generators, and says the stance is built on the second. The stance is built on Act, Disrupt, Focus in that line order. The two lists are different triads (see the table above), not alternative names for the same slots.

## Using it

- **Placing a decision:** rate each line in its own question (the stance column), with the boundary stated first. The code is the three letters in line order: line 1, then line 2, then line 3.
- **Placing a domain's three axes:** give each axis the line whose Three Powers question it answers. Line 1: who acts, and whether energy goes out or in. Line 2: whether to keep or transform. Line 3: whether to hold the boundary or open it. Then test the pairs and the cube (clerk#159, steps 3 and 4).
- **Reading a decision against its domain (context × action):** pair line k with line k. Both now use the same line order, so line k means the same Three Powers position in each.

Sources: greenmans_creation `I-Ching-Zodiac-Isomorphism.md`, `Leadership-Archetypes.md`, `Three-Axes.md`, `systemic-data-ethics.md`; srs `docs/charter/decision-compass.md`; srs-context cc05d4c9; clerk#159; srs-programme exercise b430b7e0, discoveries 7 to 12.
