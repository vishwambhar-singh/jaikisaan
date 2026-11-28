import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../lib/assets';
import SolarSavingsCalculator from '../components/SolarSavingsCalculator';
import {
  ArrowRight, MessageCircle, Zap, Sun, TrendingUp, Shield, Award, CheckCircle,
  ChevronRight, ChevronLeft, Leaf, Phone, Mail, MapPin, Star, Building2, Battery, Cpu
} from 'lucide-react';

// ─── Section 01: Hero Section (Powering a Brighter Bharat) ───────────────────
interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  kicker: string;
  title: string;
  desc: string;
  tag: string;
  highlight: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'residential',
    image: '/assets/images/hero_slide_1.webp',
    alt: 'Residential rooftop solar canopy installation',
    kicker: 'Residential Solar',
    title: 'Smart rooftop solar for modern homes',
    desc: 'Clean residential rooftop installation with a premium, trustworthy look for the homepage banner.',
    tag: 'Rooftop Solar',
    highlight: 'Up to 90% Bill Offset'
  },
  {
    id: 'urban',
    image: '/assets/images/hero_slide_2.webp',
    alt: 'Large rooftop solar array over dense cityscape',
    kicker: 'Urban Rooftop Solar',
    title: 'High-performance systems across the city',
    desc: 'Showcase beautifully executed rooftop solar arrays designed for households and commercial spaces.',
    tag: 'Urban Rooftop Solar',
    highlight: 'Net-Metered Banking'
  },
  {
    id: 'industrial',
    image: '/assets/images/hero_slide_3.webp',
    alt: 'Industrial solar rooftop installation on blue warehouse',
    kicker: 'Industrial Solar EPC',
    title: 'Industrial rooftops engineered for efficiency',
    desc: 'Highlight large-scale commercial and industrial solar capability with a polished professional visual.',
    tag: 'Industrial EPC',
    highlight: 'Heavy Load Management'
  },
  {
    id: 'execution',
    image: '/assets/images/hero_slide_4.webp',
    alt: 'Modern rooftop canopy solar installation',
    kicker: 'Project Execution',
    title: 'Reliable installations. Long-term energy value.',
    desc: 'Feature clean canopy structures and professionally installed panels with a strong premium feel.',
    tag: 'Turnkey Delivery',
    highlight: '25-Year Linear Warranty'
  }
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const slide = HERO_SLIDES[currentSlide];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[#17231D] pt-28 pb-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slideshow Images with crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_SLIDES.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-35 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            } transform transition-transform duration-[6000ms]`}
          >
            <img
              src={asset(s.image)}
              alt={s.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Spatial Gradients extending behind navbar */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17231D] via-[#17231D]/85 to-[#17231D]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17231D] via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-[1248px] mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
            {/* Eyebrow badge from Jaikisaanfinal.txt */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] font-mono tracking-wider sm:tracking-widest text-brand-lime uppercase bg-brand-lime/10 border border-brand-lime/25 px-2.5 sm:px-3 py-1 rounded-full leading-snug flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
                POWERING A BRIGHTER BHARAT
              </span>
            </div>

            {/* Headline from Jaikisaanfinal.txt */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[3.9rem] leading-[1.1] sm:leading-[1.08] text-white tracking-tight">
              Smarter energy.<br />
              <span className="text-brand-lime">Stronger tomorrow.</span>
            </h1>

            {/* Subhead from Jaikisaanfinal.txt */}
            <p className="font-body text-sm sm:text-base md:text-lg text-[#C8D9CF] leading-relaxed max-w-xl">
              Jai Kisaan Solar provides rooftop solar, engineering and renewable-energy solutions for homes, businesses and larger infrastructure. Explore your options, calculate potential savings and speak to our team.
            </p>

            {/* CTAs from Jaikisaanfinal.txt */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href="#calculator"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-brand-lime hover:bg-brand-limeHover text-[#17231D] font-heading font-bold text-xs sm:text-sm tracking-wide transition-all shadow-glow-lime text-center"
              >
                Book a Free Solar Consultation <ArrowRight size={16} />
              </a>
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-transparent hover:bg-white/8 text-white font-heading font-semibold text-xs sm:text-sm tracking-wide transition-colors border border-white/20 text-center"
              >
                Explore Our Solutions
              </Link>
            </div>

            {/* Hero Bullets from Jaikisaanfinal.txt */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#D4E2D4] pt-1">
              <span className="flex items-center gap-2">
                <CheckCircle size={15} className="text-brand-lime flex-shrink-0" />
                Residential &amp; Rooftop
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={15} className="text-brand-lime flex-shrink-0" />
                Commercial &amp; Industrial
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={15} className="text-brand-lime flex-shrink-0" />
                Utility-scale EPC
              </span>
            </div>

            {/* Slideshow Progress Bar & Dots */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous Slide"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-white flex items-center justify-center transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next Slide"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-white flex items-center justify-center transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Slide dots */}
              <div className="flex items-center gap-2">
                {HERO_SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? 'w-8 bg-brand-lime' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              {/* Slide index counter */}
              <span className="text-[11px] font-mono text-[#A3B3AA]">
                0{currentSlide + 1} / 0{HERO_SLIDES.length}
              </span>
            </div>

            {/* Telemetry quick metrics strip from Jaikisaanfinal.txt */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-4 border-t border-white/10 max-w-lg">
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl text-white">
                  120 MWp+
                </div>
                <div className="text-[9px] sm:text-[11px] font-mono text-[#A3B3AA] uppercase mt-0.5 leading-tight">
                  Installed Capacity
                </div>
              </div>
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl text-brand-lime">
                  300+
                </div>
                <div className="text-[9px] sm:text-[11px] font-mono text-[#A3B3AA] uppercase mt-0.5 leading-tight">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl text-white">
                  10+ Yrs
                </div>
                <div className="text-[9px] sm:text-[11px] font-mono text-[#A3B3AA] uppercase mt-0.5 leading-tight">
                  Solar EPC (Est. 2015)
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Slider Showcase Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[450px] rounded-3xl overflow-hidden bg-[#1A2820]/95 backdrop-blur-md border border-[#2B4234] shadow-elevated relative flex flex-col">
              {/* Photo Viewport */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-black/40">
                {HERO_SLIDES.map((s, idx) => (
                  <img
                    key={s.id}
                    src={asset(s.image)}
                    alt={s.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                      idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2820] via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-brand-lime uppercase tracking-wider">
                  {slide.kicker}
                </div>
                <div className="absolute top-4 right-4 bg-brand-forest/80 backdrop-blur-md border border-brand-lime/30 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold text-white">
                  {slide.tag}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col gap-3 relative z-10">
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white leading-tight">
                  {slide.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#C8D9CF] leading-relaxed">
                  {slide.desc}
                </p>

                {/* Floating Institutional Badge */}
                <div className="mt-2 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-brand-lime font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
                    {slide.highlight}
                  </span>
                  <span className="text-[#A3B3AA]">MNRE &amp; DISCOM Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Section 01.5: Feature Strip (from Jaikisaanfinal.txt) ────────────────────
const FeatureStrip: React.FC = () => (
  <div className="bg-[#12241A] border-y border-white/10 text-white py-6">
    <div className="max-w-[1248px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-xl bg-brand-lime/10 text-brand-lime flex items-center justify-center font-bold text-xl flex-shrink-0 border border-brand-lime/20">
          ☀
        </div>
        <div>
          <div className="font-heading font-bold text-sm text-white">Solar for every need</div>
          <div className="text-xs text-[#A3B3AA] mt-0.5">Homes, farms and industry</div>
        </div>
      </div>
      <div className="flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-xl bg-brand-lime/10 text-brand-lime flex items-center justify-center font-bold text-xl flex-shrink-0 border border-brand-lime/20">
          ⌂
        </div>
        <div>
          <div className="font-heading font-bold text-sm text-white">Site-first approach</div>
          <div className="text-xs text-[#A3B3AA] mt-0.5">Assess before proposing</div>
        </div>
      </div>
      <div className="flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-xl bg-brand-lime/10 text-brand-lime flex items-center justify-center font-bold text-xl flex-shrink-0 border border-brand-lime/20">
          ₹
        </div>
        <div>
          <div className="font-heading font-bold text-sm text-white">Subsidy assistance</div>
          <div className="text-xs text-[#A3B3AA] mt-0.5">Guidance for eligible rooftops</div>
        </div>
      </div>
      <div className="flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-xl bg-brand-lime/10 text-brand-lime flex items-center justify-center font-bold text-xl flex-shrink-0 border border-brand-lime/20">
          ⏱
        </div>
        <div>
          <div className="font-heading font-bold text-sm text-white">Lifetime service</div>
          <div className="text-xs text-[#A3B3AA] mt-0.5">Support after commissioning</div>
        </div>
      </div>
    </div>
  </div>
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
              src={asset('/assets/images/final_engineer.webp')}
              alt="Jai Kisaan Solar engineer reviewing installation"
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
              Not just panels. A partner in progress.
            </h2>
          </div>
          <p className="font-body text-base text-[#3F4942] leading-relaxed">
            We are building reliable &amp; affordable energy in power supply and renewable energy solutions. At Jai Kisaan Solar, we offer eco-friendly energy solutions including solar panel installation, energy solutions, and maintenance for residential and commercial clients, promoting renewable energy across North and West India.
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
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-brand-forest hover:text-brand-forestLight transition-colors"
            >
              Explore our company heritage &amp; leadership <ArrowRight size={15} />
            </Link>
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
    image: '/assets/images/final_residential.webp',
    tag: 'Payback: 3.2 – 3.8 Yrs',
  },
  {
    num: '02',
    eyebrow: 'COMMERCIAL & INDUSTRIAL',
    title: 'Commercial & Industrial Solar',
    desc: 'High-yield rooftop and captive solar arrays purpose-engineered for commercial cold storages, textile mills, manufacturing plants, and educational campuses. Structured for Section 32 40% accelerated depreciation, slashing high daytime peak tariffs.',
    bullets: ['100 kWp to 10 MWp System Sizing', 'Section 32 40% Accelerated Tax Depreciation', 'High-Surge Ammonia Load Management', 'CEIG & HT Interconnection Clearances'],
    image: '/assets/images/final_commercial.webp',
    tag: 'Payback: 2.8 – 3.4 Yrs',
  },
  {
    num: '03',
    eyebrow: 'HIGH-VOLTAGE TRANSMISSION & OPEN ACCESS',
    title: 'Utility-Scale Solar EPC',
    desc: 'Ground-mount megawatt solar power plants engineered for captive open access, group captive wheeling, and high-voltage grid substation evacuation across Rajasthan, UP, and Gujarat. Fully bankable DPR documentation with guaranteed performance ratios.',
    bullets: ['33kV / 132kV Substation Interconnection', 'Group Captive & Third-Party Wheeling', 'Turnkey Land Acquisition & Fencing', 'P50/P90 Generation Modeling & 25-Yr O&M'],
    image: '/assets/images/final_utility.webp',
    tag: 'Project IRR: 21%+',
  },
  {
    num: '04',
    eyebrow: 'MICROGRIDS & BESS INTEGRATION',
    title: 'EV Charging & Smart Microgrids',
    desc: 'Bespoke solar canopy architectures integrated with dynamic fast EV chargers, Lithium-Iron-Phosphate (LFP) Battery Energy Storage Systems (BESS), and intelligent peak-shaving controllers for fleet operators, transit corridors, and green logistics hubs.',
    bullets: ['Solar Canopy & Highway Corridor EPC', 'Behind-the-Meter BESS Battery Buffer', 'Peak Demand Charge Mitigation', 'Cloud SCADA Telemetry & Billing Integration'],
    image: '/assets/images/final_engineer.webp',
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
        <Link
          to="/solutions"
          className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-brand-forest hover:text-brand-forestLight transition-colors"
        >
          View all technical specifications <ArrowRight size={15} />
        </Link>
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
                    src={asset(item.image)}
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
                    <Link
                      to="/solutions"
                      className="inline-flex items-center gap-2 font-heading font-semibold text-xs uppercase tracking-wider text-brand-forest hover:text-brand-forestLight transition-colors"
                    >
                      Explore Specifications <ArrowRight size={14} />
                    </Link>
                    <a
                      href="#feasibility"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('feasibility')?.scrollIntoView({ behavior: 'smooth' });
                      }}
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
    title: 'Solar Panel Installation',
    desc: 'Delivering reliable and sustainable solar energy solutions — rooftop, ground-mount, and utility-scale — with full turnkey execution from DPR to DISCOM net-metering.',
  },
  {
    title: 'Fast Technical Services',
    desc: 'Swift and reliable technical support for all your needs. Dedicated district liaison officers and 48-hour rapid dispatch field engineering cells across UP and Rajasthan.',
  },
  {
    title: 'Safety and Reliability',
    desc: 'Prioritizing safety and delivering reliable solutions you can trust. Hot-dip galvanised structural framing tested to withstand 160 km/h wind shear, with IP65-rated inverters.',
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
                className={`px-4 py-2 rounded-xl text-xs font-heading font-semibold transition-colors whitespace-nowrap flex-shrink-0 ${filter === item
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
                src={asset('/assets/images/final_utility.webp')}
                alt="Mr. Vikas Data 220 kW Large Rooftop Solar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-5 left-5 bg-brand-forest text-brand-lime text-xs font-mono font-bold px-3 py-1 rounded-full">
                50 MWp Utility Ground-Mount
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-mono text-brand-lime uppercase">Sardarshahar, Churu, Rajasthan</span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl mt-1">Mr. Vikas Data — Large Solar Rooftop</h3>
                <p className="font-body text-xs sm:text-sm text-gray-200 mt-2 line-clamp-2">
                  50 MWp ground-mount bifacial solar park evacuating directly into JVVNL 132kV grid substation, powering 1,200+ agricultural pumping stations across arid Rajasthan.
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-4 pt-3 border-t border-white/20 text-xs font-mono">
                  <span>DISCOM: JVVNL</span>
                  <span>•</span>
                  <span>481,000 MWh Lifetime</span>
                  <span>•</span>
                  <Link to="/projects" className="text-brand-lime font-bold hover:underline ml-auto">
                    View Project Dossier →
                  </Link>
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
                  src={asset('/assets/images/hero_slide_3.webp')}
                  alt="Deepak Enterprises Business Rooftop Solar 40 kW"
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
                    Deepak Enterprises — Business Rooftop 40 kW
                  </h4>
                  <p className="font-body text-xs text-[#3F4942] mt-1">
                    Mitigating ammonia compressor peak charges; slashed monthly grid bill from ₹3.8L to ₹1.2L with 68% savings.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E8EAE3] flex items-center justify-between text-xs font-mono">
                  <span className="text-brand-forest font-semibold">68% Bill Cut</span>
                  <Link to="/projects/vikas-cold-storage" className="text-brand-forest font-bold hover:underline">
                    Read Case Study →
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Card: EcoHeights Luxury Township */}
            <div className="rounded-3xl overflow-hidden bg-white border border-[#E8EAE3] shadow-card hover:shadow-elevated transition-shadow flex flex-col group flex-1">
              <div className="h-48 sm:h-56 relative overflow-hidden">
                <img
                  src={asset('/assets/images/hero_slide_1.webp')}
                  alt="Mr. Kapil Agrawal Residential Rooftop Solar 12 kW"
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
                    Mr. Kapil Agrawal — Residential Rooftop 12 kW
                  </h4>
                  <p className="font-body text-xs text-[#3F4942] mt-1">
                    Multi-building residential community capturing PM Surya Ghar benefits with centralized SCADA monitoring.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E8EAE3] flex items-center justify-between text-xs font-mono">
                  <span className="text-brand-forest font-semibold">₹1.4L / mo Saved</span>
                  <Link to="/projects" className="text-brand-forest font-bold hover:underline">
                    View Blueprint →
                  </Link>
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
                src={asset('/assets/images/sanjeev-kumar-ceo.jpg')}
                alt="Sanjeev Kumar — Chief Executive Officer"
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
              &ldquo;At SunScope Group of Companies, we believe in the power of innovation, sustainability, and collaboration to create a brighter future.&rdquo;
            </h2>
            <div className="flex flex-col gap-3.5 text-sm md:text-base font-body text-[#3F4942] leading-relaxed">
              <p>
                Our journey has been driven by a simple yet powerful vision—to bring clean energy, advanced technology, and financial empowerment to businesses and communities worldwide. Each of our group companies plays a key role: Jaikisaan Solar delivers EPC services for solar projects of all scales, eSunScope leads go-to-market strategy, and CityScene Global drives digital transformation.
              </p>
              <p>
                Delivering quality with the highest professional standards is at the core of everything we do. We are committed to excellence in every aspect of our operations—from design and execution to service delivery and stakeholder engagement. Our approach is built on precision, reliability, and continuous improvement.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E8EAE3] flex items-center justify-between">
              <div>
                <div className="font-heading font-bold text-sm text-[#1A1C19]">Sanjeev Kumar</div>
                <div className="text-xs font-body text-[#3F4942]">Group CEO, SunScope Group of Companies</div>
              </div>
              <Link
                to="/about"
                className="text-xs font-heading font-semibold text-brand-forest hover:underline"
              >
                Read full leadership letter →
              </Link>
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
    tag: 'SAVINGS & ROI',
    date: '09 Jun 2026',
    title: 'How Much Can You Save With Solar Panels in Mohali Homes & Businesses?',
    desc: 'A comprehensive guide to evaluating residential and business solar savings, net-metering benefits, and payback periods.',
    image: '/assets/images/hero_slide_1.webp',
  },
  {
    tag: 'INDUSTRIAL EPC',
    date: '19 Mar 2026',
    title: 'Solar Panel Installation in Factories: Save Electricity & Plan ROI',
    desc: 'Factors behind industrial solar feasibility, heavy machinery load management, and commercial project economics.',
    image: '/assets/images/hero_slide_3.webp',
  },
  {
    tag: 'MAINTENANCE & CARE',
    date: '06 Feb 2026',
    title: 'Maintenance Tips After Solar Panel Installation',
    desc: 'Helpful advice for keeping an installed system in optimal condition, routine cleaning schedules, and inverter monitoring.',
    image: '/assets/images/final_engineer.webp',
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
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-brand-forest hover:text-brand-forestLight transition-colors"
        >
          View all technical publications <ArrowRight size={15} />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {WHITEPAPERS.map((wp) => (
          <div
            key={wp.title}
            className="rounded-3xl bg-white border border-[#E8EAE3] shadow-card hover:shadow-elevated transition-shadow flex flex-col overflow-hidden group"
          >
            <div className="h-52 overflow-hidden relative">
              <img
                src={asset(wp.image)}
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
                <Link
                  to="/blog"
                  className="font-heading font-bold text-xs uppercase tracking-wider text-brand-forest hover:text-brand-forestLight transition-colors flex items-center gap-1"
                >
                  READ WHITEPAPER ↗
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Section 09.5: Solar Savings Calculator (Above Testimonials) ─────────────
const CalculatorSection: React.FC = () => (
  <section id="calculator" className="bg-[#17231D] py-20 md:py-28 relative overflow-hidden border-b border-[#23352B] scroll-mt-24">
    <div className="max-w-[1248px] mx-auto px-4 sm:px-6 relative z-10">
      <SolarSavingsCalculator />
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
              <Link to="/projects" className="text-xs font-heading font-semibold text-brand-forest hover:underline">
                Read review ↗
              </Link>
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
    <section id="feasibility" className="scroll-mt-28 bg-[#17231D] py-20 md:py-28 relative overflow-hidden border-t border-[#23352B]">
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
                    S.P Tower, 150, Sirsi Rd, Officers Campus Colony, Jaipur, Rajasthan 302012
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
    <FeatureStrip />
    <AboutSection />
    <SolutionsSection />
    <WhyChooseUsSection />
    <ProjectShowcaseSection />
    <SustainabilitySection />
    <CEOSection />
    <InsightsSection />
    <CalculatorSection />
    <TestimonialsSection />
    <ConversionSection />
  </>
);

export default Home;
