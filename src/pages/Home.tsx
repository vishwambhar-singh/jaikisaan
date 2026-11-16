import React, { useState } from 'react';
import { 
  ArrowRight, MessageCircle, Zap, Sun, TrendingUp, Shield, Award, CheckCircle, 
  ChevronRight, Leaf, Phone, Mail, MapPin, Star, Building2, Battery, Cpu 
} from 'lucide-react';

// ─── Section 01: Hero Section (Matching Node 64:91) ───────────────────────────
const HeroSection: React.FC = () => (
  <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#17231D] pt-24 pb-16">
    {/* High-quality 2.5K solar array background photo with spatial gradients */}
    <div className="absolute inset-0 z-0 overflow-hidden">
      <img
        src="/assets/images/hero_solar_panels_dusk.jpg"
        alt="High-resolution utility-scale solar panel farm"
        className="w-full h-full object-cover opacity-50 scale-100 transform motion-safe:transition-transform motion-safe:duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#17231D] via-[#17231D]/80 to-[#17231D]/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#17231D] via-transparent to-black/30" />
    </div>

    <div className="relative z-10 max-w-[1248px] mx-auto px-4 sm:px-6 w-full">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
          {/* Eyebrow badge */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-wider sm:tracking-widest text-brand-lime uppercase bg-brand-lime/10 border border-brand-lime/25 px-2.5 sm:px-3 py-1 rounded-full leading-snug">
              ENGINEERED FOR INDIA&apos;S AGRICULTURAL &amp; INDUSTRIAL BACKBONE
            </span>
          </div>

          {/* Headline matching Figma exact font and leading */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[3.85rem] leading-[1.1] sm:leading-[1.08] text-white tracking-tight">
            Powering Today.<br />
            <span className="text-brand-lime">Sustaining Tomorrow.</span>
          </h1>

          {/* Subhead */}
          <p className="font-body text-sm sm:text-base md:text-lg text-[#A3B3AA] leading-relaxed max-w-xl">
            Delivering utility-scale solar EPC, decentralized agricultural pumping, and heavy industrial microgrids across India. Built for extreme heat, verified generation, and uncompromised grid security.
          </p>

          {/* CTAs matching Figma exact styles */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            <a
              href="#feasibility"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-brand-lime hover:bg-brand-limeHover text-[#17231D] font-heading font-bold text-xs sm:text-sm tracking-wide transition-all shadow-glow-lime text-center"
            >
              Request Feasibility <ArrowRight size={16} />
            </a>
            <a
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-transparent hover:bg-white/8 text-white font-heading font-semibold text-xs sm:text-sm tracking-wide transition-colors border border-white/20 text-center"
            >
              Explore Specifications
            </a>
          </div>

          {/* Telemetry quick metrics strip */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-4 border-t border-white/10 max-w-lg">
            <div>
              <div className="font-heading font-bold text-xl sm:text-2xl text-white">50 MW+</div>
              <div className="text-[9px] sm:text-[11px] font-mono text-[#A3B3AA] uppercase mt-0.5 leading-tight">Installed Capacity</div>
            </div>
            <div>
              <div className="font-heading font-bold text-xl sm:text-2xl text-brand-lime">1,420+</div>
              <div className="text-[9px] sm:text-[11px] font-mono text-[#A3B3AA] uppercase mt-0.5 leading-tight">Projects Delivered</div>
            </div>
            <div>
              <div className="font-heading font-bold text-xl sm:text-2xl text-white">₹18 Cr+</div>
              <div className="text-[9px] sm:text-[11px] font-mono text-[#A3B3AA] uppercase mt-0.5 leading-tight">Monthly Savings</div>
            </div>
          </div>
        </div>

        {/* Right Column: Floating SCADA Telemetry Widget (5 cols) matching Figma */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-[420px] rounded-2xl p-4 sm:p-6 bg-[#1A2820]/95 backdrop-blur-md border border-[#2B4234] shadow-elevated relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-lime/10 rounded-full blur-2xl pointer-events-none" />
            
            {/* Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-white uppercase tracking-wider">
                  LIVE SCADA TELEMETRY
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono text-brand-lime px-2 py-0.5 rounded bg-brand-lime/10 border border-brand-lime/25">
                Jodhpur Hub 500 kWp
              </span>
            </div>

            {/* Peak generation display */}
            <div className="flex items-baseline gap-2 mb-3">
              <span className="font-heading font-extrabold text-4xl sm:text-5xl text-brand-lime">480</span>
              <span className="font-heading font-semibold text-xl sm:text-2xl text-white">kW</span>
              <span className="text-[11px] sm:text-xs font-mono text-[#A3B3AA] ml-auto">Real-Time Output</span>
            </div>

            {/* SVG Generation Waveform Curve */}
            <div className="relative h-20 mb-4 bg-black/25 rounded-xl p-2 flex items-end overflow-hidden border border-white/8">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="scadaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#C5F176" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#C5F176" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,36 Q15,32 25,22 T50,6 T75,18 T100,32 L100,40 L0,40 Z"
                  fill="url(#scadaGrad)"
                />
                <path
                  d="M0,36 Q15,32 25,22 T50,6 T75,18 T100,32"
                  fill="none"
                  stroke="#C5F176"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* 4 Telemetry Metrics */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <div className="flex flex-col p-2.5 rounded-xl bg-white/5 border border-white/8">
                <span className="text-[10px] font-mono text-[#A3B3AA] uppercase">Active Grid Export</span>
                <span className="font-heading font-bold text-sm text-brand-lime">412 kW Inverter</span>
              </div>
              <div className="flex flex-col p-2.5 rounded-xl bg-white/5 border border-white/8">
                <span className="text-[10px] font-mono text-[#A3B3AA] uppercase">Grid Sync Efficiency</span>
                <span className="font-heading font-bold text-sm text-white">98.4% Sync</span>
              </div>
              <div className="flex flex-col p-2.5 rounded-xl bg-white/5 border border-white/8">
                <span className="text-[10px] font-mono text-[#A3B3AA] uppercase">Daily Generation</span>
                <span className="font-heading font-bold text-sm text-brand-lime">2,410 kWh Yield</span>
              </div>
              <div className="flex flex-col p-2.5 rounded-xl bg-white/5 border border-white/8">
                <span className="text-[10px] font-mono text-[#A3B3AA] uppercase">Carbon Offset</span>
                <span className="font-heading font-bold text-sm text-white">1.8t CO₂ Mitigated</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#A3B3AA]">
              <span>DISCOM: JVVNL / RRECL</span>
              <span className="text-brand-lime font-medium">● 50.02 Hz Stable</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Section 02: About Jai Kisaan (Meet Pure Energy) ─────────────────────────
const AboutSection: React.FC = () => (
  <section className="bg-[#F9FAF4] py-20 md:py-28 border-b border-[#E8EAE3]">
    <div className="max-w-[1248px] mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Image with embedded stats */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="relative rounded-3xl overflow-hidden shadow-card border border-[#E8EAE3] h-80 sm:h-96">
            <img
              src="/assets/images/eb57feb6758b7ceae7f59bfdbdb688bdafb6b005.jpg"
              alt="JaiKisaan Solar modern commercial installation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[11px] font-mono uppercase bg-brand-forest text-brand-lime px-2.5 py-1 rounded-full font-semibold">
                Sovereign Solar EPC
              </span>
              <div className="font-heading font-bold text-lg mt-2">
                Decarbonizing Bharat&apos;s Agrarian &amp; Industrial Heartlands
              </div>
            </div>
          </div>

          {/* Two big metric callouts matching Figma screenshot */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#F3F4EE] border border-[#E8EAE3]">
              <div className="font-heading font-extrabold text-3xl text-brand-forest">100%</div>
              <div className="font-heading font-semibold text-sm text-[#1A1C19] mt-1">Turnkey Delivery</div>
              <p className="font-body text-xs text-[#3F4942] mt-0.5">DPR to DISCOM net-metering synchronization.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F3F4EE] border border-[#E8EAE3]">
              <div className="font-heading font-extrabold text-3xl text-brand-forest">25+ Yrs</div>
              <div className="font-heading font-semibold text-sm text-[#1A1C19] mt-1">Performance Warranty</div>
              <p className="font-body text-xs text-[#3F4942] mt-0.5">Tier-1 bifacial panels with linear guarantee.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Copy & Core Pillars */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div>
            <span className="text-xs font-mono font-semibold text-[#4B6D00] uppercase tracking-widest">
              MORE THAN ENERGY
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1C19] mt-2 leading-tight">
              A Commitment to Tomorrow.
            </h2>
          </div>
          <p className="font-body text-base text-[#3F4942] leading-relaxed">
            JaiKisaan Solar (JKS) is an engineering powerhouse committed to sovereign energy resilience for North India&apos;s agricultural, commercial cold chain, and industrial sectors. We build infrastructure that eliminates diesel reliance and protects margins against volatile power tariffs.
          </p>

          <div className="flex flex-col gap-3.5 pt-2">
            {[
              { title: '100% Empanelled & Certified', desc: 'Active empanelments with MNRE, UPNEDA, and RRECL for direct state and central subsidy settlement.' },
              { title: 'Tier-1 DCR Hardware Exclusively', desc: 'Exclusively Tier-1 Waaree & Adani bifacial Mono-PERC modules with heavy hot-dip galvanized mounting structures.' },
              { title: 'End-to-End Turnkey Execution', desc: 'Complete project lifecycle managed in-house — engineering DPR, CEIG clearances, DISCOM net-metering, and grid synchronization.' },
              { title: 'SunScope Group Lineage', desc: 'Backed by the engineering pedigree and capital strength of SunScope Group, accelerating India’s clean energy sovereign future.' },
            ].map((pillar) => (
              <div key={pillar.title} className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-[#E8EAE3]">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-forest/10 flex items-center justify-center mt-0.5">
                  <CheckCircle size={14} className="text-brand-forest" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm text-[#1A1C19]">{pillar.title}</h4>
                  <p className="font-body text-xs text-[#3F4942] mt-0.5 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="/about"
              className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-brand-forest hover:text-brand-forestLight transition-colors"
            >
              Explore our company heritage &amp; leadership <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Section 03: Core Solutions (4 Full-Width Alternating Zig-Zag Cards) ─────
const SOLUTIONS_CARDS = [
  {
    num: '01',
    eyebrow: 'PM SURYA GHAR & RESIDENTIAL',
    title: 'Residential Rooftop Solar',
    desc: 'High-efficiency on-grid net-metered rooftop solar systems engineered for independent villas, residential societies, and urban housing complexes. Maximizes self-consumption, captures up to ₹78,000 in Central DBT subsidies, and reduces monthly grid bills by up to 90%.',
    bullets: ['Up to ₹78,000 Central DBT Subsidy', '1:1 Net-Metering Banking with State DISCOMs', 'Waaree / Adani Bifacial Panels', '25-Year Linear Output Guarantee'],
    image: '/assets/images/9232e3c12d228af8636d84a34e8fdea09b42a4b1.jpg',
    tag: 'Payback: 3.2 – 3.8 Yrs',
  },
  {
    num: '02',
    eyebrow: 'COMMERCIAL & INDUSTRIAL',
    title: 'Commercial & Industrial Solar',
    desc: 'High-yield rooftop and captive solar arrays purpose-engineered for commercial cold storages, textile mills, manufacturing plants, and educational campuses. Structured for Section 32 40% accelerated depreciation, slashing high daytime peak tariffs.',
    bullets: ['100 kWp to 10 MWp System Sizing', 'Section 32 40% Accelerated Tax Depreciation', 'High-Surge Ammonia Load Management', 'CEIG & HT Interconnection Clearances'],
    image: '/assets/images/709f7acc5449a720085baaeae6b5d101de5ffa01.jpg',
    tag: 'Payback: 2.8 – 3.4 Yrs',
  },
  {
    num: '03',
    eyebrow: 'HIGH-VOLTAGE TRANSMISSION & OPEN ACCESS',
    title: 'Utility-Scale Solar EPC',
    desc: 'Ground-mount megawatt solar power plants engineered for captive open access, group captive wheeling, and high-voltage grid substation evacuation across Rajasthan, UP, and Gujarat. Fully bankable DPR documentation with guaranteed performance ratios.',
    bullets: ['33kV / 132kV Substation Interconnection', 'Group Captive & Third-Party Wheeling', 'Turnkey Land Acquisition & Fencing', 'P50/P90 Generation Modeling & 25-Yr O&M'],
    image: '/assets/images/86f4a949d08f6296a12f8e095d8f906c5f5481b1.jpg',
    tag: 'Project IRR: 21%+',
  },
  {
    num: '04',
    eyebrow: 'MICROGRIDS & BESS INTEGRATION',
    title: 'EV Charging & Smart Microgrids',
    desc: 'Bespoke solar canopy architectures integrated with dynamic fast EV chargers, Lithium-Iron-Phosphate (LFP) Battery Energy Storage Systems (BESS), and intelligent peak-shaving controllers for fleet operators, transit corridors, and green logistics hubs.',
    bullets: ['Solar Canopy & Highway Corridor EPC', 'Behind-the-Meter BESS Battery Buffer', 'Peak Demand Charge Mitigation', 'Cloud SCADA Telemetry & Billing Integration'],
    image: '/assets/images/6ccdbd44a5f0faac8c8df2e0e92602d653ab6e54.jpg',
    tag: 'Uptime: 99.8% Guarantee',
  },
];

const SolutionsSection: React.FC = () => (
  <section className="bg-[#F9FAF4] py-20 md:py-28 border-b border-[#E8EAE3]">
    <div className="max-w-[1248px] mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="text-xs font-mono font-semibold text-[#4B6D00] uppercase tracking-widest">
            ENGINEERING TRACKS
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1C19] mt-2">
            Powering every Possibility.
          </h2>
        </div>
        <a
          href="/solutions"
          className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-brand-forest hover:text-brand-forestLight transition-colors"
        >
          View all technical specifications <ArrowRight size={15} />
        </a>
      </div>

      {/* 4 Alternating Horizontal Cards matching Figma exact design */}
      <div className="flex flex-col gap-10">
        {SOLUTIONS_CARDS.map((item, idx) => {
          const isReversed = idx % 2 === 1;
          return (
            <div
              key={item.title}
              className="rounded-3xl bg-white border border-[#E8EAE3] shadow-card overflow-hidden hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="grid lg:grid-cols-12 items-center">
                {/* Image Column (5 cols) */}
                <div className={`lg:col-span-5 h-72 sm:h-80 lg:h-full relative overflow-hidden ${isReversed ? 'lg:order-2' : ''}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#17231D]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-brand-lime">
                    {item.num} · {item.tag}
                  </div>
                </div>

                {/* Content Column (7 cols) */}
                <div className={`lg:col-span-7 p-8 md:p-12 flex flex-col gap-4 ${isReversed ? 'lg:order-1' : ''}`}>
                  <span className="text-[11px] font-mono font-semibold text-[#4B6D00] uppercase tracking-wider">
                    {item.eyebrow}
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1A1C19]">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm md:text-base text-[#3F4942] leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bullet Chips */}
                  <div className="grid sm:grid-cols-2 gap-2.5 pt-2">
                    {item.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-center gap-2 text-xs font-body font-medium text-[#1A1C19] bg-[#F3F4EE] px-3 py-2 rounded-xl">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-forest flex-shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#E8EAE3] flex items-center justify-between">
                    <a
                      href="/solutions"
                      className="inline-flex items-center gap-2 font-heading font-semibold text-xs uppercase tracking-wider text-brand-forest hover:text-brand-forestLight transition-colors"
                    >
                      Explore Specifications <ArrowRight size={14} />
                    </a>
                    <a
                      href="#feasibility"
                      className="text-xs font-body font-semibold text-[#3F4942] hover:text-brand-forest"
                    >
                      Book Feasibility Survey →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// ─── Section 05: Why Choose Us (Dark Spatial Sanctuary) ───────────────────────
const WHY_US_CARDS = [
  {
    title: 'End-to-End Solar Solutions',
    desc: 'Turnkey EPC delivering feasibility audit, 3D shadow analysis, DPR engineering, DISCOM liaison, procurement, and synchronisation under one sovereign roof.',
  },
  {
    title: 'Tier-1 Module Technology',
    desc: 'Strict procurement protocol using exclusively Waaree, Adani, and Vikram Solar Mono-PERC bifacial panels with certified Indian DCR compliance.',
  },
  {
    title: 'Uncompromising Quality & Safety',
    desc: 'Hot-dip galvanised structural framing (min 80 microns) tested to withstand 160 km/h wind shear, paired with IP65-rated string inverters.',
  },
  {
    title: 'Turnkey Delivery & Strict SLA',
    desc: 'Streamlined 45-day execution guarantee from DPR approval to meter testing with dedicated district liaison officers stationed in all operational zones.',
  },
  {
    title: 'Transparent Consultative Model',
    desc: 'Bankable financial DPR reports with verified P50/P90 generation modeling, Accelerated Depreciation computations, and transparent bill of materials.',
  },
  {
    title: '25-Year Warranty & O&M',
    desc: 'Real-time IoT cloud SCADA monitoring with automated anomaly alerts and 48-hour rapid dispatch field engineering cells throughout UP and Rajasthan.',
  },
];

const WhyChooseUsSection: React.FC = () => (
  <section className="bg-[#17231D] py-20 md:py-28 relative overflow-hidden">
    <div className="max-w-[1248px] mx-auto px-6 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono font-semibold text-brand-lime uppercase tracking-widest">
          STANDARDS &amp; CREDENTIALS
        </span>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mt-2">
          Built on Trust. Powered by Innovation.
        </h2>
        <p className="font-body text-base text-[#A3B3AA] mt-3">
          Every component, weld, inverter, and interconnection is engineered to outlast the harshest ambient extremes of North India.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {WHY_US_CARDS.map((card, idx) => (
          <div
            key={card.title}
            className="p-8 rounded-2xl bg-[#1E2D26] border border-[#2B4234] hover:border-brand-lime/40 transition-colors duration-300 flex flex-col gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-lime/10 border border-brand-lime/25 flex items-center justify-center text-brand-lime font-mono font-bold text-sm">
              0{idx + 1}
            </div>
            <h3 className="font-heading font-bold text-lg text-white">{card.title}</h3>
            <p className="font-body text-sm text-[#A3B3AA] leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Section 06: Project Showcase (Asymmetric Masonry: 1 Tall + 2 Stacked) ────
const ProjectShowcaseSection: React.FC = () => {
  const [filter, setFilter] = useState('All');

  return (
    <section className="bg-[#F9FAF4] py-20 md:py-28 border-b border-[#E8EAE3]">
      <div className="max-w-[1248px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-semibold text-[#4B6D00] uppercase tracking-widest">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1A1C19] mt-2">
              Real Projects. Meaningful Impact.
            </h2>
          </div>

          {/* Filter Pills matching Figma */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            {['All', 'Commercial Cold Storage', 'Farm Pumps', 'Industrial'].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-4 py-2 rounded-xl text-xs font-heading font-semibold transition-colors whitespace-nowrap flex-shrink-0 ${
                  filter === item
                    ? 'bg-brand-forest text-white'
                    : 'bg-white text-[#3F4942] border border-[#E8EAE3] hover:border-brand-forest'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Masonry matching Figma screenshot: 1 Tall Card on Left, 2 Stacked Cards on Right */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: 1 Tall Flagship Card (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-white border border-[#E8EAE3] shadow-card hover:shadow-elevated transition-shadow flex flex-col group">
            <div className="h-80 sm:h-96 lg:h-[460px] relative overflow-hidden">
              <img
                src="/assets/images/91fff17c130fbfe7684a3e0e7fe83e3d5ca439c3.jpg"
                alt="SunScope Agro-Park 50 MWp"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-5 left-5 bg-brand-forest text-brand-lime text-xs font-mono font-bold px-3 py-1 rounded-full">
                50 MWp Utility Ground-Mount
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-mono text-brand-lime uppercase">Sardarshahar, Churu, Rajasthan</span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl mt-1">SunScope Agro-Park</h3>
                <p className="font-body text-xs sm:text-sm text-gray-200 mt-2 line-clamp-2">
                  50 MWp ground-mount bifacial solar park evacuating directly into JVVNL 132kV grid substation, powering 1,200+ agricultural pumping stations across arid Rajasthan.
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-4 pt-3 border-t border-white/20 text-xs font-mono">
                  <span>DISCOM: JVVNL</span>
                  <span>•</span>
                  <span>481,000 MWh Lifetime</span>
                  <span>•</span>
                  <a href="/projects" className="text-brand-lime font-bold hover:underline ml-auto">
                    View Project Dossier →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Stacked Project Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Top Card: Commercial Cold Storage */}
            <div className="rounded-3xl overflow-hidden bg-white border border-[#E8EAE3] shadow-card hover:shadow-elevated transition-shadow flex flex-col group flex-1">
              <div className="h-48 sm:h-56 relative overflow-hidden">
                <img
                  src="/assets/images/aa80d82cedafbd1508c328b9e5f2754a3eb14919.jpg"
                  alt="Commercial Cold Storage Complex 120 kWp"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-[#17231D]/90 text-brand-lime text-[11px] font-mono font-bold px-2.5 py-1 rounded-full">
                  120 kWp Cold Storage
                </div>
              </div>
              <div className="p-6 flex flex-col gap-2 flex-1 justify-between">
                <div>
                  <span className="text-[11px] font-mono text-[#4B6D00] uppercase">Jaipur, Rajasthan · Vikas Cold Storage</span>
                  <h4 className="font-heading font-bold text-lg text-[#1A1C19] mt-0.5">
                    Commercial Cold Storage Complex 120 kWp
                  </h4>
                  <p className="font-body text-xs text-[#3F4942] mt-1">
                    Mitigating ammonia compressor peak charges; slashed monthly grid bill from ₹3.8L to ₹1.2L with 68% savings.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E8EAE3] flex items-center justify-between text-xs font-mono">
                  <span className="text-brand-forest font-semibold">68% Bill Cut</span>
                  <a href="/projects/vikas-cold-storage" className="text-brand-forest font-bold hover:underline">
                    Read Case Study →
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Card: EcoHeights Luxury Township */}
            <div className="rounded-3xl overflow-hidden bg-white border border-[#E8EAE3] shadow-card hover:shadow-elevated transition-shadow flex flex-col group flex-1">
              <div className="h-48 sm:h-56 relative overflow-hidden">
                <img
                  src="/assets/images/9232e3c12d228af8636d84a34e8fdea09b42a4b1.jpg"
                  alt="EcoHeights Luxury Township 85 kWp"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-[#17231D]/90 text-brand-lime text-[11px] font-mono font-bold px-2.5 py-1 rounded-full">
                  85 kWp Net-Metered
                </div>
              </div>
              <div className="p-6 flex flex-col gap-2 flex-1 justify-between">
                <div>
                  <span className="text-[11px] font-mono text-[#4B6D00] uppercase">Jaipur, Rajasthan · Residential Rooftop</span>
                  <h4 className="font-heading font-bold text-lg text-[#1A1C19] mt-0.5">
                    EcoHeights Luxury Township 85 kWp
                  </h4>
                  <p className="font-body text-xs text-[#3F4942] mt-1">
                    Multi-building residential community capturing PM Surya Ghar benefits with centralized SCADA monitoring.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E8EAE3] flex items-center justify-between text-xs font-mono">
                  <span className="text-brand-forest font-semibold">₹1.4L / mo Saved</span>
                  <a href="/projects" className="text-brand-forest font-bold hover:underline">
                    View Blueprint →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Section 07: Sustainability Impact & Telemetry ────────────────────────────
const SustainabilitySection: React.FC = () => (
  <section className="bg-[#17231D] py-20 md:py-28 relative overflow-hidden">
    <div className="max-w-[1248px] mx-auto px-6 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono font-semibold text-brand-lime uppercase tracking-widest">
          ECOLOGICAL METRICS
        </span>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mt-2">
          Every Panel Makes a Difference.
        </h2>
        <p className="font-body text-base text-[#A3B3AA] mt-3">
          Our distributed solar installations generate quantifiable economic wealth and clean environmental sovereignty.
        </p>
      </div>

      {/* 4 Big Metrics in a Row matching Figma Frame 1 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { metric: '520+', label: 'MWp Solar Assets Engineered', sub: 'Across 4 States' },
          { metric: '780+', label: 'Commercial & Cold Storage Sites', sub: 'Active Facilities' },
          { metric: '640k+', label: 'Tonnes CO₂ Mitigated Annually', sub: 'Audited P50' },
          { metric: '₹18Cr', label: 'Monthly Power Savings Delivered', sub: 'Client Retained Alpha' },
        ].map((item) => (
          <div
            key={item.metric}
            className="p-8 rounded-2xl bg-[#1E2D26] border border-[#2B4234] text-center"
          >
            <div className="font-heading font-extrabold text-4xl lg:text-5xl text-brand-lime">
              {item.metric}
            </div>
            <div className="font-heading font-semibold text-sm text-white mt-2">{item.label}</div>
            <div className="text-[11px] font-mono text-[#A3B3AA] mt-1">{item.sub}</div>
          </div>
        ))}
      </div>

      {/* Ecological Equivalence Telemetry Bar */}
      <div className="rounded-2xl p-6 bg-[#1A2820] border border-[#2B4234] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-brand-lime animate-pulse" />
          <span className="font-heading font-bold text-sm text-white uppercase tracking-wider">
            Ecological Equivalence Telemetry:
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#A3B3AA]">
          <span className="text-white">🌳 4.2M Trees Planted Equivalent</span>
          <span>•</span>
          <span className="text-white">🛢️ 820k Barrels Diesel Avoided</span>
          <span>•</span>
          <span className="text-white">💧 14.8M Litres Groundwater Conserved</span>
        </div>
      </div>
    </div>
  </section>
);

// ─── Section 08: CEO's Corner — "Vision Beyond Energy" ────────────────────────
const CEOSection: React.FC = () => (
  <section className="bg-[#F9FAF4] py-20 md:py-28 border-b border-[#E8EAE3]">
    <div className="max-w-[1248px] mx-auto px-6">
      <div className="rounded-3xl bg-white border border-[#E8EAE3] p-8 md:p-14 shadow-card">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated h-96 sm:h-[440px]">
              <img
                src="/assets/images/a6038c0baabb8acaa28c36ba0b8fed83d553aaea.jpg"
                alt="Sanjeev Kumar — Founder & CEO"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="font-heading font-extrabold text-xl">Sanjeev Kumar</div>
                <div className="text-xs font-mono text-brand-lime">Founder &amp; Group CEO</div>
                <div className="text-[11px] text-gray-300 mt-0.5">JaiKisaan Solar (A SunScope Group Company)</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono uppercase bg-[#F3F4EE] text-[#1A1C19] px-3 py-1.5 rounded-lg border border-[#E8EAE3] font-semibold">
                ESG Governance Verified
              </span>
              <span className="text-[11px] font-mono uppercase bg-brand-forest/10 text-brand-forest px-3 py-1.5 rounded-lg font-semibold">
                SunScope Group Executive
              </span>
            </div>
          </div>

          {/* Right Column: Signed Editorial Letter */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <span className="text-xs font-mono font-semibold text-[#4B6D00] uppercase tracking-widest">
              VISION &amp; MISSION STATEMENT
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#1A1C19] leading-tight">
              &ldquo;Accelerating India&apos;s Decarbonization: How Distributed Solar and Intelligent Grids are Redefining Sovereign Energy Resilience.&rdquo;
            </h2>
            <div className="flex flex-col gap-3.5 text-sm md:text-base font-body text-[#3F4942] leading-relaxed">
              <p>
                Energy independence is not an abstract ecological theory; it is the fundamental economic bedrock of India&apos;s next industrial chapter. By combining high-yield photovoltaics with distributed microgrid storage, we give our farmers, factory heads, and developers absolute sovereignty over their power costs.
              </p>
              <p>
                From replacing noisy diesel gensets on rural farms in Barabanki to engineering 120 kWp captive microgrids for cold chain logistics in Jaipur, JaiKisaan Solar delivers institutional rigor, bankable warranties, and zero-compromise engineering execution.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E8EAE3] flex items-center justify-between">
              <div>
                <div className="font-heading font-bold text-sm text-[#1A1C19]">Sanjeev Kumar</div>
                <div className="text-xs font-body text-[#3F4942]">Founder &amp; Chief Executive Officer</div>
              </div>
              <a
                href="/about"
                className="text-xs font-heading font-semibold text-brand-forest hover:underline"
              >
                Read full leadership letter →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Section 09: Solar Insights & Knowledge (3 Whitepaper Cards) ──────────────
const WHITEPAPERS = [
  {
    tag: 'POLICY & SUBSIDY',
    date: 'Updated Jan 2025',
    title: 'National Rooftop Solar Subsidies 2025: Eligibility & Application Roadmap',
    desc: 'A step-by-step regulatory walkthrough explaining direct benefit transfer (DBT), PM Surya Ghar state portal compliance, and DISCOM meter testing timelines.',
    image: '/assets/images/b245012ab6275fcf193594590a5bfdb579881d07.jpg',
  },
  {
    tag: 'FINANCIAL MODELING',
    date: 'Updated Jan 2025',
    title: 'C&I Solar Payback Calculator: Modeling OPEX vs CAPEX for Heavy Industry',
    desc: 'Comparing internal rate of return, tax depreciation offsets, and open-access tariff structures for cold chains and manufacturing complexes.',
    image: '/assets/images/041b0b41d4ba4d7cdb31074d9ef7d96101bca018.jpg',
  },
  {
    tag: 'ENGINEERING',
    date: 'Updated Jan 2025',
    title: 'Battery Storage & Smart Inverters: Mitigating Peak Demand Charges',
    desc: 'How behind-the-meter battery energy storage systems (BESS) stabilise fluctuating loads, shave Time-of-Day penalties, and eliminate diesel generator reliance.',
    image: '/assets/images/4bb4436fda7c0f69c46e53acc7f3be717b2b1624.jpg',
  },
];

const InsightsSection: React.FC = () => (
  <section className="bg-[#F9FAF4] py-20 md:py-28 border-b border-[#E8EAE3]">
    <div className="max-w-[1248px] mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="text-xs font-mono font-semibold text-[#4B6D00] uppercase tracking-widest">
            RESEARCH &amp; INSIGHTS
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1A1C19] mt-2">
            Knowledge That Powers Change.
          </h2>
          <p className="font-body text-sm text-[#3F4942] mt-2 max-w-xl">
            Actionable technical briefs, regulatory subsidies deep-dives, and financial playbooks curated by SunScope solar engineers.
          </p>
        </div>
        <a
          href="/blog"
          className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-brand-forest hover:text-brand-forestLight transition-colors"
        >
          View all technical publications <ArrowRight size={15} />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {WHITEPAPERS.map((wp) => (
          <div
            key={wp.title}
            className="rounded-3xl bg-white border border-[#E8EAE3] shadow-card hover:shadow-elevated transition-shadow flex flex-col overflow-hidden group"
          >
            <div className="h-52 overflow-hidden relative">
              <img
                src={wp.image}
                alt={wp.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#17231D]/90 text-brand-lime text-[10px] font-mono font-bold px-2.5 py-1 rounded-full">
                {wp.tag}
              </div>
            </div>
            <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#7C8F83]">{wp.date}</span>
                <h3 className="font-heading font-bold text-base text-[#1A1C19] mt-1 leading-snug group-hover:text-brand-forest transition-colors">
                  {wp.title}
                </h3>
                <p className="font-body text-xs text-[#3F4942] leading-relaxed mt-2">
                  {wp.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-[#E8EAE3]">
                <a
                  href="/blog"
                  className="font-heading font-bold text-xs uppercase tracking-wider text-brand-forest hover:text-brand-forestLight transition-colors flex items-center gap-1"
                >
                  READ WHITEPAPER ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Section 10: Customer Testimonials (Matching Image 9) ─────────────────────
const TESTIMONIALS = [
  {
    name: 'Mr. Vikas Data',
    role: 'Managing Director, Vikas Cold Storage',
    location: 'Jaipur, Rajasthan',
    rating: 5,
    quote: 'JaiKisaan Solar engineered a 120 kWp bifacial array directly over our 2,500 MT potato cold store. Our monthly electricity bill dropped from ₹3.8 Lakh to ₹1.2 Lakh. Zero disruption to ammonia compressors, and seamless JVVNL net metering.',
  },
  {
    name: 'Rameshwar Chaudhary',
    role: 'Lead Farmer & Agro-Cooperative Secretary',
    location: 'Barabanki, Uttar Pradesh',
    rating: 5,
    quote: 'Under PM-KUSUM, JaiKisaan Solar installed 12 solar submersible pumps for our cooperative. We eliminated ₹4.5 Lakh in yearly diesel fuel expenses. Even on cloudy monsoon days, the high-discharge flow never stops.',
  },
  {
    name: 'Vikramjit Rathore',
    role: 'Operations Director, Rajputana Warehousing',
    location: 'Jodhpur, Rajasthan',
    rating: 5,
    quote: 'Our 200 kWp microgrid was commissioned in just 38 days. The SCADA telemetry lets us verify real-time solar generation down to each individual inverter string from our office headquarters.',
  },
];

const TestimonialsSection: React.FC = () => (
  <section className="bg-[#F9FAF4] py-20 md:py-28 border-b border-[#E8EAE3]">
    <div className="max-w-[1248px] mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono font-semibold text-[#4B6D00] uppercase tracking-widest">
          CLIENT CONFIDENCE
        </span>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1C19] mt-2">
          Trusted to Power a Better Tomorrow.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className="p-8 rounded-3xl bg-white border border-[#E8EAE3] shadow-card hover:shadow-elevated transition-shadow flex flex-col justify-between gap-6"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#1A1C19] uppercase tracking-wider">Testimonial</span>
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="font-body text-sm text-[#3F4942] italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-[#E8EAE3] flex items-center justify-between">
              <div>
                <div className="font-heading font-bold text-sm text-[#1A1C19]">{t.name}</div>
                <div className="text-xs font-body text-[#3F4942]">{t.role}</div>
                <div className="text-[11px] font-mono text-brand-forest mt-0.5">{t.location}</div>
              </div>
              <a href="/projects" className="text-xs font-heading font-semibold text-brand-forest hover:underline">
                Read review ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Section 11 & 12: Conversion & Technical Feasibility Form ─────────────────
const ConversionSection: React.FC = () => {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', city: '', classification: '', goal: '', details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="feasibility" className="scroll-mt-28 bg-[#17231D] py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-[1248px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Helplines */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-xs font-mono font-semibold text-brand-lime uppercase tracking-widest">
              SOLAR FEASIBILITY AUDIT
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Ready to Make the Switch to Solar?
            </h2>
            <p className="font-body text-sm md:text-base text-[#A3B3AA] leading-relaxed">
              Let&apos;s build a smarter, cleaner, and more sustainable energy future together. Request a comprehensive on-site solar irradiance analysis and tailored financial ROI projection today.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#1E2D26] border border-[#2B4234]">
                <Phone className="text-brand-lime mt-1 flex-shrink-0" size={18} />
                <div>
                  <div className="text-xs font-mono text-[#A3B3AA] uppercase">Direct Engineering Hotline:</div>
                  <a href="tel:+917239992778" className="font-heading font-bold text-base text-white hover:text-brand-lime transition-colors">
                    +91 72399 92778
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#1E2D26] border border-[#2B4234]">
                <Mail className="text-brand-lime mt-1 flex-shrink-0" size={18} />
                <div>
                  <div className="text-xs font-mono text-[#A3B3AA] uppercase">Advisory &amp; EPC Desk:</div>
                  <a href="mailto:info@jaikisaansolar.com" className="font-heading font-semibold text-sm text-white hover:text-brand-lime transition-colors">
                    info@jaikisaansolar.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#1E2D26] border border-[#2B4234]">
                <MapPin className="text-brand-lime mt-1 flex-shrink-0" size={18} />
                <div>
                  <div className="text-xs font-mono text-[#A3B3AA] uppercase">Corporate Headquarters:</div>
                  <div className="text-xs font-body text-white mt-0.5">
                    SunScope Tower, Sector 62, Noida NCR, India
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Intake Form matching Image 9 */}
          <div className="lg:col-span-7">
            <div className="bg-[#1E2D26] rounded-3xl p-5 sm:p-8 md:p-10 border border-[#2B4234] shadow-elevated">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-white/10 gap-2">
                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                    Request a Free Technical Consultation
                  </h3>
                  <p className="text-xs font-body text-[#A3B3AA] mt-1">
                    Turnaround: &lt; 2hrs | Telemetry-ready
                  </p>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono text-brand-lime px-2.5 py-1 rounded-full bg-brand-lime/10 border border-brand-lime/20 w-fit">
                  Last modified · Verified
                </span>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-lime/15 border border-brand-lime/30 flex items-center justify-center">
                    <CheckCircle size={32} className="text-brand-lime" />
                  </div>
                  <h4 className="font-heading font-bold text-2xl text-white">
                    Consultation Request Lodged!
                  </h4>
                  <p className="font-body text-sm text-[#A3B3AA] max-w-md">
                    Our lead solar engineer will reach out via phone with your custom solar irradiance dossier and initial financial model.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono font-semibold text-[#A3B3AA] uppercase">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Vikram Shekhawat"
                        className="h-11 px-3.5 rounded-xl bg-white/6 border border-white/12 text-sm font-body text-white placeholder:text-[#A3B3AA]/40 focus:outline-none focus:border-brand-lime transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono font-semibold text-[#A3B3AA] uppercase">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98390 12345"
                        className="h-11 px-3.5 rounded-xl bg-white/6 border border-white/12 text-sm font-body text-white placeholder:text-[#A3B3AA]/40 focus:outline-none focus:border-brand-lime transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono font-semibold text-[#A3B3AA] uppercase">Email Address</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="vikram@agroenterprises.com"
                        className="h-11 px-3.5 rounded-xl bg-white/6 border border-white/12 text-sm font-body text-white placeholder:text-[#A3B3AA]/40 focus:outline-none focus:border-brand-lime transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono font-semibold text-[#A3B3AA] uppercase">City &amp; State *</label>
                      <input
                        type="text"
                        required
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        placeholder="e.g. Jaipur, Rajasthan"
                        className="h-11 px-3.5 rounded-xl bg-white/6 border border-white/12 text-sm font-body text-white placeholder:text-[#A3B3AA]/40 focus:outline-none focus:border-brand-lime transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono font-semibold text-[#A3B3AA] uppercase">Property Classification</label>
                      <select
                        value={form.classification}
                        onChange={(e) => setForm({ ...form, classification: e.target.value })}
                        className="h-11 px-3.5 rounded-xl bg-[#17231D] border border-white/12 text-sm font-body text-white focus:outline-none focus:border-brand-lime transition-colors"
                      >
                        <option value="">Select classification</option>
                        <option value="residential">Residential Rooftop / Villa</option>
                        <option value="cold-storage">Commercial Cold Storage</option>
                        <option value="industrial">Industrial Factory / Warehouse</option>
                        <option value="agriculture">Agricultural Farm Pump (PM-KUSUM)</option>
                        <option value="utility">Ground-Mount Open Access</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono font-semibold text-[#A3B3AA] uppercase">Energy Objective</label>
                      <input
                        type="text"
                        value={form.goal}
                        onChange={(e) => setForm({ ...form, goal: e.target.value })}
                        placeholder="Electricity Bill Reduction"
                        className="h-11 px-3.5 rounded-xl bg-white/6 border border-white/12 text-sm font-body text-white placeholder:text-[#A3B3AA]/40 focus:outline-none focus:border-brand-lime transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono font-semibold text-[#A3B3AA] uppercase">Project Details / Roof Area (Optional)</label>
                    <textarea
                      rows={2}
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      placeholder="Approximate shadow-free area (sq ft), transformer rating, or connected load..."
                      className="px-3.5 py-2.5 rounded-xl bg-white/6 border border-white/12 text-sm font-body text-white placeholder:text-[#A3B3AA]/40 focus:outline-none focus:border-brand-lime transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 h-12 px-4 rounded-xl bg-brand-lime hover:bg-brand-limeHover text-[#17231D] font-heading font-extrabold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-glow-lime uppercase tracking-wider text-center"
                  >
                    <span>Request Technical Feasibility Study</span> ⚡
                  </button>
                  <p className="text-center text-[11px] font-mono text-[#A3B3AA]">
                    Zero spam. Absolute confidentiality. Handled directly by senior solar engineers.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Master Home Page Component ───────────────────────────────────────────────
const Home: React.FC = () => (
  <>
    <HeroSection />
    <AboutSection />
    <SolutionsSection />
    <WhyChooseUsSection />
    <ProjectShowcaseSection />
    <SustainabilitySection />
    <CEOSection />
    <InsightsSection />
    <TestimonialsSection />
    <ConversionSection />
  </>
);

export default Home;
