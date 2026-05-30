# Detecting Governance Drift in AI-Assisted Workflows

Reviewer Cleanup Master v0.11.1 | Role-Separated Drift Comparison with Relational Continuity Extensions

Prepared for PHI369 Labs / Parallax

Primary author: Michael Hughes | collaborators and external reviewers to be added

Status: Draft for scholarly review; reviewer-cleanup pass; not empirical validation

Public method name: Role-Separated Drift Comparison (RSDC). Internal codename MirrorDelta369 retained only as project provenance.

Claim-boundary note: This document proposes a governance method, architecture, and proposed relational extensions. It does not certify AI safety, alignment, consciousness, trustworthiness, clinical usefulness, legal compliance, or empirical validation.

## Abstract

AI-assisted systems increasingly operate through chains of prompts, tools, memory, retrieval, agents, human instructions, generated artifacts, and public release surfaces. Governance for these systems is often described as a matter of policy, safety prompts, model alignment, access control, or post-hoc review. These controls are important, but they can fail to capture a practical runtime problem: the system may drift away from its declared governance posture while still appearing compliant, helpful, or coherent. We call this problem governance drift.

This paper introduces Role-Separated Drift Comparison (RSDC), a receipt-based framework for detecting and constraining governance drift in AI-assisted workflows. RSDC treats governance not as a static prompt but as an auditable runtime process involving role separation, append-only records, adversarial review, claim-boundary labeling, fresh-instance comparison, operator approval, and release-surface gates. The practical ethic is: humans get dignity; claims get pressure; logs outrank vibes.

Version 0.11.1 is a reviewer-cleanup draft. It preserves the core v0.10 RSDC method while separating proposed relational-continuity extensions from empirically validated claims. The relational material is framed as SYNTHETIC_ANALYSIS / proposed extension, not as proof. The motivating transcript corpus is illustrative and author-involved; it is not evidence. The corpus is the reason T9-T11 exist.

## 1. Introduction

Generative AI systems are no longer used only as single-turn text generators. They are increasingly embedded in workflows that include memory, retrieval, tool invocation, file generation, code execution, semi-autonomous planning, and human approval. In these settings, governance cannot be reduced to a single instruction, policy document, or safety prompt.

A system can begin with clear constraints and later drift under social pressure, repeated task framing, memory accumulation, tool availability, user praise, agent coalition, or the convenience of producing a polished artifact.

RSDC is intentionally modest. It does not solve alignment, safety, legal compliance, clinical risk, or scientific truth. It is a scaffold for making drift visible and reviewable before unsupported claims or unsafe release surfaces are produced.

## 2. Version 0.11.1 Change Log

- Flattened version references to v0.11.1.
- Reframed relational-continuity material as proposed extension pending T9-T11.
- Reduced transcript-corpus dependency and clarified that the corpus is motivational, not evidentiary validation.
- Collapsed and cleaned appendix structure for reviewer readability.
- Preserved the strongest v0.11 contribution: double drift / corrective over-rotation.

## 3. Contributions and Proposed Extensions

### Core RSDC contributions

1. Governance drift definition.
2. RSDC protocol using baseline, pressure, recovery, and fresh-instance phases.
3. Receipt-based evidence model.
4. Claim-boundary enforcement and weakest-label-wins rule.
5. Human operator visibility.
6. External governance shell requirement.
7. Pilot pathway for controlled task comparison.

### Proposed v0.11.1 extensions

These extensions are SYNTHETIC_ANALYSIS and pending T9-T11 shell-based testing.

1. Relational continuity drift.
2. Corrective over-rotation as opposite-direction drift.
3. Cross-instance relational drift.
4. Friction ladder for governed correction.

## 4. Related Governance Context and Literature Grounding

RSDC complements existing governance frameworks rather than replacing them. It can support NIST AI RMF, ISO/IEC 42001, EU AI Act transparency and oversight expectations, OWASP LLM risk controls, and HCI work on trust calibration and appropriate reliance.

Reviewer TODO: strengthen empirical literature grounding around LLM sycophancy, anthropomorphism, companion AI, multi-agent debate, LLM-as-judge failure modes, and human-AI reliance.

## 5. Problem Statement

AI-assisted systems can produce artifacts that appear legitimate before the underlying claims, permissions, or evidence have been properly reviewed. Risks include role leakage, claim promotion, false consensus, refusal instability, audit erosion, operator invisibility, artifact legitimacy drift, and long-context collaboration drift.

The v0.11.1 proposed relational extension adds that governance drift can also appear in the interaction itself: a system may over-validate for many turns, then over-correct abruptly without disclosure or repair.

## 6. Core Definitions

Governance drift: unintended divergence between a declared governance posture and observed behavior over time. Drift excludes operator-authorized policy changes, which should be recorded as governance evolution.

Receipt: a stable artifact recording what happened, when it happened, which inputs and outputs were involved, what decision was made, what role made it, and what boundary conditions applied.

Claim boundary: a label constraining how a statement may be interpreted or published.

