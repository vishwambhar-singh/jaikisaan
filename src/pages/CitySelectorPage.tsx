import React, { useState } from 'react';
import { 
  MapPin, CheckCircle, ArrowRight, Sun, Droplets, Zap, Shield, Phone, 
  ExternalLink, Building2, Sliders, Sparkles, AlertCircle, Database, Layers, Code, Check,
  Clock, MessageCircle
} from 'lucide-react';
import { useCity, CITIES, CITY_DETAILS, City } from '../context/CityContext';

// ─── Local Installations Data ────────────────────────────────────────────────
const LOCAL_INSTALLATIONS = [
  {
    title: 'Chomu Agro Feeder Installation',
    area: 'Jaipur rural belt',
    stat: '12,000 Liters / hr',
    capacity: '7.5 HP Submersible',
    image: '/assets/images/91fff17c130fbfe7684a3e0e7fe83e3d5ca439c3.jpg',
  },
  {
    title: 'Bassi Vegetable Cluster',
    area: 'Jaipur East ring',
    stat: '18,500 Liters / hr',
    capacity: '10 HP Surface Pump',
    image: '/assets/images/5be129ff0eab27a57ee6c861001a327d9c19cd89.jpg',
  },
  {
    title: 'Phulera Seed Processing Farm',
    area: 'Jaipur West outskirts',
    stat: '30,000 kWh / yr',
    capacity: '25 kWp Ground Array',
    image: '/assets/images/3712df8d0ed3a730f764212b2da268c26dd7890b.jpg',
  },
];

