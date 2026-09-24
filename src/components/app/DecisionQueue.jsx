import React, { useState } from "react";
import { DecisionStateBadge, EvidenceStateBadge } from "./Badges";
import { ChevronRight, Search } from "lucide-react";

const FILTERS = ["All", "Needs evidence", "Ready for review", "Assigned to me", "Overdue", "Completed"];

export default function DecisionQueue({ decisions, onOpen }) {
  const [filter, setFilter] = useState("All");
  const [q, setQ] = useState("");

  const filtered = decisions.filter((d) => {
    if (filter === "All") return true;
    if (filter === "Needs evidence") return d.status === "Needs evidence";
    if (filter === "Ready for review") return d.status === "Ready for review";
    if (filter === "Assigned to me") return d.owner === "You";
    if (filter === "Overdue") return d.overdue;
    if (filter === "Completed") return d.status === "Closed";
    return true;
  }).filter((d) => (q ? d.title.toLowerCase().includes(q.toLowerCase()) : true));

  return (
    <div className="bg-white border border-[#D7DEE5] rounded-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-4 border-b border-[#D7DEE5]">
        <h3 className="text-[16px] font-bold text-[#173044]">Decision queue</h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-lg border border-[#D7DEE5] bg-[#F7F8F8] px-2.5 py-1.5 focus-within:border-[#2563EB]">
            <Search className="w-3.5 h-3.5 text-[#64748B]" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Filter…"
              className="bg-transparent text-[13px] text-[#173044] placeholder:text-[#64748B] outline-none w-28"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 px-5 py-3 border-b border-[#D7DEE5]">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-[12.5px] font-semibold px-3 py-1.5 rounded-full border transition-colors focus-ring ${
              filter === f
                ? "bg-[#173044] text-white border-[#173044]"
                : "bg-white text-[#243C4F] border-[#D7DEE5] hover:border-[#2563EB] hover:text-[#2563EB]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="px-5 py-10 text-center">
          <p className="text-[14px] font-semibold text-[#173044]">No decisions match this view.</p>
          <p className="text-[13px] text-[#64748B] mt-1">No records — not zero results. Start a decision or clear the filter.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wide bg-[#F7F8F8]">
                <th className="px-5 py-2.5 font-semibold">Decision</th>
                <th className="px-3 py-2.5 font-semibold">Area</th>
                <th className="px-3 py-2.5 font-semibold">Owner</th>
                <th className="px-3 py-2.5 font-semibold">Evidence</th>
                <th className="px-3 py-2.5 font-semibold">Status</th>
                <th className="px-3 py-2.5 font-semibold">Due</th>
                <th className="px-3 py-2.5 font-semibold">Next action</th>
                <th className="px-3 py-2.5 w-8" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((d) => (
                <tr
                  key={d.id}
                  onClick={() => onOpen(d)}
                  className="border-t border-[#D7DEE5] hover:bg-[#F7F8F8] cursor-pointer"
                >
                  <td className="px-5 py-3">
                    <p className="text-[14px] font-semibold text-[#173044]">{d.title}</p>
                  </td>
                  <td className="px-3 py-3 text-[13px] text-[#243C4F]">{d.area}</td>
                  <td className="px-3 py-3 text-[13px] text-[#243C4F]">{d.owner}</td>
                  <td className="px-3 py-3"><EvidenceStateBadge state={d.evidenceState} /></td>
                  <td className="px-3 py-3"><DecisionStateBadge state={d.status} /></td>
                  <td className={`px-3 py-3 text-[13px] ${d.overdue ? "text-[#B42318] font-semibold" : "text-[#243C4F]"}`}>{d.due}</td>
                  <td className="px-3 py-3 text-[13px] text-[#64748B]">{d.nextAction}</td>
                  <td className="px-3 py-3 text-[#64748B]"><ChevronRight className="w-4 h-4" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}