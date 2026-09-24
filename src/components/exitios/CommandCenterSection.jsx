import React, { useState } from "react";
import Drawer from "@/components/app/Drawer";
import { ArrowRight } from "lucide-react";

const STATS = [
  { label: "Needs your attention", value: "3" },
  { label: "Evidence gaps", value: "5" },
  { label: "Awaiting review", value: "1" },
  { label: "Assigned actions", value: "2" },
];

const ROWS = [
  { id: "r1", title: "Customer retention baseline", status: "Needs evidence", tone: "amber", owner: "Unassigned", next: "Add monthly customer data", changed: "2h ago", review: "Preliminary" },
  { id: "r2", title: "Pricing on premium tier", status: "Ready for review", tone: "blue", owner: "You", next: "Review lost-deal reasons", changed: "Today", review: "This week" },
  { id: "r3", title: "Supplier contract renewal", status: "Approved", tone: "teal", owner: "You", next: "Collect benchmark quotes", changed: "Yesterday", review: "Oct 2" },
  { id: "r4", title: "Second service route", status: "Draft", tone: "slate", owner: "Unassigned", next: "Request route-density report", changed: "2d ago", review: "Not set" },
  { id: "r5", title: "Sunset low-margin line", status: "Closed", tone: "slate", owner: "You", next: "Transition scheduled", changed: "Last week", review: "Completed" },
];

const toneClass = {
  amber: "bg-[#FEF6E7] text-[#B7791F] border-[#F1D9A0]",
  blue: "bg-[#EEF6FF] text-[#2563EB] border-[#BFDBFE]",
  teal: "bg-[#E6F4F1] text-[#0F766E] border-[#BFE3DA]",
  slate: "bg-[#F7F8F8] text-[#64748B] border-[#E4E9EF]",
};

export default function CommandCenterSection() {
  const [open, setOpen] = useState(null);
  const row = ROWS.find((r) => r.id === open);

  return (
    <section id="command" className="bg-[#173044] py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <div className="max-w-[720px] mb-10">
          <p className="text-[11px] fw-550 uppercase tracking-[0.12em] text-[#EEF6FF] mb-3">Command center</p>
          <h2 className="text-[28px] sm:text-[32px] lg:text-[38px] fw-600 tracking-[-0.035em] leading-[1.1] text-white">
            A business dashboard should tell you what to do next.
          </h2>
        </div>

        <div className="bg-white border border-[#E4E9EF] rounded-[14px] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.4)] overflow-hidden">
          {/* summary row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#E4E9EF] border-b border-[#E4E9EF]">
            {STATS.map((s) => (
              <div key={s.label} className="px-5 py-4">
                <p className="text-[11px] fw-550 uppercase tracking-[0.08em] text-[#64748B]">{s.label}</p>
                <p className="text-[24px] fw-650 tracking-[-0.02em] text-[#173044] mt-1">{s.value}</p>
              </div>
            ))}
          </div>

          {/* header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-[#E4E9EF] bg-[#F7F8F8]">
            <p className="text-[12px] fw-550 uppercase tracking-[0.08em] text-[#64748B]">Recently changed</p>
            <span className="text-[11px] fw-450 text-[#64748B]">Illustrative · Sample information</span>
          </div>

          {/* rows */}
          <div className="divide-y divide-[#E4E9EF]">
            {ROWS.map((r) => (
              <button
                key={r.id}
                onClick={() => setOpen(r.id)}
                className="w-full grid grid-cols-12 gap-2 items-center px-5 py-3 text-left hover:bg-[#F7F8F8] transition-colors duration-200 focus-ring"
              >
                <div className="col-span-12 sm:col-span-5 min-w-0">
                  <p className="text-[14px] fw-600 text-[#173044] truncate">{r.title}</p>
                  <p className="text-[12px] fw-450 text-[#64748B] truncate sm:hidden">Next: {r.next}</p>
                </div>
                <div className="col-span-4 sm:col-span-2">
                  <span className={`text-[11px] fw-550 px-2 py-1 rounded-full border ${toneClass[r.tone]}`}>{r.status}</span>
                </div>
                <div className="col-span-4 sm:col-span-2 text-[13px] fw-450 text-[#243C4F]">{r.owner}</div>
                <div className="hidden sm:block sm:col-span-2 text-[13px] fw-450 text-[#243C4F] truncate">{r.next}</div>
                <div className="col-span-4 sm:col-span-1 flex justify-end">
                  <span className="text-[13px] fw-550 text-[#2563EB] inline-flex items-center gap-1">Open <ArrowRight className="w-3.5 h-3.5" /></span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Drawer
        open={!!row}
        onClose={() => setOpen(null)}
        title={row ? row.title : ""}
        subtitle={row ? `${row.status} · ${row.workflow || "Sample"}` : ""}
        width="max-w-lg"
      >
        {row && (
          <dl className="rounded-[14px] border border-[#E4E9EF] divide-y divide-[#E4E9EF]">
            {[
              ["Decision", row.title],
              ["Status", row.status],
              ["Owner", row.owner],
              ["Next action", row.next],
              ["Review", row.review],
              ["Changed", row.changed],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-3 gap-3 px-4 py-2.5">
                <dt className="text-[11px] fw-550 uppercase tracking-[0.08em] text-[#64748B]">{k}</dt>
                <dd className="col-span-2 text-[14px] fw-450 text-[#173044]">{v}</dd>
              </div>
            ))}
          </dl>
        )}
        <p className="mt-3 text-[12px] fw-450 text-[#64748B] italic">
          Illustrative — sample information. Not verified until reviewed.
        </p>
      </Drawer>
    </section>
  );
}