const CitySelectorPage: React.FC = () => {
  const { activeCity, setActiveCity, setModalOpen, cityData } = useCity();
  const [selectedState, setSelectedState] = useState<1 | 2 | 3>(1);
  const [activeTab, setActiveTab] = useState<'tokens' | 'interactive'>('tokens');

  return (
    <>
      {/* ─── 1. Hero: Foundations and City Selector Architecture ─────────────── */}
      <section className="bg-white pt-24 pb-12 md:pt-28 md:pb-16 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
            <span className="text-[11px] font-mono font-semibold text-[#6E776F] uppercase tracking-widest">
              Master specification Section 1 of 4 / DS-REV-2024.11
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
            <div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#17231D] leading-[1.08] tracking-tight">
                Foundations and city selector<br />
                architecture
              </h1>

              <p className="font-body text-xs sm:text-sm md:text-base text-[#4E564F] mt-3 leading-relaxed max-w-2xl">
                Core design tokens, exact typography scales, spatial increments, and complete functional prototype for the multi state localized solar experience.
              </p>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0 pt-2">
              <button 
                onClick={() => setActiveTab('tokens')}
                className={`h-10 px-5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-colors ${
                  activeTab === 'tokens'
                    ? 'bg-[#17231D] text-white shadow-card'
                    : 'bg-white text-[#17231D] border border-[#E8EAE3] hover:border-[#17231D]'
                }`}
              >
                Token system
              </button>
              <button
                onClick={() => {
                  setActiveTab('interactive');
                  setModalOpen(true);
                }}
                className={`h-10 px-5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-colors ${
                  activeTab === 'interactive'
                    ? 'bg-[#17231D] text-white shadow-card'
                    : 'bg-white text-[#17231D] border border-[#E8EAE3] hover:border-[#17231D]'
                }`}
              >
                Interactive city switcher
              </button>
            </div>
          </div>

          {/* 4 Foundation Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-[#E8EAE3] rounded-2xl overflow-hidden bg-[#F9FAF4]">
            <div className="p-4 sm:p-5 border-r border-b lg:border-b-0 border-[#E8EAE3]">
              <div className="text-[9px] sm:text-[10px] font-mono text-[#6E776F] uppercase tracking-wider mb-1">Primary typeface</div>
              <div className="font-heading font-bold text-base sm:text-lg text-[#17231D]">Manrope</div>
              <div className="text-[11px] sm:text-xs font-body text-[#6E776F] mt-0.5">Semibold, Medium, Regular only</div>
            </div>
            <div className="p-4 sm:p-5 border-b lg:border-b-0 lg:border-r border-[#E8EAE3]">
              <div className="text-[9px] sm:text-[10px] font-mono text-[#6E776F] uppercase tracking-wider mb-1">Numeric tracking</div>
              <div className="font-heading font-bold text-base sm:text-lg text-[#17231D]">Geist Mono</div>
              <div className="text-[11px] sm:text-xs font-body text-[#6E776F] mt-0.5">All metrics, metrics, tariffs</div>
            </div>
            <div className="p-4 sm:p-5 border-r border-[#E8EAE3]">
              <div className="text-[9px] sm:text-[10px] font-mono text-[#6E776F] uppercase tracking-wider mb-1">State adaptations</div>
              <div className="font-heading font-bold text-base sm:text-lg text-[#17231D]">13 cities</div>
              <div className="text-[11px] sm:text-xs font-body text-[#6E776F] mt-0.5">Rajasthan, UP, MP, PB, DL</div>
            </div>
            <div className="p-4 sm:p-5">
              <div className="text-[9px] sm:text-[10px] font-mono text-[#6E776F] uppercase tracking-wider mb-1">Dynamic components</div>
              <div className="font-heading font-bold text-base sm:text-lg text-[#17231D]">7 localized blocks</div>
              <div className="text-[11px] sm:text-xs font-body text-[#6E776F] mt-0.5">Hero, teams, projects, subsidy</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. Design Tokens: The 27 Exact Manrope Typographic Tokens ───────── */}
      <section className="bg-[#F9FAF4] py-16 md:py-20 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="mb-10">
            <span className="text-[11px] font-mono font-bold text-[#005733] uppercase tracking-widest block mb-1">
              TT Foundation token set
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#17231D] tracking-tight">
              The 27 exact Manrope typographic tokens
            </h2>
            <p className="font-body text-xs sm:text-sm text-[#4E564F] mt-2 max-w-2xl leading-relaxed">
              Strictly verified styling ladder. No hyphens inside display titles. No italics. Weights locked to Semibold, Medium, and Regular.
            </p>
          </div>

          {/* 3 Typography Columns */}
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Column 1: Headings (6 styles) */}
            <div className="bg-white rounded-3xl border border-[#E8EAE3] p-6 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E8EAE3] text-xs font-mono">
                  <span className="font-bold text-[#17231D]">Headings (6 styles)</span>
                  <span className="text-[#6E776F]">60px to 20px</span>
                </div>

                <div className="flex flex-col gap-5 pt-4">
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#6E776F] mb-1">
                      <span>Heading 1</span>
                      <span>60/68 Semibold</span>
                    </div>
                    <div className="font-heading font-bold text-xl sm:text-2xl text-[#17231D] leading-tight">
                      Solar infrastructure utility scale
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#6E776F] mb-1">
                      <span>Heading 2</span>
                      <span>48/48 Semibold</span>
                    </div>
                    <div className="font-heading font-bold text-lg sm:text-xl text-[#17231D] leading-tight">
                      Agricultural pumping solutions
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#6E776F] mb-1">
                      <span>Heading 3</span>
                      <span>36/40 Semibold</span>
                    </div>
                    <div className="font-heading font-bold text-base sm:text-lg text-[#17231D]">
                      Clean power for Indian farmers
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#6E776F] mb-1">
                      <span>Heading 4</span>
                      <span>30/36 Semibold</span>
                    </div>
                    <div className="font-heading font-bold text-sm sm:text-base text-[#17231D]">
                      Submersible pump technology
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#6E776F] mb-1">
                      <span>Heading 5</span>
                      <span>24/32 Semibold</span>
                    </div>
                    <div className="font-heading font-bold text-xs sm:text-sm text-[#17231D]">
                      High torque surface pump rigs
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#6E776F] mb-1">
                      <span>Heading 6</span>
                      <span>20/28 Semibold</span>
                    </div>
                    <div className="font-heading font-bold text-xs text-[#17231D]">
                      Central solar clearance protocols
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Titles and body (11 styles) */}
            <div className="bg-white rounded-3xl border border-[#E8EAE3] p-6 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E8EAE3] text-xs font-mono">
                  <span className="font-bold text-[#17231D]">Titles and body (11 styles)</span>
                  <span className="text-[#6E776F]">20px to 14px</span>
                </div>

                <div className="flex flex-col gap-4 pt-4 text-xs">
                  <div className="p-3 rounded-xl bg-[#F9FAF4] border border-[#E8EAE3]">
                    <span className="text-[10px] font-mono text-[#6E776F] block">Title 1 - 20/28 Medium</span>
                    <span className="font-heading font-semibold text-[#17231D]">Regional microgrid controller spec</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F9FAF4] border border-[#E8EAE3]">
                    <span className="text-[10px] font-mono text-[#6E776F] block">Title 2 - 18/26 Medium</span>
                    <span className="font-heading font-semibold text-[#17231D]">Dedicated feeder separation update</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F9FAF4] border border-[#E8EAE3]">
                    <span className="text-[10px] font-mono text-[#6E776F] block">Title 3 - 16/24 Medium</span>
                    <span className="font-heading font-semibold text-[#17231D]">High ambient temperature silicon cells</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F9FAF4] border border-[#E8EAE3]">
                    <span className="text-[10px] font-mono text-[#6E776F] block">Title 4 &amp; 5 - 14/20 &amp; 12/16 Medium</span>
                    <span className="font-body text-[#17231D]">Direct current distribution switchgear</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F9FAF4] border border-[#E8EAE3] flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-[#6E776F]">Body 1, 2, 3 - 16/24 (SB / Med / Reg)</span>
                    <span className="font-semibold text-[#17231D]">Body 1 Semibold: Solar field arrays</span>
                    <span className="font-medium text-[#4E564F]">Body 2 Medium: Balanced three phase supply</span>
                    <span className="font-normal text-[#4E564F]">Body 3 Regular: Reliable water lift for crops</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F9FAF4] border border-[#E8EAE3] flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-[#6E776F]">Body 4, 5, 6 - 14/20 (SB / Med / Reg)</span>
                    <span className="font-semibold text-[#17231D]">Body 4 Semibold: Subsidy disbursement note</span>
                    <span className="font-medium text-[#4E564F]">Body 5 Medium: DISCOM meter sync status</span>
                    <span className="font-normal text-[#4E564F]">Body 6 Regular: Standard maintenance charter</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Buttons and captions (10 styles) */}
            <div className="bg-white rounded-3xl border border-[#E8EAE3] p-6 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E8EAE3] text-xs font-mono">
                  <span className="font-bold text-[#17231D]">Buttons and captions (10 styles)</span>
                  <span className="text-[#6E776F]">18px to 12px</span>
                </div>

                <div className="flex flex-col gap-4 pt-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#F9FAF4] border border-[#E8EAE3]">
                    <span className="text-[10px] font-mono text-[#6E776F] block mb-2">
                      Button-lg (18/28 SB) &amp; Button-md (16/24 SB)
                    </span>
                    <div className="flex items-center gap-2">
                      <button className="h-8 px-4 rounded-lg bg-[#17231D] text-white text-[11px] font-bold">
                        Button-lg action
                      </button>
                      <button className="h-8 px-3 rounded-lg bg-white border border-[#E8EAE3] text-[#17231D] text-[11px] font-bold">
                        Button-md action
                      </button>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F9FAF4] border border-[#E8EAE3]">
                    <span className="text-[10px] font-mono text-[#6E776F] block mb-2">
                      Button-sm (14/20 SB) &amp; Button-Xsm (12/16 SB)
                    </span>
                    <div className="flex items-center gap-2">
                      <button className="h-7 px-3 rounded-md bg-[#17231D] text-white text-[10px] font-bold">
                        Button-sm
                      </button>
                      <button className="h-7 px-2.5 rounded-md bg-white border border-[#E8EAE3] text-[#17231D] text-[10px] font-bold">
                        Button-Xsm
                      </button>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F9FAF4] border border-[#E8EAE3] flex flex-col gap-1 text-[11px] font-mono text-[#4E564F]">
                    <span className="text-[10px] text-[#6E776F] uppercase">Caption 1, 2 - 14/20 (Med / Reg)</span>
                    <span>Caption 1: Real time telemetry status live</span>
                    <span>Caption 2: Updated hourly from local feeder</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F9FAF4] border border-[#E8EAE3] flex flex-col gap-1 text-[11px] font-mono text-[#4E564F]">
                    <span className="text-[10px] text-[#6E776F] uppercase">Caption 3, 4, 5 - 12/16 (SB / Med / Reg)</span>
                    <span>Caption 3: PM Surya Ghar compliance seal</span>
                    <span>Caption 4: Authorized empanelled agency token</span>
                    <span>Caption 5: Ground anchor tolerance 25 mm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spacing Matrix & Radius/Motion Matrix (Image 2) */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            
            {/* Spacing Variables Matrix */}
            <div className="bg-white rounded-3xl border border-[#E8EAE3] p-7 shadow-card">
              <div className="flex items-center justify-between pb-4 border-b border-[#E8EAE3] text-xs font-mono">
                <div>
                  <h3 className="font-heading font-bold text-sm text-[#17231D]">Spacing variables matrix</h3>
                  <span className="text-[11px] text-[#6E776F]">13 locked steps from Spacing 0 to Spacing 900</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#F3F4EE] text-[10px] font-mono font-bold text-[#17231D]">
                  8px grid aligned
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 pt-4 text-xs font-mono">
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#F9FAF4] flex justify-between">
                  <span className="text-[#6E776F]">Spacing 0</span>
                  <span className="font-bold text-[#005733]">0 px</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#F9FAF4] flex justify-between">
                  <span className="text-[#6E776F]">Spacing 25</span>
                  <span className="font-bold text-[#005733]">2 px</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#F9FAF4] flex justify-between">
                  <span className="text-[#6E776F]">Spacing 50</span>
                  <span className="font-bold text-[#005733]">4 px</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#F9FAF4] flex justify-between">
                  <span className="text-[#6E776F]">Spacing 75</span>
                  <span className="font-bold text-[#005733]">6 px</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#F9FAF4] flex justify-between">
                  <span className="text-[#6E776F]">Spacing 100</span>
                  <span className="font-bold text-[#005733]">12 px</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#F9FAF4] flex justify-between">
                  <span className="text-[#6E776F]">Spacing 200</span>
                  <span className="font-bold text-[#005733]">16 px</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#F9FAF4] flex justify-between">
                  <span className="text-[#6E776F]">Spacing 300</span>
                  <span className="font-bold text-[#005733]">24 px</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#F9FAF4] flex justify-between">
                  <span className="text-[#6E776F]">Spacing 400</span>
                  <span className="font-bold text-[#005733]">32 px</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#F9FAF4] flex justify-between">
                  <span className="text-[#6E776F]">Spacing 500</span>
                  <span className="font-bold text-[#005733]">40 px</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#F9FAF4] flex justify-between">
                  <span className="text-[#6E776F]">Spacing 600</span>
                  <span className="font-bold text-[#005733]">48 px</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#F9FAF4] flex justify-between">
                  <span className="text-[#6E776F]">Spacing 700</span>
                  <span className="font-bold text-[#005733]">64 px</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#F9FAF4] flex justify-between">
                  <span className="text-[#6E776F]">Spacing 800</span>
                  <span className="font-bold text-[#005733]">80 px</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#F9FAF4] flex justify-between col-span-2 sm:col-span-3">
                  <span className="text-[#6E776F]">Spacing 900</span>
                  <span className="font-bold text-[#005733]">96 px</span>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-[#F9FAF4] border border-[#E8EAE3] text-xs font-mono text-[#4E564F]">
                <strong className="text-[#17231D]">Button standard padding token:</strong><br />
                8px vertical, 12px horizontal (Fixed tap height 48px on mobile)
              </div>
            </div>

            {/* Radius and Motion Tokens */}
            <div className="bg-white rounded-3xl border border-[#E8EAE3] p-7 shadow-card">
              <div className="flex items-center justify-between pb-4 border-b border-[#E8EAE3] text-xs font-mono">
                <div>
                  <h3 className="font-heading font-bold text-sm text-[#17231D]">Radius and motion tokens</h3>
                  <span className="text-[11px] text-[#6E776F]">Geometry specifications and physics timing</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#F3F4EE] text-[10px] font-mono font-bold text-[#17231D]">
                  Easing locked
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 text-xs font-mono">
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#F9FAF4] text-center">
                  <div className="text-[9px] sm:text-[10px] text-[#6E776F]">Radius 2</div>
                  <div className="font-bold text-[#17231D] mt-0.5">2 px</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#F9FAF4] text-center">
                  <div className="text-[9px] sm:text-[10px] text-[#6E776F]">Radius 4</div>
                  <div className="font-bold text-[#17231D] mt-0.5">4 px</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#F9FAF4] text-center">
                  <div className="text-[9px] sm:text-[10px] text-[#6E776F]">Radius 6</div>
                  <div className="font-bold text-[#17231D] mt-0.5">6 px</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#F9FAF4] text-center">
                  <div className="text-[9px] sm:text-[10px] text-[#6E776F]">Radius 8</div>
                  <div className="font-bold text-[#17231D] mt-0.5">8 px</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#F9FAF4] text-center">
                  <div className="text-[9px] sm:text-[10px] text-[#6E776F]">Radius 12</div>
                  <div className="font-bold text-[#17231D] mt-0.5">12 px</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#F9FAF4] text-center">
                  <div className="text-[9px] sm:text-[10px] text-[#6E776F]">Radius 16</div>
                  <div className="font-bold text-[#17231D] mt-0.5">16 px</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#F9FAF4] text-center">
                  <div className="text-[9px] sm:text-[10px] text-[#6E776F]">Radius 24</div>
                  <div className="font-bold text-[#17231D] mt-0.5">24 px</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#F9FAF4] text-center">
                  <div className="text-[9px] sm:text-[10px] text-[#6E776F]">Radius full</div>
                  <div className="font-bold text-[#17231D] mt-0.5">9999 px</div>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-4 mt-2 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-[#F9FAF4] flex items-center justify-between">
                  <span className="text-[#4E564F]">Layout expansion (Sheet drops and state changes)</span>
                  <span className="font-bold text-[#005733]">500 ms</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#F9FAF4] flex items-center justify-between">
                  <span className="text-[#4E564F]">Component hover (Card focus and button states)</span>
                  <span className="font-bold text-[#005733]">300 ms</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#F9FAF4] flex items-center justify-between">
                  <span className="text-[#4E564F]">Scroll reveal (Section entrance animations)</span>
                  <span className="font-bold text-[#005733]">700 ms</span>
                </div>
              </div>

              <div className="mt-3 p-2.5 rounded-xl bg-[#F9FAF4] text-[11px] font-mono text-[#6E776F]">
                Physics curve: <code className="text-[#17231D]">cubic-bezier(0.22, 1, 0.36, 1)</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. City Selector Interactive State Testbed ───────────────────────── */}
      <section className="bg-[#F9FAF4] py-12 md:py-16 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          {/* Testbed Header */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-mono text-[#005733]">✦</span>
            <span className="text-[11px] font-mono font-semibold text-[#6E776F] uppercase tracking-widest">
              City selector interactive state testbed
            </span>
          </div>
          <p className="font-body text-xs text-[#4E564F] mb-6 max-w-3xl">
            Toggle live between State 1 (Jaipur default prompt), State 2 (Full sheet search open), and State 3 (Lucknow localized render).
          </p>

          {/* State tabs */}
          <div className="flex items-center gap-2 mb-8">
            <button
              onClick={() => {
                setSelectedState(1);
                setActiveCity('Jaipur');
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-heading font-semibold transition-all border ${
                selectedState === 1
                  ? 'bg-white border-[#17231D] text-[#17231D] shadow-card font-bold'
                  : 'bg-white border-[#E8EAE3] text-[#6E776F] hover:border-[#C8D0C3]'
              }`}
            >
              State 1: Prompt
            </button>
            <button
              onClick={() => {
                setSelectedState(2);
                setModalOpen(true);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-heading font-semibold transition-all border ${
                selectedState === 2
                  ? 'bg-white border-[#17231D] text-[#17231D] shadow-card font-bold'
                  : 'bg-white border-[#E8EAE3] text-[#6E776F] hover:border-[#C8D0C3]'
              }`}
            >
              State 2: Sheet
            </button>
            <button
              onClick={() => {
                setSelectedState(3);
                setActiveCity('Lucknow');
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-heading font-semibold transition-all border ${
                selectedState === 3
                  ? 'bg-white border-[#17231D] text-[#17231D] shadow-card font-bold'
                  : 'bg-white border-[#E8EAE3] text-[#6E776F] hover:border-[#C8D0C3]'
              }`}
            >
              State 3: Lucknow (7 blocks)
            </button>
          </div>

          {/* Show solar details prompt */}
          <div className="bg-white rounded-2xl border border-[#E8EAE3] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 shadow-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C5F176] flex items-center justify-center text-lg flex-shrink-0">
                ⚡
              </div>
              <div>
                <div className="font-heading font-bold text-sm text-[#17231D]">
                  Show solar details for your city?
                </div>
                <div className="text-xs font-body text-[#6E776F]">
                  {activeCity} preselected based on regional telemetry
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveCity('Jaipur')}
                className="h-9 px-4 rounded-lg bg-[#17231D] text-white text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#005733] transition-colors"
              >
                Confirm Jaipur
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="h-9 px-4 rounded-lg bg-white text-[#17231D] text-xs font-heading font-bold uppercase tracking-wider border border-[#E8EAE3] hover:border-[#005733] transition-colors"
              >
                Change city
              </button>
            </div>
          </div>

          {/* Active view bar */}
          <div className="bg-[#F3F4EE] rounded-2xl border border-[#E8EAE3] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-md bg-[#17231D] text-[#C5F176] text-[10px] font-mono font-bold uppercase">
                ACTIVE VIEW
              </span>
              <span className="font-heading font-bold text-base text-[#17231D]">
                {activeCity} Headquarters ({activeCity === 'Jaipur' ? 'Default' : 'Active Context'})
              </span>
            </div>
            <span className="text-xs font-mono text-[#6E776F]">
              Observing 7 localized blocks
            </span>
          </div>
        </div>
      </section>

      {/* ─── 4. Block 1: Agricultural Solar Pumping Hero Card (Image 2) ──────── */}
      <section className="bg-[#F9FAF4] py-8 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="bg-white rounded-3xl border border-[#E8EAE3] p-8 md:p-12 shadow-card">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
              <span className="text-[11px] font-mono font-medium text-[#6E776F] uppercase tracking-widest">
                {cityData.state === 'Rajasthan' ? 'Rajasthan central distribution grid' : 'Uttar Pradesh power transmission corridor'}
              </span>
              <span className="px-2 py-0.5 rounded bg-[#FEF3C7] text-[10px] font-mono font-bold text-[#92400E] uppercase">
                CHANGED BLOCK 1
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#17231D] leading-[1.1] tracking-tight max-w-xl mb-4">
              Agricultural solar pumping systems built for {cityData.state === 'Rajasthan' ? 'Rajasthan' : 'UP'} farms
            </h2>

            <p className="font-body text-xs sm:text-sm md:text-base text-[#4E564F] leading-relaxed max-w-xl mb-6">
              Empaneled high yield solar pump sets engineered to endure arid groundwater drawdown with instant central subsidy approval.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="h-11 px-5 rounded-xl bg-[#17231D] text-white text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#005733] transition-colors inline-flex items-center gap-2"
              >
                Get a free quote
              </a>
              <a
                href="/contact"
                className="h-11 px-5 rounded-xl bg-[#005733] text-white text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#004729] transition-colors inline-flex items-center gap-2"
              >
                Talk to an agricultural engineer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. Three Info Cards: Local Team / Policy / Savings (Image 2) ────── */}
      <section className="bg-[#F9FAF4] py-8 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">

            {/* Card 1: Your local team (Block 2) */}
            <div className="bg-white rounded-3xl border border-[#E8EAE3] p-6 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-bold text-sm text-[#17231D]">Your local team</span>
                  <span className="px-2 py-0.5 rounded bg-[#FEF3C7] text-[10px] font-mono font-bold text-[#92400E] uppercase">
                    CHANGED BLOCK 2
                  </span>
                </div>
                <p className="font-body text-xs text-[#4E564F] leading-relaxed mb-4">
                  {cityData.office}
                </p>
                <div className="flex flex-col gap-1.5 text-xs font-mono text-[#17231D]">
                  <div className="flex items-center gap-2">
                    <Phone size={12} className="text-[#005733]" />
                    <span>{cityData.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={12} className="text-[#005733]" />
                    <span>Support 24x7; office Mon to Sat 10 am to 6 pm</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-5 pt-4 border-t border-[#E8EAE3]">
                <a
                  href={`tel:${cityData.phone}`}
                  className="h-9 px-4 rounded-lg bg-[#17231D] text-white text-xs font-heading font-bold hover:bg-[#005733] transition-colors inline-flex items-center gap-1.5"
                >
                  Call now
                </a>
                <a
                  href={`https://wa.me/917239992778`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 px-4 rounded-lg bg-[#005733] text-white text-xs font-heading font-bold hover:bg-[#004729] transition-colors inline-flex items-center gap-1.5"
                >
                  WhatsApp
                </a>
                <button 
                  onClick={() => setModalOpen(true)}
                  className="w-9 h-9 rounded-lg border border-[#E8EAE3] flex items-center justify-center text-[#6E776F] hover:border-[#005733] transition-colors"
                >
                  ⚙
                </button>
              </div>
            </div>

            {/* Card 2: Local policy and subsidy note (Block 4) */}
            <div className="bg-white rounded-3xl border border-[#E8EAE3] p-6 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-bold text-sm text-[#17231D]">Local policy and subsidy note</span>
                  <span className="px-2 py-0.5 rounded bg-[#FEF3C7] text-[10px] font-mono font-bold text-[#92400E] uppercase">
                    CHANGED BLOCK 4
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base text-[#17231D] mb-2">
                  {cityData.state === 'Rajasthan' ? 'Rajasthan Solar Energy Policy 2024' : 'UP Solar Energy Policy 2024'}
                </h3>
                <p className="font-body text-xs text-[#4E564F] leading-relaxed mb-4">
                  PM-KUSUM Component B active offering 60% combined subsidy across DISCOM boundaries with expedited boring certification.
                </p>
                <div className="bg-[#FEF3C7] rounded-xl px-4 py-2.5 mb-3 flex items-center justify-between">
                  <span className="text-xs font-body text-[#4E564F]">Maximum grant:</span>
                  <span className="font-mono font-bold text-sm text-[#17231D]">{cityData.subsidyCap}</span>
                </div>
              </div>
              <a href="#" className="text-xs font-heading font-semibold text-[#005733] flex items-center gap-1 hover:underline mt-2">
                Link to PM Surya Ghar portal <ArrowRight size={12} />
              </a>
            </div>

            {/* Card 3: Savings snapshot (Block 6) */}
            <div className="bg-white rounded-3xl border border-[#E8EAE3] p-6 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-bold text-sm text-[#17231D]">Savings snapshot</span>
                  <span className="px-2 py-0.5 rounded bg-[#FEF3C7] text-[10px] font-mono font-bold text-[#92400E] uppercase">
                    CHANGED BLOCK 6
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[10px] font-mono text-[#6E776F] uppercase">Average bill</div>
                    <div className="font-heading font-extrabold text-2xl text-[#17231D]">₹9,400</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#6E776F] uppercase">Typical size</div>
                    <div className="font-heading font-extrabold text-2xl text-[#17231D]">7.5 HP</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#6E776F] uppercase">Payback period</div>
                    <div className="font-heading font-extrabold text-2xl text-[#17231D]">3.8 years</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#6E776F] uppercase">Annual savings</div>
                    <div className="font-heading font-extrabold text-2xl text-[#005733]">₹1,12,000</div>
                  </div>
                </div>
              </div>
              <p className="text-[10px] font-mono text-[#6E776F] mt-4 pt-3 border-t border-[#E8EAE3]">
                Computed on average diesel displacement data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. Verified Localized Installations (Block 3, Image 3) ──────────── */}
      <section className="bg-[#F9FAF4] py-12 md:py-16 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#FEF3C7] text-[10px] font-mono font-bold text-[#92400E] uppercase">
                CHANGED BLOCK 3
              </span>
            </div>
            <span className="text-xs font-body text-[#6E776F]">
              Real field installations within 25 km
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#17231D] mb-8">
            Verified localized installations
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {LOCAL_INSTALLATIONS.map((inst) => (
              <div key={inst.title} className="bg-white rounded-3xl border border-[#E8EAE3] overflow-hidden shadow-card group">
                <div className="h-48 relative overflow-hidden bg-[#E8EAE3]">
                  <img
                    src={inst.image}
                    alt={inst.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#17231D]/90 text-[#C5F176] text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {inst.capacity}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-sm text-[#17231D]">{inst.title}</h3>
                  <p className="text-xs font-body text-[#6E776F] mt-1">{inst.area}</p>
                  <div className="font-mono font-bold text-sm text-[#005733] mt-3 pt-3 border-t border-[#F0F2EB]">
                    {inst.stat}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. Local Engineering Guide + Customer Trust Charter (Image 3) ───── */}
      <section className="bg-[#F9FAF4] py-12 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">

            {/* Local engineering guide (Block 5) */}
            <div className="bg-white rounded-3xl border border-[#E8EAE3] p-7 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-bold text-sm text-[#17231D]">Local engineering guide</span>
                  <span className="px-2 py-0.5 rounded bg-[#FEF3C7] text-[10px] font-mono font-bold text-[#92400E] uppercase">
                    CHANGED BLOCK 5
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-mono font-bold text-[#005733] uppercase tracking-wider bg-[#E8F5E9] px-2.5 py-0.5 rounded-full">
                    LOCAL BLOG PICKS
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base text-[#17231D] leading-snug mb-2">
                  How farmers in {activeCity} handle deep groundwater drawdown with hybrid solar pumps
                </h3>
                <p className="font-body text-xs text-[#4E564F] leading-relaxed mb-4">
                  Technical guide covering dynamic solar controllers, three phase power stability during summer dips, and DISCOM net metering clearance.
                </p>
              </div>
              <a href="/blog" className="text-xs font-heading font-bold text-[#005733] flex items-center gap-1 hover:underline pt-3 border-t border-[#F0F2EB]">
                <span>Read local engineering notes</span>
                <ArrowRight size={12} />
              </a>
            </div>

            {/* Customer trust charter (Block 7) */}
            <div className="bg-white rounded-3xl border border-[#E8EAE3] p-7 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-bold text-sm text-[#17231D]">Customer trust charter</span>
                  <span className="px-2 py-0.5 rounded bg-[#FEF3C7] text-[10px] font-mono font-bold text-[#92400E] uppercase">
                    CHANGED BLOCK 7
                  </span>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#17231D] text-[#C5F176] flex items-center justify-center text-xs font-mono font-bold flex-shrink-0">
                    JD
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm text-[#17231D]">Jagdish Dan</div>
                    <div className="text-xs font-body text-[#6E776F]">Mustard Farmer, Chomu Tehsil</div>
                  </div>
                </div>
                <p className="font-body text-xs sm:text-sm text-[#4E564F] italic leading-relaxed mb-4">
                  &ldquo;The solar pump operates at 8 am every morning without waiting for grid electricity cuts. Diesel expenses are completely gone.&rdquo;
                </p>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-[#F0F2EB] text-[10px] font-mono">
                <span className="text-[#6E776F] uppercase">Verified customer inspection report</span>
                <span className="font-bold text-[#005733]">MNRE-ID #2024-RJ-863</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. SunScope Group Operational Lineage Footer Band (Image 3) ─────── */}
      <section className="bg-[#17231D] py-5 border-t border-[#2B4234]">
        <div className="max-w-[1248px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-heading font-bold text-base text-white">
              SunScope Group operational lineage
            </h3>
            <p className="font-body text-xs text-[#A3B3AA] mt-0.5">
              Over 14,000 agricultural pump units energized across 6 states under PM-KUSUM and decentralized solar feeder programs.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:+917239992778"
              className="h-10 px-4 rounded-lg bg-white/10 border border-white/15 text-white text-xs font-heading font-bold hover:bg-white/20 transition-colors inline-flex items-center gap-2"
            >
              <Phone size={13} />
              +91 7239992778
            </a>
            <a
              href="https://wa.me/917239992778"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-4 rounded-lg bg-[#005733] hover:bg-[#004729] text-white text-xs font-heading font-bold transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle size={13} />
              WhatsApp team
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CitySelectorPage;
