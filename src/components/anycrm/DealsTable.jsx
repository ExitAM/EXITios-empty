import React from "react";
import { DEALS, STAGE_STYLES } from "@/lib/anycrm-data";

const fmt = (n) => "$" + n.toLocaleString();
const initials = (name) => name.split(" ").map((p) => p[0]).slice(0, 2).join("");

export default function DealsTable({ limit, title = "Recent deals", subtitle = "Updated this week" }) {
  const rows = limit ? DEALS.slice(0, limit) : DEALS;
  return (
    <div className="bg-ramp-surface border border-ramp-line rounded-2xl overflow-hidden">
      <div className="px-6 py-5 border-b border-ramp-line flex items-center justify-between">
        <div>
          <h3 className="text-[16px] font-semibold text-ramp-ink">{title}</h3>
          <p className="text-[13px] text-ramp-ink/50">{subtitle}</p>
        </div>
        <button className="text-[13px] font-semibold text-ramp-green-dark hover:underline">View all</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[12px] uppercase tracking-wide text-ramp-ink/50 bg-ramp-muted/60">
              <th className="px-6 py-3 font-medium">Company</th>
              <th className="px-6 py-3 font-medium">Contact</th>
              <th className="px-6 py-3 font-medium">Value</th>
              <th className="px-6 py-3 font-medium">Stage</th>
              <th className="px-6 py-3 font-medium">Owner</th>
              <th className="px-6 py-3 font-medium">Updated</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ramp-line">
            {rows.map((d) => (
              <tr key={d.id} className="hover:bg-ramp-muted/50 transition-colors">
                <td className="px-6 py-3.5 text-[14px] font-semibold text-ramp-ink">{d.company}</td>
                <td className="px-6 py-3.5 text-[14px] text-ramp-ink/70">{d.contact}</td>
                <td className="px-6 py-3.5 text-[14px] font-medium text-ramp-ink">{fmt(d.value)}</td>
                <td className="px-6 py-3.5">
                  <span className={`inline-block text-[12px] font-semibold px-2.5 py-1 rounded-md ${STAGE_STYLES[d.stage]}`}>
                    {d.stage}
                  </span>
                </td>
                <td className="px-6 py-3.5">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-ramp-green/15 text-ramp-green-dark flex items-center justify-center text-[11px] font-semibold">
                      {initials(d.owner)}
                    </span>
                    <span className="text-[13px] text-ramp-ink/70">{d.owner}</span>
                  </div>
                </td>
                <td className="px-6 py-3.5 text-[13px] text-ramp-ink/50">{d.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}