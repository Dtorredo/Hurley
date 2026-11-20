'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Trees, 
  ShieldCheck, 
  Handshake, 
  CheckCircle2, 
  ArrowRight, 
  UploadCloud, 
  Lock, 
  Send, 
  FileCheck2,
  TrendingUp,
  Percent
} from 'lucide-react';
import { useToast } from '@/components/ToastContext';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function JointVenturesPage() {
  const { showToast } = useToast();
  const [role, setRole] = useState<'landowner' | 'developer' | 'investor'>('landowner');
  const [filesCount, setFilesCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    location: 'Westlands',
    landSize: '1.0 to 2.5 Acres',
    titleStatus: 'Clean Freehold Deed in Hand',
    assetValue: '',
    partnershipModel: 'Land Equity + Developer Capex (Standard JV)',
    projectSummary: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
    showToast(
      'Joint Venture Mandate Lodged',
      `Proposal for ${formData.location} received under strict NDA. A Senior Partner from our Nairobi Transactions Committee will contact you within 24 hours.`
    );
  };

  const waUrl = "https://wa.me/254112144064?text=Hello%20Hurleys%20Desk%2C%20I%20am%20inquiring%20about%20a%20Joint%20Venture%20partnership%20in%20Kenya";

  return (
    <div className="flex flex-col w-full text-[#e0e3e5] bg-[#101415]">
      {/* HERO BANNER SECTION */}
      <section className="relative w-full overflow-hidden bg-[#0b0f10] -mt-[116px] pt-[156px] pb-24 border-b border-white/5">
        <div className="absolute top-0 right-1/4 w-[540px] h-[540px] rounded-full bg-[#e9c176]/5 blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-20 left-10 w-[420px] h-[420px] rounded-full bg-[#3d4a5f]/10 blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text & Headline Column */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-[#e9c176] uppercase tracking-[0.2em] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e9c176]"></span>
                  Institutional Development Desk • Nairobi
                </span>
              </div>
              <h1 className="font-serif-headline text-3xl sm:text-4xl lg:text-[50px] lg:leading-[58px] text-white tracking-tight font-normal">
                Joint Ventures & Strategic{' '}
                <span className="italic text-[#e9c176]">Development Partnerships</span>
              </h1>
              <p className="text-base sm:text-lg text-[#b5b0a6] font-light leading-relaxed max-w-2xl">
                Connecting prime Kenyan landowners, institutional capital, and tier-1 developers. We structure equitable, legally secure joint venture partnerships backed by advocate escrow and milestone delivery.
              </p>

              {/* Core Stat Tickers */}
              <div className="grid grid-cols-3 gap-6 pt-4 pb-2 max-w-xl border-t border-white/10 mt-2">
                <div>
                  <span className="text-[10px] text-[#e9c176] uppercase tracking-wider block font-mono">Completed JVs</span>
                  <span className="font-serif-headline text-2xl sm:text-3xl text-white leading-none block mt-1">KES 18.4B</span>
                  <span className="text-xs text-[#9a8f80] block mt-1 font-light">Asset Pipeline Value</span>
                </div>
                <div className="border-l border-white/10 pl-6">
                  <span className="text-[10px] text-[#e9c176] uppercase tracking-wider block font-mono">Avg Project IRR</span>
                  <span className="font-serif-headline text-2xl sm:text-3xl text-white leading-none block mt-1">26.8%</span>
                  <span className="text-xs text-[#9a8f80] block mt-1 font-light">Underwritten Yields</span>
                </div>
                <div className="border-l border-white/10 pl-6">
                  <span className="text-[10px] text-[#e9c176] uppercase tracking-wider block font-mono">Title Verification</span>
                  <span className="font-serif-headline text-2xl sm:text-3xl text-white leading-none block mt-1">100%</span>
                  <span className="text-xs text-[#9a8f80] block mt-1 font-light">ArdhiSasa Cleared</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#jv-intake"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-sm bg-[#e9c176] text-[#241802] text-xs font-semibold tracking-wider uppercase hover:bg-white hover:text-[#101415] transition-all gap-2"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Submit JV Land / Capital Proposal</span>
                </a>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3.5 rounded-sm border border-white/15 text-white text-xs font-medium hover:border-[#25D366] hover:text-[#25D366] transition-colors gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Hero Mosaic / Underwriting Card */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="card-hover relative bg-[#191c1e]/70 border border-white/10 rounded-sm overflow-hidden">
                <div className="h-64 sm:h-72 w-full overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?w=900&q=80&fit=crop&auto=format"
                    alt="Masterplanned Urban Land in Nairobi"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191c1e] via-[#191c1e]/40 to-transparent"></div>
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0b0f10]/80 backdrop-blur-md text-[#e9c176] text-[10px] uppercase tracking-wider border border-white/10 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Direct Mandate • Kilimani Corridor
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start border-b border-white/10 pb-3">
                    <div>
                      <h3 className="text-base text-white font-medium">Consortium Architecture</h3>
                      <p className="text-xs text-[#b5b0a6] font-light">Neutral fiduciary custodian protecting all parties</p>
                    </div>
                    <span className="text-[#e9c176] text-[10px] uppercase tracking-widest font-semibold font-mono">
                      Joint Venture Legal Structure
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#e9c176]" />
                        <span className="text-white">ArdhiSasa Digitized Land Search</span>
                      </div>
                      <span className="text-[#e9c176] uppercase tracking-wider font-mono">100% Certified</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                      <div className="flex items-center gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-[#e9c176]" />
                        <span className="text-white">Tier-1 Bank Milestone Escrow</span>
                      </div>
                      <span className="text-[#e9c176] uppercase tracking-wider font-mono">Ring-Fenced</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-2.5">
                        <Handshake className="w-4 h-4 text-[#e9c176]" />
                        <span className="text-white">Equitable Equity Allocations</span>
                      </div>
                      <span className="text-[#e9c176] uppercase tracking-wider font-mono">Valuation-Linked</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 PROVEN JV MODELS */}
      <section className="w-full py-24 bg-[#101415] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-[11px] text-[#e9c176] uppercase tracking-[0.2em] font-semibold">Transaction Frameworks</span>
              <h2 className="font-serif-headline text-3xl sm:text-4xl text-white font-normal tracking-tight">Four Proven Joint Venture Models</h2>
              <p className="text-[#b5b0a6] font-light text-base">We eliminate landowner vulnerability and capital stagnation by implementing institutional corporate joint ventures crafted around clear exit parameters.</p>
            </div>
            <a
              href="#jv-intake"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 border border-white/15 text-[#e9c176] hover:border-[#e9c176] transition-colors text-xs uppercase tracking-wider"
            >
              <span>Consult Structure Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="divide-y divide-white/10">
            {[
              {
                num: "01",
                tag: "Equity Split: 30% - 40% Landowner",
                title: "Land Equity + Developer Capital",
                desc: "Designed for landowners with unencumbered prime parcels who seek exponential capital appreciation rather than a one-time outright cash disposal. The landowner contributes title into a newly formed Special Purpose Vehicle (SPV), while our vetted tier-1 developer funds all architectural schematics, county approvals, construction costs, and pre-sales marketing.",
                specs: [
                  { label: "Landowner Contribution", val: "Unencumbered Land Title Equity" },
                  { label: "Developer Contribution", val: "100% Construction Capex & Approvals" },
                  { label: "Downside Protection", val: "First-Loss Developer Guarantee" }
                ]
              },
              {
                num: "02",
                tag: "Target Net IRR: 24% - 28%",
                title: "International Investor + Local Execution Partner",
                desc: "Engineered for foreign family offices, GCC funds, and diaspora syndicates seeking exposure to high-growth Kenyan real estate without operational exposure. International partners provide institutional debt or equity tranches, while Hurleys and pre-qualified local EPC contractors manage NEMA, NCA compliance, procurement, and physical execution.",
                specs: [
                  { label: "Capital Deployment", val: "Escrow-Governed Milestone Drawdowns" },
                  { label: "Audit Protocol", val: "Quarterly Big-4 Financial Attestation" },
                  { label: "Currency Hedge", val: "USD-Denominated Exit Yields" }
                ]
              },
              {
                num: "03",
                tag: "Cap Rates: 9.8% - 11.4%",
                title: "Commercial & Mixed-Use Joint Ventures",
                desc: "High-density commercial hubs, medical suites, and grade-A corporate offices concentrated in prime diplomatic and financial clusters: Westlands, Upper Hill, and Kilimani. We assemble consortiums uniting prime urban corner plot owners with commercial developers and pre-committed anchor tenants before breaking ground.",
                specs: [
                  { label: "Target Node", val: "Westlands • Upper Hill • Kilimani" },
                  { label: "Pre-Lease Requirement", val: "Min 45% Anchor Commitment Pre-Build" },
                  { label: "Yield Structure", val: "Long-Term Commercial Triple Net (NNN)" }
                ]
              },
              {
                num: "04",
                tag: "Acreage: 10 to 100+ Acres",
                title: "Masterplanned Land Subdivision & Infrastructure JV",
                desc: "Unlocking raw land portfolios across Kiambu Road, Machakos, and Naivasha corridors. Transforming virgin land into fully serviced gated estates equipped with paved cabro roads, subterranean utilities, borehole water infrastructure, and deeded individual title deeds, driving up to 300% plot value escalation.",
                specs: [
                  { label: "Geographic Focus", val: "Kiambu, Machakos, Naivasha Corridors" },
                  { label: "Scope of Works", val: "Roads, Drainage, Power, Water, Perimeter" },
                  { label: "Exit Velocity", val: "Phase-Wise Off-Plan Title Offload" }
                ]
              }
            ].map((model) => (
              <div key={model.num} className="scroll-fade py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:bg-white/[0.01] transition-colors">
                <div className="lg:col-span-1">
                  <span className="font-serif-headline text-3xl text-[#e9c176]/60 italic font-mono">{model.num}</span>
                </div>
                <div className="lg:col-span-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] text-[#e9c176] uppercase tracking-widest font-semibold font-mono">Framework {model.num}</span>
                    <span className="text-white/20">|</span>
                    <span className="text-[#b5b0a6] text-xs uppercase tracking-wider">{model.tag}</span>
                  </div>
                  <h3 className="font-serif-headline text-2xl text-white font-medium tracking-tight">{model.title}</h3>
                  <p className="text-[#b5b0a6] font-light text-sm leading-relaxed max-w-xl">{model.desc}</p>
                </div>
                <div className="lg:col-span-5 grid grid-cols-1 gap-2 pt-2 border-l border-white/10 pl-6">
                  {model.specs.map((sp, i) => (
                    <div key={i} className="flex justify-between items-baseline py-1.5 border-b border-white/5 text-xs">
                      <span className="text-[#b5b0a6] font-light">{sp.label}</span>
                      <span className="text-white font-medium text-right pl-3">{sp.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-STAGE JV ADVISORY LIFECYCLE */}
      <section className="w-full py-24 bg-[#0b0f10] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-[11px] text-[#e9c176] uppercase tracking-[0.2em] font-semibold">Fiduciary Execution</span>
              <h2 className="font-serif-headline text-3xl sm:text-4xl text-white font-normal tracking-tight">The Hurleys 6-Stage JV Advisory Lifecycle</h2>
              <p className="text-[#b5b0a6] font-light text-sm sm:text-base">Every partnership is fortified with stringent institutional protocols ensuring capital integrity and conflict-free execution.</p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-[#b5b0a6] text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#e9c176]" />
              <span>End-to-End Governance</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10 border-b border-white/10">
            {[
              { num: "01", time: "7 - 14 Days", title: "Land Evaluation & ArdhiSasa Title Audit", desc: "Multi-tier title due diligence via the Ministry of Lands ArdhiSasa digital platform, physical registry searches, historical deed checks, survey beacons re-establishment, and comprehensive environmental clearance audits." },
              { num: "02", time: "14 - 21 Days", title: "Feasibility Study & HBU Financial Model", desc: "Formulation of the Highest & Best Use (HBU) valuation matrix. Detailed sensitivity analysis across construction costs, financing rates, absorption timelines, and conservative projected IRR projections." },
              { num: "03", time: "14 - 30 Days", title: "Developer & Institutional Capital Matching", desc: "Deploying our confidential private client registry to pair prime land parcels with audited, financially qualified developers or institutional capital partners whose track records match project complexity." }
            ].map((st) => (
              <div key={st.num} className="py-8 lg:px-8 first:lg:pl-0 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif-headline text-3xl text-[#e9c176] italic font-mono">{st.num}</span>
                  <span className="text-[10px] text-[#e9c176] uppercase tracking-widest px-2 py-0.5 border border-[#e9c176]/30 font-mono">{st.time}</span>
                </div>
                <h4 className="text-base text-white font-medium leading-snug">{st.title}</h4>
                <p className="text-xs text-[#b5b0a6] font-light leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {[
              { num: "04", time: "21 - 30 Days", title: "SPV Formation & Shareholder Agreements", desc: "Incorporation of a dedicated Kenyan Special Purpose Vehicle. Drafting bulletproof Shareholder Agreements, Land Transfer Covenants, dispute escalation clauses, and step-in rights for ultimate investor protection." },
              { num: "05", time: "Active Execution", title: "Construction Oversight & Escrow Disbursement", desc: "Funds are locked in institutional escrow and disbursed strictly upon independent quantity surveyor certification at each physical construction milestone, preventing contractor overruns and delays." },
              { num: "06", time: "Completion & Exit", title: "Off-Plan Sales, Exit Strategy & Distribution", desc: "Hurleys International leads global diaspora and domestic marketing drives, off-plan unit sales, legal conveyancing, and transparent pro-rata waterfall distributions of net profit back to equity holders." }
            ].map((st) => (
              <div key={st.num} className="py-8 lg:px-8 first:lg:pl-0 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif-headline text-3xl text-[#e9c176] italic font-mono">{st.num}</span>
                  <span className="text-[10px] text-[#e9c176] uppercase tracking-widest px-2 py-0.5 border border-[#e9c176]/30 font-mono">{st.time}</span>
                </div>
                <h4 className="text-base text-white font-medium leading-snug">{st.title}</h4>
                <p className="text-xs text-[#b5b0a6] font-light leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIDENTIAL MANDATE SUBMISSION DESK */}
      <section className="w-full py-24 bg-[#101415]" id="jv-intake">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-3">
                <span className="text-[11px] text-[#e9c176] uppercase tracking-[0.2em] font-semibold">Private Wealth Mandate Desk</span>
                <h2 className="font-serif-headline text-3xl text-white font-normal tracking-tight">Submit Your JV Proposal for Advisory Review</h2>
                <p className="text-sm text-[#b5b0a6] font-light leading-relaxed">
                  Whether you hold prime acreage requiring structured development financing, or you are an institutional developer seeking unencumbered urban land, Hurleys provides strict non-disclosure protections and institutional transaction execution.
                </p>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[#e9c176]">
                    <Lock className="w-4 h-4" />
                    <span className="text-white text-sm font-medium">Fiduciary Confidentiality</span>
                  </div>
                  <p className="text-xs text-[#b5b0a6] font-light leading-relaxed">
                    All submitted deeds, surveys, and financial balance sheets are governed by mutual Non-Disclosure Agreements (NDA). Unlisted off-market plots are never broadcast publicly without explicit landowner authorization.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-[#9a8f80] text-[11px] uppercase tracking-wider font-mono">
                  <span className="flex items-center gap-1 text-[#e9c176]"><ShieldCheck className="w-3.5 h-3.5" /> EARB Regulated</span>
                  <span className="text-white/20">•</span>
                  <span className="flex items-center gap-1 text-[#e9c176]"><ShieldCheck className="w-3.5 h-3.5" /> KPDA Standards</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-3">
                <span className="text-xs text-[#9a8f80] uppercase tracking-wider block font-mono">Direct Advisory</span>
                <p className="text-xs text-[#b5b0a6] font-light">Discuss your proposal directly with our advisory desk:</p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Form Sheet */}
            <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-12 pt-8 lg:pt-0">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Persona Selector Pills */}
                <div className="space-y-3">
                  <label className="text-[11px] text-[#e9c176] uppercase tracking-widest block font-medium">
                    I Am Participating As:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'landowner', label: 'Landowner with Property', icon: Trees },
                      { id: 'developer', label: 'Developer Seeking Land', icon: Building2 },
                      { id: 'investor', label: 'Institutional Investor', icon: ShieldCheck }
                    ].map((p) => {
                      const Icon = p.icon;
                      const isSelected = role === p.id;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setRole(p.id as any)}
                          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-sm border transition-colors text-center text-xs font-medium ${
                            isSelected
                              ? 'border-[#e9c176] bg-[#e9c176]/10 text-[#e9c176]'
                              : 'border-white/15 text-white hover:border-[#e9c176]/50'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span>{p.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-[#9a8f80] uppercase tracking-wider block font-mono">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Dr. Arthur Kibera"
                      className="w-full bg-transparent border-0 border-b border-white/20 text-white px-0 py-2.5 text-sm focus:outline-none focus:border-[#e9c176] transition-colors placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-[#9a8f80] uppercase tracking-wider block font-mono">Entity / Company / Family Office</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Kibera Capital Holdings Ltd"
                      className="w-full bg-transparent border-0 border-b border-white/20 text-white px-0 py-2.5 text-sm focus:outline-none focus:border-[#e9c176] transition-colors placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-[#9a8f80] uppercase tracking-wider block font-mono">Corporate / Private Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="arthur@kiberaholdings.com"
                      className="w-full bg-transparent border-0 border-b border-white/20 text-white px-0 py-2.5 text-sm focus:outline-none focus:border-[#e9c176] transition-colors placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-[#9a8f80] uppercase tracking-wider block font-mono">Direct Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+254 7XX XXX XXX / +44 7XXX..."
                      className="w-full bg-transparent border-0 border-b border-white/20 text-white px-0 py-2.5 text-sm focus:outline-none focus:border-[#e9c176] transition-colors placeholder:text-white/20"
                    />
                  </div>
                </div>

                {/* Parameters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-[#9a8f80] uppercase tracking-wider block font-mono">Project Location *</label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-white/20 text-white px-0 py-2.5 text-sm focus:outline-none focus:border-[#e9c176] transition-colors cursor-pointer"
                    >
                      <option className="bg-[#101415]" value="Westlands">Westlands Commercial Core</option>
                      <option className="bg-[#101415]" value="Karen">Karen • Langata</option>
                      <option className="bg-[#101415]" value="Kilimani">Kilimani / Kileleshwa</option>
                      <option className="bg-[#101415]" value="Upper Hill">Upper Hill Diplomatic Zone</option>
                      <option className="bg-[#101415]" value="Kiambu Road">Kiambu Road Corridor</option>
                      <option className="bg-[#101415]" value="Machakos">Machakos / Athi River Corridor</option>
                      <option className="bg-[#101415]" value="Naivasha">Naivasha / Nakuru Region</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-[#9a8f80] uppercase tracking-wider block font-mono">Land Size / Specs *</label>
                    <select
                      value={formData.landSize}
                      onChange={(e) => setFormData({ ...formData, landSize: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-white/20 text-white px-0 py-2.5 text-sm focus:outline-none focus:border-[#e9c176] transition-colors cursor-pointer"
                    >
                      <option className="bg-[#101415]" value="0.25 to 0.5 Acres">0.25 to 0.5 Acres (High Density)</option>
                      <option className="bg-[#101415]" value="0.5 to 1.0 Acres">0.5 to 1.0 Acres</option>
                      <option className="bg-[#101415]" value="1.0 to 2.5 Acres">1.0 to 2.5 Acres</option>
                      <option className="bg-[#101415]" value="2.5 to 5.0 Acres">2.5 to 5.0 Acres</option>
                      <option className="bg-[#101415]" value="5.0 to 10.0 Acres">5.0 to 10.0 Acres</option>
                      <option className="bg-[#101415]" value="10 to 50+ Acres">10 to 50+ Acres (Masterplan)</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-[#9a8f80] uppercase tracking-wider block font-mono">Title Status *</label>
                    <select
                      value={formData.titleStatus}
                      onChange={(e) => setFormData({ ...formData, titleStatus: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-white/20 text-white px-0 py-2.5 text-sm focus:outline-none focus:border-[#e9c176] transition-colors cursor-pointer"
                    >
                      <option className="bg-[#101415]" value="Clean Freehold Deed in Hand">Clean Freehold Deed in Hand</option>
                      <option className="bg-[#101415]" value="Leasehold (50+ Yrs Remaining)">Leasehold (50+ Yrs Remaining)</option>
                      <option className="bg-[#101415]" value="Sectional Title Scheme Approved">Sectional Title Scheme Approved</option>
                      <option className="bg-[#101415]" value="Title Under Subdivision Process">Title Under Subdivision Process</option>
                    </select>
                  </div>
                </div>

                {/* Financial Magnitude */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-[#9a8f80] uppercase tracking-wider block font-mono">Estimated Land Value / Capex</label>
                    <input
                      type="text"
                      value={formData.assetValue}
                      onChange={(e) => setFormData({ ...formData, assetValue: e.target.value })}
                      placeholder="$2.5M USD or KES 350M"
                      className="w-full bg-transparent border-0 border-b border-white/20 text-white px-0 py-2.5 text-sm focus:outline-none focus:border-[#e9c176] transition-colors placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-[#9a8f80] uppercase tracking-wider block font-mono">Preferred Partnership Model</label>
                    <select
                      value={formData.partnershipModel}
                      onChange={(e) => setFormData({ ...formData, partnershipModel: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-white/20 text-white px-0 py-2.5 text-sm focus:outline-none focus:border-[#e9c176] transition-colors cursor-pointer"
                    >
                      <option className="bg-[#101415]" value="Land Equity + Developer Capex (Standard JV)">Land Equity + Developer Capex (Standard JV)</option>
                      <option className="bg-[#101415]" value="Co-Development Consortium">Co-Development Consortium</option>
                      <option className="bg-[#101415]" value="Masterplanned Infrastructure Subdivision">Masterplanned Infrastructure Subdivision</option>
                      <option className="bg-[#101415]" value="Open to Advisory Recommendation">Open to Advisory Recommendation</option>
                    </select>
                  </div>
                </div>

                {/* Brief */}
                <div className="space-y-1.5">
                  <label className="text-[10px] text-[#9a8f80] uppercase tracking-wider block font-mono">Project Summary & Objectives *</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.projectSummary}
                    onChange={(e) => setFormData({ ...formData, projectSummary: e.target.value })}
                    placeholder="Outline parcel characteristics, zoning status, current occupancy, desired timeline, and the partner profile you seek..."
                    className="w-full bg-transparent border-0 border-b border-white/20 text-white px-0 py-2.5 text-sm focus:outline-none focus:border-[#e9c176] transition-colors placeholder:text-white/20 resize-none font-light"
                  ></textarea>
                </div>

                {/* Document Upload Simulation */}
                <div className="space-y-1.5">
                  <label className="text-[10px] text-[#9a8f80] uppercase tracking-wider block font-mono">Supporting Documents (Optional / Encrypted)</label>
                  <div
                    onClick={() => {
                      setFilesCount(prev => prev + 1);
                    }}
                    className="py-6 px-4 border border-dashed border-white/20 rounded-sm hover:border-[#e9c176]/60 transition-colors text-center cursor-pointer bg-[#0b0f10]/30"
                  >
                    <UploadCloud className="w-6 h-6 text-[#e9c176]/80 mx-auto" />
                    <p className="text-xs text-white mt-1">Click to attach Survey Maps, Title Copies, or Architectural Briefs</p>
                    <p className="text-[11px] text-[#9a8f80] mt-0.5 font-light">PDF, DWG, PNG up to 25MB • 256-bit bank-grade encryption</p>
                    {filesCount > 0 && (
                      <span className="text-xs text-[#e9c176] font-semibold mt-2 block font-mono">
                        {filesCount} document(s) staged for encrypted transfer
                      </span>
                    )}
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
                  <p className="text-xs text-[#9a8f80] max-w-sm font-light">
                    By submitting, you certify ownership authority and consent to Hurleys verifying credentials under mutual non-disclosure.
                  </p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-sm bg-[#e9c176] text-[#241802] text-xs font-semibold tracking-wider uppercase hover:bg-white hover:text-[#101415] transition-all gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Mandate For Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS CONFIRMATION MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#1d2022] max-w-lg w-full p-8 rounded-sm border border-white/15 space-y-5 text-center shadow-2xl">
            <div className="w-14 h-14 rounded-full bg-[#e9c176]/10 border border-[#e9c176]/30 flex items-center justify-center text-[#e9c176] mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <span className="text-[11px] text-[#e9c176] uppercase tracking-widest font-bold font-mono">Mandate Received</span>
              <h3 className="font-serif-headline text-2xl text-white font-semibold">Joint Venture Brief Lodged</h3>
              <p className="text-xs sm:text-sm text-[#b5b0a6] font-light leading-relaxed">
                Your development partnership dossier has been delivered to our Nairobi Executive Transactions Committee. A Senior Partner will review your title and feasibility parameters and contact you under strict mutual NDA within 24 business hours.
              </p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2.5 border border-white/15 rounded-sm text-white text-xs hover:border-[#e9c176] transition-colors uppercase tracking-wider font-semibold"
              >
                Close Window
              </button>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-sm bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Notify Desk on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
