import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  MapPin, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  TrendingUp, 
  ShieldCheck,
  Radio,
  Cpu
} from 'lucide-react';
import { asset } from '../lib/assets';
import { cn } from '../lib/cn';

interface ProjectSlide {
  id: string;
  title: string;
  category: string;
  capacity: string;
  location: string;
  discom: string;
  savings: string;
  generation: string;
  description: string;
  image: string;
  link: string;
}

const FEATURED_SLIDES: ProjectSlide[] = [
  {
    id: 'agro-park-50mw',
    title: 'SunScope Agro-Park Utility Array',
    category: 'Utility-Scale Ground-Mount',
    capacity: '50 MWp',
    location: 'Sardarshahar, Churu, Rajasthan',
    discom: 'JVVNL · 132kV Substation',
    savings: '481,000 MWh Lifetime',
    generation: '210,000 kWh / day',
    description: 'Ground-mount bifacial park evacuating directly into 132kV transmission substation, powering 1,200+ rural farm pumping networks.',
    image: '/assets/images/91fff17c130fbfe7684a3e0e7fe83e3d5ca439c3.jpg',
    link: '/projects'
  },
  {
    id: 'vikas-cold-storage',
    title: 'Vikas Industrial Cold Storage',
    category: 'Commercial & Industrial Solar',
    capacity: '120 kWp',
    location: 'Jaipur, Rajasthan',
    discom: 'JVVNL Net-Metered',
    savings: '68% Electricity Bill Reduction',
    generation: '14,800 units / mo',
    description: 'Mitigating high daytime ammonia compressor surge loads; slashed monthly grid expenditure from ₹3.8L to ₹1.2L.',
    image: '/assets/images/aa80d82cedafbd1508c328b9e5f2754a3eb14919.jpg',
    link: '/projects/vikas-cold-storage'
  },
  {
    id: 'pm-kusum-pumps',
    title: 'PM-KUSUM Agri Feeder Solarization',
    category: 'Agricultural Solar Pumping',
    capacity: '15 HP Hybrid Sets',
    location: 'Chomu Tehsil, Jaipur rural belt',
    discom: 'Decentralized Agro Feeder',
    savings: '100% Zero Diesel Dependency',
    generation: '12,000 Liters / hr',
    description: 'Standalone and grid-tied solar agricultural pump sets providing reliable daytime irrigation for high-yield mustard and wheat farming.',
    image: '/assets/images/8cf9afdfdade266942ddb840b554b0834187be15.jpg',
    link: '/solutions'
  },
  {
    id: 'ecoheights-township',
    title: 'EcoHeights Luxury Residential Complex',
    category: 'Residential Society Rooftop',
    capacity: '85 kWp',
    location: 'Lucknow, Uttar Pradesh',
    discom: 'MVVNL · PM Surya Ghar',
    savings: '₹1.4 Lakh / month Saved',
    generation: '10,200 units / mo',
    description: 'Multi-tower residential society solar array capturing Central DBT subsidies and offsetting 88% of common-area utility consumption.',
    image: '/assets/images/9232e3c12d228af8636d84a34e8fdea09b42a4b1.jpg',
    link: '/projects'
  },
  {
    id: 'rajputana-warehousing',
    title: 'Rajputana Logistics & Cold Hub',
    category: 'C&I Captive Solar Rooftop',
    capacity: '250 kWp',
    location: 'Bhopal Corridor, Madhya Pradesh',
    discom: 'MPPKVVCL High Tension',
    savings: '40% Accelerated Depreciation',
    generation: '31,500 units / mo',
    description: 'Engineered for refrigerated logistics warehousing with zero downtime battery backup and smart peak-shaving controllers.',
    image: '/assets/images/709f7acc5449a720085baaeae6b5d101de5ffa01.jpg',
    link: '/projects'
  },
  {
    id: 'utility-bess-microgrid',
    title: 'High-Voltage Microgrid & BESS',
    category: 'Battery Storage & EV Canopy',
    capacity: '500 kWh Buffer',
    location: 'Chandigarh Highway Corridor, Punjab',
    discom: 'PSPCL Synchronized',
    savings: '99.8% Grid Uptime Guarantee',
    generation: 'Instantaneous Peak Shave',
    description: 'Lithium-Iron-Phosphate (LFP) behind-the-meter storage coupled with dual 110 kW string inverters for critical manufacturing uptime.',
    image: '/assets/images/4bb4436fda7c0f69c46e53acc7f3be717b2b1624.jpg',
    link: '/projects'
  }
];

