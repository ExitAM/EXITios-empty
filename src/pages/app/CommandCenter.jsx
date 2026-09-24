import React, { useState } from "react";
import { SAMPLE_DECISIONS, EVIDENCE_DETAIL } from "@/lib/app-data";
import { EvidenceStateBadge } from "@/components/app/Badges";
import {
  AlertTriangle,
  FileSearch,
  ListChecks,
  CalendarClock,
  ArrowRight,
  Compass,
  FileText,
  Upload,
  Plug,
} from "lucide-react";
import DecisionQueue from "@/components/app/DecisionQueue";
import DecisionDrawer from "@/components/app/DecisionDrawer";
import GuidedSetup from "@/components/app/GuidedSetup";
import Drawer from "@/components/app/Drawer";
import { useNavigate } from "react-router-dom";

const STATUSES = [
  { label: "Last updated", value: "Not started" },
  { label: "Data freshness", value: "No records yet" },
  { label: "Evidence readiness", value: "0 of 7 categories reviewed" },
  { label: "Open decisions", value: "0" },
  { label: "Upcoming review", value: "None scheduled" },
];

const SUMMARY = [
  { icon: AlertTriangle, label: "Needs attention", value: "0", hint: "open decisions", tone: "amber" },
  { icon: FileSearch, label: "Evidence gaps", value: "5", hint: "missing or unreviewed", tone: "blue" },
  { icon: ListChecks, label: "Assigned actions", value: "0", hint: "assigned to you", tone: "slate" },
  { icon: CalendarClock, label: "Next review", value: "None", hint: "no review scheduled", tone: "slate" },
];

const INTAKE = [
  { icon: Compass, label: "Answer a few questions" },
  { icon: FileText, label: "Use an EXITios template" },
  { icon: Upload, label: "Upload a file" },
  { icon: Plug, label: "Connect a supported source" },
];

