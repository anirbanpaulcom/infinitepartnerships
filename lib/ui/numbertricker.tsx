'use client';

import { cn } from '@/lib/utils';
import { numberFormatter } from '@/lib/utils/numberformatter';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import React, { ComponentPropsWithoutRef, useEffect, useRef } from 'react';

interface NumberTickerProps extends ComponentPropsWithoutRef<'span'> {
  value: number;
  direction?: 'up' | 'down';
  delay?: number;
  decimalPlaces?: number;
}

export function NumberTicker({
  value,
  direction = 'up',
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '0px' });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === 'down' ? 0 : value);
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current) {
          ref.current.textContent = numberFormatter(latest, {
            digits: decimalPlaces,
          });
        }
      }),
    [springValue, decimalPlaces],
  );

  return (
    <span
      ref={ref}
      className={cn('inline-block tabular-nums tracking-wider', className)}
      {...props}
    />
  );
}
