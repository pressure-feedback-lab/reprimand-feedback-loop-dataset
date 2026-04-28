#!/usr/bin/env node

/**
 * compute_phases.js
 * Reads both data files, validates phase assignments, and outputs a summary.
 * Usage: node scripts/compute_phases.js
 */

const fs = require('fs');
const path = require('path');

// --- Phase Rule v0.1 ---
function classifyPhase(row) {
  const R = parseInt(row.R_index);
  const F = parseInt(row.F_fracture);
  const freq = parseInt(row.problem_behavior_freq);

  if (F <= -1 && R <= 4) return 'C4_correction';
  if (R >= 5 && freq >= 1) return 'L_pressure';
  if (F >= 0 && freq >= 2) return 'R_transition';
  return 'B_dominant';
}

// --- CSV parser (minimal, no dependencies) ---
function parseCSV(filepath) {
  const lines = fs.readFileSync(filepath, 'utf8').trim().split('\n');
  const headers = lines[0].split(',');
  return lines.slice(1).map(line => {
    const values = line.split(',');
    const obj = {};
    headers.forEach((h, i) => { obj[h.trim()] = (values[i] || '').trim(); });
    return obj;
  });
}

// --- Main ---
const files = [
  { label: 'Empirical References', file: 'data/empirical_references.csv' },
  { label: 'Synthetic Observations', file: 'data/synthetic_observations.csv' },
];

let totalMismatch = 0;
let totalRows = 0;

for (const { label, file } of files) {
  const filepath = path.join(__dirname, '..', file);
  const rows = parseCSV(filepath);

  console.log(`\n=== ${label} (${rows.length} rows) ===`);

  const phaseCounts = {};
  let mismatches = 0;

  for (const row of rows) {
    const computed = classifyPhase(row);
    const recorded = row.phase;
    const match = computed === recorded;

    if (!match) {
      console.warn(`  MISMATCH [${row.subject_id}]: recorded=${recorded}, computed=${computed}`);
      mismatches++;
    }

    phaseCounts[computed] = (phaseCounts[computed] || 0) + 1;
  }

  console.log('\n  Phase distribution:');
  for (const [phase, count] of Object.entries(phaseCounts)) {
    const bar = '█'.repeat(count);
    console.log(`  ${phase.padEnd(16)} ${bar} (${count})`);
  }

  console.log(`\n  Phase rule mismatches: ${mismatches}/${rows.length}`);
  totalMismatch += mismatches;
  totalRows += rows.length;
}

console.log(`\n=== TOTAL: ${totalMismatch} mismatches across ${totalRows} rows ===`);

if (totalMismatch === 0) {
  console.log('All phase assignments consistent with Phase Rule v0.1.');
} else {
  console.log('Review mismatch rows above.');
  process.exit(1);
}
