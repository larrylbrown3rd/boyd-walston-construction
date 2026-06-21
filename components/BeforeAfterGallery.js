'use client'

import BeforeAfterSlider from '@/components/BeforeAfterSlider'

export default function BeforeAfterGallery({ items }) {
  return (
    <div className="space-y-16 md:space-y-20">
      {items.map((item) => (
        <div key={item.title}>
          <div className="mb-6">
            <p className="text-eyebrow text-sm mb-2">{item.eyebrow || 'Transformation'}</p>
            <h3 className="text-display text-3xl md:text-4xl text-[#111111] mb-2">
              {item.title}
            </h3>
            {item.description && (
              <p className="font-lato font-light text-sm text-[#9B9B9B] max-w-2xl leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
          <BeforeAfterSlider
            beforeSrc={item.beforeSrc}
            afterSrc={item.afterSrc}
            beforeLabel={item.beforeLabel || 'Before'}
            afterLabel={item.afterLabel || 'After'}
            beforePosition={item.beforePosition}
            afterPosition={item.afterPosition}
          />
        </div>
      ))}
    </div>
  )
}
