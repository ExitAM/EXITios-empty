import React from "react";
import { ArrowRight, FileSearch, Calculator, Lock, ShieldCheck } from "lucide-react";

const LINKS = [
  { icon: FileSearch, label: "Review evidence" },
  { icon: Calculator, label: "Understand calculations" },
  { icon: Lock, label: "Review workspace access" },
  { icon: ShieldCheck, label: "Visit Trust Center" },
];

export default function TrustControl() {
  return (
    <section id="trust" className="bg-[#F7F8F8] py-20 lg:py-28 border-t border-[#D7DEE5]">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <div className="max-w-[760px] mb-12">
          <p className="annotation text-[#2563EB] mb-3">Trust and control</p>
          <h2 className="text-[36px] lg:text-[48px] leading-[1.12] tracking-[-0.02em] font-extrabold text-[#173044] mb-4">
            Confidence should come with something to inspect.
          </h2>
          <p className="text-[18px] leading-relaxed text-[#243C4F]">
            See the information behind the recommendation, the assumptions behind the calculation
            and the people authorized to access the work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {LINKS.map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#trust"
              className="bg-white border border-[#D7DEE5] rounded-2xl p-6 flex flex-col items-start group focus-ring"
            >
              <Icon className="w-6 h-6 text-[#2563EB] mb-4" />
              <span className="text-[16px] font-semibold text-[#173044] group-hover:text-[#2563EB] transition-colors">
                {label}
              </span>
              <ArrowRight className="w-4 h-4 text-[#64748B] mt-3 group-hover:text-[#2563EB] transition-colors" />
            </a>
          ))}
        </div>

        <div className="bg-white border-l-2 border-[#0F766E] rounded-r-lg p-6 lg:p-8 max-w-[920px]">
          <p className="text-[16px] lg:text-[17px] leading-relaxed text-[#173044]">
            EXITios distinguishes facts, assumptions, projections, recommendations and unreviewed
            findings. No production result should be presented as verified without a corresponding
            review state.
          </p>
        </div>

        <a
          href="#trust"
          className="inline-flex items-center gap-2 mt-8 text-[16px] font-semibold text-white bg-[#173044] hover:bg-[#243C4F] transition-colors px-6 py-3.5 rounded-lg focus-ring"
        >
          Review EXITios Trust Center
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}