export const AutoScroller: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Auto-scroll effect: advances right-to-left every 4.5 seconds
  useEffect(() => {
    if (!isPlaying) return;

    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FEATURED_SLIDES.length);
    }, 4500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + FEATURED_SLIDES.length) % FEATURED_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % FEATURED_SLIDES.length);
  };

  const currentSlide = FEATURED_SLIDES[currentIndex];

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    // Swipe left = next (right to left movement)
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  return (
    <section className="bg-[#121A16] border-y border-[#23352B] py-14 sm:py-20 relative overflow-hidden text-white">
      {/* Background spatial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-forest/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lime/10 border border-brand-lime/20 text-brand-lime text-xs font-mono font-semibold uppercase tracking-wider mb-2.5">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
              Live Operational Telemetry &amp; Project Stream
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white">
              Installed Deployments In Real Time
            </h2>
            <p className="font-body text-xs sm:text-sm text-[#A3B3AA] mt-1 max-w-xl">
              Auto-scrolling stream of verified utility, agricultural, commercial, and microgrid installations energized across India.
            </p>
          </div>

          {/* Controls: Play/Pause, Prev, Next, Slide Counter */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-brand-lime transition-colors"
              title={isPlaying ? 'Pause Auto-Scroll' : 'Play Auto-Scroll'}
              aria-label={isPlaying ? 'Pause Auto-Scroll' : 'Play Auto-Scroll'}
            >
              {isPlaying ? <Pause size={15} /> : <Play size={15} />}
            </button>
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white hover:text-brand-lime transition-colors"
              title="Previous Installation"
              aria-label="Previous Installation"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white hover:text-brand-lime transition-colors"
              title="Next Installation"
              aria-label="Next Installation"
            >
              <ChevronRight size={18} />
            </button>
            <span className="font-mono text-xs text-[#A3B3AA] ml-2">
              <span className="text-brand-lime font-bold">{currentIndex + 1}</span> / {FEATURED_SLIDES.length}
            </span>
          </div>
        </div>

        {/* ── Spotlight Auto-Scrolling Showcase Card (Right-to-Left Sliding) ── */}
        <div 
          className="rounded-3xl bg-[#1A2620] border border-[#2B4234] shadow-elevated overflow-hidden group relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px] lg:min-h-[460px]">
            {/* Visual Image Side (7 cols) - Auto changing images */}
            <div className="lg:col-span-7 relative h-72 sm:h-80 lg:h-full overflow-hidden bg-black/40">
              {FEATURED_SLIDES.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={cn(
                    'absolute inset-0 transition-all duration-700 ease-in-out',
                    idx === currentIndex
                      ? 'opacity-100 scale-100 translate-x-0 z-10'
                      : idx < currentIndex
                      ? 'opacity-0 scale-105 -translate-x-full pointer-events-none z-0'
                      : 'opacity-0 scale-95 translate-x-full pointer-events-none z-0'
                  )}
                >
                  <img
                    src={asset(slide.image)}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2620] via-black/30 to-black/20 lg:bg-gradient-to-r lg:from-transparent lg:to-[#1A2620]" />
                  <div className="absolute top-4 left-4 bg-brand-forest/90 backdrop-blur-md text-brand-lime px-3 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 border border-brand-lime/20">
                    <Zap size={12} className="fill-brand-lime" />
                    {slide.capacity}
                  </div>
                </div>
              ))}
            </div>

            {/* Content Side (5 cols) - Auto changing content */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative z-20 bg-[#1A2620]">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-bold uppercase text-brand-lime tracking-wider bg-brand-lime/10 px-2.5 py-0.5 rounded-md border border-brand-lime/20">
                    {currentSlide.category}
                  </span>
                  <span className="text-[10px] font-mono text-[#A3B3AA] flex items-center gap-1">
                    <Radio size={10} className="text-emerald-400 animate-pulse" />
                    Telemetry Online
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-snug">
                  {currentSlide.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs font-mono text-[#A3B3AA] mt-2 mb-4">
                  <MapPin size={13} className="text-brand-lime flex-shrink-0" />
                  <span>{currentSlide.location}</span>
                </div>

                <p className="font-body text-xs sm:text-sm text-[#CAD4CD] leading-relaxed mb-6">
                  {currentSlide.description}
                </p>

                {/* Live Stats Chips */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-mono uppercase text-[#A3B3AA] block">
                      Generation Metric
                    </span>
                    <strong className="font-heading font-bold text-sm sm:text-base text-brand-lime">
                      {currentSlide.generation}
                    </strong>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-mono uppercase text-[#A3B3AA] block">
                      Verified Yield / Savings
                    </span>
                    <strong className="font-heading font-bold text-sm sm:text-base text-white">
                      {currentSlide.savings}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Card Footer: DISCOM & CTA Link */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-4">
                <span className="text-[11px] font-mono text-[#7C8F83] truncate">
                  {currentSlide.discom}
                </span>
                <Link
                  to={currentSlide.link}
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-brand-lime hover:text-white transition-colors flex-shrink-0"
                >
                  <span>Explore dossier</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Infinite Continuous Horizontal Ticker (Right to Left Marquee) ── */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-mono uppercase text-[#A3B3AA] tracking-widest flex items-center gap-2">
              <Cpu size={12} className="text-brand-lime" />
              Continuous Telemetry Strip · Scrolls Right to Left
            </span>
            <span className="text-[10px] font-mono text-brand-lime bg-white/5 px-2 py-0.5 rounded">
              Hover to pause
            </span>
          </div>

          <div className="relative w-full overflow-hidden py-2 mask-linear">
            {/* Infinite Marquee Track (Duplicated list for seamless looping) */}
            <div className="animate-marquee-left flex gap-4">
              {[...FEATURED_SLIDES, ...FEATURED_SLIDES].map((slide, i) => (
                <div
                  key={`${slide.id}-${i}`}
                  onClick={() => setCurrentIndex(i % FEATURED_SLIDES.length)}
                  className={cn(
                    'w-[280px] sm:w-[320px] p-3.5 rounded-2xl bg-[#1A2620] border border-[#2B4234] hover:border-brand-lime/50 transition-all flex items-center gap-3.5 flex-shrink-0 cursor-pointer shadow-sm group',
                    currentIndex === (i % FEATURED_SLIDES.length) && 'border-brand-lime ring-1 ring-brand-lime/30'
                  )}
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 relative bg-black/30">
                    <img
                      src={asset(slide.image)}
                      alt={slide.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[9px] font-mono font-bold text-brand-lime uppercase truncate">
                        {slide.capacity}
                      </span>
                      <span className="text-[9px] font-mono text-[#7C8F83] truncate">
                        {slide.discom.split('·')[0]}
                      </span>
                    </div>
                    <div className="font-heading font-bold text-xs text-white truncate mt-0.5 group-hover:text-brand-lime transition-colors">
                      {slide.title}
                    </div>
                    <div className="text-[10px] font-body text-[#A3B3AA] truncate mt-0.5">
                      {slide.savings}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {FEATURED_SLIDES.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                dotIdx === currentIndex
                  ? 'w-8 bg-brand-lime'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              )}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoScroller;
