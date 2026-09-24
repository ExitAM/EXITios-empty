import React, { useState } from "react";
import { ArrowRight, BookOpen, Brain, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    n: "01",
    title: "Understand",
    copy: "Answer a few business-specific questions, use an EXITios template, upload a report or connect a supported source.",
  },
  {
    n: "02",
    title: "Decide",
    copy: "EXITios organizes what is known, what is missing, what matters and what deserves attention next.",
  },
  {
    n: "03",
    title: "Execute",
    copy: "Assign the owner, preserve the evidence, set the review date and turn the decision into accountable work.",
  },
];

const INTAKE = [
  {
    key: "none",
    label: "I have no structured data",
    output:
      "You can still begin. EXITios will guide you through the minimum questions required to create a useful starting point.",
  },
  {
    key: "spreadsheet",
    label: "I have a spreadsheet",
    output:
      "EXITios reads your spreadsheet, flags gaps and maps each column to the right definition for your business model.",
  },
  {
    key: "reports",
    label: "I have reports",
    output:
      "Upload a report. EXITios extracts the relevant figures, labels the source and links them to the decision in front of you.",
  },
  {
    key: "crm",
    label: "I have a CRM",
    output:
      "Connect a supported source. EXITios aligns customer records with revenue-quality definitions before any analysis.",
  },
  {
    key: "guided",
    label: "I want guided setup",
    output:
      "Request guided setup. An EXITios specialist helps frame your first decision and the minimum evidence it requires.",
  },
];

export default function HowItWorks() {
  const [intake, setIntake] = useState("none");
  const active = INTAKE.find((i) => i.key === intake);

  return (
    <section id="how" className="bg-white py-20 lg:py-28 border-t border-[#D7DEE5]">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <div className="max-w-[820px] mb-14">
          <p className="annotation text-[#2563EB] mb-3">How it works</p>
          <h2 className="text-[36px] lg:text-[48px] leading-[1.12] tracking-[-0.02em] font-extrabold text-[#173044]">
            From fragmented information to a decision your team can act on.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mb-16">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-white border border-[#D7DEE5] rounded-2xl p-7 lg:p-8 relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="annotation text-[#2563EB]">{s.n}</span>
                <span className="h-px flex-1 bg-[#D7DEE5]" />
                {s.title === "Execute" ? (
                  <CheckCircle2 className="w-5 h-5 text-[#0F766E]" />
                ) : s.title === "Decide" ? (
                  <Brain className="w-5 h-5 text-[#2563EB]" />
                ) : (
                  <BookOpen className="w-5 h-5 text-[#2563EB]" />
                )}
              </div>
              <h3 className="text-[24px] font-bold text-[#173044] mb-2">{s.title}</h3>
              <p className="text-[16px] leading-relaxed text-[#243C4F]">{s.copy}</p>
            </div>
          ))}
        </div>

        {/* live mini-interaction */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <p className="annotation text-[#64748B] mb-3">Try it — what do you have today?</p>
            <div className="flex flex-wrap gap-2">
              {INTAKE.map((i) => (
                <button
                  key={i.key}
                  type="button"
                  onClick={() => setIntake(i.key)}
                  aria-pressed={intake === i.key}
                  className={`text-[14px] font-semibold px-4 py-2.5 border rounded-lg transition-colors focus-ring ${
                    intake === i.key
                      ? "bg-[#173044] text-white border-[#173044]"
                      : "bg-white text-[#243C4F] border-[#D7DEE5] hover:border-[#2563EB] hover:text-[#2563EB]"
                  }`}
                >
                  {i.label}
                </button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="bg-[#F7F8F8] border border-[#D7DEE5] rounded-2xl p-6 lg:p-8 min-h-[180px]">
              <p className="annotation text-[#2563EB] mb-3">EXITios response</p>
              <p className="text-[18px] leading-relaxed text-[#173044] font-medium">
                {active.output}
              </p>
            </div>
            <a
              href="#conversion"
              className="inline-flex items-center gap-2 mt-5 text-[16px] font-semibold bg-[#2563EB] text-white hover:bg-[#1d4ed8] transition-colors px-6 py-3.5 rounded-lg focus-ring"
            >
              Start with what I have
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}