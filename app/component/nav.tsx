'use client';

import { useMediaQuery } from '@/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { animationVariants, P3 } from '@/lib/ui';

import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { usePathname } from 'next/navigation';
import { motion, MotionConfig, useScroll, useTransform } from 'framer-motion';
import React from 'react';
import HoverDropdown from '@/lib/ui/hoverdropdown';
import { cn } from '@/lib/utils';
import Logo from './logo';
import { User } from 'lucide-react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Modal } from '@/lib/ui/modal';
import { IoCloseOutline } from 'react-icons/io5';

export function Navbar() {
  const { isMobile } = useMediaQuery();
  const { scrollY } = useScroll();

  return (
    <motion.nav
      style={{
        height: useTransform(scrollY, [0, 50], ['100px', '70px']),
      }}
      initial={false}
      className={`fixed top-0 w-full flex justify-center items-center z-[1000] transition-all duration-300 ease-in-out`}
    >
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </motion.nav>
  );
}

function MobileNav() {
  const [showModal, setShowModal] = React.useState(false);
  const pathname = usePathname();

  const handleModalToggle = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <MotionConfig transition={{ type: 'spring', bounce: 0.1, duration: 0.2 }}>
      <motion.div
        className="fixed top-0 p-6 overflow-hidden bg-black w-full"
        initial={false}
      >
        <div className="flex justify-between items-center">
          <Logo />
          <GiHamburgerMenu
            className="size-8 cursor-pointer"
            onClick={handleModalToggle}
          />
        </div>
      </motion.div>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        onClose={handleModalToggle}
        className=" bg-gray-800  z-[99999999]  w-full h-full"
      >
        <motion.div
          className="p-6 rounded-lg space-y-6"
          {...animationVariants.slideDown}
        >
          <div className="flex justify-center  items-center space-x-2">
            <User className="p-1 bg-white rounded-full text-gray-600" />
            <Link href="login" className="text-blue-500">
              Login
            </Link>
          </div>

          <div className="flex flex-col  justify-center items-center space-y-6">
            {['Home', 'About', 'Services', 'Contact', 'Book Online'].map(
              (item) => {
                const href = `/${item.toLowerCase() === 'home' ? '' : item.replace(/\s+/g, '-').toLowerCase()}`;
                const active = pathname === href;

                return (
                  <Link
                    key={item}
                    href={href}
                    onClick={() => setShowModal(false)}
                    className={`text-3xl ${active ? 'text-blue-600 font-medium' : 'text-gray-400 hover:text-white font-normal'}`}
                  >
                    {item}
                  </Link>
                );
              }
            )}
          </div>
        </motion.div>
        <button
          onClick={handleModalToggle}
          className="absolute top-4 right-4 text-white text-xl"
        >
          <IoCloseOutline className="size-10" />
        </button>
      </Modal>
    </MotionConfig>
  );
}

function DesktopNav() {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'flex justify-between items-center w-full h-full px-20 backdrop-blur-xl bg-opacity-50'
      )}
    >
      <HoverDropdown
        trigger={
          <Image
            src="https://static.wixstatic.com/media/db5bce_def68cfd97a1446caad9bed9c61b2a0b~mv2.png/v1/fill/w_280,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E6%97%A0%E9%99%90LOGO-%E6%97%A0slogan-white.png"
            alt="Favicon"
            width={300}
            height={28}
            className="rounded-lg cursor-pointer mr-2"
          />
        }
      >
        <Link
          className="flex w-72 mt-4 ml-4 flex-col rounded-md bg-gradient-to-b backdrop-blur-[800px] bg-opacity-10 from-muted/50 to-muted p-6 no-underline outline-none shadow-sm"
          href="/"
        >
          <Logo />
          <P3 className="my-4">
            Be in the Know Possibility is endless, we can build your dreamed
            mobiles apps by your way.
          </P3>
          <div className="flex justify-between mt-2">
            <GitHubLogoIcon className="size-10 hover:bg-gray rounded-lg p-2" />
            <InstagramLogoIcon className="size-10 hover:bg-gray rounded-lg p-2" />
            <LinkedInLogoIcon className="size-10 hover:bg-gray rounded-lg p-2" />
            <TwitterLogoIcon className="size-10 hover:bg-gray rounded-lg p-2" />
          </div>
        </Link>
      </HoverDropdown>
      <div className="flex justify-between items-center w-[450px] bg-black rounded-full py-4 px-8">
        {['Home', 'About', 'Services', 'Contact', 'Book Online'].map((item) => {
          const href = `/${item.toLowerCase() === 'home' ? '' : item.replace(/\s+/g, '-').toLowerCase()}`;
          const active = pathname === href;

          return (
            <Link
              key={item}
              href={href}
              className={`text-xs md:text-sm  ${
                active
                  ? 'text-blue-600 font-medium'
                  : 'text-gray hover:text-color font-normal'
              }`}
            >
              {item}
            </Link>
          );
        })}
      </div>

      <div className="flex space-x-4 items-center ">
        <User className="p-1 bg-white rounded-full text-gray-600" />
        <Link href="login" className="text-blue-500">
          Login
        </Link>
        <button className="h-10 w-28 rounded-full bg-orange-700 hover:bg-white hover:text-black  opacity-80 text-white  font-extrabold  cursor-pointer p-2 my-4">
          Get Quote
        </button>
      </div>
    </div>
  );
}
