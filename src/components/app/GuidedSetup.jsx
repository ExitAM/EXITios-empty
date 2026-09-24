import React, { useState } from "react";
import { X, Compass } from "lucide-react";
import { GUIDED_SETUP_FIELDS } from "@/lib/app-data";

export default function GuidedSetup({ open, onClose }) {
  const [values, setValues] = useState({});
  if (!open) return null;

  const set = (k, v) => setValues((s) => ({ ...s, [k]: v }));

  return (
    <div className="fixed inset-0 z-[65] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#173044]/40 backdrop-blur-[1px]" onClick={onClose} aria-hidden="true" />
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
        <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-[#D7DEE5]">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#EEF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-[#173044] leading-tight">Guided setup</h3>
              <p className="text-[13px] text-[#64748B] mt-1">Answer what you know. “Unknown”, “Not applicable” and “Add later” are always valid.</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-[#64748B] hover:text-[#173044] hover:bg-[#F7F8F8] rounded-lg focus-ring" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); onClose(); }}
          className="flex-1 overflow-y-auto px-6 py-5 grid sm:grid-cols-2 gap-4"
        >
          {GUIDED_SETUP_FIELDS.map((f) => (
            <div key={f.key}>
              <label className="block text-[13px] font-semibold text-[#173044] mb-1.5">{f.label}</label>
              <select
                value={values[f.key] || ""}
                onChange={(e) => set(f.key, e.target.value)}
                className="w-full rounded-lg border border-[#D7DEE5] bg-white px-3 py-2.5 text-[14px] text-[#173044] focus:border-[#2563EB] outline-none"
              >
                <option value="">Select…</option>
                {f.options.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
          ))}
        </form>

        <div className="px-6 py-4 border-t border-[#D7DEE5] bg-[#F7F8F8] flex items-center justify-between gap-3 rounded-b-2xl">
          <p className="text-[12px] text-[#64748B]">No integration required. Start with what you have.</p>
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="text-[14px] font-semibold text-[#243C4F] hover:text-[#173044] px-4 py-2.5 rounded-lg focus-ring">
              Continue without data
            </button>
            <button
              onClick={(e) => { e.preventDefault(); onClose(); }}
              className="text-[14px] font-semibold bg-[#2563EB] text-white hover:bg-[#1d4ed8] px-4 py-2.5 rounded-lg focus-ring"
            >
              Save workspace setup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}