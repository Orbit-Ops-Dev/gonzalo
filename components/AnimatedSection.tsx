"use client";

import { ReactNode } from 'react';
import { useScrollAnimation, useStaggeredAnimation, useParallax } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'fadeIn';
  delay?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export default function AnimatedSection({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className = '',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px'
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold, rootMargin });

  const animationClass = isVisible ? `animate-${animation.replace(/([A-Z])/g, '-$1').toLowerCase()}` : 'opacity-0';
  const delayClass = delay > 0 ? `animate-delay-${delay}` : '';

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${animationClass} ${delayClass} ${className}`}
      style={{ animationFillMode: 'both' }}
    >
      {children}
    </div>
  );
}

interface StaggeredGridProps {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
  staggerDelay?: number;
}

export function StaggeredGrid({
  children,
  className = '',
  itemClassName = '',
  staggerDelay = 100
}: StaggeredGridProps) {
  const { ref, visibleItems } = useStaggeredAnimation(children.length, staggerDelay);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`${itemClassName} ${
            visibleItems[index] ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{
            animationFillMode: 'both'
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxSection({
  children,
  speed = 0.5,
  className = ''
}: ParallaxSectionProps) {
  const { ref, offset } = useParallax(speed);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`parallax-container ${className}`}
      style={{
        transform: `translateY(${offset}px)`
      }}
    >
      {children}
    </div>
  );
}
