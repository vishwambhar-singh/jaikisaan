import React from 'react';
import { Mail, FileText } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <main>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-brand-forest pt-28 pb-16 md:pb-20">
        <div className="max-w-[1248px] mx-auto px-6 text-center">
          <span className="inline-block text-xs font-mono font-semibold text-brand-lime uppercase tracking-widest mb-4">
            LEGAL NOTICE
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mx-auto">
            Terms &amp; <span className="text-brand-lime">Conditions.</span>
          </h1>
          <p className="mt-5 font-body text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Draft website policy content for review and legal approval.
          </p>
        </div>
      </section>

      {/* ─── Terms Body ───────────────────────────────────────────────────── */}
      <section className="bg-[#F9FAF4] py-16 md:py-24 border-b border-[#E8EAE3]">
        <div className="max-w-[850px] mx-auto px-6">
          <div className="rounded-3xl bg-white border border-[#E8EAE3] p-8 md:p-14 shadow-card flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-forest/10 flex items-center justify-center text-brand-forest">
                <FileText size={24} />
              </div>
              <div>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1A1C19]">
                  Using the website
                </h2>
                <span className="text-xs font-mono text-[#4B6D00]">Last updated: 2026</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 font-body text-sm md:text-base text-[#3F4942] leading-relaxed border-t border-[#E8EAE3] pt-6">
              <p>
                Website information is general and indicative. Solar performance projections, technical specifications, government subsidies, financial calculations, project details, and service availability require independent confirmation and site-specific engineering evaluation.
              </p>
              <p>
                Any final commercial terms, warranty commitments, generation guarantees, payment milestones, and commissioning schedules will be set out exclusively in approved, written, and countersigned agreements.
              </p>
              <p>
                All trademarks, trade names, and corporate identities displayed on this website belong to their respective owners. Content on this site is protected under applicable intellectual property laws.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F9FAF4] border border-[#E8EAE3] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
              <div>
                <strong className="font-heading text-sm text-[#1A1C19] block">
                  Questions regarding website terms?
                </strong>
                <span className="font-body text-xs text-[#3F4942]">
                  Reach out directly to our legal and management desk.
                </span>
              </div>
              <a
                href="mailto:info@jaikisaansolar.com"
                className="inline-flex items-center gap-2 bg-brand-forest text-white font-heading font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-brand-forestLight transition-colors"
              >
                <Mail size={14} /> info@jaikisaansolar.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Terms;
