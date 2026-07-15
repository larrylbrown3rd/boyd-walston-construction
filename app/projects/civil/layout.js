import PageStructuredData from '@/components/PageStructuredData'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata('/projects/civil')

export default function CivilProjectsLayout({ children }) {
  return (
    <>
      <PageStructuredData pathname="/projects/civil" />
      {children}
    </>
  )
}
