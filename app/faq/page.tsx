import type { Metadata } from 'next'
import CtaBand from '@/components/CtaBand'
import FaqAccordion from '@/components/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import PageHeader from '@/components/PageHeader'
import { config } from '@/lib/config'
import type { Faq } from '@/lib/config-schema'
import { loadContent, readFrontmatter } from '@/lib/content'
import { breadcrumbList, faqPage } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

const CONTENT = 'faq.mdx'
const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'FAQ', path: '/faq' },
]

export function generateMetadata(): Metadata {
  const fm = readFrontmatter(CONTENT)
  return buildMetadata({ kind: 'other', title: 'Frequently Asked Questions', path: '/faq', description: fm.description, image: fm.image }).metadata
}

/** Every FAQ on the site in one place: the general ones, then each service's. One FAQPage, no repeated question. */
function allFaqs(): Faq[] {
  const seen = new Set<string>()
  return [...config.faqs, ...config.services.flatMap((s) => s.faqs)].filter((f) => !seen.has(f.q) && seen.add(f.q))
}

export default async function FaqPage() {
  const { content } = await loadContent(CONTENT)
  const general = new Set(config.faqs.map((f) => f.q))
  return (
    <>
      <JsonLd data={faqPage(allFaqs())} />
      <JsonLd data={breadcrumbList(CRUMBS)} />
      <PageHeader title="Frequently Asked Questions" crumbs={CRUMBS} />
      <article className="mx-auto max-w-3xl px-4 pt-6 sm:px-6">{content}</article>
      <FaqAccordion faqs={config.faqs} heading="General Questions" />
      {config.services.map((s) => (
        <FaqAccordion key={s.slug} faqs={s.faqs.filter((f) => !general.has(f.q))} heading={`${s.name} Questions`} />
      ))}
      <CtaBand />
    </>
  )
}
