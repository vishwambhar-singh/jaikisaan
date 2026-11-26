
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, Mail, MapPin, MessageCircle, CheckCircle, Clock, ArrowRight,
  Building2, Shield, Radio, ExternalLink, Zap
} from 'lucide-react';

interface Hub {
  badge: string;
  badgeStyle?: string;
  name: string;
  division: string;
  address: string;
  phoneLabel: string;
  phone: string;
  email?: string;
  state: 'Rajasthan' | 'Uttar Pradesh' | 'Madhya Pradesh' | 'Telangana' | 'Punjab & Delhi NCR';
}

const HUBS: Hub[] = [
  {
    badge: 'Corporate Headquarters',
    badgeStyle: 'bg-[#E8F5E9] text-[#005733]',
    name: 'Head Office - Jaipur',
    division: 'State Command NOC & Dispatch',
    address: 'Jai Kisaan Solar Pvt. Ltd., S.P Tower, 150, Sirsi Rd, Officers Campus Colony, Jaipur, Rajasthan 302012',
    phoneLabel: 'Director Desk:',
    phone: '+91 7239992778',
    email: 'info@jaikisaansolar.com',
    state: 'Rajasthan',
  },
  {
    badge: 'Agri-Hub Rajasthan',
    badgeStyle: 'bg-[#E8F5E9] text-[#005733]',
    name: 'Begun Office',
    division: 'Rural Grid Solar Energy Division',
    address: 'Sunorient Solar Energy, Near HDFC Bank, New Sabji Mandi, Begun, Rajasthan - 312023',
    phoneLabel: 'Contact Person:',
    phone: 'Babulal Dhaker (+91 7568836166 / +91 7665330166)',
    state: 'Rajasthan',
  },
  {
    badge: 'Shekhawati Agri Desk',
    badgeStyle: 'bg-[#E8F5E9] text-[#005733]',
    name: 'Nawalgarh Hub',
    division: 'Residential & Tube-well Projects',
    address: 'Near Jaipuriya Hospital, Nawalgarh, Jhunjhunu, Rajasthan - 333042',
    phoneLabel: 'Contact Person:',
    phone: 'Rakesh Kumar Saini (+91 9529466424)',
    state: 'Rajasthan',
  },
  {
    badge: 'Jhunjhunu District',
    name: 'Udaipurwati Office',
    division: 'Pumping & High-Torque Dispatch',
    address: 'Chungi No. 03, Udaipurwati, Jhunjhunu District, Rajasthan',
    phoneLabel: 'Zonal Helpline:',
    phone: '+91 7239992778',
    state: 'Rajasthan',
  },
  {
    badge: 'UP State Regional HQ',
    badgeStyle: 'bg-[#E8F5E9] text-[#005733]',
    name: 'Lucknow Office',
    division: 'Central UP Operations & EPC',
    address: 'Hall, 1st Floor, House No. 355/2A, Part of Khasra No. 18, Near Pal Tiraha, Rajajipuram, Lucknow, UP – 226017',
    phoneLabel: 'Regional Desk:',
    phone: '+91 81309 60888',
    state: 'Uttar Pradesh',
  },
  {
    badge: 'Braj Region Command',
    name: 'Agra Office',
    division: 'Industrial Rooftop & Cold Storage',
    address: '8th Floor, Corporate Park, Zudio Building / Adhar Building, Opposite GG Hospital, Sanjay Palace, Civil Lines, Agra, UP – 282002',
    phoneLabel: 'Corporate Direct:',
    phone: '+91 7239992778',
    state: 'Uttar Pradesh',
  },
  {
    badge: 'Industrial Belt UP',
    name: 'Kanpur Office',
    division: 'Heavy Manufacturing & Captive Plants',
    address: '127/T/25, Canal Colony, Vinoba Nagar, Juhi Kalan, Kidwai Nagar, Kanpur, Uttar Pradesh – 208014',
    phoneLabel: 'Regional Line:',
    phone: '+91 7239992778',
    state: 'Uttar Pradesh',
  },
  {
    badge: 'Central India Command',
    name: 'Indore Office',
    division: 'Malwa & Central India EPC',
    address: 'Office No. 236, Indraprastha Tower, MG Road, Palasia, Indore, Madhya Pradesh – 452001',
    phoneLabel: 'MP Operations Desk:',
    phone: '+91 8349296639',
    state: 'Madhya Pradesh',
  },
  {
    badge: 'South India Hub',
    name: 'Hyderabad Office',
    division: 'Industrial Rooftop & Green Hydrogen',
    address: 'Floor 3, Oyster Complex, Awfis Oyster Complex, Greenlands Road, Somajiguda, Hyderabad, Telangana – 500016',
    phoneLabel: 'South India Desk:',
    phone: '+91 7239992778',
    state: 'Telangana',
  },
  {
    badge: 'North Agri-Grid Hub',
    name: 'Amritsar Office',
    division: 'Agri Microgrids & Cold Storage',
    address: 'Vrindavan Garden, Fateh Garh Churiya Road, Lane No. 2, Amritsar, Punjab',
    phoneLabel: 'Punjab Helpdesk:',
    phone: '+91 7239992778',
    state: 'Punjab & Delhi NCR',
  },
  {
    badge: 'Capital Corridor Hub',
    name: 'Surajmal Vihar - Delhi',
    division: 'NCR Rooftop & Corporate Projects',
    address: 'SF-25, 2nd Floor, Cross River Mall, Surajmal Vihar, Delhi – 110032',
    phoneLabel: 'Delhi Liaison:',
    phone: '+91 81309 60888',
    state: 'Punjab & Delhi NCR',
  },
];

