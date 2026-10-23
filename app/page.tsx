import type { Metadata } from 'next'
import AreaList from '@/components/AreaList'
import BeforeAfter from '@/components/BeforeAfter'
import CtaBand from '@/components/CtaBand'
import FaqAccordion from '@/components/FaqAccordion'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import JsonLd from '@/components/JsonLd'
import PromoBand from '@/components/PromoBand'
import ServiceGrid from '@/components/ServiceGrid'
import TrustStrip from '@/components/TrustStrip'
import { config } from '@/lib/config'
import { loadContent, readFrontmatter } from '@/lib/content'
import { faqPage, localBusiness, organization, website } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

const CONTENT = 'home.mdx'

export function generateMetadata(): Metadata {
  const fm = readFrontmatter(CONTENT)
  return buildMetadata({ kind: 'home', path: '/', description: fm.description, image: fm.image }).metadata
}

/** Photos first: the owner's job photos lead, right under the hero and trust strip. */
export default async function HomePage() {
  const { content } = await loadContent(CONTENT)
  return (
    <>
      <JsonLd data={localBusiness()} />
      <JsonLd data={organization()} />
      <JsonLd data={website()} />
      <JsonLd data={faqPage(config.faqs)} />

      <Hero />
      <div className="mx-auto max-w-page px-4 sm:px-6">
        <TrustStrip />
      </div>
      <BeforeAfter />
      <Gallery heading={`Recent Work in ${config.primaryCity} and Nearby Towns`} />
      <ServiceGrid />
      <article className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">{content}</article>
      <PromoBand />
      <AreaList />
      <FaqAccordion faqs={config.faqs} />
      <CtaBand />
    </>
  )
}
