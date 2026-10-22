import Link from 'next/link'
import { config } from '@/lib/config'
import Phone from './Phone'

/**
 * One line under the hero: the phone, then config.trustItems. Items with an
 * href link to that internal route. Nothing renders beyond the phone when the
 * list is empty.
 */
export default function TrustStrip({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-8 gap-y-3 border-b border-line py-5 text-sm font-medium text-primary-dark ${className}`}>
      <li>
        <Phone className="text-primary-dark" />
      </li>
      {config.trustItems.map((item) => (
        <li key={item.label}>
          {item.href ? (
            <Link href={item.href} className="underline decoration-accent decoration-2 underline-offset-4 hover:text-primary">
              {item.label}
            </Link>
          ) : (
            item.label
          )}
        </li>
      ))}
    </ul>
  )
}
