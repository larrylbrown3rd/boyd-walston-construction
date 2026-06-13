export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white py-16 px-8 border-t border-[#2C2C2C]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        <div>
          <h3 className="font-serif text-lg text-white">
            Boyd Walston Construction
          </h3>
          <p className="font-sans text-xs text-[#9B9B9B] tracking-wide mt-2">
            Quality residential and commercial construction in Pike Road, AL.
          </p>
        </div>

        <div>
          <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-[#C4A882] mb-6">
            Quick Links
          </h3>
          <ul className="space-y-2 list-none">
            <li><a href="/" className="font-sans text-sm text-[#9B9B9B] hover:text-white transition-colors">Home</a></li>
            <li><a href="/services" className="font-sans text-sm text-[#9B9B9B] hover:text-white transition-colors">Services</a></li>
            <li><a href="/projects/residential" className="font-sans text-sm text-[#9B9B9B] hover:text-white transition-colors">Residential Projects</a></li>
            <li><a href="/projects/commercial" className="font-sans text-sm text-[#9B9B9B] hover:text-white transition-colors">Commercial Projects</a></li>
            <li><a href="/about" className="font-sans text-sm text-[#9B9B9B] hover:text-white transition-colors">About</a></li>
            <li><a href="/contact" className="font-sans text-sm text-[#9B9B9B] hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-[#C4A882] mb-6">
            Contact
          </h3>
          <ul className="space-y-2 list-none">
            <li className="font-sans text-sm text-[#9B9B9B]">Pike Road, AL</li>
            <li className="font-sans text-sm text-[#9B9B9B]">info@boydwalston.com</li>
            <li className="font-sans text-sm text-[#9B9B9B]">(555) 000-0000</li>
            <li className="font-sans text-sm text-[#9B9B9B]">Mon–Fri 7am–5pm</li>
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-[#2C2C2C]">
        <p className="font-sans text-xs text-[#9B9B9B]">
          © 2026 Boyd Walston Construction · Pike Road, AL
        </p>
      </div>

    </footer>
  )
}
