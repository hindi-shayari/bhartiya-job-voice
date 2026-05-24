import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/movements", label: "Movements" },
  { to: "/leaderboard", label: "Leaderboard" },
  { to: "/manifesto", label: "Manifesto" },
  { to: "/raise-issue", label: "Raise Issue" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-rule">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center h-16">
        <Link to="/" className="font-serif text-2xl font-black tracking-tight">
          BJP<span className="text-saffron">.</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 ml-10 text-sm font-medium">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-saffron" }}
              className="hover:text-saffron transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <Link to="/login" className="hidden sm:inline text-sm font-medium hover:text-saffron">
            Login
          </Link>
          <Link to="/register" className="btn-primary">
            Join →
          </Link>
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-rule bg-paper">
          <nav className="flex flex-col p-4 gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium py-2 border-b border-rule"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}