import React from 'react';
import { MapPin, Zap, Building2, ArrowRight } from 'lucide-react';
import { cn } from '../lib/cn';

interface ProjectCardProps {
  title: string;
  capacity: string;
  facilityType: string;
  client: string;
  city: string;
  monthlySavings?: string;
  image?: string;
  slug?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  capacity,
  facilityType,
  client,
  city,
  monthlySavings,
  image,
  slug,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col bg-surface-card border border-border-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group',
        className
      )}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-surface-dark flex items-center justify-center">
            <Zap size={32} className="text-brand-lime opacity-40" />
          </div>
        )}
        {/* Capacity chip */}
        <div className="absolute top-3 left-3 bg-brand-forest/90 backdrop-blur-sm text-white text-xs font-body font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <Zap size={10} className="fill-brand-lime text-brand-lime" />
          {capacity}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="font-heading font-semibold text-base text-text-primary leading-snug">{title}</h3>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xs font-body text-text-secondary">
            <Building2 size={12} className="text-text-eyebrow flex-shrink-0" />
            <span>{facilityType} · {client}</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-body text-text-secondary">
            <MapPin size={12} className="text-text-eyebrow flex-shrink-0" />
            <span>{city}</span>
          </div>
        </div>

        {monthlySavings && (
          <div className="mt-auto pt-3 border-t border-border-light flex items-center justify-between">
            <div>
              <div className="text-xs font-body text-text-secondary">Monthly Savings</div>
              <div className="font-heading font-semibold text-brand-forest text-sm">{monthlySavings}</div>
            </div>
            {slug && (
              <a
                href={`/projects/${slug}`}
                className="flex items-center gap-1 text-xs font-body font-semibold text-brand-forest hover:text-brand-forestLight transition-colors"
              >
                View case study <ArrowRight size={12} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

