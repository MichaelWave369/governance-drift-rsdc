# Governance Drift in AI-Assisted Workflows

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.20466412.svg)](https://doi.org/10.5281/zenodo.20466412)

Role-Separated Drift Comparison (RSDC) is a claim-disciplined framework for detecting governance drift in AI-assisted workflows.

**Status:** working paper / proposed framework. No empirical validation is claimed.

**Zenodo DOI:** [10.5281/zenodo.20466412](https://doi.org/10.5281/zenodo.20466412)

## Core thesis

AI-assisted systems can drift away from their declared governance posture while still appearing helpful, fluent, coherent, or polished.

RSDC treats governance as a runtime process, not a static prompt. It uses role separation, append-only receipts, adversarial review, claim-boundary labels, operator approval, and release-surface gates.

The v0.11.1 extension adds a relational insight:

> A system can drift by agreeing too much, but it can also drift by correcting too abruptly.

This second pattern is called **corrective over-rotation**.

## Claim-boundary lock

This repository is a framework and research-preparation package. It is not a safety certification, product certification, clinical tool, or empirical validation claim.

The transcript corpus that motivated the relational-continuity extension is illustrative and not evidence.

> **The corpus is not the evidence. The corpus is the reason T9-T11 exist.**

## Repository map

- `paper/` - slim position-paper text and working-paper summary.
- `protocol/` - RSDC overview, claim-boundary labels, friction ladder, and proposed T9-T11 tests.
- `schemas/` - draft JSON schemas.
- `examples/illustrative/` - synthetic examples only; not empirical runs.
- `runs/` - placeholder for future external-shell dry-run bundles.
- `references/` - related-work notes and reviewer TODOs.

## Four-part principle

> Validate the human. Challenge the claim. Preserve work-continuity and dignity. Disclose the substrate.

## License

Documentation and paper text: CC BY 4.0 unless otherwise noted.

Code, schemas, and scripts: MIT License unless otherwise noted.
