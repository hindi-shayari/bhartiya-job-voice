import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Bhartiya Job Party" }, { name: "description", content: "Who we are, why we exist, and how we plan to be unignorable." }] }),
  component: () => (
    <SiteLayout>
      <PageHeader kicker="Est. 2026" title="About the Party." subtitle="Five demands. Zero sponsors. One stubborn generation." />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6 text-lg leading-relaxed">
          <p>The Bhartiya Job Party (BJP) is not a party in the traditional sense. There are no donors. There are no posters of supreme leaders. There is no air-conditioned office in Lutyens' Delhi. There is only a website, a manifesto, and a generation that refuses to be quiet.</p>
          <p className="text-muted-foreground">We were founded in 2026 by a group of unemployed graduates who finally finished waiting. We built this platform because we were tired of being told to "be patient", "be positive", "be productive" — by people who had never filled out a single online application form.</p>
          <p>We are <em className="text-deep-red not-italic">not</em> here to win elections. We are here to make every election about the only question that matters: <strong>where are the jobs?</strong></p>
          <div className="newspaper-rule pt-6">
            <h3 className="font-serif text-2xl font-bold">What we will do</h3>
            <ul className="mt-4 space-y-2 text-base text-muted-foreground list-disc list-inside">
              <li>Publish unemployment data the government would rather bury.</li>
              <li>Organize public accountability hearings for every broken promise.</li>
              <li>Help young Indians turn rants into receipts, and receipts into reform.</li>
              <li>Never accept funding from any political party or corporate sponsor.</li>
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  ),
});