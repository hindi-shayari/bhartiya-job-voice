import { ContactForm } from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-saffron mb-3">Contact</div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold">Connect with us.</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Want to join, volunteer, complain, or send a meme? We read everything.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            {[
              { l: "Email", v: "hello@bhartiyajobparty.in" },
              { l: "Press", v: "press@bhartiyajobparty.in" },
              { l: "Headquarters", v: "Wherever the WiFi Works" },
              { l: "Founded", v: "2026" },
            ].map((row) => (
              <div key={row.l} className="paper-card p-5">
                <div className="text-[10px] uppercase tracking-widest text-saffron">{row.l}</div>
                <div className="mt-1 font-serif text-lg font-semibold">{row.v}</div>
              </div>
            ))}
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}