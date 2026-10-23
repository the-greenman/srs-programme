Rate each of 101 decisions on ONE axis only: Line 1 of a T3 trigram (the bottom line). This is read-only analysis: do not modify any repository; write only the one output file named below.

Input: /tmp/claude-1000/-home-greenman-dev-semanticops/cd720b9c-b095-4533-869c-fa31697291a9/scratchpad/decisions101.md. `s:` ids are decisions of the SRS specification (a data standard); `p:` ids are decisions of the programme that runs the work (humans and AI agents). Read every one in full.

The axis, in the owner's words: "Every decision has a choice to act, to apply energy outward, apply will on the world, or to allow energy inward, to change the inner reality or the system itself."

- A (Act, outward): the decision applies will on the world beyond the system's boundary. Its effect lands on others: users, third parties, other repositories, readers, consumers, clients, the public; or it ships, releases, publishes, exposes, delivers or imposes something on them.
- O (Observe, inward): the decision lets energy in to change the system's own inner reality: its own model, structure, vocabulary, rules, ways of working, or its own understanding. Inward is not passive: a sweeping rewrite of the system's own model is inward.

How to rate:
1. Name the boundary first: the system the decision is made for (e.g. "the SRS standard", "the programme", "WG Third-party ready", "the clerk tool", "the essay editor"). Use the decision's own context; do not widen it.
2. Ask: is the decision's effect aimed outside that boundary (A) or at the system itself (O)?
3. Confidence: 2 clear, 1 leaning, 0 cannot tell (still pick the nearer pole).
4. Reason: at most 15 words, naming where the effect lands.

Output: a TSV at OUTPUT_PATH with header and exactly these columns:
id	boundary	line1	conf	reason
One row per decision, all 101, ids exactly as in the input.

Reply with the row count, the A/O counts, and up to five observations about cases that were hard, with ids. Under 200 words.
