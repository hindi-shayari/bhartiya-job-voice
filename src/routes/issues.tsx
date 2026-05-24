import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { CATEGORIES, ISSUES } from "@/data/mock";
import { IssueCard } from "@/components/home/Issues";

export const Route = createFileRoute("/issues")({
  head: () => ({ meta: [{ title: "Issues — Bhartiya Job Party" }, { name: "description", content: "Every issue raised is a small act of rebellion." }] }),
  component: IssuesPage,
});

function IssuesPage() {
  const [cat, setCat] = useState("All Issues");
  const filtered = cat === "All Issues" ? ISSUES : ISSUES.filter((i) => i.category === cat);
  return (
    <SiteLayout>
      <PageHeader kicker="The Public Record" title="All Issues." subtitle="Every issue raised is a small act of rebellion." />
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button key={c} onClick={() => setCat(c)} className={`text-xs uppercase tracking-wider px-3 py-1.5 border transition-colors ${cat === c ? "bg-foreground text-background border-foreground" : "border-rule hover:border-foreground"}`}>
                  {c}
                </button>
              ))}
            </div>
            <Link to="/raise-issue" className="btn-primary">Raise Issue +</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((i) => <IssueCard key={i.id} issue={i} />)}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}