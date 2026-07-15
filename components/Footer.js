import Link from 'next/link'
import Button from '@/components/Button'
import Logo from '@/components/Logo'
import SocialLinks from '@/components/SocialLinks'

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="border-b border-[#2C2C2C]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-display text-2xl md:text-3xl text-white mb-2">
              Ready To Start Your Project?
            </p>
            <p className="font-lato text-sm text-[#9B9B9B]">
              Let&apos;s talk about your project · Licensed & insured
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="tel:3346093504"
              className="inline-flex items-center justify-center font-inter font-medium text-sm px-6 py-3 rounded-lg border border-white/20 text-white hover:border-brand-gold hover:text-brand-gold transition-colors"
            >
              334-609-3504
            </a>
            <Button href="/quote" variant="gold" className="!px-6">
              Get A Quote
            </Button>
          </div>
        </div>
      </div>

      <div className="py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Logo imageClassName="h-16 w-auto mb-6" />
            <span className="accent-bar mb-4" />
            <SocialLinks className="[&_a]:text-white [&_a]:border-white/20 [&_a]:hover:border-brand-gold [&_a]:hover:text-brand-gold mb-6" />
          </div>

          <div>
            <h3 className="text-eyebrow text-sm mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2 list-none">
              <li><Link href="/" className="font-lato font-light text-sm text-[#9B9B9B] hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link href="/services" className="font-lato font-light text-sm text-[#9B9B9B] hover:text-brand-gold transition-colors">Services</Link></li>
              <li><Link href="/projects/residential" className="font-lato font-light text-sm text-[#9B9B9B] hover:text-brand-gold transition-colors">Residential Construction</Link></li>
              <li><Link href="/projects/commercial" className="font-lato font-light text-sm text-[#9B9B9B] hover:text-brand-gold transition-colors">Commercial Projects</Link></li>
              <li><Link href="/projects/civil" className="font-lato font-light text-sm text-[#9B9B9B] hover:text-brand-gold transition-colors">Civil Projects</Link></li>
              <li><Link href="/about" className="font-lato font-light text-sm text-[#9B9B9B] hover:text-brand-gold transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-eyebrow text-sm mb-6">
              Contact
            </h3>
            <ul className="space-y-2 list-none">
              <li className="font-lato font-light text-sm text-[#9B9B9B]">P.O. Box 640313, Pike Road, AL</li>
              <li><a href="mailto:Info@buildwithboyd.com" className="font-lato font-light text-sm text-[#9B9B9B] hover:text-brand-gold transition-colors">Info@buildwithboyd.com</a></li>
              <li><a href="tel:3346093504" className="font-lato font-light text-sm text-[#9B9B9B] hover:text-brand-gold transition-colors">334-609-3504</a></li>
              <li className="font-lato font-light text-sm text-[#9B9B9B]">Mon–Fri 7am–6pm</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
