import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { LEADERBOARD } from "@/data/mock";

export const Route = createFileRoute("/leaderboard")({
  head: () => ({ meta: [{ title: "Leaderboard — Bhartiya Job Party" }, { name: "description", content: "The citizens raising the loudest issues this season." }] }),
  component: () => (
    <SiteLayout>
      <PageHeader kicker="Season 01" title="The Leaderboard." subtitle="The citizens raising the loudest issues this season. Climb. Or be silent." />
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="paper-card overflow-hidden">
            <div className="grid grid-cols-12 px-6 py-4 border-b border-rule text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
              <div className="col-span-1">#</div>
              <div className="col-span-5">Citizen</div>
              <div className="col-span-3">State</div>
              <div className="col-span-1 text-right">Issues</div>
              <div className="col-span-2 text-right">Points</div>
            </div>
            {LEADERBOARD.map((row) => (
              <div key={row.rank} className="grid grid-cols-12 px-6 py-5 border-b border-rule last:border-0 items-center">
                <div className={`col-span-1 font-serif text-2xl font-black ${row.rank <= 3 ? "text-deep-red" : "text-muted-foreground"}`}>
                  {row.rank}
                </div>
                <div className="col-span-5 font-serif text-lg font-semibold">{row.name}</div>
                <div className="col-span-3 text-sm text-muted-foreground">{row.state}</div>
                <div className="col-span-1 text-right text-sm">{row.issues}</div>
                <div className="col-span-2 text-right font-serif font-bold">{row.points.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  ),
});