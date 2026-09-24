import React, { useState, useRef, useEffect } from "react";
import { Menu, Search, Bell, Plus, LogOut, User as UserIcon, ChevronDown } from "lucide-react";

export default function Topbar({ user, onMenu, onLogout, onNewDeal }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const h = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const name = user?.full_name || (user?.email ? user.email.split("@")[0] : "Account");
  const initial = name.charAt(0).toUpperCase();

  return (
    <header className="sticky top-0 z-30 h-16 bg-ramp-surface/90 backdrop-blur border-b border-ramp-line flex items-center gap-3 px-4 sm:px-6">
      <button className="lg:hidden p-2 -ml-2 text-ramp-ink" onClick={onMenu} aria-label="Open menu">
        <Menu className="w-5 h-5" />
      </button>

      <div className="hidden sm:flex items-center flex-1 max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ramp-ink/40" />
          <input
            type="text"
            placeholder="Search deals, contacts, companies…"
            className="w-full h-10 pl-9 pr-3 rounded-lg bg-ramp-muted border border-transparent focus:border-ramp-green focus:bg-white text-[14px] text-ramp-ink placeholder:text-ramp-ink/40 outline-none transition-colors"
          />
        </div>
      </div>
      <div className="flex-1 sm:hidden" />

      <button className="relative p-2 text-ramp-ink/70 hover:text-ramp-ink rounded-lg hover:bg-ramp-muted" aria-label="Notifications">
        <Bell className="w-5 h-5" />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-ramp-green ring-2 ring-ramp-surface" />
      </button>

      <button
        onClick={onNewDeal}
        className="hidden sm:inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-ramp-green hover:bg-ramp-green-dark text-ramp-green-fg text-[14px] font-semibold transition-colors"
      >
        <Plus className="w-4 h-4" /> New deal
      </button>

      <div className="relative" ref={ref}>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex items-center gap-2 h-10 pl-1.5 pr-2 rounded-lg hover:bg-ramp-muted transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-ramp-green/15 text-ramp-green-dark flex items-center justify-center text-[13px] font-semibold">
            {initial}
          </div>
          <span className="hidden sm:block text-[14px] font-medium text-ramp-ink max-w-[120px] truncate">{name}</span>
          <ChevronDown className="w-4 h-4 text-ramp-ink/50" />
        </button>
        {menuOpen && (
          <div className="absolute right-0 top-full mt-2 w-56 bg-ramp-surface border border-ramp-line rounded-xl shadow-lg py-1.5 z-50">
            <div className="px-3 py-2 border-b border-ramp-line">
              <p className="text-[14px] font-semibold text-ramp-ink truncate">{name}</p>
              {user?.email && <p className="text-[12px] text-ramp-ink/60 truncate">{user.email}</p>}
            </div>
            <button className="w-full flex items-center gap-2.5 px-3 py-2 text-[14px] text-ramp-ink/80 hover:bg-ramp-muted">
              <UserIcon className="w-4 h-4" /> Profile
            </button>
            <button onClick={onLogout} className="w-full flex items-center gap-2.5 px-3 py-2 text-[14px] text-ramp-ink/80 hover:bg-ramp-muted">
              <LogOut className="w-4 h-4" /> Log out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}