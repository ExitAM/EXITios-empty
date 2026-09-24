import React from "react";
import { DEALS, STAGES } from "@/lib/anycrm-data";

const fmt = (n) => "$" + (n / 1000).toFixed(0) + "k";
const initials = (name) => name.split(" ").map((p) => p[0]).slice(0, 2).join("");

export default function PipelineView() {
  const byStage = STAGES.map((s) => {
    const items = DEALS.filter((d) => d.stage === s);
    const total = items.reduce((a, d) => a + d.value, 0);
    return { stage: s, items, total };
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[24px] font-semibold tracking-tight text-ramp-ink">Pipeline</h1>
        <p className="text-[14px] text-ramp-ink/50">{DEALS.length} deals · drag to update stages.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
        {byStage.map((col) => (
          <div key={col.stage} className="bg-ramp-muted/50 border border-ramp-line rounded-2xl p-3 flex flex-col">
            <div className="flex items-center justify-between px-1.5 mb-2">
              <span className="text-[13px] font-semibold text-ramp-ink">{col.stage}</span>
              <span className="text-[12px] text-ramp-ink/50">{col.items.length}</span>
            </div>
            <div className="text-[12px] text-ramp-ink/50 px-1.5 mb-3">{fmt(col.total)}</div>
            <div className="space-y-2.5 flex-1">
              {col.items.map((d) => (
                <div
                  key={d.id}
                  className="bg-ramp-surface border border-ramp-line rounded-xl p-3.5 hover:border-ramp-green transition-colors cursor-grab"
                >
                  <div className="text-[13px] font-semibold text-ramp-ink mb-1">{d.company}</div>
                  <div className="text-[12px] text-ramp-ink/50 mb-2.5">{d.contact}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-semibold text-ramp-ink">{fmt(d.value)}</span>
                    <span className="w-6 h-6 rounded-full bg-ramp-green/15 text-ramp-green-dark flex items-center justify-center text-[10px] font-semibold">
                      {initials(d.owner)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}