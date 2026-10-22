import type { Metadata } from 'next'
import Link from 'next/link'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import PageHeader from '@/components/PageHeader'
import { config } from '@/lib/config'
import { loadContent, readFrontmatter } from '@/lib/content'
import { breadcrumbList } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

const CONTENT = 'service-areas.mdx'
const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Service Areas', path: '/service-areas' },
]

export function generateMetadata(): Metadata {
  const fm = readFrontmatter(CONTENT)
  return buildMetadata({
    kind: 'other',
    title: `Service Areas Around ${config.primaryCity}, ${config.primaryState}`,
    path: '/service-areas',
    description: fm.description,
    image: fm.image,
  }).metadata
}

/** config.serviceAreas grouped by county, in config order within each county. */
function byCounty() {
  const groups = new Map<string, typeof config.serviceAreas>()
  for (const a of config.serviceAreas) {
    const key = a.county ?? 'Other towns'
    groups.set(key, [...(groups.get(key) ?? []), a])
  }
  return [...groups.entries()]
}

export default async function ServiceAreasPage() {
  const { content } = await loadContent(CONTENT)
  return (
    <>
      <JsonLd data={breadcrumbList(CRUMBS)} />
      <PageHeader title="Service Areas" crumbs={CRUMBS} />
      <article className="mx-auto max-w-3xl px-4 pt-6 sm:px-6">{content}</article>
      <section className="mx-auto max-w-page px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-10 border-t-2 border-primary-dark pt-8 md:grid-cols-3">
          {byCounty().map(([county, areas]) => (
            <div key={county}>
              <h2 className="font-heading text-2xl font-bold text-primary-dark">{county}</h2>
              <ul className="mt-4 space-y-2">
                {areas.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/areas/${a.slug}`} className="text-base font-medium text-ink hover:text-primary">
                      {a.name}, {config.primaryState}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
