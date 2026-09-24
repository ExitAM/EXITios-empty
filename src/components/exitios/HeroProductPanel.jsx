import React, { useState } from "react";
import { ArrowRight, CircleDot, Activity } from "lucide-react";

const TABS = [
  {
    key: "Grow",
    decision: "Should we prioritize retention, margin or new customer acquisition?",
    evidence: "Inputs needed",
    owner: "Unassigned",
    review: "Preliminary",
    next: "Build revenue-quality baseline",
    workflow: "Growth workspace",
    button: "Open growth example",
  },
  {
    key: "Sell",
    decision: "What could slow down buyer diligence?",
    evidence: "Review required",
    owner: "Unassigned",
    review: "Preliminary",
    next: "Create sell-side readiness plan",
    workflow: "Sell-side readiness",
    button: "Preview readiness",
  },
  {
    key: "Buy",
    decision: "What needs to be validated before advancing the deal?",
    evidence: "Open questions",
    owner: "Unassigned",
    review: "Preliminary",
    next: "Open diligence brief",
    workflow: "Acquisition workspace",
    button: "Open diligence brief",
  },
  {
    key: "Advise",
    decision: "What does the client need to move forward?",
    evidence: "Not started",
    owner: "Unassigned",
    review: "Preliminary",
    next: "Create client workspace",
    workflow: "Advisor workspace",
    button: "Create client workspace",
  },
];

const SIDEBAR = ["Command Center", "Decisions", "Evidence", "Reports"];

export default function HeroProductPanel() {
  const [active, setActive] = useState("Grow");
  const tab = TABS.find((t) => t.key === active);

  return (
    <div className="bg-white border border-[#E4E9EF] rounded-[14px] shadow-[0_24px_60px_-24px_rgba(16,42,67,0.18)] overflow-hidden">
      <div className="flex">
        {/* navy sidebar */}
        <aside className="hidden sm:flex flex-col w-[148px] bg-[#173044] text-white p-3.5 shrink-0">
          <p className="text-[11px] fw-550 uppercase tracking-[0.08em] text-white/45">Workspace</p>
          <p className="text-[13px] fw-600 mt-0.5">Growth Workspace</p>
          <p className="text-[11px] fw-450 text-white/55 mt-2">Objective</p>
          <p className="text-[12px] fw-550 text-white/85">Grow value</p>
          <div className="flex items-center gap-1.5 mt-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5F0E8]" />
            <span className="text-[11px] fw-450 text-white/70">Updated · Owner-reported</span>
          </div>
          <nav className="mt-5 space-y-0.5">
            {SIDEBAR.map((s, i) => (
              <div key={s} className={`text-[12px] fw-550 px-2 py-1.5 rounded-md ${i === 0 ? "bg-white/10 text-white" : "text-white/55"}`}>
                {s}
              </div>
            ))}
          </nav>
        </aside>

        {/* main */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between px-4 lg:px-5 pt-3.5 pb-0">
            <div role="tablist" aria-label="Workstream" className="flex gap-1">
              {TABS.map((t) => (
                <button
                  key={t.key}
                  role="tab"
                  aria-selected={active === t.key}
                  onClick={() => setActive(t.key)}
                  className={`text-[13px] fw-550 px-3 py-1.5 rounded-md transition-colors duration-200 focus-ring ${
                    active === t.key ? "bg-[#173044] text-white" : "text-[#64748B] hover:text-[#173044] hover:bg-[#F7F8F8]"
                  }`}
                >
                  {t.key}
                </button>
              ))}
            </div>
            <span className="hidden sm:inline text-[10px] fw-550 uppercase tracking-[0.08em] text-[#64748B]">Illustrative · Sample</span>
          </div>

          <div className="px-4 lg:px-5 pb-4 pt-3">
            <p className="text-[11px] fw-550 uppercase tracking-[0.12em] text-[#64748B]">Your next decision</p>

            {/* featured decision */}
            <div className="mt-2 bg-[#F7F8F8] border border-[#E4E9EF] rounded-[14px] p-4">
              <p className="text-[16px] lg:text-[17px] fw-600 tracking-[-0.01em] text-[#173044] leading-snug">
                {tab.decision}
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  ["Evidence", tab.evidence, true],
                  ["Owner", tab.owner, false],
                  ["Review", tab.review, false],
                ].map(([k, v, warn]) => (
                  <div key={k}>
                    <p className="text-[10px] fw-550 uppercase tracking-[0.08em] text-[#64748B]">{k}</p>
                    <p className={`text-[13px] fw-550 mt-0.5 flex items-center gap-1 ${warn ? "text-[#B7791F]" : "text-[#173044]"}`}>
                      {warn && <CircleDot className="w-3 h-3" />}{v}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* operational rows */}
            <div className="mt-3 divide-y divide-[#E4E9EF] border-y border-[#E4E9EF]">
              {[
                ["Customer retention", "Needs evidence", "Add monthly customer data"],
                ["Revenue per customer", "Owner-reported", "Separate by segment"],
                ["Pricing", "Needs review", "Reconcile realized price"],
              ].map(([title, state, next]) => (
                <div key={title} className="flex items-center justify-between py-2.5">
                  <div className="min-w-0">
                    <p className="text-[13px] fw-600 text-[#173044] truncate">{title}</p>
                    <p className="text-[12px] fw-450 text-[#64748B] truncate">Next: {next}</p>
                  </div>
                  <span className={`text-[11px] fw-550 px-2 py-1 rounded-full border ${state === "Needs evidence" ? "bg-[#FEF6E7] text-[#B7791F] border-[#F1D9A0]" : state === "Needs review" ? "bg-[#EEF6FF] text-[#2563EB] border-[#BFDBFE]" : "bg-[#F5F0E8] text-[#243C4F] border-[#E5DCC8]"}`}>
                    {state}
                  </span>
                </div>
              ))}
            </div>

            {/* trend + action */}
            <div className="mt-3 flex items-end justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span className="text-[11px] fw-550 uppercase tracking-[0.08em] text-[#64748B]">Retention trend</span>
                </div>
                <svg viewBox="0 0 120 40" className="w-full h-9 mt-1" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#2563EB" stopOpacity="0.16" />
                      <stop offset="1" stopColor="#2563EB" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,30 L20,28 L40,24 L60,26 L80,18 L100,14 L120,10 L120,40 L0,40 Z" fill="url(#spark)" />
                  <polyline points="0,30 20,28 40,24 60,26 80,18 100,14 120,10" fill="none" stroke="#2563EB" strokeWidth="1.5" />
                </svg>
              </div>
              <button className="inline-flex items-center gap-1.5 text-[13px] fw-550 text-white bg-[#173044] hover:bg-[#243C4F] active:scale-[0.98] transition-all duration-200 px-3.5 py-2 rounded-lg focus-ring shrink-0">
                {tab.button} <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="mt-3 text-[11px] fw-450 text-[#64748B] italic">
              {tab.workflow} · Illustrative workspace — sample information.
            </p>
          </div>
        </div>
      </div>

      {/* bottom callout */}
      <div className="bg-[#F7F8F8] border-t border-[#E4E9EF] px-4 lg:px-5 py-2.5 flex items-center justify-between">
        <span className="text-[12px] fw-550 text-[#173044]">Start with what you have.</span>
        <span className="text-[11px] fw-450 text-[#64748B]">No integration required</span>
      </div>
    </div>
  );
}