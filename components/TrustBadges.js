export default function TrustBadges() {
  const badges = [
    {
      mark: '✓',
      title: 'Licensed & Insured',
      subtitle: 'Alabama Contractor',
    },
    {
      mark: '5.0',
      title: '5-Star Rated',
      subtitle: '200+ Happy Clients',
    },
    {
      mark: '2h',
      title: 'Fast Response',
      subtitle: 'Reply Within 2 Hours',
    },
    {
      mark: '10+',
      title: '10+ Years',
      subtitle: 'Industry Experience',
    },
    {
      mark: '100%',
      title: '100% Satisfaction',
      subtitle: 'Guaranteed',
    },
  ]

  return (
    <section className="py-12 px-8 border-b border-[#E8E8E8]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {badges.map((badge, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full border border-[#E8E8E8] flex items-center justify-center mb-3">
                <span className="font-inter font-semibold text-[10px] tracking-wide text-[#111111]">
                  {badge.mark}
                </span>
              </div>
              <p className="font-lato font-light text-xs text-[#111111] mb-1">
                {badge.title}
              </p>
              <p className="font-lato font-light text-xs text-[#9B9B9B]">
                {badge.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
