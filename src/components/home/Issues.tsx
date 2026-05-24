import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUp, MessageCircle } from "lucide-react";
import { ISSUES, CATEGORIES, type Issue } from "@/data/mock";

export function IssueCard({ issue }: { issue: Issue }) {
  return (
    <article className="paper-card p-6 flex flex-col h-full hover:-translate-y-1 transition-transform">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] uppercase tracking-widest font-semibold text-saffron border border-saffron px-2 py-1">
          {issue.category}
        </span>
        <span className="text-xs text-muted-foreground">{issue.timeAgo}</span>
      </div>
      <h3 className="font-serif text-xl font-bold leading-snug">{issue.title}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{issue.description}</p>
      <div className="mt-5 pt-4 border-t border-rule flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center">
            {issue.initials}
          </div>
          <span className="text-xs font-medium">{issue.author}</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><ArrowUp size={14} /> {issue.votes.toLocaleString()}</span>
          <span className="flex items-center gap-1"><MessageCircle size={14} /> {issue.comments}</span>
        </div>
      </div>
    </article>
  );
}

export function Issues() {
  const [cat, setCat] = useState("All Issues");
  const filtered = cat === "All Issues" ? ISSUES : ISSUES.filter((i) => i.category === cat);
  return (
    <section className="py-20 border-b border-rule">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-saffron mb-3">Latest Issues</div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold">Latest Issues.</h2>
            <p className="mt-3 text-muted-foreground">Every issue raised is a small act of rebellion.</p>
          </div>
          <Link to="/raise-issue" className="btn-primary self-start">Raise Issue +</Link>
        </div>
        <div className="flex flex-wrap gap-2 mb-8 border-y border-rule py-4">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`text-xs uppercase tracking-wider px-3 py-1.5 border transition-colors ${
                cat === c
                  ? "bg-foreground text-background border-foreground"
                  : "border-rule hover:border-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((i) => <IssueCard key={i.id} issue={i} />)}
        </div>
      </div>
    </section>
  );
}