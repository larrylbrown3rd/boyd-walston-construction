const icons = {
  hardHat: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 17h16M6 17v-1.5c0-3.5 2.5-6 6-6s6 2.5 6 6V17" />
      <path strokeLinecap="round" d="M9 10V8a3 3 0 0 1 6 0v2" />
    </>
  ),
  hammer: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="m14 4 6 6-8 8H6v-6l8-8Z" />
      <path strokeLinecap="round" d="M10 10 4 16" />
    </>
  ),
  wrench: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.1 2.1-2.8-2.8 2.1-2.1Z"
    />
  ),
  ruler: (
    <>
      <rect x="5" y="8" width="14" height="8" rx="1" />
      <path strokeLinecap="round" d="M8 11v2M11 11v2M14 11v2M17 11v2" />
    </>
  ),
  building: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20V9l8-4 8 4v11" />
      <path strokeLinecap="round" d="M9 20v-5h6v5M9 12h.01M15 12h.01" />
    </>
  ),
  chevronLeft: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  ),
  chevronRight: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  ),
  link: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 13a5 5 0 0 0 7.07 0l1.41-1.41a5 5 0 0 0-7.07-7.07L10.5 5.5M14 11a5 5 0 0 0-7.07 0L5.52 12.41a5 5 0 0 0 7.07 7.07L13.5 18.5"
    />
  ),
}

export default function ConstructionIcon({
  name = 'hardHat',
  className = 'w-4 h-4 text-brand-gold-dark',
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
    >
      {icons[name] || icons.hardHat}
    </svg>
  )
}
