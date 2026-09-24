// Sample CRM data for the anyCRM dashboard. Static demo content — no persistence.

export const STAGES = ["Lead", "Qualified", "Proposal", "Negotiation", "Won"];

export const STAGE_STYLES = {
  Lead: "bg-slate-100 text-slate-600",
  Qualified: "bg-blue-50 text-blue-700",
  Proposal: "bg-violet-50 text-violet-700",
  Negotiation: "bg-amber-50 text-amber-700",
  Won: "bg-emerald-50 text-emerald-700",
  Lost: "bg-rose-50 text-rose-700",
};

export const STAT_CARDS = [
  { id: "revenue", label: "Total revenue", value: "$1,284,300", delta: "+18.2%", trend: "up", sub: "vs last quarter" },
  { id: "deals", label: "Open deals", value: "42", delta: "+6", trend: "up", sub: "12 new this month" },
  { id: "winrate", label: "Win rate", value: "34.8%", delta: "+3.1%", trend: "up", sub: "trailing 90 days" },
  { id: "pipeline", label: "Pipeline value", value: "$2.91M", delta: "-4.2%", trend: "down", sub: "vs last month" },
];

export const REVENUE_SERIES = [
  { m: "Feb", v: 168000 },
  { m: "Mar", v: 184000 },
  { m: "Apr", v: 176000 },
  { m: "May", v: 198000 },
  { m: "Jun", v: 212000 },
  { m: "Jul", v: 205000 },
  { m: "Aug", v: 234000 },
  { m: "Sep", v: 248000 },
];

export const DEALS = [
  { id: 1, company: "Northwind Labs", contact: "Dana Whitfield", value: 84500, stage: "Negotiation", owner: "Alex Rivera", date: "Sep 21" },
  { id: 2, company: "Halcyon Health", contact: "Marcus Lee", value: 142000, stage: "Proposal", owner: "Priya Shah", date: "Sep 19" },
  { id: 3, company: "Cobalt & Sons", contact: "Elena Brooks", value: 38200, stage: "Qualified", owner: "Alex Rivera", date: "Sep 18" },
  { id: 4, company: "Vermillion Studio", contact: "Theo Park", value: 96750, stage: "Won", owner: "Jordan Kim", date: "Sep 17" },
  { id: 5, company: "Brightfield Mfg", contact: "Sara Nguyen", value: 210000, stage: "Negotiation", owner: "Priya Shah", date: "Sep 15" },
  { id: 6, company: "Lumen Logistics", contact: "Owen Clarke", value: 52400, stage: "Lead", owner: "Jordan Kim", date: "Sep 14" },
  { id: 7, company: "Atlas Pest Group", contact: "Renee Foster", value: 67300, stage: "Proposal", owner: "Alex Rivera", date: "Sep 12" },
  { id: 8, company: "Pinecrest Vet", contact: "Dr. Sam Ortiz", value: 41800, stage: "Won", owner: "Priya Shah", date: "Sep 10" },
];

export const CONTACTS = [
  { id: 1, name: "Dana Whitfield", company: "Northwind Labs", email: "dana@northwind.co", phone: "(415) 555-0182", status: "Customer", last: "Sep 21" },
  { id: 2, name: "Marcus Lee", company: "Halcyon Health", email: "marcus@halcyon.io", phone: "(312) 555-0144", status: "Prospect", last: "Sep 19" },
  { id: 3, name: "Elena Brooks", company: "Cobalt & Sons", email: "elena@cobaltsons.com", phone: "(206) 555-0173", status: "Lead", last: "Sep 18" },
  { id: 4, name: "Theo Park", company: "Vermillion Studio", email: "theo@vermillion.studio", phone: "(646) 555-0119", status: "Customer", last: "Sep 17" },
  { id: 5, name: "Sara Nguyen", company: "Brightfield Mfg", email: "sara@brightfield.com", phone: "(713) 555-0166", status: "Prospect", last: "Sep 15" },
  { id: 6, name: "Owen Clarke", company: "Lumen Logistics", email: "owen@lumen.co", phone: "(503) 555-0188", status: "Lead", last: "Sep 14" },
  { id: 7, name: "Renee Foster", company: "Atlas Pest Group", email: "renee@atlaspest.com", phone: "(404) 555-0152", status: "On hold", last: "Sep 12" },
  { id: 8, name: "Dr. Sam Ortiz", company: "Pinecrest Vet", email: "sam@pinecrestvet.com", phone: "(303) 555-0137", status: "Customer", last: "Sep 10" },
];

export const ACTIVITIES = [
  { id: 1, type: "meeting", title: "Demo call with Brightfield Mfg", detail: "Sara Nguyen · moved to negotiation", when: "2h ago" },
  { id: 2, type: "email", title: "Proposal sent to Halcyon Health", detail: "Marcus Lee · $142k · awaiting reply", when: "5h ago" },
  { id: 3, type: "task", title: "Follow-up task completed", detail: "Cobalt & Sons · qualified last week", when: "Yesterday" },
  { id: 4, type: "call", title: "Discovery call with Lumen Logistics", detail: "Owen Clarke · booked follow-up", when: "Yesterday" },
  { id: 5, type: "note", title: "Note added to Vermillion Studio", detail: "Closed-won · $96.75k", when: "2 days ago" },
  { id: 6, type: "meeting", title: "Quarterly review with Atlas Pest Group", detail: "Renee Foster · pricing revision", when: "3 days ago" },
];

export const DEALS_BY_OWNER = [
  { name: "Alex Rivera", value: 412000 },
  { name: "Priya Shah", value: 384000 },
  { name: "Jordan Kim", value: 138000 },
];

export const DEALS_BY_SOURCE = [
  { name: "Outbound", value: 920 },
  { name: "Inbound", value: 640 },
  { name: "Referral", value: 380 },
  { name: "Partner", value: 210 },
  { name: "Event", value: 180 },
];