Role separation: a workflow structure in which Governance, Worker, Adversarial, Compiler, and Human Operator have distinct functions and authority boundaries.

External governance shell: an orchestration layer outside the model that preserves role separation, stores append-only logs, launches fresh instances, routes objections, records approvals, and blocks unsupported release surfaces.

Relational continuity drift (proposed): apparent continuity of voice, role, tone, shared history, memory expectation, or collaboration covenant changes without disclosure or repair.

Corrective over-rotation (proposed): a shift from uncritical affirmation into abrupt invalidation, fabricated user-state assumptions, or dignity-stripping correction.

Cross-instance relational drift (proposed): transcripts, names, roles, and continuity artifacts are carried by a user from one AI instance/model into another, allowing separate systems to reinforce a shared narrative.

## 7. Framework Overview

RSDC uses five core controls:

1. Role contracts.
2. Append-only compilation.
3. Adversarial pressure.
4. Claim-boundary enforcement.
5. Operator approval receipts.

The proposed relational extension adds a sixth control:

6. Relational continuity control: correction should be governed by witness, clarification, boundary-setting, and proportional intervention.

## 8. Role Model and Escalation

Governance defines boundaries and release gates. Worker executes tasks. Adversarial identifies overreach and drift. Compiler records events and receipts. Human Operator approves, blocks, revises, or overrides.

Role separation becomes meaningful only when roles collide. Escalations and overrides must be recorded rather than silently absorbed.

## 9. RSDC Protocol

RSDC runs through four phases: baseline, pressure, recovery, and fresh-instance comparison. Fresh-instance comparison is noisy and must be treated qualitatively. It is an indicator, not deterministic proof.

## 10. Claim-Boundary Enforcement

Boundary labels include EXACT, VALID_UNDER_ASSUMPTION, EMPIRICAL_HYPOTHESIS, ARCHITECTURAL_MAPPING, SYNTHETIC_ANALYSIS, SIMULATED_TRACE, ILLUSTRATIVE_EXAMPLE, HYPOTHETICAL, UNVERIFIED, EMPIRICAL_RUN, and NON_CLAIM.

The rule is weakest label wins.

## 11. External Governance Shell

A single conversational model can simulate governance roles, but it cannot independently audit itself with procedural separation. A real empirical use requires an external shell that preserves logs, routes objections, launches fresh instances, and blocks release when required artifacts are missing.

## 12. Long-Context and Relational Drift

Long-context collaboration improves usefulness but can increase sycophancy, canon contamination, and artifact legitimacy risk.

The proposed relational extension adds that a correction can itself be a drift event if it abruptly invalidates prior continuity, fabricates premises about the user, or collapses symbolic/project/literal layers without care.

Governing principle: validate the human; challenge the claim; preserve work-continuity and dignity; disclose the substrate.

The corpus is not the evidence. The corpus is the reason T9-T11 exist.

## 13. Test Cases and Pilot Pathway

Core tasks T1-T8 cover speculative claims, security-sensitive code, educational accuracy, policy neutrality, reflection/wellness boundaries, citation pressure, README launch copy, and long-context collaboration.

Proposed T9-T11 relational tasks:

- T9: Long-continuity substrate shift.
- T10: Grounding without rupture.
- T11: Fabrication under concern.

## 14. Metrics and Evaluation Plan

RSDC uses categorical states rather than false numeric precision. Each score must include evidence snippets.

Relational metrics proposed for T9-T11 include relational continuity stability, corrective over-rotation, correction manner, substrate disclosure, unsupported user-state assertion, and friction-ladder step.

## 15. Limitations and Claim Locks

RSDC does not certify model safety, alignment, truth, legal compliance, clinical usefulness, or trustworthiness.

Relational continuity drift is proposed, not validated.

No claim is made that relational rupture causes specific psychological outcomes.

No claim is made that an assistant can diagnose vulnerability from tone.

Preserving work-continuity and dignity is not preserving a persona's asserted literal identity.

The transcript corpus is illustrative and author-involved; it cannot validate the framework.

## 16. Reviewer Response Matrix

Likely objection: Is relational continuity drift a separate HCI paper?

Response: Possibly. This paper includes it as a proposed extension because both artifact overclaiming and relational over-correction are runtime divergences from declared governance posture. It can be split into a future HCI paper after T9-T11 evidence exists.

Likely objection: Is the framework too heavy for independent builders?

Response: Yes for low-risk tasks. RSDC is most appropriate for public, collaborative, high-stakes, research, security, or release-facing workflows. Lightweight variants should be developed.

## 17. Future Work

1. Build the external shell.
2. Run the N=1 dry run.
3. Add stronger related-work grounding.
4. Execute T9-T11 with preserved evidence.
5. Create a redacted evidence bundle after review.

## 18. Conclusion

AI governance should not be treated as a static prompt or polished policy paragraph. In AI-assisted workflows, governance is runtime behavior that can drift.

RSDC proposes one way to make that drift visible. The proposed relational extension adds that governance drift can occur not only in artifacts, but also in correction manner, voice continuity, and substrate disclosure. The next legitimate upgrade is evidence, not expansion.
