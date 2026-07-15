import Image from 'next/image'
import Link from 'next/link'

export default function Logo({ className = '', imageClassName = 'h-11 w-auto' }) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <Image
        src="/bwc-logo.jpg"
        alt="Boyd Walston Construction"
        width={1024}
        height={682}
        className={imageClassName}
        priority
      />
    </Link>
  )
}