export default function CommandCenter() {
  const navigate = useNavigate();
  const [showSample, setShowSample] = useState(false);
  const [guidedOpen, setGuidedOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [activeEvidence, setActiveEvidence] = useState(null);

  const decisions = showSample ? SAMPLE_DECISIONS : [];
  const primary = showSample ? SAMPLE_DECISIONS[0] : null;
  const openCount = decisions.filter((d) => d.status !== "Closed").length;
  const overdueCount = decisions.filter((d) => d.overdue).length;
  const assignedCount = decisions.filter((d) => d.owner === "You" && d.status !== "Closed").length;

  const summary = [
    { icon: AlertTriangle, label: "Needs attention", value: showSample ? String(openCount) : "0", hint: overdueCount ? `${overdueCount} overdue` : "open decisions", tone: "amber" },
    { icon: FileSearch, label: "Evidence gaps", value: "5", hint: "missing or unreviewed", tone: "blue" },
    { icon: ListChecks, label: "Assigned actions", value: showSample ? String(assignedCount) : "0", hint: "assigned to you", tone: "slate" },
    { icon: CalendarClock, label: "Next review", value: "None", hint: "no review scheduled", tone: "slate" },
  ];

  return (
    <div className="px-4 lg:px-6 py-6 max-w-[1280px] mx-auto">
      {/* Page header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-[26px] font-extrabold text-[#173044] tracking-[-0.01em]">Command Center</h2>
          <p className="text-[15px] text-[#64748B] mt-1">The decisions, evidence and actions that matter most right now.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <select className="rounded-lg border border-[#D7DEE5] bg-white px-3 py-2.5 text-[13px] font-semibold text-[#173044] focus:border-[#2563EB] outline-none">
            <option>This reporting period</option>
            <option>Last 30 days</option>
            <option>This quarter</option>
          </select>
          <button
            onClick={() => setGuidedOpen(true)}
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#173044] bg-white border border-[#D7DEE5] hover:border-[#2563EB] hover:text-[#2563EB] px-4 py-2.5 rounded-lg focus-ring"
          >
            <Compass className="w-4 h-4" /> Start guided setup
          </button>
          <button
            onClick={() => navigate("/app/decisions")}
            className="inline-flex items-center gap-2 text-[14px] font-semibold bg-[#2563EB] text-white hover:bg-[#1d4ed8] px-4 py-2.5 rounded-lg focus-ring"
          >
            Add decision
          </button>
        </div>
      </div>

      {/* Status bar */}
      <div className="bg-white border border-[#D7DEE5] rounded-2xl px-5 py-3 mb-6">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {STATUSES.map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wide">{s.label}</span>
              <span className="text-[13px] font-semibold text-[#173044]">{s.value}</span>
            </div>
          ))}
        </div>
        {!showSample && (
          <p className="mt-2 text-[13px] text-[#64748B]">
            Your workspace is ready. No production records have been reviewed yet.
          </p>
        )}
      </div>

      {/* Primary decision module */}
      <section className="bg-white border border-[#D7DEE5] rounded-2xl p-6 lg:p-8 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[11px] font-semibold text-[#2563EB] uppercase tracking-wider">Decision requiring attention</p>
            <h3 className="text-[20px] font-bold text-[#173044] mt-0.5">
              {primary ? primary.title : "Build your first decision brief."}
            </h3>
          </div>
          <button
            onClick={() => setShowSample((v) => !v)}
            className="text-[12px] font-semibold text-[#2563EB] hover:underline focus-ring"
          >
            {showSample ? "Hide example" : "See an example"}
          </button>
        </div>

        {primary ? (
          <>
            <p className="text-[15px] text-[#243C4F] leading-relaxed max-w-[760px] mb-4">{primary.why}</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-5">
              {[
                ["Business area", primary.area],
                ["Evidence", primary.evidence],
                ["Missing", primary.missing],
                ["Next action", primary.nextAction],
                ["Owner", primary.owner],
                ["Due · Review", `${primary.due} · ${primary.review}`],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-[#D7DEE5] px-4 py-3">
                  <p className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wide">{k}</p>
                  <p className="text-[14px] text-[#173044] font-medium mt-0.5">{v}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button onClick={() => navigate(`/app/decisions/${primary.id}`)} className="inline-flex items-center gap-2 text-[14px] font-semibold bg-[#173044] text-white hover:bg-[#243C4F] px-4 py-2.5 rounded-lg focus-ring">
                Open decision brief <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#173044] bg-white border border-[#D7DEE5] hover:border-[#2563EB] hover:text-[#2563EB] px-4 py-2.5 rounded-lg focus-ring">Add evidence</button>
              <button className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#173044] bg-white border border-[#D7DEE5] hover:border-[#2563EB] hover:text-[#2563EB] px-4 py-2.5 rounded-lg focus-ring">Assign owner</button>
              <button className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#173044] bg-white border border-[#D7DEE5] hover:border-[#2563EB] hover:text-[#2563EB] px-4 py-2.5 rounded-lg focus-ring">Schedule review</button>
            </div>
            <p className="mt-4 text-[12px] text-[#64748B] italic">Illustrative — sample information.</p>
          </>
        ) : (
          <>
            <p className="text-[15px] text-[#243C4F] leading-relaxed max-w-[680px] mb-5">
              Start with a guided assessment, add a template, upload a report or request guided setup. No CRM, spreadsheet or finance background required.
            </p>
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <button onClick={() => setGuidedOpen(true)} className="inline-flex items-center gap-2 text-[14px] font-semibold bg-[#2563EB] text-white hover:bg-[#1d4ed8] px-4 py-2.5 rounded-lg focus-ring">
                <Compass className="w-4 h-4" /> Start guided setup
              </button>
              <button onClick={() => navigate("/assessment")} className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#173044] bg-white border border-[#D7DEE5] hover:border-[#2563EB] hover:text-[#2563EB] px-4 py-2.5 rounded-lg focus-ring">
                Start priority check
              </button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {INTAKE.map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-xl border border-[#D7DEE5] px-4 py-3 flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span className="text-[13px] font-semibold text-[#173044]">{label}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      {/* High-signal summary row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {summary.map(({ icon: Icon, label, value, hint, tone }) => (
          <div key={label} className="bg-white border border-[#D7DEE5] rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Icon className={`w-4 h-4 ${tone === "amber" ? "text-[#B7791F]" : tone === "blue" ? "text-[#2563EB]" : "text-[#64748B]"}`} />
              <span className="text-[12px] font-semibold text-[#64748B] uppercase tracking-wide">{label}</span>
            </div>
            <p className="text-[26px] font-extrabold text-[#173044] leading-none">{value}</p>
            <p className="text-[12px] text-[#64748B] mt-1">{hint}</p>
          </div>
        ))}
      </div>

      {/* Decision queue */}
      <div className="mb-6">
        <DecisionQueue decisions={decisions} onOpen={setActive} />
        {!showSample && (
          <p className="mt-2 text-[13px] text-[#64748B]">
            No production decisions yet. <button onClick={() => setShowSample(true)} className="text-[#2563EB] font-semibold hover:underline">See an example</button> or add a decision.
          </p>
        )}
      </div>

      {/* Value agenda + Evidence readiness */}
      <div className="grid lg:grid-cols-12 gap-4">
        <div className="lg:col-span-8 space-y-3">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-[18px] font-bold text-[#173044]">Value agenda</h3>
              <p className="text-[13px] text-[#64748B]">The business areas most likely to influence growth, readiness or value creation.</p>
            </div>
          </div>
          <div className="bg-white border border-[#D7DEE5] rounded-2xl divide-y divide-[#D7DEE5]">
            {(showSample ? VALUE_LEVERS_VIEW : VALUE_LEVERS_VIEW.map(v => ({ ...v, current: "Not measured", evidence: "Not started", known: "No customer records reviewed", unknown: "Baseline needed" }))).map((v) => (
              <div key={v.name} className="px-5 py-4">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <p className="text-[15px] font-bold text-[#173044]">{v.name}</p>
                  <EvidenceStateBadge state={v.evidence} />
                </div>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1 text-[13px]">
                  <p className="text-[#243C4F]"><span className="text-[#64748B]">Current:</span> {v.current}</p>
                  <p className="text-[#243C4F]"><span className="text-[#64748B]">Known:</span> {v.known}</p>
                  <p className="text-[#243C4F]"><span className="text-[#64748B]">Unknown:</span> {v.unknown}</p>
                  <p className="text-[#243C4F]"><span className="text-[#64748B]">Next:</span> {v.next}</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-[12px] text-[#64748B] italic">Not enough reviewed information to calculate this yet.</p>
                  <button onClick={() => navigate("/app/evidence")} className="text-[13px] font-semibold text-[#2563EB] hover:underline focus-ring">Add evidence</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-3">
          <div>
            <h3 className="text-[18px] font-bold text-[#173044]">Evidence readiness</h3>
            <p className="text-[13px] text-[#64748B]">Source, review state and permissions attach to every finding.</p>
          </div>
          <div className="bg-white border border-[#D7DEE5] rounded-2xl divide-y divide-[#D7DEE5]">
            {(showSample ? EVIDENCE_CATEGORIES_VIEW : EVIDENCE_CATEGORIES_VIEW.map(c => ({ ...c, state: "Not started", items: 0 }))).map((c) => (
              <button
                key={c.name}
                onClick={() => showSample ? setActiveEvidence(c) : navigate("/app/evidence")}
                className="w-full flex items-center justify-between gap-3 px-5 py-3.5 hover:bg-[#F7F8F8] text-left focus-ring"
              >
                <div className="min-w-0">
                  <p className="text-[14px] font-semibold text-[#173044] truncate">{c.name}</p>
                  <p className="text-[12px] text-[#64748B]">{c.items} item{c.items === 1 ? "" : "s"}</p>
                </div>
                <EvidenceStateBadge state={c.state} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <DecisionDrawer decision={active} open={!!active} onClose={() => setActive(null)} />
      <EvidenceDrawer category={activeEvidence} open={!!activeEvidence} onClose={() => setActiveEvidence(null)} />
      <GuidedSetup open={guidedOpen} onClose={() => setGuidedOpen(false)} />
    </div>
  );
}

const VALUE_LEVERS_VIEW = [
  { name: "Customer retention", current: "Not measured", evidence: "Not started", known: "Customers tracked by name", unknown: "Cohort retention and early-life churn", next: "Complete the retention baseline" },
  { name: "Revenue per customer", current: "Unknown", evidence: "Owner-reported", known: "Total revenue", unknown: "Revenue per customer and segment", next: "Add revenue-by-customer detail" },
  { name: "Service mix", current: "Blended only", evidence: "Owner-reported", known: "Service categories offered", unknown: "Contribution by service line", next: "Separate contribution by line" },
  { name: "Pricing", current: "List prices only", evidence: "Needs review", known: "Current rate card", unknown: "Realized price and discounting", next: "Reconcile realized price" },
  { name: "Margin", current: "Not calculated", evidence: "Not started", known: "Revenue", unknown: "Direct and indirect cost by line", next: "Build a contribution statement" },
  { name: "Capacity", current: "Headcount only", evidence: "Owner-reported", known: "Team size", unknown: "Utilization and route density", next: "Measure utilization" },
];

const EVIDENCE_CATEGORIES_VIEW = [
  { name: "Business context", state: "Owner-reported", items: 3 },
  { name: "Financial information", state: "Not started", items: 0 },
  { name: "Customer information", state: "Needs review", items: 2 },
  { name: "Operating information", state: "Uploaded", items: 1 },
  { name: "People and ownership", state: "Owner-reported", items: 1 },
  { name: "Documents", state: "Not started", items: 0 },
  { name: "Decision history", state: "Reviewed", items: 4 },
];

function EvidenceDrawer({ category, open, onClose }) {
  if (!category) return null;
  const rows = [
    ["Source", EVIDENCE_DETAIL.source],
    ["Source owner", EVIDENCE_DETAIL.sourceOwner],
    ["Reporting period", EVIDENCE_DETAIL.period],
    ["Upload date", EVIDENCE_DETAIL.uploadDate],
    ["Review state", category.state],
    ["Permission scope", EVIDENCE_DETAIL.permissionScope],
    ["Version", EVIDENCE_DETAIL.version],
    ["Last change", EVIDENCE_DETAIL.lastChange],
    ["Linked decision", EVIDENCE_DETAIL.linked],
  ];
  return (
    <Drawer open={open} onClose={onClose} title={category.name} subtitle="Evidence detail" width="max-w-lg">
      <dl className="rounded-xl border border-[#D7DEE5] divide-y divide-[#D7DEE5]">
        {rows.map(([k, v]) => (
          <div key={k} className="grid grid-cols-3 gap-3 px-4 py-2.5">
            <dt className="text-[12px] font-semibold text-[#64748B] uppercase tracking-wide">{k}</dt>
            <dd className="col-span-2 text-[14px] text-[#173044]">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-[12px] text-[#64748B] italic">
        This item is not “verified” — the review process has not occurred.
      </p>
    </Drawer>
  );
}