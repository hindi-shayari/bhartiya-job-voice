import { STATES } from "@/data/mock";

export function HeatMap() {
  const max = Math.max(...STATES.map((s) => s.count));
  return (
    <section className="py-20 border-b border-rule bg-paper/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-saffron mb-3">🇮🇳 Live Map</div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold">India Heat Map.</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            See which states are raising the most issues. Join your state's movement.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="paper-card p-8 aspect-square flex items-center justify-center relative">
            {/* Stylized India outline placeholder */}
            <svg viewBox="0 0 400 450" className="w-full h-full">
              <path
                d="M180 30 L220 40 L260 60 L290 90 L310 130 L320 170 L325 210 L320 250 L300 290 L280 320 L260 350 L240 380 L210 410 L180 420 L150 405 L130 370 L115 330 L105 290 L100 250 L95 210 L100 170 L115 130 L135 90 L160 55 Z"
                fill="var(--paper)"
                stroke="var(--ink)"
                strokeWidth="2"
              />
              {STATES.slice(0, 8).map((s, i) => {
                const intensity = s.count / max;
                const cx = 140 + (i % 4) * 50;
                const cy = 100 + Math.floor(i / 4) * 100;
                return (
                  <g key={s.name}>
                    <circle cx={cx} cy={cy} r={6 + intensity * 14} fill="#8B0000" fillOpacity={0.25 + intensity * 0.55} />
                    <circle cx={cx} cy={cy} r={3} fill="#8B0000" />
                  </g>
                );
              })}
              <text x="200" y="440" textAnchor="middle" className="fill-current text-xs font-serif italic" fill="#1A1A1A" opacity="0.5">Bharat</text>
            </svg>
          </div>
          <div className="paper-card p-2">
            <div className="px-6 py-4 border-b border-rule">
              <h3 className="font-serif text-xl font-bold">Top States by Issues</h3>
            </div>
            <ul>
              {STATES.map((s, i) => (
                <li key={s.name} className="flex items-center gap-4 px-6 py-3 border-b border-rule last:border-0">
                  <span className="text-xs text-muted-foreground w-6">#{i + 1}</span>
                  <span className="flex-1 font-medium">{s.name}</span>
                  <div className="hidden sm:block w-32 h-2 bg-cream rounded-full overflow-hidden">
                    <div className="h-full bg-deep-red" style={{ width: `${(s.count / max) * 100}%` }} />
                  </div>
                  <span className="font-serif text-sm font-bold w-14 text-right">{s.count.toLocaleString()}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}