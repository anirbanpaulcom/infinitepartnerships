'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Logo({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push('/')}
      width={300}
      height={30}
      className={`${className} cursor-pointer`}
      src="https://static.wixstatic.com/media/db5bce_def68cfd97a1446caad9bed9c61b2a0b~mv2.png/v1/fill/w_280,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E6%97%A0%E9%99%90LOGO-%E6%97%A0slogan-white.png"
      alt={''}
    />
  );
}
