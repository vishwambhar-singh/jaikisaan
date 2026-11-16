import React from 'react';
import { cn } from '../lib/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  dark = false,
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'text-xs font-body font-semibold tracking-widest uppercase',
            dark ? 'text-brand-lime' : 'text-text-eyebrow'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'font-heading font-semibold leading-tight',
          'text-3xl md:text-4xl lg:text-[2.75rem]',
          dark ? 'text-text-onDark' : 'text-text-primary'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'font-body text-base md:text-lg leading-relaxed max-w-2xl',
            dark ? 'text-text-onDarkMuted' : 'text-text-secondary'
          )}
        >
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};

export default SectionHeading;

