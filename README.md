# srs-programme

The SRS spec-rework programme repository (`com.semanticops.programme`): phases,
units, findings, and carried context for the #580 epic, plus the Protocol the
master thread walks.

Moved out of `the-greenman/srs` per owner decision 2026-09-16
(the-greenman/srs#786). **This repository is local-only — it is not, and
should not be, pushed to GitHub.** History was preserved via `git subtree
split`.

## Validate

```bash
srs repo validate --repo .
node scripts/check-programme-conformance.mjs
```
