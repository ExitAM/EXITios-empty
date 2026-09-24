import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/AuthContext";
import { WORKSPACE } from "@/lib/app-data";
import { Menu, Search, ChevronDown, LogOut, Settings, LifeBuoy } from "lucide-react";

function titleFor(pathname) {
  if (pathname.startsWith("/app/decisions/")) return "Decision";
  const map = {
    "/app": "Command Center",
    "/app/decisions": "Decisions",
    "/app/growth": "Growth",
    "/app/sell-side": "Sell-Side",
    "/app/acquisition": "Acquisition",
    "/app/integration": "Integration",
    "/app/evidence": "Evidence",
    "/app/data-sources": "Data Sources",
    "/app/reports": "Reports",
    "/app/reviews": "Reviews",
    "/app/team": "Team and Access",
    "/app/billing": "Billing",
    "/app/settings": "Settings",
    "/app/help": "Help",
  };
  return map[pathname] || "EXITios";
}

function initials(name = "") {
  return name.split(" ").map((s) => s[0]).slice(0, 2).join("").toUpperCase() || "U";
}

export default function Topbar({ onMobileOpen }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [profileOpen, setProfileOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => ref.current && !ref.current.contains(e.target) && setProfileOpen(false);
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const name = user?.full_name || user?.email || "User";
  const email = user?.email || "";
  const role = user?.role || "user";

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#D7DEE5]">
      <div className="h-16 px-4 lg:px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onMobileOpen}
            className="md:hidden p-2 text-[#243C4F] hover:bg-[#F7F8F8] rounded-lg focus-ring"
            aria-label="Open navigation"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="min-w-0">
            <h1 className="text-[17px] font-bold text-[#173044] leading-none truncate">{titleFor(location.pathname)}</h1>
            <p className="mt-1 text-[12px] text-[#64748B] flex items-center gap-1.5 truncate">
              <span className="inline-flex items-center gap-1 rounded-full bg-[#F5F0E8] text-[#243C4F] border border-[#E5DCC8] px-2 py-0.5 text-[11px] font-semibold">
                {WORKSPACE.name}
              </span>
              <span className="text-[#64748B]">{WORKSPACE.permission}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center gap-2 w-64 rounded-lg border border-[#D7DEE5] bg-[#F7F8F8] px-3 py-2 focus-within:border-[#2563EB]">
            <Search className="w-4 h-4 text-[#64748B]" />
            <input
              type="text"
              placeholder="Search decisions, evidence…"
              className="bg-transparent text-[14px] text-[#173044] placeholder:text-[#64748B] outline-none w-full"
            />
          </div>

          <div className="relative" ref={ref}>
            <button
              onClick={() => setProfileOpen((v) => !v)}
              className="flex items-center gap-2 rounded-lg hover:bg-[#F7F8F8] px-2 py-1.5 focus-ring"
              aria-haspopup="true"
              aria-expanded={profileOpen}
            >
              <div className="w-8 h-8 rounded-full bg-[#2563EB] flex items-center justify-center text-[12px] font-bold text-white">
                {initials(name)}
              </div>
              <ChevronDown className="w-4 h-4 text-[#64748B] hidden sm:block" />
            </button>
            {profileOpen && (
              <div className="absolute right-0 top-full mt-1 w-64 rounded-xl bg-white shadow-2xl border border-[#D7DEE5] p-2 z-50">
                <div className="px-3 py-2 border-b border-[#D7DEE5] mb-1">
                  <p className="text-[14px] font-semibold text-[#173044] truncate">{name}</p>
                  <p className="text-[12px] text-[#64748B] truncate">{email}</p>
                  <p className="text-[11px] text-[#64748B] capitalize mt-0.5">{role}</p>
                </div>
                <button
                  onClick={() => { setProfileOpen(false); navigate("/app/settings"); }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-[14px] text-[#243C4F] hover:bg-[#F7F8F8] rounded-lg"
                >
                  <Settings className="w-4 h-4" /> Settings
                </button>
                <button
                  onClick={() => { setProfileOpen(false); navigate("/app/help"); }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-[14px] text-[#243C4F] hover:bg-[#F7F8F8] rounded-lg"
                >
                  <LifeBuoy className="w-4 h-4" /> Help
                </button>
                <button
                  onClick={() => { logout(); }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-[14px] text-[#B42318] hover:bg-[#FBEAE9] rounded-lg border-t border-[#D7DEE5] mt-1"
                >
                  <LogOut className="w-4 h-4" /> Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}