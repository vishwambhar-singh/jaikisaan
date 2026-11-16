import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { cn } from '../lib/cn';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  location: string;
  rating?: number;
  verified?: boolean;
  image?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  location,
  rating = 5,
  verified = true,
  image,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 p-6 rounded-2xl bg-surface-card border border-border-card shadow-card',
        className
      )}
    >
      {/* Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} className="fill-brand-amber text-brand-amber" />
        ))}
        {verified && (
          <span className="ml-2 flex items-center gap-1 text-xs font-body text-brand-ecoGreen font-semibold">
            <CheckCircle size={12} />
            Verified
          </span>
        )}
      </div>

      {/* Quote */}
      <p className="font-body text-sm leading-relaxed text-text-primary flex-1">"{quote}"</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-border-light">
        {image ? (
          <img src={image} alt={name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
        ) : (
          <div className="w-10 h-10 rounded-full bg-brand-forest/10 flex items-center justify-center flex-shrink-0">
            <span className="font-heading font-semibold text-brand-forest text-sm">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <div className="font-body font-semibold text-sm text-text-primary">{name}</div>
          <div className="font-body text-xs text-text-secondary">
            {role} · {location}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

