import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Handshake, Network } from 'lucide-react';

const Partners: React.FC = () => {
  return (
    <main>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-brand-forest pt-28 pb-16 md:pb-20">
        <div className="max-w-[1248px] mx-auto px-6 text-center">
          <span className="inline-block text-xs font-mono font-semibold text-brand-lime uppercase tracking-widest mb-4">
            OUR PARTNERS
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mx-auto">
            Collaboration across the{' '}
            <span className="text-brand-lime">clean-energy journey.</span>
          </h1>
          <p className="mt-5 font-body text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Relationship descriptions sourced from the earlier company website; all logos, contracts and partner statuses await approval.
          </p>
        </div>
      </section>

      {/* ─── Group Ecosystem ──────────────────────────────────────────────── */}
      <section className="bg-[#F9FAF4] py-16 md:py-24 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6 flex flex-col gap-12">
          <div>
            <span className="text-xs font-mono font-semibold text-[#4B6D00] uppercase tracking-widest">
              GROUP ECOSYSTEM
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#1A1C19] mt-2">
              Connected capabilities.
            </h2>
            <p className="font-body text-sm md:text-base text-[#3F4942] mt-2 max-w-2xl">
              The previous website identifies these group relationships; this page does not assert current contractual or operational status.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <article className="p-8 rounded-3xl bg-white border border-[#E8EAE3] shadow-card hover:shadow-elevated transition-shadow flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-brand-forest/10 flex items-center justify-center text-brand-forest">
                  <Building2 size={24} />
                </div>
                <span className="text-[11px] font-mono uppercase bg-[#F3F4EE] text-[#1A1C19] px-3 py-1 rounded-md border border-[#E8EAE3] font-semibold w-fit">
                  SOLAR EPC
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-[#1A1C19]">Jai Kisaan Solar</h3>
                <p className="font-body text-sm text-[#3F4942] leading-relaxed">
                  Renewable-energy project engineering, procurement, construction and support across rooftop, commercial, and utility-scale installations.
                </p>
              </div>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-1.5 font-heading font-semibold text-xs text-brand-forest hover:underline"
              >
                Explore solutions <ArrowRight size={13} />
              </Link>
            </article>

            {/* Card 2 */}
            <article className="p-8 rounded-3xl bg-white border border-[#E8EAE3] shadow-card hover:shadow-elevated transition-shadow flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-brand-lime/20 flex items-center justify-center text-[#4B6D00]">
                  <Handshake size={24} />
                </div>
                <span className="text-[11px] font-mono uppercase bg-brand-forest/10 text-brand-forest px-3 py-1 rounded-md font-semibold w-fit">
                  PUBLISHED SALES &amp; MARKETING PARTNER
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-[#1A1C19]">eSunScope</h3>
                <p className="font-body text-sm text-[#3F4942] leading-relaxed">
                  Named on the former homepage as the company’s Indian sales and marketing partner, driving digital customer aggregation and soft-cost reduction.
                </p>
              </div>
              <a
                href="https://esunscope.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-heading font-semibold text-xs text-brand-forest hover:underline"
              >
                Explore eSunScope ↗
              </a>
            </article>

            {/* Card 3 */}
            <article className="p-8 rounded-3xl bg-white border border-[#E8EAE3] shadow-card hover:shadow-elevated transition-shadow flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-brand-forest/10 flex items-center justify-center text-brand-forest">
                  <Network size={24} />
                </div>
                <span className="text-[11px] font-mono uppercase bg-[#F3F4EE] text-[#1A1C19] px-3 py-1 rounded-md border border-[#E8EAE3] font-semibold w-fit">
                  GROUP MEMBER MENTIONED
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-[#1A1C19]">CityScene Global</h3>
                <p className="font-body text-sm text-[#3F4942] leading-relaxed">
                  Included in the previous site’s description of a group spanning clean energy, transmission infrastructure, and digital transformation services.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 font-heading font-semibold text-xs text-brand-forest hover:underline"
              >
                Learn about group history <ArrowRight size={13} />
              </Link>
            </article>
          </div>

          {/* Mission Band */}
          <div className="rounded-3xl bg-[#12241A] text-white p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border border-white/10">
            <div className="max-w-2xl">
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                Local associates and operating relationships
              </h3>
              <p className="font-body text-sm text-[#A3B3AA] mt-2 leading-relaxed">
                The older contact directory names RK Electricals, SunOrient, Sunrise Solar, Sungrid Solar and Satnaara Solar. These locations are presented on Contact Us as <strong>previously listed associates</strong>, not independently verified current branches.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-lime text-brand-forest font-heading font-bold text-sm px-6 py-3 rounded-xl hover:bg-lime-400 transition-colors whitespace-nowrap"
            >
              Discuss a partnership ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Partners;
