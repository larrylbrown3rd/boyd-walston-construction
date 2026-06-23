function ClockIcon() {
  return (
    <svg
      aria-hidden="true"
      className="w-4 h-4 text-brand-gold"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
    >
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 7v5l3 2" />
    </svg>
  )
}

export default function ResponsePromise() {
  return (
    <div className="flex items-center gap-4 bg-white border border-[#E8E8E8] px-5 py-4 mb-6 shadow-sm">
      <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0">
        <ClockIcon />
      </div>
      <div>
        <p className="font-lato text-sm font-semibold text-[#111111]">
          We respond within 48 hours
        </p>
        <p className="font-lato text-xs text-[#9B9B9B]">
          Monday – Friday · 8am – 5pm · After-hours messages answered next business day
        </p>
      </div>
    </div>
  )
}
