'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  /** E.164, for the tel: link. */
  phone: string
  phoneDisplay: string
}

/**
 * Sticky tap-to-call bar, mobile only, always reachable. Hidden on the contact
 * and quote pages, where the form is the call to action. The body carries matching bottom
 * padding on mobile so the footer is never covered.
 *
 * The phone arrives as props from the server layout so this client component
 * does not pull the whole site config into the browser bundle.
 */
export default function MobileCallBar({ phone, phoneDisplay }: Props) {
  const pathname = usePathname()
  if (pathname === '/contact' || pathname === '/quote') return null
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line bg-surface md:hidden">
      <a
        href={`tel:${phone}`}
        className="flex min-h-[3.5rem] items-center justify-center text-base font-semibold text-primary-dark"
      >
        Call {phoneDisplay}
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
