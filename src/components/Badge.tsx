import React from 'react';
import { cn } from '../lib/cn';

type BadgeVariant = 'lime' | 'amber' | 'forest' | 'muted' | 'dark';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  lime: 'bg-brand-lime/20 text-text-eyebrow border border-brand-lime/40',
  amber: 'bg-brand-amber/15 text-brand-amber border border-brand-amber/30',
  forest: 'bg-brand-forest/10 text-brand-forest border border-brand-forest/20',
  muted: 'bg-surface-card text-text-secondary border border-border-light',
  dark: 'bg-white/10 text-text-onDark border border-white/15',
};

const Badge: React.FC<BadgeProps> = ({ variant = 'lime', children, className }) => {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body font-semibold tracking-wide uppercase',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;

