import type { Metadata } from 'next'
import AreaList from '@/components/AreaList'
import Benefits from '@/components/Benefits'
import ContactForm from '@/components/ContactForm'
import CtaBand from '@/components/CtaBand'
import FaqAccordion from '@/components/FaqAccordion'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import JsonLd from '@/components/JsonLd'
import ProcessSteps from '@/components/ProcessSteps'
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
      <article className="mx-auto max-w-3xl px-4 pt-6 sm:px-6">{content}</article>
      <ServiceGrid />
      <PromoBand />
      <Benefits />
      <Gallery />
      <AreaList />
      <ProcessSteps />
      <FaqAccordion faqs={config.faqs} />
      {config.homeFormHeading ? (
        <section id="estimate" className="border-t-2 border-primary-dark bg-primary-soft">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
            <h2 className="font-heading text-3xl font-bold text-primary-dark md:text-4xl">{config.homeFormHeading}</h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </section>
      ) : (
        <CtaBand />
      )}
    </>
  )
}
