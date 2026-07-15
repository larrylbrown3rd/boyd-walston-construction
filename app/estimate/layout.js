import PageStructuredData from '@/components/PageStructuredData'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata('/estimate')

export default function EstimateLayout({ children }) {
  return (
    <>
      <PageStructuredData pathname="/estimate" />
      {children}
    </>
  )
}
