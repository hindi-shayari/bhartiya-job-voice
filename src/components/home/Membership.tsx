import { Link } from "@tanstack/react-router";

const REQS = [
  { id: "REQ/01", title: "Unemployed", desc: "By force, by degree, or by the system's design. We don't judge." },
  { id: "REQ/02", title: "Frustrated", desc: "With the system, not with yourself." },
  { id: "REQ/03", title: "Chronically Online", desc: "Minimum 8 hours a day, including scrolling job portals." },
  { id: "REQ/04", title: "Can Rant Professionally", desc: "Sharp, honest, and pointed at things that actually matter." },
];

export function Membership() {
  return (
    <section className="py-20 border-b border-rule bg-paper/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-saffron mb-3">Membership</div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold">Are you eligible to join?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            We do not check religion, caste, or gender. We do have four standards.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {REQS.map((r) => (
            <div key={r.id} className="paper-card p-6 flex gap-5">
              <div className="text-xs uppercase tracking-widest font-bold text-saffron w-16 shrink-0 border-r border-rule pr-4">
                {r.id}
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold flex items-center gap-2">
                  {r.title} <span className="text-saffron">✓</span>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/register" className="btn-primary">Join the Party →</Link>
          <p className="mt-4 text-xs text-muted-foreground italic">
            Membership is free, lifelong, and revocable only by you. No fees. No selfies with the leader.
          </p>
        </div>
      </div>
    </section>
  );
}