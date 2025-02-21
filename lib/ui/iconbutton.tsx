'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ButtonProps } from './button';

const IconButton: React.FC<
  ButtonProps & {
    Icon: React.ReactNode;
    hoverIcon?: React.ReactNode;
    href?: string;
  }
> = ({ Icon, hoverIcon, href = '#', className, ...props }) => {
  return (
    <button
      className={cn(
        'group relative bg-gray hover:bg-color text-gray hover:text-color rounded-xl p-1.5 w-8 h-8 border-on flex items-center justify-center overflow-hidden transition-all duration-300',
        className
      )}
      {...props}
    >
      <Link href={href}>
        <div
          className={cn(
            'absolute inset-0 flex items-center justify-center',
            `${hoverIcon ? 'transition-transform duration-200 group-hover:translate-y-12 group-hover:opacity-0' : ''}`
          )}
        >
          {Icon}
        </div>

        <div
          className={cn(
            'absolute inset-0 flex items-center justify-center transition-opacity duration-200 opacity-0 group-hover:opacity-100'
          )}
        >
          {hoverIcon}
        </div>
      </Link>
    </button>
  );
};

export default IconButton;
