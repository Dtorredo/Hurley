'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Darker background when scrolled
      setScrolled(currentScrollY > 40);

      // Hide on scroll down, show on scroll up (unless mobile menu is open)
      if (!mobileMenuOpen) {
        if (currentScrollY > 90) {
          if (currentScrollY > lastScrollY + 5) {
            // Scrolling down
            setVisible(false);
          } else if (currentScrollY < lastScrollY - 5) {
            // Scrolling up
            setVisible(true);
          }
        } else {
          // Near top of page
          setVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const navLinks = [
    { label: 'Overview', href: '/' },
    { label: 'Curated Portfolio', href: '/properties' },
    { label: 'Joint Ventures', href: '/joint-ventures' },
    { label: 'ROI Calculator', href: '/roi-calculator' },
  ];

  const waLink = "https://wa.me/254112144064?text=Hello%20Hurleys%20Desk%2C%20I%20am%20inquiring%20about%20Kenyan%20real%20estate%20opportunities";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled
          ? 'bg-[#0b0f10]/98 backdrop-blur-xl border-b border-[#e9c176]/25 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
          : 'bg-[#101415]/90 backdrop-blur-xl border-b border-white/[0.06]'
      }`}
    >
      {/* Main Bar */}
      <div className="w-full px-6 lg:px-16">
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between gap-6">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center space-x-3.5 shrink-0 group">
            <div className="h-9 w-9 rounded border border-[#e9c176]/40 bg-[#1d2022] flex items-center justify-center text-[#e9c176] font-serif font-bold text-lg group-hover:border-[#e9c176] group-hover:bg-[#e9c176]/10 transition-all duration-200">
              H
            </div>
            <div className="flex flex-col">
              <span className="font-serif-headline text-lg leading-none text-white tracking-wider uppercase font-semibold">
                Hurleys
              </span>
              <span className="text-[10px] leading-none text-[#e9c176] uppercase tracking-[0.25em] mt-1.5 font-medium">
                International
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 text-[13px] tracking-wide text-[#b5b0a6]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-200 hover:text-white group ${
                    isActive ? 'text-[#e9c176] font-semibold' : ''
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-[#e9c176] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Action Area */}
          <div className="flex items-center space-x-4 shrink-0">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-[12px] uppercase tracking-wider text-[#b5b0a6] hover:text-[#25D366] transition-colors duration-200"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
            <Link
              href="/#investor-intake"
              className="btn-shimmer inline-flex items-center px-4 py-2 border border-[#e9c176]/50 text-[#101415] font-semibold text-[11px] tracking-[0.18em] uppercase hover:text-black transition-all duration-300 rounded-sm"
            >
              Invest With Us
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#b5b0a6] hover:text-white transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96 opacity-100 border-b border-white/10' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0b0f10] px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm py-2 uppercase tracking-wider text-[#b5b0a6] hover:text-[#e9c176] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#investor-intake"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center py-2.5 bg-[#e9c176] text-[#101415] font-semibold text-xs tracking-widest uppercase rounded-sm mt-2"
          >
            Invest With Us
          </Link>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 pt-2 text-[#25D366] text-xs font-semibold uppercase tracking-wider"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
