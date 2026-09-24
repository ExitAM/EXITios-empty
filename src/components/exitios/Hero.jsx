import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import HeroProductPanel from "./HeroProductPanel";

export default function Hero() {
  return (
    <section id="top" className="relative bg-[#F7F8F8] pt-[92px] lg:pt-[120px] pb-16 lg:pb-24 overflow-hidden">
      <div
        className="absolute inset-y-0 right-0 w-[58%] pointer-events-none hidden lg:block"
        style={{ background: "radial-gradient(ellipse 70% 60% at 70% 35%, rgba(23,48,68,0.06), transparent 65%)" }}
        aria-hidden="true"
      />
      <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="text-[11px] fw-550 uppercase tracking-[0.12em] text-[#2563EB] mb-4">
              The operating system for your next business decision
            </p>
            <h1 className="text-[38px] sm:text-[44px] lg:text-[58px] fw-650 tracking-[-0.035em] leading-[1.05] text-[#173044] max-w-[580px]">
              Know what matters next.
            </h1>
            <p className="mt-5 text-[16px] lg:text-[17px] fw-450 tracking-[-0.01em] leading-[1.55] text-[#243C4F] max-w-[480px]">
              EXITios turns fragmented business information into a clear decision, the evidence behind it and the work required to move it forward.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-2.5">
              <Link to="/register?returnTo=%2Fapp" className="inline-flex items-center justify-center gap-2 text-[15px] fw-550 text-white bg-[#2563EB] hover:bg-[#1d4ed8] active:scale-[0.98] transition-all duration-200 px-5 py-2.5 rounded-lg focus-ring">
                Start assessment <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#command" className="inline-flex items-center justify-center gap-2 text-[15px] fw-550 text-[#173044] bg-white border border-[#E4E9EF] hover:border-[#173044] transition-colors duration-200 px-5 py-2.5 rounded-lg focus-ring">
                Explore the product
              </a>
            </div>
            <p className="mt-5 text-[14px] fw-450 text-[#64748B] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0F766E] shrink-0" />
              No CRM required. Start with what you have.
            </p>
          </div>

          <div className="lg:col-span-7">
            <HeroProductPanel />
          </div>
        </div>
      </div>
    </section>
  );
}