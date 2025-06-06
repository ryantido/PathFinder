import React from 'react';
import { cn } from '../../utils/cn';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'border border-blue-200 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-950 shadow-sm transition-all',
        className
      )}
      {...props}
    />
  )
);
Input.displayName = 'Input';
