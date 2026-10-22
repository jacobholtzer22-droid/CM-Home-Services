import { config } from '@/lib/config'

/**
 * config.benefits as a two-column ruled list, not icon cards or checkmarks.
 * Renders nothing when the list is empty.
 */
export default function Benefits({ heading = `Why ${config.displayName}` }: { heading?: string }) {
  if (config.benefits.length === 0) return null
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-page px-4 py-16 sm:px-6 md:py-24">
        <h2 className="font-heading text-3xl font-bold text-primary-dark md:text-4xl">{heading}</h2>
        <dl className="mt-10 grid border-t-2 border-primary-dark md:grid-cols-2 md:gap-x-12">
          {config.benefits.map((b) => (
            <div key={b.title} className="border-b border-line py-6">
              <dt className="font-heading text-xl font-semibold text-primary-dark">{b.title}</dt>
              <dd className="mt-2 text-base leading-relaxed text-muted">{b.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
