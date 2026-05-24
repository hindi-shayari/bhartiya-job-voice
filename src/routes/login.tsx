import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — Bhartiya Job Party" }] }),
  component: () => (
    <SiteLayout>
      <section className="py-24">
        <div className="mx-auto max-w-md px-4 sm:px-6">
          <div className="paper-card p-8 sm:p-10">
            <div className="text-center">
              <div className="text-xs uppercase tracking-[0.3em] text-saffron">Citizen Login</div>
              <h1 className="mt-3 font-serif text-3xl font-bold">Welcome back, comrade.</h1>
            </div>
            <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <LField label="Email" type="email" />
              <LField label="Password" type="password" />
              <button className="btn-primary w-full justify-center mt-4">Login →</button>
            </form>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              New here? <Link to="/register" className="text-saffron font-semibold">Join the party →</Link>
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  ),
});

function LField({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-widest text-saffron font-semibold">{label}</label>
      <input required type={type} className="mt-1 w-full bg-transparent border-b border-foreground focus:outline-none focus:border-saffron pb-2 text-sm" />
    </div>
  );
}