import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../lib/assets';
import { 
  ArrowRight, Award, Shield, TrendingUp, Users, Sun, CheckCircle, Zap, Leaf, 
  Atom, Gauge, Wrench, Factory, Cpu, Phone, Mail, MapPin, MessageCircle, Star 
} from 'lucide-react';

// ─── 1. Evolution Phases (5-phase progressive flow, Phase 5 highlighted dark) ─
const EVOLUTION_PHASES = [
  {
    phase: 'Phase 01',
    year: '2015',
    title: 'Expanding Horizons in C&I Solar',
    desc: 'Powering businesses since 2015 with tailored solar solutions for offices and factories — delivering cost savings, sustainability, and expert EPC service with every project.',
    isDark: false,
  },
  {
    phase: 'Phase 02',
    year: '2018',
    title: 'Scaling Up Utility-Scale Solar',
    desc: 'Leading the way in utility-scale solar from our first 20 MWp plant to our milestone 120 MWp project, fueled by engineering innovation and flawless execution.',
    isDark: false,
  },
  {
    phase: 'Phase 03',
    year: '2022',
    title: 'Lighting Up India & PM Surya Ghar',
    desc: 'Lighting up India since 2022 — slashing power bills, protecting the planet, and accelerating solar adoption through government schemes like PM Surya Ghar Muft Bijli Yojana.',
    isDark: false,
  },
  {
    phase: 'Phase 04',
    year: '2024',
    title: 'Transmission Lines & EV Networks',
    desc: 'Powering the future with solar, high-voltage transmission lines, substations, and EV charging stations — fast, efficient, and built for a sustainable tomorrow.',
    isDark: false,
  },
  {
    phase: 'Phase 05',
    year: '2026',
    title: '300+ Projects & Green Hydrogen',
    desc: 'With 300+ projects delivered successfully, our 5-year green hydrogen roadmap pioneers scalable clean hydrogen production for transport, industry, and energy storage.',
    isDark: true, // Dark sanctuary card in Figma
  },
];

// ─── 2. Green Hydrogen Cards ──────────────────────────────────────────────────
const HYDROGEN_CARDS = [
  {
    icon: Atom,
    title: 'Decentralized PEM Electrolysis',
    desc: 'On-site green hydrogen generation coupled with dedicated solar PV microgrids to eliminate industrial pipeline distribution costs.',
  },
  {
    icon: Leaf,
    title: 'Biomass Hybrid Synthesis',
    desc: 'Co-locating biomass agricultural waste gasification with surplus afternoon solar generation for continuous 24/7 clean power.',
  },
  {
    icon: Factory,
    title: 'Zero-Emission Cold-Chain Power',
    desc: 'Hydrogen fuel-cell emergency backup replacing diesel generators across temperature-critical perishable warehousing.',
  },
  {
    icon: Gauge,
    title: 'High-Pressure Solid Storage',
    desc: 'Safe, low-pressure metal hydride storage architectures designed specifically for harsh ambient agricultural and arid desert climates.',
  },
  {
    icon: TrendingUp,
    title: 'Clean Ammonia & Fertilizer Inputs',
    desc: 'Enabling rural farmer cooperatives to produce localized green ammonia inputs, reducing dependency on imported chemical fertilisers.',
  },
];

// ─── 3. Why Choose JKS (6 Cards) ──────────────────────────────────────────────
const WHY_CHOOSE_JKS = [
  {
    icon: Award,
    title: 'Institutional Standards',
    desc: 'Empanelled with 8 State Nodal Agencies under MNRE. Every project complies with central subsidy and grid-interconnection codes.',
  },
  {
    icon: Cpu,
    title: 'Tier-1 BOS Hardware',
    desc: 'Exclusively Tier-1 DCR Monocrystalline Bifacial modules (Waaree, Adani) and industrial IP65 string inverters with 25-year linear performance warranty.',
  },
  {
    icon: TrendingUp,
    title: 'Bankable Financial Engineering',
    desc: 'Tailored for Section 32 40% accelerated depreciation, project IRR exceeding 21%, and transparent 25-year cash flow projections.',
  },
  {
    icon: CheckCircle,
    title: 'Turnkey Lifecycle Delivery',
    desc: 'Site feasibility DPR → DISCOM liaison → Net metering sanction → Commissioning → 5-Year comprehensive AMC with zero handoffs.',
  },
  {
    icon: Gauge,
    title: '5-Minute SCADA Telemetry',
    desc: 'Continuous real-time generation monitoring, automated string anomaly alerts, and predictive cleaning schedules via dedicated client app.',
  },
  {
    icon: Wrench,
    title: '48-Hour Rapid Regional O&M',
    desc: 'Dedicated field engineers and mobile replacement parts inventory stationed across 7 key industrial hubs in UP and Rajasthan.',
  },
];

