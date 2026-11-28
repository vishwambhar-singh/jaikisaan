import React, { useState } from 'react';
import { asset } from '../lib/assets';
import { 
  Search, ArrowRight, Clock, Shield, CheckCircle, 
  Phone, MessageCircle, TrendingUp, Sparkles, Zap
} from 'lucide-react';

interface Article {
  tag: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  category: 'Residential & Rooftop' | 'Commercial & Industrial' | 'Subsidies & Policy' | 'O&M & Tech Guide';
  image: string;
}

const ARTICLES: Article[] = [
  {
    tag: 'SAVINGS & ROI',
    date: '09 Jun 2026',
    readTime: '5 min read',
    title: 'How Much Can You Save With Solar Panels in Mohali Homes & Businesses?',
    excerpt: 'A comprehensive guide to evaluating residential and business solar savings, net-metering structures, and payback timelines for homes and offices.',
    category: 'Residential & Rooftop',
    image: '/assets/images/8cf9afdfdade266942ddb840b554b0834187be15.jpg',
  },
  {
    tag: 'C&I SOLAR',
    date: '19 Mar 2026',
    readTime: '6 min read',
    title: 'Solar Panel Installation in Factories: Save Electricity & Plan ROI',
    excerpt: 'Key factors behind industrial solar feasibility, heavy machine load profiling, Section 32 tax depreciation benefits, and project economics.',
    category: 'Commercial & Industrial',
    image: '/assets/images/8d3210a274b9a82f6bc7b88ce3706382e20c9bb7.jpg',
  },
  {
    tag: 'O&M & CARE',
    date: '06 Feb 2026',
    readTime: '4 min read',
    title: 'Maintenance Tips After Solar Panel Installation',
    excerpt: 'Helpful advice for keeping an installed system in top condition: panel cleaning intervals, string inverter checks, and preventive maintenance routines.',
    category: 'O&M & Tech Guide',
    image: '/assets/images/final_engineer.webp',
  },
  {
    tag: 'SOLAR PHYSICS',
    date: '14 Nov 2025',
    readTime: '5 min read',
    title: 'Do Solar Panels Work on Cloudy Days or at Night?',
    excerpt: 'Understand generation under changing daylight conditions, diffuse irradiance physics, and battery backup storage architectures.',
    category: 'O&M & Tech Guide',
    image: '/assets/images/hero_solar_panels_dusk.jpg',
  },
  {
    tag: 'SYSTEM SITING',
    date: '30 Jun 2025',
    readTime: '7 min read',
    title: 'Ground or Rooftop? Deciding the Best Placement for Solar Plants',
    excerpt: 'Comparing project siting options, structural roof load assessments, and land topography considerations for optimal kilowatt-hour yield.',
    category: 'Commercial & Industrial',
    image: '/assets/images/final_utility.webp',
  },
  {
    tag: 'POLICY & URBAN SOLAR',
    date: '11 August 2024',
    readTime: '5 min read',
    title: 'Can Apartments Install Rooftop Solar in Lucknow?...',
    excerpt: 'Navigating LDA bylaws, shared terrace rights, and UP-NEDA net-metering regulations for multi-tenant urban societies in Lucknow and central Uttar Pradesh.',
    category: 'Subsidies & Policy',
    image: '/assets/images/9232e3c12d228af8636d84a34e8fdea09b42a4b1.jpg',
  },
  {
    tag: 'SOLAR PHYSICS',
    date: '14 Nov 2024',
    readTime: '6 min read',
    title: 'Do Solar Panels Work on Cloudy Days or at Night?',
    excerpt: 'Exploring diffuse solar irradiance physics, micro-inverter low-light harvest, and lithium iron phosphate (LFP) battery energy storage for non-stop facility operation.',
    category: 'O&M & Tech Guide',
    image: '/assets/images/d051cf5fc13615be3fba2903ec3803486f48d58e.jpg',
  },
  {
    tag: 'SUBSIDY & POLICY',
    date: '16 Dec 2024',
    readTime: '5 min read',
    title: 'Power Your Home with Sunshine: 3kW Solar Rooftop',
    excerpt: 'Comprehensive financial roadmap on claiming ₹78,000 direct bank transfer subsidies under PM Surya Ghar Muft Bijli Yojana with zero liaison friction.',
    category: 'Subsidies & Policy',
    image: '/assets/images/3712df8d0ed3a730f764212b2da268c26dd7890b.jpg',
  },
  {
    tag: 'PREVENTIVE O&M',
    date: '06 Feb 2026',
    readTime: '4 min read',
    title: 'Maintenance Tips After Solar Panel Installation',
    excerpt: 'Key thermal drone audit protocols and automated string monitoring strategies to protect PV cell lifecycle in semi-arid zones across North and West India.',
    category: 'O&M & Tech Guide',
    image: '/assets/images/4bb4436fda7c0f69c46e53acc7f3be717b2b1624.jpg',
  },
  {
    tag: 'C&I DECARBONIZATION',
    date: '19 March 2026',
    readTime: '8 min read',
    title: 'Solar Panel Installation in Factories: Save Electricity,...',
    excerpt: 'Mitigating midday peak demand charges and tapping 40% Section 32 IT depreciation for commercial manufacturing plants in industrial corridors.',
    category: 'Commercial & Industrial',
    image: '/assets/images/aa80d82cedafbd1508c328b9e5f2754a3eb14919.jpg',
  },
  {
    tag: 'REGIONAL ECONOMICS',
    date: '9 June 2026',
    readTime: '6 min read',
    title: 'How Much Can You Save With Solar Panels in Mohali Homes',
    excerpt: 'PSPCL tariff escalation analysis, payback modeling, and sovereign energy economics for Mohali and Punjab residential clusters.',
    category: 'Residential & Rooftop',
    image: '/assets/images/eab97aa25e778902c8e5697219ec4b273879eb75.jpg',
  },
];

