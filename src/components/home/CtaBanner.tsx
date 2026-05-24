import { Link } from "@tanstack/react-router";

export function CtaBanner() {
  return (
    <section className="py-20 bg-foreground text-background border-b border-foreground">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-xs uppercase tracking-[0.4em] text-saffron mb-4">✦ Call to Action ✦</div>
        <h2 className="font-serif text-5xl sm:text-6xl font-bold">Stronger Together.</h2>
        <p className="mt-5 text-background/75 text-lg">
          You cannot stop a movement. Join the generation.
        </p>
        <Link
          to="/raise-issue"
          className="mt-8 inline-flex items-center gap-2 bg-saffron text-foreground px-6 py-3 font-semibold hover:bg-background transition-colors"
        >
          Raise Your First Issue →
        </Link>
      </div>
    </section>
  );
}