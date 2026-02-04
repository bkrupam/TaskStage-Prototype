import React, { Component } from 'react';
import { motion } from 'framer-motion';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
  elevation?: 'low' | 'medium' | 'high';
}
export function Card({
  children,
  className = '',
  onClick,
  hoverEffect = false,
  elevation = 'medium'
}: CardProps) {
  const Component = onClick ? motion.div : 'div';
  // Glassmorphic shadow system with colored glows
  const shadows = {
    low: '0 4px 16px -4px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.8)',
    medium:
    '0 8px 24px -6px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.9)',
    high: '0 12px 32px -8px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 1)'
  };
  // Hover shadows with colored glow (blue/purple tints)
  const hoverShadows = {
    low: '0 8px 24px -4px rgba(99, 102, 241, 0.15), 0 4px 16px -4px rgba(139, 92, 246, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 1)',
    medium:
    '0 12px 32px -6px rgba(99, 102, 241, 0.2), 0 6px 24px -6px rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.25), inset 0 1px 0 0 rgba(255, 255, 255, 1)',
    high: '0 16px 48px -8px rgba(99, 102, 241, 0.25), 0 8px 32px -8px rgba(139, 92, 246, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 1)'
  };
  // Background opacity based on elevation
  const backgroundOpacity = {
    low: 'bg-white/60',
    medium: 'bg-white/70',
    high: 'bg-white/80'
  };
  return (
    // @ts-ignore - Framer motion types can be tricky with dynamic components
    <Component
      className={`${backgroundOpacity[elevation]} backdrop-blur-xl rounded-xl overflow-hidden border border-white/20 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      whileHover={
      hoverEffect || onClick ?
      {
        scale: 1.02,
        boxShadow: hoverShadows[elevation],
        backdropFilter: 'blur(24px)',
        backgroundColor:
        elevation === 'low' ?
        'rgba(255, 255, 255, 0.7)' :
        elevation === 'medium' ?
        'rgba(255, 255, 255, 0.8)' :
        'rgba(255, 255, 255, 0.9)',
        transition: {
          duration: 0.3,
          ease: [0.23, 1, 0.32, 1]
        }
      } :
      undefined
      }
      style={{
        boxShadow: shadows[elevation]
      }}>

      {children}
    </Component>);

}