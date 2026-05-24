export function Vision() {
  return (
    <section className="py-20 border-b border-rule bg-paper/50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-saffron mb-3">Chapter One</div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold">Our Movement's Vision.</h2>
        </div>
        <div className="mt-12 newspaper-rule pt-8 prose-lg">
          <p className="text-lg leading-relaxed">
            We are not here to create another tokenistic scheme. We are here to ask —
            <em className="text-deep-red"> loudly, repeatedly, in writing</em> — where the jobs went.
          </p>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground uppercase tracking-wider text-sm">Our Mission: </span>
            Build a party for young Indians who keep getting told to "work hard" while the system
            keeps the gates closed. That's it. That's the mission. The rest is satire.
          </p>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed">
            This is your platform to raise issues, demand accountability, and never shut up.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { n: "3,247", l: "Issues Raised" },
            { n: "10,482", l: "Citizens United" },
            { n: "28,931", l: "Comments & Discussions" },
          ].map((s) => (
            <div key={s.l} className="paper-card p-6 text-center">
              <div className="font-serif text-3xl font-bold text-deep-red">{s.n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}