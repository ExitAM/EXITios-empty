import React from "react";
import { useNavigate } from "react-router-dom";
import { WORKSPACE_PAGES } from "@/lib/app-data";
import { ArrowRight, Lock } from "lucide-react";

export default function WorkspacePage({ kind }) {
  const navigate = useNavigate();
  const cfg = WORKSPACE_PAGES[kind];
  if (!cfg) return null;

  return (
    <div className="px-4 lg:px-6 py-6 max-w-[1280px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5">
        <div>
          <h2 className="text-[26px] font-extrabold text-[#173044] tracking-[-0.01em]">{cfg.title}</h2>
          <p className="text-[15px] text-[#64748B] mt-1">{cfg.subheading}</p>
        </div>
        <button
          onClick={() => navigate(cfg.ctaTo)}
          className="inline-flex items-center gap-2 text-[14px] font-semibold bg-[#2563EB] text-white hover:bg-[#1d4ed8] px-4 py-2.5 rounded-lg focus-ring"
        >
          {cfg.cta}
        </button>
      </div>

      {cfg.separation && (
        <div className="flex items-start gap-2 rounded-2xl border border-[#E5DCC8] bg-[#F5F0E8] px-5 py-4 mb-5">
          <Lock className="w-5 h-5 text-[#173044] shrink-0 mt-0.5" />
          <div>
            <p className="text-[14px] font-bold text-[#173044]">Client workspaces are strictly separated.</p>
            <p className="text-[13px] text-[#243C4F] mt-0.5">No cross-client search, shared evidence or shared AI context by default. Switching clients is an explicit action.</p>
          </div>
        </div>
      )}

      {cfg.maturity && (
        <div className="bg-white border border-[#D7DEE5] rounded-2xl p-5 mb-5">
          <p className="text-[12px] font-semibold text-[#64748B] uppercase tracking-wide mb-3">Readiness maturity</p>
          <div className="flex flex-wrap items-center gap-y-2">
            {cfg.maturity.map((m, i) => (
              <span key={m} className="inline-flex items-center">
                <span className={`text-[12px] font-semibold px-3 py-1.5 rounded-full border ${i === 0 ? "bg-[#173044] text-white border-[#173044]" : "bg-white text-[#243C4F] border-[#D7DEE5]"}`}>{m}</span>
                {i < cfg.maturity.length - 1 && <span className="text-[#D7DEE5] mx-1 select-none" aria-hidden="true">→</span>}
              </span>
            ))}
          </div>
        </div>
      )}

      {cfg.dealStages && (
        <div className="bg-white border border-[#D7DEE5] rounded-2xl p-5 mb-5">
          <p className="text-[12px] font-semibold text-[#64748B] uppercase tracking-wide mb-3">Deal stages</p>
          <div className="flex flex-wrap items-center gap-y-2">
            {cfg.dealStages.map((s, i) => (
              <span key={s} className="inline-flex items-center">
                <span className={`text-[12px] font-semibold px-3 py-1.5 rounded-full border ${i === 0 ? "bg-[#173044] text-white border-[#173044]" : "bg-white text-[#243C4F] border-[#D7DEE5]"}`}>{s}</span>
                {i < cfg.dealStages.length - 1 && <span className="text-[#D7DEE5] mx-1 select-none" aria-hidden="true">→</span>}
              </span>
            ))}
          </div>
          <p className="text-[12px] text-[#64748B] mt-3">Each deal connects: Target → Thesis → Evidence → Risks → Decision → Conditions → Integration actions.</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cfg.sections.map((s) => (
          <div key={s.name} className="bg-white border border-[#D7DEE5] rounded-2xl p-5 flex flex-col">
            <p className="text-[15px] font-bold text-[#173044]">{s.name}</p>
            <p className="text-[13px] text-[#64748B] mt-1 flex-1">{s.why}</p>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#D7DEE5]">
              <span className="text-[12px] text-[#64748B] italic">No records yet.</span>
              <button onClick={() => navigate(s.to)} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#2563EB] hover:underline focus-ring">
                {s.next} <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}