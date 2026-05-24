export function Poster() {
  return (
    <section className="py-20 border-b border-rule">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative paper-card p-10 sm:p-16 text-center overflow-hidden">
          <div className="absolute top-6 right-6"><span className="stamp">Approved</span></div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-saffron">Official Poster · Vol. 1</div>
          <div className="mt-3 font-hindi text-2xl text-deep-red">भारतीय जॉब पार्टी</div>
          <h2 className="mt-6 font-serif text-5xl sm:text-7xl font-black leading-none">
            Together<br/>We Rise.
          </h2>
          <div className="mt-6 h-px w-32 bg-foreground mx-auto" />
          <p className="mt-6 text-lg italic text-muted-foreground">
            "They ignored us. We came back louder."
          </p>
          <div className="mt-10 flex justify-center gap-8 text-xs uppercase tracking-widest">
            <span>✦ Jobs</span><span>✦ Justice</span><span>✦ Jawaab</span>
          </div>
        </div>
        <div className="bg-foreground text-background mt-6 py-3 marquee text-sm font-serif">
          <div className="marquee-track">
            {"Together We Rise ✦ Stronger Together ✦ Unity · Jobs · Progress ✦ You Cannot Stop A Movement ✦ ".repeat(4)}
          </div>
        </div>
      </div>
    </section>
  );
}