import React from "react";
import { ArrowRight, Clock } from "lucide-react";

const FEATURED = {
  category: "Revenue Quality",
  title: "The Revenue Quality Test",
  description:
  "Understand the customer, pricing, retention and delivery economics that determine the strength of recurring revenue.",
  readingTime: "9 min read",
  date: "Sep 2026"
};

const SECONDARY = [
{ category: "Margin", title: "Where is your next margin dollar hiding?", readingTime: "6 min read", date: "Sep 2026" },
{ category: "Diligence", title: "What should a buyer ask before diligence begins?", readingTime: "7 min read", date: "Aug 2026" }];


export default function GrowthOS() {
  return (
    <section id="growth-os" className="bg-[#F7F8F8] lg:py-28 border-t border-[#E4E9EF] py-4">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <div className="max-w-[720px] mb-10">
          <p className="text-[11px] fw-550 uppercase tracking-[0.12em] text-[#2563EB] mb-3">Growth OS</p>
          <h2 className="text-[28px] sm:text-[32px] lg:text-[38px] fw-600 tracking-[-0.035em] leading-[1.1] text-[#173044]">
            The thinking behind better business decisions.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
          <article className="lg:col-span-7 bg-white border border-[#E4E9EF] rounded-[14px] p-6 lg:p-8 flex flex-col group cursor-pointer hover:border-[#173044] transition-colors duration-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] fw-550 uppercase tracking-[0.08em] text-white bg-[#2563EB] rounded-full px-2.5 py-1">Featured · {FEATURED.category}</span>
              <span className="text-[12px] fw-450 text-[#64748B] flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {FEATURED.readingTime}</span>
              <span className="text-[12px] fw-450 text-[#64748B]">{FEATURED.date}</span>
            </div>
            <h3 className="text-[24px] lg:text-[28px] fw-600 tracking-[-0.02em] text-[#173044] leading-tight">{FEATURED.title}</h3>
            <p className="mt-3 text-[16px] fw-450 tracking-[-0.01em] text-[#243C4F] leading-relaxed flex-1">{FEATURED.description}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] fw-550 text-[#2563EB] group-hover:gap-2.5 transition-all duration-200">
              Read article <ArrowRight className="w-4 h-4" />
            </span>
          </article>

          <div className="lg:col-span-5 flex flex-col gap-4">
            {SECONDARY.map((a) =>
            <article key={a.title} className="bg-white border border-[#E4E9EF] rounded-[14px] p-5 group cursor-pointer hover:border-[#173044] transition-colors duration-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] fw-550 uppercase tracking-[0.08em] text-[#2563EB]">{a.category}</span>
                  <span className="text-[11px] fw-450 text-[#64748B]">· {a.readingTime} · {a.date}</span>
                </div>
                <h4 className="text-[17px] fw-600 tracking-[-0.01em] text-[#173044] leading-snug">{a.title}</h4>
                <span className="mt-2 inline-flex items-center gap-1 text-[13px] fw-550 text-[#2563EB] group-hover:gap-2 transition-all duration-200">Read <ArrowRight className="w-3.5 h-3.5" /></span>
              </article>
            )}
          </div>
        </div>

        <div className="mt-8">
          <a href="#growth-os" className="inline-flex items-center gap-2 text-[15px] fw-550 text-white bg-[#173044] hover:bg-[#243C4F] active:scale-[0.98] transition-all duration-200 px-5 py-2.5 rounded-lg focus-ring">
            Explore Growth OS <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>);

}