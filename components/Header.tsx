import Link from 'next/link'
import { config } from '@/lib/config'
import theme from '@/theme'
import Phone from './Phone'

// The first two services lead the nav: config.services is in the brief's order.
const NAV = [
  ...config.services.slice(0, 2).map((s) => ({ href: `/services/${s.slug}`, label: s.name })),
  { href: '/services', label: 'All Services' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/service-areas', label: 'Areas' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-primary-dark text-on-primary">
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0 font-heading text-xl font-bold tracking-tight text-on-primary">
          {theme.logo ? <img src={theme.logo.src} alt={theme.logo.alt} width={607} height={240} className="h-12 w-auto md:h-16" /> : config.displayName}
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-5 lg:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-on-primary opacity-90 hover:underline hover:opacity-100">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Phone className="hidden text-sm text-on-primary sm:inline" />
          <Link
            href="/quote"
            className="whitespace-nowrap rounded-site bg-accent px-4 py-2 text-sm font-semibold text-on-accent hover:bg-accent-dark"
          >
            Get a Free Estimate
          </Link>
        </div>
      </div>
      <nav aria-label="Main mobile" className="flex gap-5 overflow-x-auto whitespace-nowrap border-t border-white/10 px-4 py-2 lg:hidden">
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} className="text-sm font-medium text-on-primary opacity-90 hover:underline hover:opacity-100">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
