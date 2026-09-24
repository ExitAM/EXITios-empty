import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "@/lib/AuthContext";
import { WORKSPACE } from "@/lib/app-data";
import Logo from "@/components/exitios/Logo";
import {
  ChevronsLeft,
  ChevronDown,
  LayoutDashboard,
  GitBranch,
  TrendingUp,
  Building2,
  Target,
  Plug,
  FileCheck2,
  Database,
  BarChart3,
  CalendarClock,
  Users,
  CreditCard,
  Settings,
  LifeBuoy,
  LogOut,
  Bot,
} from "lucide-react";

const PRIMARY = [
  { to: "/app", label: "Command Center", icon: LayoutDashboard, end: true },
  { to: "/app/decisions", label: "Decisions", icon: GitBranch },
  { to: "/app/growth", label: "Growth", icon: TrendingUp },
  { to: "/app/sell-side", label: "Sell-Side", icon: Building2 },
  { to: "/app/acquisition", label: "Acquisition", icon: Target },
  { to: "/app/integration", label: "Integration", icon: Plug },
  { to: "/app/evidence", label: "Evidence", icon: FileCheck2 },
  { to: "/app/data-sources", label: "Data Sources", icon: Database },
  { to: "/app/reports", label: "Reports", icon: BarChart3 },
  { to: "/app/reviews", label: "Reviews", icon: CalendarClock },
];

const SECONDARY = [
  { to: "/app/team", label: "Team and Access", icon: Users },
  { to: "/app/billing", label: "Billing", icon: CreditCard },
  { to: "/app/settings", label: "Settings", icon: Settings },
  { to: "/app/help", label: "Help", icon: LifeBuoy },
  { to: "/connect", label: "Connect AI", icon: Bot },
];

function initials(name = "") {
  return name.split(" ").map((s) => s[0]).slice(0, 2).join("").toUpperCase() || "U";
}

export default function Sidebar({ collapsed, onToggleCollapse, className = "" }) {
  const { user, logout } = useAuth();
  const [wsOpen, setWsOpen] = useState(false);
  const name = user?.full_name || user?.email || "User";
  const email = user?.email || "";
  const role = user?.role || "user";

  const linkCls = ({ isActive }) =>
    `flex items-center gap-3 rounded-lg text-[14px] font-medium transition-colors focus-ring ${
      isActive ? "bg-white/10 text-white" : "text-white/65 hover:text-white hover:bg-white/5"
    } ${collapsed ? "justify-center px-2 py-2.5" : "px-3 py-2.5"}`;

  return (
    <aside
      className={`${className || "hidden md:flex"} flex-col bg-[#173044] text-white shrink-0 transition-all duration-200 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className={`flex items-center ${collapsed ? "justify-center" : "justify-between"} h-16 px-3 border-b border-white/10`}>
        <Logo className="h-7" />
        {!collapsed && (
          <button
            onClick={onToggleCollapse}
            className="p-1.5 text-white/60 hover:text-white rounded-lg focus-ring"
            aria-label="Collapse navigation"
          >
            <ChevronsLeft className="w-4 h-4" />
          </button>
        )}
      </div>
      {collapsed && (
        <button
          onClick={onToggleCollapse}
          className="mx-auto mt-2 p-1.5 text-white/60 hover:text-white rounded-lg focus-ring"
          aria-label="Expand navigation"
        >
          <ChevronsLeft className="w-4 h-4 rotate-180" />
        </button>
      )}

      {!collapsed && (
        <div className="px-3 pt-3 relative">
          <button
            onClick={() => setWsOpen((v) => !v)}
            className="w-full flex items-center justify-between gap-2 rounded-lg bg-white/5 hover:bg-white/10 px-3 py-2.5 border border-white/10 focus-ring"
          >
            <div className="text-left min-w-0">
              <p className="text-[11px] text-white/50 uppercase tracking-wide">Workspace</p>
              <p className="text-[13px] font-semibold truncate">{WORKSPACE.name}</p>
            </div>
            <ChevronDown className="w-4 h-4 text-white/50 shrink-0" />
          </button>
          {wsOpen && (
            <div className="absolute left-3 right-3 top-full mt-1 rounded-xl bg-white text-[#173044] shadow-2xl border border-[#D7DEE5] p-3 z-50">
              <p className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wide">{WORKSPACE.org}</p>
              <p className="text-[14px] font-bold mt-1">{WORKSPACE.name}</p>
              <p className="text-[12px] text-[#64748B] mt-0.5">{WORKSPACE.type} · {WORKSPACE.permission}</p>
              <p className="text-[11px] text-[#64748B] mt-2 italic">Records are isolated to this workspace.</p>
            </div>
          )}
        </div>
      )}

      <nav className="flex-1 overflow-y-auto px-2 py-3 space-y-0.5">
        {!collapsed && <p className="px-3 pt-2 pb-1 text-[11px] font-semibold text-white/35 uppercase tracking-wider">Workspace</p>}
        {PRIMARY.map(({ to, label, icon: Icon, end }) => (
          <NavLink key={to} to={to} end={end} className={linkCls} title={collapsed ? label : undefined}>
            <Icon className="w-[18px] h-[18px] shrink-0" />
            {!collapsed && <span className="truncate">{label}</span>}
          </NavLink>
        ))}
        {!collapsed && <p className="px-3 pt-4 pb-1 text-[11px] font-semibold text-white/35 uppercase tracking-wider">Account</p>}
        {SECONDARY.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} className={linkCls} title={collapsed ? label : undefined}>
            <Icon className="w-[18px] h-[18px] shrink-0" />
            {!collapsed && <span className="truncate">{label}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-white/10 p-2">
        {collapsed ? (
          <div className="w-9 h-9 mx-auto rounded-full bg-[#2563EB] flex items-center justify-center text-[12px] font-bold" title={name}>
            {initials(name)}
          </div>
        ) : (
          <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-white/5">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center text-[12px] font-bold shrink-0">
              {initials(name)}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-semibold truncate">{name}</p>
              <p className="text-[11px] text-white/50 truncate">{email}</p>
              <p className="text-[11px] text-white/40 capitalize">{role}</p>
            </div>
            <button
              onClick={() => logout()}
              className="p-1.5 text-white/50 hover:text-white rounded-lg focus-ring"
              aria-label="Sign out"
              title="Sign out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}