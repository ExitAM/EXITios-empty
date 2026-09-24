import React from "react";

const DECISION_STATE_STYLES = {
  Draft: "bg-[#F7F8F8] text-[#64748B] border-[#D7DEE5]",
  "Needs evidence": "bg-[#FEF6E7] text-[#B7791F] border-[#F1D9A0]",
  "Ready for review": "bg-[#EEF6FF] text-[#2563EB] border-[#BFDBFE]",
  Approved: "bg-[#E6F4F1] text-[#0F766E] border-[#BFE3DA]",
  "In execution": "bg-[#E6F4F1] text-[#0F766E] border-[#BFE3DA]",
  Revisit: "bg-[#FEF6E7] text-[#B7791F] border-[#F1D9A0]",
  Closed: "bg-[#F7F8F8] text-[#64748B] border-[#D7DEE5]",
};

export function DecisionStateBadge({ state }) {
  const cls = DECISION_STATE_STYLES[state] || DECISION_STATE_STYLES.Draft;
  return (
    <span className={`inline-flex items-center gap-1.5 text-[12px] font-semibold px-2.5 py-1 rounded-full border ${cls}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      {state}
    </span>
  );
}

const EVIDENCE_STATE_STYLES = {
  "Not started": "bg-[#F7F8F8] text-[#64748B] border-[#D7DEE5]",
  "Owner-reported": "bg-[#F5F0E8] text-[#243C4F] border-[#E5DCC8]",
  Uploaded: "bg-[#EEF6FF] text-[#2563EB] border-[#BFDBFE]",
  "Needs review": "bg-[#FEF6E7] text-[#B7791F] border-[#F1D9A0]",
  Reviewed: "bg-[#E6F4F1] text-[#0F766E] border-[#BFE3DA]",
  Reconciled: "bg-[#E6F4F1] text-[#0F766E] border-[#BFE3DA]",
  "Verified in workspace": "bg-[#0F766E] text-white border-[#0F766E]",
};

export function EvidenceStateBadge({ state }) {
  const cls = EVIDENCE_STATE_STYLES[state] || EVIDENCE_STATE_STYLES["Not started"];
  return <span className={`inline-flex items-center text-[12px] font-semibold px-2.5 py-1 rounded-full border ${cls}`}>{state}</span>;
}

export function PriorityDot({ level }) {
  const color = level === 1 ? "#B42318" : level === 2 ? "#B7791F" : "#2563EB";
  return <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />;
}