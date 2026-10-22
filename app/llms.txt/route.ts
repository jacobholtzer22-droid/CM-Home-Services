import { config, hoursSummary } from '@/lib/config'

export const dynamic = 'force-static'

/** Plain-text summary for LLM crawlers, generated from config. */
export function GET() {
  const c = config
  const url = (path: string) => new URL(path, c.domain).toString()
  const lines: string[] = [
    `# ${c.displayName}`,
    '',
    `> ${c.tagline}`,
    '',
    `${c.legalName} provides ${c.services.map((s) => s.name.toLowerCase()).join(', ')} in ${c.primaryCity}, ${c.primaryState} and surrounding areas.`,
    '',
    '## Contact',
    `- Phone: ${c.phoneDisplay}`,
    ...(c.email ? [`- Email: ${c.email}`] : []),
    `- Based in: ${c.primaryCity}, ${c.primaryState}`,
    `- Website: ${c.domain}`,
    `- Contact page: ${url('/contact')}`,
    '',
    '## Services',
    ...c.services.map((s) => `- [${s.name}](${url(`/services/${s.slug}`)}): ${s.shortDescription}`),
    '',
    '## Service areas',
    ...c.serviceAreas.map((a) => `- [${a.name}, ${c.primaryState}](${url(`/areas/${a.slug}`)})`),
  ]
  if (c.hours) {
    lines.push('', '## Hours', ...hoursSummary().map((line) => `- ${line}`))
  }
  const facts: string[] = []
  if (c.yearsInBusiness !== null) facts.push(`- Years in business: ${c.yearsInBusiness}`)
  if (c.insured === true) facts.push('- Insured: yes')
  if (c.licenseNumber) facts.push(`- License: ${c.licenseNumber}`)
  if (facts.length) lines.push('', '## Credentials', ...facts)
  lines.push('', '## Pages', `- [About](${url('/about')})`, `- [How It Works](${url('/how-it-works')})`, `- [FAQ](${url('/faq')})`, `- [Service Areas](${url('/service-areas')})`, `- [Free Estimate](${url('/quote')})`, `- [Privacy Policy](${url('/privacy-policy')})`, `- [Sitemap](${url('/sitemap.xml')})`)

  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
