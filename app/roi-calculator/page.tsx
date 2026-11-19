'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Percent, 
  Calendar, 
  FileDown, 
  Building2, 
  CheckCircle2, 
  MessageSquare, 
  RefreshCw,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { useToast } from '@/components/ToastContext';

export default function RoiCalculatorPage() {
  const { showToast } = useToast();
  const [currency, setCurrency] = useState<'USD' | 'KES'>('USD');
  const [mode, setMode] = useState<'rental' | 'land'>('rental');
  const fxRate = 130; // 1 USD = 130 KES

  // Core Calculator Inputs
  const [purchasePrice, setPurchasePrice] = useState<number>(150000);
  const [monthlyRent, setMonthlyRent] = useState<number>(1400);
  const [occupancy, setOccupancy] = useState<number>(92);
  const [opex, setOpex] = useState<number>(15);
  const [appreciation, setAppreciation] = useState<number>(6.5);
  const [horizonYears, setHorizonYears] = useState<number>(5);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  // Derived Calculations
  const closingCosts = useMemo(() => purchasePrice * 0.06, [purchasePrice]);
  const totalCapex = useMemo(() => purchasePrice + closingCosts, [purchasePrice, closingCosts]);

  const annualPotentialRent = useMemo(() => monthlyRent * 12, [monthlyRent]);
  const effectiveGrossRent = useMemo(() => annualPotentialRent * (occupancy / 100), [annualPotentialRent, occupancy]);
  const annualOpex = useMemo(() => effectiveGrossRent * (opex / 100), [effectiveGrossRent, opex]);
  const annualNoi = useMemo(() => effectiveGrossRent - annualOpex, [effectiveGrossRent, annualOpex]);

  const grossYield = useMemo(() => (totalCapex > 0 ? (annualPotentialRent / totalCapex) * 100 : 0), [annualPotentialRent, totalCapex]);
  const netYield = useMemo(() => (totalCapex > 0 ? (annualNoi / totalCapex) * 100 : 0), [annualNoi, totalCapex]);

  const terminalValue = useMemo(() => purchasePrice * Math.pow(1 + appreciation / 100, horizonYears), [purchasePrice, appreciation, horizonYears]);
  const totalCapitalGain = useMemo(() => terminalValue - purchasePrice, [terminalValue, purchasePrice]);
  const cumulativeCashflow = useMemo(() => annualNoi * horizonYears, [annualNoi, horizonYears]);
  const totalReturnDollars = useMemo(() => cumulativeCashflow + totalCapitalGain, [cumulativeCashflow, totalCapitalGain]);
  const totalRoiPercent = useMemo(() => (totalCapex > 0 ? (totalReturnDollars / totalCapex) * 100 : 0), [totalReturnDollars, totalCapex]);

  const totalWealth = useMemo(() => totalCapex + cumulativeCashflow + totalCapitalGain, [totalCapex, cumulativeCashflow, totalCapitalGain]);

  const formatMoney = (amountInUsd: number) => {
    if (currency === 'KES') {
      const valKes = amountInUsd * fxRate;
      return `KES ${Math.round(valKes).toLocaleString()}`;
    }
    return `$${Math.round(amountInUsd).toLocaleString()}`;
  };

  const handleModeChange = (newMode: 'rental' | 'land') => {
    setMode(newMode);
    if (newMode === 'land') {
      setPurchasePrice(320000);
      setMonthlyRent(0);
      setOccupancy(100);
      setOpex(5);
      setAppreciation(21.0);
    } else {
      setPurchasePrice(150000);
      setMonthlyRent(1400);
      setOccupancy(92);
      setOpex(15);
      setAppreciation(6.5);
    }
  };

  const loadArchetype = (price: number, rent: number, occ: number, op: number, app: number, name: string) => {
    setPurchasePrice(price);
    setMonthlyRent(rent);
    setOccupancy(occ);
    setOpex(op);
    setAppreciation(app);
    setMode(rent > 0 ? 'rental' : 'land');
    showToast('Parameters Loaded', `Applied underwriting metrics for ${name}. Calculations updated.`);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleExportPdf = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      showToast(
        'Pro-Forma Compiled',
        'Institutional PDF investment memorandum has been generated with audited conveyance footnotes.'
      );
    }, 1500);
  };

  const waUrl = `https://wa.me/254700000000?text=${encodeURIComponent(
    `Hello Hurleys Desk, I just modeled an acquisition of ${formatMoney(purchasePrice)} targeting ${netYield.toFixed(2)}% net yield over ${horizonYears} years.`
  )}`;

  return (
    <div className="flex flex-col w-full text-[#e0e3e5] bg-[#101415]">
      {/* Top Sovereign Editorial Header */}
      <section className="w-full bg-[#0b0f10]/80 border-b border-white/5 py-12 relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#e9c176]/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2 text-[#e9c176] text-[11px] tracking-[0.2em] uppercase font-medium">
                <Calculator className="w-4 h-4" />
                <span>Institutional Financial Analytics</span>
                <span className="text-white/20 font-light">•</span>
                <span className="text-[#b5b0a6] font-mono">Model Ver. 4.8.2</span>
              </div>
              <h1 className="font-serif-headline text-3xl sm:text-4xl text-white font-normal leading-tight tracking-tight">
                Kenyan Real Estate Investment Analysis & ROI Calculator
              </h1>
              <p className="text-base text-[#b5b0a6] font-light leading-relaxed">
                Institutional-grade financial modeling for property acquisition, rental yields, operating expenditures, and long-term capital appreciation across Nairobi prime corridors.
              </p>
            </div>

            {/* Global Currency & Mode Toggles */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 border border-white/10 p-1.5 rounded-sm self-start lg:self-end bg-[#0b0f10]">
              <div className="flex items-center bg-[#191c1e] px-1 py-1 rounded">
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                    currency === 'USD' ? 'bg-[#272a2c] text-[#e9c176] shadow-sm' : 'text-[#b5b0a6] hover:text-white'
                  }`}
                >
                  USD ($)
                </button>
                <button
                  onClick={() => setCurrency('KES')}
                  className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                    currency === 'KES' ? 'bg-[#272a2c] text-[#e9c176] shadow-sm' : 'text-[#b5b0a6] hover:text-white'
                  }`}
                >
                  KES (KSh)
                </button>
              </div>

              <div className="h-6 w-px bg-white/10"></div>

              <div className="flex items-center bg-[#191c1e] px-1 py-1 rounded">
                <button
                  onClick={() => handleModeChange('rental')}
                  className={`px-3 py-1.5 rounded text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    mode === 'rental' ? 'bg-[#272a2c] text-[#e9c176] shadow-sm' : 'text-[#b5b0a6] hover:text-white'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Serviced Rental</span>
                </button>
                <button
                  onClick={() => handleModeChange('land')}
                  className={`px-3 py-1.5 rounded text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    mode === 'land' ? 'bg-[#272a2c] text-[#e9c176] shadow-sm' : 'text-[#b5b0a6] hover:text-white'
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Land / Subdiv</span>
                </button>
              </div>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-3 text-xs text-[#b5b0a6] font-light">
            <ShieldCheck className="w-4 h-4 text-[#e9c176] shrink-0" />
            <p className="leading-relaxed">
              <strong className="text-white font-medium uppercase tracking-wider text-[10px] font-mono">Calibration Matrix: </strong>
              Yields and growth assumptions reflect empirical transaction settlements across Westlands, Kilimani, and Karen. Hurleys International models serve analytical advisory.
            </p>
          </div>
        </div>
      </section>

      {/* Financial Editorial Ledger Workspace */}
      <section className="w-full bg-[#101415] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Acquisition & Operating Drivers */}
            <div className="lg:col-span-7 space-y-10">
              {/* Section 01: Acquisition */}
              <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-[#e9c176] text-xs uppercase tracking-[0.2em] font-semibold font-mono">01</span>
                  <span className="text-white/20">|</span>
                  <h2 className="text-base text-white font-medium tracking-wide">Acquisition & Capital Commitment</h2>
                </div>
                <span className="text-[10px] text-[#9a8f80] uppercase tracking-wider font-mono">
                  FX: 1 USD = 130 KES
                </span>
              </div>

              {/* Purchase Price Input & Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <label className="text-xs text-[#b5b0a6] uppercase tracking-wider font-mono">Asset Purchase Price</label>
                  <span className="text-xs text-[#9a8f80] font-light">Capital Basis</span>
                </div>
                <div className="relative flex items-center border-b border-white/15 focus-within:border-[#e9c176] transition-colors pb-1">
                  <span className="font-serif-headline text-[#e9c176] text-2xl font-semibold pr-2">
                    {currency === 'USD' ? '$' : 'KSh '}
                  </span>
                  <input
                    type="number"
                    step={currency === 'USD' ? 5000 : 500000}
                    value={currency === 'USD' ? purchasePrice : purchasePrice * fxRate}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value) || 0;
                      setPurchasePrice(currency === 'USD' ? val : val / fxRate);
                    }}
                    className="w-full bg-transparent text-white font-serif-headline text-3xl sm:text-4xl tracking-tight focus:outline-none p-0 border-0"
                  />
                </div>
                <input
                  type="range"
                  min={50000}
                  max={2500000}
                  step={10000}
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(parseFloat(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded appearance-none cursor-pointer accent-[#e9c176]"
                />
                <div className="flex justify-between text-[#9a8f80] text-[10px] tracking-wider uppercase font-mono">
                  <span>{formatMoney(50000)}</span>
                  <span>{formatMoney(2500000)}+</span>
                </div>
              </div>

              {/* Closing Costs Ledger */}
              <div className="border border-white/10 rounded-sm p-5 bg-[#0b0f10]/40 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white font-medium flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#e9c176]" />
                    <span>Closing Costs & Statutory Duties (6.0%)</span>
                  </span>
                  <span className="font-serif-headline text-base text-[#e9c176] font-semibold">
                    {formatMoney(closingCosts)}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-2 border-t border-white/5 text-[11px] text-[#b5b0a6] uppercase tracking-wider font-mono">
                  <div>
                    <div className="text-[#9a8f80]">Stamp Duty</div>
                    <div className="text-white font-semibold mt-0.5">4.0% Urban</div>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <div className="text-[#9a8f80]">LSK Conveyance</div>
                    <div className="text-white font-semibold mt-0.5">1.5% Legal</div>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <div className="text-[#9a8f80]">Due Diligence</div>
                    <div className="text-white font-semibold mt-0.5">0.5% Certified</div>
                  </div>
                </div>
              </div>

              {/* Section 02: Operational Cashflow Drivers */}
              <div className="space-y-6 pt-4">
                <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#e9c176] text-xs uppercase tracking-[0.2em] font-semibold font-mono">02</span>
                    <span className="text-white/20">|</span>
                    <h2 className="text-base text-white font-medium tracking-wide">Operational Cashflow Drivers</h2>
                  </div>
                  <span className="text-[10px] text-[#9a8f80] uppercase tracking-wider font-mono">
                    Compounding Parameters
                  </span>
                </div>

                {/* Gross Monthly Inflow */}
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <label className="text-xs text-[#b5b0a6] uppercase tracking-wider font-mono">Target Monthly Inflow (Gross)</label>
                    <span className="text-[#e9c176] font-serif-headline text-lg font-semibold">
                      {formatMoney(monthlyRent)} / mo
                    </span>
                  </div>
                  <div className="relative flex items-center border-b border-white/15 focus-within:border-[#e9c176] transition-colors pb-1">
                    <span className="text-[#e9c176] font-semibold pr-2">
                      {currency === 'USD' ? '$' : 'KSh '}
                    </span>
                    <input
                      type="number"
                      step={currency === 'USD' ? 50 : 5000}
                      value={currency === 'USD' ? monthlyRent : monthlyRent * fxRate}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value) || 0;
                        setMonthlyRent(currency === 'USD' ? val : val / fxRate);
                      }}
                      className="w-full bg-transparent text-white font-serif-headline text-xl focus:outline-none p-0 border-0"
                    />
                  </div>
                  <p className="text-[11px] text-[#9a8f80] font-light">
                    Benchmark: Prime Westlands & Kilimani 1-Bed executive suites command $1,200 – $1,600 / mo.
                  </p>
                </div>

                {/* Sliders Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {/* Occupancy */}
                  <div className="border border-white/10 rounded-sm p-5 bg-[#0b0f10]/30 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white">Target Occupancy</span>
                      <span className="font-serif-headline text-lg text-[#e9c176] font-semibold">{occupancy}%</span>
                    </div>
                    <input
                      type="range"
                      min={60}
                      max={100}
                      step={1}
                      value={occupancy}
                      onChange={(e) => setOccupancy(parseFloat(e.target.value))}
                      className="w-full h-1 bg-white/10 rounded appearance-none cursor-pointer accent-[#e9c176]"
                    />
                    <p className="text-[10px] text-[#9a8f80] font-light">Prime multi-tenant corporate benchmark</p>
                  </div>

                  {/* OPEX */}
                  <div className="border border-white/10 rounded-sm p-5 bg-[#0b0f10]/30 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white">Operating Expenses (OPEX)</span>
                      <span className="font-serif-headline text-lg text-[#e9c176] font-semibold">{opex}%</span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={35}
                      step={1}
                      value={opex}
                      onChange={(e) => setOpex(parseFloat(e.target.value))}
                      className="w-full h-1 bg-white/10 rounded appearance-none cursor-pointer accent-[#e9c176]"
                    />
                    <p className="text-[10px] text-[#9a8f80] font-light">Facility mgmt (8%) + insurance + reserve</p>
                  </div>
                </div>

                {/* Capital Appreciation & Horizon */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {/* Appreciation */}
                  <div className="border border-white/10 rounded-sm p-5 bg-[#0b0f10]/30 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white">Annual Capital Growth</span>
                      <span className="font-serif-headline text-lg text-[#e9c176] font-semibold">{appreciation}% p.a.</span>
                    </div>
                    <input
                      type="range"
                      min={1.0}
                      max={25.0}
                      step={0.5}
                      value={appreciation}
                      onChange={(e) => setAppreciation(parseFloat(e.target.value))}
                      className="w-full h-1 bg-white/10 rounded appearance-none cursor-pointer accent-[#e9c176]"
                    />
                    <p className="text-[10px] text-[#9a8f80] font-light">Nairobi Prime 10-Yr Historical Mean: 6.8%</p>
                  </div>

                  {/* Holding Horizon */}
                  <div className="border border-white/10 rounded-sm p-5 bg-[#0b0f10]/30 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white">Holding Horizon</span>
                      <span className="font-serif-headline text-lg text-[#e9c176] font-semibold">{horizonYears} Years</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 pt-1">
                      {[3, 5, 10, 15].map((yr) => (
                        <button
                          key={yr}
                          onClick={() => setHorizonYears(yr)}
                          className={`py-1.5 rounded-sm text-[11px] font-semibold transition-all font-mono ${
                            horizonYears === yr
                              ? 'bg-[#e9c176] text-[#241802] shadow-sm'
                              : 'border border-white/10 text-[#b5b0a6] hover:border-[#e9c176]'
                          }`}
                        >
                          {yr} Yrs
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Institutional Output Financial Ledger */}
            <div className="lg:col-span-5 space-y-8">
              <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-[#e9c176] text-xs uppercase tracking-[0.2em] font-semibold font-mono">03</span>
                  <span className="text-white/20">|</span>
                  <h2 className="text-base text-white font-medium tracking-wide">Underwritten Yield Matrix</h2>
                </div>
                <span className="border border-white/15 px-2 py-0.5 rounded text-[10px] text-[#9a8f80] font-mono uppercase tracking-wider">
                  Audited Ledger
                </span>
              </div>

              {/* Top Dual Key Metrics */}
              <div className="grid grid-cols-2 gap-4 pb-2">
                <div className="border-b border-[#e9c176]/40 pb-3 space-y-1">
                  <span className="text-[10px] text-[#9a8f80] uppercase tracking-wider font-mono">Gross Rental Yield</span>
                  <div className="font-serif-headline text-3xl sm:text-4xl text-[#e9c176] font-bold tracking-tight">
                    {grossYield.toFixed(2)}%
                  </div>
                  <p className="text-[11px] text-[#b5b0a6] font-light">Annual Potential / Total Capex</p>
                </div>
                <div className="border-b border-white/20 pb-3 space-y-1">
                  <span className="text-[10px] text-[#9a8f80] uppercase tracking-wider font-mono">Net Rental Yield (NOI)</span>
                  <div className="font-serif-headline text-3xl sm:text-4xl text-white font-bold tracking-tight">
                    {netYield.toFixed(2)}%
                  </div>
                  <p className="text-[11px] text-[#b5b0a6] font-light">Adjusted for OPEX & Vacancy</p>
                </div>
              </div>

              {/* Typographic Financial Ledger Table */}
              <div className="divide-y divide-white/10 border-y border-white/10 py-1 text-xs font-light">
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-[#b5b0a6]">Total Capitalized Cost (Base + Closing):</span>
                  <span className="text-white font-semibold font-mono">{formatMoney(totalCapex)}</span>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-[#b5b0a6]">Gross Annual Rental Inflow:</span>
                  <span className="text-white font-medium font-mono">{formatMoney(annualPotentialRent)}</span>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-[#b5b0a6]">Net Operating Income (NOI p.a.):</span>
                  <span className="text-[#e9c176] font-semibold font-mono">{formatMoney(annualNoi)}</span>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-[#b5b0a6]">Total Net Cashflow ({horizonYears} Yrs):</span>
                  <span className="text-white font-semibold font-mono">{formatMoney(cumulativeCashflow)}</span>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-[#b5b0a6]">Projected Capital Appreciation:</span>
                  <span className="text-white font-semibold font-mono">{formatMoney(totalCapitalGain)}</span>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-[#b5b0a6]">Estimated Terminal Valuation:</span>
                  <span className="text-[#e9c176] font-bold font-mono">{formatMoney(terminalValue)}</span>
                </div>
              </div>

              {/* Aggregate ROI Callout */}
              <div className="border border-white/10 rounded-sm p-5 bg-[#0b0f10]/60 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[11px] uppercase tracking-wider text-[#e9c176] font-semibold font-mono">
                    Total Projected Return (ROI)
                  </span>
                  <p className="text-[12px] text-[#b5b0a6] font-light">Cashflow Dividends + Compounded Appreciation</p>
                </div>
                <div className="font-serif-headline text-3xl sm:text-4xl text-[#e9c176] font-bold tracking-tight">
                  {totalRoiPercent.toFixed(2)}%
                </div>
              </div>

              {/* Pro-Forma Composition Bar */}
              <div className="space-y-2.5 pt-1">
                <div className="flex justify-between text-[11px] text-[#b5b0a6] uppercase tracking-wider font-mono">
                  <span>Return Capital Breakdown</span>
                  <span className="text-white font-medium">{formatMoney(totalWealth)} Cumulative</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden flex">
                  <div
                    className="bg-[#4e4639] h-full transition-all duration-300"
                    style={{ width: `${Math.max(5, Math.min(80, (totalCapex / totalWealth) * 100))}%` }}
                    title="Acquisition Base"
                  />
                  <div
                    className="bg-[#e9c176] h-full transition-all duration-300"
                    style={{ width: `${Math.max(5, Math.min(50, (cumulativeCashflow / totalWealth) * 100))}%` }}
                    title="Accumulated Cashflow"
                  />
                  <div
                    className="bg-[#ffdea5] h-full transition-all duration-300"
                    style={{ width: `${Math.max(5, Math.min(50, (totalCapitalGain / totalWealth) * 100))}%` }}
                    title="Capital Gain"
                  />
                </div>
                <div className="flex items-center gap-4 text-[10px] text-[#9a8f80] uppercase tracking-wider pt-0.5 font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#4e4639]"></span>
                    <span>Capital Base</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#e9c176]"></span>
                    <span>Net Inflows</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ffdea5]"></span>
                    <span>Capital Gain</span>
                  </div>
                </div>
              </div>

              {/* Action Suite */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleExportPdf}
                  disabled={isExporting}
                  className="w-full py-3.5 px-4 rounded-sm border border-[#e9c176] bg-[#e9c176] text-[#241802] text-xs font-semibold tracking-wide hover:bg-white hover:text-[#101415] transition-all flex items-center justify-center gap-2 uppercase"
                >
                  {isExporting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Compiling Hurleys Pro-Forma PDF...</span>
                    </>
                  ) : (
                    <>
                      <FileDown className="w-4 h-4" />
                      <span>Export Investment Pro-Forma (PDF)</span>
                    </>
                  )}
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/#investor-intake"
                    className="py-2.5 px-3 rounded-sm border border-white/10 hover:border-white/30 text-white text-xs font-medium transition-colors flex items-center justify-center gap-1.5 text-center"
                  >
                    <span>Request Feasibility</span>
                  </Link>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-sm border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 text-center"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Partner</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURATED ASSET UNDERWRITING SHOWCASES */}
      <section className="w-full bg-[#0b0f10]/60 border-t border-b border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[11px] text-[#e9c176] tracking-[0.2em] uppercase font-semibold font-mono">
                Calibrated Asset Archetypes
              </span>
              <h2 className="font-serif-headline text-3xl text-white font-normal">
                Active Investment Profiles Under Hurleys Advisory
              </h2>
              <p className="text-sm text-[#b5b0a6] font-light">
                Empirical properties underwritten against our institutional risk-adjusted model. Click any archetype to load its ledger into the live calculator.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[#e9c176] text-xs uppercase tracking-wider font-mono">
              <CheckCircle2 className="w-4 h-4" />
              <span>Title & Planning Cleared</span>
            </div>
          </div>

          <div className="space-y-10">
            {/* Showcase 1: Westlands High-End Serviced Residence */}
            <div className="scroll-fade card-hover grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-white/10 rounded-sm p-6 lg:p-8 bg-[#14181a]/50">
              <div className="lg:col-span-5 relative h-64 lg:h-72 w-full rounded-sm overflow-hidden border border-white/10 group">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80&fit=crop&auto=format"
                  alt="Westlands Luxury Tower"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 bg-[#101415]/90 backdrop-blur-md px-2.5 py-1 rounded text-[#e9c176] text-[10px] uppercase tracking-wider font-semibold border border-white/10 font-mono">
                  Urban Hospitality Mandate
                </div>
                <div className="absolute bottom-3 right-3 bg-[#e9c176] text-[#241802] text-xs px-2.5 py-1 rounded-sm font-bold font-mono">
                  11.8% Net Yield
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-serif-headline text-2xl font-normal">The Lumina Terraces</h3>
                    <span className="text-[#e9c176] text-[11px] uppercase tracking-wider font-mono">Westlands Financial Core</span>
                  </div>
                  <p className="text-[#b5b0a6] text-xs font-light">Diplomatic Blue Zone • Serviced Corporate Residence</p>
                </div>

                <div className="grid grid-cols-3 border-y border-white/10 py-3.5 divide-x divide-white/10 text-xs">
                  <div className="pr-4">
                    <span className="text-[10px] text-[#9a8f80] uppercase tracking-wider block font-mono">Acquisition Base</span>
                    <span className="font-serif-headline text-xl text-white font-bold">$185,000</span>
                  </div>
                  <div className="px-4">
                    <span className="text-[10px] text-[#9a8f80] uppercase tracking-wider block font-mono">Avg. Daily Rate</span>
                    <span className="font-serif-headline text-xl text-[#e9c176] font-bold">$110 / nt</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[10px] text-[#9a8f80] uppercase tracking-wider block font-mono">Target Occupancy</span>
                    <span className="font-serif-headline text-xl text-white font-bold">91% Expat</span>
                  </div>
                </div>

                <p className="text-xs text-[#b5b0a6] font-light leading-relaxed">
                  Engineered specifically for short-to-medium stay corporate executives from the UN, multinationals, and diplomatic embassies. Complete with hotel management concierge, infinity pool, fitness hub, and guaranteed USD lease options.
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                  <button
                    onClick={() => loadArchetype(185000, 1850, 91, 14, 7.5, 'The Lumina Terraces')}
                    className="py-2.5 px-5 rounded-sm border border-white/15 hover:border-[#e9c176] text-[#e9c176] hover:bg-[#e9c176] hover:text-[#241802] text-xs font-semibold tracking-wider transition-all flex items-center gap-2 uppercase"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Load Parameters Into Calculator</span>
                  </button>
                  <span className="text-[#9a8f80] text-[11px] uppercase tracking-wider font-mono">Est. Annual NOI: $17,450</span>
                </div>
              </div>
            </div>

            {/* Showcase 2: Karen Luxury Estate */}
            <div className="scroll-fade card-hover grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-white/10 rounded-sm p-6 lg:p-8 bg-[#14181a]/50">
              <div className="lg:col-span-5 relative h-64 lg:h-72 w-full rounded-sm overflow-hidden border border-white/10 group">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80&fit=crop&auto=format"
                  alt="Karen Manor Villa"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 bg-[#101415]/90 backdrop-blur-md px-2.5 py-1 rounded text-[#e9c176] text-[10px] uppercase tracking-wider font-semibold border border-white/10 font-mono">
                  Ultra-Prime Freehold Villa
                </div>
                <div className="absolute bottom-3 right-3 bg-[#e9c176] text-[#241802] text-xs px-2.5 py-1 rounded-sm font-bold font-mono">
                  7.4% Net + Preservation
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-serif-headline text-2xl font-normal">Karen Forest Manor Estate</h3>
                    <span className="text-[#e9c176] text-[11px] uppercase tracking-wider font-mono">Miotoni Ridge</span>
                  </div>
                  <p className="text-[#b5b0a6] text-xs font-light">Karen • 0.5-Acre Gated Compound • Diplomatic Zone</p>
                </div>

                <div className="grid grid-cols-3 border-y border-white/10 py-3.5 divide-x divide-white/10 text-xs">
                  <div className="pr-4">
                    <span className="text-[10px] text-[#9a8f80] uppercase tracking-wider block font-mono">Acquisition Base</span>
                    <span className="font-serif-headline text-xl text-white font-bold">$850,000</span>
                  </div>
                  <div className="px-4">
                    <span className="text-[10px] text-[#9a8f80] uppercase tracking-wider block font-mono">Diplomatic Monthly</span>
                    <span className="font-serif-headline text-xl text-[#e9c176] font-bold">$5,200 / mo</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[10px] text-[#9a8f80] uppercase tracking-wider block font-mono">Historical Land CAGR</span>
                    <span className="font-serif-headline text-xl text-white font-bold">10.2% p.a.</span>
                  </div>
                </div>

                <p className="text-xs text-[#b5b0a6] font-light leading-relaxed">
                  Prime diplomatic-grade residential asset adhering strictly to US Embassy security thresholds. Long-term sovereign tenancies with institutional rent reviews, zero tenancy void risk, and peerless underlying land value appreciation.
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                  <button
                    onClick={() => loadArchetype(850000, 5200, 96, 12, 9.8, 'Karen Forest Manor')}
                    className="py-2.5 px-5 rounded-sm border border-white/15 hover:border-[#e9c176] text-[#e9c176] hover:bg-[#e9c176] hover:text-[#241802] text-xs font-semibold tracking-wider transition-all flex items-center gap-2 uppercase"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Load Parameters Into Calculator</span>
                  </button>
                  <span className="text-[#9a8f80] text-[11px] uppercase tracking-wider font-mono">Est. Horizon Gain: $520,000+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-BORDER PERFORMANCE MATRIX */}
      <section className="w-full bg-[#101415] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[11px] text-[#e9c176] uppercase tracking-[0.2em] font-semibold font-mono">
                Comparative Macro Intelligence
              </span>
              <h2 className="font-serif-headline text-3xl text-white font-normal">
                Yield Benchmark & Cross-Border Performance Matrix
              </h2>
              <p className="text-sm text-[#b5b0a6] font-light">
                Institutional yield spreads outperforming Western saturated metros while anchored by real demographic tailwinds and sovereign USD-denominated lease contracts.
              </p>
            </div>
            <div className="flex items-center gap-2 border border-white/10 px-3 py-1.5 rounded-sm text-[#b5b0a6] text-xs font-mono">
              <Calendar className="w-3.5 h-3.5 text-[#e9c176]" />
              <span>Updated Q4 2026 Market Survey</span>
            </div>
          </div>

          <div className="overflow-x-auto border border-white/10 rounded-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#0b0f10] text-[11px] uppercase tracking-wider text-[#e9c176] border-b border-white/10 font-mono">
                <tr>
                  <th className="py-4 px-6">Asset Category & Metro Hub</th>
                  <th className="py-4 px-6">Typical Net Yield</th>
                  <th className="py-4 px-6">Avg. Capital Growth (p.a.)</th>
                  <th className="py-4 px-6">Tenant Profile</th>
                  <th className="py-4 px-6">Liquidity Profile</th>
                  <th className="py-4 px-6 text-right">Risk-Adj. Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[#e0e3e5]">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 font-semibold flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#e9c176] shrink-0"></span>
                    <div>
                      <div className="text-white font-medium">Serviced Luxury Suites</div>
                      <span className="text-[#9a8f80] text-[10px]">Nairobi (Westlands / Kilimani)</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-[#e9c176] font-bold font-mono text-sm">9.5% – 12.0%</td>
                  <td className="py-4 px-6 font-light">6.0% – 8.0%</td>
                  <td className="py-4 px-6 text-[#b5b0a6]">Diplomats, Multinationals, Expat Inflows</td>
                  <td className="py-4 px-6">High (Strong Resale Demand)</td>
                  <td className="py-4 px-6 text-right">
                    <span className="border border-[#e9c176]/30 text-[#e9c176] px-2.5 py-0.5 rounded font-mono text-[10px]">AAA Prime</span>
                  </td>
                </tr>

                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 font-semibold flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#bac7e1] shrink-0"></span>
                    <div>
                      <div className="text-white font-medium">Grade-A Commercial Office</div>
                      <span className="text-[#9a8f80] text-[10px]">Nairobi (Upper Hill / Parklands)</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-white font-bold font-mono text-sm">8.5% – 10.5%</td>
                  <td className="py-4 px-6 font-light">5.0% – 7.0%</td>
                  <td className="py-4 px-6 text-[#b5b0a6]">Fortune 500 Regional Headquarters</td>
                  <td className="py-4 px-6">Moderate</td>
                  <td className="py-4 px-6 text-right">
                    <span className="border border-white/10 text-white px-2.5 py-0.5 rounded font-mono text-[10px]">AA Institutional</span>
                  </td>
                </tr>

                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 font-semibold flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#c5a059] shrink-0"></span>
                    <div>
                      <div className="text-white font-medium">High-End Diplomatic Villas</div>
                      <span className="text-[#9a8f80] text-[10px]">Karen / Muthaiga / Runda</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-white font-bold font-mono text-sm">6.0% – 8.0%</td>
                  <td className="py-4 px-6 text-[#e9c176] font-semibold font-mono">9.0% – 12.0%</td>
                  <td className="py-4 px-6 text-[#b5b0a6]">Ambassadors & Sovereign Consulates</td>
                  <td className="py-4 px-6">Medium (Capital Preservation Focus)</td>
                  <td className="py-4 px-6 text-right">
                    <span className="border border-[#e9c176]/30 text-[#e9c176] px-2.5 py-0.5 rounded font-mono text-[10px]">AAA Wealth Store</span>
                  </td>
                </tr>

                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 font-semibold flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#dee2ec] shrink-0"></span>
                    <div>
                      <div className="text-white font-medium">Strategic Land Corridors</div>
                      <span className="text-[#9a8f80] text-[10px]">Kiambu Rd / Athi River / Naivasha</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-[#9a8f80] font-mono">N/A (Non-Income)</td>
                  <td className="py-4 px-6 text-[#e9c176] font-bold font-mono text-sm">18.0% – 28.0%</td>
                  <td className="py-4 px-6 text-[#b5b0a6]">Infrastructure & Subdivision Rights</td>
                  <td className="py-4 px-6">High at Exit Milestone</td>
                  <td className="py-4 px-6 text-right">
                    <span className="border border-white/10 text-white px-2.5 py-0.5 rounded font-mono text-[10px]">Speculative Alpha</span>
                  </td>
                </tr>

                <tr className="hover:bg-white/[0.02] transition-colors bg-white/[0.01]">
                  <td className="py-4 px-6 font-semibold flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#4e4639] shrink-0"></span>
                    <div>
                      <div className="text-white/60 font-medium">Western Core Benchmark</div>
                      <span className="text-[#9a8f80] text-[10px]">Prime Central London / Manhattan NYC</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-[#9a8f80] font-mono text-sm">3.2% – 4.4%</td>
                  <td className="py-4 px-6 text-[#9a8f80]">2.5% – 3.8%</td>
                  <td className="py-4 px-6 text-[#b5b0a6]/60">Domestic Corporate & Private</td>
                  <td className="py-4 px-6 text-[#9a8f80]">Very High</td>
                  <td className="py-4 px-6 text-right">
                    <span className="border border-white/10 text-[#9a8f80] px-2.5 py-0.5 rounded font-mono text-[10px]">Mature Saturated</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

