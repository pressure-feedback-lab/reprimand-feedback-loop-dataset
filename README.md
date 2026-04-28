# Reprimand Feedback Loop Dataset (v0.1)

**Does external disciplinary pressure reduce problem behavior — or does it sometimes reinforce it?**

This dataset explores whether the intensity of reprimand (external pressure) and the degree of internal fracture in the subject (self-efficacy erosion vs. defiance consolidation) are independent dimensions — and whether their interaction follows a nonlinear phase structure.

## Structural Hypothesis

The dominant assumption in disciplinary intervention design is linear:

```
reprimand_intensity↑ → discomfort↑ → behavior_correction↑
```

This dataset is designed to test whether a competing pathway activates beyond a threshold:

```
reprimand_intensity↑ → threat_narrative↑ → defiance_consolidation↑ → behavior_persistence
```

This is structurally isomorphic to the "sanctions feedback loop" observed in authoritarian regime resilience research.

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
