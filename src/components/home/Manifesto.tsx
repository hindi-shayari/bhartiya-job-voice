import { Link } from "@tanstack/react-router";
import { MANIFESTO } from "@/data/mock";

export function ManifestoSection() {
  return (
    <section className="py-20 border-b border-rule">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-saffron mb-3">Manifesto</div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold">The Manifesto.</h2>
          <p className="mt-4 text-muted-foreground">Read it once. Read it twice. Then share it.</p>
        </div>
        <ol className="space-y-5">
          {MANIFESTO.map((demand, i) => (
            <li key={i} className="paper-card p-6 sm:p-8 flex gap-6">
              <div className="font-serif text-5xl sm:text-6xl font-black text-saffron leading-none shrink-0">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-base sm:text-lg leading-relaxed pt-2">{demand}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <Link to="/manifesto" className="btn-outline">Full Manifesto →</Link>
        </div>
      </div>
    </section>
  );
}