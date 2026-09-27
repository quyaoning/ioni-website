import { useState } from 'react';
import { url } from '../lib/url';
import './ThrusterExplainer.css';

type StageId = 'cathode' | 'chamber' | 'optics';

const STAGES: {
  id: StageId;
  index: string;
  name: string;
  subteam: string;
  href: string;
  description: string;
  facts: string[];
}[] = [
  {
    id: 'cathode',
    index: '01',
    name: 'Hollow cathode',
    subteam: 'Plasma Source · IonSpark',
    href: '/subteams/plasma-source/',
    description:
      'Everything starts with electrons. A high-voltage tungsten pin inside a quartz tube emits electrons by field emission; they ionize the argon flowing past it, and after ignition stepwise ionization keeps the plasma going.',
    facts: [
      'Heaterless, insertless design adapted from Gott & Xu (IEPC-2017-183)',
      'Tungsten pin (refractory, high melting point) inside an inert quartz tube',
      'Reference operating point: ~30 W at 3 kV for ~150 mA after ignition',
    ],
  },
  {
    id: 'chamber',
    index: '02',
    name: 'Discharge chamber',
    subteam: 'Discharge Chamber',
    href: '/subteams/discharge-chamber/',
    description:
      'Electrons from the cathode enter an aluminum chamber alongside argon propellant. Magnetic rings keep electrons off the walls so they stay longer and collide with more argon, raising the plasma density.',
    facts: [
      'Electron-bombardment ionization of argon (instead of the usual xenon)',
      'Magnetic rings confine electrons and raise the collision rate',
      'Propellant injector feeds argon at a controlled rate',
    ],
  },
  {
    id: 'optics',
    index: '03',
    name: 'Ion optics',
    subteam: 'Ion Optics',
    href: '/subteams/ion-optics/',
    description:
      'Two perforated grids turn plasma into thrust. The screen grid pulls ions out of the chamber and shapes the beam; the potential difference to the accel grid accelerates them out the back.',
    facts: [
      'Screen grid extracts and focuses ions; accel grid accelerates them',
      'Negative accel-grid bias keeps outside electrons from streaming back in',
      'Grids must resist erosion from heat and ion impingement; modeled in FEMM 4.2',
    ],
  },
];

const ELECTRONS = [
  { y: 158, d: 0 },
  { y: 150, d: 0.7 },
  { y: 166, d: 1.4 },
  { y: 154, d: 2.1 },
  { y: 162, d: 2.8 },
];
const IONS = [
  { y: 120, d: 0 },
  { y: 150, d: 0.5 },
  { y: 180, d: 1 },
  { y: 200, d: 1.5 },
  { y: 135, d: 2 },
  { y: 168, d: 2.5 },
];

export default function ThrusterExplainer() {
  const [active, setActive] = useState<StageId>('cathode');
  const stage = STAGES.find((s) => s.id === active)!;
  const cls = (id: StageId) => `stage ${active === id ? 'is-active' : ''}`;

  return (
    <div className="thruster">
      <div className="thruster-tabs" role="tablist" aria-label="Thruster stages">
        {STAGES.map((s) => (
          <button
            key={s.id}
            role="tab"
            id={`tab-${s.id}`}
            aria-selected={active === s.id}
            aria-controls="thruster-panel"
            className={active === s.id ? 'is-active' : ''}
            onClick={() => setActive(s.id)}
          >
            <span className="tab-index">{s.index}</span>
            {s.name}
          </button>
        ))}
      </div>

      <svg
        className="thruster-svg"
        viewBox="0 0 960 320"
        role="img"
        aria-label="Side-view schematic of a gridded ion thruster: hollow cathode, discharge chamber, and ion optics grids, with an ion beam exiting to the right."
      >
        <defs>
          <radialGradient id="plasmaGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#bb7cff" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#7a5cff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#7a5cff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="beam" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#f7ab2e" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#f7ab2e" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="tipGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d8b4ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#bb7cff" stopOpacity="0" />
          </radialGradient>
        </defs>

        <line x1="20" y1="160" x2="940" y2="160" className="axis" />

        {/* 01 cathode */}
        <g className={cls('cathode')} onClick={() => setActive('cathode')}>
          <rect x="30" y="112" width="170" height="96" rx="12" className="hit" />
          <text x="36" y="104" className="label">
            Ar in →
          </text>
          <rect x="60" y="142" width="118" height="36" rx="6" className="tube" />
          <line x1="44" y1="160" x2="156" y2="160" className="pin" />
          <rect x="150" y="134" width="14" height="52" rx="3" className="collar" />
          <circle cx="160" cy="160" r="18" fill="url(#tipGlow)" />
          <text x="115" y="232" className="caption" textAnchor="middle">
            01 · cathode
          </text>
        </g>

        {/* 02 chamber */}
        <g className={cls('chamber')} onClick={() => setActive('chamber')}>
          <rect x="200" y="50" width="462" height="220" rx="16" className="hit" />
          <rect x="212" y="72" width="440" height="176" rx="18" className="body" />
          <ellipse cx="440" cy="160" rx="190" ry="70" fill="url(#plasmaGlow)" />
          {[270, 370, 470, 570].map((x) => (
            <g key={x}>
              <rect x={x} y="60" width="26" height="14" rx="3" className="magnet" />
              <rect x={x} y="246" width="26" height="14" rx="3" className="magnet" />
            </g>
          ))}
          <text x="432" y="292" className="caption" textAnchor="middle">
            02 · discharge chamber
          </text>
        </g>

        {/* 03 optics */}
        <g className={cls('optics')} onClick={() => setActive('optics')}>
          <rect x="656" y="50" width="70" height="220" rx="10" className="hit" />
          <line x1="672" y1="80" x2="672" y2="240" className="grid" />
          <line x1="700" y1="80" x2="700" y2="240" className="grid grid-accel" />
          <text x="690" y="292" className="caption" textAnchor="middle">
            03 · optics
          </text>
        </g>

        <polygon points="708,112 708,208 940,262 940,58" fill="url(#beam)" className="beam" />

        <g className="particles" aria-hidden="true">
          {ELECTRONS.map((e, i) => (
            <circle
              key={`e${i}`}
              cx="160"
              cy={e.y}
              r="3"
              className="electron"
              style={{ animationDelay: `${e.d}s` }}
            />
          ))}
          {IONS.map((p, i) => (
            <circle
              key={`i${i}`}
              cx="600"
              cy={p.y}
              r="3.6"
              className="ion"
              style={{ animationDelay: `${p.d}s` }}
            />
          ))}
        </g>
      </svg>

      <div className="thruster-panel" id="thruster-panel" role="tabpanel" aria-labelledby={`tab-${stage.id}`}>
        <div className="panel-head">
          <h3>
            <span className="tab-index">{stage.index}</span> {stage.name}
          </h3>
          <span className="tag tag-cyan">{stage.subteam}</span>
        </div>
        <p>{stage.description}</p>
        <ul>
          {stage.facts.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <a className="panel-link" href={url(stage.href)}>
          Meet the {stage.subteam.split(' · ')[0]} subteam →
        </a>
      </div>
    </div>
  );
}
