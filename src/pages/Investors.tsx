import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';

const EXPLORE_ITEMS = [
  'Company Overview',
  'Business Model',
  'Business Verticals',
  'Growth Strategy',
  'Future Expansion Plans',
  'Corporate Presentations',
  'Investor Enquiry',
  'Green Bonds Offerings',
];

const Investors: React.FC = () => {
  return (
    <main>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-brand-forest pt-28 pb-16 md:pb-20">
        <div className="max-w-[1248px] mx-auto px-6 text-center">
          <span className="inline-block text-xs font-mono font-semibold text-brand-lime uppercase tracking-widest mb-4">
            INVESTOR RELATIONS
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mx-auto">
            Building for the{' '}
            <span className="text-brand-lime">energy transition.</span>
          </h1>
          <p className="mt-5 font-body text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore our renewable-energy business, strategy and potential areas of collaboration.
          </p>
        </div>
      </section>

      {/* ─── Green Finance Banner ─────────────────────────────────────────── */}
      <section className="bg-[#F9FAF4] py-16 md:py-24 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6 flex flex-col gap-14">
          <div className="rounded-3xl bg-[#12241A] text-white p-8 md:p-14 border border-white/10 shadow-elevated flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="max-w-3xl flex flex-col gap-3">
              <span className="text-xs font-mono font-semibold text-brand-lime uppercase tracking-widest">
                GREEN FINANCE · INFORMATIONAL ONLY
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                Green bonds &amp; future financing initiatives.
              </h2>
              <p className="font-body text-sm md:text-base text-[#A3B3AA] leading-relaxed">
                The requirements mention green bonds under R&amp;D and three investors onboarded. Neither a bond offering nor investor count is represented here as verified. No subscription, returns or offer terms are available on this preview.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-lime text-brand-forest font-heading font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-lime-400 transition-colors whitespace-nowrap shadow-sm"
            >
              Send investor enquiry ↗
            </Link>
          </div>

          {/* ─── Explore Section ────────────────────────────────────────────── */}
          <div>
            <div className="mb-8">
              <span className="text-xs font-mono font-semibold text-[#4B6D00] uppercase tracking-widest">
                EXPLORE
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1A1C19] mt-1">
                Investor Information Directory
              </h3>
              <p className="font-body text-sm text-[#3F4942] mt-1">
                Financial, regulatory, investment and forward-looking claims require management and legal approval.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {EXPLORE_ITEMS.map((item) => {
                const isBond = item === 'Green Bonds Offerings';
                return (
                  <article
                    key={item}
                    className="p-7 rounded-3xl bg-white border border-[#E8EAE3] shadow-card hover:shadow-elevated transition-shadow flex flex-col justify-between gap-5"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-brand-forest/10 flex items-center justify-center text-brand-forest mb-4">
                        {isBond ? <ShieldCheck size={20} /> : <TrendingUp size={20} />}
                      </div>
                      <h4 className="font-heading font-bold text-lg text-[#1A1C19]">{item}</h4>
                      <p className="font-body text-xs text-[#3F4942] mt-2 leading-relaxed">
                        {isBond
                          ? 'Under review. Not an invitation to invest.'
                          : 'Company-approved materials and data will be published here.'}
                      </p>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 font-heading font-semibold text-xs text-brand-forest hover:underline pt-2 border-t border-[#E8EAE3]"
                    >
                      Explore details <ArrowRight size={13} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Investors;
