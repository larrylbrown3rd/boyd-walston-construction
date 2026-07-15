const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://www.buildwithboyd.com'

export const siteConfig = {
  name: 'Boyd Walston Construction',
  shortName: 'Boyd Walston',
  tagline: 'Three Generations Of Craft. One Standard Of Excellence.',
  description:
    'Licensed Alabama general contractor in Pike Road and Montgomery. Residential remodels, commercial build-outs, and civil site work. Free estimates within 48 hours.',
  url: siteUrl,
  phone: '334-609-3504',
  phoneTel: '+13346093504',
  email: 'Info@buildwithboyd.com',
  address: {
    street: 'P.O. Box 640313',
    city: 'Pike Road',
    state: 'AL',
    postalCode: '36064',
    country: 'US',
  },
  geo: {
    latitude: 32.2843,
    longitude: -86.103,
  },
  serviceAreas: [
    'Pike Road, AL',
    'Montgomery, AL',
    'Central Alabama',
    'The River Region',
  ],
  social: {
    instagram: 'https://www.instagram.com/buildwithboyd/',
    facebook: 'https://www.facebook.com/Buildwithboyd/',
    linkedin: 'https://www.linkedin.com/in/dboyd5620',
  },
  defaultOgImage: '/frame-construction.jpg',
  logo: '/bwc-logo.png',
  foundingDate: '2018',
}

export const faqs = [
  {
    q: 'How much does a renovation or build-out cost?',
    a: 'Project costs vary based on scope, materials, and finishes. We provide free detailed estimates after an initial site visit so you know what to expect before work begins.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Renovations range from 2-8 weeks depending on scope. Commercial build-outs typically take 4-12 weeks. We provide a detailed timeline before any project begins.',
  },
  {
    q: 'Do you handle permits and inspections?',
    a: 'Yes — we handle all permits, inspections, and paperwork required for your project. You never have to deal with city or county offices. We take care of everything.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Pike Road, Montgomery, and surrounding central Alabama communities. Contact us to confirm your location and project scope.',
  },
  {
    q: 'How do I get started?',
    a: 'The easiest way is to submit a quote request on our site — we will follow up within 48 hours. You can also use our Smart Estimate tool or contact us directly.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes — Boyd Walston Construction is fully licensed in the state of Alabama and carries comprehensive general liability and workers compensation insurance. We can provide certificates of insurance upon request.',
  },
]

export const servicesCatalog = [
  {
    name: 'Residential Construction',
    description:
      'Kitchen and bathroom remodels, home additions, detached garages, full home renovations, painting, flooring, and roofing for homeowners across central Alabama.',
    items: [
      'Kitchen Remodel',
      'Bathroom Remodel',
      'Addition',
      'Detached Garage Build',
      'Full Home Remodels',
      'Painting',
      'Flooring',
      'Roofing',
    ],
  },
  {
    name: 'Commercial Construction',
    description:
      'Tenant build-outs, commercial roofing, amenity builds, owner representation, and facility maintenance for businesses in Montgomery and the River Region.',
    items: [
      'Tenant Build-Out',
      'Roofing',
      'Amenity Builds',
      'Owner Rep Services',
      'Facility Maintenance',
    ],
  },
  {
    name: 'Civil Construction',
    description:
      'Site prep, excavation, concrete and utilities, land clearing, and demolition for commercial, institutional, and residential development projects.',
    items: [
      'Site Prep',
      'Excavation',
      'Concrete & Utilities',
      'Land Clearing',
      'Demolition',
    ],
  },
]

export const breadcrumbLabels = {
  '/': 'Home',
  '/services': 'Services',
  '/projects': 'Projects',
  '/projects/residential': 'Residential Projects',
  '/projects/commercial': 'Commercial Projects',
  '/projects/civil': 'Civil Projects',
  '/projects/government': 'Government Projects',
  '/about': 'About',
  '/quote': 'Get A Quote',
  '/estimate': 'Estimate',
  '/book': 'Book A Consultation',
}

export const routes = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/projects', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/projects/residential', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/projects/commercial', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/projects/civil', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/quote', changeFrequency: 'monthly', priority: 0.95 },
  { path: '/estimate', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/book', changeFrequency: 'monthly', priority: 0.85 },
]

