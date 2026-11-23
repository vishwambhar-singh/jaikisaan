import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Zap, 
  TrendingUp, 
  Calendar, 
  DollarSign, 
  Clock, 
  Copy, 
  Check, 
  MessageCircle, 
  ArrowRight,
  Info,
  ShieldCheck,
  SunMedium
} from 'lucide-react';
import { cn } from '../lib/cn';

interface SolarSavingsCalculatorProps {
  className?: string;
  onEnquirySubmitted?: (data: any) => void;
}

export const SolarSavingsCalculator: React.FC<SolarSavingsCalculatorProps> = ({ className }) => {
  // Calculator inputs based on jai_kisan_solar_savings_calculator.html
  const [bill, setBill] = useState<number>(10000);
  const [capacity, setCapacity] = useState<number>(5);
  const [tariff, setTariff] = useState<number>(8.5);
  const [generationPerKw, setGenerationPerKw] = useState<number>(120);
  const [costPerKw, setCostPerKw] = useState<number>(55000);

  // Lead capture inputs
  const [customerName, setCustomerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [enquiryPrepared, setEnquiryPrepared] = useState<boolean>(false);

  // Calculations
  const { units, monthlySavings, annualSavings, investment, payback } = useMemo(() => {
    const safeBill = Math.max(0, bill || 0);
    const safeCapacity = Math.max(0.1, capacity || 0);
    const safeTariff = Math.max(0, tariff || 0);
    const safeGen = Math.max(0, generationPerKw || 0);
    const safeCost = Math.max(0, costPerKw || 0);

    const calculatedUnits = safeCapacity * safeGen;
    // Conservative estimate: savings cannot exceed monthly bill
    const calculatedMonthlySavings = Math.min(safeBill, calculatedUnits * safeTariff);
    const calculatedAnnualSavings = calculatedMonthlySavings * 12;
    const calculatedInvestment = safeCapacity * safeCost;
    const calculatedPayback = calculatedAnnualSavings > 0 ? calculatedInvestment / calculatedAnnualSavings : null;

    return {
      units: calculatedUnits,
      monthlySavings: calculatedMonthlySavings,
      annualSavings: calculatedAnnualSavings,
      investment: calculatedInvestment,
      payback: calculatedPayback
    };
  }, [bill, capacity, tariff, generationPerKw, costPerKw]);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(Number.isFinite(val) ? val : 0);
  };

  const getEnquiryText = () => {
    return [
      '⚡ JaiKisaan Solar - Solar Savings Enquiry',
      `Name: ${customerName.trim() || 'Not provided'}`,
      `Mobile: ${phone.trim() || 'Not provided'}`,
      `City: ${city.trim() || 'Not provided'}`,
      `Monthly electricity bill: ${formatINR(bill)}`,
      `Solar plant capacity: ${capacity} kW`,
      `Tariff: ₹${tariff} per unit`,
      `Estimated generation: ${Math.round(units).toLocaleString('en-IN')} units/month`,
      `Estimated monthly savings: ${formatINR(monthlySavings)}`,
      `Estimated annual savings: ${formatINR(annualSavings)}`,
      `Estimated investment: ${formatINR(investment)}`,
      `Estimated payback period: ${payback === null ? 'Not available' : payback.toFixed(1) + ' years'}`,
      'Note: Indicative estimate for initial feasibility.'
    ].join('\n');
  };

  const handlePrepareEnquiry = () => {
    if (!customerName.trim() || !phone.trim() || !city.trim()) {
      setMessage({
        text: 'Please enter your name, a valid contact number, and your city.',
        type: 'error'
      });
      setEnquiryPrepared(false);
      return;
    }

    if (!/^[0-9+()\-\s]{8,16}$/.test(phone.trim())) {
      setMessage({
        text: 'Please enter a valid phone number (at least 10 digits).',
        type: 'error'
      });
      setEnquiryPrepared(false);
      return;
    }

    setMessage({
      text: 'Your custom solar feasibility summary has been prepared. You can copy the details or connect directly with our engineering desk on WhatsApp.',
      type: 'success'
    });
    setEnquiryPrepared(true);
  };

  const handleCopyEnquiry = async () => {
    try {
      await navigator.clipboard.writeText(getEnquiryText());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setMessage({
        text: 'Clipboard copy failed. Please select and copy manually.',
        type: 'error'
      });
    }
  };

  const whatsappUrl = useMemo(() => {
    const text = encodeURIComponent(getEnquiryText());
    return `https://wa.me/917239992778?text=${text}`;
  }, [customerName, phone, city, bill, capacity, tariff, generationPerKw, costPerKw, monthlySavings, annualSavings, investment, payback, units]);

  return (
    <div className={cn('w-full max-w-[1248px] mx-auto', className)} id="calculator">
      {/* Header Eyebrow & Title */}
      <div className="mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lime/10 border border-brand-lime/20 text-brand-lime font-mono text-xs font-semibold uppercase tracking-wider mb-3">
          <SunMedium size={14} className="text-brand-lime animate-spin-slow" />
          Smart Solar Planning &amp; ROI Engine
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          Calculate Your Solar Savings
        </h2>
        <p className="font-body text-[#A3B3AA] text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
          Enter your current electricity details to get an instant, transparent estimate of your monthly savings, capital investment, and simple payback period.
        </p>
      </div>

      {/* Main 2-Column Calculator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Electricity Details & Inputs (6 cols) */}
        <div className="lg:col-span-6 bg-[#1A2620] border border-[#2B4234] rounded-3xl p-6 sm:p-8 shadow-elevated">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
            <div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-white flex items-center gap-2">
                <Calculator size={18} className="text-brand-lime" />
                Your Electricity Details
              </h3>
              <p className="font-body text-xs text-[#A3B3AA] mt-0.5">
                Adjust values to reflect your connection and rooftop requirements.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {/* Field 1: Monthly Bill */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="calc-bill" className="font-body text-xs sm:text-sm font-semibold text-white">
                  Monthly Electricity Bill (₹)
                </label>
                <span className="font-mono text-xs text-brand-lime font-bold">
                  {formatINR(bill)}
                </span>
              </div>
              <input
                id="calc-bill"
                type="number"
                min={0}
                step={500}
                value={bill || ''}
                onChange={(e) => setBill(Math.max(0, Number(e.target.value) || 0))}
                className="w-full bg-[#141E19] border border-[#2B4234] focus:border-brand-lime rounded-xl px-4 py-3 text-white font-mono text-sm outline-none transition-colors"
                placeholder="e.g. 10000"
              />
              {/* Quick Bill Preset Pills */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {[5000, 10000, 25000, 50000].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setBill(preset)}
                    className={cn(
                      'px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors',
                      bill === preset
                        ? 'bg-brand-lime text-[#17231D] font-bold'
                        : 'bg-white/5 hover:bg-white/10 text-[#A3B3AA] border border-white/10'
                    )}
                  >
                    ₹{(preset / 1000).toFixed(0)}k
                  </button>
                ))}
              </div>
            </div>

            {/* Field 2: Solar Plant Capacity */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="calc-capacity" className="font-body text-xs sm:text-sm font-semibold text-white">
                  Solar Plant Capacity (kW)
                </label>
                <span className="font-mono text-xs text-brand-lime font-bold">
                  {capacity} kW
                </span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  id="calc-capacity"
                  type="number"
                  min={0.5}
                  max={500}
                  step={0.5}
                  value={capacity || ''}
                  onChange={(e) => setCapacity(Math.max(0.1, Number(e.target.value) || 0))}
                  className="w-28 bg-[#141E19] border border-[#2B4234] focus:border-brand-lime rounded-xl px-3 py-2.5 text-white font-mono text-sm outline-none transition-colors"
                />
                <input
                  type="range"
                  min={1}
                  max={50}
                  step={0.5}
                  value={Math.min(50, capacity)}
                  onChange={(e) => setCapacity(Number(e.target.value))}
                  className="w-full accent-[#C5F176] cursor-pointer"
                />
              </div>
              {/* Capacity Presets */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {[
                  { label: '3 kW (Rooftop)', val: 3 },
                  { label: '5 kW (Home)', val: 5 },
                  { label: '10 kW (Villa)', val: 10 },
                  { label: '25 kW (Commercial)', val: 25 },
                ].map((item) => (
                  <button
                    key={item.val}
                    type="button"
                    onClick={() => setCapacity(item.val)}
                    className={cn(
                      'px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors',
                      capacity === item.val
                        ? 'bg-brand-lime text-[#17231D] font-bold'
                        : 'bg-white/5 hover:bg-white/10 text-[#A3B3AA] border border-white/10'
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Field 3: Electricity Tariff */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="calc-tariff" className="font-body text-xs sm:text-sm font-semibold text-white">
                  Average Electricity Tariff (₹ per unit)
                </label>
                <span className="font-mono text-xs text-brand-lime font-bold">
                  ₹{tariff} / unit
                </span>
              </div>
              <input
                id="calc-tariff"
                type="number"
                min={1}
                max={25}
                step={0.1}
                value={tariff || ''}
                onChange={(e) => setTariff(Math.max(0, Number(e.target.value) || 0))}
                className="w-full bg-[#141E19] border border-[#2B4234] focus:border-brand-lime rounded-xl px-4 py-3 text-white font-mono text-sm outline-none transition-colors"
              />
              <p className="font-body text-[11px] text-[#7C8F83] mt-1">
                Typical DISCOM residential tariffs in North India average ₹7.50 to ₹9.50/unit.
              </p>
            </div>

            {/* Field 4: Generation per kW/month */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="calc-generation" className="font-body text-xs sm:text-sm font-semibold text-white">
                  Estimated Generation per kW / Month (units)
                </label>
                <span className="font-mono text-xs text-brand-lime font-bold">
                  {generationPerKw} units / kW
                </span>
              </div>
              <input
                id="calc-generation"
                type="number"
                min={50}
                max={200}
                step={1}
                value={generationPerKw || ''}
                onChange={(e) => setGenerationPerKw(Math.max(0, Number(e.target.value) || 0))}
                className="w-full bg-[#141E19] border border-[#2B4234] focus:border-brand-lime rounded-xl px-4 py-3 text-white font-mono text-sm outline-none transition-colors"
              />
              <p className="font-body text-[11px] text-[#7C8F83] mt-1">
                Benchmark: 120 units per kW per month across Rajasthan, UP, Haryana, and NCR.
              </p>
            </div>

            {/* Field 5: Estimated Cost per kW */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="calc-cost" className="font-body text-xs sm:text-sm font-semibold text-white">
                  Estimated Installation Cost per kW (₹)
                </label>
                <span className="font-mono text-xs text-brand-lime font-bold">
                  {formatINR(costPerKw)} / kW
                </span>
              </div>
              <input
                id="calc-cost"
                type="number"
                min={20000}
                max={150000}
                step={500}
                value={costPerKw || ''}
                onChange={(e) => setCostPerKw(Math.max(0, Number(e.target.value) || 0))}
                className="w-full bg-[#141E19] border border-[#2B4234] focus:border-brand-lime rounded-xl px-4 py-3 text-white font-mono text-sm outline-none transition-colors"
              />
              <p className="font-body text-[11px] text-[#7C8F83] mt-1">
                Covers Tier-1 monocrystalline bifacial panels, certified on-grid inverter, mounting structures, and net-metering liaison.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Estimated Savings & Enquiry (6 cols) */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Results Card */}
          <div className="bg-gradient-to-br from-[#005733] to-[#0A3D25] border border-[#2B4234] rounded-3xl p-6 sm:p-8 text-white shadow-elevated relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Zap size={140} className="text-white" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#C5F176]">
                  ESTIMATED MONTHLY BILL SAVING
                </span>
                <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-white">
                  Live Model
                </span>
              </div>

              {/* Big Monthly Saving Display */}
              <div className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight mt-3 mb-1">
                {formatINR(monthlySavings)}
              </div>
              <p className="font-body text-xs text-[#D1F2D9]">
                Indicative solar savings based on 100% self-consumption &amp; net-metering banking.
              </p>

              {/* 4 Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-black/20 border border-white/10 backdrop-blur-sm">
                  <span className="text-xs font-mono text-[#C5F176] block mb-1">Annual Savings</span>
                  <strong className="font-heading font-bold text-lg sm:text-xl text-white">
                    {formatINR(annualSavings)}
                  </strong>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-black/20 border border-white/10 backdrop-blur-sm">
                  <span className="text-xs font-mono text-[#C5F176] block mb-1">Monthly Generation</span>
                  <strong className="font-heading font-bold text-lg sm:text-xl text-white">
                    {Math.round(units).toLocaleString('en-IN')} units
                  </strong>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-black/20 border border-white/10 backdrop-blur-sm">
                  <span className="text-xs font-mono text-[#C5F176] block mb-1">Estimated Investment</span>
                  <strong className="font-heading font-bold text-lg sm:text-xl text-white">
                    {formatINR(investment)}
                  </strong>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-black/20 border border-white/10 backdrop-blur-sm">
                  <span className="text-xs font-mono text-[#C5F176] block mb-1">Simple Payback</span>
                  <strong className="font-heading font-bold text-lg sm:text-xl text-white">
                    {payback === null ? '—' : `${payback.toFixed(1)} years`}
                  </strong>
                </div>
              </div>

              <div className="flex items-start gap-2 mt-5 pt-4 border-t border-white/15 text-[11px] font-body text-[#D1F2D9]/80 leading-relaxed">
                <Info size={14} className="flex-shrink-0 mt-0.5 text-brand-lime" />
                <span>
                  Savings are capped at the entered monthly bill. Excludes potential central/state DBT subsidies (e.g. up to ₹78,000 under PM Surya Ghar) which will further shorten your payback period.
                </span>
              </div>
            </div>
          </div>

          {/* Lead Enquiry Box */}
          <div className="bg-[#1A2620] border border-[#2B4234] rounded-3xl p-6 sm:p-8 shadow-card">
            <h4 className="font-heading font-bold text-base sm:text-lg text-white">
              Want an Official Solar Proposal?
            </h4>
            <p className="font-body text-xs sm:text-sm text-[#A3B3AA] mt-1 mb-5">
              Enter your details to generate your verified calculation summary and connect with our engineering desk.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-xs font-semibold text-white mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-[#141E19] border border-[#2B4234] focus:border-brand-lime rounded-xl px-3.5 py-2.5 text-white font-body text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white mb-1.5">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit mobile"
                  className="w-full bg-[#141E19] border border-[#2B4234] focus:border-brand-lime rounded-xl px-3.5 py-2.5 text-white font-body text-sm outline-none transition-colors"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-white mb-1.5">
                  City / Location
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Lucknow, Jaipur, or Delhi NCR"
                  className="w-full bg-[#141E19] border border-[#2B4234] focus:border-brand-lime rounded-xl px-3.5 py-2.5 text-white font-body text-sm outline-none transition-colors"
                />
              </div>
            </div>

            {/* Notification message */}
            {message && (
              <div
                className={cn(
                  'p-3 rounded-xl text-xs font-body mb-4 leading-relaxed',
                  message.type === 'success'
                    ? 'bg-[#103D25] text-brand-lime border border-brand-lime/30'
                    : 'bg-red-950/60 text-red-200 border border-red-800/40'
                )}
              >
                {message.text}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col gap-2.5">
              <button
                type="button"
                onClick={handlePrepareEnquiry}
                className="w-full h-12 rounded-xl bg-brand-forest hover:bg-brand-forestLight text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-card"
              >
                <span>Prepare My Solar Enquiry</span>
                <ArrowRight size={14} />
              </button>

              {enquiryPrepared && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 animate-fadeIn">
                  <button
                    type="button"
                    onClick={handleCopyEnquiry}
                    className="h-11 rounded-xl bg-[#23352B] hover:bg-[#2C4236] text-white text-xs font-heading font-semibold flex items-center justify-center gap-2 transition-colors border border-white/10"
                  >
                    {copied ? <Check size={14} className="text-brand-lime" /> : <Copy size={14} />}
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Enquiry Details'}</span>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 rounded-xl bg-[#005733] hover:bg-[#004729] text-white text-xs font-heading font-semibold flex items-center justify-center gap-2 transition-colors border border-brand-lime/20"
                  >
                    <MessageCircle size={15} className="text-brand-lime" />
                    <span>Send via WhatsApp</span>
                  </a>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 mt-4 text-[11px] font-mono text-[#7C8F83]">
              <ShieldCheck size={14} className="text-brand-lime flex-shrink-0" />
              <span>Zero-spam guarantee · Direct connection with MNRE-empanelled engineers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarSavingsCalculator;
