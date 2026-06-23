function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="w-4 h-4 text-brand-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  )
}

const badges = [
  { title: 'Licensed & Insured', subtitle: 'Alabama contractor' },
  { title: '48-Hour Response', subtitle: 'Mon–Fri, 8am–5pm' },
  { title: '10+ Years', subtitle: 'Industry experience' },
  { title: 'Family Owned', subtitle: 'Since 1960' },
]

export default function TrustBadges() {
  return (
    <section className="py-10 px-6 md:px-10 bg-white border-b border-[#E8E8E8]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {badges.map((badge) => (
            <div key={badge.title} className="flex flex-col items-center text-center group">
              <div className="mb-3 group-hover:translate-x-1 transition-transform duration-300">
                <ArrowIcon />
              </div>
              <p className="font-lato text-xs font-semibold text-[#111111] mb-1">
                {badge.title}
              </p>
              <p className="font-lato text-xs text-[#9B9B9B]">
                {badge.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
