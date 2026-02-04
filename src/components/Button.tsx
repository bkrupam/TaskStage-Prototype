import React from 'react';
import { Loader2 } from 'lucide-react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    primary:
    'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] hover:shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] active:shadow-[0_0_0_0_rgba(0,0,0,0)] active:scale-[0.98]',
    secondary:
    'bg-white text-slate-700 border border-slate-200/60 hover:bg-slate-50 hover:border-slate-300/60 focus:ring-slate-200 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] hover:shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] active:scale-[0.98]',
    ghost:
    'bg-transparent text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 focus:ring-slate-200 active:scale-[0.98]',
    danger:
    'bg-red-50 text-red-600 hover:bg-red-100 focus:ring-red-500 border border-red-100 hover:border-red-200 active:scale-[0.98]'
  };
  const sizes = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-4 py-2 text-sm',
    lg: 'h-12 px-6 text-base'
  };
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}>

      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>);

}