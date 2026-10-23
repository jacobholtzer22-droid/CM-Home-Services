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
    <header className="sticky top-0 z-40 border-b border-line bg-surface">
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="font-heading text-xl font-bold tracking-tight text-primary-dark">
          {theme.logo ? <img src={theme.logo.src} alt={theme.logo.alt} className="h-10 w-auto" /> : config.displayName}
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-5 lg:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-ink hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Phone className="hidden text-sm text-primary-dark sm:inline" />
          <Link
            href="/quote"
            className="whitespace-nowrap rounded-site bg-accent px-4 py-2 text-sm font-semibold text-on-accent hover:bg-accent-dark"
          >
            Get a Free Estimate
          </Link>
        </div>
      </div>
      <nav aria-label="Main mobile" className="flex gap-5 overflow-x-auto whitespace-nowrap border-t border-line px-4 py-2 lg:hidden">
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} className="text-sm font-medium text-ink hover:text-primary">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
