import ScrollReveal from '@/components/ScrollReveal'
import Button from '@/components/Button'

const steps = [
  {
    number: '01',
    title: 'Tell Us Your Vision',
    description:
      'Share your project details in a free quote request. No pressure, no obligation — just clarity.',
  },
  {
    number: '02',
    title: 'Walk The Site Together',
    description:
      'We visit your property, assess scope, and give you an honest timeline and budget range.',
  },
  {
    number: '03',
    title: 'Build With Confidence',
    description:
      'We manage every phase with clear updates so you always know what happens next.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="max-w-2xl mb-16">
            <span className="accent-bar mb-4" />
            <p className="text-eyebrow-dark text-sm mb-4">Simple Process</p>
            <h2 className="text-display text-5xl md:text-6xl text-[#111111] mb-4">
              From First Call To Final Walkthrough
            </h2>
            <p className="font-lato text-base md:text-lg font-normal text-[#4A4A4A] leading-relaxed">
              Most people delay because the process feels overwhelming.
              We break it into three clear steps so you can move forward with confidence.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.12}>
              <div className="relative border border-[#E8E8E8] p-8 h-full hover:border-brand-gold/50 hover:shadow-md transition-all duration-300 bg-white">
                <p className="text-display text-4xl text-brand-gold mb-4">
                  {step.number}
                </p>
                <h3 className="font-lato text-lg font-semibold text-[#111111] mb-3">
                  {step.title}
                </h3>
                <p className="font-lato text-base text-[#4A4A4A] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-[#111111] text-white p-8 md:p-10">
            <div className="flex-1">
              <p className="font-lato text-sm font-semibold text-brand-gold mb-1">
                Ready to take step one?
              </p>
              <p className="font-lato text-sm text-white/70">
                Free estimate delivered within 48 hours. No commitment required.
              </p>
            </div>
            <Button href="/quote" variant="gold" className="shrink-0">
              Start Free Quote
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
