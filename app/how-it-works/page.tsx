import type { Metadata } from 'next'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import PageHeader from '@/components/PageHeader'
import ProcessSteps from '@/components/ProcessSteps'
import { loadContent, readFrontmatter } from '@/lib/content'
import { breadcrumbList } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

const CONTENT = 'how-it-works.mdx'
const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'How It Works', path: '/how-it-works' },
]

export function generateMetadata(): Metadata {
  const fm = readFrontmatter(CONTENT)
  return buildMetadata({ kind: 'other', title: 'How Our Free Estimates Work', path: '/how-it-works', description: fm.description, image: fm.image }).metadata
}

export default async function HowItWorksPage() {
  const { content } = await loadContent(CONTENT)
  return (
    <>
      <JsonLd data={breadcrumbList(CRUMBS)} />
      <PageHeader title="How It Works" crumbs={CRUMBS} />
      <article className="mx-auto max-w-3xl px-4 pb-16 pt-6 sm:px-6">{content}</article>
      <ProcessSteps heading="Four Steps, Start to Finish" />
      <CtaBand />
    </>
  )
}
