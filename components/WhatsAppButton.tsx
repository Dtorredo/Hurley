'use client';

import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppButton() {
  const waUrl = "https://wa.me/254112144064?text=Hello%20Hurleys%20Desk%2C%20I%20am%20inquiring%20about%20Kenyan%20real%20estate%20opportunities";

  return (
    <aside className="fixed bottom-6 right-6 z-50">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold tracking-wide uppercase transition-all duration-200 rounded-full shadow-xl group"
      >
        <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
        <span>WhatsApp</span>
      </a>
    </aside>
  );
}