// ─── 4. Executive Leadership ──────────────────────────────────────────────────
const LEADERSHIP = [
  {
    name: 'Sanjeev Kumar',
    role: 'Group CEO, SunScope Group',
    bio: 'Leads SunScope Group of Companies (eSunScope, Jai Kisaan Solar, CityScene Global). Directs corporate strategy, process intelligence, and green hydrogen innovations.',
    image: '/assets/images/sanjeev-kumar-portrait.jpg',
  },
  {
    name: 'Rajesh Varma',
    role: 'Chief Technology Officer',
    bio: 'Ex-BHEL power electronics specialist. 18 years experience designing high-efficiency grid-tied inverters and industrial harmonic suppression systems.',
    image: '/assets/images/ec93fb54d6f34afd281f8e8c0cae0dd28a7d011e.jpg',
  },
  {
    name: 'Dr. Kavita Nair',
    role: 'Head of Green Hydrogen R&D',
    bio: 'Ph.D. in Chemical Engineering from IIT Delhi. Spearheads PEM electrolyser pilots and agricultural biomass-to-hydrogen synthesis protocols.',
    image: '/assets/images/dafba3748d9108091a86ef6d6581a34c57f6b195.jpg',
  },
  {
    name: 'Priyanshu Mishra',
    role: 'VP Projects & Grid Integration',
    bio: 'Supervised 250+ MW of turnkey solar installations across UP, Rajasthan, and MP. Specialist in DISCOM net-metering and 33kV bay substations.',
    image: '/assets/images/728d8a26212d3c1480e93c883325c4666067c0dc.jpg',
  },
];

// ─── 5. Certifications (8 Tiles matching Image 9) ─────────────────────────────
const CERTIFICATIONS = [
  { name: 'PM Surya Ghar', code: 'National Rooftop Solar Portal empanelment for direct consumer DBT' },
  { name: 'MNRE Approved', code: 'Ministry of New & Renewable Energy benchmark compliance' },
  { name: 'UPNEDA Certified', code: 'Uttar Pradesh State Nodal Agency empanelment for subsidy release' },
  { name: 'Rajasthan DISCOMs', code: 'JVVNL, AVVNL & JDVVNL grid synchronization compliance' },
  { name: 'ISO 9001:2015', code: 'Quality Management System certified engineering & EPC operations' },
  { name: 'ISO 14001:2015', code: 'Environmental Management and zero-hazard field deployment' },
  { name: 'CEA Compliant', code: 'Central Electricity Authority grid safety & anti-islanding protocol' },
  { name: 'National Solar Mission', code: 'Aligned with India’s 500 GW clean energy national mission' },
];

