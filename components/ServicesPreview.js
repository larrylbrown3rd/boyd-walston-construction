import ScrollReveal from '@/components/ScrollReveal'

const services = [
  {
    title: 'Residential Construction',
    subtitle: 'Remodel',
    href: '/projects/residential',
  },
  {
    title: 'Commercial',
    href: '/projects/commercial',
  },
  {
    title: 'Civil Construction',
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
                <h3 className="text-display text-2xl text-[#111111]">
                  {service.title}
                </h3>
                {service.subtitle && (
                  <p className="text-display text-xl text-[#9B9B9B] mt-1">
                    {service.subtitle}
                  </p>
                )}
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
