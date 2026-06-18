import ScrollReveal from '@/components/ScrollReveal'

const guarantees = [
  {
    title: 'Free Estimates',
    description: 'Get a clear budget range before you commit to anything.',
  },
  {
    title: 'No Hidden Fees',
    description: 'Transparent pricing discussed upfront at your walkthrough.',
  },
  {
    title: 'Licensed & Insured',
    description: 'Fully credentialed Alabama contractor for your protection.',
  },
  {
    title: 'On-Time Delivery',
    description: 'Detailed timelines so you know exactly what to expect.',
  },
]

export default function RiskReversal() {
  return (
    <section className="bg-[#F8F7F5] py-20 px-8 border-y border-[#E8E8E8]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-eyebrow text-sm mb-4">Zero Risk To Start</p>
            <h2 className="text-display text-4xl md:text-5xl text-[#111111] mb-4">
              We Remove The Guesswork
            </h2>
            <p className="font-lato text-base text-[#4A4A4A] max-w-2xl mx-auto leading-relaxed">
              Hiring a contractor is a big decision. We make it easier by
              giving you clarity, credentials, and communication from day one.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="bg-white border border-[#E8E8E8] p-6 h-full">
                <h3 className="font-lato text-base font-semibold text-[#111111] mb-2">
                  {item.title}
                </h3>
                <p className="font-lato text-sm text-[#4A4A4A] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
