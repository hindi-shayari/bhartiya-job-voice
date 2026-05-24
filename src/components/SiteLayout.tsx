import { type ReactNode } from "react";
import { Ticker } from "./Ticker";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MobileNav } from "./MobileNav";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Ticker />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileNav />
    </div>
  );
}

export function PageHeader({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <section className="border-b border-rule py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {kicker && (
          <div className="text-xs uppercase tracking-[0.3em] text-saffron mb-4 font-medium">{kicker}</div>
        )}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        )}
        <div className="mt-6 flex justify-center">
          <div className="h-px w-24 bg-saffron" />
        </div>
      </div>
    </section>
  );
}