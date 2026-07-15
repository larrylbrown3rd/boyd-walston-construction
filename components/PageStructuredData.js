import {
  getBreadcrumbSchema,
  getFaqSchema,
  getLocalBusinessSchema,
  getProjectCollectionSchema,
  getServicesSchema,
  getWebsiteSchema,
} from '@/lib/seo'

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default function PageStructuredData({
  pathname = '/',
  includeFaq = false,
  includeServices = false,
  includeBreadcrumbs = true,
}) {
  const schemas = [
    getLocalBusinessSchema(),
    getWebsiteSchema(),
  ]

  if (includeFaq) {
    schemas.push(getFaqSchema())
  }

  if (includeServices) {
    schemas.push(...getServicesSchema())
  }

  if (includeBreadcrumbs) {
    const breadcrumbSchema = getBreadcrumbSchema(pathname)
    if (breadcrumbSchema) schemas.push(breadcrumbSchema)
  }

  const collectionSchema = getProjectCollectionSchema(pathname)
  if (collectionSchema) schemas.push(collectionSchema)

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={`schema-${index}`} data={schema} />
      ))}
    </>
  )
}
