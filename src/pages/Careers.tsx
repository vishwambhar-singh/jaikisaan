import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, CheckCircle, MapPin, Phone } from 'lucide-react';

const ROLES = [
  {
    name: 'Area Sales Manager — Solar Rooftop',
    experience: '3–4 years',
    location: 'Lucknow',
    scope: [
      'Develop the regional rooftop solar market and generate business opportunities',
      'Manage residential and commercial leads, negotiations and relationships',
      'Build and oversee the sales team and maintain sales reporting',
    ],
    qualification:
      'Engineering or MBA background preferred; experience in solar sales and market development.',
  },
  {
    name: 'Sales Executive — Residential Solar',
    experience: '1–2 years',
    location: 'Lucknow',
    scope: [
      'Find and qualify residential solar prospects',
      'Explain options, conduct consultations and follow up on proposals',
      'Coordinate sales documentation and project handover',
    ],
    qualification:
      'Bachelor’s in electrical or electronics engineering preferred, with strong communication and customer-facing skills.',
  },
];

const Careers: React.FC = () => {
  return (
    <main>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-brand-forest pt-28 pb-16 md:pb-20">
        <div className="max-w-[1248px] mx-auto px-6 text-center">
          <span className="inline-block text-xs font-mono font-semibold text-brand-lime uppercase tracking-widest mb-4">
            CAREERS
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mx-auto">
            Build the future of{' '}
            <span className="text-brand-lime">solar with us.</span>
          </h1>
          <p className="mt-5 font-body text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore the roles formerly advertised by the company. Recruitment status must be reconfirmed before applying.
          </p>
        </div>
      </section>

      {/* ─── Previously Published Jobs ────────────────────────────────────── */}
      <section className="bg-[#F9FAF4] py-16 md:py-24 border-b border-[#E8EAE3]">
        <div className="max-w-[1248px] mx-auto px-6 flex flex-col gap-12">
          <div>
            <span className="text-xs font-mono font-semibold text-[#4B6D00] uppercase tracking-widest">
              PREVIOUSLY PUBLISHED JOBS
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#1A1C19] mt-2">
              Two profiles from the former careers page.
            </h2>
            <p className="font-body text-sm md:text-base text-[#3F4942] mt-2 max-w-2xl">
              Details are preserved in summary form to support the recruitment team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ROLES.map((role) => (
              <article
                key={role.name}
                className="p-8 rounded-3xl bg-white border border-[#E8EAE3] shadow-card hover:shadow-elevated transition-shadow flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono uppercase bg-[#F3F4EE] text-[#1A1C19] px-3 py-1 rounded-md border border-[#E8EAE3] font-semibold flex items-center gap-1.5">
                      <MapPin size={12} className="text-brand-forest" />
                      ARCHIVED LISTING · {role.location.toUpperCase()}
                    </span>
                    <span className="text-xs font-mono text-[#4B6D00] font-semibold">
                      Exp: {role.experience}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl text-[#1A1C19]">
                    {role.name}
                  </h3>

                  <div className="flex flex-col gap-2 pt-2">
                    <strong className="text-xs font-mono text-[#1A1C19] uppercase tracking-wider">
                      Key Responsibilities &amp; Scope:
                    </strong>
                    <ul className="flex flex-col gap-2 font-body text-sm text-[#3F4942]">
                      {role.scope.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle size={15} className="text-brand-forest flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-[#E8EAE3]">
                    <strong className="text-xs font-mono text-[#1A1C19] uppercase tracking-wider block mb-1">
                      Candidate Profile:
                    </strong>
                    <p className="font-body text-xs text-[#3F4942] leading-relaxed">
                      {role.qualification}
                    </p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-brand-forest text-white font-heading font-bold text-sm px-6 py-3 rounded-xl hover:bg-brand-forestLight transition-colors w-full"
                >
                  Ask whether this role is open ↗
                </Link>
              </article>
            ))}
          </div>

          {/* Lead Block */}
          <div className="rounded-3xl bg-[#12241A] text-white p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border border-white/10">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-semibold text-brand-lime uppercase tracking-widest">
                LET'S TALK SOLAR
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white mt-1">
                Interested in working with Jai Kisaan Solar?
              </h3>
              <p className="font-body text-sm text-[#A3B3AA] mt-2 leading-relaxed">
                Tell the team which previously published role interests you and ask for current vacancy details.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+917239992778"
                className="inline-flex items-center gap-2 bg-brand-lime text-brand-forest font-heading font-bold text-sm px-5 py-3 rounded-xl hover:bg-lime-400 transition-colors whitespace-nowrap"
              >
                <Phone size={15} /> Call +91 72399 92778 ↗
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-heading font-bold text-sm px-5 py-3 rounded-xl hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                Submit enquiry ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;
