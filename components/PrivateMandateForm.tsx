'use client';

import React, { useState } from 'react';
import { Send, Shield, Lock, MessageSquare } from 'lucide-react';
import { useToast } from './ToastContext';

export default function PrivateMandateForm() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    phone: '',
    capital: '$100,000 – $250,000 (Individual Residences)',
    assetPreference: 'Prime Development Land',
    parameters: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(
      'Mandate Received Under Confidential Protocol',
      `Thank you, ${formData.fullName || 'Valued Client'}. Your private brief has been transmitted to our Senior Transactions Committee. A Partner will connect within 2 business hours.`
    );
    setFormData({
      fullName: '',
      email: '',
      country: '',
      phone: '',
      capital: '$100,000 – $250,000 (Individual Residences)',
      assetPreference: 'Prime Development Land',
      parameters: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2 border-b border-white/[0.12] pb-2 focus-within:border-[#e9c176] transition-colors">
          <label className="block text-[10px] tracking-[0.2em] uppercase text-white/50">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Lord James Hamilton / Dr. Amina Odhiambo"
            className="w-full bg-transparent p-0 text-white placeholder:text-white/20 border-0 focus:ring-0 text-sm font-light focus:outline-none"
          />
        </div>

        <div className="space-y-2 border-b border-white/[0.12] pb-2 focus-within:border-[#e9c176] transition-colors">
          <label className="block text-[10px] tracking-[0.2em] uppercase text-white/50">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="privateclient@domain.com"
            className="w-full bg-transparent p-0 text-white placeholder:text-white/20 border-0 focus:ring-0 text-sm font-light focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2 border-b border-white/[0.12] pb-2 focus-within:border-[#e9c176] transition-colors">
          <label className="block text-[10px] tracking-[0.2em] uppercase text-white/50">
            Country of Residence *
          </label>
          <input
            type="text"
            required
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            placeholder="United Kingdom, UAE, USA, Kenya"
            className="w-full bg-transparent p-0 text-white placeholder:text-white/20 border-0 focus:ring-0 text-sm font-light focus:outline-none"
          />
        </div>

        <div className="space-y-2 border-b border-white/[0.12] pb-2 focus-within:border-[#e9c176] transition-colors">
          <label className="block text-[10px] tracking-[0.2em] uppercase text-white/50">
            Phone / WhatsApp *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+44 7911 123456"
            className="w-full bg-transparent p-0 text-white placeholder:text-white/20 border-0 focus:ring-0 text-sm font-light focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2 border-b border-white/[0.12] pb-2 focus-within:border-[#e9c176] transition-colors">
          <label className="block text-[10px] tracking-[0.2em] uppercase text-white/50">
            Target Capital Allocation *
          </label>
          <select
            value={formData.capital}
            onChange={(e) => setFormData({ ...formData, capital: e.target.value })}
            className="w-full bg-transparent p-0 text-white border-0 focus:ring-0 text-sm font-light focus:outline-none cursor-pointer"
          >
            <option className="bg-[#101415]" value="$100,000 – $250,000 (Individual Residences)">$100,000 – $250,000 (Individual Residences)</option>
            <option className="bg-[#101415]" value="$250,000 – $1,000,000 (Prime Land & Multiple Units)">$250,000 – $1,000,000 (Prime Land & Multiple Units)</option>
            <option className="bg-[#101415]" value="$1,000,000 – $5,000,000 (Commercial & JV Land)">$1,000,000 – $5,000,000 (Commercial & JV Land)</option>
            <option className="bg-[#101415]" value="$5,000,000+ (Institutional Mandate / Large Scale)">$5,000,000+ (Institutional Mandate / Large Scale)</option>
          </select>
        </div>

        <div className="space-y-2 border-b border-white/[0.12] pb-2 focus-within:border-[#e9c176] transition-colors">
          <label className="block text-[10px] tracking-[0.2em] uppercase text-white/50">
            Asset Preference *
          </label>
          <select
            value={formData.assetPreference}
            onChange={(e) => setFormData({ ...formData, assetPreference: e.target.value })}
            className="w-full bg-transparent p-0 text-white border-0 focus:ring-0 text-sm font-light focus:outline-none cursor-pointer"
          >
            <option className="bg-[#101415]" value="Prime Development Land">Prime Development Land</option>
            <option className="bg-[#101415]" value="High-Yield Apartments (Westlands / Kilimani)">High-Yield Apartments (Westlands / Kilimani)</option>
            <option className="bg-[#101415]" value="Luxury Gated Residences (Karen / Runda)">Luxury Gated Residences (Karen / Runda)</option>
            <option className="bg-[#101415]" value="Commercial / Logistics Parcels">Commercial / Logistics Parcels</option>
            <option className="bg-[#101415]" value="Joint Venture Development">Joint Venture Development</option>
          </select>
        </div>
      </div>

      <div className="space-y-2 border-b border-white/[0.12] pb-2 focus-within:border-[#e9c176] transition-colors">
        <label className="block text-[10px] tracking-[0.2em] uppercase text-white/50">
          Specific Parameters / Time Horizon
        </label>
        <textarea
          rows={2}
          value={formData.parameters}
          onChange={(e) => setFormData({ ...formData, parameters: e.target.value })}
          placeholder="Detail any targeted corridors, minimum IRR thresholds, or timeline constraints..."
          className="w-full bg-transparent p-0 text-white placeholder:text-white/20 border-0 focus:ring-0 text-sm font-light focus:outline-none resize-none"
        ></textarea>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <span className="text-[11px] text-white/40 font-light flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5 text-[#e9c176]" />
          Strict Non-Disclosure Guaranteed under Kenyan Data Protection Act
        </span>
        <button
          type="submit"
          className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#e9c176] text-[#241802] text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-white hover:text-[#101415] transition-all duration-300 rounded-sm"
        >
          <span>Transmit Mandate</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </form>
  );
}

