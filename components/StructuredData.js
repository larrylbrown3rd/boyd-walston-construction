import {
  getFaqSchema,
  getLocalBusinessSchema,
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

export default function StructuredData({ includeFaq = false }) {
  return (
    <>
      <JsonLd data={getLocalBusinessSchema()} />
      <JsonLd data={getWebsiteSchema()} />
      {includeFaq && <JsonLd data={getFaqSchema()} />}
    </>
  )
}
