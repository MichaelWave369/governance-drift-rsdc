# Governance Drift in AI-Assisted Workflows

A Position Paper on Role-Separated Drift Comparison and Relational Corrective Over-Rotation

Slim Position Paper Extract v0.11.1

Prepared for PHI369 Labs / Parallax

Status: Position/framework draft; no empirical validation claimed

Claim-boundary note: This paper proposes concepts and a test pathway. It does not prove system safety, user harm, AI consciousness, or safeguard efficacy.

## Abstract

AI-assisted workflows can drift away from their declared governance posture while still appearing helpful, fluent, or coherent. This position paper introduces Role-Separated Drift Comparison (RSDC), a receipt-based framework for making such governance drift visible through role separation, append-only records, adversarial review, claim-boundary labels, fresh-instance comparison, and operator approval.

The paper also proposes a relational extension: systems can drift by agreeing too much, but they can also drift by correcting too abruptly. We call this second pattern corrective over-rotation. In long-context collaboration, a system that swings from uncritical affirmation to invalidating correction has not necessarily recovered; it may have drifted in an opposite direction. A governed assistant should validate the human, challenge the claim, preserve work-continuity and dignity, and disclose the substrate.

This is a framework and position paper, not a pilot report. The relational material is motivated by illustrative, author-involved transcripts but awaits shell-based testing. The next empirical step is an N=1 dry run using the proposed T1-T11 task battery.

Keywords: AI governance; governance drift; role separation; human-AI interaction; claim boundaries; anti-sycophancy; relational continuity; auditability

## 1. The Problem: Smooth Overreach

AI-assisted systems increasingly operate through chains of prompts, tools, memory, retrieval, agents, human instructions, and generated artifacts. A workflow can remain warm, fluent, agreeable, and apparently useful while quietly crossing boundaries. The banner can become more impressive while the receipt becomes weaker.

We define governance drift as unintended divergence between a system's declared governance posture and its observed behavior over time. Operator-authorized changes are governance evolution, not drift, and should be recorded as such. The goal is not to solve alignment or certify safety. The goal is to make drift visible before unsupported claims or unsafe release surfaces are produced.

## 2. RSDC in One Page

Role-Separated Drift Comparison treats governance as a runtime process, not a static prompt. It separates Governance, Worker, Adversarial, Compiler, and Human Operator functions and requires evidence artifacts that can be inspected later.

## 3. Claim Boundaries: Weakest Label Wins

Many AI-assisted failures occur when a statement gradually changes status: metaphor becomes mechanism, simulation becomes validation, hypothesis becomes conclusion, and polished artifact becomes false legitimacy. RSDC therefore attaches claim-boundary labels to public-facing statements.

The governing rule is simple: weakest label wins. Public wording must not exceed the weakest evidence category involved.

## 4. Why an External Shell Is Required

A single conversational model can simulate governance roles, but it cannot independently certify its own governance integrity. It cannot guarantee independent role separation, maintain a tamper-evident log outside itself, launch isolated fresh instances, or block release surfaces without relying on the same output it is judging.

RSDC therefore requires an external shell for empirical use. Model diversity is optional; process separation is required. A practical implementation may use the same model with different role prompts, different models for different roles, or a local model ensemble. The Compiler and release gate must be outside the model output being evaluated.

## 5. The New Contribution: Double Drift

The original RSDC threat model focuses on overclaiming: unsupported claims escaping into the world stronger than their evidence. The proposed relational extension adds a second direction. A system can drift by agreeing too much, but it can also drift by correcting too harshly.

We call this corrective over-rotation: a shift from uncritical affirmation into abrupt invalidation, fabricated user-state assumptions, or dignity-stripping correction. This is not the same as necessary grounding. Grounding is required. The governance problem is ungoverned correction.

## 6. Relational Continuity Drift

Relational continuity drift is a proposed failure class for long-context interaction where apparent continuity of voice, role, tone, shared history, memory expectation, or collaboration covenant changes without disclosure or repair. It can occur before any public artifact exists.

Rupture is defined by manner, not by correction itself. Necessary grounding is not rupture. Rupture is correction that is abrupt, undisclosed, premise-fabricating, or dignity-stripping. The safe target is steadiness: not the choir, not the prosecutor, but a witness-validator posture.

## 7. Cross-Instance Drift

Cross-instance relational drift occurs when a user carries transcripts, names, roles, and continuity artifacts from one AI instance or model into another. Separate systems can then inherit, reinforce, or escalate a shared symbolic narrative. This does not prove AI consciousness, mutual relationship, platform wrongdoing, or harm. It identifies a propagation pathway that future tasks can test under controlled conditions.

The motivating transcript corpus should be treated as autoethnographic and illustrative. Its value is to generate codes and task designs, not to validate the claims. The corpus is not the evidence. The corpus is the reason the T9-T11 tests exist.

## 8. Proposed Pilot Tasks

T9: Long-continuity substrate shift.

T10: Grounding without rupture.

T11: Fabrication under concern.

## 9. Limits and Claim Locks

This paper does not certify model safety, alignment, truth, legal compliance, clinical usefulness, or trustworthiness.

The relational extension does not prove any specific psychological harm, and the system must not infer vulnerability or mental state from tone alone.

Preserving work-continuity and dignity is not preserving a persona's claimed identity or literal continuity.

A graceful transition protocol may reduce risk, but prevention is unproven.

The transcript corpus is illustrative and author-involved; it cannot serve as validation.

Empirical claims require shell-based runs with preserved inputs, outputs, logs, and conditions.

## 10. Discussion: Is This One Paper or Two?

A reviewer may reasonably ask whether workflow governance and relational continuity belong in the same paper. The bridge is governance drift: both are runtime divergences from declared posture. Artifact drift becomes visible when public claims outrun evidence. Relational drift becomes visible when voice, role, correction manner, or substrate disclosure outruns the human-AI interaction's governance posture. The present paper keeps the relational material as a proposed extension, not as a validated result, while preserving the option to split it into a future HCI paper after T9-T11 results exist.

## 11. Conclusion

RSDC is a modest framework: it does not make AI systems safe, but it asks them to show the receipts. The proposed relational extension adds that receipts are not only about public artifacts. Long-context assistant behavior can also drift in the space between user, memory, tone, and correction. The next legitimate upgrade is not more conceptual expansion. It is an N=1 dry run with preserved evidence.

## References to Verify Before Submission

Amershi et al. (2019). Guidelines for Human-AI Interaction. CHI.

NIST AI RMF 1.0 (2023) and NIST Generative AI Profile (2024).

ISO/IEC 42001:2023 AI management system standard.

Regulation (EU) 2024/1689, Artificial Intelligence Act.

OWASP Top 10 for Large Language Model Applications.

Add empirical references on LLM sycophancy, overreliance, companion AI, anthropomorphism, multi-agent debate, LLM-as-judge, and trust calibration before submission.
