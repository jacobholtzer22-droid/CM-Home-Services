import Link from 'next/link'
import { config } from '@/lib/config'

/**
 * config.offer as a full-width band. Renders nothing when the offer is null.
 * One accent button, no icons.
 */
export default function PromoBand() {
  const offer = config.offer
  if (!offer) return null
  return (
    <section className="border-y-2 border-primary-dark bg-primary-dark text-on-primary">
      <div className="mx-auto flex max-w-page flex-col items-start justify-between gap-8 px-4 py-14 sm:px-6 md:flex-row md:items-center md:py-20">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">{offer.headline}</h2>
          <p className="mt-3 text-base md:text-lg">{offer.detail}</p>
          {offer.finePrint && <p className="mt-3 text-sm opacity-80">{offer.finePrint}</p>}
        </div>
        <Link href="/quote" className="rounded-site bg-accent px-6 py-3.5 text-base font-semibold text-on-accent hover:bg-accent-dark">
          Get My Free Estimate
        </Link>
      </div>
    </section>
  )
}
