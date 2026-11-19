import React from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  FileText, 
  TrendingUp, 
  Layers, 
  Compass, 
  Globe2, 
  Briefcase 
} from 'lucide-react';
import { PROPERTIES, CORRIDOR_DATA } from '@/data/properties';
import PrivateMandateForm from '@/components/PrivateMandateForm';

export default function HomePage() {
  const featuredProperties = PROPERTIES.slice(0, 3);
  const waUrl = "https://wa.me/254700000000?text=Hello%20Hurleys%20Desk%2C%20I%20am%20inquiring%20about%20Kenyan%20sovereign%20real%20estate%20opportunities";

  return (
    <div className="flex flex-col w-full text-[#e0e3e5]">
      {/* =========================================================================
          1. HERO SECTION: Serene, Typography-Led Editorial Horizon
          ========================================================================= */}
      <section className="relative w-full overflow-hidden -mt-20 pt-32 lg:pt-40 pb-24 lg:pb-32 bg-[#101415]">
        {/* Background Image with Luminosity Blend */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-[1.02]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80&fit=crop&auto=format')`
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#101415] via-[#101415]/85 to-[#101415]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-4xl space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-3 text-[#e9c176] text-[11px] tracking-[0.3em] uppercase font-medium animate-fade-in-up">
              <span className="w-6 h-px bg-[#e9c176]/60"></span>
              Private Client Real Estate Advisory • Nairobi • London • Dubai
            </div>

            <h1 className="font-serif-headline text-4xl sm:text-5xl lg:text-[64px] font-normal leading-[1.12] tracking-tight text-white animate-fade-in-up animate-delay-100">
              Connecting Global Capital to{' '}
              <em className="italic font-normal text-[#e9c176]">Strategic Real Estate</em> in Kenya.
            </h1>

            <p className="text-base sm:text-lg text-[#b5b0a6] leading-relaxed max-w-2xl font-light animate-fade-in-up animate-delay-200">
              Hurleys International facilitates direct, institutional-grade access to vetted prime developments, titling audits, and off-market acreage across Kenya’s highest-performing growth corridors.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 animate-fade-in-up animate-delay-300">
              <Link
                href="/properties"
                className="btn-shimmer inline-flex items-center gap-3 px-6 py-3.5 text-[#101415] font-semibold text-[12px] tracking-[0.2em] uppercase hover:text-black transition-all duration-300 rounded-sm shadow-md"
              >
                <span>Explore Opportunities</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="#investor-intake"
                className="inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase text-[#b5b0a6] hover:text-white transition-colors"
              >
                <span>Confidential Mandate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[12px] tracking-[0.15em] text-[#25D366] hover:underline"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Concierge (+254 700 000 000)</span>
              </a>
            </div>
          </div>

          {/* Editorial Hairline Metrics Bar */}
          <div className="mt-24 pt-12 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <div className="font-serif-headline text-3xl sm:text-4xl text-white font-light tracking-tight">$185M+</div>
              <div className="text-[11px] tracking-[0.2em] text-[#e9c176] uppercase font-medium mt-2">Deal Volume Sourced</div>
              <p className="text-[12px] text-[#b5b0a6]/70 mt-1 font-light">Cross-border capital facilitation</p>
            </div>
            <div>
              <div className="font-serif-headline text-3xl sm:text-4xl text-white font-light tracking-tight">100%</div>
              <div className="text-[11px] tracking-[0.2em] text-[#e9c176] uppercase font-medium mt-2">Title Integrity</div>
              <p className="text-[12px] text-[#b5b0a6]/70 mt-1 font-light">ArdhiSasa & Ministry cadastre audited</p>
            </div>
            <div>
              <div className="font-serif-headline text-3xl sm:text-4xl text-white font-light tracking-tight">9.8% – 13.5%</div>
              <div className="text-[11px] tracking-[0.2em] text-[#e9c176] uppercase font-medium mt-2">Target Net Yields</div>
              <p className="text-[12px] text-[#b5b0a6]/70 mt-1 font-light">High-density prime Nairobi nodes</p>
            </div>
            <div>
              <div className="font-serif-headline text-3xl sm:text-4xl text-white font-light tracking-tight">42+</div>
              <div className="text-[11px] tracking-[0.2em] text-[#e9c176] uppercase font-medium mt-2">Institutional JVs</div>
              <p className="text-[12px] text-[#b5b0a6]/70 mt-1 font-light">Direct landowner representation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Credentials Strip */}
      <div className="w-full bg-[#0b0f10] border-y border-white/[0.05] py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[10px] uppercase tracking-[0.22em] text-white/40 font-mono">
            {['KPDA Corporate Member', 'EARB Regulated Agency', 'ArdhiSasa Registered', 'Law Society of Kenya', 'CBK AML Compliant'].map((badge) => (
              <span key={badge} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#e9c176]/60" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. ETHOS & REFINED EDITORIAL PILLARS (Bridging the Gap)
          ========================================================================= */}
      <section className="w-full py-28 border-t border-white/[0.06] bg-[#101415]" id="advisory-ethos">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-[#e9c176] text-[11px] tracking-[0.28em] uppercase font-medium">The Hurleys Ethos</div>
              <h2 className="font-serif-headline text-3xl sm:text-4xl font-normal text-white leading-tight">
                Bridging International Capital and Viable Kenyan Real Estate
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-[#b5b0a6] font-light text-base sm:text-lg leading-relaxed">
              <p>
                Hurleys International operates as an institutional fiduciary advisory desk rather than an open-market transactional brokerage. We bridge sovereign wealth offices, London and DIFC private family offices, and diaspora leaders directly to audited title deeds and vetted commercial pipelines.
              </p>
              <div className="pt-4 flex flex-wrap gap-8 text-[12px] tracking-[0.16em] uppercase text-white/70">
                <span className="inline-flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#e9c176]"></span>
                  Zero Intermediary Speculation
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#e9c176]"></span>
                  CBK & AML Escrow Protocols
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#e9c176]"></span>
                  Forensic Cadastral Conveyancing
                </span>
              </div>
            </div>
          </div>

          {/* Minimalist Numbered Editorial Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pt-8 border-t border-white/[0.06]">
            <div className="space-y-3">
              <div className="font-serif-headline text-2xl text-[#e9c176] font-normal">01</div>
              <h3 className="text-white text-base font-semibold tracking-wide">ArdhiSasa Digital Audit</h3>
              <p className="text-[#b5b0a6]/80 text-sm leading-relaxed font-light">
                Ministry of Lands cadastral checks, beacon boundary confirmation, and encumbrance search before presentation.
              </p>
            </div>
            <div className="space-y-3">
              <div className="font-serif-headline text-2xl text-[#e9c176] font-normal">02</div>
              <h3 className="text-white text-base font-semibold tracking-wide">Direct Titleholder Mandates</h3>
              <p className="text-[#b5b0a6]/80 text-sm leading-relaxed font-light">
                Direct representation of titled landowners and tier-1 master developers eliminates multi-layer intermediary markup.
              </p>
            </div>
            <div className="space-y-3">
              <div className="font-serif-headline text-2xl text-[#e9c176] font-normal">03</div>
              <h3 className="text-white text-base font-semibold tracking-wide">Granular Yield Pro-Formas</h3>
              <p className="text-[#b5b0a6]/80 text-sm leading-relaxed font-light">
                DCF models incorporating construction cost inflation, withholding taxes, vacancy reserves, and capital exits.
              </p>
            </div>
            <div className="space-y-3">
              <div className="font-serif-headline text-2xl text-[#e9c176] font-normal">04</div>
              <h3 className="text-white text-base font-semibold tracking-wide">Remote Cross-Border Desk</h3>
              <p className="text-[#b5b0a6]/80 text-sm leading-relaxed font-light">
                Apostille power of attorney execution, high-res drone inspections, multi-currency escrow, and expat tenancy management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. CURATED EDITORIAL SHOWCASE (Featured Opportunities from properties.ts)
          ========================================================================= */}
      <section className="w-full py-28 border-t border-white/[0.06] bg-[#101415]" id="opportunities">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.06]">
            <div className="space-y-2">
              <span className="text-[#e9c176] text-[11px] tracking-[0.28em] uppercase font-medium">Selected Assets</span>
              <h2 className="font-serif-headline text-3xl sm:text-4xl font-normal text-white">Underwritten Investment Pipeline</h2>
            </div>
            <Link 
              href="/properties" 
              className="text-[#e9c176] hover:text-white text-[12px] tracking-[0.18em] uppercase font-medium inline-flex items-center gap-2 transition-colors"
            >
              <span>View All 10 Certified Assets</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-24">
            {featuredProperties.map((prop, index) => {
              const isEven = index % 2 === 1;
              return (
                <div key={prop.id} className="card-hover p-6 lg:p-8 bg-[#14181a]/40 border border-white/5 rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  <div className={`lg:col-span-7 relative overflow-hidden group ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="aspect-[16/10] w-full overflow-hidden bg-[#15191c] rounded-sm">
                      <img 
                        src={prop.imageUrl} 
                        alt={prop.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      />
                    </div>
                  </div>
                  <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center justify-between text-[11px] tracking-[0.22em] uppercase text-[#e9c176]">
                      <span>{prop.corridor} • {prop.subtitle.split('•')[0]}</span>
                      <span className="text-white/60">{prop.yieldNet || prop.projectedIrr || prop.footprint}</span>
                    </div>
                    <h3 className="font-serif-headline text-2xl sm:text-3xl text-white font-normal">
                      {prop.title}
                    </h3>
                    <p className="text-[#b5b0a6] font-light text-sm sm:text-base leading-relaxed">
                      {prop.description}
                    </p>

                    <div className="py-4 border-y border-white/[0.08] space-y-2.5 text-sm">
                      <div className="flex justify-between text-[#b5b0a6]/80 font-light">
                        <span>Valuation / Entry:</span>
                        <span className="text-white font-medium">{prop.displayPrice}</span>
                      </div>
                      <div className="flex justify-between text-[#b5b0a6]/80 font-light">
                        <span>Title Status:</span>
                        <span className="text-[#e9c176] font-medium">{prop.auditStatus}</span>
                      </div>
                      <div className="flex justify-between text-[#b5b0a6]/80 font-light">
                        <span>Corridor Node:</span>
                        <span className="text-white">{prop.corridor}</span>
                      </div>
                    </div>

                    <div>
                      <Link
                        href="/#investor-intake"
                        className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-white hover:text-[#e9c176] transition-colors font-medium"
                      >
                        <span>Enquire on Allocation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. ADVISORY DIRECTORY (8 Services in Clean Minimal Index)
          ========================================================================= */}
      <section className="w-full py-28 border-t border-white/[0.06] bg-[#101415]" id="services">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-[#e9c176] text-[11px] tracking-[0.28em] uppercase font-medium">Capabilities Index</span>
            <h2 className="font-serif-headline text-3xl sm:text-4xl font-normal text-white">Institutional Services & Advisory</h2>
            <p className="text-[#b5b0a6] font-light text-sm sm:text-base">
              Disciplined private equity and fiduciary standards across the Kenyan property lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 pt-6">
            {[
              { num: "01", title: "Investment Consultancy", desc: "Macro trends, localized capital appreciation models, and regulatory conveyance guidance for overseas capital." },
              { num: "02", title: "Land Acquisition Sourcing", desc: "Direct-to-owner land sourcing, cadastral survey reconstruction, and planning permission verification." },
              { num: "03", title: "Residential Portfolios", desc: "Pre-construction bulk allocation, developer balance sheet audits, and structured payment milestones." },
              { num: "04", title: "Commercial & Logistics", desc: "Grade-A office towers, medical suites, and light industrial logistics hubs aligned to transport bypasses." },
              { num: "05", title: "Joint Venture Structuring", desc: "Equity ratio determination, Special Purpose Vehicle (SPV) formation, and escrow deed protection." },
              { num: "06", title: "Remote Settlement Desk", desc: "Virtual notarization, power of attorney management, and compliant foreign currency SWIFT channels." },
              { num: "07", title: "Feasibility & Pro-Formas", desc: "DCF analysis, multi-scenario sensitivity tables, and capital tax optimization under Kenyan law." },
              { num: "08", title: "Asset & Tenancy Management", desc: "Corporate expat placement, automated USD/KES rent distributions, and periodic architectural inspections." }
            ].map((srv) => (
              <div key={srv.num} className="border-t border-white/[0.1] pt-6 space-y-3 group">
                <span className="text-[#e9c176] text-xs font-mono tracking-wider">{srv.num}</span>
                <h3 className="text-white font-medium text-base group-hover:text-[#e9c176] transition-colors">{srv.title}</h3>
                <p className="text-[#b5b0a6] text-sm font-light leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. STRATEGIC GROWTH CORRIDORS (Data Stream + GIS Map Preview)
          ========================================================================= */}
      <section className="w-full py-28 border-t border-white/[0.06] bg-[#101415]" id="locations">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-6 border-b border-white/[0.06]">
            <div className="max-w-2xl space-y-3">
              <span className="text-[#e9c176] text-[11px] tracking-[0.28em] uppercase font-medium">Territorial Intelligence</span>
              <h2 className="font-serif-headline text-3xl sm:text-4xl font-normal text-white">Nairobi Core & Emerging Corridors</h2>
              <p className="text-[#b5b0a6] font-light text-sm sm:text-base">
                Infrastructure catalysts—Expressway, Western Bypass, and SGR corridors—continue to drive capital appreciation.
              </p>
            </div>
            <div className="flex items-center gap-8 text-right">
              <div>
                <div className="font-serif-headline text-2xl text-[#e9c176] font-light">11.2%</div>
                <div className="text-[10px] tracking-[0.2em] text-white/50 uppercase mt-0.5">Peak Net Yield (Westlands)</div>
              </div>
              <div className="w-px h-8 bg-white/10"></div>
              <div>
                <div className="font-serif-headline text-2xl text-white font-light">KES 420M</div>
                <div className="text-[10px] tracking-[0.2em] text-white/50 uppercase mt-0.5">Avg Acre (Upper Hill)</div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm font-light">
              <thead>
                <tr className="border-b border-white/[0.08] text-[11px] tracking-[0.2em] uppercase text-[#e9c176]">
                  <th className="py-4 pr-6 font-medium">Corridor Node</th>
                  <th className="py-4 px-6 font-medium">Avg. Net Yield / IRR</th>
                  <th className="py-4 px-6 font-medium">Primary Asset Class</th>
                  <th className="py-4 px-6 font-medium">Acre Benchmark</th>
                  <th className="py-4 pl-6 font-medium text-right">Target Demand Profile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {CORRIDOR_DATA.map((row) => (
                  <tr key={row.node} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-5 pr-6 font-medium text-white">{row.node}</td>
                    <td className="py-5 px-6 text-[#e9c176] font-mono text-xs">{row.netYield}</td>
                    <td className="py-5 px-6 text-[#b5b0a6]">{row.assetClass}</td>
                    <td className="py-5 px-6 text-[#b5b0a6]">{row.acreBenchmark}</td>
                    <td className="py-5 pl-6 text-right text-white/70">{row.demandProfile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* GIS Map Strip */}
          <div 
            className="w-full h-72 border border-white/[0.08] relative overflow-hidden bg-cover bg-center rounded-sm"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1600&q=80&fit=crop&auto=format')`
            }}
          >
            <div className="absolute inset-0 bg-[#101415]/80 backdrop-blur-[1px]"></div>
            <div className="relative z-10 h-full flex flex-col justify-end p-8 max-w-xl space-y-2">
              <div className="text-[#e9c176] text-[11px] tracking-[0.24em] uppercase font-medium flex items-center gap-2">
                <Compass className="w-3.5 h-3.5" />
                <span>GIS Infrastructure Cadastre</span>
              </div>
              <p className="text-sm text-[#b5b0a6] font-light">
                Synchronized with Nairobi Expressway interchanges, Western Bypass ribbons, and ArdhiSasa land registration records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. THE FIDUCIARY CONTRAST LEDGER (Side-by-Side)
          ========================================================================= */}
      <section className="w-full py-28 border-t border-white/[0.06] bg-[#101415]" id="fiduciary-contrast">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-16">
          <div className="max-w-3xl space-y-3">
            <span className="text-[#e9c176] text-[11px] tracking-[0.28em] uppercase font-medium">Fiduciary Standards</span>
            <h2 className="font-serif-headline text-3xl sm:text-4xl font-normal text-white">Why Private & Diaspora Capital Selects Hurleys</h2>
            <p className="text-[#b5b0a6] font-light text-sm sm:text-base leading-relaxed">
              Navigating prime Kenyan real estate requires institutional controls, legal rigor, and total transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pt-6 border-t border-white/[0.06]">
            {/* Traditional Brokerage */}
            <div className="space-y-6">
              <div className="text-[12px] tracking-[0.2em] uppercase text-white/50 pb-3 border-b border-white/[0.08]">
                Informal Market Realities
              </div>
              <div className="space-y-6 text-sm font-light text-[#b5b0a6]/80">
                <div className="space-y-1">
                  <div className="text-white/80 font-medium">Unauthenticated Open Listings</div>
                  <p className="leading-relaxed">Dependence on word-of-mouth claims, non-digitized historical searches, and risk of overlapping deeds.</p>
                </div>
                <div className="space-y-1">
                  <div className="text-white/80 font-medium">Speculative Intermediary Markups</div>
                  <p className="leading-relaxed">Brokers inflate acquisition pricing without vendor authorization to create untracked commissions.</p>
                </div>
                <div className="space-y-1">
                  <div className="text-white/80 font-medium">Unadjusted Gross Returns</div>
                  <p className="leading-relaxed">Projections omit stamp duty, municipal ground rent, withholding tax, and capital expenditure buffers.</p>
                </div>
                <div className="space-y-1">
                  <div className="text-white/80 font-medium">Unprotected Direct Transfers</div>
                  <p className="leading-relaxed">Capital remitted directly to developer operating accounts without milestone architectural sign-off.</p>
                </div>
              </div>
            </div>

            {/* Hurleys Standard */}
            <div className="space-y-6">
              <div className="text-[12px] tracking-[0.2em] uppercase text-[#e9c176] pb-3 border-b border-[#e9c176]/30">
                Hurleys Advisory Protocol
              </div>
              <div className="space-y-6 text-sm font-light text-[#e0e3e5]">
                <div className="space-y-1">
                  <div className="text-[#e9c176] font-medium">ArdhiSasa Forensic Certification</div>
                  <p className="text-[#b5b0a6] leading-relaxed">Full legal search, cadastre survey confirmation, and registrar validation completed prior to presentation.</p>
                </div>
                <div className="space-y-1">
                  <div className="text-[#e9c176] font-medium">Direct Mandate Representation</div>
                  <p className="text-[#b5b0a6] leading-relaxed">Direct representation with institutional landowners ensuring uninflated vendor prices and clear contract terms.</p>
                </div>
                <div className="space-y-1">
                  <div className="text-[#e9c176] font-medium">Institutional Net DCF Modeling</div>
                  <p className="text-[#b5b0a6] leading-relaxed">Comprehensive models factoring conveyance legalities, stamp levies, tenant turnover reserves, and inflation.</p>
                </div>
                <div className="space-y-1">
                  <div className="text-[#e9c176] font-medium">Regulated Multi-Currency Escrow</div>
                  <p className="text-[#b5b0a6] leading-relaxed">Dedicated conveyancing advocate escrow; capital released strictly upon certified legal milestone handovers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. EXECUTIVE LEADERSHIP
          ========================================================================= */}
      <section className="w-full py-24 border-t border-white/[0.06] bg-[#0c1012]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-[#e9c176] text-[11px] tracking-[0.28em] uppercase font-medium">
              Leadership & Advisory
            </span>
            <h2 className="font-serif-headline text-3xl sm:text-4xl text-white font-normal tracking-tight">
              Executive Directorate
            </h2>
            <p className="text-[#b5b0a6] font-light text-base leading-relaxed">
              Decades of combined transactional acumen across Kenyan real estate, institutional capital sourcing, and land conveyance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Founder & CEO */}
            <div className="card-hover p-8 sm:p-10 bg-[#14181a] border border-white/5 space-y-6 relative group rounded-sm">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] text-[#e9c176] uppercase tracking-[0.2em] font-mono">
                    Founder & CEO
                  </span>
                  <h3 className="font-serif-headline text-2xl sm:text-3xl text-white font-medium mt-1">
                    Joyce Mumbi Wahome
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-[#e9c176]/30 bg-[#1d2022] flex items-center justify-center text-[#e9c176] font-serif text-lg font-bold">
                  JW
                </div>
              </div>
              <p className="text-[#b5b0a6] font-light text-sm leading-relaxed">
                Guiding Hurleys International&apos;s strategic vision and fiduciary practice. Joyce advises family offices, institutions, and diaspora investors on high-value asset acquisitions, joint venture structures, and portfolio allocation in Kenya.
              </p>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#b5b0a6]/80 font-mono">
                <span>Executive Office</span>
                <span className="text-[#e9c176]">joyce@hurleysinternational.com</span>
              </div>
            </div>

            {/* Head of Sales */}
            <div className="card-hover p-8 sm:p-10 bg-[#14181a] border border-white/5 space-y-6 relative group rounded-sm">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] text-[#e9c176] uppercase tracking-[0.2em] font-mono">
                    Head of Sales
                  </span>
                  <h3 className="font-serif-headline text-2xl sm:text-3xl text-white font-medium mt-1">
                    Kiptanui Christopher Kipkemboi
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-[#e9c176]/30 bg-[#1d2022] flex items-center justify-center text-[#e9c176] font-serif text-lg font-bold">
                  KK
                </div>
              </div>
              <p className="text-[#b5b0a6] font-light text-sm leading-relaxed">
                Directing prime commercial mandates, off-market acreage syndication, and private client transactions across Westlands, Karen, Kilimani, and emerging growth corridors. Specializes in direct titleholder negotiation and structuring.
              </p>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#b5b0a6]/80 font-mono">
                <span>Private Client Sales Desk</span>
                <span className="text-[#e9c176]">kiptanui@hurleysinternational.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. TESTIMONIALS & REPUTATION
          ========================================================================= */}
      <section className="w-full py-24 border-t border-white/[0.06] bg-[#101415]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-16">
          <div className="text-[#e9c176] text-[11px] tracking-[0.28em] uppercase font-medium">Client Records</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="space-y-4">
              <p className="font-serif-headline text-base text-white/90 italic font-light leading-relaxed">
                “Acquiring surveyed land in Nairobi from London previously felt fraught. Hurleys surveyed the property beacons, managed the Ministry searches, and closed via escrow seamlessly.”
              </p>
              <div className="pt-2 text-xs">
                <div className="text-[#e9c176] font-medium">Dr. Angela Kariuki</div>
                <div className="text-white/40 mt-0.5">Diaspora Physician • London, UK</div>
              </div>
            </div>
            <div className="space-y-4">
              <p className="font-serif-headline text-base text-white/90 italic font-light leading-relaxed">
                “Hurleys presented a clean 1.8-acre Westlands parcel with institutional pro-formas already prepared for our investment committee. Their yield metrics were exceptionally grounded.”
              </p>
              <div className="pt-2 text-xs">
                <div className="text-[#e9c176] font-medium">Tariq Mansoor</div>
                <div className="text-white/40 mt-0.5">Private Equity Director • DIFC, Dubai</div>
              </div>
            </div>
            <div className="space-y-4">
              <p className="font-serif-headline text-base text-white/90 italic font-light leading-relaxed">
                “As a family landowner on Kiambu Road, Hurleys structured an equitable JV with a tier-1 development firm rather than forcing a distressed outright sale.”
              </p>
              <div className="pt-2 text-xs">
                <div className="text-[#e9c176] font-medium">Joseph Mwangi</div>
                <div className="text-white/40 mt-0.5">Estate Landowner • Kiambu, Kenya</div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-6 text-[11px] tracking-[0.2em] uppercase text-white/40 font-mono">
            <span>KPDA Corporate Member</span>
            <span>EARB Regulated Real Estate Firm</span>
            <span>ArdhiSasa Digital Land Registry Compliant</span>
            <span>Law Society of Kenya Standards</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. PRIVATE MANDATE INTAKE (Consultation Sheet)
          ========================================================================= */}
      <section className="w-full py-28 border-t border-white/[0.06] bg-[#101415]" id="investor-intake">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#e9c176] text-[11px] tracking-[0.28em] uppercase font-medium">Confidential Advisory</span>
              <h2 className="font-serif-headline text-3xl sm:text-4xl font-normal text-white leading-tight">
                Submit an Investment Mandate
              </h2>
              <p className="text-[#b5b0a6] font-light text-sm sm:text-base leading-relaxed">
                All investor briefs are reviewed under strict Non-Disclosure Protocols. Share your strategic acquisition parameters to receive bespoke off-market dossiers and financial models.
              </p>

              <div className="pt-6 space-y-4 text-xs font-light text-[#b5b0a6]/80">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e9c176]"></span>
                  <span>Compliant with Kenyan Data Protection Act 2019</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e9c176]"></span>
                  <span>Direct Access to Off-Market Land & Developments</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e9c176]"></span>
                  <span>Bespoke Virtual Briefing Aligned to Your Timezone</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.06]">
                <div className="text-[11px] tracking-[0.2em] uppercase text-[#e9c176] mb-2">Direct Partner Line</div>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white hover:text-[#e9c176] transition-colors font-medium"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Private Desk (+254 700 000 000)</span>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <PrivateMandateForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
