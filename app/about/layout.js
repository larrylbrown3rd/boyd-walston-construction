import PageStructuredData from '@/components/PageStructuredData'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata('/about')

export default function AboutLayout({ children }) {
  return (
    <>
      <PageStructuredData pathname="/about" />
      {children}
    </>
  )
}
