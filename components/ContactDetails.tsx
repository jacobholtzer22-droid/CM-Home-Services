import { config, hoursSummary } from '@/lib/config'
import Phone from './Phone'

/** Phone always; email and hours only when known. The base town, never the street. */
export default function ContactDetails() {
  return (
    <div className="rounded-site border border-line bg-surface p-6 text-sm">
      <h2 className="font-heading text-xl font-semibold text-primary-dark">Reach {config.displayName}</h2>
      <dl className="mt-4 space-y-3">
        <div>
          <dt className="font-semibold text-ink">Phone</dt>
          <dd>
            <Phone className="text-primary" />
          </dd>
        </div>
        {config.email && (
          <div>
            <dt className="font-semibold text-ink">Email</dt>
            <dd>
              <a href={`mailto:${config.email}`} className="text-primary underline-offset-2 hover:underline">
                {config.email}
              </a>
            </dd>
          </div>
        )}
        <div>
          <dt className="font-semibold text-ink">Home base</dt>
          <dd className="text-muted">
            {config.primaryCity}, {config.primaryState}
          </dd>
        </div>
        {config.hours && (
          <div>
            <dt className="font-semibold text-ink">Hours</dt>
            <dd>
              <ul className="text-muted">
                {hoursSummary().map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </dd>
          </div>
        )}
      </dl>
    </div>
  )
}
