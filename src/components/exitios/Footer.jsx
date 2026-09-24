import React from "react";
import Logo from "./Logo";

const COLUMNS = [
  { title: "Platform", links: ["Platform overview", "Decision center", "Evidence room", "Industry scorecards", "Action management"] },
  { title: "Solutions", links: ["Grow a business", "Prepare to sell", "Evaluate an acquisition", "Advise clients"] },
  { title: "Industries", links: ["Home and field services", "Specialty contracting", "Manufacturing", "Healthcare practices", "Veterinary services"] },
  { title: "Resources", links: ["Growth OS", "Guides", "Templates", "Trust center", "Support"] },
  { title: "Company", links: ["About", "Contact", "Pricing", "Privacy", "Terms"] },
];

export default function Footer() {
  return (
    <footer className="bg-[#173044] text-white">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-14 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-3">
            <Logo className="h-8 mb-4" />
            <p className="text-[14px] fw-450 text-white/65 leading-relaxed max-w-[280px]">
              The operating system for your next business decision.
            </p>
          </div>
          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="text-[11px] fw-550 uppercase tracking-[0.12em] text-white/45 mb-3">{col.title}</p>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#top" className="text-[13px] fw-450 text-white/70 hover:text-white transition-colors duration-200 focus-ring rounded">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-white/12 pt-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] fw-450 text-white/55">© {new Date().getFullYear()} EXITios. All rights reserved.</p>
          <p className="text-[12px] fw-450 text-white/55">Built for decisions that need context, evidence and accountability.</p>
        </div>
      </div>
    </footer>
  );
}