import React, { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import Sidebar from "@/components/anycrm/Sidebar";
import Topbar from "@/components/anycrm/Topbar";
import DashboardView from "@/components/anycrm/DashboardView";
import PipelineView from "@/components/anycrm/PipelineView";
import ContactsView from "@/components/anycrm/ContactsView";
import ActivitiesView from "@/components/anycrm/ActivitiesView";
import ReportsView from "@/components/anycrm/ReportsView";
import SettingsView from "@/components/anycrm/SettingsView";

export default function AnyCRMDashboard() {
  const [view, setView] = useState("dashboard");
  const [user, setUser] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    base44.auth
      .me()
      .then(setUser)
      .catch(() => {});
  }, []);

  const handleLogout = () => base44.auth.logout("/login");
  const go = (v) => {
    setView(v);
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-ramp-muted font-ramp text-ramp-ink">
      <Sidebar view={view} onChange={go} mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="lg:pl-[240px]">
        <Topbar user={user} onMenu={() => setMobileOpen(true)} onLogout={handleLogout} onNewDeal={() => go("pipeline")} />
        <main className="p-5 sm:p-6 lg:p-8">
          {view === "dashboard" && <DashboardView />}
          {view === "pipeline" && <PipelineView />}
          {view === "contacts" && <ContactsView />}
          {view === "activities" && <ActivitiesView />}
          {view === "reports" && <ReportsView />}
          {view === "settings" && <SettingsView user={user} />}
        </main>
      </div>
    </div>
  );
}