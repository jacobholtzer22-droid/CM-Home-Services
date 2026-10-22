import rawConfig from '@/site.config'
import { deriveConfig, siteConfigSchema, type SiteConfig } from './config-schema'

export { CONTACT_ENDPOINT, HONEYPOT_FIELD } from './config-schema'
export type { Faq, Review, Service, ServiceArea, SiteConfig } from './config-schema'

function parseOrThrow(): SiteConfig {
  const result = siteConfigSchema.safeParse(rawConfig)
  if (!result.success) {
    const lines = result.error.issues.map((i) => `  - ${i.path.join('.') || '(root)'}: ${i.message}`)
    throw new Error(`site.config.ts failed validation:\n${lines.join('\n')}`)
  }
  return deriveConfig(result.data)
}

/**
 * The validated, typed config. Parsed once at module load: an invalid
 * site.config.ts throws here and fails `next build` before any page renders.
 */
export const config: SiteConfig = parseOrThrow()

export function getService(slug: string) {
  return config.services.find((s) => s.slug === slug) ?? null
}

export function getArea(slug: string) {
  return config.serviceAreas.find((a) => a.slug === slug) ?? null
}

/** "08:00" -> "8am", "18:30" -> "6:30pm". */
export function formatTimeShort(hhmm: string): string {
  const [h = 0, m = 0] = hhmm.split(':').map(Number)
  const hour12 = h % 12 === 0 ? 12 : h % 12
  return `${hour12}${m ? `:${String(m).padStart(2, '0')}` : ''}${h >= 12 ? 'pm' : 'am'}`
}

/**
 * config.hours collapsed into lines: consecutive days with the same times
 * become one range, so Monday to Friday 08:00 to 18:30 reads
 * "Monday through Friday, 8am to 6:30pm". Empty when hours are unknown.
 */
export function hoursSummary(): string[] {
  const hours = config.hours ?? []
  const groups: { first: string; last: string; open: string; close: string }[] = []
  for (const h of hours) {
    const prev = groups.at(-1)
    if (prev && prev.open === h.open && prev.close === h.close) prev.last = h.day
    else groups.push({ first: h.day, last: h.day, open: h.open, close: h.close })
  }
  return groups.map((g) => {
    const days = g.first === g.last ? g.first : `${g.first} through ${g.last}`
    return `${days}, ${formatTimeShort(g.open)} to ${formatTimeShort(g.close)}`
  })
}

/** Minutes-since-midnight "HH:MM" -> "8:00 AM". */
export function formatTime(hhmm: string): string {
  const [h = 0, m = 0] = hhmm.split(':').map(Number)
  const suffix = h >= 12 ? 'PM' : 'AM'
  const hour12 = h % 12 === 0 ? 12 : h % 12
  return `${hour12}:${String(m).padStart(2, '0')} ${suffix}`
}
