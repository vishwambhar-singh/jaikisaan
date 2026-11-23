import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Sun, Battery, Droplets, Building2, Home as HomeIcon, MessageCircle } from 'lucide-react';
import { asset } from '../lib/assets';
import SectionHeading from '../components/SectionHeading';
import Badge from '../components/Badge';
import StatTile from '../components/StatTile';
import FAQAccordion from '../components/FAQAccordion';

const SOLUTIONS = [
  {
    id: 'agri-pumps',
    eyebrow: 'PM-KUSUM Component B & C',
    title: 'Solar Agricultural Pumps',
    subtitle: 'Subsidised solar pump sets for small and marginal farmers — from 3 HP to 15 HP.',
    desc: 'JaiKisaan Solar is an MNRE-empanelled installer for PM-KUSUM Component B (standalone solar pumps) and Component C (solarisation of existing grid-connected pumps). We handle the entire lifecycle — DPR preparation, subsidy application, procurement of Tier-1 hardware, installation, and 5-year comprehensive AMC.',
    image: '/assets/images/8cf9afdfdade266942ddb840b554b0834187be15.jpg',
    icon: Droplets,
    stats: [
      { metric: '60–90%', label: 'Central + State Subsidy' },
      { metric: '850+', label: 'Pumps Installed' },
      { metric: '₹0', label: 'Electricity Cost' },
    ],
    features: [
      'PM-KUSUM Component B & C compliant',
      'MNRE-approved pump controllers',
      '3 HP to 15 HP capacity range',
      'Remote monitoring via IoT-enabled SCADA',
      'Waaree / Adani Tier-1 panels',
      '5-year comprehensive AMC included',
    ],
    ctaLabel: 'Check Subsidy Eligibility',
  },
  {
    id: 'commercial-rooftop',
    eyebrow: 'Commercial & Residential',
    title: 'Rooftop Solar Systems',
    subtitle: 'On-grid net-metered rooftop systems for businesses, institutions, and housing societies.',
    desc: 'Turnkey rooftop solar EPC for commercial establishments, educational institutions, hospitals, and residential societies. Our systems are designed for maximum self-consumption with net metering, reducing your electricity bill by 70–90%. We handle DISCOM liaison, net metering approvals, and system commissioning.',
    image: '/assets/images/709f7acc5449a720085baaeae6b5d101de5ffa01.jpg',
    icon: HomeIcon,
    stats: [
      { metric: '30%', label: 'Central Subsidy (Residential)' },
      { metric: '70–90%', label: 'Bill Reduction' },
      { metric: '3–4 yrs', label: 'Payback Period' },
    ],
    features: [
      'Net metering compliant (UPPCL, JVVNL, MPEB)',
      'Grid-tied and hybrid configurations',
      'Central subsidy eligible for residential',
      'Turnkey EPC — survey to commissioning',
      'SCADA remote monitoring dashboard',
      '25-year performance warranty',
    ],
    ctaLabel: 'Get Rooftop Assessment',
  },
  {
    id: 'cold-storage',
    eyebrow: 'Cold Chain & Agri-Processing',
    title: 'Cold Storage Solar Microgrids',
    subtitle: 'Purpose-engineered solar + battery microgrids for cold chain operators and agri-processors.',
    desc: 'Cold storage facilities run 24×7 with high base loads — making them ideal candidates for solar captive power. JaiKisaan Solar designs hybrid solar microgrids that eliminate diesel dependency, reduce per-unit electricity cost by 65–80%, and qualify for carbon credits under VCS (Verra).',
    image: '/assets/images/4a6b7a1e0185bb9386a7deca9c1a6f11d5176053.jpg',
    icon: Battery,
    stats: [
      { metric: '65–80%', label: 'Electricity Cost Reduction' },
      { metric: '42', label: 'Cold Storages Energized' },
      { metric: '99.2%', label: 'Uptime Guarantee' },
    ],
    features: [
      'Hybrid solar + battery + grid configuration',
      'Ammonia compressor surge load management',
      'Carbon credit eligible (VCS / Verra)',
      'Diesel generator elimination',
      'Cold chain uptime optimised design',
      'Real-time SCADA telemetry',
    ],
    ctaLabel: 'Request Cold Storage DPR',
  },
  {
    id: 'ground-mount',
    eyebrow: 'Industrial & Captive Power',
    title: 'Ground-Mount & C&I Systems',
    subtitle: 'Large-scale ground-mount and rooftop captive power plants for industrial and commercial facilities.',
    desc: 'For factories, warehouses, textile mills, and industrial parks with high connected loads, JaiKisaan Solar engineers ground-mount and large rooftop captive power plants from 100 kWp to 10 MWp. We offer both CapEx and OpEx (RESCO/PPA) models with detailed DPR, financial modelling, and lender-ready documentation.',
    image: '/assets/images/86f4a949d08f6296a12f8e095d8f906c5f5481b1.jpg',
    icon: Building2,
    stats: [
      { metric: '10 MWp', label: 'Max System Size' },
      { metric: '21%+', label: 'Project IRR' },
      { metric: '₹18 Cr+', label: 'Monthly Client Savings' },
    ],
    features: [
      '100 kWp to 10 MWp system capacity',
      'CapEx and OpEx (RESCO/PPA) models',
      'Open-access and wheeling arrangements',
      'Accelerated depreciation (Section 32)',
      'Bankable DPR for lender submission',
      'EPC + 25-year O&M contracts',
    ],
    ctaLabel: 'Get Industrial Quote',
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

const FAQS = [
  {
    question: 'What is the typical payback period for a commercial solar system?',
    answer: 'For commercial and industrial systems in North India, the typical payback period is 3–5 years depending on system size, electricity tariff, and subsidy availability. With accelerated depreciation benefits under Section 32 of the Income Tax Act, the effective payback can be as low as 2.5 years.',
  },
  {
    question: 'How does PM-KUSUM subsidy work for agricultural solar pumps?',
    answer: 'PM-KUSUM provides up to 60% central subsidy (30% central + 30% state) for standalone solar pumps (Component B) and solarisation of existing grid-connected pumps (Component C). The farmer pays only 40% of the system cost. JaiKisaan Solar handles the entire application, documentation, and disbursement process.',
  },
  {
    question: 'Do you offer OpEx / RESCO / PPA models?',
    answer: 'Yes. For large industrial and commercial projects (typically 200 kWp and above), we offer OpEx models where JKS owns the system and you pay a fixed per-unit tariff — typically 30–40% lower than your current grid tariff. No upfront capital required.',
  },
  {
    question: 'What panels and inverters do you use?',
    answer: 'We use only Tier-1 BIS-certified panels (Waaree, Adani Solar, Vikram Solar) and MNRE-approved inverters (Havells, Growatt, Sungrow). All BOS components are DJM/Havells. We do not use unbranded or uncertified hardware.',
  },
  {
    question: 'Which states do you operate in?',
    answer: 'JaiKisaan Solar is currently operational in Uttar Pradesh (Lucknow, Barabanki, Gorakhpur, Varanasi), Rajasthan (Jaipur, Jodhpur, Udaipur), Madhya Pradesh, and Gujarat. We are empanelled with 8 state nodal agencies including UPNEDA, RRECL, MPUVNL, RREC, KREDL, HAREDA, and GETCO.',
  },
  {
    question: 'What warranty and maintenance support do you provide?',
    answer: 'All systems come with a 25-year panel performance warranty, 5–10 year inverter warranty, and 5-year comprehensive AMC from JKS. Our O&M team provides remote SCADA monitoring, quarterly preventive maintenance, and 72-hour on-site emergency response.',
  },
];

const Solutions: React.FC = () => (
  <>
    {/* Hero */}
    <section className="relative bg-surface-dark py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img
          src={asset('/assets/images/eb57feb6758b7ceae7f59bfdbdb688bdafb6b005.jpg')}
          alt="Solar farm panorama"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/60 to-surface-dark" />
      </div>
      <div className="relative z-10 max-w-container mx-auto px-6">
        <div className="max-w-3xl flex flex-col gap-6">
          <Badge variant="dark">Our Solutions</Badge>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-text-onDark leading-tight">
            Powering Every Possibility.
          </h1>
          <p className="font-body text-lg text-text-onDarkMuted leading-relaxed max-w-2xl">
            From 3 HP agricultural pump sets to 10 MWp industrial captive plants — JaiKisaan Solar delivers bankable, MNRE-certified solar solutions engineered for India&apos;s diverse energy needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-brand-forest text-white font-body font-semibold text-sm hover:bg-brand-forestLight transition-colors border border-brand-forest w-full sm:w-auto"
            >
              Get Free Feasibility Report <ArrowRight size={15} />
            </Link>
            <a
              href="https://wa.me/917239992778"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-brand-lime text-text-primary font-body font-semibold text-sm hover:bg-brand-limeHover transition-colors w-full sm:w-auto"
            >
              <MessageCircle size={15} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Stats bar */}
    <section className="bg-surface-dark border-t border-border-darkSubtle py-8">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { metric: '28.4 MWp', label: 'Installed Capacity' },
            { metric: '1,420+', label: 'Farm Installations' },
            { metric: '42', label: 'Cold Storages Energized' },
            { metric: '99.2%', label: 'System Uptime' },
          ].map((s) => (
            <div key={s.metric} className="text-center">
              <div className="font-heading font-bold text-2xl text-brand-lime">{s.metric}</div>
              <div className="font-body text-xs text-text-onDarkMuted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

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
    <section className="bg-surface-dark py-20 md:py-28">
      <div className="max-w-container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Common Questions About Solar"
              dark
              className="mb-8"
            />
            <p className="font-body text-sm text-text-onDarkMuted leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Our engineering team is available on WhatsApp for instant answers.
            </p>
            <a
              href="https://wa.me/917239992778"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-brand-lime text-text-primary font-body font-semibold text-sm hover:bg-brand-limeHover transition-colors"
            >
              <MessageCircle size={14} />
              Ask on WhatsApp
            </a>
          </div>
          <div>
            <FAQAccordion items={FAQS} dark />
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
          <a
            href="/contact"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-xl bg-white text-brand-forest font-body font-semibold text-sm hover:bg-brand-lime transition-colors"
          >
            Get Free Feasibility Report <ArrowRight size={15} />
          </a>
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

export default Solutions;

