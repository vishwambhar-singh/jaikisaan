import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, MapPin, Zap, Building2, Filter, Phone, CheckCircle, 
  Star, Award, Shield, Compass, Radio, Droplets, Sun, Layers 
} from 'lucide-react';
import { useCity } from '../context/CityContext';
import { asset } from '../lib/assets';

// ─── 9 Verified Landmark Projects matching Figma Frame 4 ───────────────────────
const ALL_PROJECTS = [
  {
    title: 'Mr. Vikas Data Industrial Cold Plant',
    capacity: '220 kW',
    facilityType: 'Commercial Cold Storage',
    client: 'Vikas Enterprises',
    city: 'Jaipur, Rajasthan',
    monthlySavings: '₹1.83 Lakh',
    image: '/assets/images/aa80d82cedafbd1508c328b9e5f2754a3eb14919.jpg',
    slug: 'vikas-cold-storage',
    segment: 'Commercial Cold Storage',
    uptime: '99.8%',
    irr: '21.4%',
    payback: '3.2 yrs',
  },
  {
    title: 'Sharda Enterprises Commercial Rooftop',
    capacity: '85 kWp',
    facilityType: 'C&I Rooftops',
    client: 'Sharda Industries',
    city: 'Lucknow, UP',
    monthlySavings: '₹1.2 Lakh',
    image: '/assets/images/709f7acc5449a720085baaeae6b5d101de5ffa01.jpg',
    slug: 'sharda-flour-mills',
    segment: 'C&I Rooftops',
    uptime: '99.3%',
    irr: '18.6%',
    payback: '3.8 yrs',
  },
  {
    title: 'Rajasthan Premium Farm Pumping Cluster',
    capacity: '50 HP',
    facilityType: 'Solar Irrigation Pumps',
    client: 'Kisan Agro Cooperative',
    city: 'Barabanki & Churu',
    monthlySavings: '₹4.5 Lakh',
    image: '/assets/images/d051cf5fc13615be3fba2903ec3803486f48d58e.jpg',
    slug: 'kisan-agro-barabanki',
    segment: 'Solar Irrigation Pumps',
    uptime: '98.8%',
    irr: '19.2%',
    payback: '4.0 yrs',
  },
  {
    title: 'Rajputana Warehousing Microgrid',
    capacity: '200 kWp',
    facilityType: 'Ground Mount Microgrids',
    client: 'Rajputana Logistics Pvt Ltd',
    city: 'Jodhpur, Rajasthan',
    monthlySavings: '₹3.1 Lakh',
    image: '/assets/images/4a6b7a1e0185bb9386a7deca9c1a6f11d5176053.jpg',
    slug: 'rajputana-warehousing',
    segment: 'Ground Mount Microgrids',
    uptime: '99.5%',
    irr: '22.0%',
    payback: '3.0 yrs',
  },
  {
    title: 'Soormights Luxury Township',
    capacity: '85 kWp',
    facilityType: 'C&I Rooftops',
    client: 'Soormights Housing Society',
    city: 'Jaipur, Rajasthan',
    monthlySavings: '₹1.4 Lakh',
    image: '/assets/images/9232e3c12d228af8636d84a34e8fdea09b42a4b1.jpg',
    slug: 'soormights-luxury-township',
    segment: 'C&I Rooftops',
    uptime: '99.1%',
    irr: '17.8%',
    payback: '4.1 yrs',
  },
  {
    title: 'Awadh Cold Chain Terminal',
    capacity: '150 kWp',
    facilityType: 'Commercial Cold Storage',
    client: 'Awadh Agri Cold Chain Ltd',
    city: 'Unnao, UP',
    monthlySavings: '₹2.2 Lakh',
    image: '/assets/images/91fff17c130fbfe7684a3e0e7fe83e3d5ca439c3.jpg',
    slug: 'awadh-cold-chain',
    segment: 'Commercial Cold Storage',
    uptime: '99.0%',
    irr: '20.5%',
    payback: '3.5 yrs',
  },
  {
    title: 'Bundelkhand Cooperative Irrigation Scheme',
    capacity: '100 HP',
    facilityType: 'Solar Irrigation Pumps',
    client: 'Bundelkhand Farmers Producer Co.',
    city: 'Banda & Jhansi, UP',
    monthlySavings: '₹5.8 Lakh',
    image: '/assets/images/3712df8d0ed3a730f764212b2da268c26dd7890b.jpg',
    slug: 'bundelkhand-irrigation',
    segment: 'Solar Irrigation Pumps',
    uptime: '99.2%',
    irr: '21.0%',
    payback: '3.6 yrs',
  },
  {
    title: 'Sardarshahar Agri-Solar Park',
    capacity: '50 MWp',
    facilityType: 'Ground Mount Microgrids',
    client: 'Rajasthan Clean Grid Corp',
    city: 'Churu, Rajasthan',
    monthlySavings: '₹18.5 Lakh',
    image: '/assets/images/86f4a949d08f6296a12f8e095d8f906c5f5481b1.jpg',
    slug: 'sardarshahar-agri-park',
    segment: 'Ground Mount Microgrids',
    uptime: '99.4%',
    irr: '23.1%',
    payback: '4.5 yrs',
  },
  {
    title: 'Hyderabad Agro-Photovoltaics (Green H2)',
    capacity: '1 MWp',
    facilityType: 'Ground Mount Microgrids',
    client: 'SunScope R&D Consortium',
    city: 'Hyderabad Cluster',
    monthlySavings: '₹6.2 Lakh',
    image: '/assets/images/eab97aa25e778902c8e5697219ec4b273879eb75.jpg',
    slug: 'hyderabad-agri-pv',
    segment: 'Ground Mount Microgrids',
    uptime: '99.6%',
    irr: '24.5%',
    payback: '3.9 yrs',
  },
  {
    title: 'Panki Industrial Heavy Engineering Rooftop',
    capacity: '350 kWp',
    facilityType: 'C&I Rooftops',
    client: 'Kanpur Forgings Ltd',
    city: 'Kanpur, UP',
    monthlySavings: '₹4.8 Lakh',
    image: '/assets/images/4bb4436fda7c0f69c46e53acc7f3be717b2b1624.jpg',
    slug: 'panki-industrial-rooftop',
    segment: 'C&I Rooftops',
    uptime: '99.5%',
    irr: '22.8%',
    payback: '3.1 yrs',
  },
];

