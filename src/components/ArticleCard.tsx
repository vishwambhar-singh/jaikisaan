import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/cn';
import { asset } from '../lib/assets';

interface ArticleCardProps {
  category: string;
  readTime: string;
  date: string;
  title: string;
  excerpt: string;
  author: string;
  image?: string;
  slug?: string;
  className?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  category,
  readTime,
  date,
  title,
  excerpt,
  author,
  image,
  slug,
  className,
}) => {
  return (
    <article
      className={cn(
        'flex flex-col bg-surface-card border border-border-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300 group',
        className
      )}
    >
      {image && (
        <div className="relative overflow-hidden h-48">
          <img
            src={asset(image)}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-col gap-3 p-6 flex-1">
        <div className="flex items-center gap-3">
          <span className="text-xs font-body font-semibold text-text-eyebrow uppercase tracking-wide bg-brand-lime/15 border border-brand-lime/30 px-2.5 py-0.5 rounded-full">
            {category}
          </span>
          <span className="text-xs font-body text-text-secondary">{readTime}</span>
        </div>
        <h3 className="font-heading font-semibold text-lg text-text-primary leading-snug group-hover:text-brand-forest transition-colors">
          {title}
        </h3>
        <p className="font-body text-sm text-text-secondary leading-relaxed flex-1 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-border-light">
          <div className="flex flex-col">
            <span className="font-body text-xs font-semibold text-text-primary">{author}</span>
            <span className="font-body text-xs text-text-secondary">{date}</span>
          </div>
          {slug && (
            <Link
              to="/blog"
              className="flex items-center gap-1 text-xs font-body font-semibold text-brand-forest hover:text-brand-forestLight transition-colors"
            >
              Read more <ArrowRight size={12} />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;

