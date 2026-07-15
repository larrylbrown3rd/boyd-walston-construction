import Image from 'next/image'
import Link from 'next/link'

const sizeClasses = {
  sm: 'h-10 w-10',
  md: 'h-14 w-14',
  lg: 'h-20 w-20',
}

export default function Logo({ className = '', size = 'md' }) {
  const dimension = sizeClasses[size] || sizeClasses.md

  return (
    <Link href="/" className={`inline-flex items-center shrink-0 ${className}`}>
      <span className={`relative ${dimension} overflow-hidden rounded-full bg-[#111111]`}>
        <Image
          src="/bwc-logo.jpg"
          alt="Boyd Walston Construction"
          fill
          className="object-cover object-center"
          sizes="80px"
          priority
        />
      </span>
    </Link>
  )
}
