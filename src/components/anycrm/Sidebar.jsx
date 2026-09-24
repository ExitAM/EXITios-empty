import React from "react";
import { LayoutDashboard, KanbanSquare, Users, CalendarClock, BarChart3, Settings, Sparkles, X } from "lucide-react";

const NAV = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "pipeline", label: "Pipeline", icon: KanbanSquare },
  { key: "contacts", label: "Contacts", icon: Users },
  { key: "activities", label: "Activities", icon: CalendarClock },
  { key: "reports", label: "Reports", icon: BarChart3 },
  { key: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar({ view, onChange, mobileOpen, onClose }) {
  return (
    <>
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={onClose} aria-hidden="true" />
      )}
      <aside
        className={`fixed z-50 top-0 left-0 h-full w-[240px] bg-ramp-surface border-r border-ramp-line flex flex-col transition-transform duration-200 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-16 flex items-center justify-between px-5 border-b border-ramp-line">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-ramp-green flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-ramp-green-fg" />
            </div>
            <span className="text-[17px] font-bold tracking-tight text-ramp-ink">anyCRM</span>
          </div>
          <button className="lg:hidden text-ramp-ink/60" onClick={onClose} aria-label="Close menu">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV.map((item) => {
            const Icon = item.icon;
            const active = view === item.key;
            return (
              <button
                key={item.key}
                onClick={() => onChange(item.key)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors ${
                  active
                    ? "bg-ramp-green/10 text-ramp-green-dark"
                    : "text-ramp-ink/70 hover:bg-ramp-muted hover:text-ramp-ink"
                }`}
              >
                <Icon className={`w-[18px] h-[18px] ${active ? "text-ramp-green-dark" : "text-ramp-ink/50"}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="p-3 border-t border-ramp-line">
          <div className="rounded-xl bg-ramp-muted p-4">
            <p className="text-[13px] font-semibold text-ramp-ink">Pro trial</p>
            <p className="text-[12px] text-ramp-ink/60 mt-0.5">12 days remaining</p>
            <button className="mt-3 w-full text-[13px] font-semibold text-ramp-green-fg bg-ramp-green hover:bg-ramp-green-dark rounded-lg px-3 py-2 transition-colors">
              Upgrade plan
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}