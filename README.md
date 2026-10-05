# srs-programme

SRS (pronounced "source") is an open standard for portable semantic documents that people and AI can both understand and use. See [semanticops.com](https://semanticops.com).

The SRS spec-rework programme repository (`com.semanticops.programme`): phases,
units, findings, and carried context for the #580 programme, plus the Protocol
the master thread walks.

Moved out of `the-greenman/srs` per owner decision 2026-09-16
(the-greenman/srs#786). History was preserved via `git subtree split`.

See `CLAUDE.md` for the working rules (Protocol, pinned-CLI writes, merge gate).

## Validate

```bash
export $(node scripts/fetch-pinned-srs.mjs)
"$SRS_CLI_PATH" repo validate --repo . --pretty
node scripts/check-programme-conformance.mjs
```

This is what CI runs (`.github/workflows/validate.yml`), against the pinned
`srs-rust` release declared there as `SRS_RUST_CLI_TAG`.
