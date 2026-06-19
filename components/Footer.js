export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white py-16 px-8 border-t border-[#2C2C2C]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        <div>
          <h3 className="text-display text-xl tracking-wider text-white">
            Boyd Walston Construction
          </h3>
          <p className="font-lato font-light text-xs text-[#9B9B9B] tracking-wide mt-2">
            Quality residential and commercial construction throughout The River Region, AL.
          </p>
        </div>

        <div>
          <h3 className="text-eyebrow text-sm mb-6">
            Quick Links
          </h3>
          <ul className="space-y-2 list-none">
            <li><a href="/" className="font-lato font-light text-sm text-[#9B9B9B] hover:text-white transition-colors">Home</a></li>
            <li><a href="/services" className="font-lato font-light text-sm text-[#9B9B9B] hover:text-white transition-colors">Services</a></li>
            <li><a href="/projects/residential" className="font-lato font-light text-sm text-[#9B9B9B] hover:text-white transition-colors">Residential Projects</a></li>
            <li><a href="/projects/commercial" className="font-lato font-light text-sm text-[#9B9B9B] hover:text-white transition-colors">Commercial Projects</a></li>
            <li><a href="/about" className="font-lato font-light text-sm text-[#9B9B9B] hover:text-white transition-colors">About</a></li>
            <li><a href="/contact" className="font-lato font-light text-sm text-[#9B9B9B] hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-eyebrow text-sm mb-6">
            Contact
          </h3>
          <ul className="space-y-2 list-none">
            <li className="font-lato font-light text-sm text-[#9B9B9B]">P.O. Box 640313, Pike Road, AL</li>
            <li><a href="mailto:Info@buildwithboyd.com" className="font-lato font-light text-sm text-[#9B9B9B] hover:text-white transition-colors">Info@buildwithboyd.com</a></li>
            <li><a href="tel:3346093504" className="font-lato font-light text-sm text-[#9B9B9B] hover:text-white transition-colors">334-609-3504</a></li>
            <li className="font-lato font-light text-sm text-[#9B9B9B]">Mon–Fri 8am–5pm</li>
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-[#2C2C2C]">
        <p className="font-lato font-light text-xs text-[#9B9B9B]">
          © 2026 Boyd Walston Construction · The River Region, AL
        </p>
      </div>

    </footer>
  )
}
