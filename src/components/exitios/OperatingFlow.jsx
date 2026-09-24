import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const STAGES = [
  { n: "1", label: "Answer questions", copy: "Begin with the minimum questions for a useful starting point — no spreadsheet required." },
  { n: "2", label: "Add a template", copy: "Start from a structured template tuned to your industry and revenue model." },
  { n: "3", label: "Review evidence", copy: "EXITios labels the source and review state for every finding you add." },
  { n: "4", label: "Make a decision", copy: "See the question, evidence, assumptions and next action in one place." },
  { n: "5", label: "Assign the next action", copy: "Give the work an owner, a due date and a review so it stays accountable." },
];

export default function OperatingFlow() {
  const [active, setActive] = useState(0);
  return (
    <section className="bg-[#F7F8F8] py-20 lg:py-28 border-t border-[#E4E9EF]">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <div className="max-w-[720px] mb-12">
          <p className="text-[11px] fw-550 uppercase tracking-[0.12em] text-[#2563EB] mb-3">Start with what you have</p>
          <h2 className="text-[28px] sm:text-[32px] lg:text-[38px] fw-600 tracking-[-0.035em] leading-[1.1] text-[#173044]">
            A better starting point for businesses without perfect data.
          </h2>
        </div>

        {/* horizontal flow */}
        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-stretch sm:gap-1 pb-2">
          {STAGES.map((s, i) => {
            const isActive = active === i;
            return (
              <React.Fragment key={s.n}>
                <button
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`w-full sm:flex-1 sm:min-w-[150px] text-left rounded-[14px] border px-4 py-3 transition-all duration-200 focus-ring ${
                    isActive
                      ? "bg-[#173044] border-[#173044] text-white shadow-[0_8px_24px_-12px_rgba(16,42,67,0.3)]"
                      : "bg-white border-[#E4E9EF] hover:border-[#173044] text-[#173044]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] fw-600 ${isActive ? "bg-white/15 text-white" : "bg-[#F7F8F8] text-[#64748B] border border-[#E4E9EF]"}`}>
                      {isActive ? <Check className="w-3 h-3" /> : s.n}
                    </span>
                    <span className="text-[13px] fw-550">{s.label}</span>
                  </div>
                </button>
                {i < STAGES.length - 1 && (
                  <span className="self-center text-[#C2CCD8] select-none px-0.5 rotate-90 sm:rotate-0" aria-hidden="true">→</span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* contextual explanation */}
        <div className="mt-4 bg-white border border-[#E4E9EF] rounded-[14px] px-5 py-4 flex items-start gap-3">
          <span className="w-7 h-7 rounded-full bg-[#EEF6FF] text-[#2563EB] flex items-center justify-center text-[12px] fw-600 shrink-0">
            {STAGES[active].n}
          </span>
          <div>
            <p className="text-[15px] fw-600 text-[#173044]">{STAGES[active].label}</p>
            <p className="text-[14px] fw-450 text-[#243C4F] mt-0.5 leading-relaxed">{STAGES[active].copy}</p>
          </div>
        </div>

        <div className="mt-7">
          <Link to="/register?returnTo=%2Fapp" className="inline-flex items-center gap-2 text-[15px] fw-550 text-white bg-[#2563EB] hover:bg-[#1d4ed8] active:scale-[0.98] transition-all duration-200 px-5 py-2.5 rounded-lg focus-ring">
            Build my starting point <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}