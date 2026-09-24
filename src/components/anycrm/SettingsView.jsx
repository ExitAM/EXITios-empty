import React from "react";
import { User as UserIcon, Building2, Bell } from "lucide-react";

const inputCls =
  "w-full h-10 px-3 rounded-lg bg-ramp-muted border border-ramp-line text-[14px] text-ramp-ink outline-none focus:border-ramp-green focus:bg-white transition-colors";

function Field({ label, children }) {
  return (
    <div>
      <label className="text-[13px] font-medium text-ramp-ink/70 mb-1.5 block">{label}</label>
      {children}
    </div>
  );
}

const TOGGLES = [
  ["Deal stage changes", true],
  ["New contact added", true],
  ["Weekly performance digest", false],
];

export default function SettingsView({ user }) {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-[24px] font-semibold tracking-tight text-ramp-ink">Settings</h1>
        <p className="text-[14px] text-ramp-ink/50">Manage your profile and workspace.</p>
      </div>

      <section className="bg-ramp-surface border border-ramp-line rounded-2xl p-6">
        <h3 className="flex items-center gap-2 text-[15px] font-semibold text-ramp-ink mb-4">
          <UserIcon className="w-4 h-4 text-ramp-green-dark" /> Profile
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Full name"><input className={inputCls} defaultValue={user?.full_name || ""} placeholder="Your name" /></Field>
          <Field label="Email"><input className={inputCls} defaultValue={user?.email || ""} placeholder="you@company.com" /></Field>
          <Field label="Title"><input className={inputCls} defaultValue="Account Executive" /></Field>
          <Field label="Phone"><input className={inputCls} defaultValue="(415) 555-0142" /></Field>
        </div>
      </section>

      <section className="bg-ramp-surface border border-ramp-line rounded-2xl p-6">
        <h3 className="flex items-center gap-2 text-[15px] font-semibold text-ramp-ink mb-4">
          <Building2 className="w-4 h-4 text-ramp-green-dark" /> Workspace
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Workspace name"><input className={inputCls} defaultValue="AnyCRM Inc." /></Field>
          <Field label="Currency"><input className={inputCls} defaultValue="USD ($)" /></Field>
        </div>
      </section>

      <section className="bg-ramp-surface border border-ramp-line rounded-2xl p-6">
        <h3 className="flex items-center gap-2 text-[15px] font-semibold text-ramp-ink mb-4">
          <Bell className="w-4 h-4 text-ramp-green-dark" /> Notifications
        </h3>
        <div className="space-y-3">
          {TOGGLES.map(([label, on]) => (
            <label key={label} className="flex items-center justify-between py-1 cursor-pointer">
              <span className="text-[14px] text-ramp-ink/80">{label}</span>
              <input
                type="checkbox"
                defaultChecked={on}
                className="w-9 h-5 appearance-none rounded-full bg-ramp-line relative transition-colors checked:bg-ramp-green before:content-[''] before:absolute before:top-0.5 before:left-0.5 before:w-4 before:h-4 before:rounded-full before:bg-white before:transition-transform checked:before:translate-x-4"
              />
            </label>
          ))}
        </div>
      </section>

      <div className="flex justify-end gap-3">
        <button className="h-10 px-4 rounded-lg border border-ramp-line text-[14px] font-semibold text-ramp-ink/70 hover:bg-ramp-muted">
          Cancel
        </button>
        <button className="h-10 px-4 rounded-lg bg-ramp-green hover:bg-ramp-green-dark text-ramp-green-fg text-[14px] font-semibold">
          Save changes
        </button>
      </div>
    </div>
  );
}