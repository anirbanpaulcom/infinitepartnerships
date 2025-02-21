'use client';

import { H5 } from '@/lib/ui';
import Link from 'next/link';
import React from 'react';
import Logo from './logo';
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { FaFacebook } from 'react-icons/fa';
import { BsTiktok, BsYoutube } from 'react-icons/bs';

export function Footer() {
  return (
    <footer className="flex flex-col justify-center  py-20  px-56">
      <Logo />
      <h3 className="my-8 font-extrabold text-5xl">
        Be in the Know Possibility is endless, we can build your dreamed mobiles
        apps by your way.
      </h3>

      <div className="w-full flex justify-between">
        <H5 className="my-10 leading-10">
          Level 24, Westpac House, <br />
          91 King William Street, Adelaide, 5000, SA, Australia <br />
          08 8233 5827 <br />
          08 7082 2355 <br />
          sales@infinitepartnerships.com.au
        </H5>

        <div className="flex flex-col gap-3">
          <Link href="/home">Menu</Link>
          <Link href="/home">Home</Link>
          <Link href="/home">Services</Link>
          <Link href="/home">About</Link>
          <Link href="/home">Contact</Link>
        </div>
      </div>

      <div className="w-full flex  justify-between">
        <h6 className="text-gray-500">
          © 2022 Infinite Partnerships | All Rights Reserved.
        </h6>
        <div className="flex gap-4">
          <InstagramLogoIcon className="size-8 text-gray-600 cursor-pointer" />
          <FaFacebook className="size-8 text-gray-600 cursor-pointer" />
          <TwitterLogoIcon className="size-8 text-gray-600 cursor-pointer" />
          <LinkedInLogoIcon className="size-8 text-gray-600 cursor-pointer" />
          <BsYoutube className="size-8 text-gray-600 cursor-pointer" />
          <BsTiktok className="size-8 text-gray-600 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
