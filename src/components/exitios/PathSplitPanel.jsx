import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Building2, Search, Users, CircleDot } from "lucide-react";

const PATHS = [
  {
    key: "Grow",
    icon: TrendingUp,
    copy: "Find the operating levers that influence revenue quality, customer value, retention, margin and capacity.",
    decision: "Which operating lever deserves attention first?",
    evidence: "Inputs needed",
    next: "Build customer economics baseline",
    workflow: "Growth workspace",
  },
  {
    key: "Sell",
    icon: Building2,
    copy: "Build the financial clarity, management continuity and evidence trail buyers expect.",
    decision: "What could slow down buyer diligence?",
    evidence: "Review required",
    next: "Create sell-side readiness plan",
    workflow: "Sell-side readiness",
  },
  {
    key: "Buy",
    icon: Search,
    copy: "Move from target screening to diligence, decision conditions and integration planning.",
    decision: "What needs to be validated before advancing the deal?",
    evidence: "Open questions",
    next: "Open diligence brief",
    workflow: "Acquisition workspace",
  },
  {
    key: "Advise",
    icon: Users,
    copy: "Give each client a separate workspace, a clear decision path and accountable next steps.",
    decision: "What does the client need to move forward?",
    evidence: "Not started",
    next: "Create client workspace",
    workflow: "Advisor workspace",
  },
];

export default function PathSplitPanel() {
  const [active, setActive] = useState("Grow");
  const p = PATHS.find((x) => x.key === active);

  return (
    <section id="paths" className="bg-white py-20 lg:py-28 border-t border-[#E4E9EF]">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <div className="max-w-[720px] mb-12">
          <p className="text-[11px] fw-550 uppercase tracking-[0.12em] text-[#2563EB] mb-3">Product paths</p>
          <h2 className="text-[28px] sm:text-[32px] lg:text-[38px] fw-600 tracking-[-0.035em] leading-[1.1] text-[#173044]">
            One platform. Four ways to move forward.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
          {/* vertical selector */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 lg:flex lg:flex-col gap-2 pb-1">
              {PATHS.map(({ key, icon: Icon }) => {
                const isActive = active === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActive(key)}
                    aria-pressed={isActive}
                    className={`flex items-center gap-3 rounded-[14px] border px-4 py-3.5 text-left transition-all duration-200 focus-ring lg:min-w-0 ${
                      isActive
                        ? "bg-[#173044] border-[#173044] text-white"
                        : "bg-[#F7F8F8] border-[#E4E9EF] hover:border-[#173044] text-[#173044]"
                    }`}
                  >
                    <span className={`w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0 ${isActive ? "bg-white/10 text-white" : "bg-white text-[#2563EB] border border-[#E4E9EF]"}`}>
                      <Icon className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-[15px] fw-600">{key}</p>
                      <p className={`text-[12px] fw-450 ${isActive ? "text-white/60" : "text-[#64748B]"}`}>{key === "Grow" ? "Grow value" : key === "Sell" ? "Prepare to sell" : key === "Buy" ? "Evaluate a deal" : "Advise clients"}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* contextual panel */}
          <div className="lg:col-span-8">
            <div className="bg-[#F7F8F8] border border-[#E4E9EF] rounded-[14px] p-6 lg:p-8">
              <p className="text-[11px] fw-550 uppercase tracking-[0.12em] text-[#2563EB]">{p.key}</p>
              <h3 className="mt-2 text-[20px] lg:text-[22px] fw-600 tracking-[-0.01em] text-[#173044] leading-snug">
                {p.copy}
              </h3>

              <div className="mt-5 bg-white border border-[#E4E9EF] rounded-[14px] p-4">
                <p className="text-[11px] fw-550 uppercase tracking-[0.08em] text-[#64748B]">Sample decision</p>
                <p className="mt-1.5 text-[16px] fw-600 text-[#173044] tracking-[-0.01em]">{p.decision}</p>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#E4E9EF]">
                  <div>
                    <p className="text-[10px] fw-550 uppercase tracking-[0.08em] text-[#64748B]">Evidence</p>
                    <p className="text-[13px] fw-550 mt-0.5 text-[#B7791F] flex items-center gap-1"><CircleDot className="w-3 h-3" />{p.evidence}</p>
                  </div>
                  <div>
                    <p className="text-[10px] fw-550 uppercase tracking-[0.08em] text-[#64748B]">Next action</p>
                    <p className="text-[13px] fw-550 mt-0.5 text-[#173044]">{p.next}</p>
                  </div>
                  <div>
                    <p className="text-[10px] fw-550 uppercase tracking-[0.08em] text-[#64748B]">Workflow</p>
                    <p className="text-[13px] fw-550 mt-0.5 text-[#173044]">{p.workflow}</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-[12px] fw-450 text-[#64748B] italic">Illustrative workspace — sample information.</span>
                <Link to="/register?returnTo=%2Fapp" className="inline-flex items-center gap-2 text-[14px] fw-550 text-white bg-[#2563EB] hover:bg-[#1d4ed8] active:scale-[0.98] transition-all duration-200 px-4 py-2.5 rounded-lg focus-ring">
                  Start {p.key.toLowerCase()} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}