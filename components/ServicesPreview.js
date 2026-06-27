import ScrollReveal from '@/components/ScrollReveal'

const services = [
  {
    title: 'Residential',
    description: 'Kitchen and bath remodels, additions, and full interior renovations.',
    href: '/projects/residential',
  },
  {
    title: 'Commercial',
    description: 'Commercial build-outs, facility maintenance, and tenant improvements.',
    href: '/projects/commercial',
  },
  {
    title: 'Civil Construction',
    description: 'Site prep, excavation, concrete, and utility work.',
    href: '/projects/civil',
  },
]

export default function ServicesPreview() {
  return (
    <section className="section-pad bg-[#F8F7F5] border-b border-[#E8E8E8]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <span className="accent-bar mb-4" />
            <p className="text-eyebrow-dark text-sm mb-4">What We Build</p>
            <h2 className="text-display text-4xl md:text-5xl text-[#111111] mb-4">
              One Team. Every Scale.
            </h2>
            <p className="text-lead-light">
              From a single bathroom remodel to multi-story commercial sites —
              you get the same attention to detail at every level.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <a
                href={service.href}
                className="group block h-full bg-white border border-[#E8E8E8] p-6 hover:border-brand-gold hover:shadow-lg hover:shadow-brand-gold/5 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-5">
                  <svg aria-hidden="true" className="w-4 h-4 text-brand-gold-dark group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                  <div className="w-8 h-0.5 bg-brand-gold group-hover:w-12 transition-all duration-300" />
                </div>
                <h3 className="text-display text-2xl text-[#111111] mb-3">
                  {service.title}
                </h3>
                <p className="font-lato text-base font-normal text-[#4A4A4A] leading-[1.75]">
                  {service.description}
                </p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
