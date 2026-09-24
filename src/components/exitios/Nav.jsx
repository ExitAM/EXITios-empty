import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV_DATA = {
  Platform: [
    { label: "Platform overview", href: "#top" },
    { label: "Decision center", href: "#command" },
    { label: "Evidence room", href: "#trust" },
    { label: "Industry scorecards", href: "#industry" },
    { label: "Action management", href: "#capabilities" },
  ],
  Solutions: [
    { label: "Grow a business", href: "#paths" },
    { label: "Prepare to sell", href: "#paths" },
    { label: "Evaluate an acquisition", href: "#paths" },
    { label: "Advise clients", href: "#paths" },
  ],
  Industries: [
    { label: "Home and field services", href: "#industry" },
    { label: "Specialty contracting", href: "#industry" },
    { label: "Manufacturing", href: "#industry" },
    { label: "Healthcare practices", href: "#industry" },
    { label: "B2B managed services", href: "#industry" },
    { label: "Veterinary and pet services", href: "#industry" },
  ],
};

function Dropdown({ label, items, onNavigate }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
        className="flex items-center gap-1 text-[14px] fw-450 text-[#243C4F] hover:text-[#2563EB] transition-colors duration-200 px-2 py-1.5 rounded-md focus-ring"
      >
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-1.5 w-60 bg-white border border-[#E4E9EF] rounded-[14px] shadow-[0_12px_32px_-12px_rgba(16,42,67,0.18)] overflow-hidden z-50 py-1.5">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => { setOpen(false); onNavigate && onNavigate(); }}
              className="block px-4 py-2 text-[14px] fw-450 text-[#243C4F] hover:bg-[#F7F8F8] hover:text-[#2563EB] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md border-b border-[#E4E9EF] transition-all duration-200 ${
        scrolled ? "h-14 lg:h-14" : "h-[60px] lg:h-[68px]"
      }`}
    >
      <div className="max-w-[1280px] mx-auto h-full px-5 lg:px-8 flex items-center justify-between">
        <a href="#top" aria-label="EXITios" className="flex items-center focus-ring rounded-md">
          <Logo className="h-7" />
        </a>

        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
          {Object.entries(NAV_DATA).map(([label, items]) => (
            <Dropdown key={label} label={label} items={items} />
          ))}
          <a href="#growth-os" className="px-2 text-[14px] fw-450 text-[#243C4F] hover:text-[#2563EB] transition-colors duration-200 py-1.5 rounded-md">Growth OS</a>
          <a href="#paths" className="px-2 text-[14px] fw-450 text-[#243C4F] hover:text-[#2563EB] transition-colors duration-200 py-1.5 rounded-md">Pricing</a>
          <a href="#trust" className="px-2 text-[14px] fw-450 text-[#243C4F] hover:text-[#2563EB] transition-colors duration-200 py-1.5 rounded-md">Trust</a>
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link to="/login" className="text-[14px] fw-550 text-[#243C4F] hover:text-[#173044] transition-colors duration-200 px-3 py-2 rounded-md focus-ring">Log in</Link>
          <Link to="/register?returnTo=%2Fapp" className="text-[14px] fw-550 text-white bg-[#2563EB] hover:bg-[#1d4ed8] active:scale-[0.98] transition-all duration-200 px-3.5 py-2 rounded-lg focus-ring">Start assessment</Link>
        </div>

        <div className="lg:hidden flex items-center gap-1">
          <Link to="/register?returnTo=%2Fapp" className="text-[13px] fw-550 text-white bg-[#2563EB] px-3 py-1.5 rounded-lg">Start</Link>
          <button type="button" aria-label="Open menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen((v) => !v)} className="p-2 text-[#173044] focus-ring rounded-md min-w-[44px] min-h-[44px] flex items-center justify-center">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E4E9EF] max-h-[78vh] overflow-y-auto">
          <div className="px-5 py-3">
            {Object.entries(NAV_DATA).map(([label, items]) => (
              <details key={label} className="border-b border-[#E4E9EF] py-1">
                <summary className="cursor-pointer text-[15px] fw-550 text-[#243C4F] py-2.5 list-none flex items-center justify-between">
                  {label}<ChevronDown className="w-4 h-4" />
                </summary>
                <div className="pb-2">
                  {items.map((item) => (
                    <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="block py-2 pl-3 text-[14px] text-[#64748B] hover:text-[#2563EB]">{item.label}</a>
                  ))}
                </div>
              </details>
            ))}
            <a href="#growth-os" onClick={() => setMobileOpen(false)} className="block py-2.5 text-[15px] fw-550 text-[#243C4F]">Growth OS</a>
            <a href="#paths" onClick={() => setMobileOpen(false)} className="block py-2.5 text-[15px] fw-550 text-[#243C4F]">Pricing</a>
            <a href="#trust" onClick={() => setMobileOpen(false)} className="block py-2.5 text-[15px] fw-550 text-[#243C4F]">Trust</a>
            <Link to="/login" onClick={() => setMobileOpen(false)} className="block py-2.5 text-[15px] fw-550 text-[#243C4F]">Log in</Link>
          </div>
        </div>
      )}
    </header>
  );
}