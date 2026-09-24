import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { DEALS_BY_OWNER, DEALS_BY_SOURCE } from "@/lib/anycrm-data";

const PIE_COLORS = ["#00C779", "#22C5A6", "#7BCB54", "#F2B705", "#8E8E93"];
const money = (v) => "$" + v.toLocaleString();
const thousands = (v) => "$" + v + "k";
const tooltipStyle = { borderRadius: 12, border: "1px solid #E5E9E5", fontSize: 13 };

export default function ReportsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[24px] font-semibold tracking-tight text-ramp-ink">Reports</h1>
        <p className="text-[14px] text-ramp-ink/50">Performance by owner and source.</p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-ramp-surface border border-ramp-line rounded-2xl p-6">
          <h3 className="text-[16px] font-semibold text-ramp-ink mb-5">Closed-won by owner</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DEALS_BY_OWNER} margin={{ top: 6, right: 6, left: -18, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EEF1EE" />
                <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#64746A" }} />
                <YAxis tickFormatter={thousands} tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#64746A" }} width={48} />
                <Tooltip formatter={money} contentStyle={tooltipStyle} />
                <Bar dataKey="value" radius={[6, 6, 0, 0]} fill="#00C779" maxBarSize={48} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-ramp-surface border border-ramp-line rounded-2xl p-6">
          <h3 className="text-[16px] font-semibold text-ramp-ink mb-5">Pipeline by source</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={DEALS_BY_SOURCE} dataKey="value" nameKey="name" innerRadius={55} outerRadius={85} paddingAngle={2}>
                  {DEALS_BY_SOURCE.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={thousands} contentStyle={tooltipStyle} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}