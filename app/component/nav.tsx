'use client';

import { useMediaQuery } from '@/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { P3 } from '@/lib/ui';

import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  ArrowLeftIcon,
  DotsHorizontalIcon,
} from '@radix-ui/react-icons';
import { usePathname, useRouter } from 'next/navigation';
import { motion, MotionConfig, useScroll, useTransform } from 'framer-motion';
import { BsEnvelopeFill } from 'react-icons/bs';
import Tooltiper from '@/lib/ui/tooltip';
import IconButton from '@/lib/ui/iconbutton';
import useClickOutside from '@/hooks/useclickoutside';
import React from 'react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import HoverDropdown from '@/lib/ui/hoverdropdown';
import { cn } from '@/lib/utils';
import Logo from './logo';
import { User } from 'lucide-react';

export function Navbar() {
  const { isMobile } = useMediaQuery();
  const router = useRouter();
  const { scrollY } = useScroll();

  return (
    <motion.nav
      style={{
        height: useTransform(scrollY, [0, 50], ['100px', '-0px']),
        opacity: useTransform(scrollY, [0, 50], [1, 0]),
      }}
      initial={false}
      className={`fixed top-0 w-full flex justify-center items-center z-[1000] transition-all duration-300 ease-in-out`}
    >
      {isMobile ? <MobileNav router={router} /> : <DesktopNav />}
    </motion.nav>
  );
}

function MobileNav({ router }: { router: AppRouterInstance }) {
  const [onMore, setMore] = React.useState<boolean>(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  useClickOutside(containerRef as React.RefObject<HTMLElement>, () =>
    setMore(false)
  );

  const menu = [
    {
      label: 'Home',
      icon: (
        <Image
          src="/favicon.ico"
          alt="Favicon"
          width={24}
          height={24}
          className="rounded-lg"
        />
      ),
      onClick: () => router.push('/'),
    },
    {
      label: 'More',
      icon: <DotsHorizontalIcon className="size-5" />,
      onClick: () => setMore(true),
    },
  ];

  const more = [
    {
      label: 'Menu',
      icon: <ArrowLeftIcon className="size-5" />,
      onClick: () => setMore(false),
    },
    {
      label: 'LinkedIn',
      icon: <LinkedInLogoIcon className="size-5" />,
      onClick: () => {},
    },
    {
      label: 'GitHub',
      icon: <GitHubLogoIcon className="size-5" />,
      onClick: () => {},
    },
    {
      label: 'Email',
      icon: <BsEnvelopeFill className="size-5" />,
      onClick: () => {},
    },
    {
      label: 'Instagram',
      icon: <InstagramLogoIcon className="size-5" />,
      onClick: () => {},
    },
  ];

  const mobileIcons = (
    icons: Array<{ label: string; icon: React.ReactNode; onClick: () => void }>
  ) =>
    icons.map(({ label, icon, onClick }, index) => (
      <Tooltiper key={index} content={label}>
        <IconButton
          className="w-12 h-10 border-none"
          onClick={() => onClick()}
          Icon={icon}
        />
      </Tooltiper>
    ));

  return (
    <MotionConfig transition={{ type: 'spring', bounce: 0.1, duration: 0.2 }}>
      <motion.div
        ref={containerRef}
        className="fixed top-4 p-2 overflow-hidden border-on backdrop-blur-md rounded-2xl shadow-lg"
        animate={{ width: onMore ? '300px' : '180px' }}
        initial={false}
      >
        <div className="flex justify-between items-center">
          {onMore ? mobileIcons(more) : mobileIcons(menu)}
        </div>
      </motion.div>
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
          const href = `/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`;
          const active = pathname === href;

          return (
            <Link
              key={item}
              href={href}
              className={`text-sm  ${
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