const CATEGORIES = [
  'All Articles (11)',
  'Residential & Rooftop',
  'Commercial & Industrial',
  'Subsidies & Policy',
  'O&M & Tech Guide',
];

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All Articles (11)');
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const filtered = ARTICLES.filter((art) => {
    const matchesCategory =
      activeCategory === 'All Articles (11)' || art.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <>
      {/* ─── 1. Header: Clean Energy Intelligence & Solar Engineering Insights ── */}
      <section className="bg-white pt-24 pb-12 md:pt-28 md:pb-14 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-10">
            <div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#17231D] tracking-tight leading-tight">
                Clean Energy Intelligence &amp;<br />
                Solar Engineering Insights
              </h1>
              <p className="font-body text-xs sm:text-sm text-[#4E564F] mt-3 max-w-2xl leading-relaxed">
                In-depth engineering analyses, PM Surya Ghar regulatory roadmaps, C&amp;I financial models, and operational maintenance playbooks curated by SunScope Group energy architects.
              </p>
            </div>

            {/* Top Right Stats */}
            <div className="flex items-center gap-8 self-start pt-2">
              <div className="text-right">
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#17231D]">
                  11+
                </div>
                <div className="text-[10px] font-mono text-[#6E776F] uppercase tracking-wider">
                  DEEP ANALYSES
                </div>
              </div>
              <div className="text-right">
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#005733]">
                  84.2%
                </div>
                <div className="text-[10px] font-mono text-[#6E776F] uppercase tracking-wider">
                  AVG PR YIELD
                </div>
              </div>
            </div>
          </div>

          {/* Search + Filter Pills Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-6 border-t border-[#E8EAE3]">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md w-full">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6E776F]" />
              <input
                type="text"
                placeholder="Search technical articles, DISCOM policies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-9 pr-4 rounded-xl border border-[#E8EAE3] bg-[#F9FAF4] text-xs font-body text-[#17231D] placeholder:text-[#9BA39B] focus:outline-none focus:border-[#005733]"
              />
            </div>

            {/* Category Pills */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 md:flex-wrap w-full md:w-auto">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-heading font-semibold transition-all border whitespace-nowrap flex-shrink-0 ${
                    activeCategory === cat
                      ? 'bg-[#005733] text-white border-[#005733] shadow-card'
                      : 'bg-white text-[#4E564F] border-[#E8EAE3] hover:border-[#005733]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. Spotlight Briefing Card (Matching Frame 8) ────────────────────── */}
      <section className="bg-[#F9FAF4] py-10 md:py-16 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="rounded-3xl bg-white border border-[#E8EAE3] overflow-hidden shadow-card p-5 sm:p-7 md:p-10">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Image Placeholder/Visual */}
              <div className="lg:col-span-6 rounded-2xl overflow-hidden h-56 sm:h-72 md:h-80 relative bg-[#E8EAE3]">
                <img
                  src={asset('/assets/images/86f4a949d08f6296a12f8e095d8f906c5f5481b1.jpg')}
                  alt="Solar Plants Spotlight Briefing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#17231D] text-[#C5F176] uppercase tracking-wider">
                    ● SPOTLIGHT BRIEFING
                  </span>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono mb-3">
                    <span className="text-[10px] font-bold text-[#005733] uppercase bg-[#E8F5E9] px-2.5 py-0.5 rounded-full">
                      INDUSTRY TRANSFORMATION
                    </span>
                    <span className="text-[#6E776F]">· 24 January 2024</span>
                    <span className="text-[#6E776F]">· 6 min read</span>
                  </div>

                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#17231D] leading-tight tracking-tight">
                    Solar Plants: A Game-Changer for Both Residential and Industrial Energy Needs
                  </h2>

                  <p className="font-body text-xs sm:text-sm text-[#4E564F] mt-3 leading-relaxed">
                    In an era where sustainability is not just an option but a necessity, innovations in renewable energy are transforming the way we live and power industries across Rajasthan and Western India.
                  </p>

                  <div className="grid grid-cols-2 gap-4 py-4 sm:py-5 mt-4 border-t border-b border-[#E8EAE3]">
                    <div>
                      <div className="text-[10px] font-mono text-[#6E776F] uppercase tracking-wider">GRID PARITY PAYBACK</div>
                      <div className="font-heading font-bold text-lg sm:text-xl text-[#005733] mt-0.5">3.4 Yrs</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-[#6E776F] uppercase tracking-wider">CO₂ ABATEMENT</div>
                      <div className="font-heading font-bold text-lg sm:text-xl text-[#17231D] mt-0.5">1,820 MT/yr</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-5">
                  <a
                    href="#archive"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-[#005733] hover:bg-[#004729] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-card w-full sm:w-auto"
                  >
                    <span>Read Technical Analysis</span>
                    <ArrowRight size={13} />
                  </a>
                  <span className="text-[11px] font-mono text-[#6E776F] flex items-center justify-center sm:justify-start gap-1.5">
                    <Shield size={13} className="text-[#005733]" />
                    Field Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. Technical Research & Regulatory Dispatches Grid ────────────────── */}
      <section id="archive" className="bg-[#F9FAF4] py-16 md:py-20 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[10px] font-mono font-semibold text-[#005733] uppercase tracking-widest bg-[#E8F5E9] px-2.5 py-0.5 rounded-full block w-fit mb-2">
                ENGINEERING ARCHIVE
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#17231D] tracking-tight">
                Technical Research &amp; Regulatory Dispatches
              </h2>
            </div>
            <div className="text-xs font-mono text-[#6E776F]">
              Showing {filtered.length} field publications
            </div>
          </div>

          {/* 3-Column Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <article
                key={article.title}
                className="bg-white rounded-3xl border border-[#E8EAE3] overflow-hidden shadow-card hover:shadow-elevated transition-shadow flex flex-col justify-between group"
              >
                <div>
                  <div className="h-48 overflow-hidden relative bg-[#E8EAE3]">
                    <img
                      src={asset(article.image)}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#17231D]/90 text-[#C5F176] text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {article.tag}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-mono px-2 py-0.5 rounded">
                      {article.date}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading font-bold text-base text-[#17231D] leading-snug group-hover:text-[#005733] transition-colors">
                      {article.title}
                    </h3>
                    <p className="font-body text-xs text-[#4E564F] mt-2.5 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-[#F0F2EB] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#6E776F] flex items-center gap-1">
                    <Clock size={11} />
                    {article.readTime}
                  </span>
                  <a
                    href="#archive"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[#005733] font-bold hover:underline flex items-center gap-1"
                  >
                    <span>Explore More</span>
                    <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Subscribe to SunScope Solar Engineering Intelligence ──────────── */}
      <section className="bg-[#F9FAF4] py-12 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-r from-[#17231D] via-[#1E2D26] to-[#17231D] border border-[#2B4234] p-5 sm:p-8 md:p-12 text-white shadow-elevated">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C5F176]"></span>
                  <span className="text-[10px] font-mono font-semibold text-[#C5F176] uppercase tracking-widest">
                    WEEKLY ENGINEERING BRIEF
                  </span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  Subscribe to SunScope Solar Engineering Intelligence
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#A3B3AA] leading-relaxed max-w-xl">
                  Join 14,000+ facility heads, agricultural producers, and residential solar pioneers receiving weekly DISCOM policy briefings, tariff updates, and technical guides.
                </p>
              </div>

              <div className="lg:col-span-5">
                {subscribed ? (
                  <div className="p-4 rounded-2xl bg-[#005733]/40 border border-[#C5F176]/50 text-[#C5F176] text-xs font-mono text-center">
                    ✓ Subscribed! You will receive our next weekly engineering dispatch.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        required
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="Enter corporate or personal email..."
                        className="h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder:text-[#A3B3AA]/60 focus:outline-none focus:border-[#C5F176] flex-1"
                      />
                      <button
                        type="submit"
                        className="h-12 px-6 rounded-xl bg-[#C5F176] hover:bg-[#d6f799] text-[#17231D] font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-glow-lime whitespace-nowrap"
                      >
                        Subscribe
                      </button>
                    </div>
                    <div className="text-[11px] font-mono text-[#A3B3AA] flex items-center gap-4">
                      <span>🛡️ No marketing spam</span>
                      <span>·</span>
                      <span>✓ Verified DISCOM data</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. Real-Time Advisory Strip ──────────────────────────────────────── */}
      <section className="bg-[#F9FAF4] py-6 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="rounded-2xl bg-white border border-[#E8EAE3] p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              <div>
                <span className="font-heading font-bold text-xs sm:text-sm text-[#17231D]">
                  Need Real-Time System Engineering Advice?
                </span>
                <p className="font-body text-xs text-[#6E776F] mt-0.5">
                  Speak directly with SunScope senior EPC field architects regarding KUSUM C, Rooftop, or industrial EPC.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto flex-shrink-0">
              <a
                href="tel:+917239992778"
                className="text-xs font-mono font-bold text-[#17231D] hover:text-[#005733] flex items-center justify-center sm:justify-start gap-1.5 py-2 sm:py-0"
              >
                <Phone size={13} className="text-[#005733]" />
                +91 7239992778
              </a>
              <a
                href="https://wa.me/917239992778"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 sm:h-9 px-4 rounded-xl bg-[#005733] hover:bg-[#004729] text-white text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageCircle size={13} />
                WhatsApp Advisory
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
