import ConstructionIcon from '@/components/ConstructionIcon'

const badges = [
  { title: 'Licensed & Insured', subtitle: 'Alabama contractor', icon: 'hardHat' },
  { title: '48-Hour Response', subtitle: 'Mon–Fri, 7am–6pm', icon: 'hammer' },
  { title: '10+ Years', subtitle: 'Industry experience', icon: 'wrench' },
  { title: 'Family Owned', subtitle: 'Since 1960', icon: 'building' },
]

export default function TrustBadges() {
  return (
    <section className="py-10 px-6 md:px-10 bg-[#F8F7F5] border-t border-[#E8E8E8]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {badges.map((badge) => (
            <div key={badge.title} className="flex flex-col items-center text-center group">
              <div className="mb-3 w-10 h-10 rounded-full bg-[#F8F7F5] border border-[#E8E8E8] flex items-center justify-center group-hover:border-brand-gold transition-colors duration-300">
                <ConstructionIcon name={badge.icon} />
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
