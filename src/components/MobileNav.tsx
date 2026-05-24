import { Link } from "@tanstack/react-router";
import { Home, ArrowUp, Plus, FileText, Flag, User } from "lucide-react";

export function MobileNav() {
  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-paper border-t border-rule">
      <div className="grid grid-cols-6 text-[10px] font-medium">
        <Link to="/" className="flex flex-col items-center py-2 gap-1 hover:text-saffron">
          <Home size={18} /> Home
        </Link>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex flex-col items-center py-2 gap-1 hover:text-saffron">
          <ArrowUp size={18} /> Top
        </button>
        <Link to="/raise-issue" className="flex flex-col items-center py-2 gap-1 hover:text-saffron">
          <Plus size={18} /> Raise
        </Link>
        <Link to="/issues" className="flex flex-col items-center py-2 gap-1 hover:text-saffron">
          <FileText size={18} /> Issues
        </Link>
        <Link to="/movements" className="flex flex-col items-center py-2 gap-1 hover:text-saffron">
          <Flag size={18} /> Movements
        </Link>
        <Link to="/login" className="flex flex-col items-center py-2 gap-1 hover:text-saffron">
          <User size={18} /> Profile
        </Link>
      </div>
    </nav>
  );
}