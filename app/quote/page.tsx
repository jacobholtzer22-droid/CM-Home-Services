import type { Metadata } from 'next'
import ContactDetails from '@/components/ContactDetails'
import ContactForm from '@/components/ContactForm'
import JsonLd from '@/components/JsonLd'
import PageHeader from '@/components/PageHeader'
import PromoBand from '@/components/PromoBand'
import { config } from '@/lib/config'
import { loadContent, readFrontmatter } from '@/lib/content'
import { breadcrumbList } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

const CONTENT = 'quote.mdx'
const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Free Estimate', path: '/quote' },
]

export function generateMetadata(): Metadata {
  const fm = readFrontmatter(CONTENT)
  return buildMetadata({
    kind: 'other',
    title: `Free Estimate in ${config.primaryCity}, ${config.primaryState}`,
    path: '/quote',
    description: fm.description,
    image: fm.image,
  }).metadata
}

export default async function QuotePage() {
  const { content } = await loadContent(CONTENT)
  return (
    <>
      <JsonLd data={breadcrumbList(CRUMBS)} />
      <PageHeader title="Get a Free Estimate" crumbs={CRUMBS} />
      <PromoBand />
      <div className="mx-auto grid max-w-page gap-10 px-4 pt-10 sm:px-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <article className="mb-8">{content}</article>
          <ContactForm />
        </div>
        <aside>
          <ContactDetails />
        </aside>
      </div>
    </>
  )
}
