import React from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { REVENUE_SERIES } from "@/lib/anycrm-data";

const fmt = (n) => "$" + (n / 1000).toFixed(0) + "k";

export default function RevenueChart() {
  return (
    <div className="bg-ramp-surface border border-ramp-line rounded-2xl p-6 h-full">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-[16px] font-semibold text-ramp-ink">Revenue</h3>
          <p className="text-[13px] text-ramp-ink/50">Closed-won by month · last 8 months</p>
        </div>
        <div className="text-right">
          <div className="text-[20px] font-semibold text-ramp-ink">$1.39M</div>
          <div className="text-[12px] font-semibold text-emerald-600">+18.2%</div>
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={REVENUE_SERIES} margin={{ top: 6, right: 6, left: -18, bottom: 0 }}>
            <defs>
              <linearGradient id="rampRev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00D27C" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#00D27C" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EEF1EE" />
            <XAxis dataKey="m" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#64746A" }} />
            <YAxis tickFormatter={fmt} tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#64746A" }} width={48} />
            <Tooltip
              formatter={(v) => fmt(v)}
              contentStyle={{ borderRadius: 12, border: "1px solid #E5E9E5", fontSize: 13, boxShadow: "0 8px 24px -10px rgba(0,0,0,0.18)" }}
            />
            <Area type="monotone" dataKey="v" stroke="#00C779" strokeWidth={2.5} fill="url(#rampRev)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}