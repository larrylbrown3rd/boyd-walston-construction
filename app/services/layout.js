import PageStructuredData from '@/components/PageStructuredData'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata('/services')

export default function ServicesLayout({ children }) {
  return (
    <>
      <PageStructuredData
        pathname="/services"
        includeServices
      />
      {children}
    </>
  )
}
