import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import { projectPhotos } from '@/data/projectPhotos'

const featured = projectPhotos.slice(0, 4)

export default function FeaturedProjects({ compact = false }) {
  return (
    <section className={`bg-[#111111] text-white ${compact ? 'py-16' : 'py-24'} px-6 md:px-10`}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <span className="accent-bar mb-4" />
              <p className="text-eyebrow text-sm mb-3">Recent Work</p>
              <h2 className={`text-display text-white ${compact ? 'text-4xl md:text-5xl' : 'text-5xl md:text-6xl'}`}>
                Craftsmanship You Can See
              </h2>
              <p className="font-lato text-base font-normal text-white/85 mt-4 max-w-lg leading-[1.75]">
                Real projects across residential renovations, commercial build-outs, and institutional work.
              </p>
            </div>
            <a
              href="/projects"
              className="inline-flex items-center font-inter text-sm text-brand-gold hover:text-brand-gold-light transition-colors shrink-0 group"
            >
              View all projects
              <svg aria-hidden="true" className="inline-block w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {featured.map((photo, i) => (
            <ScrollReveal key={photo.src} delay={i * 0.08}>
              <a
                href={photo.href || '/projects'}
                className="group relative block aspect-[5/6] overflow-hidden bg-[#2C2C2C]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  style={photo.objectPosition ? { objectPosition: photo.objectPosition.replace('object-', '') } : undefined}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-eyebrow text-[10px] md:text-xs mb-2 text-brand-gold-light">
                    {photo.category}
                  </p>
                  <p className="text-display text-lg md:text-xl text-white leading-tight">
                    {photo.title}
                  </p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
