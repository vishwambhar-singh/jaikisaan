import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/cn';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  dark?: boolean;
  className?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, dark = false, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn('flex flex-col divide-y', dark ? 'divide-border-darkSubtle' : 'divide-border-light', className)}>
      {items.map((item, i) => (
        <div key={i} className="py-5">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className={cn(
              'flex w-full items-center justify-between gap-4 text-left font-body font-semibold text-base transition-colors',
              dark ? 'text-text-onDark hover:text-brand-lime' : 'text-text-primary hover:text-brand-forest'
            )}
          >
            <span>{item.question}</span>
            <ChevronDown
              size={18}
              className={cn(
                'flex-shrink-0 transition-transform duration-300',
                openIndex === i && 'rotate-180',
                dark ? 'text-text-onDarkMuted' : 'text-text-secondary'
              )}
            />
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-300 ease-in-out',
              openIndex === i ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
            )}
          >
            <p className={cn('font-body text-sm leading-relaxed', dark ? 'text-text-onDarkMuted' : 'text-text-secondary')}>
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;

