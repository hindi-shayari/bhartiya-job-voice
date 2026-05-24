import { Link } from "@tanstack/react-router";

export function Movements() {
  return (
    <section className="py-20 border-b border-rule">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-saffron mb-3">Movements</div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold">Join a Movement. Start a Revolt.</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Complete the tasks. Rally the people. Ignite the change.
          </p>
        </div>
        <div className="paper-card p-8 sm:p-10 max-w-3xl mx-auto">
          <div className="flex items-center justify-between text-xs uppercase tracking-widest">
            <span className="text-deep-red font-semibold">● Active · Phase 01</span>
            <span className="text-muted-foreground">2026</span>
          </div>
          <h3 className="mt-4 font-serif text-3xl sm:text-4xl font-bold">
            BJP — Phase One: The Youth Are Awake
          </h3>
          <p className="mt-4 text-muted-foreground">
            A coordinated nationwide push to surface unemployment data, force public hearings,
            and turn complaints into receipts.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center border-t border-rule pt-6">
            <div><div className="font-serif text-2xl font-bold">8,421</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Supporters</div></div>
            <div><div className="font-serif text-2xl font-bold">12</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Tasks</div></div>
            <div><div className="font-serif text-2xl font-bold">3 / 5</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Demands Met</div></div>
          </div>
          <Link to="/movements" className="mt-8 inline-flex text-sm font-semibold border-b-2 border-saffron pb-1 hover:text-saffron">
            View Movement →
          </Link>
        </div>
      </div>
    </section>
  );
}