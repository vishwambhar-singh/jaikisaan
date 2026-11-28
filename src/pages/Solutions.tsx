import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Zap, Sun, Battery, Droplets, Building2, 
  Home as HomeIcon, MessageCircle, Shield, Award 
} from 'lucide-react';
import { asset } from '../lib/assets';
import SectionHeading from '../components/SectionHeading';
import Badge from '../components/Badge';
import StatTile from '../components/StatTile';
import FAQAccordion from '../components/FAQAccordion';

const SOLUTIONS = [
  {
    id: 'rooftop',
    eyebrow: 'Residential, C&I & Housing Societies',
    title: 'Rooftop Solar Installation',
    subtitle: 'Customized on-grid net-metered rooftop systems for homes, factories, and commercial institutions.',
    desc: 'At JaiKisaan Solar, we take pride in being one of the most trusted solar installers and EPC providers. We offer comprehensive rooftop solar solutions for residential, commercial, and industrial sectors, ensuring sustainable energy, lower electricity bills, and seamless net metering approvals under PM Surya Ghar and state DISCOM regulations.',
    image: '/assets/images/709f7acc5449a720085baaeae6b5d101de5ffa01.jpg',
    icon: HomeIcon,
    stats: [
      { metric: 'Up to ₹78,000', label: 'Central DBT Subsidy' },
      { metric: '70–90%', label: 'Monthly Bill Reduction' },
      { metric: '25 Yrs', label: 'Linear Output Warranty' },
    ],
    features: [
      'Site assessment, shadow analysis & customized solar design',
      'Grid connection & government subsidy assistance (PM Surya Ghar)',
      'Waaree & Adani high-efficiency TOPCon / Mono-PERC bifacial modules',
      'Net metering synchronization with DISCOM (UPPCL, JVVNL, MVVNL)',
      'Heavy hot-dip galvanized mounting structures (160 km/h wind shear)',
      'Turnkey EPC with 5-year comprehensive AMC & SCADA monitoring',
    ],
    ctaLabel: 'Get Rooftop Assessment',
  },
  {
    id: 'utility',
    eyebrow: 'Ground-Mount & Captive Open-Access',
    title: 'Utility-Scale EPC Construction',
    subtitle: 'Large-scale MW-capacity solar energy solutions engineered to global quality and performance standards.',
    desc: 'We provide large-scale, efficient, and reliable utility-scale solar EPC projects supporting the national transition to renewable energy. From geotechnical analysis and solar resource assessment to civil engineering, high-voltage substation connectivity, and SCADA dispatch, our turnkey execution ensures maximized generation yield and bankable project IRRs.',
    image: '/assets/images/86f4a949d08f6296a12f8e095d8f906c5f5481b1.jpg',
    icon: Building2,
    stats: [
      { metric: '120 MWp', label: 'Utility Pipeline Capacity' },
      { metric: '21%+', label: 'Bankable Project IRR' },
      { metric: '42 Days', label: 'Fast-Track Commissioning' },
    ],
    features: [
      'Geotechnical analysis, solar irradiance modeling & layout optimization',
      '33kV / 132kV grid connectivity study & substation interconnection',
      'Permits, environmental clearances, and CEIG approvals',
      'Automated tracker arrays and central inverter stations',
      'Detailed DPR and lender-ready financial models (CapEx & OpEx)',
      'Full turnkey execution: DPR → Procurement → Synchronization → O&M',
    ],
    ctaLabel: 'Request Utility DPR',
  },
  {
    id: 'transmission',
    eyebrow: 'Power Evacuation & Infrastructure',
    title: 'Transmission Line Services',
    subtitle: 'Reliable energy evacuation through expertly engineered transmission lines and efficient substations.',
    desc: 'We specialize in the seamless execution of transmission line projects and the establishment of high-efficiency substations. Our comprehensive approach ensures optimal transmission routes, right-of-way clearances, tower erection, conductor stringing, and precision testing for dependable energy distribution connecting solar plants to the central grid.',
    image: '/assets/images/91fff17c130fbfe7684a3e0e7fe83e3d5ca439c3.jpg',
    icon: Zap,
    stats: [
      { metric: '11kV–132kV', label: 'Voltage Evacuation Range' },
      { metric: '100%', label: 'Grid Synchronization Safety' },
      { metric: 'Tier-1', label: 'Conductors & Switchgear' },
    ],
    features: [
      'Route survey, terrain analysis, and regulatory approvals',
      'Tower design, conductor selection, and insulation engineering',
      'Substation site preparation, transformers, and switchgear installation',
      'Right-of-way clearing, tower erection, and conductor stringing',
      'Rigorous insulation, continuity, and earth resistance testing',
      'Long-term operational safety protocols and maintenance schedules',
    ],
    ctaLabel: 'Consult Transmission Engineers',
  },
  {
    id: 'ev-charging',
    eyebrow: 'Clean Mobility & Smart Microgrids',
    title: 'EV Charging Stations',
    subtitle: 'Comprehensive construction and deployment of safe, high-speed Electric Vehicle charging networks.',
    desc: 'JaiKisaan Solar delivers end-to-end EPC for EV charging stations, covering site selection, electrical load enhancement, civil foundations, transformer integration, and network communication. We offer AC slow chargers and DC ultra-fast chargers for commercial hubs, highway transit corridors, fleet operators, and green logistics parks.',
    image: '/assets/images/6ccdbd44a5f0faac8c8df2e0e92602d653ab6e54.jpg',
    icon: Battery,
    stats: [
      { metric: 'AC & DC', label: 'Fast Charging Protocols' },
      { metric: 'IoT Cloud', label: 'Automated Billing & Telemetry' },
      { metric: '99.8%', label: 'Station Uptime SLA' },
    ],
    features: [
      'Comprehensive site assessment, layout optimization, and civil works',
      'Dedicated power transformer, switchgear, and protective enclosures',
      'Municipal construction permits and DISCOM load enhancement approvals',
      'Network hardware and OCPP-compliant backend software integration',
      'Solar canopy integration with optional BESS battery buffer',
      'Testing, load balancing, commissioning, and staff operation training',
    ],
    ctaLabel: 'Plan EV Infrastructure',
  },
  {
    id: 'street-lights',
    eyebrow: 'Public Infrastructure & Rural Lighting',
    title: 'Solar Street Lights',
    subtitle: 'Illuminating streets, pathways, and public spaces with eco-friendly and cost-effective solar illumination.',
    desc: 'Jaikisaan Solar is committed to illuminating public spaces, highways, industrial corridors, and rural village pathways with durable, weather-proof solar street lights. Featuring dusk-to-dawn automatic sensors, high-efficiency LEDs, and smart lithium battery storage, our systems guarantee uninterrupted nighttime illumination with zero electricity bills.',
    image: '/assets/images/d051cf5fc13615be3fba2903ec3803486f48d58e.jpg',
    icon: Sun,
    stats: [
      { metric: '100%', label: 'Solar-Powered (Zero Grid Cost)' },
      { metric: 'IP65/IP66', label: 'All-Weather Durable Rating' },
      { metric: '5+ Years', label: 'Long Battery Lifecycle' },
    ],
    features: [
      'Standalone, Smart All-in-One, and Hybrid solar street light models',
      'Monocrystalline solar panels for maximum photon conversion',
      'Built-in Lithium Iron Phosphate (LiFePO4) battery storage',
      'Smart motion sensors and adaptive brightness dimming control',
      'Dusk-to-dawn automatic on/off operation without manual intervention',
      'Corrosion-resistant hot-dip galvanized poles and tamper-proof fixtures',
    ],
    ctaLabel: 'Order Street Light Survey',
  },
  {
    id: 'agri-pumps',
    eyebrow: 'PM-KUSUM Component B & C',
    title: 'Solar Agricultural Pumps',
    subtitle: 'Subsidized solar pumping systems empowering small and marginal farmers with zero-diesel irrigation.',
    desc: 'Empaneled under PM-KUSUM and state renewable agencies, JaiKisaan Solar delivers 3 HP to 15 HP standalone (Component B) and grid-connected (Component C) solar agricultural pumps. We manage the entire lifecycle — DPR feasibility, boring inspection, DISCOM subsidy clearance, Tier-1 hardware installation, and 5-year comprehensive on-site AMC.',
    image: '/assets/images/8cf9afdfdade266942ddb840b554b0834187be15.jpg',
    icon: Droplets,
    stats: [
      { metric: '60–90%', label: 'Combined Government Subsidy' },
      { metric: '₹0', label: 'Daytime Pumping Energy Cost' },
      { metric: '5 Years', label: 'Comprehensive On-Site AMC' },
    ],
    features: [
      'MNRE-empanelled and compliant with state nodal agencies (UPNEDA, RRECL)',
      'High-discharge submersible AC/DC pumps with dynamic solar VFD controllers',
      'Heavy hot-dip galvanized mounting structures with manual dual-axis tracking',
      'Water yield optimization even during severe summer groundwater dips',
      'Complete subsidy liaison — farmer pays only the subsidized balance',
      'IoT-enabled remote telemetry and automated dry-run protection',
    ],
    ctaLabel: 'Check Subsidy Eligibility',
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Site Survey & Energy Audit',
    desc: 'Our engineers visit your site, assess solar potential, measure roof/land area, and audit your existing electricity consumption patterns.',
  },
  {
    step: '02',
    title: 'DPR & Financial Modelling',
    desc: 'We prepare a Detailed Project Report with exact system sizing, generation estimates, subsidy calculations, payback period, and 25-year cash flow projections.',
  },
  {
    step: '03',
    title: 'Subsidy & Approvals',
    desc: 'Our regulatory team handles all government paperwork — PM-KUSUM applications, net metering approvals, DISCOM liaison, and subsidy disbursement follow-up.',
  },
  {
    step: '04',
    title: 'Procurement & Installation',
    desc: 'We procure Tier-1 hardware (Waaree/Adani panels, DJM/Havells BOS), install the system, and commission it with full SCADA monitoring integration.',
  },
  {
    step: '05',
    title: 'Monitoring & O&M',
    desc: 'Post-commissioning, we provide real-time SCADA monitoring, preventive maintenance, and rapid on-site response through our 5-year comprehensive AMC.',
  },
];

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_CATEGORIES = [
  'All (16)',
  'General Solar',
  'Cost & Installation',
  'System Types',
  'Subsidy & Net Metering',
  'Commercial & Industrial',
  'Maintenance & Support',
];

