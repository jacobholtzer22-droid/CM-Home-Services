import { config } from '@/lib/config'
import Img from './Img'

/**
 * config.beforeAfter as pairs on the full-dark section, the same surface and
 * padding as Gallery. Each pair is two equal frames, before on the left and
 * after on the right (stacked, before first, on mobile), with the caption
 * under the pair. Server only, no client JS. Nothing renders when empty.
 *
 * The labels sit on a solid chip rather than straight on the photo, so they
 * stay readable over bright lawn and dark beds alike.
 */
export default function BeforeAfter({ heading = 'Before and After' }: { heading?: string }) {
  const pairs = config.beforeAfter
  if (pairs.length === 0) return null
  return (
    <section className="bg-primary-dark text-on-primary">
      <div className="mx-auto max-w-page px-4 py-16 sm:px-6 md:py-24">
        <h2 className="font-heading text-3xl font-bold md:text-4xl">{heading}</h2>
        <div className="mt-10 space-y-12">
          {pairs.map((pair) => (
            <figure key={`${pair.before}|${pair.after}`}>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  { label: 'Before', name: pair.before },
                  { label: 'After', name: pair.after },
                ].map((side) => (
                  <div key={side.label} className="relative overflow-hidden rounded-site">
                    <Img name={side.name} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[4/3] h-auto w-full object-cover" />
                    <span className="absolute left-3 top-3 rounded-site bg-primary-dark px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-on-primary">
                      {side.label}
                    </span>
                  </div>
                ))}
              </div>
              <figcaption className="mt-4 text-base opacity-90">{pair.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
