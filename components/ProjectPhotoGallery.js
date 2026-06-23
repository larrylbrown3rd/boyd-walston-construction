import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

export default function ProjectPhotoGallery({ photos, columns = 3 }) {
  const gridClass =
    columns === 4
      ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      : 'grid-cols-2 md:grid-cols-3'

  return (
    <div className={`grid ${gridClass} gap-3 md:gap-4`}>
      {photos.map((photo, i) => (
        <ScrollReveal key={photo.src} delay={i * 0.05}>
          <div className="group relative aspect-[4/3] overflow-hidden bg-[#2C2C2C]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
            />
            {photo.title && (
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#111111]/90 to-transparent">
                <p className="font-lato text-xs text-white/90">{photo.title}</p>
              </div>
            )}
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}
