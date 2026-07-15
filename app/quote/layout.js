import PageStructuredData from '@/components/PageStructuredData'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata('/quote')

export default function QuoteLayout({ children }) {
  return (
    <>
      <PageStructuredData pathname="/quote" />
      {children}
    </>
  )
}
