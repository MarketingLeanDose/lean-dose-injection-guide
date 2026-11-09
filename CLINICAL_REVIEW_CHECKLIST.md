# Lean Dose At-Home Injection Guide — Clinical Review Checklist

**INTERNAL ONLY. Not linked from or displayed on the patient website.**

Sign off on every item before the public launch. When an item is approved, remove the matching `pending: true` flag in `src/content/en.ts` **and** `src/content/es.ts` (or add the approved text/media), then redeploy.

| # | Item | Where it lives in the site | Status | Approved by / date |
|---|------|----------------------------|--------|--------------------|
| 1 | Verify the actual syringes and needles supplied (type, capacity, unit scale, needle gauge/length) | Step 4 syringe diagram; Step 7 cards | ☐ Pending | |
| 2 | Confirm pharmacy-approved vial preparation / inspection instructions | Step 3; Supplies "check" list | ☐ Pending | |
| 3 | Confirm syringe withdrawal technique (vial entry, air handling, drawing units) | Step 4 "Detailed drawing technique" (placeholder) | ☐ Pending | |
| 4 | Verify needle insertion angle | Step 7.4 (`pending: true`) | ☐ Pending | |
| 5 | Verify skin-fold technique (pinch yes/no, hold vs. release during administration) | Steps 7.3 and 7.5 (`pending: true`) | ☐ Pending | |
| 6 | Confirm approved abdominal injection sites (2-inch navel clearance, zone shading on diagram) | Step 5 diagram + rotation | ☐ Pending | |
| 7 | Verify the prescribed three-month dosing protocols (semaglutide & tirzepatide, all starting doses) | Dosing chart section — **currently placeholders only** | ☐ Pending | |
| 8 | Confirm medication concentrations and unit conversions | Not published. Site states mg ≠ units and points to the personal chart. | ☐ Pending | |
| 9 | Review storage and beyond-use instructions | FAQ 11 (`pending`); Aftercare; Supplies check list | ☐ Pending | |
| 10 | Review missed-dose guidance | FAQ 9 (`pending`) | ☐ Pending | |
| 11 | Review adverse-effect and emergency guidance | Safety section (emergency box); FAQ 7, 10 (`pending`) | ☐ Pending | |
| 12 | Review air-bubble guidance | FAQ 8 (`pending`) | ☐ Pending | |
| 13 | Approve English educational content (all sections) | `src/content/en.ts` | ☐ Pending | |
| 14 | Approve Spanish educational content (all sections) — native-speaker clinical review | `src/content/es.ts` | ☐ Pending | |
| 15 | Approve nurse demonstration footage (EN + ES HeyGen videos; real clinical demo for technique steps, not AI-generated footage alone) | `siteConfig.videos`, `siteConfig.stepVideoLinks` | ☐ Pending | |
| 16 | Approve clinical photos/illustrations for Steps 7.2–7.5 | `siteConfig.approvedMedia` | ☐ Pending | |
| 17 | Support phone (832) 900-4410 and email info@leandose.co added; messaging link still to confirm | `siteConfig.support` | ◐ Partly done | |
| 18 | Add the official Lean Dose logo files (from Huda) | `siteConfig.logoSrc`, `/public/brand/` | ☐ Pending | |

| 19 | Approve the patient-facing **dose finder + "All starting doses" chart** (data in `src/content/dosing.ts`, copied verbatim from the Team Vial Order Guide on 2026-11-03). Set `dosingClinical.pending = false` to publish. | Dosing Chart section | ☐ Pending | |
| 20 | Tirzepatide **12.5 mg start** is marked "Work in progress" in the source guide — hidden from patients until `wip` is removed | `dosing.ts` | ☐ Pending | |
| 21 | Tirzepatide 12.5 mg start, **week 12 = 150 units given as 2 syringes of 75 units** — confirm this is intended and how patients are taught it | `dosing.ts` | ☐ Pending | |

## Unit/dose discrepancies found in the source guide (please confirm)
Units below are copied exactly from the internal guide. Checked against each vial's stated concentration (U-100: 100 units = 1 mL):

| Medication / vial | Units shown | Dose labeled | Dose those units actually deliver |
|---|---|---|---|
| Tirzepatide 15mg/1mg/0.5mL (30 mg/mL) | 8 | 2.5 mg | 2.4 mg |
| 〃 | 16 | 5 mg | 4.8 mg |
| 〃 | 24 | 7.5 mg | 7.2 mg |
| 〃 | 32 | 10 mg | 9.6 mg |
| 〃 | 40 | 12.5 mg | 12.0 mg |
| 〃 | 48 | 15 mg | 14.4 mg |
| Semaglutide 2mg/1mg/0.5mL (4 mg/mL) | 7 | 0.25 mg | 0.28 mg |
| 〃 | 13 | 0.5 mg | 0.52 mg |
| Semaglutide 5mg/1mg/1mL (5 mg/mL) | 35 | 1.7 mg | 1.75 mg |

All other rows match their vial concentration. If these are intentional (e.g., rounding to stretch the vial), no change is needed. If not, correct the source guide **and** `dosing.ts` together.

## Changes from marketing review (2026-11-03) — please confirm
- Gauze removed (not in the package). Steps 7.6 and FAQ 7 now say "a clean cotton ball or tissue" — confirm wording.
- Storage: "keep in the refrigerator at all times" added throughout; vial ships in a temperature-controlled container; patients told to contact the care team if the vial arrived warm or was left out. FAQ 11 now published.
- Home needle disposal: household heavy-duty plastic bottle method (FDA + TCEQ household-sharps guidance); Texas household-trash rule; other states pointed to safeneedledisposal.org.

## Step 7 update (2026-11-09) — please confirm
- Marketing direction: needle inserted at a **90-degree angle** into a pinched skin fold. Step 7.4 and 7.6 text updated (EN + ES) to say 90°, matching the 0.25 mg semaglutide video.
- New illustrations for 7.2–7.6 (grip and cap removal, pinch, 90° insertion, plunger, straight withdrawal + cotton ball). They are educational drawings, not clinical photos — approve them or replace them via `siteConfig.approvedMedia`.
- 7.3, 7.4, 7.5 are still flagged `pending: true`; remove the flags in en.ts / es.ts to publish them to patients.

## Approved for publication (2026-11-09, per Lean Dose)
- Dose finder (`dosingClinical.pending = false`), including the semaglutide 0.25 mg video.
- Steps 7.3, 7.4, 7.5 (90° technique and illustrations).
Still unpublished: Tirzepatide 12.5 mg start (marked WIP in the source guide); Step 4 detailed drawing technique (no content yet); FAQs on small drop of blood, air bubbles, missed injection, and unsure of full dose.
