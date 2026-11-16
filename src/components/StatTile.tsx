import React from 'react';
import { cn } from '../lib/cn';

interface StatTileProps {
  metric: string;
  label: string;
  sublabel?: string;
  dark?: boolean;
  className?: string;
}

const StatTile: React.FC<StatTileProps> = ({ metric, label, sublabel, dark = true, className }) => {
  return (
    <div
      className={cn(
        'flex flex-col justify-between p-3.5 sm:p-5 md:p-6 rounded-2xl min-w-0',
        dark
          ? 'bg-surface-darkCard border border-border-darkSubtle'
          : 'bg-surface-card border border-border-card',
        className
      )}
    >
      <div className="min-w-0">
        <div
          className={cn(
            'font-heading font-bold text-2xl sm:text-3xl md:text-5xl leading-none mb-1.5 sm:mb-2 truncate',
            dark ? 'text-brand-lime' : 'text-brand-forest'
          )}
        >
          {metric}
        </div>
        <div
          className={cn(
            'font-body font-medium text-xs sm:text-sm leading-snug line-clamp-2',
            dark ? 'text-text-onDark' : 'text-text-primary'
          )}
        >
          {label}
        </div>
      </div>
      {sublabel && (
        <div
          className={cn(
            'font-body text-[11px] sm:text-xs mt-2 sm:mt-3 line-clamp-2',
            dark ? 'text-text-onDarkMuted' : 'text-text-secondary'
          )}
        >
          {sublabel}
        </div>
      )}
    </div>
  );
};

export default StatTile;

