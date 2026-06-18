'use client'

import ScrollReveal from '@/components/ScrollReveal'
import StatCounter from '@/components/StatCounter'

const stats = [
  {
    value: '200',
    suffix: '+',
    label: 'Projects Delivered',
    trigger: 'Families and businesses across the River Region',
  },
  {
    value: '10',
    suffix: '+',
    label: 'Years Experience',
    trigger: 'Proven craftsmanship you can count on',
  },
  {
    value: '5',
    suffix: '.0',
    label: 'Client Rating',
    trigger: 'Consistently rated excellent by our clients',
  },
  {
    value: '2',
    suffix: 'hr',
    label: 'Avg Response Time',
    trigger: 'Fast answers when you are ready to build',
  },
]

export default function SocialProofStats() {
  return (
    <section className="bg-[#111111] text-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-eyebrow text-sm mb-4">By The Numbers</p>
            <h2 className="text-display text-4xl md:text-5xl text-white">
              Trusted Before The First Nail
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-display text-5xl md:text-6xl text-white mb-2">
                  <StatCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="font-lato text-sm font-semibold text-white mb-2">
                  {stat.label}
                </p>
                <p className="font-lato text-xs text-[#9B9B9B] leading-relaxed">
                  {stat.trigger}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
