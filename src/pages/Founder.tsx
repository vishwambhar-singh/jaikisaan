import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../lib/assets';

const PILLARS = [
  {
    emoji: '⚡',
    title: 'Clean Energy Innovation',
    desc: "Pioneering distributed solar engineering, smart pumps and micro-grids for India's diverse energy needs.",
  },
  {
    emoji: '🌐',
    title: 'Group Synergy',
    desc: 'Cohesive execution across eSunScope, Jai Kisaan Solar, and CityScene for unified impact.',
  },
  {
    emoji: '🌱',
    title: 'Nation First Foundation',
    desc: 'Active CSR empowering farmers, rural schools and community energy access across Bharat.',
  },
  {
    emoji: '🇮🇳',
    title: 'Atmanirbhar Bharat',
    desc: 'Local sourcing, regional skill development and youth career growth to build a self-reliant India.',
  },
];

const GROUP_COMPANIES = [
  {
    color: '#165f39',
    name: 'eSunScope Solar',
    desc: 'Focuses on market aggregation, reducing soft costs in the solar value chain, driving customer acquisition, and delivering reliable rooftop and ground-mounted solar solutions.',
  },
  {
    color: '#a6cc3b',
    name: 'Jai Kisaan Solar',
    desc: 'Dedicated to empowering the agricultural and rural community through localized solar engineering, solar water pumping systems, and distributed clean energy generation.',
  },
  {
    color: '#1f5742',
    name: 'CityScene Global',
    desc: 'Bridges cutting-edge technologies, commercial infrastructure, power transmission, and scalable green power developments.',
  },
];

