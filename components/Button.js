const variants = {
  primary:
    'bg-white text-[#111111] shadow-md shadow-black/10 hover:bg-[#F0EFED] hover:shadow-lg hover:shadow-black/15 hover:scale-[1.02] active:scale-[0.98]',
  outline:
    'bg-white/5 backdrop-blur-md text-white border border-white/25 hover:bg-white/12 hover:border-white/45 hover:scale-[1.02] active:scale-[0.98]',
}

export default function Button({
  href,
  variant = 'primary',
  children,
  className = '',
}) {
  return (
    <a
      href={href}
      className={[
        'inline-flex items-center justify-center',
        'font-inter font-medium text-sm',
        'px-7 py-3.5 rounded-lg',
        'transition-all duration-200 ease-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]',
        variants[variant],
        className,
      ].join(' ')}
    >
      {children}
    </a>
  )
}
