import { Button, NumberTicker } from '@/lib/ui'
import React from 'react'
import { GITHUB_REPOSITORY_URL } from '../../app/constraint'
import Link from 'next/link'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { FaStar } from "react-icons/fa";

export default function GithubStar() {
  return (
    <Button
className="reverse-bg hover:bg-current/50 hover:opacity-90 group/githubstar h-7"
text={
  <Link
    href={`${GITHUB_REPOSITORY_URL}`}
    className="flex items-center justify-between reverse-text font-medium text-sm"
  >
    <GitHubLogoIcon className="size-4 mr-2" />
    Star On Github
    <FaStar className="transition-colors duration-300 group-hover/githubstar:text-yellow-500 ml-2" />
    <NumberTicker value={0} />
  </Link>
}
/>
  )
}
