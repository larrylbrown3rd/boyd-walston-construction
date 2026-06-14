export default function TrustBadges() {
  const badges = [
    {
      icon: '✓',
      title: 'Licensed & Insured',
      subtitle: 'Alabama Contractor',
    },
    {
      icon: '⭐',
      title: '5-Star Rated',
      subtitle: '200+ Happy Clients',
    },
    {
      icon: '⚡',
      title: 'Fast Response',
      subtitle: 'Reply Within 2 Hours',
    },
    {
      icon: '🏆',
      title: '10+ Years',
      subtitle: 'Industry Experience',
    },
    {
      icon: '💯',
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
              <span className="text-2xl mb-2">
                {badge.icon}
              </span>
              <p className="font-inter font-semibold text-xs text-[#111111] mb-1">
                {badge.title}
              </p>
              <p className="font-inter text-xs text-[#9B9B9B]">
                {badge.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
