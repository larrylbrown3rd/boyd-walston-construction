import PageStructuredData from '@/components/PageStructuredData'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata('/projects/residential')

export default function ResidentialProjectsLayout({ children }) {
  return (
    <>
      <PageStructuredData pathname="/projects/residential" />
      {children}
    </>
  )
}
