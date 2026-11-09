/**
 * Lightweight inline SVG illustrations (no network requests, crisp on every screen).
 * These are friendly educational drawings — NOT clinical technique references.
 * Technique-specific visuals (hand position, skin fold, needle insertion, plunger)
 * are intentionally placeholders until approved clinical photos/footage are supplied
 * via siteConfig.approvedMedia.
 */
import { useId, type SVGProps } from 'react';

const C = {
  t900: '#0F3F3E', t700: '#14625E', t600: '#187A74', t400: '#47B4AD', t300: '#80CFC9', t200: '#B3E4E0',
  t100: '#D9F2F0', t50: '#EFFAF9', o500: '#F08533', o600: '#C45A12', o100: '#FFE8D3',
  skin: '#F3D6C2', skinDark: '#DDAE90', steel: '#94A3B8', rubber: '#475569', white: '#FFFFFF',
};

type P = SVGProps<SVGSVGElement> & { title?: string };

function Svg({ title, children, ...rest }: P & { children: React.ReactNode }) {
  return (
    <svg role={title ? 'img' : undefined} aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function HandWashArt(props: P) {
  return (
    <Svg viewBox="0 0 320 240" {...props}>
      <rect x="0" y="0" width="320" height="240" rx="28" fill={C.t50} />
      {/* faucet */}
      <path d="M150 22h70a10 10 0 0 1 10 10v8h-22v-4h-58z" fill={C.t400} />
      <rect x="196" y="40" width="14" height="14" rx="3" fill={C.t600} />
      {/* water */}
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M${198 + i * 5} 60 q-4 30 2 60`} stroke={C.t300} strokeWidth="4" fill="none" strokeLinecap="round" opacity={0.8 - i * 0.2} />
      ))}
      {/* hands (stylized) */}
      <g transform="rotate(-18 150 150)">
        <rect x="92" y="108" width="74" height="96" rx="34" fill={C.skin} stroke={C.skinDark} strokeWidth="3" />
        <ellipse cx="96" cy="140" rx="12" ry="24" fill={C.skin} stroke={C.skinDark} strokeWidth="3" />
      </g>
      <g transform="rotate(18 210 150)">
        <rect x="160" y="108" width="74" height="96" rx="34" fill={C.skin} stroke={C.skinDark} strokeWidth="3" />
        <ellipse cx="230" cy="140" rx="12" ry="24" fill={C.skin} stroke={C.skinDark} strokeWidth="3" />
      </g>
      {/* bubbles */}
      {[[150, 112, 10], [176, 98, 7], [128, 92, 6], [205, 120, 9], [162, 138, 6], [232, 96, 5], [110, 120, 5]].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill={C.white} stroke={C.t300} strokeWidth="2" />
      ))}
      {/* soap */}
      <rect x="30" y="186" width="58" height="28" rx="12" fill={C.o100} stroke={C.o500} strokeWidth="3" />
      <circle cx="74" cy="180" r="5" fill={C.white} stroke={C.t300} strokeWidth="2" />
    </Svg>
  );
}

export function ChartArt({ weekLabel = 'Week', ...props }: P & { weekLabel?: string }) {
  return (
    <Svg viewBox="0 0 320 240" {...props}>
      <rect x="0" y="0" width="320" height="240" rx="28" fill={C.t50} />
      <rect x="62" y="22" width="196" height="200" rx="14" fill={C.white} stroke={C.t200} strokeWidth="3" />
      <rect x="128" y="12" width="64" height="20" rx="8" fill={C.t600} />
      <rect x="82" y="46" width="156" height="18" rx="6" fill={C.t100} />
      {Array.from({ length: 6 }).map((_, i) => {
        const y = 74 + i * 22;
        const active = i === 2;
        return (
          <g key={i}>
            {active && <rect x="76" y={y - 4} width="168" height="22" rx="7" fill={C.o100} stroke={C.o500} strokeWidth="2.5" />}
            <rect x="84" y={y + 2} width="34" height="10" rx="5" fill={active ? C.o500 : C.t200} />
            <rect x="128" y={y + 2} width="48" height="10" rx="5" fill={C.t100} />
            <rect x="186" y={y + 2} width="46" height="10" rx="5" fill={active ? C.o500 : C.t300} opacity={active ? 1 : 0.6} />
          </g>
        );
      })}
      <circle cx="252" cy="186" r="26" fill={C.t600} />
      <path d="M240 186l8 8 16-16" stroke={C.white} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text x="84" y="214" fontSize="12" fontWeight="700" fill={C.t700}>{weekLabel} ✓</text>
    </Svg>
  );
}

export function VialArt({ stopperLabel, ...props }: P & { stopperLabel?: string }) {
  return (
    <Svg viewBox="0 0 320 240" {...props}>
      <rect x="0" y="0" width="320" height="240" rx="28" fill={C.t50} />
      {/* vial */}
      <rect x="112" y="92" width="88" height="128" rx="16" fill="#F7FDFC" stroke={C.t700} strokeWidth="3" />
      <rect x="116" y="128" width="80" height="88" rx="12" fill={C.t100} />
      <rect x="112" y="150" width="88" height="44" fill={C.white} stroke={C.t200} strokeWidth="2" />
      <rect x="124" y="162" width="50" height="6" rx="3" fill={C.t300} />
      <rect x="124" y="174" width="34" height="6" rx="3" fill={C.t200} />
      <rect x="126" y="74" width="60" height="20" fill={C.t200} />
      <rect x="118" y="48" width="76" height="30" rx="6" fill={C.t400} />
      <ellipse cx="156" cy="48" rx="26" ry="7" fill={C.rubber} />
      {/* alcohol wipe */}
      <g transform="rotate(-14 236 52)">
        <rect x="204" y="28" width="66" height="46" rx="6" fill={C.white} stroke={C.t300} strokeWidth="2.5" />
        <path d="M214 42h44M214 52h34M214 62h40" stroke={C.t100} strokeWidth="3" strokeLinecap="round" />
      </g>
      <path d="M196 40l8 -6M200 52l10 0M196 62l8 6" stroke={C.o500} strokeWidth="3" strokeLinecap="round" />
      {stopperLabel && (
        <g>
          <path d="M128 46 L70 30" stroke={C.t700} strokeWidth="2" />
          <circle cx="128" cy="46" r="3.5" fill={C.t700} />
          <text x="66" y="24" fontSize="14" fontWeight="700" fill={C.t900} textAnchor="middle">{stopperLabel}</text>
        </g>
      )}
    </Svg>
  );
}

export interface SyringeLabels { plunger: string; barrel: string; markings: string; needle: string; vial: string }

export function SyringeAnatomyArt({ labels, ...props }: P & { labels: SyringeLabels }) {
  const ticks = Array.from({ length: 26 });
  return (
    <Svg viewBox="0 0 720 300" {...props}>
      <rect x="0" y="0" width="720" height="300" rx="28" fill={C.t50} />
      {/* plunger */}
      <rect x="40" y="110" width="14" height="72" rx="4" fill={C.t700} />
      <rect x="54" y="138" width="140" height="16" rx="3" fill={C.t200} stroke={C.t700} strokeWidth="2" />
      {/* flange + barrel */}
      <rect x="156" y="98" width="10" height="96" rx="3" fill={C.t700} />
      <rect x="166" y="114" width="300" height="64" rx="8" fill="#FAFFFF" stroke={C.t700} strokeWidth="3" />
      <rect x="214" y="118" width="248" height="56" rx="5" fill={C.t100} />
      {/* rubber seal */}
      <rect x="194" y="117" width="20" height="58" rx="4" fill={C.rubber} />
      {/* unit markings (unnumbered on purpose) */}
      {ticks.map((_, i) => {
        const x = 214 + i * 9.6;
        const long = i % 5 === 0;
        return <line key={i} x1={x} y1={114} x2={x} y2={114 + (long ? 22 : 12)} stroke={C.t900} strokeWidth={long ? 2.4 : 1.5} />;
      })}
      {/* tip, hub, needle */}
      <path d="M466 130 L490 136 L490 156 L466 162 Z" fill={C.t200} stroke={C.t700} strokeWidth="2.5" />
      <rect x="490" y="134" width="24" height="24" rx="4" fill={C.t400} />
      <line x1="514" y1="146" x2="624" y2="146" stroke={C.steel} strokeWidth="3.5" strokeLinecap="round" />
      {/* vial */}
      <rect x="644" y="150" width="50" height="90" rx="10" fill="#F7FDFC" stroke={C.t700} strokeWidth="2.5" />
      <rect x="647" y="178" width="44" height="58" rx="7" fill={C.t100} />
      <rect x="652" y="134" width="34" height="18" rx="4" fill={C.t400} />
      <ellipse cx="669" cy="134" rx="15" ry="4" fill={C.rubber} />

      {/* labels */}
      <g fontSize="18" fontWeight="700" fill={C.t900} textAnchor="middle">
        <line x1="96" y1="138" x2="96" y2="74" stroke={C.t700} strokeWidth="2" />
        <text x="96" y="64">{labels.plunger}</text>
        <line x1="330" y1="114" x2="330" y2="74" stroke={C.t700} strokeWidth="2" />
        <text x="330" y="64">{labels.markings}</text>
        <line x1="400" y1="178" x2="400" y2="232" stroke={C.t700} strokeWidth="2" />
        <text x="400" y="256">{labels.barrel}</text>
        <line x1="580" y1="146" x2="580" y2="74" stroke={C.t700} strokeWidth="2" />
        <text x="572" y="64">{labels.needle}</text>
        <text x="706" y="276" textAnchor="end">{labels.vial}</text>
      </g>
    </Svg>
  );
}

export function SyringeCheckArt(props: P) {
  const ticks = Array.from({ length: 21 });
  return (
    <Svg viewBox="0 0 320 240" {...props}>
      <rect x="0" y="0" width="320" height="240" rx="28" fill={C.t50} />
      <circle cx="160" cy="120" r="92" fill={C.white} stroke={C.t300} strokeWidth="6" />
      <clipPath id="lens"><circle cx="160" cy="120" r="88" /></clipPath>
      <g clipPath="url(#lens)">
        <rect x="40" y="88" width="260" height="64" rx="6" fill="#FAFFFF" stroke={C.t700} strokeWidth="3" />
        <rect x="132" y="92" width="170" height="56" fill={C.t100} />
        <rect x="108" y="91" width="24" height="58" rx="4" fill={C.rubber} />
        {ticks.map((_, i) => {
          const x = 52 + i * 12;
          const long = i % 5 === 0;
          return <line key={i} x1={x} y1={88} x2={x} y2={88 + (long ? 24 : 13)} stroke={C.t900} strokeWidth={long ? 2.6 : 1.6} />;
        })}
      </g>
      <path d="M226 186 l40 36" stroke={C.t600} strokeWidth="14" strokeLinecap="round" />
    </Svg>
  );
}

export function CleanSiteArt(props: P) {
  return (
    <Svg viewBox="0 0 320 240" {...props}>
      <rect x="0" y="0" width="320" height="240" rx="28" fill={C.t50} />
      <rect x="36" y="40" width="248" height="168" rx="40" fill={C.skin} stroke={C.skinDark} strokeWidth="3" />
      <ellipse cx="120" cy="124" rx="5" ry="8" fill={C.skinDark} />
      <circle cx="206" cy="124" r="34" fill="none" stroke={C.o500} strokeWidth="4" strokeDasharray="12 8" />
      <path d="M236 102 l8 -12 l6 14" stroke={C.o500} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <g transform="rotate(-20 200 130)">
        <rect x="178" y="108" width="52" height="38" rx="6" fill={C.white} stroke={C.t300} strokeWidth="2.5" />
        <path d="M186 120h34M186 130h26" stroke={C.t100} strokeWidth="3" strokeLinecap="round" />
      </g>
    </Svg>
  );
}

export function GauzeArt(props: P) {
  return (
    <Svg viewBox="0 0 320 240" {...props}>
      <rect x="0" y="0" width="320" height="240" rx="28" fill={C.t50} />
      <rect x="36" y="60" width="248" height="150" rx="40" fill={C.skin} stroke={C.skinDark} strokeWidth="3" />
      {/* clean cotton ball */}
      <g stroke={C.t200} strokeWidth="2.5" fill={C.white}>
        <circle cx="142" cy="140" r="24" /><circle cx="176" cy="138" r="24" /><circle cx="160" cy="120" r="24" />
      </g>
      <circle cx="160" cy="134" r="22" fill={C.white} />
      <path d="M160 26 v52 m-14 -14 l14 14 l14 -14" stroke={C.t600} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function SharpsArt(props: P) {
  return (
    <Svg viewBox="0 0 320 240" {...props}>
      <rect x="0" y="0" width="320" height="240" rx="28" fill={C.t50} />
      {/* opaque heavy-duty plastic bottle (e.g. laundry detergent) */}
      <path d="M104 100 q0 -14 14 -14 h70 q22 0 30 20 l8 22 v80 a14 14 0 0 1 -14 14 h-94 a14 14 0 0 1 -14 -14 z" fill="#F6A15A" stroke="#C45A12" strokeWidth="3" />
      <path d="M190 92 q30 4 30 34" stroke="#C45A12" strokeWidth="10" fill="none" strokeLinecap="round" />
      <rect x="130" y="72" width="40" height="18" rx="4" fill="#C45A12" />
      <rect x="118" y="140" width="96" height="56" rx="8" fill={C.white} />
      <path d="M134 168 h40" stroke={C.t900} strokeWidth="4" strokeLinecap="round" />
      <path d="M174 168 h20" stroke={C.steel} strokeWidth="3" strokeLinecap="round" />
      <path d="M132 184 h64" stroke="#E25A55" strokeWidth="4" strokeLinecap="round" />
      <path d="M132 152 h48" stroke={C.t900} strokeWidth="4" strokeLinecap="round" />
      {/* used syringe going in, needle first */}
      <g transform="rotate(90 150 30)">
        <rect x="96" y="22" width="62" height="16" rx="3" fill="#FAFFFF" stroke={C.t700} strokeWidth="2" />
        <rect x="84" y="20" width="12" height="20" rx="2" fill={C.t700} />
        <rect x="158" y="25" width="10" height="10" rx="2" fill={C.t400} />
        <line x1="168" y1="30" x2="196" y2="30" stroke={C.steel} strokeWidth="2.5" />
      </g>
      <path d="M190 22 v40 m-10 -10 l10 10 l10 -10" stroke={C.o500} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

/** Generic placeholder for technique visuals awaiting clinical approval. */
export function MediaPlaceholderArt({ label, ...props }: P & { label: string }) {
  return (
    <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 rounded-[28px] border-2 border-dashed border-teal-200 bg-teal-50/70 p-6 text-center" {...(props as object)}>
      <svg viewBox="0 0 48 48" className="h-12 w-12 text-teal-500" aria-hidden="true">
        <rect x="4" y="12" width="40" height="28" rx="6" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M16 12l3-5h10l3 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <circle cx="24" cy="26" r="7" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
      <p className="max-w-[16rem] text-sm font-semibold text-teal-700">{label}</p>
    </div>
  );
}

/* ---------- Small supply icons ---------- */
export function SupplyIcon({ name }: { name: string }) {
  const common = { viewBox: '0 0 64 64', className: 'h-12 w-12', 'aria-hidden': true } as const;
  switch (name) {
    case 'vial':
      return (<svg {...common}><rect x="20" y="22" width="24" height="34" rx="6" fill="#F7FDFC" stroke={C.t700} strokeWidth="3" /><rect x="22" y="34" width="20" height="20" rx="4" fill={C.t200} /><rect x="22" y="10" width="20" height="12" rx="3" fill={C.t400} /></svg>);
    case 'syringe':
      return (<svg {...common}><g transform="rotate(-45 32 32)"><rect x="8" y="26" width="34" height="12" rx="3" fill="#FAFFFF" stroke={C.t700} strokeWidth="3" /><rect x="2" y="24" width="6" height="16" rx="2" fill={C.t700} /><rect x="42" y="29" width="6" height="6" fill={C.t400} /><line x1="48" y1="32" x2="62" y2="32" stroke={C.steel} strokeWidth="2.5" /><path d="M16 26v5M22 26v5M28 26v5M34 26v5" stroke={C.t700} strokeWidth="2" /></g></svg>);
    case 'wipe':
      return (<svg {...common}><rect x="10" y="14" width="44" height="36" rx="6" fill={C.white} stroke={C.t400} strokeWidth="3" /><path d="M18 26h28M18 34h20M18 42h24" stroke={C.t200} strokeWidth="3" strokeLinecap="round" /></svg>);
    case 'gauze':
      return (<svg {...common}><rect x="12" y="12" width="40" height="40" rx="6" fill={C.white} stroke={C.t400} strokeWidth="3" /><path d="M22 14v36M32 14v36M42 14v36M14 22h36M14 32h36M14 42h36" stroke={C.t100} strokeWidth="2" /></svg>);
    case 'sharps':
      return (<svg {...common}><path d="M16 24q0-6 6-6h18q8 0 11 8l2 6v22a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4z" fill="#F6A15A" stroke="#C45A12" strokeWidth="2.5" /><rect x="24" y="10" width="12" height="8" rx="2" fill="#C45A12" /><rect x="21" y="34" width="26" height="14" rx="3" fill="#fff" /><path d="M25 41h14" stroke="#0F3F3E" strokeWidth="2.5" strokeLinecap="round" /></svg>);
    case 'fridge':
      return (<svg {...common}><rect x="16" y="6" width="32" height="52" rx="6" fill="#fff" stroke={C.t700} strokeWidth="3" /><line x1="16" y1="26" x2="48" y2="26" stroke={C.t700} strokeWidth="3" /><path d="M22 14v6M22 32v10" stroke={C.t700} strokeWidth="3" strokeLinecap="round" /><path d="M36 38l4 -4 4 4M40 34v12" stroke={C.t400} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>);
    case 'chart':
    default:
      return (<svg {...common}><rect x="14" y="10" width="36" height="46" rx="5" fill={C.white} stroke={C.t700} strokeWidth="3" /><rect x="24" y="6" width="16" height="8" rx="3" fill={C.t600} /><path d="M21 24h22M21 32h22M21 40h22" stroke={C.t200} strokeWidth="3" strokeLinecap="round" /><rect x="19" y="29" width="26" height="7" rx="3" fill="none" stroke={C.o500} strokeWidth="2.5" /></svg>);
  }
}

/* ===================================================================
 * STEP 7 — SELF-INJECTION DEMONSTRATION GRAPHICS
 * Cross-section diagrams (skin / fatty tissue / muscle) for the
 * pinch → insert at 90° → inject → withdraw sequence.
 * =================================================================== */
export interface TissueLabels { skin: string; fat: string; muscle: string }

const T = { fat: '#F8E7BE', fatDot: '#EFD08D', muscle: '#E6B0A6', muscleLine: '#D08F86', skin: '#E7B898', skinEdge: '#C98F70' };

/** Skin surface path; `peak` = y of the pinched fold's top (equal to base for flat skin). */
const surface = (base: number, peak: number) =>
  peak === base
    ? `M0 ${base} L320 ${base}`
    : `M0 ${base} L104 ${base} C 128 ${base}, 132 ${peak}, 160 ${peak} C 188 ${peak}, 192 ${base}, 216 ${base} L320 ${base}`;

function Tissue({ peak, labels }: { peak: number; labels?: TissueLabels }) {
  const base = 178, muscleTop = 238;
  const s = surface(base, peak);
  return (
    <g>
      <rect x="0" y={muscleTop} width="320" height={300 - muscleTop} fill={T.muscle} />
      {[0, 1, 2].map((i) => <path key={i} d={`M0 ${muscleTop + 14 + i * 16} Q 160 ${muscleTop + 6 + i * 16} 320 ${muscleTop + 14 + i * 16}`} stroke={T.muscleLine} strokeWidth="2" fill="none" opacity="0.6" />)}
      <path d={`${s} L320 ${muscleTop} L0 ${muscleTop} Z`} fill={T.fat} />
      {[[40, 210], [80, 222], [250, 214], [290, 200], [150, 205], [200, 226], [120, 196], [60, 192], [270, 190]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="7" fill="none" stroke={T.fatDot} strokeWidth="2" />
      ))}
      <path d={s} stroke={T.skin} strokeWidth="14" fill="none" strokeLinejoin="round" />
      <path d={s} stroke={T.skinEdge} strokeWidth="2.5" fill="none" transform="translate(0 -7)" />
      {labels && (
        <g fontSize="12" fontWeight="700" fill={C.t900}>
          <text x="10" y={base - 14}>{labels.skin}</text>
          <text x="10" y={muscleTop - 10}>{labels.fat}</text>
          <text x="10" y="290">{labels.muscle}</text>
        </g>
      )}
    </g>
  );
}

/** Two fingertips pinching the fold (thumb on the left, index finger on the right). */
function PinchFingers() {
  return (
    <g>
      <g transform="rotate(32 92 150)">
        <rect x="40" y="132" width="78" height="34" rx="17" fill={C.skin} stroke={C.skinDark} strokeWidth="3" />
        <path d="M100 138 q12 2 12 11" stroke={C.skinDark} strokeWidth="2" fill="none" />
      </g>
      <g transform="rotate(-32 228 150)">
        <rect x="202" y="132" width="78" height="34" rx="17" fill={C.skin} stroke={C.skinDark} strokeWidth="3" />
        <path d="M220 138 q-12 2 -12 11" stroke={C.skinDark} strokeWidth="2" fill="none" />
      </g>
    </g>
  );
}

/** Vertical syringe; `tipY` = needle tip, `plungerIn` 0..1 = how far the plunger is pressed. */
function VerticalSyringe({ tipY, plungerIn = 0 }: { tipY: number; plungerIn?: number }) {
  const needleLen = 58, hubH = 10, barrelH = 78;
  const hubY = tipY - needleLen - hubH, barrelY = hubY - barrelH;
  const sealY = barrelY + 8 + plungerIn * 52; // rubber seal position inside barrel
  const liquidTop = sealY + 10;
  return (
    <g>
      <line x1="160" y1={tipY - needleLen} x2="160" y2={tipY} stroke={C.steel} strokeWidth="3" strokeLinecap="round" />
      <rect x="153" y={hubY} width="14" height={hubH} rx="2" fill={C.t400} />
      <rect x="146" y={barrelY} width="28" height={barrelH} rx="4" fill="#FAFFFF" stroke={C.t700} strokeWidth="2.5" />
      {liquidTop < hubY - 2 && <rect x="149" y={liquidTop} width="22" height={hubY - 2 - liquidTop} fill={C.t200} />}
      {Array.from({ length: 7 }).map((_, i) => <line key={i} x1="146" y1={barrelY + 12 + i * 9} x2={i % 2 ? 153 : 157} y2={barrelY + 12 + i * 9} stroke={C.t900} strokeWidth="1.4" />)}
      <rect x="148" y={sealY} width="24" height="10" rx="2" fill={C.rubber} />
      <rect x="157" y={sealY - 60} width="6" height="60" fill={C.t200} stroke={C.t700} strokeWidth="1.5" />
      <rect x="144" y={sealY - 66} width="32" height="8" rx="3" fill={C.t700} />
      <rect x="138" y={barrelY - 2} width="44" height="6" rx="2" fill={C.t700} />
    </g>
  );
}

function AngleMark({ y }: { y: number }) {
  return (
    <g>
      <path d={`M160 ${y - 22} h-22 v22`} stroke={C.o500} strokeWidth="3" fill="none" />
      <text x="118" y={y - 28} fontSize="18" fontWeight="800" fill={C.o600} textAnchor="middle">90°</text>
    </g>
  );
}

const Frame = ({ children, ...p }: P & { children: React.ReactNode }) => (
  <Svg viewBox="0 0 320 300" {...p}>
    <defs><clipPath id="frameClip"><rect x="0" y="0" width="320" height="300" rx="28" /></clipPath></defs>
    <g clipPath="url(#frameClip)">
      <rect x="0" y="0" width="320" height="300" fill={C.t50} />
      {children}
    </g>
  </Svg>
);

/** 7.2 — pencil/dart grip, cap pulled straight off, needle touches nothing. */
export function HoldSyringeArt(props: P) {
  return (
    <Frame {...props}>
      <g transform="rotate(-30 160 150)">
        {/* syringe */}
        <rect x="70" y="141" width="12" height="18" rx="2" fill={C.t700} />
        <rect x="82" y="146" width="40" height="8" fill={C.t200} stroke={C.t700} strokeWidth="1.5" />
        <rect x="116" y="138" width="96" height="24" rx="4" fill="#FAFFFF" stroke={C.t700} strokeWidth="2.5" />
        <rect x="134" y="141" width="76" height="18" fill={C.t200} />
        <rect x="122" y="140" width="12" height="20" rx="2" fill={C.rubber} />
        <rect x="212" y="144" width="12" height="12" rx="2" fill={C.t400} />
        <line x1="224" y1="150" x2="270" y2="150" stroke={C.steel} strokeWidth="3" strokeLinecap="round" />
        {/* cap pulled straight off */}
        <rect x="282" y="143" width="62" height="14" rx="7" fill={C.o500} />
        <path d="M290 132 h34 m-8 -7 l8 7 l-8 7" stroke={C.o600} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* hand: palm + fingers under barrel, thumb over it (pencil grip) */}
        <rect x="96" y="160" width="92" height="64" rx="30" fill={C.skin} stroke={C.skinDark} strokeWidth="3" />
        <rect x="150" y="150" width="56" height="22" rx="11" fill={C.skin} stroke={C.skinDark} strokeWidth="3" />
        <rect x="140" y="166" width="58" height="20" rx="10" fill={C.skin} stroke={C.skinDark} strokeWidth="3" />
        <rect x="128" y="122" width="62" height="20" rx="10" fill={C.skin} stroke={C.skinDark} strokeWidth="3" />
        <path d="M186 126 q6 4 4 10" stroke={C.skinDark} strokeWidth="2" fill="none" />
      </g>
    </Frame>
  );
}

/* ---------- Front-view abdomen demonstrations (7.3–7.6) ---------- */
export interface DemoLabels { twoIn: string; sideView: string }

const NAVEL = { x: 108, y: 186 };
const SITE = { x: 196, y: 200 }; // about 2 inches to the side of the navel (illustrative scale)

function Belly({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <radialGradient id={`${uid}-skin`} cx="0.45" cy="0.45" r="0.75">
          <stop offset="0" stopColor="#F6DCC8" /><stop offset="1" stopColor="#E9BFA2" />
        </radialGradient>
      </defs>
      <path d="M20 0 C 6 90, 4 190, 26 300 L 294 300 C 316 190, 314 90, 300 0 Z" fill={`url(#${uid}-skin)`} />
      <path d="M26 300 C 4 190, 6 90, 20 0" stroke={C.skinDark} strokeWidth="3" fill="none" />
      <path d="M294 300 C 316 190, 314 90, 300 0" stroke={C.skinDark} strokeWidth="3" fill="none" />
      {/* shirt lifted at top, waistband at bottom */}
      <path d="M0 0 H320 V34 Q 160 56 0 34 Z" fill={C.t700} />
      <path d="M0 270 Q 160 252 320 270 V300 H0 Z" fill={C.t200} />
      {/* navel */}
      <ellipse cx={NAVEL.x} cy={NAVEL.y} rx="6" ry="9" fill="#C9957A" />
      <path d={`M${NAVEL.x - 5} ${NAVEL.y - 6} q5 -4 10 0`} stroke="#B98066" strokeWidth="2" fill="none" />
    </g>
  );
}

/** Thumb (below) and index finger (above) pinching a fold at SITE; hand comes in from the right. */
function PinchHand({ released = false }: { released?: boolean }) {
  const gap = released ? 26 : 16;
  return (
    <g>
      {!released && (
        <g>
          <ellipse cx={SITE.x} cy={SITE.y} rx="22" ry="9" fill="#F7DFCD" stroke="#D9A88A" strokeWidth="2" />
          <path d={`M${SITE.x - 16} ${SITE.y + 3} q16 6 32 0`} stroke="#D9A88A" strokeWidth="1.5" fill="none" />
        </g>
      )}
      {/* palm */}
      <path d={`M${SITE.x + 30} ${SITE.y - 30} q 60 -10 110 6 v 54 q -50 18 -110 4 z`} fill={C.skin} stroke={C.skinDark} strokeWidth="3" />
      {/* index finger (top) */}
      <rect x={SITE.x - 18} y={SITE.y - gap - 16} width="84" height="22" rx="11" fill={C.skin} stroke={C.skinDark} strokeWidth="3" />
      <path d={`M${SITE.x - 10} ${SITE.y - gap - 11} q-4 6 0 12`} stroke={C.skinDark} strokeWidth="2" fill="none" />
      {/* thumb (bottom) */}
      <rect x={SITE.x - 14} y={SITE.y + gap - 6} width="80" height="24" rx="12" fill={C.skin} stroke={C.skinDark} strokeWidth="3" />
      <path d={`M${SITE.x - 6} ${SITE.y + gap} q-4 6 0 12`} stroke={C.skinDark} strokeWidth="2" fill="none" />
    </g>
  );
}

function TwoInch({ label }: { label: string }) {
  const y = NAVEL.y + 46;
  return (
    <g>
      <line x1={NAVEL.x} y1={NAVEL.y + 12} x2={NAVEL.x} y2={y + 6} stroke={C.o600} strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1={SITE.x - 18} y1={SITE.y + 30} x2={SITE.x - 18} y2={y + 6} stroke={C.o600} strokeWidth="1.5" strokeDasharray="3 3" />
      <path d={`M${NAVEL.x + 2} ${y} H${SITE.x - 20}`} stroke={C.o600} strokeWidth="2.5" />
      <path d={`M${NAVEL.x + 8} ${y - 5} l-6 5 l6 5 M${SITE.x - 26} ${y - 5} l6 5 l-6 5`} stroke={C.o600} strokeWidth="2.5" fill="none" />
      <rect x={(NAVEL.x + SITE.x) / 2 - 30} y={y - 24} width="60" height="20" rx="10" fill={C.white} stroke={C.o500} strokeWidth="1.5" />
      <text x={(NAVEL.x + SITE.x) / 2} y={y - 9.5} textAnchor="middle" fontSize="12" fontWeight="800" fill={C.o600}>{label}</text>
    </g>
  );
}

/** Side-view close-up in a circle: pinched fold with the syringe at 90°. */
function SideInset({ uid, label, mode }: { uid: string; label: string; mode: 'insert' | 'inject' | 'remove' }) {
  const cx = 240, cy = 92, r = 74;
  const tip = mode === 'remove' ? 70 : 104;
  return (
    <g>
      <line x1={SITE.x + 4} y1={SITE.y - 22} x2="196" y2="128" stroke={C.t600} strokeWidth="2" strokeDasharray="4 4" />
      <g transform="translate(238 80) scale(0.84) translate(-240 -92)">
      <defs><clipPath id={`${uid}-inset`}><circle cx={cx} cy={cy} r={r} /></clipPath></defs>
      <circle cx={cx} cy={cy} r={r + 5} fill={C.white} opacity="0.95" />
      <g clipPath={`url(#${uid}-inset)`}>
        <rect x={cx - r} y={cy - r} width={r * 2} height={r * 2} fill={C.t50} />
        {/* skin surface with fold (or flat when released) */}
        <path d={mode === 'remove'
          ? `M${cx - r} 128 H${cx + r} V${cy + r} H${cx - r} Z`
          : `M${cx - r} 128 H${cx - 34} C ${cx - 20} 128, ${cx - 18} 98, ${cx} 98 C ${cx + 18} 98, ${cx + 20} 128, ${cx + 34} 128 H${cx + r} V${cy + r} H${cx - r} Z`}
          fill="#F3D3BD" stroke={C.skinDark} strokeWidth="2.5" />
        {mode !== 'remove' && (
          <g>
            <rect x={cx - 66} y="104" width="44" height="18" rx="9" fill={C.skin} stroke={C.skinDark} strokeWidth="2.5" transform={`rotate(28 ${cx - 44} 113)`} />
            <rect x={cx + 22} y="104" width="44" height="18" rx="9" fill={C.skin} stroke={C.skinDark} strokeWidth="2.5" transform={`rotate(-28 ${cx + 44} 113)`} />
          </g>
        )}
        {mode === 'inject' && [[-6, 112], [5, 114], [0, 120]].map(([dx, y], i) => <circle key={i} cx={cx + dx} cy={y} r="3.2" fill={C.t300} />)}
        {/* syringe, vertical (90° to the skin) */}
        <line x1={cx} y1={tip - 30} x2={cx} y2={tip} stroke={C.steel} strokeWidth="2.5" strokeLinecap="round" />
        <rect x={cx - 5} y={tip - 38} width="10" height="8" rx="1.5" fill={C.t400} />
        <rect x={cx - 11} y={tip - 88} width="22" height="50" rx="3" fill="#FAFFFF" stroke={C.t700} strokeWidth="2" />
        <rect x={cx - 9} y={(mode === 'insert' ? tip - 82 : tip - 46)} width="18" height="7" rx="1.5" fill={C.rubber} />
        {mode === 'insert' && <rect x={cx - 9} y={tip - 75} width="18" height="35" fill={C.t200} />}
        {mode !== 'remove' && (
          <g>
            <path d={`M${cx} 82 h-14 v14`} stroke={C.o500} strokeWidth="2.5" fill="none" transform={`translate(0 ${-0})`} />
            <text x={cx - 30} y="82" fontSize="14" fontWeight="800" fill={C.o600} textAnchor="middle">90°</text>
          </g>
        )}
        {mode === 'inject' && <path d={`M${cx + 26} ${tip - 78} v24 m-7 -7 l7 7 l7 -7`} stroke={C.o500} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
        {mode === 'remove' && <path d={`M${cx + 26} 104 v-26 m-7 7 l7 -7 l7 7`} stroke={C.t600} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
      </g>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={C.t600} strokeWidth="3" />
      <rect x={cx - 44} y={cy + r - 8} width="88" height="20" rx="10" fill={C.t700} />
      <text x={cx} y={cy + r + 6} textAnchor="middle" fontSize="11" fontWeight="800" fill={C.white}>{label}</text>
      </g>
    </g>
  );
}

/** Small marker on the front view showing where the needle meets the fold. */
function NeedleDot() {
  return (
    <g>
      <circle cx={SITE.x} cy={SITE.y} r="7" fill="none" stroke={C.o500} strokeWidth="2.5" />
      <circle cx={SITE.x} cy={SITE.y} r="2.5" fill={C.t700} />
    </g>
  );
}

function useUid() {
  return useId().replace(/[^a-zA-Z0-9]/g, '');
}

/** 7.3 — pinch the stomach about 2 inches from the belly button. */
export function PinchArt({ labels, ...props }: P & { labels: DemoLabels }) {
  const uid = useUid();
  return (
    <Svg viewBox="0 0 320 300" {...props}>
      <clipPath id={`${uid}-f`}><rect width="320" height="300" rx="28" /></clipPath>
      <g clipPath={`url(#${uid}-f)`}>
        <Belly uid={uid} />
        <PinchHand />
        <TwoInch label={labels.twoIn} />
        <path d={`M${SITE.x} ${SITE.y - 44} v-26 m-8 8 l8 -8 l8 8`} stroke={C.t600} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </Svg>
  );
}

/** 7.4 — needle into the pinched skin at 90°. */
export function InsertArt({ labels, ...props }: P & { labels: DemoLabels }) {
  const uid = useUid();
  return (
    <Svg viewBox="0 0 320 300" {...props}>
      <clipPath id={`${uid}-f`}><rect width="320" height="300" rx="28" /></clipPath>
      <g clipPath={`url(#${uid}-f)`}>
        <Belly uid={uid} />
        <PinchHand />
        <NeedleDot />
        <TwoInch label={labels.twoIn} />
        <SideInset uid={uid} label={labels.sideView} mode="insert" />
      </g>
    </Svg>
  );
}

/** 7.5 — press the plunger while the needle stays at 90°. */
export function AdministerArt({ labels, ...props }: P & { labels: DemoLabels }) {
  const uid = useUid();
  return (
    <Svg viewBox="0 0 320 300" {...props}>
      <clipPath id={`${uid}-f`}><rect width="320" height="300" rx="28" /></clipPath>
      <g clipPath={`url(#${uid}-f)`}>
        <Belly uid={uid} />
        <PinchHand />
        <NeedleDot />
        <TwoInch label={labels.twoIn} />
        <SideInset uid={uid} label={labels.sideView} mode="inject" />
      </g>
    </Svg>
  );
}

/** 7.6 — pull the needle straight out at 90°; press gently with a cotton ball if needed. */
export function RemoveArt({ labels, ...props }: P & { labels: DemoLabels }) {
  const uid = useUid();
  return (
    <Svg viewBox="0 0 320 300" {...props}>
      <clipPath id={`${uid}-f`}><rect width="320" height="300" rx="28" /></clipPath>
      <g clipPath={`url(#${uid}-f)`}>
        <Belly uid={uid} />
        <circle cx={SITE.x} cy={SITE.y} r="2.5" fill="#C0392B" />
        <g stroke={C.t200} strokeWidth="2" fill={C.white}>
          <circle cx={SITE.x + 30} cy={SITE.y + 30} r="13" /><circle cx={SITE.x + 47} cy={SITE.y + 28} r="13" /><circle cx={SITE.x + 38} cy={SITE.y + 17} r="13" />
        </g>
        <circle cx={SITE.x + 38} cy={SITE.y + 26} r="12" fill={C.white} />
        <path d={`M${SITE.x + 14} ${SITE.y + 18} l-10 -10`} stroke={C.t600} strokeWidth="2" strokeDasharray="3 3" />
        <SideInset uid={uid} label={labels.sideView} mode="remove" />
      </g>
    </Svg>
  );
}
