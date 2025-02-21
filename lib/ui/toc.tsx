'use client';

import React from 'react';
import Link from 'next/link';
import { HeadingType } from '@/app/types';

export default function TOC({ headings }: { headings: HeadingType[] }) {
  const [activeHeading, setActiveHeading] = React.useState<string | null>(null);

  const onScroll = React.useCallback(() => {
    let lastCall = 0;
    const now = new Date().getTime();
    if (now - lastCall >= 200) {
      lastCall = now;

      const scrollPosition = window.scrollY;
      const closestHeading = headings.find((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          return scrollPosition >= offsetTop && scrollPosition <= offsetBottom;
        }
        return false;
      });

      if (closestHeading) {
        setActiveHeading(closestHeading.id);
      }
    }
  }, [headings]);

  React.useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return (
    <ul className="ml-3">
      {headings.map((heading) => (
        <li key={heading.id}>
          <Link
            href={`#${heading.id}`}
            className={`font-light text-sm inline-block whitespace-nowrap overflow-hidden text-ellipsis ${activeHeading === heading.id ? 'font-semibold transform transition-transform duration-300 ease-in opacity-100' : 'transform -translate-x-2 opacity-50'} px-1 py-0.5 rounded`}
            onClick={(e) => {
              e.preventDefault();
              setActiveHeading(heading.id);
              const targetElement = document.getElementById(heading.id);
              if (targetElement) {
                targetElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                });
              }
            }}
          >
            {heading.text.length > 20
              ? `${heading.text.substring(0, 20)}...`
              : heading.text}
          </Link>
          {heading.children.length > 0 && (
            <div className="pl-4">
              <TOC headings={heading.children} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
