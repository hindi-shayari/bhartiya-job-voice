import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-24 pb-24 lg:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="font-serif text-3xl font-black">
              BJP<span className="text-saffron">.</span>
            </div>
            <div className="font-hindi text-saffron text-lg mt-1">भारतीय जॉब पार्टी</div>
            <p className="text-sm text-background/70 mt-4 leading-relaxed">
              A political party for unemployed Indians. Headquartered wherever the WiFi works.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-saffron text-sm uppercase tracking-widest mb-4">The Party</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><Link to="/about" className="hover:text-saffron">Vision</Link></li>
              <li><Link to="/manifesto" className="hover:text-saffron">Manifesto</Link></li>
              <li><Link to="/about" className="hover:text-saffron">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-saffron text-sm uppercase tracking-widest mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><Link to="/register" className="hover:text-saffron">Eligibility</Link></li>
              <li><Link to="/register" className="hover:text-saffron">Join</Link></li>
              <li><Link to="/raise-issue" className="hover:text-saffron">Raise Issue</Link></li>
              <li><Link to="/leaderboard" className="hover:text-saffron">Leaderboard</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-saffron text-sm uppercase tracking-widest mb-4">Follow</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-saffron">Twitter / X</a></li>
              <li><a href="#" className="hover:text-saffron">Instagram</a></li>
              <li><a href="#" className="hover:text-saffron">YouTube</a></li>
              <li><a href="#" className="hover:text-saffron">Telegram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-background/15 flex flex-col sm:flex-row justify-between gap-3 text-xs text-background/60">
          <p>© 2026 Bhartiya Job Party · All rants reserved.</p>
          <p>⚠ A work of satire</p>
        </div>
      </div>
    </footer>
  );
}