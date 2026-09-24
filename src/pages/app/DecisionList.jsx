import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SAMPLE_DECISIONS } from "@/lib/app-data";
import DecisionQueue from "@/components/app/DecisionQueue";
import DecisionDrawer from "@/components/app/DecisionDrawer";
import GuidedSetup from "@/components/app/GuidedSetup";
import { Compass, FileText, Upload, Plus } from "lucide-react";

export default function DecisionList() {
  const [active, setActive] = useState(null);
  const [guidedOpen, setGuidedOpen] = useState(false);

  return (
    <div className="px-4 lg:px-6 py-6 max-w-[1280px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5">
        <div>
          <h2 className="text-[26px] font-extrabold text-[#173044] tracking-[-0.01em]">Decisions</h2>
          <p className="text-[15px] text-[#64748B] mt-1">Every decision carries its question, evidence, owner and review state.</p>
        </div>
        <button onClick={() => setGuidedOpen(true)} className="inline-flex items-center gap-2 text-[14px] font-semibold bg-[#2563EB] text-white hover:bg-[#1d4ed8] px-4 py-2.5 rounded-lg focus-ring">
          <Plus className="w-4 h-4" /> Add decision
        </button>
      </div>

      {/* Empty state */}
      <div className="bg-white border border-[#D7DEE5] rounded-2xl p-6 lg:p-8 mb-6">
        <h3 className="text-[18px] font-bold text-[#173044]">Your workspace is ready.</h3>
        <p className="text-[14px] text-[#243C4F] mt-1 max-w-[680px]">
          No production decisions yet. You can begin without a CRM or spreadsheet — answer a few questions, use an EXITios template, upload a report or request guided setup.
        </p>
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <button onClick={() => setGuidedOpen(true)} className="inline-flex items-center gap-2 text-[14px] font-semibold bg-[#2563EB] text-white hover:bg-[#1d4ed8] px-4 py-2.5 rounded-lg focus-ring"><Compass className="w-4 h-4" /> Start guided setup</button>
          <Link to="/app/evidence" className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#173044] bg-white border border-[#D7DEE5] hover:border-[#2563EB] hover:text-[#2563EB] px-4 py-2.5 rounded-lg focus-ring"><FileText className="w-4 h-4" /> Use a template</Link>
          <Link to="/app/evidence" className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#173044] bg-white border border-[#D7DEE5] hover:border-[#2563EB] hover:text-[#2563EB] px-4 py-2.5 rounded-lg focus-ring"><Upload className="w-4 h-4" /> Upload a report</Link>
        </div>
      </div>

      <div className="flex items-center justify-between mb-2">
        <p className="text-[13px] font-semibold text-[#64748B] uppercase tracking-wide">Sample decision queue — illustrative</p>
      </div>
      <DecisionQueue decisions={SAMPLE_DECISIONS} onOpen={setActive} />
      <p className="mt-2 text-[13px] text-[#64748B]">Sample records demonstrate the workflow. They are not production data and are not verified.</p>

      <DecisionDrawer decision={active} open={!!active} onClose={() => setActive(null)} />
      <GuidedSetup open={guidedOpen} onClose={() => setGuidedOpen(false)} />
    </div>
  );
}