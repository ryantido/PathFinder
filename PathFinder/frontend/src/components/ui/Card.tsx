import React from 'react';
import { cn } from '../../utils/cn';

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 border border-blue-50 dark:border-gray-800 transition-all',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';
