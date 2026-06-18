function ClockIcon() {
  return (
    <svg
      aria-hidden="true"
      className="w-4 h-4 text-white"
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
    <div className="flex items-center gap-3 bg-[#F8F7F5] border border-[#E8E8E8] px-6 py-4 mb-8">
      <div className="w-8 h-8 rounded-full bg-[#111111] flex items-center justify-center flex-shrink-0">
        <ClockIcon />
      </div>
      <div>
        <p className="font-lato font-light text-sm text-[#111111]">
          We respond within 2 hours
        </p>
        <p className="font-lato font-light text-xs text-[#9B9B9B]">
          Monday – Friday · 7am – 5pm ·
          After hours responses by 8am next day
        </p>
      </div>
    </div>
  )
}
