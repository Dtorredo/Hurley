'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  const waUrl = "https://wa.me/254112144064?text=Hello%20Hurleys%20Desk%2C%20I%20am%20inquiring%20about%20Kenyan%20real%20estate%20opportunities";

  return (
    <aside className="fixed bottom-6 right-6 z-50">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Concierge"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#1f2427] hover:bg-[#252b2f] border border-white/10 hover:border-[#25D366]/50 text-white text-xs font-semibold tracking-wide uppercase transition-all duration-200 rounded shadow-lg group"
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] shrink-0"></span>
        <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
        <span className="hidden sm:inline">WhatsApp Concierge</span>
        <span className="sm:hidden">WhatsApp</span>
      </a>
    </aside>
  );
}
