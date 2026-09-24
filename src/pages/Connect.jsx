import React, { useMemo, useState } from "react";
import { Copy, Check, ShieldCheck, Sparkles, Bot, Terminal, MessageSquare, RefreshCw } from "lucide-react";

const CLIENTS = [
  {
    id: "claude",
    label: "Claude",
    icon: Sparkles,
    steps: [
      "Open the profile menu (top right) and choose Settings.",
      "Go to Connectors and click “Add custom connector”.",
      "Give the connector a name (e.g. EXITios).",
      "Paste the server URL below and click Add.",
      "When prompted, approve access — you'll sign in to EXITios and allow the assistant to act as you.",
    ],
  },
  {
    id: "chatgpt",
    label: "ChatGPT",
    icon: Bot,
    steps: [
      "Open Settings → Apps and enable Developer mode (accept the risk ChatGPT warns about).",
      "Click “Create app” and name it (e.g. EXITios).",
      "Paste the server URL below and click Create.",
      "Enable the app from the chat composer before prompting it.",
      "When prompted, approve access — you'll sign in to EXITios and allow the assistant to act as you.",
    ],
  },
  {
    id: "cursor",
    label: "Cursor",
    icon: Terminal,
    steps: [
      "Open Settings → Tools & Integrations.",
      "Click “New MCP Server”, which opens your mcp.json file.",
      "Add an entry whose url is the server URL below, then save.",
      "Toggle the server on.",
      "When prompted, approve access — you'll sign in to EXITios and allow the assistant to act as you.",
    ],
  },
  {
    id: "custom",
    label: "Custom",
    icon: MessageSquare,
    steps: [
      "Copy the server URL below.",
      "Add it as a streamable HTTP MCP server in your client.",
      "Name + URL is all most clients need; reload the client afterward.",
      "When prompted, approve access — you'll sign in to EXITios and allow the assistant to act as you.",
    ],
  },
];

export default function Connect() {
  const serverUrl = useMemo(
    () => new URL("/api/mcp", window.location.origin).toString(),
    []
  );
  const [active, setActive] = useState("claude");
  const [copied, setCopied] = useState(false);
  const client = CLIENTS.find((c) => c.id === active);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(serverUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (_) {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="min-h-full bg-[#F7F8F8]">
      <div className="max-w-[860px] mx-auto px-5 lg:px-8 py-10 lg:py-14">
        <p className="text-[11px] fw-550 uppercase tracking-[0.12em] text-[#2563EB] mb-3">AI assistants</p>
        <h1 className="text-[26px] lg:text-[32px] fw-650 tracking-[-0.035em] leading-[1.1] text-[#173044]">
          Connect an AI assistant to EXITios
        </h1>
        <p className="mt-3 text-[15px] fw-450 text-[#243C4F] max-w-[620px]">
          Point Claude, ChatGPT, Cursor, or any MCP-compatible client at your EXITios
          server. The assistant signs in as you and can only do what your account allows.
        </p>

        <div className="mt-7 rounded-[14px] border border-[#E4E9EF] bg-white p-5 lg:p-6">
          <p className="text-[11px] fw-550 uppercase tracking-[0.08em] text-[#64748B]">Server URL</p>
          <div className="mt-2 flex flex-col sm:flex-row gap-2.5">
            <input
              readOnly
              value={serverUrl}
              onFocus={(e) => e.target.select()}
              className="flex-1 h-11 px-3 rounded-lg border border-[#E4E9EF] bg-[#F7F8F8] text-[13px] fw-450 text-[#173044] font-mono outline-none"
              aria-label="MCP server URL"
            />
            <button
              onClick={copy}
              className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-lg bg-[#173044] text-white text-[14px] fw-550 hover:bg-[#1d4ed8] transition-colors focus-ring"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <p className="mt-3 text-[12px] fw-450 text-[#64748B] flex items-start gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
            This server requires sign-in. The assistant acts only as your account — it can read and change data you have access to, nothing more.
          </p>
        </div>

        <div className="mt-6 rounded-[14px] border border-[#E4E9EF] bg-white overflow-hidden">
          <div className="flex border-b border-[#E4E9EF]" role="tablist" aria-label="AI client">
            {CLIENTS.map((c) => {
              const Icon = c.icon;
              const isActive = c.id === active;
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(c.id)}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-3 text-[14px] fw-550 transition-colors focus-ring ${
                    isActive
                      ? "text-[#173044] border-b-2 border-[#2563EB] bg-white"
                      : "text-[#64748B] hover:text-[#173044] border-b-2 border-transparent"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{c.label}</span>
                </button>
              );
            })}
          </div>
          <ol className="p-5 lg:p-6 space-y-3">
            {client.steps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-[#F7F8F8] border border-[#E4E9EF] flex items-center justify-center text-[12px] fw-600 text-[#173044]">
                  {i + 1}
                </span>
                <p className="text-[14px] fw-450 text-[#243C4F] leading-relaxed pt-0.5">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-6 flex items-start gap-2.5 rounded-[14px] border border-[#E4E9EF] bg-[#F7F8F8] p-4">
          <RefreshCw className="w-4 h-4 text-[#64748B] shrink-0 mt-0.5" />
          <p className="text-[13px] fw-450 text-[#64748B]">
            Assistants cache the tool list. If we add or change tools, refresh or reconnect the connector so it picks up the latest.
          </p>
        </div>
      </div>
    </div>
  );
}