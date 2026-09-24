import React from "react";
import { ArrowRight, MessageSquare, FileText, Upload, Plug, UserPlus } from "lucide-react";

const PATHS = [
  { icon: MessageSquare, label: "Answer a few questions" },
  { icon: FileText, label: "Use an EXITios template" },
  { icon: Upload, label: "Upload a report" },
  { icon: Plug, label: "Connect a supported source" },
  { icon: UserPlus, label: "Request guided setup" },
];

const FLOW = ["No data", "Owner-reported", "Uploaded", "Reviewed", "Reconciled", "Verified in workspace"];

export default function NoIntegration() {
  return (
    <section id="no-integration" className="bg-[#F5F0E8] py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <div className="max-w-[760px] mb-12">
          <p className="annotation text-[#2563EB] mb-3">No integration required</p>
          <h2 className="text-[36px] lg:text-[48px] leading-[1.12] tracking-[-0.02em] font-extrabold text-[#173044] mb-4">
            Start with what you have.
          </h2>
          <p className="text-[18px] leading-relaxed text-[#243C4F]">
            You do not need a CRM, clean spreadsheet or finance background to begin using EXITios.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {PATHS.map(({ icon: Icon, label }, i) => (
            <div key={label} className="bg-white border border-[#D7DEE5] rounded-xl p-5 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-3">
                <span className="annotation text-[#64748B]">0{i + 1}</span>
                <Icon className="w-5 h-5 text-[#2563EB]" />
              </div>
              <p className="text-[15px] font-semibold text-[#173044] leading-snug">{label}</p>
            </div>
          ))}
        </div>

        {/* reliability flow */}
        <div className="bg-white border border-[#D7DEE5] rounded-2xl p-6 lg:p-8">
          <p className="annotation text-[#64748B] mb-5">
            How evidence becomes reliable — labels distinguish source and review state
          </p>
          <div className="flex flex-wrap items-center gap-y-3">
            {FLOW.map((step, i) => (
              <span key={step} className="inline-flex items-center">
                <span
                  className={`text-[14px] font-semibold px-3.5 py-2 rounded-full ${
                    step === "Verified in workspace"
                      ? "bg-[#0F766E] text-white"
                      : step === "Reviewed" || step === "Reconciled"
                      ? "bg-[#EEF6FF] text-[#2563EB] border border-[#2563EB]"
                      : "bg-[#F7F8F8] text-[#243C4F] border border-[#D7DEE5]"
                  }`}
                >
                  {step}
                </span>
                {i < FLOW.length - 1 && (
                  <span className="text-[#D7DEE5] mx-1 select-none" aria-hidden="true">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
          <p className="mt-5 text-[13px] text-[#64748B]">
            Owner-reported · Illustrative · Public source · Uploaded · Reviewed · Verified in
            workspace — never imply that all data has the same reliability.
          </p>
        </div>

        <a
          href="#conversion"
          className="inline-flex items-center gap-2 mt-8 text-[16px] font-semibold text-white bg-[#173044] hover:bg-[#243C4F] transition-colors px-6 py-3.5 rounded-lg focus-ring"
        >
          Build my starting point
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}