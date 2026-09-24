import React from "react";
import { ArrowRight, FileSearch, FileCheck2, Gavel, UserCheck, CalendarClock } from "lucide-react";

const CHAIN = [
  { icon: FileSearch, label: "Finding", value: "Customer-level retention has not been reviewed" },
  { icon: FileCheck2, label: "Evidence", value: "Retention data — not yet collected" },
  { icon: Gavel, label: "Decision", value: "Prioritize retention or acquisition?" },
  { icon: UserCheck, label: "Owner", value: "Unassigned" },
  { icon: CalendarClock, label: "Review", value: "After baseline is established" },
];

export default function DecisionSystem() {
  return (
    <section id="decision" className="relative bg-[#173044] text-white py-20 lg:py-28 overflow-hidden">
      <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
        <div className="max-w-[820px] mb-14">
          <p className="annotation text-[#EEF6FF] mb-3">Decision system</p>
          <h2 className="text-[36px] lg:text-[48px] leading-[1.12] tracking-[-0.02em] font-extrabold mb-4">
            A useful answer should lead somewhere.
          </h2>
          <p className="text-[18px] leading-relaxed text-white/70">
            EXITios connects the finding to the evidence, the evidence to the decision and the
            decision to the work.
          </p>
        </div>

        {/* chain diagram */}
        <div className="flex flex-col lg:flex-row items-stretch gap-3 mb-12">
          {CHAIN.map(({ icon: Icon, label, value }, i) => (
            <div key={label} className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-5 lg:p-6 relative">
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-5 h-5 text-[#2563EB]" />
                <span className="annotation text-[#EEF6FF]">{label}</span>
              </div>
              <p className="text-[15px] font-medium leading-snug text-white">{value}</p>
              {i < CHAIN.length - 1 && (
                <span
                  className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-[#2563EB] z-10"
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        {/* sample decision brief */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div className="bg-white text-[#173044] border border-[#D7DEE5] rounded-2xl p-7 lg:p-8">
              <p className="annotation text-[#2563EB] mb-4">Sample decision brief</p>
              <dl className="space-y-4">
                {[
                  { k: "Decision", v: "Should we prioritize retention or acquisition?" },
                  { k: "Evidence", v: "Customer-level retention data has not yet been reviewed." },
                  { k: "Assumption", v: "Current acquisition economics may be overstated without early-life churn." },
                  { k: "Action", v: "Complete customer retention baseline." },
                  { k: "Owner", v: "Unassigned." },
                  { k: "Review", v: "Schedule after baseline is established." },
                ].map((row) => (
                  <div key={row.k} className="grid grid-cols-3 gap-4 border-b border-[#D7DEE5] pb-3 last:border-b-0">
                    <dt className="text-[13px] font-semibold text-[#64748B] uppercase tracking-wide">{row.k}</dt>
                    <dd className="col-span-2 text-[15px] text-[#173044] leading-relaxed">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-[17px] leading-relaxed text-white/90 mb-6">
              Every finding carries its source, its review state and the person accountable for the
              next step — so a recommendation never stands alone.
            </p>
            <a
              href="#conversion"
              className="inline-flex items-center gap-2 text-[16px] font-semibold text-[#173044] bg-white hover:bg-[#EEF6FF] transition-colors px-6 py-3.5 rounded-lg focus-ring w-fit"
            >
              See the decision workflow
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}