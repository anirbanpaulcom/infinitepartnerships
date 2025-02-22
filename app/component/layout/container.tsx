'use client';

import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.main
      initial={{ opacity: 0, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.8 }}
      className={`flex flex-1 md:mt-20 flex-col w-full  h-full justify-center items-center overflow-hidden ${className}`}
    >
      {children}
    </motion.main>
  );
}
