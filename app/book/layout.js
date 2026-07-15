import PageStructuredData from '@/components/PageStructuredData'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata('/book')

export default function BookLayout({ children }) {
  return (
    <>
      <PageStructuredData pathname="/book" />
      {children}
    </>
  )
}
