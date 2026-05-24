import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { MANIFESTO } from "@/data/mock";

export const Route = createFileRoute("/manifesto")({
  head: () => ({
    meta: [
      { title: "The Manifesto — Bhartiya Job Party" },
      { name: "description", content: "Five non-negotiable demands from the unemployed youth of India." },
      { property: "og:title", content: "The BJP Manifesto · 5 Demands" },
      { property: "og:description", content: "Read it once. Read it twice. Then share it." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHeader kicker="Volume 1 · Edition 1" title="The Manifesto." subtitle="Read it once. Read it twice. Then share it." />
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ol className="space-y-6">
            {MANIFESTO.map((d, i) => (
              <li key={i} className="paper-card p-8 flex gap-6">
                <div className="font-serif text-6xl font-black text-saffron leading-none shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-lg leading-relaxed pt-2">{d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 text-center">
            <Link to="/register" className="btn-primary">Sign the Manifesto →</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  ),
});