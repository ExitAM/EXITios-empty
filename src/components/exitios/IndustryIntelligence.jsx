import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const INDUSTRIES = {
  "Home and field services": {
    headline: "Make recurring service more valuable.",
    levers: ["Customer retention", "Revenue per customer", "Route capacity"],
    decision: "Should the next dollar go to retention, service mix or acquisition?",
    evidence: "Monthly customer counts, cancellations, service type and contribution.",
    workflow: "Growth workspace — recurring service",
  },
  "Specialty contracting": {
    headline: "Protect margin across every project.",
    levers: ["Project gross margin", "Backlog", "Labor utilization"],
    decision: "Which trade or project type should we scale, hold or exit?",
    evidence: "Project-level revenue, estimated vs. actual margin, backlog by trade.",
    workflow: "Growth workspace — project-based",
  },
  Manufacturing: {
    headline: "Find the next dollar of contribution.",
    levers: ["Unit contribution", "Throughput", "Inventory turns"],
    decision: "Where should we invest capacity — product, line or segment?",
    evidence: "Product-level contribution, utilization and order history.",
    workflow: "Growth workspace — production",
  },
  "B2B managed services": {
    headline: "Grow contracts that compound.",
    levers: ["Contract retention", "Expansion revenue", "Delivery cost"],
    decision: "Which accounts deserve expansion versus stabilization?",
    evidence: "Account-level revenue, renewal status and delivery cost.",
    workflow: "Growth workspace — managed service",
  },
  "Healthcare practices": {
    headline: "Improve care and economics together.",
    levers: ["Patient retention", "Revenue per visit", "Provider utilization"],
    decision: "Add capacity, change mix or improve retention first?",
    evidence: "Visit volume, payer mix, no-show rate and provider productivity.",
    workflow: "Growth workspace — practice",
  },
  "Veterinary and pet services": {
    headline: "Build loyalty across every visit.",
    levers: ["Client retention", "Revenue per client", "Service mix"],
    decision: "Which service line should we grow to lift lifetime value?",
    evidence: "Client visit frequency, service mix and contribution by location.",
    workflow: "Growth workspace — pet services",
  },
  "Retail and consumer products": {
    headline: "Turn channels into contribution.",
    levers: ["Channel margin", "Repeat rate", "Inventory productivity"],
    decision: "Which channel or product deserves the next investment?",
    evidence: "Channel-level revenue, margin and repeat purchase rate.",
    workflow: "Growth workspace — consumer",
  },
};

export default function IndustryIntelligence() {
  const keys = Object.keys(INDUSTRIES);
  const [active, setActive] = useState(keys[0]);
  const d = INDUSTRIES[active];

  return (
    <section id="industry" className="bg-white py-20 lg:py-28 border-t border-[#E4E9EF]">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <div className="max-w-[720px] mb-10">
          <p className="text-[11px] fw-550 uppercase tracking-[0.12em] text-[#2563EB] mb-3">Industry intelligence</p>
          <h2 className="text-[28px] sm:text-[32px] lg:text-[38px] fw-600 tracking-[-0.035em] leading-[1.1] text-[#173044]">
            Your industry changes the right question.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 lg:flex lg:flex-col gap-1.5 pb-1">
              {keys.map((k) => {
                const isActive = active === k;
                return (
                  <button
                    key={k}
                    onClick={() => setActive(k)}
                    aria-pressed={isActive}
                    className={`text-left text-[13px] fw-550 px-3.5 py-2.5 rounded-[10px] border transition-all duration-200 whitespace-normal focus-ring ${
                      isActive ? "bg-[#173044] border-[#173044] text-white" : "bg-[#F7F8F8] border-[#E4E9EF] hover:border-[#173044] text-[#243C4F]"
                    }`}
                  >
                    {k}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-[#F7F8F8] border border-[#E4E9EF] rounded-[14px] p-6 lg:p-8">
              <h3 className="text-[20px] lg:text-[22px] fw-600 tracking-[-0.01em] text-[#173044] leading-snug">{d.headline}</h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {d.levers.map((l) => (
                  <span key={l} className="text-[12px] fw-550 text-[#173044] bg-white border border-[#E4E9EF] rounded-full px-3 py-1">{l}</span>
                ))}
              </div>
              <div className="mt-5 grid sm:grid-cols-2 gap-3">
                <div className="bg-white border border-[#E4E9EF] rounded-[14px] p-4">
                  <p className="text-[10px] fw-550 uppercase tracking-[0.08em] text-[#64748B]">Sample decision</p>
                  <p className="mt-1 text-[14px] fw-600 text-[#173044] tracking-[-0.01em]">{d.decision}</p>
                </div>
                <div className="bg-white border border-[#E4E9EF] rounded-[14px] p-4">
                  <p className="text-[10px] fw-550 uppercase tracking-[0.08em] text-[#64748B]">Evidence required</p>
                  <p className="mt-1 text-[14px] fw-450 text-[#173044]">{d.evidence}</p>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-[#E4E9EF] pt-4">
                <p className="text-[13px] fw-550 text-[#173044]">{d.workflow}</p>
                <a href="#command" className="inline-flex items-center gap-1.5 text-[14px] fw-550 text-[#2563EB] hover:underline focus-ring">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="mt-3 text-[12px] fw-450 text-[#64748B] italic">Illustrative — sample information.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}