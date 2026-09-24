import React from "react";
import { Layers, FileCheck2, Lock, PlugZap } from "lucide-react";

const ITEMS = [
  { icon: Layers, label: "Industry-aware workflows" },
  { icon: FileCheck2, label: "Evidence-linked analysis" },
  { icon: Lock, label: "Permission-controlled workspaces" },
  { icon: PlugZap, label: "No integration required to begin" },
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-y border-[#D7DEE5]">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-7">
        <p className="text-center text-[15px] font-semibold text-[#173044] mb-5">
          Built for decisions that need context, evidence and accountability.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {ITEMS.map(({ icon: Icon, label }) => (
            <div key={label} className="bg-[#F7F8F8] border border-[#D7DEE5] rounded-xl flex items-center gap-2.5 px-4 py-4">
              <Icon className="w-5 h-5 text-[#2563EB] shrink-0" />
              <span className="text-[14px] font-semibold text-[#243C4F]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}