const variants = {
  primary:
    'bg-white text-[#111111] shadow-md shadow-black/10 hover:bg-[#F0EFED] hover:shadow-lg hover:shadow-black/15 hover:scale-[1.02] active:scale-[0.98]',
  outline:
    'bg-white/5 backdrop-blur-md text-white border border-white/25 hover:bg-white/12 hover:border-white/45 hover:scale-[1.02] active:scale-[0.98]',
  dark:
    'bg-[#111111] text-white shadow-md shadow-black/10 hover:bg-[#2C2C2C] hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]',
  gold:
    'bg-brand-gold-dark text-white shadow-md shadow-black/10 hover:bg-[#111111] hover:scale-[1.02] active:scale-[0.98]',
}

export default function Button({
  href,
  variant = 'primary',
  children,
  className = '',
}) {
  const ringOffset =
    variant === 'primary' || variant === 'gold'
      ? 'focus-visible:ring-offset-white'
      : 'focus-visible:ring-offset-[#111111]'

  return (
    <a
      href={href}
      className={[
        'inline-flex items-center justify-center',
        'font-button text-sm min-h-[44px] inline-flex items-center justify-center',
        'px-7 py-3.5 rounded-lg',
        'transition-all duration-200 ease-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 focus-visible:ring-offset-2',
        ringOffset,
        variants[variant],
        className,
      ].join(' ')}
    >
      {children}
    </a>
  )
}