const ALL_FAQS: FAQItem[] = [
  // General Solar Questions
  {
    category: 'General Solar',
    question: 'What is solar energy?',
    answer: 'Solar energy is clean, renewable energy generated from sunlight using solar panels. The photovoltaic panels convert sunlight into direct current (DC) electricity, which is converted to alternating current (AC) by an inverter for your home or business.',
  },
  {
    category: 'General Solar',
    question: 'Can solar panels reduce my electricity bill?',
    answer: 'Yes, solar panels can reduce your monthly electricity expenses by 70% to 90% by substituting expensive grid power with free solar electricity and banking surplus power via net metering.',
  },
  {
    category: 'General Solar',
    question: 'Do solar panels work on cloudy days?',
    answer: 'Yes, solar panels continue to generate electricity using diffuse daylight on overcast or cloudy days, though generation is lower (approx. 15% to 30% of peak sunny yield).',
  },
  {
    category: 'General Solar',
    question: 'How long do solar panels last?',
    answer: 'Most quality Tier-1 solar panels (Waaree, Adani) are designed to last 25 to 30 years or more, backed by a 25-year linear performance warranty guaranteeing over 80% generation efficiency.',
  },

  // Cost, Installation and Savings
  {
    category: 'Cost & Installation',
    question: 'How much does a solar system cost?',
    answer: 'The cost depends on your electricity consumption, sanctioned load, system capacity, and mounting roof requirements. Sizable subsidies under PM Surya Ghar (up to ₹78,000) significantly lower net capital investment.',
  },
  {
    category: 'Cost & Installation',
    question: 'How much rooftop space is required?',
    answer: 'As a general planning benchmark, approximately 8 to 10 square metres (80 to 100 sq.ft) of shadow-free rooftop area is required for every 1 kW of installed solar capacity.',
  },
  {
    category: 'Cost & Installation',
    question: 'Can solar panels work at night?',
    answer: 'No. Solar panels generate power during daylight hours. At night, your facility seamlessly draws power from the utility grid or from an integrated battery energy storage system (BESS).',
  },

  // Types of Solar Systems
  {
    category: 'System Types',
    question: 'What is an on-grid solar system?',
    answer: 'An on-grid solar system is directly synchronized with the utility electricity grid, enabling automatic export of daytime surplus power for monthly bill credits via a bidirectional net meter.',
  },
  {
    category: 'System Types',
    question: 'What is an off-grid solar system?',
    answer: 'An off-grid system functions independently from the DISCOM grid using a battery bank (LiFePO4/Lead-Acid) to store solar electricity, making it ideal for rural farms and remote sites.',
  },
  {
    category: 'System Types',
    question: 'What is a hybrid solar system?',
    answer: 'A hybrid system combines the cost-efficiency of grid synchronization (net metering) with a dedicated battery buffer, guaranteeing seamless power continuity even during grid power cuts.',
  },

  // Subsidy and Net Metering
  {
    category: 'Subsidy & Net Metering',
    question: 'Is government subsidy available for solar installation?',
    answer: 'Yes. Eligible residential customers receive direct bank transfer subsidies up to ₹78,000 under the central PM Surya Ghar Muft Bijli Yojana. Farmers receive up to 60% combined subsidy under PM-KUSUM.',
  },
  {
    category: 'Subsidy & Net Metering',
    question: 'What is net metering?',
    answer: 'Net metering is a DISCOM billing mechanism allowing solar owners to export surplus daytime power to the grid and receive full kWh credits against electricity consumed at night.',
  },

  // Commercial and Industrial Solar
  {
    category: 'Commercial & Industrial',
    question: 'Can solar panels be installed in factories and offices?',
    answer: 'Yes. Commercial rooftop solar is ideal for factories, warehouses, cold storages, campuses, and corporate buildings to offset expensive daytime commercial tariffs and claim 40% accelerated depreciation under Section 32.',
  },
  {
    category: 'Commercial & Industrial',
    question: 'What is the payback period for commercial solar?',
    answer: 'Most commercial and industrial solar installations deliver complete capital payback within 3 to 4 years, delivering an attractive equity IRR exceeding 21% over a 25-year asset lifecycle.',
  },

  // Maintenance and Support
  {
    category: 'Maintenance & Support',
    question: 'Do solar panels require regular maintenance?',
    answer: 'Solar panels have no moving parts and require only periodic washing with clean water every 2 to 3 weeks. Jai Kisaan Solar provides 5-year comprehensive AMC with automated SCADA health alerts.',
  },
  {
    category: 'Maintenance & Support',
    question: 'How can I get a solar installation quotation?',
    answer: 'Contact Jai Kisaan Solar via our website consultation form or message our engineering desk on WhatsApp at +91 72399 92778. Share your latest electricity bill for a free same-day aerial feasibility study.',
  },
];

