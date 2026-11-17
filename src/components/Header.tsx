import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react';
import { cn } from '../lib/cn';
import { asset } from '../lib/assets';
import { CITIES, useCity } from '../context/CityContext';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Projects', href: '/projects' },
  { label: 'City Engine', href: '/city-selector' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { activeCity, setModalOpen } = useCity();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          'fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1248px] px-3 sm:px-4 transition-all duration-300'
        )}
      >
        <nav
          className={cn(
            'flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl border transition-all duration-300',
            scrolled
              ? 'bg-[#17231D]/95 backdrop-blur-[16px] border-[#2B4234] shadow-elevated'
              : 'bg-[#17231D]/90 backdrop-blur-[12px] border-[#2B4234]'
          )}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center p-1 sm:p-1.5 shadow-sm flex-shrink-0">
              <img src={asset('/logo.svg')} alt="JaiKisaan Solar" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading font-extrabold text-xs sm:text-sm tracking-tight text-white group-hover:text-brand-lime transition-colors">
                JAI KISAAN <span className="text-brand-lime font-bold">SOLAR</span>
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-text-onDarkMuted uppercase mt-0.5">
                SunScope Group
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={cn(
                      'px-3 py-2 rounded-lg text-sm font-body font-medium transition-colors duration-200',
                      isActive
                        ? 'text-brand-lime bg-white/8'
                        : 'text-text-onDark hover:text-brand-lime hover:bg-white/8'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right side: City selector + WhatsApp + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* City selector Trigger Pill — Opens Apple-Style Modal */}
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-body font-semibold text-text-onDark hover:text-brand-lime hover:bg-white/8 transition-colors border border-border-darkSubtle group"
              title="Click to change active region"
            >
              <span className="text-brand-lime animate-pulse">📍</span>
              <span>{activeCity}</span>
              <span className="text-[10px] text-text-onDarkMuted font-normal ml-0.5 group-hover:text-brand-lime">
                Change
              </span>
            </button>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917239992778"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/8 hover:bg-brand-lime/20 border border-border-darkSubtle text-text-onDarkMuted hover:text-brand-lime transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={16} />
            </a>

            {/* CTA */}
            <a
              href="/contact"
              className="inline-flex items-center gap-2 h-10 px-5 rounded-xl bg-brand-forest text-white text-sm font-body font-semibold hover:bg-brand-forestLight transition-colors border border-brand-forest shadow-card"
            >
              Get Free Feasibility
            </a>
          </div>

          {/* Mobile Right: Quick City Pill + Hamburger Button */}
          <div className="flex lg:hidden items-center gap-1.5">
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-mono text-brand-lime bg-white/10 border border-white/15"
              aria-label="Select City"
            >
              <span>📍</span>
              <span>{activeCity}</span>
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-xl text-white hover:bg-white/10 active:bg-white/20 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div
            style={{ backgroundColor: '#17231D' }}
            className="lg:hidden mt-2 bg-[#17231D] border border-[#2B4234] rounded-2xl shadow-2xl overflow-hidden animate-fade-in max-h-[82vh] overflow-y-auto"
          >
            <div className="p-4 flex flex-col gap-1.5 bg-[#17231D]">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      'px-4 py-3 rounded-xl text-sm font-heading font-semibold transition-colors flex items-center justify-between',
                      isActive
                        ? 'text-[#C5F176] bg-white/10 font-bold'
                        : 'text-white hover:text-[#C5F176] hover:bg-white/5 active:bg-white/10'
                    )}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-[#A3B3AA]">➔</span>
                  </Link>
                );
              })}

              <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2.5">
                <button
                  onClick={() => { setModalOpen(true); setMenuOpen(false); }}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#1E2D26] border border-[#2B4234] text-xs font-mono text-white active:bg-white/10"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-brand-lime">📍</span>
                    Operational Hub: <strong className="text-brand-lime">{activeCity}</strong>
                  </span>
                  <span className="text-brand-lime font-bold">Change →</span>
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href="tel:+917239992778"
                    className="flex items-center justify-center gap-1.5 h-11 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-heading font-bold"
                  >
                    📞 Call Support
                  </a>
                  <a
                    href="https://wa.me/917239992778"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 h-11 rounded-xl bg-[#005733] hover:bg-[#004729] text-white text-xs font-heading font-bold"
                  >
                    <MessageCircle size={15} />
                    WhatsApp
                  </a>
                </div>

                <a
                  href="/contact"
                  className="flex items-center justify-center h-12 rounded-xl bg-brand-lime hover:bg-[#d6f799] text-[#17231D] text-xs font-heading font-extrabold uppercase tracking-wider shadow-glow-lime mt-1 transition-colors"
                >
                  Request Free Feasibility
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
};

export default Header;

