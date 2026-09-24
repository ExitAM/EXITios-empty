import React, { useState } from "react";
import Drawer from "@/components/app/Drawer";

const CHAIN = ["Source", "Review state", "Calculation", "Decision", "Action"];

const STATES = [
  "Owner-reported",
  "Uploaded",
  "Needs review",
  "Reviewed",
  "Reconciled",
  "Verified in workspace",
];

const ITEMS = [
  { id: "e1", name: "Customer list", state: "Owner-reported", tone: "ivory" },
  { id: "e2", name: "Revenue by month", state: "Uploaded", tone: "blue" },
  { id: "e3", name: "Cancellations", state: "Not started", tone: "slate" },
  { id: "e4", name: "Margin by line", state: "Needs review", tone: "amber" },
  { id: "e5", name: "Contribution statement", state: "Reviewed", tone: "teal" },
  { id: "e6", name: "Customer retention", state: "Reconciled", tone: "teal" },
];

const toneClass = {
  ivory: "bg-[#F5F0E8] text-[#243C4F] border-[#E5DCC8]",
  blue: "bg-[#EEF6FF] text-[#2563EB] border-[#BFDBFE]",
  amber: "bg-[#FEF6E7] text-[#B7791F] border-[#F1D9A0]",
  teal: "bg-[#E6F4F1] text-[#0F766E] border-[#BFE3DA]",
  slate: "bg-[#F7F8F8] text-[#64748B] border-[#E4E9EF]",
};

export default function DataTrust() {
  const [open, setOpen] = useState(null);
  const item = ITEMS.find((i) => i.id === open);

  return (
    <section id="trust" className="bg-white py-20 lg:py-28 border-t border-[#E4E9EF]">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <div className="max-w-[720px] mb-12">
          <p className="text-[11px] fw-550 uppercase tracking-[0.12em] text-[#2563EB] mb-3">Data trust</p>
          <h2 className="text-[28px] sm:text-[32px] lg:text-[38px] fw-600 tracking-[-0.035em] leading-[1.1] text-[#173044]">
            See where every conclusion comes from.
          </h2>
        </div>

        {/* workflow chain */}
        <div className="flex flex-wrap items-center gap-y-2 mb-10">
          {CHAIN.map((c, i) => (
            <span key={c} className="inline-flex items-center">
              <span className="text-[13px] fw-550 px-3 py-1.5 rounded-full border border-[#E4E9EF] bg-[#F7F8F8] text-[#173044]">
                {c}
              </span>
              {i < CHAIN.length - 1 && <span className="text-[#C2CCD8] mx-1 select-none" aria-hidden="true">→</span>}
            </span>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
          {/* state legend */}
          <div className="lg:col-span-4">
            <p className="text-[11px] fw-550 uppercase tracking-[0.08em] text-[#64748B] mb-3">Review states</p>
            <div className="flex flex-wrap gap-1.5">
              {STATES.map((s) => (
                <span key={s} className="text-[12px] fw-550 px-2.5 py-1.5 rounded-full border border-[#E4E9EF] bg-[#F7F8F8] text-[#243C4F]">
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[13px] fw-450 text-[#64748B] leading-relaxed">
              Every finding carries its source and review state — never presented as verified without one.
            </p>
          </div>

          {/* evidence list */}
          <div className="lg:col-span-8">
            <div className="bg-[#F7F8F8] border border-[#E4E9EF] rounded-[14px] divide-y divide-[#E4E9EF]">
              {ITEMS.map((it) => (
                <button
                  key={it.id}
                  onClick={() => setOpen(it.id)}
                  className="w-full flex items-center justify-between gap-3 px-5 py-3 text-left hover:bg-white transition-colors duration-200 focus-ring"
                >
                  <div className="min-w-0">
                    <p className="text-[14px] fw-600 text-[#173044] truncate">{it.name}</p>
                    <p className="text-[12px] fw-450 text-[#64748B]">Click to inspect source</p>
                  </div>
                  <span className={`text-[12px] fw-550 px-2.5 py-1 rounded-full border ${toneClass[it.tone]}`}>{it.state}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Drawer
        open={!!item}
        onClose={() => setOpen(null)}
        title={item ? item.name : ""}
        subtitle="Evidence detail"
        width="max-w-lg"
      >
        {item && (
          <dl className="rounded-[14px] border border-[#E4E9EF] divide-y divide-[#E4E9EF]">
            {[
              ["Source", "Owner-reported"],
              ["Review state", item.state],
              ["Calculation", "Retention = repeat customers ÷ prior-period customers"],
              ["Decision", "Customer retention baseline"],
              ["Action", "Add monthly customer data"],
              ["Permissions", "Workspace members"],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-3 gap-3 px-4 py-2.5">
                <dt className="text-[11px] fw-550 uppercase tracking-[0.08em] text-[#64748B]">{k}</dt>
                <dd className="col-span-2 text-[14px] fw-450 text-[#173044]">{v}</dd>
              </div>
            ))}
          </dl>
        )}
        <p className="mt-3 text-[12px] fw-450 text-[#64748B] italic">
          Illustrative — sample information. Not verified until the review process occurs.
        </p>
      </Drawer>
    </section>
  );
}