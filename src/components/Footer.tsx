import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Radio } from 'lucide-react';
import { asset } from '../lib/assets';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121A16] text-[#A3B3AA] border-t border-[#23352B]">
      {/* Main footer grid */}
      <div className="max-w-[1248px] mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand column (5 cols) */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center p-1.5 shadow-sm flex-shrink-0">
                <img src={asset('/logo.svg')} alt="JaiKisaan Solar" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-extrabold text-base tracking-tight text-white group-hover:text-brand-lime transition-colors">
                  JAI KISAAN <span className="text-brand-lime font-bold">SOLAR</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#7C8F83] uppercase mt-0.5">
                  A SunScope Company
                </span>
              </div>
            </Link>
            <p className="font-body text-sm text-[#A3B3AA] leading-relaxed max-w-sm">
              Architecting next-generation clean energy, turnkey EPC, and high-efficiency utility infrastructure across residential, commercial, industrial, and agricultural domains nationwide.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A2921] border border-[#2B4234] text-[11px] font-mono text-brand-lime w-fit">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
              <span>GRID TIED TELEMETRY: 100% OPERATIONAL</span>
            </div>
          </div>

          {/* Solutions column (2 cols) */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="text-xs font-mono font-semibold text-white uppercase tracking-widest">SOLUTIONS</div>
            <ul className="flex flex-col gap-2.5 text-sm font-body">
              {[
                { label: 'Residential Rooftop', href: '/solutions' },
                { label: 'C&I Solar Plants', href: '/solutions' },
                { label: 'Utility-Grade EPC', href: '/solutions' },
                { label: 'Transmission Line', href: '/solutions' },
                { label: 'EV Charging Networks', href: '/solutions' },
                { label: 'Solar Street Lights', href: '/solutions' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-[#A3B3AA] hover:text-brand-lime transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column (2 cols) */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="text-xs font-mono font-semibold text-white uppercase tracking-widest">COMPANY</div>
            <ul className="flex flex-col gap-2.5 text-sm font-body">
              {[
                { label: 'About SunScope Group', href: '/about' },
                { label: "Founder's Message", href: '/founder' },
                { label: 'Our Partners', href: '/partners' },
                { label: 'Investor Relations', href: '/investors' },
                { label: 'Past EPC Showcase', href: '/projects' },
                { label: 'Careers & Culture', href: '/careers' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-[#A3B3AA] hover:text-brand-lime transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Headquarters column (3 cols) */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <div className="text-xs font-mono font-semibold text-white uppercase tracking-widest">HEADQUARTERS</div>
            <div className="flex flex-col gap-3 text-xs font-body text-[#A3B3AA] leading-relaxed">
              <div>
                <strong className="text-white block font-medium">Head Office - Jaipur</strong>
                Jai Kisaan Solar Pvt. Ltd., S.P Tower, 150, Sirsi Rd, Officers Campus Colony, Jaipur, Rajasthan 302012
              </div>
              <div className="flex flex-col gap-1.5 pt-1">
                <a href="tel:+917239992778" className="hover:text-brand-lime transition-colors flex items-center gap-2">
                  <Phone size={13} className="text-brand-lime" /> +91 72399 92778 / +91 85299 99277
                </a>
                <a href="mailto:info@jaikisaansolar.com" className="hover:text-brand-lime transition-colors flex items-center gap-2">
                  <Mail size={13} className="text-brand-lime" /> info@jaikisaansolar.com
                </a>
                <div className="text-[11px] text-[#A3B3AA] pt-1">
                  <span>Support: </span>
                  <a href="mailto:welisten@jaikisaansolar.com" className="hover:text-brand-lime text-white">welisten@jaikisaansolar.com</a>
                  <span> · </span>
                  <a href="tel:+917239999277" className="hover:text-brand-lime text-white">+91 7239999277</a>
                </div>
              </div>
              <div className="text-[11px] text-[#7C8F83] pt-1 border-t border-[#23352B]">
                <span className="text-white font-medium">Operational Offices:</span> Jaipur, Begun, Nawalgarh, Lucknow, Agra, Kanpur, Indore, Hyderabad, Amritsar, Delhi NCR, Udaipurwati
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#23352B] bg-[#0E1512]">
        <div className="max-w-[1248px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-body text-[#7C8F83]">
          <p className="text-center md:text-left">© {new Date().getFullYear()} Jai Kisaan Solar (A SunScope Group Company). All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-center">
            <Link to="/privacy" className="hover:text-brand-lime transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-lime transition-colors">Terms &amp; Conditions</Link>
            <Link to="/about" className="hover:text-brand-lime transition-colors">ESG Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
