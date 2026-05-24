import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section className="relative border-b border-rule">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center fade-up">
          <div className="inline-flex items-center gap-2 border border-rule bg-paper px-3 py-1.5 text-[11px] uppercase tracking-widest">
            <span className="text-saffron">✓</span> Official Website · Party Launch · Live Since Yesterday
          </div>
          <h1 className="mt-8 font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Voice of the <em className="text-deep-red not-italic">Unemployed</em> Youth.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A political party for the people the system forgot to hire. Five demands. Zero
            sponsors. One large, stubborn generation. Raise civic issues, vote on solutions,
            and be the generation the system can't ignore.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/issues" className="btn-primary">Browse Issues →</Link>
            <Link to="/manifesto" className="btn-outline">Read the Manifesto</Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { n: "5", l: "Demands" },
            { n: "10,000+", l: "Citizens" },
            { n: "3,000+", l: "Issues" },
            { n: "∞", l: "Resilience" },
          ].map((s) => (
            <div key={s.l} className="paper-card p-6 text-center">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-deep-red">{s.n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}