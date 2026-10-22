'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { config } from '@/lib/config'

/**
 * Sticky tap-to-call bar, mobile only, always reachable. Hidden on the contact
 * and quote pages, where the form is the call to action. The body carries matching bottom
 * padding on mobile so the footer is never covered.
 */
export default function MobileCallBar() {
  const pathname = usePathname()
  if (pathname === '/contact' || pathname === '/quote') return null
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line bg-surface md:hidden">
      <a
        href={`tel:${config.phone}`}
        className="flex min-h-[3.5rem] items-center justify-center text-base font-semibold text-primary-dark"
      >
        Call {config.phoneDisplay}
      </a>
      <Link
        href="/quote"
        className="flex min-h-[3.5rem] items-center justify-center bg-accent text-base font-semibold text-on-accent"
      >
        Free Estimate
      </Link>
    </div>
  )
}
