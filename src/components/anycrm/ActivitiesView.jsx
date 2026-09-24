import React from "react";
import { Phone, Mail, FileText, Calendar, CheckCircle2 } from "lucide-react";
import { ACTIVITIES } from "@/lib/anycrm-data";

const ICONS = { call: Phone, email: Mail, note: FileText, meeting: Calendar, task: CheckCircle2 };

export default function ActivitiesView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[24px] font-semibold tracking-tight text-ramp-ink">Activities</h1>
        <p className="text-[14px] text-ramp-ink/50">Recent updates across your pipeline.</p>
      </div>
      <div className="bg-ramp-surface border border-ramp-line rounded-2xl p-6">
        <ol className="relative border-l border-ramp-line ml-2 space-y-6">
          {ACTIVITIES.map((a) => {
            const Icon = ICONS[a.type];
            return (
              <li key={a.id} className="pl-6 relative">
                <span className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-ramp-green/15 text-ramp-green-dark flex items-center justify-center">
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[14px] font-semibold text-ramp-ink">{a.title}</p>
                  <span className="text-[12px] text-ramp-ink/50 shrink-0">{a.when}</span>
                </div>
                <p className="text-[13px] text-ramp-ink/60 mt-0.5">{a.detail}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}