const pageMetadata = {
  '/': {
    title: 'Boyd Walston Construction | Alabama General Contractor',
    description:
      'Licensed general contractor in Pike Road and Montgomery, AL. Residential remodels, commercial build-outs, and civil construction. Request a free estimate within 48 hours.',
    keywords: [
      'Alabama general contractor',
      'Pike Road construction',
      'Montgomery renovations',
      'residential remodeling Alabama',
      'commercial build-out',
      'civil construction',
    ],
  },
  '/services': {
    title: 'Construction Services in Montgomery & Pike Road, AL',
    description:
      'Residential remodels, commercial tenant build-outs, and civil site work across central Alabama. Licensed, insured contractor with free project estimates.',
    keywords: [
      'residential construction Alabama',
      'commercial construction Montgomery',
      'civil construction Pike Road',
      'kitchen remodel contractor',
    ],
  },
  '/projects': {
    title: 'Construction Project Portfolio | Central Alabama',
    description:
      'Explore residential, commercial, and civil construction projects by Boyd Walston Construction across Pike Road, Montgomery, and central Alabama.',
    keywords: ['construction portfolio Alabama', 'renovation projects Montgomery'],
  },
  '/projects/residential': {
    title: 'Residential Construction Projects in Alabama',
    description:
      'Kitchen remodels, bathroom renovations, additions, and full home remodels completed by Boyd Walston Construction in Pike Road and Montgomery, AL.',
    keywords: ['residential construction Alabama', 'home renovation Pike Road'],
  },
  '/projects/commercial': {
    title: 'Commercial Construction Projects in Alabama',
    description:
      'Commercial tenant build-outs, roofing, amenity builds, and facility projects for Alabama businesses by Boyd Walston Construction in the River Region.',
    keywords: ['commercial construction Alabama', 'tenant build-out Montgomery'],
  },
  '/projects/civil': {
    title: 'Civil Construction Projects in Central Alabama',
    description:
      'Site prep, excavation, grading, concrete, utilities, land clearing, and demolition projects across Pike Road, Montgomery, and central Alabama.',
    keywords: ['civil construction Alabama', 'site prep contractor'],
  },
  '/projects/government': {
    title: 'Government Construction Projects in Alabama',
    description:
      'Public-sector and institutional construction services with compliance-focused planning, coordination, and delivery across central Alabama.',
    keywords: ['government construction Alabama', 'public sector contractor'],
  },
  '/about': {
    title: 'About Boyd Walston Construction | Our Story',
    description:
      'Family-built Alabama contractor serving homeowners and businesses since 2018. Learn about Devoski Boyd and three generations of construction heritage.',
    keywords: ['Boyd Walston Construction history', 'Alabama contractor about'],
  },
  '/quote': {
    title: 'Request A Free Construction Quote in Alabama',
    description:
      'Request a free construction quote from Boyd Walston Construction. Licensed Alabama contractor — we respond within 48 hours with clear next steps.',
    keywords: ['free construction estimate Alabama', 'contractor quote Pike Road'],
  },
  '/estimate': {
    title: 'Smart Construction Estimate Tool | Alabama',
    description:
      'Get a quick construction project estimate from Boyd Walston Construction. Licensed general contractor serving Pike Road, Montgomery, and central Alabama.',
    keywords: ['construction estimate tool', 'renovation cost estimate Alabama'],
  },
  '/book': {
    title: 'Book A Construction Site Visit in Alabama',
    description:
      'Schedule a free site visit with Boyd Walston Construction to discuss your residential, commercial, or civil project in Pike Road or Montgomery, AL.',
    keywords: ['book construction consultation Alabama'],
  },
}

export function createMetadata(pathname) {
  const page = pageMetadata[pathname] || pageMetadata['/']
  const canonical = `${siteConfig.url}${pathname === '/' ? '' : pathname}`

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      absolute: page.title,
    },
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonical,
      siteName: siteConfig.name,
      title: page.title,
      description: page.description,
      images: [
        {
          url: siteConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} framing crew on an active construction site in Alabama`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [siteConfig.defaultOgImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['GeneralContractor', 'HomeAndConstructionBusiness'],
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    image: `${siteConfig.url}${siteConfig.logo}`,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    description: siteConfig.description,
    foundingDate: siteConfig.foundingDate,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    sameAs: Object.values(siteConfig.social),
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
    ],
  }
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      '@id': `${siteConfig.url}/#organization`,
    },
  }
}

export function getFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }
}

export function getBreadcrumbSchema(pathname) {
  if (pathname === '/') return null

  const items = [{ name: 'Home', url: siteConfig.url }]
  const segments = pathname.split('/').filter(Boolean)
  let currentPath = ''

  segments.forEach((segment) => {
    currentPath += `/${segment}`
    items.push({
      name: breadcrumbLabels[currentPath] || segment.replace(/-/g, ' '),
      url: `${siteConfig.url}${currentPath}`,
    })
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function getServicesSchema() {
  return servicesCatalog.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    serviceType: service.name,
    provider: {
      '@id': `${siteConfig.url}/#organization`,
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.name,
      itemListElement: service.items.map((item) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: item,
        },
      })),
    },
  }))
}

export function getProjectCollectionSchema(pathname) {
  const labels = {
    '/projects': 'Construction Projects Portfolio',
    '/projects/residential': 'Residential Construction Projects',
    '/projects/commercial': 'Commercial Construction Projects',
    '/projects/civil': 'Civil Construction Projects',
    '/projects/government': 'Government Construction Projects',
  }

  const name = labels[pathname]
  if (!name) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    url: `${siteConfig.url}${pathname}`,
    isPartOf: {
      '@id': `${siteConfig.url}/#website`,
    },
    about: {
      '@id': `${siteConfig.url}/#organization`,
    },
  }
}
