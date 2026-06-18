import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import { projectPhotos } from '@/data/projectPhotos'

const featured = projectPhotos.slice(0, 4)

export default function FeaturedProjects({ compact = false }) {
  return (
    <section className={`bg-[#111111] text-white ${compact ? 'py-16' : 'py-24'} px-6 md:px-10`}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <p className="text-eyebrow text-sm mb-3">Recent Work</p>
              <h2 className={`text-display text-white ${compact ? 'text-4xl md:text-5xl' : 'text-5xl md:text-6xl'}`}>
                Built Across The River Region
              </h2>
            </div>
            <a
              href="/projects"
              className="font-inter text-sm text-white/70 hover:text-white transition-colors shrink-0"
            >
              View all projects →
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {featured.map((photo, i) => (
            <ScrollReveal key={photo.src} delay={i * 0.08}>
              <a
                href="/projects"
                className="group relative block aspect-[5/6] overflow-hidden bg-[#2C2C2C]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#111111]/20 group-hover:bg-[#111111]/10 transition-colors duration-300" />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
