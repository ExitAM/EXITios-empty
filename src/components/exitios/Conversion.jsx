import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Conversion() {
  return (
    <section className="bg-[#F7F8F8] lg:py-28 border-t border-[#E4E9EF] py-10">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 text-center">
        <p className="text-[11px] fw-550 uppercase tracking-[0.12em] text-[#2563EB] mb-4">Start now</p>
        <h2 className="text-[28px] sm:text-[32px] lg:text-[42px] fw-650 tracking-[-0.035em] leading-[1.08] text-[#173044] max-w-[640px] mx-auto">
          Move from uncertainty to a decision.
        </h2>
        <p className="mt-4 text-[16px] lg:text-[17px] fw-450 tracking-[-0.01em] text-[#243C4F] max-w-[520px] mx-auto">
          Start with the information you have. EXITios shows what matters, what is missing and what to do next.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row justify-center gap-2.5">
          <Link to="/register?returnTo=%2Fapp" className="inline-flex items-center justify-center gap-2 text-[15px] fw-550 text-white bg-[#2563EB] hover:bg-[#1d4ed8] active:scale-[0.98] transition-all duration-200 px-6 py-3 rounded-lg focus-ring">
            Start assessment <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="#command" className="inline-flex items-center justify-center gap-2 text-[15px] fw-550 text-[#173044] bg-white border border-[#E4E9EF] hover:border-[#173044] transition-colors duration-200 px-6 py-3 rounded-lg focus-ring">
            Explore the product
          </a>
        </div>
        <p className="mt-5 text-[13px] fw-450 text-[#64748B] flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#0F766E]" />
          No CRM required. Start with what you have.
        </p>
      </div>
    </section>);

}