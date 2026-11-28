import React from 'react';
import { Mail, Shield } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <main>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-brand-forest pt-28 pb-16 md:pb-20">
        <div className="max-w-[1248px] mx-auto px-6 text-center">
          <span className="inline-block text-xs font-mono font-semibold text-brand-lime uppercase tracking-widest mb-4">
            LEGAL NOTICE
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mx-auto">
            Privacy <span className="text-brand-lime">Policy.</span>
          </h1>
          <p className="mt-5 font-body text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Draft website policy content for review and legal approval.
          </p>
        </div>
      </section>

      {/* ─── Policy Body ──────────────────────────────────────────────────── */}
      <section className="bg-[#F9FAF4] py-16 md:py-24 border-b border-[#E8EAE3]">
        <div className="max-w-[850px] mx-auto px-6">
          <div className="rounded-3xl bg-white border border-[#E8EAE3] p-8 md:p-14 shadow-card flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-forest/10 flex items-center justify-center text-brand-forest">
                <Shield size={24} />
              </div>
              <div>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1A1C19]">
                  How enquiries are handled
                </h2>
                <span className="text-xs font-mono text-[#4B6D00]">Last updated: 2026</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 font-body text-sm md:text-base text-[#3F4942] leading-relaxed border-t border-[#E8EAE3] pt-6">
              <p>
                In this static preview, customer information entered into enquiry forms is used to prefill a WhatsApp message on the visitor’s device. The website itself does not save, forward or store those submissions. Sending the WhatsApp message is a separate user action.
              </p>
              <p>
                Once a CRM or lead-routing system is connected, this notice must be updated to describe data collection, purposes, retention periods, data sharing policies, and user privacy rights.
              </p>
              <p>
                We respect your personal data and take reasonable technical and administrative precautions to safeguard any information you share directly with our team.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F9FAF4] border border-[#E8EAE3] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
              <div>
                <strong className="font-heading text-sm text-[#1A1C19] block">
                  Questions regarding privacy?
                </strong>
                <span className="font-body text-xs text-[#3F4942]">
                  Reach out directly to our compliance and privacy desk.
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

export default Privacy;
