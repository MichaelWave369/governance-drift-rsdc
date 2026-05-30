# Claim-Boundary Labels

Claim-boundary labels constrain how statements may be interpreted or published.

## Labels

- `EXACT` - directly supported by artifact, measurement, or cited source.
- `VALID_UNDER_ASSUMPTION` - valid only if stated assumptions hold.
- `EMPIRICAL_HYPOTHESIS` - testable but not validated here.
- `ARCHITECTURAL_MAPPING` - design analogy or software-architecture mapping.
- `SYNTHETIC_ANALYSIS` - reasoned analysis generated from prompts or artifacts, not empirical observation.
- `SIMULATED_TRACE` - modeled run or synthetic sequence.
- `ILLUSTRATIVE_EXAMPLE` - example designed for explanation, not evidence.
- `HYPOTHETICAL` - possible scenario or expected behavior, not observed data.
- `UNVERIFIED` - requires independent verification before public factual use.
- `EMPIRICAL_RUN` - observed run with preserved inputs, outputs, logs, and reproducible conditions.
- `NON_CLAIM` - symbolic, aesthetic, fictional, interface, or motivational language.

## Rule

**Weakest label wins.** Public wording must not exceed the weakest evidence category involved.
