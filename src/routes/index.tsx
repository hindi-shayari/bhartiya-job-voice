import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/home/Hero";
import { Poster } from "@/components/home/Poster";
import { Movements } from "@/components/home/Movements";
import { Vision } from "@/components/home/Vision";
import { ManifestoSection } from "@/components/home/Manifesto";
import { HeatMap } from "@/components/home/HeatMap";
import { Issues } from "@/components/home/Issues";
import { Membership } from "@/components/home/Membership";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ContactSection } from "@/components/home/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhartiya Job Party — Voice of the Unemployed Youth of India" },
      { name: "description", content: "A political party for the people the system forgot to hire. 5 demands. Zero sponsors. One stubborn generation." },
      { property: "og:title", content: "Bhartiya Job Party (BJP) — Voice of the Unemployed Youth" },
      { property: "og:description", content: "Raise issues, demand accountability, and be the generation the system can't ignore." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Poster />
      <Movements />
      <Vision />
      <ManifestoSection />
      <HeatMap />
      <Issues />
      <Membership />
      <CtaBanner />
      <ContactSection />
    </SiteLayout>
  );
}
