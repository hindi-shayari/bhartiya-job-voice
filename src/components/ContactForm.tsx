import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="paper-card p-6 sm:p-8 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 4000);
      }}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Name" name="name" />
        <Field label="Email" name="email" type="email" />
      </div>
      <Field label="Subject" name="subject" />
      <div>
        <label className="text-[10px] uppercase tracking-widest text-saffron font-semibold">Message</label>
        <textarea
          name="message"
          rows={5}
          required
          className="mt-1 w-full bg-transparent border-b border-foreground focus:outline-none focus:border-saffron pb-2 text-sm resize-none"
        />
      </div>
      <button type="submit" className="btn-primary w-full justify-center">
        {sent ? "Sent ✓ We'll read it." : "Send Message →"}
      </button>
    </form>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-widest text-saffron font-semibold">{label}</label>
      <input
        type={type}
        name={name}
        required
        className="mt-1 w-full bg-transparent border-b border-foreground focus:outline-none focus:border-saffron pb-2 text-sm"
      />
    </div>
  );
}