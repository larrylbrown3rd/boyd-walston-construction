export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Boyd Walston Construction
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Quality residential and commercial construction in Pike Road, AL.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 list-none">
            <li><a href="/" className="text-gray-400 text-sm hover:text-white transition-colors">Home</a></li>
            <li><a href="/services" className="text-gray-400 text-sm hover:text-white transition-colors">Services</a></li>
            <li><a href="/projects" className="text-gray-400 text-sm hover:text-white transition-colors">Projects</a></li>
            <li><a href="/about" className="text-gray-400 text-sm hover:text-white transition-colors">About</a></li>
            <li><a href="/contact" className="text-gray-400 text-sm hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Contact
          </h3>
          <ul className="space-y-2 list-none text-gray-400 text-sm">
            <li>Pike Road, AL</li>
            <li>info@boydwalston.com</li>
            <li>(555) 000-0000</li>
            <li>Mon–Fri 7am–5pm</li>
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800">
        <p className="text-gray-400 text-sm">
          © 2026 Boyd Walston Construction · Pike Road, AL
        </p>
      </div>

    </footer>
  )
}