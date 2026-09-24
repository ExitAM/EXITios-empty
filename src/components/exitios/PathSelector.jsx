import React, { useState } from "react";
import { ArrowRight, TrendingUp, Building2, Search, Users } from "lucide-react";

const CARDS = [
  {
    key: "Grow",
    icon: TrendingUp,
    title: "Grow with more confidence.",
    copy: "Find the operating levers that matter most across pricing, retention, customer economics, margin and capacity.",
    cta: "Explore Growth",
    brief: {
      lever: "Customer economics",
      state: "Inputs needed",
      next: "Complete revenue-quality baseline",
    },
  },
  {
    key: "Sell",
    icon: Building2,
    title: "Prepare before you sell.",
    copy: "Organize financial clarity, customer concentration, management continuity and buyer questions before formal diligence begins.",
    cta: "Explore Sell-Side Readiness",
    brief: {
      lever: "Financial clarity",
      state: "Review required",
      next: "Build readiness checklist",
    },
  },
  {
    key: "Buy",
    icon: Search,
    title: "Buy with conviction.",
    copy: "Screen opportunities, structure diligence, preserve the investment case and carry findings into integration.",
    cta: "Explore Buy-Side Diligence",
    brief: {
      lever: "Recurring revenue quality",
      state: "Open questions",
      next: "Create diligence brief",
    },
  },
  {
    key: "Advise",
    icon: Users,
    title: "Give every client a clearer next step.",
    copy: "Manage client-specific workspaces, evidence requests, decisions and review cadences without mixing confidential information.",
    cta: "Explore Advisor Workspaces",
    brief: {
      lever: "Client-specific workspace",
      state: "Not started",
      next: "Create client workspace",
    },
  },
];

export default function PathSelector() {
  const [selected, setSelected] = useState("Grow");
  const active = CARDS.find((c) => c.key === selected);

  return (
    <section id="path" className="bg-[#F7F8F8] py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <div className="max-w-[760px] mb-12">
          <p className="annotation text-[#2563EB] mb-3">Product paths</p>
          <h2 className="text-[36px] lg:text-[48px] leading-[1.12] tracking-[-0.02em] font-extrabold text-[#173044] mb-4">
            One platform. Four ways to move forward.
          </h2>
          <p className="text-[18px] leading-relaxed text-[#243C4F]">
            Start with the decision in front of you. EXITios gives you the right workflow,
            evidence requirements and next actions for the work ahead.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CARDS.map(({ key, icon: Icon, title, copy, cta, brief }) => {
            const isActive = selected === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelected(key)}
                aria-pressed={isActive}
                className={`text-left bg-white border rounded-2xl p-5 transition-all duration-200 focus-ring group ${
                  isActive
                    ? "border-[#2563EB] shadow-[0_18px_40px_-16px_rgba(37,99,235,0.30)] -translate-y-1"
                    : "border-[#D7DEE5] hover:border-[#173044] hover:-translate-y-0.5"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${
                      isActive ? "bg-[#2563EB] text-white" : "bg-[#EEF6FF] text-[#2563EB]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className={`annotation ${isActive ? "text-[#2563EB]" : "text-[#64748B]"}`}>
                    {key}
                  </span>
                </div>
                <h3 className="text-[19px] font-bold text-[#173044] leading-snug mb-2">{title}</h3>
                <p className="text-[14px] leading-relaxed text-[#64748B] mb-4">{copy}</p>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-[#D7DEE5] pt-3 mb-3">
                    <p className="annotation text-[#64748B] mb-1">Sample decision brief</p>
                    <p className="text-[13px] text-[#243C4F]">
                      <span className="text-[#64748B]">Lever:</span> {brief.lever}
                    </p>
                    <p className="text-[13px] text-[#243C4F]">
                      <span className="text-[#64748B]">Next:</span> {brief.next}
                    </p>
                  </div>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 text-[14px] font-semibold ${
                    isActive ? "text-[#2563EB]" : "text-[#173044] group-hover:text-[#2563EB]"
                  }`}
                >
                  {cta}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            );
          })}
        </div>

        <p className="mt-6 text-[13px] text-[#64748B] italic">
          Illustrative workspace — sample information. {active.key} workflow shown above.
        </p>
      </div>
    </section>
  );
}