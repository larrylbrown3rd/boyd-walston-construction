import PageStructuredData from '@/components/PageStructuredData'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata('/projects/commercial')

export default function CommercialProjectsLayout({ children }) {
  return (
    <>
      <PageStructuredData pathname="/projects/commercial" />
      {children}
    </>
  )
}
