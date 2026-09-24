import React from "react";
import { ArrowRight, LayoutDashboard, Archive, BarChart3, ListChecks, Sparkles } from "lucide-react";

const CAPS = [
  { icon: LayoutDashboard, title: "Decision center", copy: "Make the decision visible, owned and reviewable." },
  { icon: Archive, title: "Evidence room", copy: "Source, period, review state and permissions stay attached to the work." },
  { icon: BarChart3, title: "Industry scorecards", copy: "The right definitions and measures for the business model." },
  { icon: ListChecks, title: "Action management", copy: "Turn findings into assignments, dates and outcomes." },
];

export default function PlatformCapabilities() {
  return (
    <section id="capabilities" className="bg-[#F7F8F8] py-20 lg:py-28 border-t border-[#E4E9EF]">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <div className="max-w-[720px] mb-10">
          <p className="text-[11px] fw-550 uppercase tracking-[0.12em] text-[#2563EB] mb-3">Platform</p>
          <h2 className="text-[28px] sm:text-[32px] lg:text-[38px] fw-600 tracking-[-0.035em] leading-[1.1] text-[#173044]">
            Everything important stays connected.
          </h2>
        </div>

        <div className="bg-[#EEF6FF] border border-[#BFDBFE] rounded-[14px] p-6 lg:p-8">
          <div className="divide-y divide-[#BFDBFE]/60">
            {CAPS.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                <span className="w-9 h-9 rounded-[10px] bg-white text-[#2563EB] border border-[#BFDBFE] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-[16px] fw-600 text-[#173044]">{title}</p>
                  <p className="text-[14px] fw-450 text-[#243C4F] mt-0.5">{copy}</p>
                </div>
              </div>
            ))}
          </div>

          {/* AI row */}
          <div className="mt-5 pt-5 border-t border-[#BFDBFE]/60 flex items-start gap-4">
            <span className="w-9 h-9 rounded-[10px] bg-[#173044] text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </span>
            <div className="flex-1">
              <p className="text-[16px] fw-600 text-[#173044]">AI assistance, grounded in your workspace</p>
              <p className="text-[14px] fw-450 text-[#243C4F] mt-0.5">
                Ask questions about authorized information, inspect evidence and draft the next action. Outputs carry a review state and never appear verified without one.
              </p>
            </div>
            <a href="#command" className="hidden sm:inline-flex items-center gap-1.5 text-[14px] fw-550 text-[#2563EB] hover:underline focus-ring shrink-0">
              See it <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}