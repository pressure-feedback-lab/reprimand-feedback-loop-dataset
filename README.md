# Reprimand Feedback Loop Dataset (v0.1)

A micro-scale structural observation dataset for analyzing how external reprimand pressure can generate nonlinear feedback loops in children, classrooms, families, and small organizations.

This repository is the body-grounded counterpart of the `sanctions-feedback-loop-dataset`.

Where sanctions operate at the macro scale — states, logistics, finance, and regimes — reprimand operates at the micro scale: bodies, attention, fear, silence, defiance, and local adaptation.

The central question is not:

> How can reprimand correct behavior?

but rather:

> Under what conditions does pressure stop producing correction and begin producing silence, fracture, resistance, or delayed reversal?

This repository does NOT attempt to optimize discipline.

It observes how pressure interacts with adaptive systems.

## Scale Isomorphism

This dataset is structurally paired with the sanctions feedback loop model.

| Scale | Pressure Form | Adaptive System | Hidden Response | Possible Nonlinear Outcome |
|---|---|---|---|---|
| Macro | sanctions | state / regime / logistics network | rerouting, shadow trade, silent resilience | regime hardening, delayed reversal |
| Micro | reprimand | child / classroom / family / small group | silence, masking, defiance, self-efficacy erosion | behavioral persistence, internal fracture |

The claim is not that children and states are the same.

The claim is that pressure systems often share a structural pattern:

```text
external pressure
→ local adaptation
→ hidden state change
→ delayed nonlinear response
```

The purpose of this repository is to make that pattern observable at a body-grounded scale.

## Structural Hypothesis

The dominant assumption in disciplinary intervention design is linear.

However, this repository treats reprimand as a pressure signal entering an adaptive system.

The subject may not simply “receive” pressure.
They may absorb it, mask it, reroute it, internalize it, resist it, or convert it into silence.

The key question is whether pressure and internal fracture are independent dimensions.

The expected linear model assumes:

```
reprimand_intensity↑ → discomfort↑ → behavior_correction↑
```

This dataset is designed to test whether a competing pathway activates beyond a threshold:

```
reprimand_intensity↑ → threat_narrative↑ → defiance_consolidation↑ → behavior_persistence
```

This is structurally isomorphic to the "sanctions feedback loop" observed in authoritarian regime resilience research.

---

## Not for Discipline Optimization

This repository must not be used as a tool to improve punishment, coercion, classroom control, or behavioral pressure.

It is designed for structural observation only.

The intended use is to examine how external pressure may generate:

- silence
- masking
- compliance without recovery
- defiance consolidation
- self-efficacy erosion
- delayed reversal
- local adaptation

The ethical orientation is observational, not corrective.

---

## Additional Notes

- [`docs/scale-isomorphism.md`](docs/scale-isomorphism.md)
  Explains the macro / micro pairing with the sanctions feedback loop model.

- [`docs/observation-model.md`](docs/observation-model.md)
  Defines the observation target and nonlinear pressure model.

- [`examples/sample_micro_case.yml`](examples/sample_micro_case.yml)
  Minimal synthetic example of a reprimand feedback loop.

- [`examples/sample_macro_micro_pair.yml`](examples/sample_macro_micro_pair.yml)
  Conceptual pairing of macro sanctions pressure and micro reprimand pressure.

---

## Index Definitions

### R-index (Reprimand Pressure Index)
Composite of external disciplinary pressure intensity.

| Variable | Scale | Description |
|---|---|---|
| `reprimand_frequency` | 0–3 | How often reprimand occurs per week |
| `reprimand_intensity` | 0–3 | Severity of reprimand (mild → punitive) |
| `public_exposure` | 0–3 | Degree to which reprimand is witnessed by peers |

`R-index = reprimand_frequency + reprimand_intensity + public_exposure`
Range: 0–9

### F-fracture (Internal Fracture Index)
Difference between defiance tendency and self-efficacy erosion.

`F-fracture = defiance_tendency - self_efficacy_erosion`

- Positive values: defiance is consolidating despite (or because of) pressure
- Negative values: pressure is eroding internal resistance (compliance pathway)
- Near zero: unstable equilibrium

---

## Phase Classification (Phase Rule v0.1)

| Phase | Condition | Interpretation |
|---|---|---|
| `C4_correction` | F-fracture ≤ -1 AND R-index ≤ 4 | Behavioral correction is occurring |
| `R_transition` | F-fracture ≥ 0 AND problem_behavior_freq ≥ 2 | Early signs of defiance consolidation |
| `L_pressure` | R-index ≥ 5 AND problem_behavior_freq ≥ 1 | High pressure, behavior persists |
| `B_dominant` | None of the above | External pressure dominant, outcome unclear |

---

## Data Sources

Two data types are included:

### `data/empirical_references.csv`
Values derived from published research in developmental psychology and educational intervention studies. Sources cited inline. Treated as **reference anchors** for scale calibration.

Key sources:
- Gershoff, E.T. (2002). Corporal punishment by parents. *Psychological Bulletin*, 128(4), 539–579.
- Pomerantz, E.M. & Eaton, M.M. (2000). Developmental differences in children's sense of control. *Merrill-Palmer Quarterly*, 46(1), 125–144.
- Skinner, E.A. et al. (1998). Individual differences and the development of perceived control. *Monographs of the Society for Research in Child Development*, 63(2–3).

### `data/synthetic_observations.csv`
Provisional ordinal labels constructed to validate schema structure. **Not empirical data.** For schema testing only.

---

## Limitations

- v0.1 is a schema and phase-rule validation prototype
- Ordinal arithmetic (addition/subtraction of 0–3 scales) is a simplification; interval assumptions are not justified
- F-fracture operationalization requires replication against longitudinal behavioral data
- Case selection should be extended to include intervention-success cases to avoid confirmation bias

---

## Reproduction

```bash
node scripts/compute_phases.js
```

Requires Node.js ≥ 16.

---

## Citation

```
@dataset{reprimand_feedback_loop_2025,
  title   = {Reprimand Feedback Loop Dataset},
  version = {0.1},
  year    = {2025},
  note    = {Schema validation prototype. Not for empirical citation.}
}
```

---

## Structural Note

This dataset is isomorphic in design to sanctions-regime feedback loop research. The core claim is identical: **external pressure intensity and internal fracture depth are independent dimensions**. The intervention designer's error — in both geopolitical and disciplinary contexts — is treating the latter as a dependent variable of the former.
