import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { SAMPLE_DECISIONS } from "@/lib/app-data";
import { DecisionStateBadge, EvidenceStateBadge } from "@/components/app/Badges";
import { ArrowLeft, ChevronRight, AlertTriangle } from "lucide-react";

const TABS = ["Brief", "Evidence", "Assumptions", "Actions", "Review history", "Permissions"];

function Row({ label, value }) {
  return (
    <div className="grid grid-cols-3 gap-3 py-3 border-b border-[#D7DEE5] last:border-b-0">
      <dt className="text-[12px] font-semibold text-[#64748B] uppercase tracking-wide">{label}</dt>
      <dd className="col-span-2 text-[14px] text-[#173044] leading-relaxed">{value}</dd>
    </div>
  );
}

export default function DecisionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState("Brief");
  const decision = SAMPLE_DECISIONS.find((d) => d.id === id);

  return (
    <div className="px-4 lg:px-6 py-6 max-w-[1100px] mx-auto">
      <nav className="flex items-center gap-1.5 text-[13px] text-[#64748B] mb-4">
        <Link to="/app" className="hover:text-[#2563EB]">Command Center</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/app/decisions" className="hover:text-[#2563EB]">Decisions</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#173044] font-semibold truncate">{decision ? decision.title : "Decision"}</span>
      </nav>

      {!decision ? (
        <div className="bg-white border border-[#D7DEE5] rounded-2xl p-10 text-center">
          <AlertTriangle className="w-6 h-6 text-[#B7791F] mx-auto mb-2" />
          <p className="text-[16px] font-bold text-[#173044]">Decision not found.</p>
          <p className="text-[14px] text-[#64748B] mt-1">No production record exists for this decision. Build your first decision brief to begin.</p>
          <Link to="/app/decisions" className="inline-flex items-center gap-2 mt-4 text-[14px] font-semibold text-[#2563EB] hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to decisions
          </Link>
        </div>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
            <div>
              <h2 className="text-[24px] font-extrabold text-[#173044] tracking-[-0.01em]">{decision.title}</h2>
              <div className="flex items-center gap-2 mt-2">
                <DecisionStateBadge state={decision.state} />
                <EvidenceStateBadge state={decision.evidenceState} />
                <span className="text-[12px] text-[#64748B]">{decision.area}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4 border-b border-[#D7DEE5]">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-3.5 py-2.5 text-[14px] font-semibold -mb-px border-b-2 transition-colors focus-ring ${
                  tab === t ? "text-[#2563EB] border-[#2563EB]" : "text-[#64748B] border-transparent hover:text-[#173044]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="bg-white border border-[#D7DEE5] rounded-2xl p-6">
            {tab === "Brief" && (
              <dl className="px-2">
                <Row label="Title" value={decision.title} />
                <Row label="Question" value={decision.question} />
                <Row label="Objective" value="Make the next dollar of growth investment defensible." />
                <Row label="Business context" value={decision.area} />
                <Row label="Finding" value={decision.why} />
                <Row label="Supporting evidence" value={decision.evidence} />
                <Row label="Missing evidence" value={decision.missing} />
                <Row label="Assumptions" value="Customer value and early-life churn are not yet understood." />
                <Row label="Recommendation" value={decision.nextAction} />
                <Row label="Owner" value={decision.owner} />
                <Row label="Contributors" value="None assigned" />
                <Row label="Due" value={decision.due} />
                <Row label="Review" value={decision.review} />
                <Row label="Status" value={decision.state} />
              </dl>
            )}
            {tab === "Evidence" && (
              <div>
                <p className="text-[14px] text-[#243C4F] mb-3">Evidence linked to this decision. Each item carries its source and review state.</p>
                <div className="rounded-xl border border-[#D7DEE5] divide-y divide-[#D7DEE5]">
                  <div className="grid grid-cols-4 px-4 py-3">
                    <span className="text-[12px] font-semibold text-[#64748B] uppercase">Item</span>
                    <span className="text-[12px] font-semibold text-[#64748B] uppercase">Source</span>
                    <span className="text-[12px] font-semibold text-[#64748B] uppercase">State</span>
                    <span className="text-[12px] font-semibold text-[#64748B] uppercase">Period</span>
                  </div>
                  <div className="grid grid-cols-4 px-4 py-3">
                    <span className="text-[14px] text-[#173044]">Customer list</span>
                    <span className="text-[14px] text-[#243C4F]">Owner-reported</span>
                    <span><EvidenceStateBadge state="Owner-reported" /></span>
                    <span className="text-[14px] text-[#243C4F]">Current</span>
                  </div>
                  <div className="grid grid-cols-4 px-4 py-3">
                    <span className="text-[14px] text-[#173044]">Cancellations</span>
                    <span className="text-[14px] text-[#243C4F]">Not collected</span>
                    <span><EvidenceStateBadge state="Not started" /></span>
                    <span className="text-[14px] text-[#243C4F]">—</span>
                  </div>
                </div>
              </div>
            )}
            {tab === "Assumptions" && (
              <div className="space-y-3">
                <div className="rounded-xl border-l-2 border-[#2563EB] bg-[#EEF6FF] px-4 py-3">
                  <p className="text-[13px] font-semibold text-[#2563EB] uppercase tracking-wide">Assumption</p>
                  <p className="text-[14px] text-[#173044] mt-1">Customer value and early-life churn are not yet understood.</p>
                </div>
                <div className="rounded-xl border-l-2 border-[#B7791F] bg-[#FEF6E7] px-4 py-3">
                  <p className="text-[13px] font-semibold text-[#B7791F] uppercase tracking-wide">Limitation</p>
                  <p className="text-[14px] text-[#173044] mt-1">I do not have enough supported information to answer this reliably.</p>
                </div>
              </div>
            )}
            {tab === "Actions" && (
              <div className="rounded-xl border border-[#D7DEE5] divide-y divide-[#D7DEE5]">
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-[14px] font-semibold text-[#173044]">{decision.nextAction}</span>
                  <span className="text-[13px] text-[#64748B]">Owner: {decision.owner}</span>
                </div>
              </div>
            )}
            {tab === "Review history" && (
              <p className="text-[14px] text-[#64748B]">No reviews have occurred yet. A decision is not “verified” until the review process has run.</p>
            )}
            {tab === "Permissions" && (
              <div className="rounded-xl border border-[#D7DEE5] divide-y divide-[#D7DEE5]">
                <Row label="Access" value="Workspace members" />
                <Row label="Evidence scope" value="Linked evidence only" />
                <Row label="History" value="Version 1 — created on setup" />
              </div>
            )}
            <p className="mt-4 text-[12px] text-[#64748B] italic">Illustrative — sample information. Nothing here is verified until reviewed.</p>
          </div>
        </>
      )}
    </div>
  );
}