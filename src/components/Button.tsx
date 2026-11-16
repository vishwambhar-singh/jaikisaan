import React from 'react';
import { cn } from '../lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'whatsapp' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: 'button' | 'a';
  href?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-forest text-white hover:bg-brand-forestLight active:bg-brand-forestDark border border-brand-forest hover:border-brand-forestLight',
  secondary:
    'bg-transparent text-brand-forest border border-brand-forest hover:bg-brand-forest hover:text-white',
  whatsapp:
    'bg-brand-lime text-text-primary hover:bg-brand-limeHover active:bg-brand-limeHover border border-brand-lime hover:border-brand-limeHover font-semibold',
  ghost:
    'bg-transparent text-text-onDark border border-border-darkSubtle hover:bg-white/10',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-12 px-6 text-sm',
  lg: 'h-14 px-8 text-base',
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  href,
  children,
  fullWidth = false,
  className,
  ...props
}) => {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl font-body font-semibold transition-all duration-200 cursor-pointer select-none whitespace-nowrap',
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    className
  );

  if (Tag === 'a' && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;

