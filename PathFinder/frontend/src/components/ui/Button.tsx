import { cn } from '../../utils/cn';
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'ghost';
  loading?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', loading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'px-5 py-2.5 rounded-lg font-semibold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed',
          variant === 'default' && 'bg-blue-600 text-white hover:bg-blue-700',
          variant === 'outline' && 'border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 dark:bg-gray-950 dark:text-blue-400 dark:border-blue-400',
          variant === 'ghost' && 'bg-transparent text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-gray-800',
          className
        )}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? '...' : children}
      </button>
    );
  }
);
Button.displayName = 'Button';
