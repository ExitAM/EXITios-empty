import React from "react";
import StatCards from "./StatCards";
import RevenueChart from "./RevenueChart";
import DealsTable from "./DealsTable";

const GOAL_ROWS = [
  { l: "On pace", v: "Yes", tone: "emerald" },
  { l: "Deals needed", v: "7", tone: "ink" },
  { l: "Avg deal size", v: "$84.5k", tone: "ink" },
];

export default function DashboardView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[24px] font-semibold tracking-tight text-ramp-ink">Dashboard</h1>
        <p className="text-[14px] text-ramp-ink/50">Your sales at a glance.</p>
      </div>

      <StatCards />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <RevenueChart />
        </div>
        <div className="bg-ramp-surface border border-ramp-line rounded-2xl p-6">
          <h3 className="text-[16px] font-semibold text-ramp-ink mb-1">Quarter goal</h3>
          <p className="text-[13px] text-ramp-ink/50 mb-4">$1.5M closed-won by Dec 31</p>
          <div className="flex items-end justify-between mb-2">
            <span className="text-[28px] font-semibold text-ramp-ink">86%</span>
            <span className="text-[13px] text-ramp-ink/50">$1.29M / $1.5M</span>
          </div>
          <div className="h-2.5 rounded-full bg-ramp-muted overflow-hidden">
            <div className="h-full rounded-full bg-ramp-green" style={{ width: "86%" }} />
          </div>
          <div className="mt-5 space-y-3">
            {GOAL_ROWS.map((x) => (
              <div key={x.l} className="flex items-center justify-between text-[13px]">
                <span className="text-ramp-ink/60">{x.l}</span>
                <span className={`font-semibold ${x.tone === "emerald" ? "text-emerald-600" : "text-ramp-ink"}`}>
                  {x.v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DealsTable limit={5} />
    </div>
  );
}