import React, { useState } from 'react';
import { 
  CheckCircle, ArrowLeft, Zap, TrendingUp, Shield, BarChart2, Cpu, 
  MapPin, Phone, Building2, Sliders, AlertTriangle, ArrowRight, Star,
  Download, Calendar, Share2, Leaf, DollarSign
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Badge from '../components/Badge';
import { asset } from '../lib/assets';

const NAV_TABS = [
  { id: 'facility', label: 'Executive Summary' },
  { id: 'specs', label: 'Technical Specs' },
  { id: 'challenges', label: 'Client Challenge & Solution' },
  { id: 'telemetry', label: 'Performance & Telemetry' },
  { id: 'financials', label: 'Financial ROI & Capex' },
  { id: 'gallery', label: 'Site Gallery' },
  { id: 'verification', label: 'Verification & Audit' },
  { id: 'related', label: 'Related Projects' },
];

const SPECS = [
  { label: 'Module Technology', value: 'Waaree 545Wp Bifacial Mono-PERC (DCR)' },
  { label: 'Inverter Configuration', value: 'Sungrow 110kW String Inverters (Dual MPPT)' },
  { label: 'Mounting System', value: 'Heavy Hot-Dip Galvanised Structure (15° Tilt)' },
  { label: 'Grid Interconnection', value: 'JVVNL 11kV HT Net Metering' },
  { label: 'Annual Generation', value: '481,000 kWh/year (Audited P50)' },
  { label: 'Monitoring & Telemetry', value: '5-Minute IoT SCADA Cloud Telemetry' },
  { label: 'Degradation Guarantee', value: '0.55% Annual Linear Degradation Warranty' },
  { label: 'Turnkey Commissioning', value: '42 Days from DPR to Grid Synchronization' },
];

const FINANCIALS = [
  { label: 'Total System CAPEX', value: '₹84.5 Lakh (Turnkey EPC)' },
  { label: 'Year 1 Tax Depreciation (Sec 32)', value: '₹33.8 Lakh (40% Accelerated)' },
  { label: 'Monthly Electricity Bill (Before)', value: '₹3,80,000 / month' },
  { label: 'Monthly Electricity Bill (After)', value: '₹1,22,000 / month' },
  { label: 'Annual Direct Energy Savings', value: '₹21.6 Lakh / year' },
  { label: 'Simple Payback Period', value: '3.2 Years (Post-Tax)' },
  { label: '25-Year Project IRR', value: '23.4% Bankable Alpha' },
  { label: 'Cumulative 25-Year Net Savings', value: '₹5.42 Crore Net Cash Flow' },
];

const RELATED_PROJECTS = [
  {
    title: 'Awadh Cold Chain Terminal — Unnao',
    capacity: '150 kWp',
    image: '/assets/images/91fff17c130fbfe7684a3e0e7fe83e3d5ca439c3.jpg',
    slug: 'awadh-cold-chain',
  },
  {
    title: 'Rajputana Warehousing — Jodhpur',
    capacity: '200 kWp',
    image: '/assets/images/5be129ff0eab27a57ee6c861001a327d9c19cd89.jpg',
    slug: 'rajputana-warehousing',
  },
  {
    title: 'Sharda Flour Mills — Lucknow',
    capacity: '85 kWp',
    image: '/assets/images/709f7acc5449a720085baaeae6b5d101de5ffa01.jpg',
    slug: 'sharda-flour-mills',
  },
];

const PROJECT_META: Record<string, {
  title: string;
  capacity: string;
  facilityType: string;
  client: string;
  city: string;
  savings: string;
  discom: string;
}> = {
  'vikas-cold-storage': {
    title: 'Mr. Vikas Data 220 kW Plant',
    capacity: '220 kWp',
    facilityType: 'Commercial Cold Storage',
    client: 'Vikas Enterprises',
    city: 'Jaipur Industrial Area, Rajasthan',
    savings: '₹21.8 Lakh/yr',
    discom: 'JVVNL Net-Metered & Commissioned',
  },
  'sharda-flour-mills': {
    title: 'Sharda Enterprises Commercial Rooftop',
    capacity: '85 kWp',
    facilityType: 'C&I Rooftops',
    client: 'Sharda Industries',
    city: 'Lucknow, Uttar Pradesh',
    savings: '₹14.4 Lakh/yr',
    discom: 'MVVNL Net-Metered & Commissioned',
  },
  'kisan-agro-barabanki': {
    title: 'Rajasthan Premium Farm Pumping Cluster',
    capacity: '50 HP',
    facilityType: 'Solar Irrigation Pumps',
    client: 'Kisan Agro Cooperative',
    city: 'Barabanki & Churu',
    savings: '₹54.0 Lakh/yr',
    discom: 'PM-KUSUM Feeder Synchronized',
  },
  'rajputana-warehousing': {
    title: 'Rajputana Warehousing & Logistics Hub',
    capacity: '200 kWp',
    facilityType: 'Industrial Warehousing',
    client: 'Rajputana Logistics',
    city: 'Jodhpur, Rajasthan',
    savings: '₹19.2 Lakh/yr',
    discom: 'JdVNL Net-Metered & Commissioned',
  },
  'soormights-luxury-township': {
    title: 'Soormights Luxury Township Array',
    capacity: '65 kWp',
    facilityType: 'Residential Society',
    client: 'Soormights RWA',
    city: 'Lucknow, UP',
    savings: '₹10.8 Lakh/yr',
    discom: 'MVVNL Net-Metered & Commissioned',
  },
  'awadh-cold-chain': {
    title: 'Awadh Cold Chain Agro Logistics',
    capacity: '150 kWp',
    facilityType: 'Commercial Cold Storage',
    client: 'Awadh Agro Products',
    city: 'Varanasi, UP',
    savings: '₹16.5 Lakh/yr',
    discom: 'PuVVNL Net-Metered & Commissioned',
  },
  'bundelkhand-irrigation': {
    title: 'Bundelkhand Solar Feeder Irrigation',
    capacity: '25 HP',
    facilityType: 'Solar Irrigation Pumps',
    client: 'Bundelkhand Farmers Union',
    city: 'Gorakhpur & Jhansi',
    savings: '₹28.0 Lakh/yr',
    discom: 'PM-KUSUM Component C Dedicated',
  },
  'sardarshahar-agri-park': {
    title: 'Sardarshahar Agri-Photovoltaic Facility',
    capacity: '100 kWp',
    facilityType: 'Agri-PV Systems',
    client: 'Marwar Solar Agro',
    city: 'Churu, Rajasthan',
    savings: '₹13.2 Lakh/yr',
    discom: 'JdVNL Net-Metered & Commissioned',
  },
  'hyderabad-agri-pv': {
    title: 'Awfis Oyster Complex Decarbonization Array',
    capacity: '180 kWp',
    facilityType: 'C&I Rooftops',
    client: 'Oyster Commercial Infra',
    city: 'Hyderabad, Telangana',
    savings: '₹22.5 Lakh/yr',
    discom: 'TSSPDCL Net-Metered & Commissioned',
  },
  'panki-industrial-rooftop': {
    title: 'Panki Industrial Corridor Heavy Manufacturing',
    capacity: '320 kWp',
    facilityType: 'C&I Rooftops',
    client: 'Kanpur Precision Castings',
    city: 'Kanpur, UP',
    savings: '₹38.4 Lakh/yr',
    discom: 'KESCO Net-Metered & Commissioned',
  },
};

const CaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const currentProject = (slug && PROJECT_META[slug]) || PROJECT_META['vikas-cold-storage'];
  const [activeTab, setActiveTab] = useState('facility');

  return (
    <>
      {/* ─── 1. Light Hero: Breadcrumb + Title + CTAs + Metrics ──────────────── */}
      <section className="bg-[#F9FAF4] min-h-screen flex flex-col justify-center pt-28 pb-12 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6 w-full">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs font-mono text-[#6E776F] mb-5">
            <Link to="/" className="hover:text-[#005733] transition-colors">🏠 Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-[#005733] transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-[#3F4942]">{currentProject.facilityType}</span>
            <span>/</span>
            <span className="text-[#17231D] font-semibold">{currentProject.title}</span>
          </nav>

          {/* Badge tags row */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#17231D] text-[#C5F176] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5F176]"></span>
              CASE STUDY · {currentProject.facilityType} EPC
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-[#E8F5E9] text-[#005733] border border-[#B2DFBD] uppercase tracking-wider">
              <CheckCircle size={11} className="flex-shrink-0" />
              {currentProject.discom}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-white text-[#4E564F] border border-[#E8EAE3] uppercase tracking-wider">
              <MapPin size={11} className="flex-shrink-0" />
              {currentProject.city}
            </span>
          </div>

          {/* Title + CTA grid */}
          <div className="grid lg:grid-cols-12 gap-8 pb-8">
            {/* Left: Title + Subtitle */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#17231D] leading-[1.1] tracking-tight">
                Turnkey Decarbonization &amp; Engineering:
                <span className="block text-[#005733]">{currentProject.title}</span>
              </h1>
              <p className="font-body text-sm md:text-base text-[#4E564F] leading-relaxed max-w-2xl">
                How an energy-intensive {currentProject.facilityType.toLowerCase()} facility for {currentProject.client} in {currentProject.city} eliminated midday diesel reliance, generated {currentProject.savings} in energy savings, and accelerated capital payback through high-precision bifacial solar engineering.
              </p>
            </div>

            {/* Right: 3 CTAs */}
            <div className="lg:col-span-4 flex flex-col gap-2.5 justify-start pt-2">
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  window.print();
                }}
                className="inline-flex items-center gap-2.5 h-11 px-5 rounded-xl bg-[#17231D] hover:bg-[#005733] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-card"
              >
                <Download size={14} />
                Download Case Study PDF (8.4 MB)
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 h-11 px-5 rounded-xl bg-white hover:bg-[#F3F4EE] text-[#17231D] font-heading font-semibold text-xs uppercase tracking-wider transition-colors border border-[#E8EAE3]"
              >
                <Calendar size={14} />
                Schedule Plant Walkthrough
              </Link>
              <button 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: currentProject.title, url: window.location.href }).catch(() => {});
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Project link copied to clipboard!');
                  }
                }}
                className="inline-flex items-center gap-2.5 h-9 px-2 text-[#4E564F] hover:text-[#005733] font-body text-xs font-medium transition-colors"
              >
                <Share2 size={13} />
                Share Technical Docket
              </button>
            </div>
          </div>

          {/* 4 Key Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-[#E8EAE3] rounded-2xl overflow-hidden bg-white mb-0 shadow-sm">
            {[
              {
                eyebrow: 'DC PEAK CAPACITY',
                icon: '⚡',
                value: '220 kWp',
                sub: '400x TOPCon 550W Bifacial',
                accent: false,
              },
              {
                eyebrow: 'ANNUAL GENERATION',
                icon: '⚡',
                value: '320,000 kWh',
                sub: 'Guaranteed Clean Yield / Year',
                accent: false,
              },
              {
                eyebrow: 'NET ENERGY COST REDUCTION',
                icon: '💰',
                value: '₹21.8 Lakh/yr',
                sub: '68% Total Tariff Offset',
                subAccent: true,
                accent: false,
              },
              {
                eyebrow: 'CARBON OFFSET INDEX',
                icon: '🌿',
                value: '210 Tonnes',
                sub: 'Equivalent to 9,500 trees',
                accent: false,
              },
            ].map((m, i) => (
              <div
                key={m.eyebrow}
                className={`p-4 sm:p-6 flex flex-col gap-1 sm:gap-1.5 ${
                  i % 2 === 0 ? 'border-r border-[#E8EAE3]' : 'lg:border-r lg:border-[#E8EAE3]'
                } ${i < 2 ? 'border-b lg:border-b-0 border-[#E8EAE3]' : ''} ${
                  i === 2 ? 'lg:border-r border-[#E8EAE3]' : ''
                }`}
              >
                <div className="text-[9px] sm:text-[10px] font-mono font-semibold text-[#6E776F] uppercase tracking-wider truncate">
                  {m.eyebrow}
                </div>
                <div className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-[#17231D] mt-0.5">
                  {m.value}
                </div>
                <div className={`text-[11px] sm:text-xs font-body truncate ${m.subAccent ? 'text-[#005733] font-semibold' : 'text-[#6E776F]'}`}>
                  {m.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky In-Page Tab Navigation */}
        <nav className="border-t border-[#E8EAE3] bg-white mt-0 sticky top-16 sm:top-20 z-40">
          <div className="max-w-[1248px] mx-auto px-4 sm:px-6 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-0">
              {NAV_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-shrink-0 px-3.5 sm:px-4 py-3 sm:py-3.5 text-[11px] sm:text-xs font-heading font-semibold border-b-2 transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-[#005733] text-[#005733]'
                      : 'border-transparent text-[#4E564F] hover:text-[#17231D] hover:border-[#C8D0C3]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </section>

      {/* 2. Wide Hero Visual Banner */}
      <section className="bg-[#F9FAF4] border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6 py-8">
          <div className="relative rounded-2xl overflow-hidden h-72 md:h-[460px] border border-[#E8EAE3] shadow-card">
            <img
              src={asset('/assets/images/aa80d82cedafbd1508c328b9e5f2754a3eb14919.jpg')}
              alt="Mr. Vikas Data 220 kW Plant Aerial"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 bg-black/70 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded-xl text-xs font-mono text-white">
              📍 Coordinates: 26.9124° N, 75.7873° E · NH-48 Jaipur Corridor
            </div>
            <div className="absolute top-5 right-5 bg-[#17231D]/90 text-[#C5F176] text-[10px] font-mono font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5F176] animate-pulse"></span>
              LIVE SCADA · 99.4% PR · Performance Ratio
            </div>
          </div>
        </div>
      </section>

      {/* 3+4 Main Content Sections */}
      <section className="bg-surface-page py-16 md:py-24">
        <div className="max-w-container mx-auto px-6 flex flex-col gap-16">

          {/* Section 1: Facility Background & EPC Scope */}
          <div id="facility" className="scroll-mt-36 grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-surface-card border border-border-card flex flex-col gap-4">
              <span className="text-xs font-mono font-semibold text-text-eyebrow uppercase">Operating Context</span>
              <h2 className="font-heading font-bold text-2xl text-text-primary">Facility Background</h2>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                Vikas Enterprises operates a 2,500 MT state-of-the-art agricultural cold storage along the Jaipur-Delhi highway corridor. With 15 ammonia chilling compressors operating around the clock, base connected electrical load stood at 350 kVA.
              </p>
              <div className="p-4 rounded-xl bg-white border border-border-light text-xs font-mono text-text-secondary flex flex-col gap-1">
                <div>• Pre-Solar Grid Bill: ₹3,80,000 / month</div>
                <div>• Sanctioned Load: 350 kVA HT Industrial Tariff</div>
                <div>• Primary Commodity: Seed Potatoes &amp; Spices Mandi Logistics</div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-surface-card border border-border-card flex flex-col gap-4">
              <span className="text-xs font-mono font-semibold text-brand-forest uppercase">Execution Blueprint</span>
              <h2 className="font-heading font-bold text-2xl text-text-primary">EPC Scope &amp; Turnkey Execution</h2>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                JaiKisaan Solar engineered a high-elevation bifacial array over the cold store roof deck. By raising panel mounts 2.4 meters above the roof surface, ambient airflow reduced cell operating temperatures while allowing full roof maintenance access.
              </p>
              <div className="p-4 rounded-xl bg-white border border-border-light text-xs font-mono text-text-secondary flex flex-col gap-1">
                <div>• Array Rating: 220 kWp (404 × 545Wp Bifacial Panels)</div>
                <div>• Inverter Architecture: 2 × 110 kW String Inverters with Active PF</div>
                <div>• Interconnection: 11kV Grid Feeder with Bi-Directional Net-Meter</div>
              </div>
            </div>
          </div>

          {/* Section 2: Comprehensive Technical Specifications */}
          <div id="specs" className="scroll-mt-36">
            <div className="mb-6">
              <span className="text-xs font-body font-semibold text-text-eyebrow uppercase tracking-widest">
                System Engineering
              </span>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-primary mt-1">
                Comprehensive Technical Specifications
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SPECS.map((sp) => (
                <div key={sp.label} className="p-5 rounded-2xl bg-surface-card border border-border-card flex flex-col gap-1.5">
                  <span className="text-xs font-mono text-text-secondary">{sp.label}</span>
                  <span className="font-heading font-semibold text-sm text-text-primary">{sp.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: The Facility Challenges vs. JaiKisaan Solutions */}
          <div id="challenges" className="scroll-mt-36">
            <div className="mb-6">
              <span className="text-xs font-body font-semibold text-text-eyebrow uppercase tracking-widest">
                Comparative Engineering Analysis
              </span>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-primary mt-1">
                The Facility Challenges vs. JaiKisaan Solutions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Challenge Card */}
              <div className="p-8 rounded-2xl bg-red-50/60 border border-red-200/60 flex flex-col gap-5">
                <div className="flex items-center gap-2 text-red-700 font-heading font-semibold text-lg">
                  <AlertTriangle size={20} />
                  Challenges Before Solarization
                </div>
                <div className="flex flex-col gap-3.5 text-xs md:text-sm font-body text-red-900/90 leading-relaxed">
                  <div className="flex items-start gap-2.5">
                    <span className="font-bold text-red-600">•</span>
                    <span><strong>High Ammonia Compressor Surge Surges:</strong> Industrial chilling compressors created 3.2x startup inrush currents that caused standard inverters to trip.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="font-bold text-red-600">•</span>
                    <span><strong>Severe Ambient Desert Heat:</strong> Jaipur summers reaching 48°C cause standard mono-facial panels to derate significantly, losing up to 22% generation.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="font-bold text-red-600">•</span>
                    <span><strong>Time-of-Day Tariff Penalties:</strong> JVVNL imposed severe peak-hour surcharges between 11 AM and 5 PM, coinciding exactly with highest compressor loads.</span>
                  </div>
                </div>
              </div>

              {/* Solution Card */}
              <div className="p-8 rounded-2xl bg-brand-lime/10 border border-brand-lime/40 flex flex-col gap-5">
                <div className="flex items-center gap-2 text-brand-forest font-heading font-semibold text-lg">
                  <CheckCircle size={20} />
                  The JaiKisaan Engineering Solution
                </div>
                <div className="flex flex-col gap-3.5 text-xs md:text-sm font-body text-text-secondary leading-relaxed">
                  <div className="flex items-start gap-2.5">
                    <span className="font-bold text-brand-forest">•</span>
                    <span><strong>Dynamic Power-Factor String Inverters:</strong> Deployed dual 110kW Sungrow inverters with advanced inductive reactive-power compensation handling heavy motor loads.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="font-bold text-brand-forest">•</span>
                    <span><strong>Elevated Bifacial Framing:</strong> Panels mounted on 2.4m hot-dip galvanised canopy allowing lower ambient temperatures and an additional 12% rear albedo yield.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="font-bold text-brand-forest">•</span>
                    <span><strong>100% Day-Hour Solar Self-Consumption:</strong> All midday generation directly powers compressors on-site, cutting peak grid withdrawal to near zero.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Real-Time Telemetry & Performance Ratio */}
          <div id="telemetry" className="scroll-mt-36">
            <div className="rounded-3xl bg-surface-dark border border-border-darkSubtle p-8 md:p-12 relative overflow-hidden text-white">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div>
                  <span className="text-xs font-mono text-brand-lime uppercase tracking-widest">
                    LIVE SCADA GENERATION WAVEFORM
                  </span>
                  <h2 className="font-heading font-bold text-2xl md:text-3xl mt-1">
                    Real-Time Array Telemetry &amp; Performance Ratio
                  </h2>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-ecoGreen animate-pulse" />
                  <span>Cloud SCADA: Active · 84.2% PR</span>
                </div>
              </div>

              {/* Waveform Graph Card */}
              <div className="p-6 rounded-2xl bg-surface-darkCard border border-border-darkSubtle flex flex-col gap-6">
                <div className="flex items-baseline justify-between border-b border-border-darkSubtle pb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading font-bold text-4xl text-brand-lime">482</span>
                    <span className="font-heading text-lg text-text-onDark">kWh</span>
                    <span className="text-xs text-text-onDarkMuted ml-2">Today&apos;s Midday Generation</span>
                  </div>
                  <div className="text-xs font-mono text-brand-ecoGreen">50.02 Hz Synced</div>
                </div>

                <div className="h-28 bg-white/5 rounded-xl p-3 flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 100 35" preserveAspectRatio="none">
                    <path
                      d="M0,32 Q15,28 30,12 T60,4 T80,18 T100,30 L100,35 L0,35 Z"
                      fill="#C5F176"
                      fillOpacity="0.25"
                    />
                    <path
                      d="M0,32 Q15,28 30,12 T60,4 T80,18 T100,30"
                      fill="none"
                      stroke="#C5F176"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-white/5">
                    <div className="text-text-onDarkMuted">Performance Ratio</div>
                    <div className="font-bold text-brand-lime text-base mt-0.5">84.2% Optimal</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5">
                    <div className="text-text-onDarkMuted">Daily Generation</div>
                    <div className="font-bold text-white text-base mt-0.5">1,184 kWh/day</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5">
                    <div className="text-text-onDarkMuted">Inverter Efficiency</div>
                    <div className="font-bold text-white text-base mt-0.5">98.6% Weighted</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5">
                    <div className="text-text-onDarkMuted">Grid Power Factor</div>
                    <div className="font-bold text-brand-ecoGreen text-base mt-0.5">0.99 Unity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Accelerated Capital Payback & Taxation Alpha */}
          <div id="financials" className="scroll-mt-36">
            <div className="mb-6">
              <span className="text-xs font-body font-semibold text-text-eyebrow uppercase tracking-widest">
                Financial Modeling
              </span>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-primary mt-1">
                Accelerated Capital Payback &amp; Taxation Alpha
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-border-card bg-white shadow-card">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-page border-b border-border-card text-xs font-heading font-semibold text-text-secondary uppercase">
                    <th className="py-4 px-6">Financial Parameter</th>
                    <th className="py-4 px-6 text-right">Audited Valuation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-card/60 text-sm font-body">
                  {FINANCIALS.map((f) => (
                    <tr key={f.label} className="hover:bg-brand-lime/5 transition-colors">
                      <td className="py-4 px-6 text-text-primary font-medium">{f.label}</td>
                      <td className="py-4 px-6 text-right font-mono font-bold text-brand-forest">{f.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 6: Site Photo Gallery & Engineering Blueprints */}
          <div id="gallery" className="scroll-mt-36">
            <div className="mb-6">
              <span className="text-xs font-body font-semibold text-text-eyebrow uppercase tracking-widest">
                Site Verification
              </span>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-primary mt-1">
                Site Photo Gallery &amp; Engineering Blueprints
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col rounded-2xl overflow-hidden bg-surface-card border border-border-card shadow-card">
                <div className="h-56 overflow-hidden">
                  <img
                    src={asset('/assets/images/aa80d82cedafbd1508c328b9e5f2754a3eb14919.jpg')}
                    alt="Elevated Bifacial Rooftop Array"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="font-heading font-semibold text-sm text-text-primary">Elevated Bifacial Rooftop Array</div>
                  <div className="text-xs font-body text-text-secondary mt-0.5">2.4m elevated hot-dip galvanised frame</div>
                </div>
              </div>

              <div className="flex flex-col rounded-2xl overflow-hidden bg-surface-card border border-border-card shadow-card">
                <div className="h-56 overflow-hidden">
                  <img
                    src={asset('/assets/images/4bb4436fda7c0f69c46e53acc7f3be717b2b1624.jpg')}
                    alt="Dual 110 kW Inverter Shed & LT Panel"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="font-heading font-semibold text-sm text-text-primary">Dual 110 kW Inverter Shed &amp; LT Panel</div>
                  <div className="text-xs font-body text-text-secondary mt-0.5">Sungrow IP65 string inverters + surge arrestors</div>
                </div>
              </div>

              <div className="flex flex-col rounded-2xl overflow-hidden bg-surface-card border border-border-card shadow-card">
                <div className="h-56 overflow-hidden">
                  <img
                    src={asset('/assets/images/f6c2c108dd52dc2c204bdca8c39b34e0a10f7816.jpg')}
                    alt="Solar Single-Line Diagram (SLD)"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="font-heading font-semibold text-sm text-text-primary">Solar Single-Line Diagram (SLD) Blueprint</div>
                  <div className="text-xs font-body text-text-secondary mt-0.5">CEIG approved 11kV substation synchronization</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7: Strict Customer Testimonial & KYC Verification */}
          <div className="p-8 md:p-10 rounded-2xl bg-surface-card border border-border-card shadow-card">
            <div className="flex items-center gap-1 text-amber-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="font-body text-base md:text-lg text-text-primary italic leading-relaxed">
              &ldquo;JaiKisaan Solar delivered our 220 kW turnkey cold storage installation in Jaipur without interrupting 24/7 refrigeration operations. Our monthly power bill dropped by ₹2.58 Lakhs immediately upon JVVNL bi-directional meter synchronization.&rdquo;
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-6 border-t border-border-light">
              <div>
                <div className="font-heading font-bold text-base text-text-primary">Mr. Vikas Data</div>
                <div className="text-xs font-body text-text-secondary">Managing Director · Vikas Cold Storage &amp; Agro Logistics</div>
              </div>
              <div className="text-xs font-mono text-brand-forest bg-brand-forest/10 px-3 py-1.5 rounded-lg border border-brand-forest/20">
                KYC &amp; Technical Inspection Verified · 2024
              </div>
            </div>
          </div>

          {/* Section 8: Jaipur Regional Headquarters & 24/7 O&M Cell */}
          <div className="p-8 rounded-2xl bg-surface-darkCard border border-border-darkSubtle text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-lime/15 text-brand-lime flex items-center justify-center flex-shrink-0 text-xl">
                📍
              </div>
              <div>
                <div className="text-xs font-mono text-brand-lime uppercase">Local Regional Support</div>
                <h3 className="font-heading font-bold text-xl text-white mt-0.5">
                  Jaipur Regional Headquarters &amp; 24/7 O&amp;M Cell
                </h3>
                <p className="text-xs text-text-onDarkMuted mt-1">
                  B-45, Malviya Nagar, Jaipur, Rajasthan — 302 017 · Rapid on-site response within 2 hours
                </p>
              </div>
            </div>
            <a
              href="tel:+917239992778"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-lime hover:bg-brand-limeHover text-text-primary font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-glow-lime whitespace-nowrap"
            >
              Contact Jaipur Desk
            </a>
          </div>

          {/* Section 9: Related Industrial Decarbonization Projects */}
          <div>
            <div className="mb-6">
              <span className="text-xs font-body font-semibold text-text-eyebrow uppercase tracking-widest">
                More Landmark Arrays
              </span>
              <h2 className="font-heading font-bold text-2xl text-text-primary mt-1">
                Related Industrial &amp; Agro Decarbonization Projects
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {RELATED_PROJECTS.map((rel) => (
                <div key={rel.title} className="flex flex-col rounded-2xl overflow-hidden bg-surface-card border border-border-card shadow-card">
                  <div className="h-44 overflow-hidden relative">
                    <img src={asset(rel.image)} alt={rel.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-brand-forest/90 text-brand-lime text-xs font-mono px-3 py-1 rounded-full font-semibold">
                      {rel.capacity}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="font-heading font-semibold text-sm text-text-primary">{rel.title}</h3>
                    <Link to="/projects" className="text-xs font-semibold text-brand-forest hover:underline">
                      Explore project ↗
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. High-Impact Consultation CTA Band */}
      <section className="bg-surface-dark py-20 relative overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="rounded-3xl bg-surface-darkCard border border-border-darkSubtle p-8 md:p-14 text-center flex flex-col items-center gap-6 shadow-elevated">
            <span className="text-xs font-mono font-semibold text-brand-lime uppercase tracking-widest">
              COLD-CHAIN &amp; INDUSTRIAL SPECIALISTS
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-onDark max-w-2xl">
              Have an Industrial or Cold-Storage Facility with High Energy Tariffs?
            </h2>
            <p className="font-body text-sm md:text-base text-text-onDarkMuted max-w-xl">
              Our engineering team will conduct a complete 3D rooftop simulation, shadow study, and 25-year financial projection for your connected load.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-xl bg-brand-lime hover:bg-brand-limeHover text-text-primary font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-glow-lime"
              >
                Schedule Site Feasibility
              </Link>
              <a
                href="tel:+917239992778"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-xl bg-brand-forest hover:bg-brand-forestLight text-white font-heading font-semibold text-xs uppercase tracking-wider transition-colors border border-brand-forest"
              >
                Call Senior Engineer
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudy;
