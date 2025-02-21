'use client';

import { H2 } from '@/lib/ui';
import Marquee from '@/lib/ui/marquee';
import Image from 'next/image';

export default function Clients() {
  const clients = [
    'https://static.wixstatic.com/media/db5bce_78ca771c87a74d8cb4dee4f6a684e664~mv2.png/v1/fill/w_500,h_500,al_c,q_85,enc_auto/db5bce_78ca771c87a74d8cb4dee4f6a684e664~mv2.png',
    'https://static.wixstatic.com/media/db5bce_e6302e375f4349168691c1b16a90f988~mv2.jpg/v1/fill/w_384,h_384,al_c,q_80,enc_auto/db5bce_e6302e375f4349168691c1b16a90f988~mv2.jpg',
    'https://static.wixstatic.com/media/db5bce_66cb95043a5b4ed894ce03e4936c4685~mv2.png/v1/fill/w_559,h_538,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/db5bce_66cb95043a5b4ed894ce03e4936c4685~mv2.png',
    'https://static.wixstatic.com/media/db5bce_28fec552b2c141fca130717fe59ae132~mv2.png/v1/fill/w_564,h_538,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/db5bce_28fec552b2c141fca130717fe59ae132~mv2.png',
  ];

  return (
    <section className="relative bg-orange-600 flex w-full flex-col items-center justify-center overflow-hidden rounded-lg py-20">
      <H2 className="mb-10">OUR CLIENTS</H2>

      <Marquee pauseOnHover className="[--duration:10s]">
        {Array.isArray(clients) &&
          clients.map((client, index) => (
            <Image
              key={index}
              src={client}
              alt={`Client ${index + 1}`}
              width={400}
              height={400}
              className="rounded-full mx-6"
            />
          ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-orange-400  dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-orange-400 dark:from-background"></div>
    </section>
  );
}