const SEGMENTS = [
  'All Projects (1,420+)',
  'Commercial Cold Storage (42)',
  'Solar Irrigation Pumps (850+)',
  'Ground Mount Microgrids (18)',
  'C&I Rooftops (510+)',
];

const GIS_REGIONS = [
  { state: 'All States', mw: '28.4 MWp', sites: '1,420+', hubs: '13 Hubs', uptime: '99.2%' },
  { state: 'Rajasthan', mw: '16.8 MWp', sites: '780+', hubs: '5 Hubs (Jaipur, Jodhpur, Udaipur, Bikaner, Churu)', uptime: '99.6%' },
  { state: 'Uttar Pradesh', mw: '11.6 MWp', sites: '640+', hubs: '8 Hubs (Lucknow, Gorakhpur, Varanasi, Barabanki, Kanpur)', uptime: '99.0%' },
];

const Projects: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState('All Projects (1,420+)');
  const [activeGIS, setActiveGIS] = useState('All States');
  const { activeCity, cityData } = useCity();

  const filtered = ALL_PROJECTS.filter((p) => {
    if (activeSegment.startsWith('All Projects')) return true;
    if (activeSegment.startsWith('Commercial Cold Storage')) return p.segment === 'Commercial Cold Storage';
    if (activeSegment.startsWith('Solar Irrigation Pumps')) return p.segment === 'Solar Irrigation Pumps';
    if (activeSegment.startsWith('Ground Mount Microgrids')) return p.segment === 'Ground Mount Microgrids';
    if (activeSegment.startsWith('C&I Rooftops')) return p.segment === 'C&I Rooftops';
    return true;
  });

  const selectedGIS = GIS_REGIONS.find((g) => g.state === activeGIS) || GIS_REGIONS[0];

  return (
    <>
      {/* ─── 1. Inner Hero: Light Spatial Editorial matching Figma Frame 4 ────── */}
      <div className="bg-[#17231D]">
      <section className="bg-[#F9FAF4] pt-20 pb-16 md:pt-24 md:pb-28 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-semibold text-[#4B6D00] uppercase tracking-widest bg-brand-forest/10 px-3 py-1 rounded-full">
                  12-HUB SYNCHRONIZED STATE PRESENCE
                </span>
              </div>

              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1A1C19] leading-[1.1] tracking-tight">
                Engineering India&apos;s Clean<br />
                Energy Infrastructure:<br />
                <span className="text-brand-forest">Our Project Portfolio</span>
              </h1>

              <p className="font-body text-base md:text-lg text-[#3F4942] leading-relaxed max-w-xl">
                Delivering bankable, high-yield solar arrays across North &amp; West India&apos;s agricultural heartlands, commercial hubs, and cold-storage networks.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-brand-forest hover:bg-brand-forestLight text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-card"
                >
                  Book Feasibility Survey <ArrowRight size={15} />
                </Link>
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-white hover:bg-[#F3F4EE] text-[#1A1C19] font-heading font-semibold text-xs uppercase tracking-wider transition-colors border border-[#E8EAE3]"
                >
                  Explore Verified Projects
                </a>
              </div>
            </div>

            {/* Right Column (5 cols): Thumbnail preview card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-elevated border border-[#E8EAE3] h-80 sm:h-96 relative">
                <img
                  src={asset('/assets/images/86f4a949d08f6296a12f8e095d8f906c5f5481b1.jpg')}
                  alt="Utility solar farm"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-mono uppercase bg-brand-forest text-brand-lime px-2.5 py-1 rounded-full font-bold">
                    Featured Landmark Asset
                  </span>
                  <div className="font-heading font-extrabold text-xl mt-2">
                    50 MWp Sardarshahar Utility Park
                  </div>
                  <div className="text-xs font-mono text-gray-200 mt-1">
                    Evacuating into JVVNL 132kV Substation · Churu
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* ─── 2. Interactive Regional GIS & Installation Footprint Summary ────── */}
      <section className="bg-white py-12 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A1C19]">
                Interactive Regional GIS Footprint Telemetry
              </span>
            </div>

            {/* GIS State Selector Tabs */}
            <div className="flex items-center gap-2 bg-[#F9FAF4] p-1.5 rounded-2xl border border-[#E8EAE3]">
              {GIS_REGIONS.map((g) => (
                <button
                  key={g.state}
                  onClick={() => setActiveGIS(g.state)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                    activeGIS === g.state
                      ? 'bg-brand-forest text-white shadow-card'
                      : 'text-[#3F4942] hover:text-[#1A1C19]'
                  }`}
                >
                  {g.state}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="p-5 rounded-2xl bg-[#F9FAF4] border border-[#E8EAE3]">
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-forest">{selectedGIS.mw}</div>
              <div className="font-body text-xs text-[#3F4942] mt-1.5 font-medium">Installed Solar Capacity</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#F9FAF4] border border-[#E8EAE3]">
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-forest">{selectedGIS.sites}</div>
              <div className="font-body text-xs text-[#3F4942] mt-1.5 font-medium">Commissioned Installations</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#F9FAF4] border border-[#E8EAE3]">
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-forest">99.2%</div>
              <div className="font-body text-xs text-[#3F4942] mt-1.5 font-medium">SCADA Verified Uptime</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#F9FAF4] border border-[#E8EAE3]">
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-forest">30+</div>
              <div className="font-body text-xs text-[#3F4942] mt-1.5 font-medium">Engineers on 24/7 Standby</div>
            </div>
          </div>

          <div className="mt-4 p-3.5 rounded-xl bg-[#F9FAF4] border border-[#E8EAE3] text-center text-xs font-mono text-[#4B6D00]">
            Operational Clusters: <strong>{selectedGIS.hubs}</strong> · 100% Empanelled with UPNEDA &amp; RRECL
          </div>
        </div>
      </section>

      {/* ─── 3. In-Page Filter & Verified Landmark Projects Grid ──────────────── */}
      <section id="portfolio" className="bg-[#F9FAF4] py-20 md:py-28 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono font-semibold text-[#4B6D00] uppercase tracking-widest">
                EPC PORTFOLIO
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1A1C19] mt-2">
                Verified EPC Landmark Projects
              </h2>
            </div>
            <div className="text-xs font-mono text-[#3F4942] bg-white px-3.5 py-1.5 rounded-xl border border-[#E8EAE3]">
              Showing {filtered.length} of {ALL_PROJECTS.length} audited installations
            </div>
          </div>

          {/* Filter Pills matching Figma */}
          <div className="flex gap-2 mb-8 pb-3 border-b border-[#E8EAE3] overflow-x-auto no-scrollbar md:flex-wrap">
            {SEGMENTS.map((seg) => (
              <button
                key={seg}
                onClick={() => setActiveSegment(seg)}
                className={`px-4 py-2 rounded-xl text-xs font-heading font-semibold transition-all border whitespace-nowrap flex-shrink-0 ${
                  activeSegment === seg
                    ? 'bg-brand-forest text-white border-brand-forest shadow-card'
                    : 'bg-white text-[#3F4942] border-[#E8EAE3] hover:border-brand-forest'
                }`}
              >
                {seg}
              </button>
            ))}
          </div>

          {/* 3-Column Projects Grid with all 10 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <div
                key={project.title}
                className="flex flex-col rounded-3xl overflow-hidden bg-white border border-[#E8EAE3] shadow-card hover:shadow-elevated transition-shadow group"
              >
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={asset(project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#17231D]/90 text-brand-lime text-xs font-mono font-bold px-3 py-1 rounded-full">
                    {project.capacity}
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#1A1C19] leading-snug">
                      {project.title}
                    </h3>
                    <div className="flex flex-col gap-1 text-xs text-[#3F4942] font-body mt-2">
                      <div className="flex items-center gap-1.5">
                        <Building2 size={13} className="text-[#4B6D00] flex-shrink-0" />
                        <span>{project.facilityType} · {project.client}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-[#4B6D00] flex-shrink-0" />
                        <span>{project.city}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#E8EAE3]">
                    <div className="grid grid-cols-3 gap-2 text-xs mb-3">
                      <div>
                        <span className="text-[10px] text-[#7C8F83] block font-mono">Monthly Savings</span>
                        <span className="font-heading font-bold text-brand-forest">{project.monthlySavings}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#7C8F83] block font-mono">Fleet Uptime</span>
                        <span className="font-mono text-emerald-600 font-bold">{project.uptime}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#7C8F83] block font-mono">Project IRR</span>
                        <span className="font-mono text-[#1A1C19] font-bold">{project.irr}</span>
                      </div>
                    </div>

                    <Link
                      to={`/projects/${project.slug}`}
                      className="font-heading font-bold text-xs uppercase tracking-wider text-brand-forest hover:text-brand-forestLight transition-colors flex items-center justify-between"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Case Study Deep-Dive Spotlight (Node 117:4866) ────────────────── */}
      <section className="bg-[#F9FAF4] py-16 md:py-24 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="rounded-[32px] bg-white border border-[#E8EAE3] p-8 md:p-12 lg:p-14 shadow-card">
            {/* Header row: Eyebrow + Title/Subhead + Button */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#E8F5E9] text-[#005733] uppercase tracking-wider">
                    ENGINEERING DEEP-DIVE
                  </span>
                  <span className="text-xs font-mono font-medium text-[#6E776F] uppercase tracking-wider">
                    · CASE STUDY #48
                  </span>
                </div>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#17231D] leading-tight tracking-tight">
                  Industrial Cold-Chain Turnkey Execution:
                  <span className="block text-[#005733] mt-1">Mr. Vikas Data 220 kW Plant</span>
                </h2>
                <p className="font-body text-sm md:text-base text-[#4E564F] mt-3.5 max-w-2xl leading-relaxed">
                  Transforming an energy-intensive industrial processing factory in Jaipur into an automated self-sustaining energy fortress with zero midday diesel expenditure.
                </p>
              </div>

              <div className="flex items-center pt-2">
                <Link
                  to="/projects/vikas-cold-storage"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#005733] hover:bg-[#004729] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-card flex-shrink-0"
                >
                  Read Full Case Study (Whitepaper) 📖
                </Link>
              </div>
            </div>

            {/* 4 Big Metrics in a row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 py-6 sm:py-8 border-t border-b border-[#E8EAE3]">
              <div>
                <div className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#005733] tracking-tight">
                  68%
                </div>
                <div className="font-heading font-bold text-xs sm:text-sm text-[#17231D] mt-1.5 sm:mt-2">
                  Energy Cost Reduction
                </div>
                <div className="font-body text-[11px] sm:text-xs text-[#6E776F] mt-0.5">
                  From ₹3.4M to ₹1.1M grid billing/yr
                </div>
              </div>

              <div>
                <div className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#17231D] tracking-tight">
                  4.2
                </div>
                <div className="font-heading font-bold text-xs sm:text-sm text-[#17231D] mt-1.5 sm:mt-2">
                  Years Capital Payback
                </div>
                <div className="font-body text-[11px] sm:text-xs text-[#6E776F] mt-0.5">
                  Accelerated Section 32 tax depreciation
                </div>
              </div>

              <div>
                <div className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#4A7228] tracking-tight">
                  210t
                </div>
                <div className="font-heading font-bold text-xs sm:text-sm text-[#17231D] mt-1.5 sm:mt-2">
                  Annual CO₂ Cut
                </div>
                <div className="font-body text-[11px] sm:text-xs text-[#6E776F] mt-0.5">
                  Equivalent to planting 9,500 trees
                </div>
              </div>

              <div>
                <div className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#005733] tracking-tight">
                  99.8%
                </div>
                <div className="font-heading font-bold text-xs sm:text-sm text-[#17231D] mt-1.5 sm:mt-2">
                  Uptime SLA Guaranteed
                </div>
                <div className="font-body text-[11px] sm:text-xs text-[#6E776F] mt-0.5">
                  24x7 IoT predictive anomaly dispatch
                </div>
              </div>
            </div>

            {/* 3 Columns below metrics */}
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-[#C0392B] uppercase">
                  <span>⚠️</span>
                  <span>THE OPERATIONAL CHALLENGE</span>
                </div>
                <p className="font-body text-xs sm:text-sm text-[#4E564F] leading-relaxed">
                  Heavy continuous chiller machinery led to severe midday peak electricity tariffs, combined with unannounced feeder shedding that necessitated thousands of liters in high-cost diesel genset fuel each month.
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-[#005733] uppercase">
                  <span>🛠️</span>
                  <span>ENGINEERING SOLUTION</span>
                </div>
                <p className="font-body text-xs sm:text-sm text-[#4E564F] leading-relaxed">
                  Turnkey deployment of a 220 kWp high-efficiency bifacial solar array anchored by non-penetrative 850 HDG hot-dip galvanized mounting systems, synced with dual smart multi-MPPT inverters and 11 kV transformer infeed.
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-[#005733] uppercase">
                  <span>✅</span>
                  <span>TANGIBLE OUTCOME</span>
                </div>
                <p className="font-body text-xs sm:text-sm text-[#4E564F] leading-relaxed">
                  Guaranteed generation exceeding 320,000 kWh annually with zero structural degradation after severe monsoons. JVVNL net-metering yields clean credit offsetting remaining facility baseline demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. Institutional Audit & Testimonial Feed (Node 117:4945) ─────────── */}
      <section className="bg-[#F9FAF4] py-16 md:py-24 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[11px] font-mono font-semibold text-[#6E776F] uppercase tracking-widest block mb-2">
                CLIENT VERIFICATION PORTAL
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#17231D] tracking-tight">
                Institutional Audit &amp; Testimonial Feed
              </h2>
            </div>
            <p className="font-body text-xs md:text-sm text-[#4E564F] max-w-md leading-relaxed">
              JaiKisaan Solar enforces strict data governance. Client project quotes and testimonials undergo formal regional KYC and NDA verification prior to public release.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="rounded-3xl border-2 border-dashed border-[#D2D8CF] bg-white p-7 md:p-8 flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex items-center gap-1 text-[#005733] mb-4 text-base tracking-widest">
                  ★★★★★
                </div>
                <h3 className="font-heading font-bold text-sm md:text-base text-[#17231D] leading-snug">
                  Testimonial Slot 01: [Awaiting Regional KYC Client Verification]
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#6E776F] italic leading-relaxed mt-3">
                  Verification protocol active. Enterprise commissioning certificate and client authorization undergoing compliance review.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-[#F0F2EB] flex items-center gap-2 text-[11px] font-mono font-medium text-[#4E564F] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#005733]"></span>
                <span>JAIPUR CLUSTER · INDUSTRIAL TIER-1</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl border-2 border-dashed border-[#D2D8CF] bg-white p-7 md:p-8 flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex items-center gap-1 text-[#005733] mb-4 text-base tracking-widest">
                  ★★★★★
                </div>
                <h3 className="font-heading font-bold text-sm md:text-base text-[#17231D] leading-snug">
                  Testimonial Slot 02: [Awaiting Client Verification]
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#6E776F] italic leading-relaxed mt-3">
                  Verification protocol active. Enterprise commissioning certificate and client authorization undergoing compliance review.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl border-2 border-dashed border-[#D2D8CF] bg-white p-7 md:p-8 flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex items-center gap-1 text-[#005733] mb-4 text-base tracking-widest">
                  ★★★★★
                </div>
                <h3 className="font-heading font-bold text-sm md:text-base text-[#17231D] leading-snug">
                  Testimonial Slot 03: [Awaiting Client Verification]
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#6E776F] italic leading-relaxed mt-3">
                  Verification protocol active. Enterprise commissioning certificate and client authorization undergoing compliance review.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-[#F0F2EB] flex items-center gap-2 text-[11px] font-mono font-medium text-[#4E564F] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#005733]"></span>
                <span>INDORE HUB · CENTRAL EPC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. City-Aware Contact & Feasibility Consultation Band (117:5023) ─── */}
      <section className="bg-[#17231D] py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="rounded-3xl bg-[#1E2D26] border border-[#2B4234] p-8 md:p-14 relative shadow-elevated">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 flex flex-col gap-4">
                <span className="text-xs font-mono font-bold text-brand-lime uppercase tracking-widest">
                  COMMERCIAL &amp; RESIDENTIAL FEASIBILITY · {activeCity.toUpperCase()} HUB
                </span>
                <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white leading-tight">
                  Have a Commercial, Industrial, or PM Surya Ghar Residential Project in Mind?
                </h2>
                <p className="font-body text-sm md:text-base text-[#A3B3AA] max-w-xl leading-relaxed">
                  Our regional engineering desk in <strong className="text-white">{activeCity}</strong> ({cityData.office}) provides on-site shadow analysis, {cityData.discom} net-metering approvals, and custom DPR generation.
                </p>
                <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-[#A3B3AA]">
                  <span className="text-brand-lime font-bold">📍 {cityData.office}</span>
                  <span>📞 +91 72399 92778</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-brand-lime hover:bg-brand-limeHover text-[#17231D] font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-glow-lime text-center"
                >
                  Schedule Site Assessment
                </Link>
                <a
                  href="tel:+917239992778"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-brand-forest hover:bg-brand-forestLight text-white font-heading font-semibold text-xs uppercase tracking-wider transition-colors border border-brand-forest text-center"
                >
                  Call {activeCity} Engineering Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
