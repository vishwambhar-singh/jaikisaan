import React from 'react';
import { X, CheckCircle, MapPin, Zap, Sun, Shield, ArrowRight } from 'lucide-react';
import { CITIES, CITY_DETAILS, City, useCity } from '../context/CityContext';
import { Link } from 'react-router-dom';

const CityModal: React.FC = () => {
  const { activeCity, setActiveCity, modalOpen, setModalOpen, cityData } = useCity();

  if (!modalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-4xl max-h-[88vh] overflow-y-auto bg-surface-dark border border-border-darkSubtle rounded-2xl sm:rounded-3xl shadow-elevated p-4 sm:p-6 md:p-8 text-text-onDark"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setModalOpen(false)}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 flex items-center justify-center text-text-onDark transition-colors"
          aria-label="Close City Selector"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="max-w-2xl flex flex-col gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lime/15 border border-brand-lime/30 text-brand-lime text-xs font-body font-semibold w-fit">
            <MapPin size={12} />
            Apple-Style Regional Adaptation Engine
          </div>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-onDark">
            Select Your Operational Geography
          </h2>
          <p className="font-body text-sm text-text-onDarkMuted">
            Switch regions to instantly adapt solar irradiance calculations, DISCOM net-metering policies, tariff surcharges, and local engineering response teams.
          </p>
        </div>

        {/* City Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-6">
          {CITIES.map((cityName) => {
            const data = CITY_DETAILS[cityName];
            const isSelected = activeCity === cityName;
            return (
              <div
                key={cityName}
                onClick={() => setActiveCity(cityName)}
                className={`cursor-pointer p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between gap-3 relative ${
                  isSelected
                    ? 'bg-brand-forest/30 border-brand-lime shadow-glow-lime'
                    : 'bg-surface-darkCard/80 border-border-darkSubtle hover:border-brand-lime/40 hover:bg-white/5'
                }`}
              >
                {/* Top: City & State */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-text-onDark">{data.city}</h3>
                    <span className="text-xs font-body text-text-onDarkMuted">{data.state}</span>
                  </div>
                  {isSelected ? (
                    <span className="flex items-center gap-1 text-[11px] font-body font-semibold text-brand-lime bg-brand-lime/15 px-2 py-0.5 rounded-full border border-brand-lime/30">
                      <CheckCircle size={11} /> Active
                    </span>
                  ) : (
                    <span className="text-[11px] font-body text-text-onDarkMuted border border-white/10 px-2 py-0.5 rounded-full">
                      Select
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="flex flex-col gap-1.5 text-xs font-body pt-2 border-t border-border-darkSubtle">
                  <div className="flex items-center gap-1.5 text-brand-lime font-medium">
                    <Zap size={11} className="flex-shrink-0" />
                    <span className="truncate">{data.discom}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-text-onDarkMuted">
                    <Sun size={11} className="flex-shrink-0" />
                    <span>{data.irradiance} · {data.sunnyDays}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-text-onDarkMuted">
                    <Shield size={11} className="flex-shrink-0" />
                    <span className="truncate">{data.subsidyCap}</span>
                  </div>
                </div>

                {/* Regional Desk Badge */}
                <div className="text-[11px] font-body text-brand-lime/80 bg-white/5 px-2.5 py-1 rounded-lg">
                  {data.highlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-4 rounded-2xl bg-white/5 border border-border-darkSubtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-lime/15 flex items-center justify-center flex-shrink-0">
              <MapPin size={16} className="text-brand-lime" />
            </div>
            <div>
              <div className="text-xs font-body font-semibold text-text-onDark">
                Active Region: <span className="text-brand-lime">{cityData.city}</span> ({cityData.state})
              </div>
              <div className="text-[11px] font-body text-text-onDarkMuted">
                DISCOM: {cityData.discom} · O&M: {cityData.office}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              to="/city-selector"
              onClick={() => setModalOpen(false)}
              className="text-xs font-body text-brand-lime hover:underline flex items-center gap-1 mr-2"
            >
              Full Spec Architecture <ArrowRight size={12} />
            </Link>
            <button
              onClick={() => setModalOpen(false)}
              className="h-10 px-5 rounded-xl bg-brand-forest hover:bg-brand-forestLight text-white font-body font-semibold text-xs border border-brand-forest transition-colors shadow-glow-lime"
            >
              Apply &amp; Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityModal;