// ─── Master About Us Page Component (Matching Node 117:3408) ──────────────────
const About: React.FC = () => {
  return (
    <>
      {/* ─── 1. Hero Section (Matching Figma light spatial editorial hero) ────── */}
      <section className="bg-[#F9FAF4] min-h-screen flex items-center pt-28 pb-16 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-semibold text-[#4B6D00] uppercase tracking-widest bg-brand-forest/10 px-3 py-1 rounded-full">
                  CORPORATE HERITAGE &amp; LINEAGE
                </span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#1A1C19] leading-[1.1] tracking-tight break-words">
                Our Journey: From<br />
                Residential Solar to<br />
                <span className="text-brand-forest">Green Hydrogen Future</span>
              </h1>

              <p className="font-body text-base md:text-lg text-[#3F4942] leading-relaxed max-w-xl">
                Founded with a resolute commitment to energy sovereignty, JaiKisaan Solar engineers institutional-grade clean energy infrastructure for North India&apos;s agricultural, commercial cold storage, and heavy industrial backbone.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-brand-forest hover:bg-brand-forestLight text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-card w-full sm:w-auto"
                >
                  Connect with Engineers <ArrowRight size={15} />
                </Link>
                <a
                  href="#heritage"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('heritage')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-white hover:bg-[#F3F4EE] text-[#1A1C19] font-heading font-semibold text-xs uppercase tracking-wider transition-colors border border-[#E8EAE3] w-full sm:w-auto"
                >
                  Explore 5-Phase Roadmap
                </a>
              </div>
            </div>

            {/* Right Column (5 cols): Visual Feature Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-elevated border border-[#E8EAE3] h-80 sm:h-96 relative">
                <img
                  src={asset('/assets/images/eb57feb6758b7ceae7f59bfdbdb688bdafb6b005.jpg')}
                  alt="JaiKisaan Solar field installation sunset"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-mono uppercase bg-brand-forest text-brand-lime px-2.5 py-1 rounded-full font-bold">
                    SunScope Group Company
                  </span>
                  <div className="font-heading font-extrabold text-xl mt-2">
                    520+ Commercial &amp; Agro Solar Plants
                  </div>
                  <div className="text-xs font-mono text-gray-200 mt-1">
                    Operating across UP, Rajasthan, MP &amp; Gujarat
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. Engineering Renewable Sovereignty + 4 Stats ───────────────────── */}
      <section id="heritage" className="bg-white py-20 md:py-24 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs font-mono font-semibold text-[#4B6D00] uppercase tracking-widest">
                EPC EXCELLENCE
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1A1C19] leading-tight">
                Engineering Renewable Sovereignty for India&apos;s Future
              </h2>
              <p className="font-body text-base text-[#3F4942] leading-relaxed">
                What began in 2015 as a targeted commercial &amp; industrial solar EPC practice has grown into one of North and West India&apos;s premier clean energy companies. Jai Kisaan Solar provides solar panel installation, energy solutions, and maintenance for residential and commercial clients, promoting renewable energy under the SunScope Group umbrella.
              </p>
              <div className="flex flex-col gap-3 pt-2">
                {[
                  'Full-lifecycle EPC: Feasibility DPR → DISCOM Subsidy Liaison → Turnkey Installation → 25-Year AMC',
                  'Empanelled with 8 State Nodal Agencies under MNRE guidelines',
                  'Exclusively Tier-1 DCR Monocrystalline Bifacial solar hardware',
                  'Bankable financial models tailored for Section 32 40% accelerated depreciation',
                  'Member of the SunScope Group family of renewable infrastructure companies',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-brand-forest flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-[#3F4942] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 Stats Grid matching Figma Frame 2 exactly: 2015, 300+, 120 MWp, 99.4% */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 sm:p-6 rounded-2xl bg-[#F9FAF4] border border-[#E8EAE3]">
                <div className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-forest">2015</div>
                <div className="font-heading font-bold text-xs sm:text-sm text-[#1A1C19] mt-2">Powering Businesses</div>
                <p className="font-body text-[11px] sm:text-xs text-[#3F4942] mt-1">Solar &amp; EPC Heritage</p>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl bg-[#F9FAF4] border border-[#E8EAE3]">
                <div className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-forest">300+</div>
                <div className="font-heading font-bold text-xs sm:text-sm text-[#1A1C19] mt-2">Delivered Projects</div>
                <p className="font-body text-[11px] sm:text-xs text-[#3F4942] mt-1">Endless happy customers</p>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl bg-[#F9FAF4] border border-[#E8EAE3]">
                <div className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-forest">120 MWp</div>
                <div className="font-heading font-bold text-xs sm:text-sm text-[#1A1C19] mt-2">Utility Plant Scale</div>
                <p className="font-body text-[11px] sm:text-xs text-[#3F4942] mt-1">From 20 MWp to 120 MWp</p>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl bg-[#F9FAF4] border border-[#E8EAE3]">
                <div className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-forest">6+ States</div>
                <div className="font-heading font-bold text-xs sm:text-sm text-[#1A1C19] mt-2">National Footprint</div>
                <p className="font-body text-[11px] sm:text-xs text-[#3F4942] mt-1">RJ, UP, MP, TS, PB, DL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. The 5-Phase Evolution (5-Column Progressive Horizontal Flow) ─── */}
      <section className="bg-[#F9FAF4] py-20 md:py-28 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-semibold text-[#4B6D00] uppercase tracking-widest">
              PROGRESSIVE ROADMAP
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1C19] mt-2">
              The 5-Phase Evolution of JaiKisaan Solar
            </h2>
            <p className="font-body text-base text-[#3F4942] mt-3">
              Our progressive expansion from rooftop arrays to multi-megawatt industrial microgrids and clean hydrogen generation.
            </p>
          </div>

          {/* 5-Column Grid matching Figma exactly: Phase 05 is dark sanctuary */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {EVOLUTION_PHASES.map((phase) => (
              <div
                key={phase.year}
                className={`p-5 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                  phase.isDark
                    ? 'bg-[#17231D] text-white border border-[#2B4234] shadow-elevated'
                    : 'bg-white text-[#1A1C19] border border-[#E8EAE3] shadow-card hover:shadow-elevated'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-mono font-bold uppercase tracking-wider ${phase.isDark ? 'text-brand-lime' : 'text-brand-forest'}`}>
                      {phase.phase}
                    </span>
                    <span className={`font-heading font-extrabold text-2xl ${phase.isDark ? 'text-white' : 'text-[#1A1C19]'}`}>
                      {phase.year}
                    </span>
                  </div>
                  <h3 className={`font-heading font-bold text-base leading-snug ${phase.isDark ? 'text-white' : 'text-[#1A1C19]'}`}>
                    {phase.title}
                  </h3>
                  <p className={`font-body text-xs mt-3 leading-relaxed ${phase.isDark ? 'text-[#A3B3AA]' : 'text-[#3F4942]'}`}>
                    {phase.desc}
                  </p>
                </div>
                {phase.isDark && (
                  <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-mono text-brand-lime font-bold uppercase">
                    ● Active Production Grid
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Guiding Principles Powering Every Installation ────────────────── */}
      <section className="bg-white py-20 md:py-28 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-semibold text-[#4B6D00] uppercase tracking-widest">
              INSTITUTIONAL VALUES
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1A1C19] mt-2">
              Guiding Principles Powering Every Installation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Mission Card (Light) */}
            <div className="p-8 md:p-10 rounded-3xl bg-[#F9FAF4] border border-[#E8EAE3] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-forest/10 flex items-center justify-center mb-6">
                  <Sun size={24} className="text-brand-forest" />
                </div>
                <span className="text-xs font-mono font-semibold text-[#4B6D00] uppercase tracking-wider">OUR MISSION</span>
                <h3 className="font-heading font-extrabold text-2xl text-[#1A1C19] mt-2">
                  Accessible, Reliable &amp; Sustainable Clean Energy
                </h3>
                <p className="font-body text-base text-[#3F4942] leading-relaxed mt-4">
                  Our mission is to empower individuals and communities by providing accessible, reliable, and sustainable green energy solutions right at their doorstep — reducing carbon footprints and fostering energy sovereignty.
                </p>
              </div>
            </div>

            {/* Vision Card (Dark Green Box matching Figma screenshot) */}
            <div className="p-8 md:p-10 rounded-3xl bg-[#17231D] border border-[#2B4234] text-white flex flex-col justify-between shadow-elevated">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-lime/15 border border-brand-lime/30 flex items-center justify-center mb-6">
                  <Zap size={24} className="text-brand-lime" />
                </div>
                <span className="text-xs font-mono font-semibold text-brand-lime uppercase tracking-wider">OUR VISION</span>
                <h3 className="font-heading font-extrabold text-2xl text-white mt-2">
                  Vertically Integrated EPC Excellence
                </h3>
                <p className="font-body text-base text-[#A3B3AA] leading-relaxed mt-4">
                  To establish ourselves as a vertically integrated EPC company renowned for delivering exceptional quality and excellence across all facets of our operations — from rooftop solar to utility plants and green hydrogen.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Foundation Pillars */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Tier-1 BOS Hardware', sub: 'Waaree / Adani Bifacial' },
              { label: 'Bankable Financial Engineering', sub: 'Sec 32 40% Tax Alpha' },
              { label: '48-Hour Rapid Regional O&M', sub: '13 Mobile Field Hubs' },
              { label: 'Sovereign Grid Security', sub: 'CEA Anti-Islanding Standards' },
            ].map((p) => (
              <div key={p.label} className="p-4 rounded-xl bg-[#F3F4EE] border border-[#E8EAE3] text-center">
                <div className="font-heading font-bold text-sm text-[#1A1C19]">{p.label}</div>
                <div className="text-xs font-mono text-[#4B6D00] mt-0.5">{p.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. Pioneering the Green Hydrogen Value Chain ─────────────────────── */}
      <section className="bg-[#F9FAF4] py-20 md:py-28 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-semibold text-[#4B6D00] uppercase tracking-widest">
              DECENTRALIZED R&amp;D INITIATIVE
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1C19] mt-2">
              Pioneering the Green Hydrogen Value Chain
            </h2>
            <p className="font-body text-base text-[#3F4942] mt-3">
              Integrating high-yield photovoltaics with next-generation modular electrolyzers to decarbonize heavy agrarian and industrial transport fleets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HYDROGEN_CARDS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-8 rounded-3xl bg-white border border-[#E8EAE3] shadow-card hover:shadow-elevated transition-shadow flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-forest/10 flex items-center justify-center">
                  <Icon size={22} className="text-brand-forest" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1A1C19]">{title}</h3>
                <p className="font-body text-sm text-[#3F4942] leading-relaxed">{desc}</p>
              </div>
            ))}
            {/* 6th Card: Research Facility Preview */}
            <div className="p-8 rounded-3xl bg-[#17231D] border border-[#2B4234] text-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-brand-lime font-bold uppercase">18 Ha Pilot Plant</span>
                <h3 className="font-heading font-bold text-lg text-white mt-2">Agri-PV &amp; Hydrogen Facility</h3>
                <p className="font-body text-xs text-[#A3B3AA] mt-2 leading-relaxed">
                  1,200 kg/day H₂ production with 35,000 bifacial panels co-located with climate-controlled greenhouses in Western Rajasthan.
                </p>
              </div>
              <div className="text-xs font-mono text-brand-lime font-bold pt-4 border-t border-white/10">
                Commissioning 2026 →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. Why Choose JaiKisaan Solar ────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-semibold text-[#4B6D00] uppercase tracking-widest">
              TECHNICAL STANDARDS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1C19] mt-2">
              Why Choose JaiKisaan Solar
            </h2>
            <p className="font-body text-base text-[#3F4942] mt-3">
              Engineering rigor, institutional compliance, and lifetime performance accountability across every installation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_JKS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-8 rounded-3xl bg-[#F9FAF4] border border-[#E8EAE3] shadow-card hover:shadow-elevated transition-shadow flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-forest/10 flex items-center justify-center">
                  <Icon size={22} className="text-brand-forest" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1A1C19]">{title}</h3>
                <p className="font-body text-sm text-[#3F4942] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. Founder & CEO Perspective ─────────────────────────────────────── */}
      <section className="bg-[#F9FAF4] py-20 md:py-28 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="rounded-3xl bg-white border border-[#E8EAE3] p-8 md:p-14 shadow-card">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-elevated h-96 sm:h-[460px] bg-neutral-100">
                <img
                  src={asset('/assets/images/sanjeev-kumar-portrait.jpg')}
                  alt="Sanjeev Kumar — Founder & CEO"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="font-heading font-extrabold text-xl">Sanjeev Kumar</div>
                  <div className="text-xs font-mono text-brand-lime">Founder &amp; Chief Executive Officer</div>
                  <div className="text-[11px] text-gray-300 mt-0.5">JaiKisaan Solar Pvt. Ltd. (SunScope Group)</div>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-5">
                <span className="text-xs font-mono font-semibold text-[#4B6D00] uppercase tracking-widest">
                  FOUNDER &amp; CEO&apos;S PERSPECTIVE
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#1A1C19] leading-tight">
                  &ldquo;We believe in the power of innovation, sustainability, and collaboration to create a brighter future.&rdquo;
                </h2>
                <div className="flex flex-col gap-3.5 text-sm md:text-base font-body text-[#3F4942] leading-relaxed">
                  <p>
                    At SunScope Group of Companies, our journey has been driven by a simple yet powerful vision—to bring clean energy, advanced technology, and financial empowerment to businesses and communities worldwide.
                  </p>
                  <p>
                    Delivering quality with the highest professional standards is at the core of everything we do. We are committed to excellence in every aspect of our operations—from design and execution to service delivery and stakeholder engagement.
                  </p>
                  <p>
                    Success is not just about financial growth; it is about creating a positive impact on people and the planet. Through our non-profit &ldquo;Nation First,&rdquo; we provide solar power to rural areas, smart solutions for farmers, and healthcare support through telemedicine to make a meaningful difference in the regions we serve.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E8EAE3]">
                  <div className="font-heading font-bold text-[#1A1C19] italic">— Sanjeev Kumar</div>
                  <div className="font-body text-xs text-[#3F4942] mt-0.5">Group CEO, SunScope Group of Companies</div>
                </div>

                {/* Video embed */}
                <div className="rounded-2xl overflow-hidden bg-black shadow-elevated mt-2">
                  <div className="relative aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/Ij_OQRmgdpE?rel=0"
                      title="Sanjeev Kumar - Leadership Message"
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* CTA links */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="https://youtu.be/Ij_OQRmgdpE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-heading font-semibold text-brand-forest hover:underline"
                  >
                    ▶ Watch Video Message
                  </a>
                  <Link
                    to="/founder"
                    className="text-xs font-heading font-semibold text-brand-forest hover:underline"
                  >
                    Read Full Founder's Message →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. Executive Leadership Team ─────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-semibold text-[#4B6D00] uppercase tracking-widest">
              MANAGEMENT TEAM
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1A1C19] mt-2">
              Executive Leadership Driving Operational Excellence
            </h2>
            <p className="font-body text-base text-[#3F4942] mt-3">
              Experienced leaders from utility power, power electronics, chemical engineering, and regulatory affairs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP.map((leader) => (
              <div
                key={leader.name}
                className="flex flex-col rounded-3xl overflow-hidden bg-[#F9FAF4] border border-[#E8EAE3] shadow-card hover:shadow-elevated transition-shadow group"
              >
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={asset(leader.image)}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col gap-2 flex-1">
                  <h3 className="font-heading font-bold text-base text-[#1A1C19]">{leader.name}</h3>
                  <div className="text-xs font-mono font-semibold text-brand-forest uppercase tracking-wider">{leader.role}</div>
                  <p className="font-body text-xs text-[#3F4942] leading-relaxed mt-1 flex-1">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. Empanelled & Certified Authorities (8 Cards matching Image 9) ─── */}
      <section className="bg-[#F9FAF4] py-20 md:py-28 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-semibold text-[#4B6D00] uppercase tracking-widest">
              SOVEREIGN COMPLIANCE
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1A1C19] mt-2">
              Empanelled &amp; Certified by India&apos;s Premier Energy Authorities
            </h2>
            <p className="font-body text-base text-[#3F4942] mt-3">
              Full institutional compliance with central and state energy mandates, guaranteeing uncompromised grid security.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col gap-2 p-6 rounded-3xl bg-white border border-[#E8EAE3] text-center items-center justify-center shadow-card hover:shadow-elevated transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-forest/10 flex items-center justify-center mb-1">
                  <Award size={22} className="text-brand-forest" />
                </div>
                <div className="font-heading font-bold text-base text-[#1A1C19]">{cert.name}</div>
                <div className="font-body text-xs text-[#3F4942] leading-relaxed">{cert.code}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 10. CTA Band (Matching Figma Frame 2 bottom exact design) ────────── */}
      <section className="bg-[#17231D] py-16 md:py-28 relative overflow-hidden">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="rounded-3xl bg-[#1E2D26] border border-[#2B4234] p-6 sm:p-8 md:p-14 relative overflow-hidden shadow-elevated">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-lime/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 flex flex-col gap-4">
                <span className="text-xs font-mono font-semibold text-brand-lime uppercase tracking-widest">
                  IMMEDIATE FEASIBILITY CONSULTATION
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
                  Ready to Transform Your Energy Infrastructure?
                </h2>
                <p className="font-body text-sm md:text-base text-[#A3B3AA] leading-relaxed max-w-2xl">
                  Speak directly with our senior solar engineers. Get custom aerial yield simulations, net-metering ROI audits, and full subsidy assistance within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-3 text-xs font-mono text-[#A3B3AA]">
                  <a href="tel:+917239992778" className="text-brand-lime hover:underline font-semibold">
                    📞 +91 72399 92778
                  </a>
                  <span>✉️ info@jaikisaansolar.com</span>
                  <span>📍 S.P. Tower, Jaipur HQ</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                <a
                  href="https://wa.me/917239992778"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-brand-lime hover:bg-brand-limeHover text-[#17231D] font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-glow-lime w-full"
                >
                  <MessageCircle size={15} />
                  WhatsApp Quick Assessment
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-brand-forest hover:bg-brand-forestLight text-white font-heading font-semibold text-xs uppercase tracking-wider transition-colors border border-brand-forest w-full"
                >
                  Get a Free Solar Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
