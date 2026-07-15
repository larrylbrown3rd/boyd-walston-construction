import PageStructuredData from '@/components/PageStructuredData'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata('/projects/government')

export default function GovernmentProjectsLayout({ children }) {
  return (
    <>
      <PageStructuredData pathname="/projects/government" />
      {children}
    </>
  )
}
