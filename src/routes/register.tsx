import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Join — Bhartiya Job Party" }, { name: "description", content: "Membership is free, lifelong, and revocable only by you." }] }),
  component: () => (
    <SiteLayout>
      <section className="py-24">
        <div className="mx-auto max-w-md px-4 sm:px-6">
          <div className="paper-card p-8 sm:p-10">
            <div className="text-center">
              <div className="text-xs uppercase tracking-[0.3em] text-saffron">Membership · Free for life</div>
              <h1 className="mt-3 font-serif text-3xl font-bold">Join the Party.</h1>
              <p className="mt-2 text-sm text-muted-foreground">No fees. No selfies with the leader.</p>
            </div>
            <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <RField label="Full Name" />
              <RField label="Email" type="email" />
              <RField label="State" />
              <RField label="Password" type="password" />
              <label className="flex items-start gap-2 text-xs text-muted-foreground">
                <input type="checkbox" required className="mt-0.5 accent-current" />
                <span>I am unemployed, frustrated, chronically online, and capable of ranting professionally.</span>
              </label>
              <button className="btn-primary w-full justify-center mt-2">Issue Membership Card →</button>
            </form>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Already a citizen? <Link to="/login" className="text-saffron font-semibold">Login →</Link>
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  ),
});

function RField({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-widest text-saffron font-semibold">{label}</label>
      <input required type={type} className="mt-1 w-full bg-transparent border-b border-foreground focus:outline-none focus:border-saffron pb-2 text-sm" />
    </div>
  );
}