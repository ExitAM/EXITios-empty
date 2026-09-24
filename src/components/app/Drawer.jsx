import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function Drawer({ open, onClose, title, subtitle, children, footer, width = "max-w-xl" }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-[#173044]/40 backdrop-blur-[1px]" onClick={onClose} aria-hidden="true" />
      <div className={`absolute right-0 top-0 h-full w-full ${width} bg-white shadow-2xl flex flex-col`}>
        <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-[#D7DEE5]">
          <div className="min-w-0">
            <h3 className="text-[18px] font-bold text-[#173044] leading-tight">{title}</h3>
            {subtitle && <p className="text-[13px] text-[#64748B] mt-1">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#64748B] hover:text-[#173044] hover:bg-[#F7F8F8] rounded-lg focus-ring"
            aria-label="Close panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-5">{children}</div>
        {footer && <div className="px-6 py-4 border-t border-[#D7DEE5] bg-[#F7F8F8]">{footer}</div>}
      </div>
    </div>
  );
}