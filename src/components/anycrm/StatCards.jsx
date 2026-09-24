import React from "react";
import { TrendingUp, TrendingDown, DollarSign, Briefcase, Target, Activity } from "lucide-react";
import { STAT_CARDS } from "@/lib/anycrm-data";

const ICONS = { revenue: DollarSign, deals: Briefcase, winrate: Target, pipeline: Activity };

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {STAT_CARDS.map((c) => {
        const Icon = ICONS[c.id];
        const up = c.trend === "up";
        return (
          <div key={c.id} className="bg-ramp-surface border border-ramp-line rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-medium text-ramp-ink/60">{c.label}</span>
              <span className="w-9 h-9 rounded-lg bg-ramp-muted flex items-center justify-center">
                <Icon className="w-[18px] h-[18px] text-ramp-green-dark" />
              </span>
            </div>
            <div className="mt-3 text-[28px] font-semibold tracking-tight text-ramp-ink">{c.value}</div>
            <div className="mt-2 flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1 text-[12px] font-semibold px-1.5 py-0.5 rounded-md ${
                  up ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
                }`}
              >
                {up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {c.delta}
              </span>
              <span className="text-[12px] text-ramp-ink/50">{c.sub}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}