const FILTER_TABS = [
  'All Hubs (11 Displayed)',
  'Rajasthan',
  'Uttar Pradesh',
  'Madhya Pradesh',
  'Telangana',
  'Punjab & Delhi NCR',
];

const Contact: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Hubs (11 Displayed)');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    hub: '',
    category: '',
    monthlyBill: '',
    details: '',
  });

  const filteredHubs = HUBS.filter((hub) => {
    if (activeFilter === 'All Hubs (11 Displayed)') return true;
    return hub.state === activeFilter;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      {/* ─── 1. Dark Hero: Telemetry & Headline (Matching Frame 7) ────────────── */}
      <section className="bg-[#17231D] text-white pt-28 pb-16 md:py-24 border-b border-[#2B4234]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#C5F176] animate-pulse"></span>
                <span className="text-[11px] font-mono font-semibold text-[#C5F176] uppercase tracking-widest">
                  SUNSCOPE TELEMETRY ACTIVE · 24X7 SOVEREIGN GRID ASSISTANCE
                </span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.08] tracking-tight">
                Get in Touch with<br />
                <span className="text-[#C5F176]">Jai Kisaan Solar</span>
              </h1>
              <p className="font-body text-sm md:text-base text-[#A3B3AA] mt-4 leading-relaxed max-w-xl">
                Take the leap to sovereign clean energy. From decentralized farming microgrids to multi-megawatt commercial cold chains, our engineering teams across 13 regional hubs are ready to assist you.
              </p>
            </div>

            {/* NOC Dispatch Status Card */}
            <div className="bg-[#1E2D26] border border-[#2B4234] rounded-2xl p-6 lg:min-w-[340px] shadow-card">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[10px] font-mono">
                <span className="text-[#A3B3AA] uppercase tracking-wider">NOC DISPATCH STATUS</span>
                <span className="px-2 py-0.5 rounded bg-[#005733] text-[#C5F176] font-bold">Tier-1 Grid</span>
              </div>
              <div className="grid grid-cols-2 gap-4 py-4 border-b border-white/10">
                <div>
                  <div className="font-heading font-extrabold text-2xl text-white">&lt; 15 Mins</div>
                  <div className="text-[11px] font-mono text-[#A3B3AA] mt-0.5">Avg. Response Time</div>
                </div>
                <div>
                  <div className="font-heading font-extrabold text-2xl text-[#C5F176]">13 Hubs</div>
                  <div className="text-[11px] font-mono text-[#A3B3AA] mt-0.5">Active Across India</div>
                </div>
              </div>
              <div className="pt-3 text-xs font-mono text-[#A3B3AA] flex items-center justify-between">
                <span>Toll-Free Dispatch:</span>
                <a href="tel:+917239992778" className="text-white font-bold hover:text-[#C5F176]">
                  +91 7239992778
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. Form & Direct Engineering Desk ────────────────────────────────── */}
      <section className="bg-[#F9FAF4] py-16 md:py-20 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 items-start">

            {/* Left: Engineering Feasibility Desk Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E8EAE3] p-5 sm:p-8 md:p-10 shadow-card">
              <span className="text-[11px] font-mono font-semibold text-[#6E776F] uppercase tracking-widest block mb-2">
                ENGINEERING FEASIBILITY DESK
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#17231D] tracking-tight mb-2">
                Send Us an Inquiry / Book Technical Appraisal
              </h2>
              <p className="font-body text-xs sm:text-sm text-[#4E564F] mb-6 leading-relaxed">
                Complete your spatial array requirements. Our electrical engineers will generate a customized yield projection.
              </p>

              {formSubmitted ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#E8F5E9] border border-[#B2DFBD] text-center">
                  <CheckCircle className="mx-auto text-[#005733] mb-3" size={36} />
                  <h3 className="font-heading font-bold text-lg text-[#17231D]">Technical Appraisal Request Logged</h3>
                  <p className="font-body text-xs text-[#4E564F] mt-2 max-w-md mx-auto">
                    Your site dossier has been routed to the regional dispatch desk. An EPC engineer will call within 15 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-[#17231D] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikramaditya Rathore"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl border border-[#E8EAE3] bg-[#F9FAF4] text-xs font-body text-[#17231D] placeholder:text-[#9BA39B] focus:outline-none focus:border-[#005733]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-semibold text-[#17231D] mb-1.5">
                        Mobile Number (+91) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl border border-[#E8EAE3] bg-[#F9FAF4] text-xs font-body text-[#17231D] placeholder:text-[#9BA39B] focus:outline-none focus:border-[#005733]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-[#17231D] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@farmorcorp.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl border border-[#E8EAE3] bg-[#F9FAF4] text-xs font-body text-[#17231D] placeholder:text-[#9BA39B] focus:outline-none focus:border-[#005733]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-semibold text-[#17231D] mb-1.5">
                        Target Regional Hub *
                      </label>
                      <select
                        required
                        value={formData.hub}
                        onChange={(e) => setFormData({ ...formData, hub: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl border border-[#E8EAE3] bg-[#F9FAF4] text-xs font-body text-[#17231D] focus:outline-none focus:border-[#005733]"
                      >
                        <option value="">Select Operational Territory</option>
                        <option value="Jaipur">Jaipur (Rajasthan Command)</option>
                        <option value="Begun">Begun (Chittorgarh)</option>
                        <option value="Nawalgarh">Nawalgarh (Shekhawati)</option>
                        <option value="Lucknow">Lucknow (Central UP HQ)</option>
                        <option value="Kanpur">Kanpur (Industrial Belt)</option>
                        <option value="Agra">Agra (Braj Command)</option>
                        <option value="Indore">Indore (Central India)</option>
                        <option value="Hyderabad">Hyderabad (South India)</option>
                        <option value="Amritsar">Amritsar (Punjab Agri)</option>
                        <option value="Delhi">Surajmal Vihar (Delhi NCR)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-[#17231D] mb-1.5">
                        Installation Category *
                      </label>
                      <select
                        required
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl border border-[#E8EAE3] bg-[#F9FAF4] text-xs font-body text-[#17231D] focus:outline-none focus:border-[#005733]"
                      >
                        <option value="">Choose Clean Energy Scope</option>
                        <option value="Solar Agricultural Pumps (PM-KUSUM)">Solar Agricultural Pumps (PM-KUSUM)</option>
                        <option value="Commercial Cold Storage Microgrid">Commercial Cold Storage Microgrid</option>
                        <option value="C&I Rooftop Solar EPC">C&amp;I Rooftop Solar EPC</option>
                        <option value="Ground-Mount Microgrid (MW Scale)">Ground-Mount Microgrid (MW Scale)</option>
                        <option value="Residential Solar (PM Surya Ghar)">Residential Solar (PM Surya Ghar)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-semibold text-[#17231D] mb-1.5">
                        Monthly Electricity Bill / Desired Capacity
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. ₹45,000 / month or 100 kWp"
                        value={formData.monthlyBill}
                        onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl border border-[#E8EAE3] bg-[#F9FAF4] text-xs font-body text-[#17231D] placeholder:text-[#9BA39B] focus:outline-none focus:border-[#005733]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#17231D] mb-1.5">
                      Project Specifications &amp; Location Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Detail your rooftop shadow analysis, transformer capacity, or rural borewell coordinates..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-[#E8EAE3] bg-[#F9FAF4] text-xs font-body text-[#17231D] placeholder:text-[#9BA39B] focus:outline-none focus:border-[#005733]"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[#005733] hover:bg-[#004729] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-card"
                    >
                      <span>Submit Technical Inquiry</span>
                      <Zap size={14} />
                    </button>
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-[#6E776F]">
                      <Shield size={14} className="text-[#005733]" />
                      <span>MNRE Empanelled · Zero Spam</span>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Immediate Technical Desk & Grievance */}
            <div className="lg:col-span-5 flex flex-col gap-6">

              {/* Card 1: Immediate Technical Desk */}
              <div className="bg-white rounded-3xl border border-[#E8EAE3] p-7 shadow-card">
                <div className="flex items-center gap-2.5 mb-1">
                  <div className="w-8 h-8 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#005733]">
                    <Phone size={14} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-[#17231D]">Immediate Technical Desk</h3>
                    <p className="text-[11px] font-body text-[#6E776F]">Have urgent questions? Direct line</p>
                  </div>
                </div>

                <div className="mt-5 p-4 rounded-2xl bg-[#F9FAF4] border border-[#E8EAE3]">
                  <div className="text-[10px] font-mono text-[#6E776F] uppercase tracking-wider">PRIMARY ENGINEERING HOTLINE</div>
                  <a
                    href="tel:+917239992778"
                    className="font-heading font-extrabold text-2xl text-[#005733] hover:underline flex items-center gap-2 mt-1"
                  >
                    <span>+91 7239992778</span>
                    <span className="text-sm">↗</span>
                  </a>
                  <p className="text-[11px] font-body text-[#6E776F] mt-1">
                    Direct priority dispatch for residential &amp; C&amp;I projects
                  </p>
                </div>

                <div className="mt-4">
                  <div className="text-[10px] font-mono text-[#6E776F] uppercase tracking-wider mb-2">SECONDARY OPERATIONAL LINES</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#17231D]">
                    <a href="tel:+918529999277" className="p-2.5 rounded-xl bg-[#F9FAF4] border border-[#E8EAE3] hover:border-[#005733] flex items-center justify-between">
                      <span>+91 85299 99277</span>
                      <Phone size={12} className="text-[#6E776F]" />
                    </a>
                    <a href="tel:+918130960888" className="p-2.5 rounded-xl bg-[#F9FAF4] border border-[#E8EAE3] hover:border-[#005733] flex items-center justify-between">
                      <span>+91 81309 60888</span>
                      <Phone size={12} className="text-[#6E776F]" />
                    </a>
                    <a href="tel:+917239992779" className="p-2.5 rounded-xl bg-[#F9FAF4] border border-[#E8EAE3] hover:border-[#005733] flex items-center justify-between">
                      <span>+91 72399 92779</span>
                      <Phone size={12} className="text-[#6E776F]" />
                    </a>
                    <a href="tel:+918349296639" className="p-2.5 rounded-xl bg-[#F9FAF4] border border-[#E8EAE3] hover:border-[#005733] flex items-center justify-between">
                      <span>+91 83492 96639</span>
                      <Phone size={12} className="text-[#6E776F]" />
                    </a>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8EAE3] flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono">
                  <span className="text-[#6E776F]">Direct Email Support:</span>
                  <a href="mailto:info@jaikisaansolar.com" className="text-[#005733] font-bold hover:underline truncate">
                    info@jaikisaansolar.com
                  </a>
                </div>

                <a
                  href="https://wa.me/917239992778"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full h-11 px-4 rounded-xl bg-[#E8F5E9] hover:bg-[#D4EDDA] text-[#005733] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-[#B2DFBD]"
                >
                  <MessageCircle size={15} />
                  Chat with Engineering Support
                </a>
              </div>

              {/* Card 2: Priority Grievance & Escalation */}
              <div className="bg-white rounded-3xl border border-[#E8EAE3] p-5 sm:p-7 shadow-card">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-red-500 text-sm">📍</span>
                  <h3 className="font-heading font-bold text-sm text-[#17231D]">Customer Support &amp; Grievance</h3>
                </div>
                <p className="text-[11px] font-body text-[#6E776F] mb-4">
                  “Your feedback matters to us — share your concerns anytime.”
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-[#F9FAF4] border border-[#E8EAE3]">
                    <div className="text-[10px] text-[#6E776F] uppercase">EMAIL SUPPORT</div>
                    <a href="mailto:welisten@jaikisaansolar.com" className="font-bold text-[#17231D] text-[11px] hover:underline block mt-0.5 truncate">
                      welisten@jaikisaansolar.com
                    </a>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F9FAF4] border border-[#E8EAE3]">
                    <div className="text-[10px] text-[#6E776F] uppercase">CALL SUPPORT</div>
                    <a href="tel:+917239999277" className="font-bold text-[#17231D] text-[11px] hover:underline block mt-0.5">
                      +91 7239999277
                    </a>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8EAE3] text-[11px] font-mono text-[#6E776F] flex flex-col gap-1.5">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
                    <span>Operational Hours:</span>
                    <span className="text-[#17231D] font-semibold">Mon – Sat: 10:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
                    <span>Sunday:</span>
                    <span className="text-[#005733] font-semibold">Closed (Telemetry NOC Active 24x7)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. Nationwide Engineering Footprint: 13 Operational Hubs ──────────── */}
      <section className="bg-[#F9FAF4] py-16 md:py-24 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono font-semibold text-[#005733] uppercase tracking-widest bg-[#E8F5E9] px-2.5 py-0.5 rounded-full">
                  NATIONWIDE ENGINEERING FOOTPRINT
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#17231D] tracking-tight">
                Visit Us Across 13 Operational Hubs
              </h2>
              <p className="font-body text-xs sm:text-sm text-[#4E564F] mt-2 max-w-2xl leading-relaxed">
                Fully staffed project command centres, customer liaison lounges, and EPC logistics depots across sovereign states.
              </p>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex gap-2 mb-8 pb-3 border-b border-[#E8EAE3] overflow-x-auto no-scrollbar md:flex-wrap">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-heading font-semibold transition-all border whitespace-nowrap flex-shrink-0 ${activeFilter === tab
                    ? 'bg-[#005733] text-white border-[#005733] shadow-card'
                    : 'bg-white text-[#4E564F] border-[#E8EAE3] hover:border-[#005733]'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Hubs Grid (3 columns matching Figma) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHubs.map((hub) => (
              <div
                key={hub.name}
                className="bg-white rounded-3xl border border-[#E8EAE3] p-7 shadow-card hover:shadow-elevated transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${hub.badgeStyle || 'bg-[#F3F4EE] text-[#4E564F]'
                      }`}>
                      {hub.badge}
                    </span>
                    <Building2 size={14} className="text-[#6E776F]" />
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#17231D]">
                    {hub.name}
                  </h3>
                  <div className="text-xs font-body text-[#005733] font-semibold mt-0.5">
                    {hub.division}
                  </div>
                  <p className="text-xs font-body text-[#4E564F] mt-3 leading-relaxed">
                    {hub.address}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8EAE3] flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#6E776F]">{hub.phoneLabel}</span>
                    <a href={`tel:${hub.phone}`} className="font-bold text-[#17231D] hover:text-[#005733]">
                      {hub.phone}
                    </a>
                  </div>
                  {hub.email && (
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#6E776F]">Official Inbox:</span>
                      <a href={`mailto:${hub.email}`} className="font-bold text-[#005733] hover:underline truncate max-w-[170px]">
                        {hub.email}
                      </a>
                    </div>
                  )}
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-xs font-heading font-semibold text-[#005733] flex items-center justify-between hover:underline pt-2 border-t border-[#F0F2EB]"
                  >
                    <span>Navigate on Google Maps</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Active Microgrid Telemetry & Dispatch Mesh (Frame 7 Bottom) ────── */}
      <section className="bg-[#17231D] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[10px] font-mono font-semibold text-[#C5F176] uppercase tracking-widest block mb-2">
                SPATIAL TELEMETRY NETWORK
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                Active Microgrid Telemetry &amp; Dispatch Mesh
              </h2>
            </div>
            <div className="hidden sm:flex items-center gap-6 text-xs font-mono text-[#A3B3AA]">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C5F176]"></span>
                Jaipur Central NOC Synchronized
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#005733]"></span>
                100% On-Grid Transmission
              </span>
            </div>
          </div>

          <div className="rounded-3xl bg-[#1E2D26] border border-[#2B4234] p-5 sm:p-8 md:p-10 grid lg:grid-cols-12 gap-8 items-center shadow-card">
            {/* Left Telemetry Visual Mockup */}
            <div className="lg:col-span-7 bg-[#17231D] border border-[#2B4234] rounded-2xl p-4 sm:p-6 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs font-mono text-[#A3B3AA] pb-4 border-b border-white/10">
                <span className="text-white font-semibold">Jaipur NOC &lt;-&gt; Multi-Regional Feed</span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-[#C5F176]">NOC ENCRYPTED CLOUD</span>
              </div>

              {/* Wave diagram */}
              <div className="py-6 sm:py-8 relative h-32 sm:h-36 flex items-center justify-between px-2 sm:px-4">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 120" preserveAspectRatio="none">
                  <path
                    d="M 20 60 Q 120 10 220 70 T 420 40 T 480 80"
                    fill="none"
                    stroke="#C5F176"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    opacity="0.6"
                  />
                  <path
                    d="M 20 80 Q 160 110 260 50 T 440 80 T 480 50"
                    fill="none"
                    stroke="#005733"
                    strokeWidth="2"
                    opacity="0.8"
                  />
                </svg>

                {/* Node Pills */}
                <div className="relative z-10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-[#1E2D26] border border-white/15 text-[9px] sm:text-[10px] font-mono text-center">
                  <div className="text-[#A3B3AA]">Jaipur NOC (HQ)</div>
                </div>
                <div className="relative z-10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-[#1E2D26] border border-[#C5F176]/50 text-[9px] sm:text-[10px] font-mono text-center shadow-glow-lime">
                  <div className="text-[#C5F176] font-bold">UP/MVVNL</div>
                </div>
                <div className="relative z-10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-[#1E2D26] border border-white/15 text-[9px] sm:text-[10px] font-mono text-center">
                  <div className="text-[#A3B3AA]">Hyderabad / TSD</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10px] sm:text-[11px] font-mono text-[#A3B3AA] pt-4 border-t border-white/10">
                <span>Regional Inverters: <strong>1,840+ Active</strong></span>
                <span>Yield Tracking: <strong className="text-[#C5F176]">99.88% Accuracy</strong></span>
              </div>
            </div>

            {/* Right Dispatch Mobilization Info */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <h3 className="font-heading font-bold text-xl text-white">
                Direct Field Mobilization
              </h3>
              <p className="font-body text-xs text-[#A3B3AA] leading-relaxed">
                Every regional office is linked with mobile telemetry vans equipped with irradiance analyzers, IV-curve tracers, and thermal drone audit kits.
              </p>

              <div className="flex flex-col gap-2.5 pt-2 text-xs font-mono">
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-[#A3B3AA]">On-Site Dispatch Radius:</span>
                  <span className="text-white font-bold">150 km per Hub</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-[#A3B3AA]">Emergency NOC Escalation:</span>
                  <span className="text-[#C5F176] font-bold">&lt; 30 Minutes</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-[#A3B3AA]">Grid Approvals Assistance:</span>
                  <span className="text-white font-bold">DISCOM Turnkey</span>
                </div>
              </div>

              <a
                href="tel:+917239992778"
                className="mt-3 inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-[#C5F176] hover:bg-[#d6f799] text-[#17231D] font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-glow-lime text-center w-full"
              >
                Call Immediate Field Desk 📞
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. A Unit of SunScope Group Banner ────────────────────────────────── */}
      <section className="bg-[#17231D] py-6 border-t border-[#2B4234]">
        <div className="max-w-[1248px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-xl bg-[#005733] text-[#C5F176] flex items-center justify-center text-sm font-bold flex-shrink-0">
              ✦
            </div>
            <div>
              <div className="font-heading font-bold text-xs text-white">A Unit of SunScope Group</div>
              <div className="text-[11px] font-body text-[#A3B3AA]">
                Bringing together eSunScope, Jai Kisaan Solar, and City Scope Global to deliver sovereign solar engineering.
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
            <Link
              to="/about"
              className="h-10 sm:h-9 px-4 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-mono transition-colors inline-flex items-center justify-center gap-1.5 w-full sm:w-auto"
            >
              Founder&apos;s Message
            </Link>
            <a
              href="https://sunscope.in"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 sm:h-9 px-4 rounded-lg bg-[#005733] hover:bg-[#004729] text-white text-xs font-mono transition-colors inline-flex items-center justify-center gap-1.5 w-full sm:w-auto"
            >
              <span>Explore SunScope Ecosystem</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
