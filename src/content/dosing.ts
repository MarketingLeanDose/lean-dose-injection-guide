/**
 * THREE-MONTH DOSING PROTOCOLS — patient-facing lookup data
 * ------------------------------------------------------------
 * Source: Lean Dose internal Team Vial Order Guide (vial-order-guide-team.vercel.app),
 * copied as displayed on 2026-11-03. Values are copied verbatim — NOT calculated by this site.
 * Only patient-relevant fields are included (weeks, units, dose, vial strength label).
 * Ordering details (order lines, mg supplied) are intentionally left out.
 *
 * Units are for a U-100 insulin syringe (100 units = 1 mL), per the source guide.
 *
 * CLINICAL GATING
 *  - `dosingClinical.pending: true` hides the finder & reference chart from patients
 *    (a placeholder sample chart is shown instead) until clinical leadership signs off.
 *  - A plan with `wip: true` is marked "Work in progress" in the source guide and is
 *    never shown to patients, even after the section is approved, until the flag is removed.
 *
 * TO UPDATE: edit the rows below to match the source guide exactly, then have clinical re-verify.
 */

export type Medication = 'semaglutide' | 'tirzepatide';

export interface DoseRow {
  /** Inclusive week range, e.g. [9, 10]. */
  weeks: [number, number];
  /** Units to draw each week (total for that week). */
  units: number;
  /** Dose as written in the source guide, in mg. */
  doseMg: string;
  /** Which vial the dose comes from. */
  vial: 1 | 2;
  /** If the weekly dose is split across several syringes: count and units each. */
  split?: { count: number; each: number };
}

export interface DosePlan {
  startMg: string;
  wip?: boolean;
  /** Strength label printed on each vial, as in the source guide. */
  vials: { 1: string; 2?: string };
  rows: DoseRow[];
}

export const dosingClinical = {
  pending: false, // approved by Lean Dose 2026-11-09
  sourceCapturedOn: '2026-11-03',
};

export const protocols: Record<Medication, DosePlan[]> = {
  semaglutide: [
    {
      startMg: '0.25',
      vials: { 1: '2mg/1mg/0.5mL' },
      rows: [
        { weeks: [1, 4], units: 7, doseMg: '0.25', vial: 1 },
        { weeks: [5, 8], units: 13, doseMg: '0.5', vial: 1 },
        { weeks: [9, 12], units: 25, doseMg: '1', vial: 1 },
      ],
    },
    {
      startMg: '0.5',
      vials: { 1: '2.5mg/1mg/0.5mL', 2: '1mg/1mg/0.5mL' },
      rows: [
        { weeks: [1, 4], units: 10, doseMg: '0.5', vial: 1 },
        { weeks: [5, 8], units: 20, doseMg: '1', vial: 1 },
        { weeks: [9, 10], units: 35, doseMg: '1.7', vial: 1 },
        { weeks: [11, 12], units: 85, doseMg: '1.7', vial: 2 },
      ],
    },
    {
      startMg: '1',
      vials: { 1: '5mg/1mg/1mL' },
      rows: [
        { weeks: [1, 4], units: 20, doseMg: '1', vial: 1 },
        { weeks: [5, 8], units: 35, doseMg: '1.7', vial: 1 },
        { weeks: [9, 12], units: 40, doseMg: '2', vial: 1 },
      ],
    },
    {
      startMg: '1.7',
      vials: { 1: '5mg/1mg/1mL' },
      rows: [
        { weeks: [1, 4], units: 35, doseMg: '1.7', vial: 1 },
        { weeks: [5, 8], units: 40, doseMg: '2', vial: 1 },
        { weeks: [9, 12], units: 50, doseMg: '2.5', vial: 1 },
      ],
    },
    {
      startMg: '2',
      vials: { 1: '5mg/1mg/1mL', 2: '1.7mg/1mg/0.5mL' },
      rows: [
        { weeks: [1, 4], units: 40, doseMg: '2', vial: 1 },
        { weeks: [5, 8], units: 50, doseMg: '2.5', vial: 1 },
        { weeks: [9, 10], units: 50, doseMg: '2.5', vial: 1 },
        { weeks: [11, 12], units: 74, doseMg: '2.5', vial: 2 },
      ],
    },
    {
      startMg: '2.5',
      vials: { 1: '5mg/1mg/1mL', 2: '1.7mg/1mg/0.5mL' },
      rows: [
        { weeks: [1, 4], units: 50, doseMg: '2.5', vial: 1 },
        { weeks: [5, 8], units: 50, doseMg: '2.5', vial: 1 },
        { weeks: [9, 10], units: 50, doseMg: '2.5', vial: 1 },
        { weeks: [11, 12], units: 74, doseMg: '2.5', vial: 2 },
      ],
    },
  ],
  tirzepatide: [
    {
      startMg: '2.5',
      vials: { 1: '15mg/1mg/0.5mL' },
      rows: [
        { weeks: [1, 4], units: 8, doseMg: '2.5', vial: 1 },
        { weeks: [5, 8], units: 16, doseMg: '5', vial: 1 },
        { weeks: [9, 12], units: 24, doseMg: '7.5', vial: 1 },
      ],
    },
    {
      startMg: '5',
      vials: { 1: '12.5mg/1mg/0.5mL', 2: '12.5mg/1mg/0.5mL' },
      rows: [
        { weeks: [1, 4], units: 20, doseMg: '5', vial: 1 },
        { weeks: [5, 8], units: 30, doseMg: '7.5', vial: 1 },
        { weeks: [9, 12], units: 40, doseMg: '10', vial: 2 },
      ],
    },
    {
      startMg: '7.5',
      vials: { 1: '15mg/1mg/0.5mL' },
      rows: [
        { weeks: [1, 4], units: 24, doseMg: '7.5', vial: 1 },
        { weeks: [5, 8], units: 32, doseMg: '10', vial: 1 },
        { weeks: [9, 12], units: 40, doseMg: '12.5', vial: 1 },
      ],
    },
    {
      startMg: '10',
      vials: { 1: '15mg/1mg/0.5mL' },
      rows: [
        { weeks: [1, 4], units: 32, doseMg: '10', vial: 1 },
        { weeks: [5, 8], units: 40, doseMg: '12.5', vial: 1 },
        { weeks: [9, 12], units: 48, doseMg: '15', vial: 1 },
      ],
    },
    {
      startMg: '12.5',
      wip: true, // marked "Work in progress" in the source guide
      vials: { 1: '15mg/1mg/0.5mL', 2: '5mg/1mg/0.5mL' },
      rows: [
        { weeks: [1, 4], units: 40, doseMg: '12.5', vial: 1 },
        { weeks: [5, 8], units: 48, doseMg: '15', vial: 1 },
        { weeks: [9, 11], units: 48, doseMg: '15', vial: 1 },
        { weeks: [12, 12], units: 150, doseMg: '15', vial: 2, split: { count: 2, each: 75 } },
      ],
    },
    {
      startMg: '15',
      vials: { 1: '15mg/1mg/0.5mL', 2: '7.5mg/1mg/0.5mL' },
      rows: [
        { weeks: [1, 4], units: 48, doseMg: '15', vial: 1 },
        { weeks: [5, 8], units: 48, doseMg: '15', vial: 1 },
        { weeks: [9, 10], units: 48, doseMg: '15', vial: 1 },
        { weeks: [11, 12], units: 100, doseMg: '15', vial: 2 },
      ],
    },
  ],
};

/** Month (1–3) a week belongs to. */
export const monthOf = (week: number) => Math.ceil(week / 4);
