import React from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "./Drawer";
import { DecisionStateBadge, EvidenceStateBadge } from "./Badges";
import { ArrowRight, FileCheck2, UserPlus, CalendarClock } from "lucide-react";

function Row({ label, value }) {
  return (
    <div className="grid grid-cols-3 gap-3 py-2.5 border-b border-[#D7DEE5] last:border-b-0">
      <dt className="text-[12px] font-semibold text-[#64748B] uppercase tracking-wide">{label}</dt>
      <dd className="col-span-2 text-[14px] text-[#173044] leading-relaxed">{value}</dd>
    </div>
  );
}

export default function DecisionDrawer({ decision, open, onClose }) {
  const navigate = useNavigate();
  if (!decision) return null;
  return (
    <Drawer
      open={open}
      onClose={onClose}
      title={decision.title}
      subtitle={`${decision.area} · ${decision.state}`}
      width="max-w-xl"
      footer={
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => navigate(`/app/decisions/${decision.id}`)}
            className="inline-flex items-center gap-2 text-[14px] font-semibold bg-[#2563EB] text-white hover:bg-[#1d4ed8] px-4 py-2.5 rounded-lg focus-ring"
          >
            Open decision brief <ArrowRight className="w-4 h-4" />
          </button>
          <button className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#173044] bg-white border border-[#D7DEE5] hover:border-[#2563EB] hover:text-[#2563EB] px-4 py-2.5 rounded-lg focus-ring">
            <FileCheck2 className="w-4 h-4" /> Add evidence
          </button>
          <button className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#173044] bg-white border border-[#D7DEE5] hover:border-[#2563EB] hover:text-[#2563EB] px-4 py-2.5 rounded-lg focus-ring">
            <UserPlus className="w-4 h-4" /> Assign owner
          </button>
          <button className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#173044] bg-white border border-[#D7DEE5] hover:border-[#2563EB] hover:text-[#2563EB] px-4 py-2.5 rounded-lg focus-ring">
            <CalendarClock className="w-4 h-4" /> Schedule review
          </button>
        </div>
      }
    >
      <div className="flex items-center gap-2 mb-4">
        <DecisionStateBadge state={decision.state} />
        <EvidenceStateBadge state={decision.evidenceState} />
      </div>
      <dl className="rounded-xl border border-[#D7DEE5] px-4">
        <Row label="Decision" value={decision.question} />
        <Row label="Why it matters" value={decision.why} />
        <Row label="Evidence" value={decision.evidence} />
        <Row label="Missing" value={decision.missing} />
        <Row label="Next action" value={decision.nextAction} />
        <Row label="Owner" value={decision.owner} />
        <Row label="Due" value={decision.due} />
        <Row label="Review" value={decision.review} />
      </dl>
      <p className="mt-4 text-[12px] text-[#64748B] italic">
        Illustrative — sample information. Nothing here is presented as verified until the review process occurs.
      </p>
    </Drawer>
  );
}