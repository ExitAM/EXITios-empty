import React, { useState } from "react";
import { Search, Plus } from "lucide-react";
import { CONTACTS } from "@/lib/anycrm-data";

const initials = (name) => name.split(" ").map((p) => p[0]).slice(0, 2).join("");
const STATUS_STYLES = {
  Customer: "bg-emerald-50 text-emerald-700",
  Prospect: "bg-blue-50 text-blue-700",
  Lead: "bg-slate-100 text-slate-600",
  "On hold": "bg-amber-50 text-amber-700",
};

export default function ContactsView() {
  const [q, setQ] = useState("");
  const rows = CONTACTS.filter((c) =>
    `${c.name} ${c.company} ${c.email}`.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-[24px] font-semibold tracking-tight text-ramp-ink">Contacts</h1>
          <p className="text-[14px] text-ramp-ink/50">{CONTACTS.length} people across your accounts.</p>
        </div>
        <button className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-ramp-green hover:bg-ramp-green-dark text-ramp-green-fg text-[14px] font-semibold transition-colors">
          <Plus className="w-4 h-4" /> Add contact
        </button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ramp-ink/40" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search contacts…"
          className="w-full h-10 pl-9 pr-3 rounded-lg bg-ramp-surface border border-ramp-line text-[14px] text-ramp-ink placeholder:text-ramp-ink/40 outline-none focus:border-ramp-green"
        />
      </div>

      <div className="bg-ramp-surface border border-ramp-line rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[12px] uppercase tracking-wide text-ramp-ink/50 bg-ramp-muted/60">
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-6 py-3 font-medium">Company</th>
                <th className="px-6 py-3 font-medium">Email</th>
                <th className="px-6 py-3 font-medium">Phone</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Last activity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ramp-line">
              {rows.map((c) => (
                <tr key={c.id} className="hover:bg-ramp-muted/50 transition-colors">
                  <td className="px-6 py-3.5">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-ramp-green/15 text-ramp-green-dark flex items-center justify-center text-[12px] font-semibold">
                        {initials(c.name)}
                      </span>
                      <span className="text-[14px] font-semibold text-ramp-ink">{c.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3.5 text-[14px] text-ramp-ink/70">{c.company}</td>
                  <td className="px-6 py-3.5 text-[14px] text-ramp-ink/70">{c.email}</td>
                  <td className="px-6 py-3.5 text-[14px] text-ramp-ink/70">{c.phone}</td>
                  <td className="px-6 py-3.5">
                    <span className={`inline-block text-[12px] font-semibold px-2.5 py-1 rounded-md ${STATUS_STYLES[c.status]}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 text-[13px] text-ramp-ink/50">{c.last}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}