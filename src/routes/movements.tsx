import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

const MOVEMENTS = [
  { phase: "Phase 01", status: "Active", title: "The Youth Are Awake", desc: "A nationwide push to surface unemployment data and force public hearings.", supporters: 8421, tasks: 12, done: 3 },
  { phase: "Phase 02", status: "Upcoming", title: "Audit Every Scheme", desc: "RTI floods, scheme audits, and public scorecards for every employment promise of the last decade.", supporters: 2104, tasks: 8, done: 0 },
  { phase: "Phase 03", status: "Planning", title: "The Manifesto March", desc: "A coordinated student march across 50 universities, demanding the 5 manifesto reforms in writing.", supporters: 1287, tasks: 5, done: 0 },
];

export const Route = createFileRoute("/movements")({
  head: () => ({ meta: [{ title: "Movements — Bhartiya Job Party" }, { name: "description", content: "Active and upcoming citizen movements. Pick one. Show up." }] }),
  component: () => (
    <SiteLayout>
      <PageHeader kicker="Movements" title="Join a Movement. Start a Revolt." subtitle="Complete the tasks. Rally the people. Ignite the change." />
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-6">
          {MOVEMENTS.map((m) => (
            <div key={m.phase} className="paper-card p-8">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest">
                <span className={m.status === "Active" ? "text-deep-red font-semibold" : "text-muted-foreground"}>
                  ● {m.status} · {m.phase}
                </span>
                <span className="text-muted-foreground">2026</span>
              </div>
              <h3 className="mt-4 font-serif text-3xl font-bold">BJP — {m.title}</h3>
              <p className="mt-3 text-muted-foreground">{m.desc}</p>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center border-t border-rule pt-5">
                <div><div className="font-serif text-2xl font-bold">{m.supporters.toLocaleString()}</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Supporters</div></div>
                <div><div className="font-serif text-2xl font-bold">{m.tasks}</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Tasks</div></div>
                <div><div className="font-serif text-2xl font-bold">{m.done}/{m.tasks}</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Completed</div></div>
              </div>
              <Link to="/register" className="mt-6 inline-flex text-sm font-semibold border-b-2 border-saffron pb-1 hover:text-saffron">
                Join Movement →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  ),
});