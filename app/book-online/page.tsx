import React from 'react';
import Container from '../component/layout/container';
import { H1, H5, P2 } from '@/lib/ui';
import Image from 'next/image';

export default function Book() {
  const bookingDetails = [
    {
      title: 'First Free Consultation',
      duration: '1hr',
      imageUrl:
        'https://static.wixstatic.com/media/db5bce_b482efd20f454236ab870957c27df6a7~mv2.jpg/v1/fill/w_290,h_194,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/db5bce_b482efd20f454236ab870957c27df6a7~mv2.jpg',
    },
    {
      title: 'Mobile Apps Development Booking',
      duration: '1.5hr',
      imageUrl:
        'https://static.wixstatic.com/media/db5bce_1d58a157ea18414784f4a2f0c922a5f3~mv2.png/v1/fill/w_290,h_194,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/db5bce_1d58a157ea18414784f4a2f0c922a5f3~mv2.png',
    },
    {
      title: 'Service and Support Booking',
      duration: '2hr',
      imageUrl:
        'https://static.wixstatic.com/media/0908b4c858c2438db45e303fafbde49b.jpg/v1/fill/w_290,h_194,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/0908b4c858c2438db45e303fafbde49b.jpg',
    },
  ];

  return (
    <Container className="bg-red-300 py-20">
      <H1>BOOKING</H1>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {bookingDetails.map((booking, index) => (
          <div
            key={index}
            className="w-80 h-[480px] bg-black rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              width={100}
              height={300}
              className="w-full h-56 object-cover"
              src={booking.imageUrl}
              alt={booking.title}
            />

            <div className="flex flex-col justify-center p-8">
              <H5 className="text-white">{booking.title}</H5>

              <div className="h-[0.8px] w-full bg-slate-600 my-4" />
              <P2 className="text-white">{booking.duration}</P2>

              <button className="bg-gray-300 w-28 h-10 rounded-lg my-6 text-black">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