const Founder: React.FC = () => (
  <main>
    {/* ─── Hero ─────────────────────────────────────────────────────────────── */}
    <section className="bg-brand-forest pt-28 pb-16 md:pb-20">
      <div className="max-w-[1248px] mx-auto px-6 text-center">
        <span className="inline-block text-xs font-mono font-semibold text-brand-lime uppercase tracking-widest mb-4">
          FOUNDER'S MESSAGE
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mx-auto">
          A message from our{' '}
          <span className="text-brand-lime">Founder &amp; CEO.</span>
        </h1>
        <p className="mt-5 font-body text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Driving innovation, sustainability, and collaboration to power a cleaner, brighter Bharat.
        </p>
      </div>
    </section>

    <section className="bg-[#F9FAF4] py-14 md:py-20 border-b border-[#E8EAE3]">
      <div className="max-w-[1248px] mx-auto px-6 flex flex-col gap-12">

        {/* ─── Executive Profile Banner ─────────────────────────────────────── */}
        <div className="rounded-3xl overflow-hidden border border-[#E8EAE3] shadow-card bg-white grid md:grid-cols-12 items-center">
          {/* Portrait Column */}
          <div className="md:col-span-5 h-[400px] sm:h-[460px] relative overflow-hidden bg-neutral-100">
            <img
              src={asset('/assets/images/sanjeev-kumar-portrait.jpg')}
              alt="Sanjeev Kumar - CEO, SunScope Group of Companies"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden" />
          </div>
          {/* Info & CTAs Column */}
          <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center gap-6">
            <div>
              <span className="text-xs font-mono font-semibold text-[#4B6D00] uppercase tracking-widest">
                LEADERSHIP PROFILE
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1A1C19] mt-2">
                Sanjeev Kumar
              </h2>
              <p className="font-body text-base text-[#3F4942] mt-1 font-semibold">
                Chief Executive Officer, SunScope Group of Companies · Jai Kisaan Solar
              </p>
            </div>

            <p className="font-body text-sm text-[#556A5C] leading-relaxed">
              Leading the national clean energy transition through distributed solar engineering, agricultural solarization, and sustainable industrial microgrids across India.
            </p>

            <div className="flex gap-3 flex-wrap pt-2">
              <a
                href="https://youtu.be/Ij_OQRmgdpE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-lime text-brand-forest font-heading font-bold text-sm px-6 py-3 rounded-xl hover:bg-lime-400 transition-colors shadow-sm"
              >
                ▶ Watch Video Message
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-brand-forest text-brand-forest font-heading font-bold text-sm px-6 py-3 rounded-xl hover:bg-brand-forest hover:text-white transition-colors"
              >
                Connect with Our Team ↗
              </Link>
            </div>
          </div>
        </div>

        {/* ─── 4 Pillars ────────────────────────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-white border border-[#E8EAE3] shadow-card p-7 flex flex-col gap-3 hover:shadow-elevated transition-shadow"
            >
              <span className="text-3xl">{p.emoji}</span>
              <h3 className="font-heading font-bold text-base text-[#1A1C19]">{p.title}</h3>
              <p className="font-body text-sm text-[#3F4942] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* ─── The Letter ───────────────────────────────────────────────────── */}
        <div className="rounded-3xl bg-white border border-[#E8EAE3] shadow-card p-8 md:p-14">
          {/* Header */}
          <div className="flex justify-between items-center mb-7 pb-5 border-b-2 border-[#EEF3EB]">
            <span className="text-xs font-mono font-semibold text-[#4B6D00] uppercase tracking-widest">
              OFFICIAL STATEMENT
            </span>
            <span className="text-xs font-mono text-[#3F4942] font-bold">
              SUNSCOPE GROUP OF COMPANIES
            </span>
          </div>

          {/* Salutation */}
          <p className="font-heading font-bold text-lg text-[#163E2A] leading-relaxed mb-6">
            Dear Clients, SunScopers, and Stakeholders,
          </p>

          {/* Body */}
          <div className="flex flex-col gap-5 font-body text-base text-[#3F4942] leading-relaxed">
            <p>
              At <strong>SunScope Group of Companies</strong>, we believe in the power of innovation, sustainability,
              and collaboration to create a brighter future. Our journey has been guided by a vision to provide clean
              energy, advanced technology, and financial empowerment to communities across the globe.
            </p>

            {/* Pull quote */}
            <blockquote className="rounded-2xl bg-brand-forest text-white p-6 md:p-8 my-2">
              <p className="font-heading font-bold text-lg md:text-xl leading-snug">
                "Success is not just about financial growth; it is about creating a positive, lasting impact on people
                and the planet."
              </p>
            </blockquote>

            <p>Each of our group companies plays a vital and complementary role in realizing this mission:</p>

            {/* Group companies */}
            <div className="flex flex-col gap-3 my-1">
              {GROUP_COMPANIES.map((co) => (
                <div
                  key={co.name}
                  className="p-5 rounded-r-2xl"
                  style={{ background: '#f8fbf6', borderLeft: `4px solid ${co.color}` }}
                >
                  <strong className="block text-sm font-heading mb-1" style={{ color: '#14432c' }}>
                    {co.name}
                  </strong>
                  <span className="text-sm text-[#556A5C]">{co.desc}</span>
                </div>
              ))}
            </div>

            <p>
              At SunScope Group, delivering quality with the highest professional standards is at the core of everything
              we do. We are committed to excellence in every project, ensuring robust engineering, dependable tier-1
              equipment, and lifetime service support.
            </p>

            <p>
              Through our non-profit organization, <strong>"Nation First Foundation"</strong>, we actively engage in
              initiatives that foster social development, environmental conservation, and equitable growth. Our efforts
              include providing solar power to rural areas to improve lives and economic opportunities. We are
              implementing smart solutions to support farmers, enhance agricultural productivity, and power essential
              community infrastructure.
            </p>

            <p>
              We also recognize that our people are the driving force behind our success. We are deeply committed to
              fostering a culture of continuous growth, mutual respect, and leadership development. All of our team
              members go through a structured career progression plan to ensure we build their bright future.
            </p>

            <p>
              We strongly believe in building local capability and utilizing local resources as much as possible. By
              doing so, we ensure that communities are engaged partners and direct beneficiaries of the green
              transition. By prioritizing local workforce development, supplier partnerships, and community involvement,
              we are not only strengthening our business ecosystem but also paving the way for a self-reliant and
              resilient Bharat.
            </p>
          </div>

          {/* Signature block */}
          <div className="mt-10 pt-8 border-t border-[#E8EAE3] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
            <div>
              <p className="font-body text-sm text-[#183E29] font-semibold mb-1">Warm regards,</p>
              <h3 className="font-heading font-extrabold text-2xl text-[#123B2A]">Sanjeev Kumar</h3>
              <p className="font-body text-sm text-[#3F4942] mt-0.5">
                <strong>Chief Executive Officer</strong>
                <br />
                SunScope Group of Companies · Jai Kisaan Solar
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-lime text-brand-forest font-heading font-bold text-sm px-6 py-3 rounded-xl hover:bg-lime-400 transition-colors whitespace-nowrap"
            >
              Reach Out to Our Leadership Team ↗
            </Link>
          </div>
        </div>

        {/* ─── Video Section ────────────────────────────────────────────────── */}
        <div className="rounded-3xl bg-brand-forest p-8 md:p-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 mb-7">
            <div>
              <span className="text-xs font-mono font-semibold text-brand-lime uppercase tracking-widest">
                LEADERSHIP BROADCAST
              </span>
              <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-white mt-1">
                Watch Sanjeev Kumar's Vision Address
              </h3>
            </div>
            <a
              href="https://youtu.be/Ij_OQRmgdpE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-lime text-brand-forest font-heading font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-lime-400 transition-colors whitespace-nowrap"
            >
              Open on YouTube ↗
            </a>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/Ij_OQRmgdpE?rel=0"
              title="Sanjeev Kumar - Leadership Message"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

      </div>
    </section>
  </main>
);

export default Founder;
