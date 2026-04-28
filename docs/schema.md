# Schema Reference (v0.1)

## Variable Definitions

### Input Variables

| Variable | Type | Range | Description |
|---|---|---|---|
| `subject_id` | string | — | Unique identifier |
| `context` | string | classroom / home | Setting of observation |
| `age_group` | string | elementary / middle | Developmental stage |
| `reprimand_frequency` | ordinal | 0–3 | 0=none, 1=rare, 2=weekly, 3=daily |
| `reprimand_intensity` | ordinal | 0–3 | 0=none, 1=mild, 2=moderate, 3=punitive |
| `public_exposure` | ordinal | 0–3 | 0=private, 1=small group, 2=class, 3=school-wide |
| `defiance_tendency` | ordinal | 0–3 | 0=none, 1=passive, 2=active, 3=consolidated |
| `self_efficacy_erosion` | ordinal | 0–3 | 0=intact, 1=mild erosion, 2=moderate, 3=severe |
| `problem_behavior_freq` | ordinal | 0–3 | 0=none, 1=occasional, 2=frequent, 3=persistent |

### Derived Variables

| Variable | Formula | Interpretation |
|---|---|---|
| `R_index` | reprimand_frequency + reprimand_intensity + public_exposure | External pressure composite (0–9) |
| `F_fracture` | defiance_tendency - self_efficacy_erosion | Internal fracture direction (-3 to +3) |

## Known Limitations

### Ordinal arithmetic
Addition and subtraction of ordinal variables assumes equal intervals between scale points. This is a simplification. Results should be interpreted as approximate ordering, not precise measurement.

### F_fracture independence assumption
The formula assumes defiance_tendency and self_efficacy_erosion are independent. In reality they may be negatively correlated (high erosion suppresses defiance). This interaction is not captured in v0.1.

### Phase boundary rigidity
Phase thresholds (F ≤ -1, R ≥ 5, etc.) are provisional. They were set to produce a plausible distribution across synthetic data, not derived from empirical threshold analysis.

## Structural Isomorphism Note

This schema is deliberately isomorphic to sanctions-regime feedback loop datasets:

| This dataset | Sanctions dataset |
|---|---|
| R_index | B_index (external pressure) |
| F_fracture | R_fracture (internal fracture) |
| reprimand intensity | sanction intensity |
| public_exposure | external threat narrative |
| defiance_tendency | elite cohesion |
| self_efficacy_erosion | elite fragmentation |
| C4_correction | S4_transition |
| L_pressure | L_pressure |

The isomorphism is the point. The same phase structure appears at radically different scales of social organization.
