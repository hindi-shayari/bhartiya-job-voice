import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { ContactSection } from "@/components/home/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Bhartiya Job Party" }, { name: "description", content: "Email, press, HQ. We read everything." }] }),
  component: () => (
    <SiteLayout>
      <PageHeader kicker="Mailroom" title="Connect with us." subtitle="Want to join, volunteer, complain, or send a meme? We read everything." />
      <ContactSection />
    </SiteLayout>
  ),
});