const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://www.buildwithboyd.com'

export const siteConfig = {
  name: 'Boyd Walston Construction',
  shortName: 'Boyd Walston',
  tagline: 'Three Generations Of Craft. One Standard Of Excellence.',
  description:
    'Licensed Alabama general contractor serving Pike Road, Montgomery, and central Alabama. Residential renovations, commercial build-outs, and civil construction — free estimates within 48 hours.',
  url: siteUrl,
  phone: '334-609-3504',
  phoneTel: '+13346093504',
  email: 'Info@buildwithboyd.com',
  address: {
    street: 'P.O. Box 640313',
    city: 'Pike Road',
    state: 'AL',
    country: 'US',
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

export const routes = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/projects', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/projects/residential', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/projects/commercial', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/projects/civil', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/projects/government', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/quote', changeFrequency: 'monthly', priority: 0.95 },
  { path: '/estimate', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/book', changeFrequency: 'monthly', priority: 0.85 },
]

const pageMetadata = {
  '/': {
    title: 'Boyd Walston Construction | Alabama General Contractor',
    description: siteConfig.description,
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
    title: 'Construction Services | Residential, Commercial & Civil',
    description:
      'Kitchen remodels, commercial tenant build-outs, site prep, and civil construction across central Alabama. Licensed, insured, and free estimates.',
    keywords: [
      'residential construction Alabama',
      'commercial construction Montgomery',
      'civil construction Pike Road',
      'kitchen remodel contractor',
    ],
  },
  '/projects': {
    title: 'Construction Projects Portfolio',
    description:
      'Browse residential, commercial, and civil construction projects completed by Boyd Walston Construction across central Alabama.',
    keywords: ['construction portfolio Alabama', 'renovation projects Montgomery'],
  },
  '/projects/residential': {
    title: 'Residential Construction Projects',
    description:
      'Kitchen remodels, bathroom renovations, additions, and full home remodels delivered by Boyd Walston Construction in central Alabama.',
    keywords: ['residential construction Alabama', 'home renovation Pike Road'],
  },
  '/projects/commercial': {
    title: 'Commercial Construction Projects',
    description:
      'Tenant build-outs, amenity builds, roofing, and facility maintenance for Alabama businesses by Boyd Walston Construction.',
    keywords: ['commercial construction Alabama', 'tenant build-out Montgomery'],
  },
  '/projects/civil': {
    title: 'Civil Construction Projects',
    description:
      'Site prep, excavation, concrete, utilities, land clearing, and demolition services across central Alabama.',
    keywords: ['civil construction Alabama', 'site prep contractor'],
  },
  '/projects/government': {
    title: 'Government Construction Projects',
    description:
      'Government and public-sector construction projects managed with precision, compliance, and accountability.',
    keywords: ['government construction Alabama', 'public sector contractor'],
  },
  '/about': {
    title: 'About Boyd Walston Construction',
    description:
      'Three generations of construction heritage serving Alabama homeowners and businesses. Meet Devoski Boyd and the team behind Boyd Walston Construction.',
    keywords: ['Boyd Walston Construction history', 'Alabama contractor about'],
  },
  '/quote': {
    title: 'Get A Free Construction Quote',
    description:
      'Request a free construction estimate from Boyd Walston Construction. We respond within 48 hours with clear next steps for your project.',
    keywords: ['free construction estimate Alabama', 'contractor quote Pike Road'],
  },
  '/estimate': {
    title: 'Smart Construction Estimate',
    description:
      'Get a quick project estimate from Boyd Walston Construction. Licensed Alabama contractor with transparent pricing.',
    keywords: ['construction estimate tool', 'renovation cost estimate Alabama'],
  },
  '/book': {
    title: 'Book A Consultation',
    description:
      'Schedule a consultation with Boyd Walston Construction to discuss your residential, commercial, or civil project.',
    keywords: ['book construction consultation Alabama'],
  },
}

export function createMetadata(pathname) {
  const page = pageMetadata[pathname] || pageMetadata['/']
  const canonical = `${siteConfig.url}${pathname === '/' ? '' : pathname}`

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: page.title,
      template: `%s | ${siteConfig.name}`,
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
          alt: `${siteConfig.name} project site`,
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
    '@type': 'GeneralContractor',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.logo}`,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      addressCountry: siteConfig.address.country,
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