const Solutions: React.FC = () => {
  const [activeFaqCategory, setActiveFaqCategory] = useState('All (16)');

  const filteredFaqs = ALL_FAQS.filter((faq) => {
    if (activeFaqCategory === 'All (16)') return true;
    return faq.category === activeFaqCategory;
  });

  return (
  <>
    {/* Distinct Solutions Hero Banner (100vh) */}
    <div className="relative bg-surface-dark min-h-[calc(100vh-52px)] min-h-[calc(100dvh-52px)] flex flex-col justify-between overflow-hidden">
      {/* Background with panoramic solar array and ambient lighting */}
      <div className="absolute inset-0 opacity-25">
        <img
          src={asset('/assets/images/eb57feb6758b7ceae7f59bfdbdb688bdafb6b005.jpg')}
          alt="Solar farm panorama"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/70 via-surface-dark/85 to-surface-dark" />
      </div>

      {/* Decorative clean energy ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-lime/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Hero Content */}
      <section className="relative z-10 max-w-[1248px] mx-auto px-4 sm:px-6 w-full pt-28 sm:pt-32 pb-6 my-auto">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lime/10 border border-brand-lime/25 text-brand-lime text-[11px] font-mono font-semibold uppercase tracking-widest mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
            MNRE Empaneled · Turnkey EPC Solutions
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            Engineered for High-Yield Performance.
            <span className="block text-brand-lime font-bold mt-1">From 3 HP to 120 MWp.</span>
          </h1>
          <p className="font-body text-xs sm:text-sm md:text-base text-text-onDarkMuted mt-3 max-w-2xl mx-auto leading-relaxed">
            Bankable solar architecture designed for extreme heat, verified generation, and regulatory compliance under PM Surya Ghar and PM-KUSUM.
          </p>
        </div>

        {/* 6 Interactive Solution Sector Cards (Distinct 3x2 / 6-col Grid) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5 mb-6">
          {[
            {
              id: 'rooftop',
              icon: HomeIcon,
              title: 'Rooftop Solar',
              tag: 'Res & C&I',
              highlight: 'Up to ₹78k Subsidy',
            },
            {
              id: 'utility',
              icon: Building2,
              title: 'Utility-Scale',
              tag: 'MW Solar Parks',
              highlight: '21%+ Project IRR',
            },
            {
              id: 'transmission',
              icon: Zap,
              title: 'Substations',
              tag: '11kV / 33kV Lines',
              highlight: 'CEIG Approved',
            },
            {
              id: 'ev-charging',
              icon: Battery,
              title: 'EV Charging',
              tag: 'Commercial Depots',
              highlight: 'Solar-Coupled DC',
            },
            {
              id: 'street-lights',
              icon: Sun,
              title: 'Street Lighting',
              tag: 'Smart All-in-One',
              highlight: 'LiFePO4 Storage',
            },
            {
              id: 'agri-pumps',
              icon: Droplets,
              title: 'Agri Pumps',
              tag: 'PM-KUSUM B & C',
              highlight: 'Up to 60% DBT',
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  const el = document.getElementById(item.id);
                  if (el) {
                    const yOffset = -100;
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="group p-3.5 sm:p-4 rounded-2xl bg-[#1E2D26]/80 hover:bg-[#253930] border border-[#2B4234] hover:border-brand-lime/60 transition-all duration-300 text-left flex flex-col justify-between shadow-card hover:shadow-glow-lime/20"
              >
                <div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-brand-forest/60 group-hover:bg-brand-lime group-hover:text-[#17231D] text-brand-lime flex items-center justify-center transition-colors mb-2.5">
                    <Icon size={17} />
                  </div>
                  <div className="font-heading font-bold text-xs sm:text-sm text-white group-hover:text-brand-lime transition-colors leading-snug">
                    {item.title}
                  </div>
                  <div className="font-body text-[11px] text-text-onDarkMuted mt-0.5">
                    {item.tag}
                  </div>
                </div>
                <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-medium text-brand-lime/90 group-hover:text-brand-lime">
                    {item.highlight}
                  </span>
                  <ArrowRight size={11} className="text-[#A3B3AA] group-hover:text-brand-lime group-hover:translate-x-0.5 transition-all" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-brand-lime text-text-primary font-heading font-bold text-xs uppercase tracking-wider hover:bg-brand-limeHover transition-all shadow-glow-lime"
          >
            Request Technical Feasibility <ArrowRight size={14} />
          </Link>
          <a
            href="https://wa.me/917239992778"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-white font-heading font-semibold text-xs uppercase tracking-wider transition-colors border border-white/15"
          >
            <MessageCircle size={14} />
            Instant WhatsApp Helpline
          </a>
        </div>
      </section>

      {/* Stats bar anchored at bottom of banner */}
      <section className="relative z-10 bg-black/30 backdrop-blur-md border-t border-border-darkSubtle py-4 sm:py-5">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { metric: '120 MWp', label: 'Contracted & Pipeline Capacity' },
              { metric: '300+', label: 'Delivered Projects Across India' },
              { metric: '10+ Yrs', label: 'Solar EPC Experience (Est. 2015)' },
              { metric: '99.4%', label: 'Average Fleet Grid Sync' },
            ].map((s) => (
              <div key={s.metric} className="text-center">
                <div className="font-heading font-bold text-xl sm:text-2xl text-brand-lime">{s.metric}</div>
                <div className="font-body text-[11px] sm:text-xs text-text-onDarkMuted mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>

    {/* Quick Service Anchor Navigation */}
    <nav className="sticky top-16 sm:top-20 z-30 bg-[#17231D]/95 backdrop-blur-md border-t border-b border-border-darkSubtle py-2.5 px-6 shadow-md">
      <div className="max-w-container mx-auto flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar">
        {SOLUTIONS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => {
              const el = document.getElementById(s.id);
              if (el) {
                const yOffset = -100;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className="px-3.5 py-1.5 rounded-full text-xs font-heading font-medium text-text-onDark hover:text-brand-lime hover:bg-white/10 transition-colors whitespace-nowrap flex-shrink-0"
          >
            {s.title}
          </button>
        ))}
      </div>
    </nav>

    {/* Solutions detail sections */}
    {SOLUTIONS.map((sol, idx) => {
      const isEven = idx % 2 === 0;
      const Icon = sol.icon;
      return (
        <section
          key={sol.id}
          id={sol.id}
          className={`py-20 md:py-28 ${isEven ? 'bg-surface-page' : 'bg-surface-dark'}`}
        >
          <div className="max-w-container mx-auto px-6">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
              {/* Text side */}
              <div className={`flex flex-col gap-6 ${!isEven ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isEven ? 'bg-brand-forest/10' : 'bg-brand-lime/15'}`}>
                    <Icon size={18} className={isEven ? 'text-brand-forest' : 'text-brand-lime'} />
                  </div>
                  <span className={`text-xs font-body font-semibold uppercase tracking-widest ${isEven ? 'text-text-eyebrow' : 'text-brand-lime'}`}>
                    {sol.eyebrow}
                  </span>
                </div>
                <h2 className={`font-heading font-semibold text-3xl md:text-4xl leading-tight ${isEven ? 'text-text-primary' : 'text-text-onDark'}`}>
                  {sol.title}
                </h2>
                <p className={`font-body text-base leading-relaxed ${isEven ? 'text-text-secondary' : 'text-text-onDarkMuted'}`}>
                  {sol.desc}
                </p>

                {/* Features checklist */}
                <div className="flex flex-col gap-2.5">
                  {sol.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <CheckCircle size={15} className={`flex-shrink-0 mt-0.5 ${isEven ? 'text-brand-forest' : 'text-brand-lime'}`} />
                      <span className={`font-body text-sm ${isEven ? 'text-text-secondary' : 'text-text-onDarkMuted'}`}>{f}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className={`mt-2 inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl font-body font-semibold text-sm transition-colors w-full sm:w-auto self-start ${
                    isEven
                      ? 'bg-brand-forest text-white hover:bg-brand-forestLight border border-brand-forest'
                      : 'bg-brand-lime text-text-primary hover:bg-brand-limeHover'
                  }`}
                >
                  {sol.ctaLabel} <ArrowRight size={14} />
                </Link>
              </div>

              {/* Image + stats side */}
              <div className={`flex flex-col gap-4 ${!isEven ? 'lg:order-1' : ''}`}>
                <div className="rounded-2xl overflow-hidden h-60 sm:h-72 md:h-96">
                  <img
                    src={asset(sol.image)}
                    alt={sol.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {sol.stats.map((s) => (
                    <StatTile key={s.label} metric={s.metric} label={s.label} dark={!isEven} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    })}

    {/* Process section */}
    <section className="bg-surface-page py-20 md:py-28">
      <div className="max-w-container mx-auto px-6">
        <SectionHeading
          eyebrow="Our Process"
          title="From Survey to Solar in 5 Steps"
          subtitle="A streamlined, transparent process designed for maximum subsidy capture and zero downtime."
          align="center"
          className="mb-14"
        />
        <div className="grid md:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="flex flex-col gap-3 text-center">
              <div className="w-12 h-12 rounded-full bg-brand-forest text-white font-heading font-bold text-sm flex items-center justify-center mx-auto">
                {step.step}
              </div>
              <h3 className="font-heading font-semibold text-sm text-text-primary">{step.title}</h3>
              <p className="font-body text-xs text-text-secondary leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ section */}
    <section id="solar-faq" className="bg-surface-dark py-20 md:py-28">
      <div className="max-w-container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Common Questions About Solar"
              dark
              className="mb-6"
            />
            <p className="font-body text-sm text-text-onDarkMuted leading-relaxed">
              Have questions regarding system sizing, net metering, subsidy documentation or commercial payback? Our engineering team is also available directly on WhatsApp.
            </p>
            <div className="flex flex-col gap-2 mt-6">
              <span className="text-xs font-mono text-brand-lime font-bold uppercase tracking-wider">
                Filter by Category:
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {FAQ_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveFaqCategory(cat)}
                    className={`text-xs px-3 py-1.5 rounded-lg font-heading transition-colors ${
                      activeFaqCategory === cat
                        ? 'bg-brand-lime text-text-primary font-bold'
                        : 'bg-white/10 hover:bg-white/20 text-white/80'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://wa.me/917239992778"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-brand-lime text-text-primary font-body font-semibold text-sm hover:bg-brand-limeHover transition-colors shadow-glow-lime"
              >
                <MessageCircle size={14} />
                Ask Engineers on WhatsApp
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <FAQAccordion items={filteredFaqs} dark />
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-brand-forest py-16">
      <div className="max-w-container mx-auto px-6 text-center flex flex-col items-center gap-6">
        <h2 className="font-heading font-bold text-3xl text-white">Ready to Go Solar?</h2>
        <p className="font-body text-white/70 max-w-lg">
          Get a free, no-obligation feasibility report from our engineers — with exact subsidy calculations for your location.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-xl bg-white text-brand-forest font-body font-semibold text-sm hover:bg-brand-lime transition-colors"
          >
            Get Free Feasibility Report <ArrowRight size={15} />
          </Link>
          <a
            href="https://wa.me/917239992778"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-xl bg-brand-lime text-text-primary font-body font-semibold text-sm hover:bg-brand-limeHover transition-colors"
          >
            <MessageCircle size={15} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  </>
  );
};

export default Solutions;

