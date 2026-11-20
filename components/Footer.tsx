import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Scale, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0f10] border-t border-white/[0.06] pt-20 pb-12 text-[#b5b0a6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/[0.06]">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-7 w-7 rounded border border-[#e9c176]/30 bg-[#1d2022] flex items-center justify-center text-[#e9c176] font-serif font-bold text-sm">
                H
              </div>
              <span className="font-serif-headline text-base text-white tracking-wider uppercase font-semibold">
                Hurleys
              </span>
            </div>
            <p className="text-xs text-[#b5b0a6]/80 font-light leading-relaxed">
              Fiduciary real estate sourcing and sovereign advisory desk for the Republic of Kenya. Connecting global capital directly to audited title deeds.
            </p>
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#e9c176] space-y-1.5 pt-1">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>KPDA Corporate Member</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5" />
                <span>EARB Regulated Agency</span>
              </div>
            </div>
          </div>

          {/* Col 2: Asset Classes */}
          <div className="space-y-3">
            <h4 className="text-xs text-white uppercase tracking-[0.2em] font-medium">Asset Classes</h4>
            <ul className="space-y-2 text-xs font-light text-[#b5b0a6]/80">
              <li>
                <Link href="/properties?filter=Strategic Land" className="hover:text-[#e9c176] transition-colors">
                  Prime Land & Subdivision
                </Link>
              </li>
              <li>
                <Link href="/properties?filter=Prime Residential" className="hover:text-[#e9c176] transition-colors">
                  High-Yield Apartments
                </Link>
              </li>
              <li>
                <Link href="/properties?filter=Commercial & Mixed-Use" className="hover:text-[#e9c176] transition-colors">
                  Commercial Grade-A
                </Link>
              </li>
              <li>
                <Link href="/properties?filter=Prime Residential" className="hover:text-[#e9c176] transition-colors">
                  Luxury Karen & Runda
                </Link>
              </li>
              <li>
                <Link href="/joint-ventures" className="hover:text-[#e9c176] transition-colors">
                  Consortium Joint Ventures
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Corridors */}
          <div className="space-y-3">
            <h4 className="text-xs text-white uppercase tracking-[0.2em] font-medium">Strategic Corridors</h4>
            <ul className="space-y-2 text-xs font-light text-[#b5b0a6]/80">
              <li><span className="text-white/80">Westlands Core</span> • General Mathenge</li>
              <li><span className="text-white/80">Kilimani & Kileleshwa</span> Corridor</li>
              <li><span className="text-white/80">Karen & Runda</span> Diplomatic Zones</li>
              <li><span className="text-white/80">Upper Hill</span> Financial District</li>
              <li><span className="text-white/80">Kiambu Road</span> Townhouse Axis</li>
              <li><span className="text-white/80">Athi River</span> SGR Logistics Hub</li>
            </ul>
          </div>

          {/* Col 4: Leadership & Desks */}
          <div className="space-y-3">
            <h4 className="text-xs text-white uppercase tracking-[0.2em] font-medium">Leadership</h4>
            <ul className="space-y-2 text-xs font-light text-[#b5b0a6]/80">
              <li>
                <span className="text-white font-medium block">Joyce Mumbi Wahome</span>
                <span className="text-white/50 text-[11px]">Founder & CEO</span>
                <a href="tel:+254720378737" className="text-[#e9c176] hover:underline font-mono text-[11px] block mt-0.5">
                  +254 720 378 737
                </a>
              </li>
              <li className="pt-1">
                <span className="text-white font-medium block">Kiptanui Christopher Kipkemboi</span>
                <span className="text-white/50 text-[11px]">Head of Sales</span>
                <a href="https://wa.me/254112144064" target="_blank" rel="noopener noreferrer" className="text-[#e9c176] hover:underline font-mono text-[11px] block mt-0.5">
                  +254 112 144 064
                </a>
              </li>
              <li className="pt-2 text-[11px] text-[#e9c176]">
                London • Dubai • Nairobi
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Disclaimers */}
          <div className="space-y-3">
            <h4 className="text-xs text-white uppercase tracking-[0.2em] font-medium">Headquarters</h4>
            <div className="space-y-1.5 text-xs font-light text-[#b5b0a6]/80">
              <p className="text-white flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#e9c176]" />
                Delta Corner Tower, Westlands
              </p>
              <p>Nairobi, Republic of Kenya</p>
              <p className="pt-2 text-[#e9c176] font-mono flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                privateclient@hurleysinternational.com
              </p>
              <div className="pt-1 space-y-1 font-mono text-[11px]">
                <p className="text-white/80 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#e9c176]" />
                  <a href="tel:+254720378737" className="hover:text-white transition-colors">+254 720 378 737 (Joyce)</a>
                </p>
                <p className="text-white/80 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#e9c176]" />
                  <a href="https://wa.me/254112144064" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+254 112 144 064 (Christopher)</a>
                </p>
              </div>
            </div>
            <p className="pt-2 text-[10px] text-white/40 leading-relaxed font-light">
              IRR projections and yields are based on audited models subject to independent title conveyance and legal certification.
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-white/40">
          <p>© 2026 Hurleys International Real Estate Ltd. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-[10px] tracking-[0.18em] uppercase">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Protocol</span>
            <span>/</span>
            <span className="hover:text-white transition-colors cursor-pointer">ArdhiSasa Audit</span>
            <span>/</span>
            <span className="hover:text-white transition-colors cursor-pointer">AML Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

