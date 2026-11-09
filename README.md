# Lean Dose — At-Home Injection Guide

Bilingual (EN / ES) patient education site reached from the QR code on the three-month package flyer.
React + TypeScript + Tailwind CSS (Vite). No login, no forms that collect health data, no analytics.

## Run locally
```bash
npm install
npm run dev            # http://localhost:5173 (patient view: pending content hidden)
```
To see pending clinical drafts locally, create `.env.local` with `VITE_SHOW_PENDING_CLINICAL=true`.

## Builds
| Command | Output | Use |
|---|---|---|
| `npm run build` | `dist/` | **Public patient site.** Content flagged `pending: true` is replaced by a neutral "being finalized" note. |
| `npm run build:review` | `dist-review/` | Internal review. Pending content shown with amber "Pending clinical review" labels + top banner. |
| `npm run build:preview-single` | `dist-single/index.html` | Same as review, bundled into one HTML file for sharing. |

## Deploy to Vercel
Import the repo → Framework preset **Vite** → Build command `npm run build` → Output `dist`.
For a staging/review deployment, set the env var `VITE_SHOW_PENDING_CLINICAL=true` on that project only.
`index.html` currently has `noindex` for staging — remove it at launch if you want search indexing.
Spanish QR codes can link straight to the Spanish version with `?lang=es`.

## Where to edit things
| What | File |
|---|---|
| English wording | `src/content/en.ts` |
| Spanish wording (same structure) | `src/content/es.ts` |
| Video URLs (EN/ES), captions, thumbnails | `src/config/site.ts` → `videos` |
| Personalized starting-dose videos (12: 6 per medication, EN + ES) | `src/config/site.ts` → `doseVideos` (key = `semaglutide-0.5`, `tirzepatide-7.5`, …) |
| Per-step "Watch this step" links | `src/config/site.ts` → `stepVideoLinks` (key = `"7.1"`… `"7.7"`) |
| Support phone / email / messaging | `src/config/site.ts` → `support` |
| Official logo | put file in `public/brand/`, set `logoSrc` (and `logoSrcOnDark`) |
| Approved clinical photos | put file in `public/media/`, add to `approvedMedia` (keys: `inject-check`, `inject-hold`, `inject-pinch`, `inject-insert`, `inject-administer`, `inject-remove`, `inject-dispose`) |
| 3-month dosing protocols (dose finder + reference chart) | `src/content/dosing.ts` — set `dosingClinical.pending = false` after sign-off |
| Publish a clinically approved item | remove `pending: true` in **both** content files |
| Social preview image | add `public/og-image.png` (1200×630) |

### HeyGen videos
- MP4 file: `{ type: 'mp4', src: '/videos/tutorial-en.mp4', captionsSrc: '/videos/tutorial-en.vtt', poster: '/videos/thumb-en.jpg' }`
- Embed link: `{ type: 'embed', src: 'https://…embed-url…' }`

## Privacy
- The weekly tracker stores only *done / date / side* per week, in the patient's own browser (localStorage). Nothing is transmitted.
- The language choice is remembered the same way.
- No third-party analytics or trackers are included. If analytics are added later, use a privacy-first, cookieless tool and never send tracker data or page content.

See `CLINICAL_REVIEW_CHECKLIST.md` (internal only) for everything that needs sign-off before launch.
