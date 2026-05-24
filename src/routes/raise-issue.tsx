import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { CATEGORIES } from "@/data/mock";

export const Route = createFileRoute("/raise-issue")({
  head: () => ({ meta: [{ title: "Raise an Issue — Bhartiya Job Party" }, { name: "description", content: "File a civic complaint. Make it public. Make it loud." }] }),
  component: RaisePage,
});

function RaisePage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHeader kicker="File the Complaint" title="Raise an Issue." subtitle="Be specific. Be honest. Be loud. The form is short. The impact is long." />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {sent ? (
            <div className="paper-card p-12 text-center">
              <div className="stamp">Filed</div>
              <h2 className="mt-6 font-serif text-3xl font-bold">Your issue is in the public record.</h2>
              <p className="mt-3 text-muted-foreground">Citizens are now voting. The system is now sweating.</p>
              <button onClick={() => setSent(false)} className="mt-6 btn-outline">Raise another →</button>
            </div>
          ) : (
            <form className="paper-card p-8 space-y-5" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <Field label="Issue Title" name="title" placeholder="One line. Sharp. Honest." />
              <div>
                <label className="text-[10px] uppercase tracking-widest text-saffron font-semibold">Category</label>
                <select required className="mt-1 w-full bg-transparent border-b border-foreground focus:outline-none focus:border-saffron pb-2 text-sm">
                  {CATEGORIES.filter((c) => c !== "All Issues").map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <Field label="State" name="state" placeholder="Your state" />
              <div>
                <label className="text-[10px] uppercase tracking-widest text-saffron font-semibold">Describe the Issue</label>
                <textarea required rows={6} className="mt-1 w-full bg-transparent border-b border-foreground focus:outline-none focus:border-saffron pb-2 text-sm resize-none" placeholder="What happened. Who is responsible. What you want done." />
              </div>
              <button className="btn-primary w-full justify-center">File this Issue →</button>
              <p className="text-xs text-muted-foreground text-center italic">Your name is public. Your spine is showing. Good.</p>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, placeholder }: { label: string; name: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-widest text-saffron font-semibold">{label}</label>
      <input required name={name} placeholder={placeholder} className="mt-1 w-full bg-transparent border-b border-foreground focus:outline-none focus:border-saffron pb-2 text-sm" />
    </div>
  );
}