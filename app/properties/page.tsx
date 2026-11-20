'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  ShieldCheck, 
  FileText, 
  Compass, 
  ArrowRight, 
  Check, 
  MapPin, 
  ExternalLink,
  Lock,
  Send,
  Eye
} from 'lucide-react';
import { PROPERTIES, Property } from '@/data/properties';
import { useToast } from '@/components/ToastContext';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function PropertiesPage() {
  const { showToast } = useToast();
  const [selectedAssetClass, setSelectedAssetClass] = useState<string>('All');
  const [selectedCorridor, setSelectedCorridor] = useState<string>('All');
  const [sourcingForm, setSourcingForm] = useState({
    name: '',
    email: '',
    corridor: '',
    budget: '$1,500,000 - $5,000,000',
    criteria: ''
  });

  const assetClasses = ['All', 'Strategic Land', 'Prime Residential', 'Commercial & Mixed-Use', 'Joint Ventures'];
  const corridors = ['All', 'Kilimani', 'Karen', 'Westlands', 'Athi River', 'Kiambu Road'];

  const filteredProperties = PROPERTIES.filter((prop) => {
    const matchClass = selectedAssetClass === 'All' || prop.assetClass === selectedAssetClass;
    const matchCorridor = selectedCorridor === 'All' || prop.corridor === selectedCorridor;
    return matchClass && matchCorridor;
  });

  const handleSourcingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(
      'Sourcing Mandate Lodged',
      `Our Nairobi Senior Acquisitions Desk has received your bespoke parameters for ${sourcingForm.corridor || 'Kenya'}. We will audit our private off-market registry and revert within 4 business hours.`
    );
    setSourcingForm({
      name: '',
      email: '',
      corridor: '',
      budget: '$1,500,000 - $5,000,000',
      criteria: ''
    });
  };

  const waBase = "https://wa.me/254112144064?text=";

  return (
    <div className="flex flex-col w-full text-[#e0e3e5] bg-[#101415]">
      {/* Sovereign Editorial Header & Hero Ledger */}
      <section className="w-full bg-[#101415] pt-12 pb-10 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-white/[0.08]">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-3 text-[#e9c176] text-[11px] uppercase tracking-[0.25em] font-medium">
                <span className="w-2 h-2 bg-[#e9c176]"></span>
                <span>Prime Property Portfolio & Direct Mandates</span>
              </div>
              <h1 className="font-serif-headline text-3xl sm:text-4xl lg:text-[48px] lg:leading-[56px] text-white tracking-tight font-normal">
                Curated Properties & Strategic Land Across Kenya
              </h1>
              <p className="text-base sm:text-lg text-[#b5b0a6] font-light max-w-2xl leading-relaxed">
                Vetted residential estates, high-density development sites, and strategic land parcels across Nairobi and environs.
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-3 shrink-0 text-left lg:text-right">
              <div className="flex items-center gap-2 text-[#e9c176] text-[11px] uppercase tracking-widest font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e9c176]"></span>
                <span>Active Portfolio: 2026</span>
              </div>
              <span className="text-xs text-[#9a8f80]">Direct title representation & advocate escrow</span>
              <span className="text-[10px] uppercase tracking-wider text-[#9a8f80]/80 border border-white/10 px-2.5 py-1">
                Title Registry Verified
              </span>
            </div>
          </div>

          {/* Minimalist Horizontal Filter Ledger Bar */}
          <div className="pt-2">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 text-xs">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[#b5b0a6]">
                {/* Asset Class Filter */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                  <span className="text-[#9a8f80] uppercase tracking-widest text-[10px] font-semibold shrink-0">Asset Class:</span>
                  {assetClasses.map((ac) => (
                    <button
                      key={ac}
                      onClick={() => setSelectedAssetClass(ac)}
                      className={`pb-0.5 tracking-wide shrink-0 transition-colors ${
                        selectedAssetClass === ac
                          ? 'text-[#e9c176] font-semibold border-b border-[#e9c176]'
                          : 'hover:text-white'
                      }`}
                    >
                      {ac}
                    </button>
                  ))}
                </div>

                <div className="hidden xl:inline-block h-4 w-[1px] bg-white/10"></div>

                {/* Corridor Filter */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                  <span className="text-[#9a8f80] uppercase tracking-widest text-[10px] font-semibold shrink-0">Corridor:</span>
                  {corridors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedCorridor(c)}
                      className={`pb-0.5 tracking-wide shrink-0 transition-colors ${
                        selectedCorridor === c
                          ? 'text-white font-semibold border-b border-white/30'
                          : 'hover:text-white'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-5 sm:ml-auto text-[#9a8f80] text-xs uppercase tracking-wider">
                <span className="text-white font-medium">{filteredProperties.length} Properties Listed</span>
                <a
                  href="#sourcing-mandate"
                  className="text-[#e9c176] hover:text-white transition-colors flex items-center gap-1 font-semibold"
                >
                  <span>Custom Mandate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY LISTINGS LEDGER */}
      <section className="w-full py-20 bg-[#101415]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#e9c176] text-[11px] uppercase tracking-[0.25em] font-medium">
                <span>Featured Portfolio</span>
                <span>•</span>
                <span>Direct Mandates</span>
              </div>
              <h2 className="font-serif-headline text-2xl sm:text-3xl text-white tracking-tight">
                Prime Land Parcels, Luxury Enclaves & High-Yield Assets
              </h2>
            </div>
            <p className="text-[#b5b0a6] text-sm max-w-md font-light leading-relaxed">
              Verified ownership, certified boundary beacons, and clear title documentation for private and institutional buyers.
            </p>
          </div>

          {/* Properties Grid / Ledgers */}
          <div className="space-y-20">
            {filteredProperties.map((prop, idx) => {
              const waPropUrl = `${waBase}${encodeURIComponent(
                `Hello Hurleys Desk, I am requesting the due diligence abstract and Information Memorandum for ${prop.title} (${prop.corridor}).`
              )}`;

              return (
                <article key={prop.id} className="scroll-fade card-hover p-6 lg:p-8 bg-[#14181a]/50 border border-white/5 rounded-sm space-y-8 pb-12">
                  <div className="flex flex-col lg:flex-row items-start lg:items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-4">
                      <span className="font-serif-headline text-2xl text-[#9a8f80]/60 font-light italic">
                        #{String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] text-[#e9c176] uppercase tracking-[0.2em] font-semibold">
                            {prop.titleStatus.split('•')[0]}
                          </span>
                          <span className="text-white/20">•</span>
                          <span className="text-[11px] text-[#9a8f80] uppercase tracking-wider font-mono">
                            {prop.corridor} Node
                          </span>
                        </div>
                        <h3 className="font-serif-headline text-2xl lg:text-[32px] text-white font-normal mt-1">
                          {prop.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-baseline gap-8">
                      <div>
                        <span className="text-[10px] text-[#9a8f80] uppercase tracking-wider block font-mono">
                          Acquisition Basis
                        </span>
                        <span className="font-serif-headline text-2xl text-[#e9c176] font-semibold">
                          ${prop.priceUsd.toLocaleString()} <span className="text-xs font-normal text-[#b5b0a6]">USD</span>
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#9a8f80] uppercase tracking-wider block font-mono">
                          Footprint / Scale
                        </span>
                        <span className="font-serif-headline text-2xl text-white">
                          {prop.footprint}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                    {/* Visual Media */}
                    <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[440px] overflow-hidden group rounded-sm bg-[#15191c]">
                      <img
                        src={prop.imageUrl}
                        alt={prop.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                        <span className="flex items-center gap-1.5 font-light">
                          <MapPin className="w-3.5 h-3.5 text-[#e9c176]" />
                          {prop.subtitle}
                        </span>
                        <span className="text-[#e9c176] uppercase tracking-wider font-semibold text-[11px]">
                          {prop.auditStatus}
                        </span>
                      </div>
                    </div>

                    {/* Ledger Data & Specifications */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <p className="text-[#b5b0a6] font-light leading-relaxed text-sm">
                          {prop.description}
                        </p>

                        <div className="space-y-2.5 pt-2 text-xs border-t border-white/[0.08]">
                          {prop.specifications.map((spec, sIdx) => (
                            <div key={sIdx} className="flex items-start justify-between py-1.5 border-b border-white/[0.04]">
                              <span className="text-[#9a8f80] uppercase tracking-wider text-[10px] font-mono">
                                {spec.label}
                              </span>
                              <span className="text-white font-medium text-right pl-4">
                                {spec.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 space-y-3">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => {
                              showToast(
                                'Property Dossier Requested',
                                `The information pack for ${prop.title} has been queued. An advisory summary will be emailed to you.`
                              );
                            }}
                            className="flex-1 py-3 px-5 border border-[#e9c176] text-[#e9c176] hover:bg-[#e9c176] hover:text-[#241802] text-center text-xs font-semibold tracking-widest uppercase transition-all rounded-sm"
                          >
                            Request Property Dossier
                          </button>
                          <Link
                            href="/roi-calculator"
                            className="py-3 px-5 border border-white/20 text-white hover:border-white text-center text-xs tracking-widest uppercase transition-colors rounded-sm flex items-center gap-1.5"
                          >
                            <span>Model ROI</span>
                          </Link>
                        </div>

                        <a
                          href={waPropUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between text-xs text-[#b5b0a6] hover:text-[#25D366] transition-colors py-1 group"
                        >
                          <span className="flex items-center gap-2">
                            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                            <span>Enquire on WhatsApp</span>
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5-STAGE TITLE & ASSET VERIFICATION PROTOCOL */}
      <section className="w-full py-24 bg-[#0b0f10] border-t border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-[#e9c176] text-[11px] uppercase tracking-[0.25em] font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Fiduciary Risk Mitigation Framework</span>
              </div>
              <h2 className="font-serif-headline text-3xl text-white tracking-tight font-normal">
                The Hurleys 5-Stage Title & Due Diligence Protocol
              </h2>
            </div>
            <p className="text-[#b5b0a6] text-sm max-w-md font-light leading-relaxed">
              Kenyan real estate acquisition carries no room for ambiguity. Every single parcel on our desk undergoes a non-negotiable 5-tier audit prior to investor circulation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] border-y border-white/[0.08]">
            {[
              { num: "01", title: "Ardhi House Registry Audit", desc: "Official cadastral and green card searches through the Ministry of Lands ArdhiSasa digital system.", badge: "Title Certified" },
              { num: "02", title: "Beacon & Survey Validation", desc: "Licensed surveyors execute physical ground beacon inspection, boundary GPS coordinates, and Survey of Kenya confirmation.", badge: "Ground Accuracy" },
              { num: "03", title: "Rates & Rent Clearance", desc: "Complete audit of Nairobi City County rates, national land rent dues, and water authority easements.", badge: "Zero Arrears" },
              { num: "04", title: "NEMA & Zoning Clearance", desc: "Environmental impact assessment reviews and urban planning authority approvals for allowable FAR.", badge: "Permits Cleared" },
              { num: "05", title: "Escrow Protection", desc: "All buyer capital is held strictly in dual-signatory advocate escrow until registration and transfer issuance.", badge: "100% Capital Safety" }
            ].map((step) => (
              <div key={step.num} className="py-8 md:px-6 first:pl-0 last:pr-0 space-y-4">
                <span className="font-serif-headline text-3xl lg:text-4xl text-[#9a8f80]/40 font-light block font-mono">
                  {step.num}
                </span>
                <div className="space-y-2">
                  <h4 className="font-serif-headline text-lg text-white leading-snug font-medium">{step.title}</h4>
                  <p className="text-xs text-[#b5b0a6] font-light leading-relaxed">{step.desc}</p>
                </div>
                <div className="flex items-center gap-1.5 text-[#e9c176] text-[10px] uppercase tracking-wider pt-2 font-mono">
                  <Check className="w-3.5 h-3.5" />
                  <span>{step.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIDENTIAL SOURCING DESK FORM */}
      <section className="w-full py-28 bg-[#101415]" id="sourcing-mandate">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="border-t border-b border-white/[0.08] py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left narrative */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-2 text-[#e9c176] text-[11px] uppercase tracking-[0.25em] font-medium">
                  <Compass className="w-4 h-4" />
                  <span>Confidential Sourcing Desk</span>
                </div>
                <h3 className="font-serif-headline text-3xl text-white tracking-tight leading-tight">
                  Have a Specific Parcel or Institutional Mandate in Mind?
                </h3>
                <p className="text-[#b5b0a6] font-light text-sm leading-relaxed">
                  Many of Nairobi&apos;s most desirable land parcels and private residences are transacted quietly off-market. Share your specific criteria, and our acquisitions team will source suitable opportunities directly from vetted title holders.
                </p>
                <div className="space-y-3 pt-4 border-t border-white/[0.08] text-xs">
                  <div className="flex items-center gap-3 text-white font-medium">
                    <Lock className="w-4 h-4 text-[#e9c176]" />
                    <span className="uppercase tracking-wider">Strict Non-Disclosure Compliance</span>
                  </div>
                  <p className="text-[#9a8f80] leading-relaxed font-light">
                    Direct communication restricted to Hurleys Senior Acquisition Partners in London, Dubai, and Nairobi.
                  </p>
                  <div className="pt-2 text-[#e9c176] flex items-center gap-2 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#e9c176]"></span>
                    <span>Average partner briefing turnaround: 4 business hours</span>
                  </div>
                </div>
              </div>

              {/* Right Sourcing Sheet */}
              <div className="lg:col-span-7">
                <form onSubmit={handleSourcingSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2 border-b border-white/10 pb-2 focus-within:border-[#e9c176] transition-colors">
                      <label className="text-[10px] text-[#9a8f80] uppercase tracking-widest block">Investor / Entity Name</label>
                      <input
                        type="text"
                        required
                        value={sourcingForm.name}
                        onChange={(e) => setSourcingForm({ ...sourcingForm, name: e.target.value })}
                        placeholder="e.g. Dr. Arthur Kibera"
                        className="w-full bg-transparent text-white text-sm border-0 p-0 focus:ring-0 placeholder:text-white/20 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2 border-b border-white/10 pb-2 focus-within:border-[#e9c176] transition-colors">
                      <label className="text-[10px] text-[#9a8f80] uppercase tracking-widest block">Confidential Email</label>
                      <input
                        type="email"
                        required
                        value={sourcingForm.email}
                        onChange={(e) => setSourcingForm({ ...sourcingForm, email: e.target.value })}
                        placeholder="e.g. arthur@kiberaholdings.com"
                        className="w-full bg-transparent text-white text-sm border-0 p-0 focus:ring-0 placeholder:text-white/20 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2 border-b border-white/10 pb-2 focus-within:border-[#e9c176] transition-colors">
                      <label className="text-[10px] text-[#9a8f80] uppercase tracking-widest block">Target Corridor / Footprint</label>
                      <input
                        type="text"
                        value={sourcingForm.corridor}
                        onChange={(e) => setSourcingForm({ ...sourcingForm, corridor: e.target.value })}
                        placeholder="e.g., Westlands Commercial or Karen 5-10 Acres"
                        className="w-full bg-transparent text-white text-sm border-0 p-0 focus:ring-0 placeholder:text-white/20 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2 border-b border-white/10 pb-2 focus-within:border-[#e9c176] transition-colors">
                      <label className="text-[10px] text-[#9a8f80] uppercase tracking-widest block">Deployment Scale (USD)</label>
                      <select
                        value={sourcingForm.budget}
                        onChange={(e) => setSourcingForm({ ...sourcingForm, budget: e.target.value })}
                        className="w-full bg-transparent text-white text-sm border-0 p-0 focus:ring-0 cursor-pointer focus:outline-none"
                      >
                        <option className="bg-[#101415]" value="$250,000 - $500,000">$250,000 - $500,000</option>
                        <option className="bg-[#101415]" value="$500,000 - $1,500,000">$500,000 - $1,500,000</option>
                        <option className="bg-[#101415]" value="$1,500,000 - $5,000,000">$1,500,000 - $5,000,000</option>
                        <option className="bg-[#101415]" value="$5,000,000 - $20,000,000">$5,000,000 - $20,000,000</option>
                        <option className="bg-[#101415]" value="$20,000,000+ (Institutional Mandate)">$20,000,000+ (Institutional Mandate)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2 border-b border-white/10 pb-2 focus-within:border-[#e9c176] transition-colors">
                    <label className="text-[10px] text-[#9a8f80] uppercase tracking-widest block">Specific Acquisition Criteria</label>
                    <textarea
                      rows={3}
                      value={sourcingForm.criteria}
                      onChange={(e) => setSourcingForm({ ...sourcingForm, criteria: e.target.value })}
                      placeholder="Freehold preference, allowable zoning, Joint Venture interest, infrastructure prerequisites, or target IRR hurdle..."
                      className="w-full bg-transparent text-white text-sm border-0 p-0 focus:ring-0 placeholder:text-white/20 resize-none focus:outline-none font-light"
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4">
                    <div className="flex items-center gap-2 text-[#9a8f80] text-xs font-light">
                      <ShieldCheck className="w-4 h-4 text-[#e9c176]" />
                      <span>Transacted under Advocate Escrow protocol</span>
                    </div>
                    <button
                      type="submit"
                      className="py-3 px-8 border border-[#e9c176] text-[#e9c176] hover:bg-[#e9c176] hover:text-[#241802] transition-all text-xs font-semibold tracking-widest uppercase flex items-center gap-3 rounded-sm"
                    >
                      <span>Submit Briefing Sheet</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
