import { config } from '@/lib/config'

/** config.process as numbered steps on the full-dark ground. Renders nothing when empty. */
export default function ProcessSteps({ heading = 'How It Works' }: { heading?: string }) {
  if (config.process.length === 0) return null
  return (
    <section className="bg-primary-dark text-on-primary">
      <div className="mx-auto max-w-page px-4 py-16 sm:px-6 md:py-24">
        <h2 className="font-heading text-3xl font-bold md:text-4xl">{heading}</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-4">
          {config.process.map((step, i) => (
            <li key={step.title} className="border-t border-white/20 pt-5">
              <span className="font-heading text-sm font-semibold tabular-nums opacity-80">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 font-heading text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-base leading-relaxed opacity-90">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
