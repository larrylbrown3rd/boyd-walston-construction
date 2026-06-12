'use client'
import { useState } from 'react'

export default function Navbar({ companyName }) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">

        <a href="/" className="text-gray-900 font-semibold text-lg tracking-wide">
        {companyName}
        </a>

        <ul className="flex items-center gap-8 list-none">
          <li><a href="/services" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Services</a></li>
          <li><a href="/projects" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Projects</a></li>
          <li><a href="/about" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">About</a></li>
          <li><a href="/contact" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <a href="/quote" className="bg-gray-900 text-white text-sm px-6 py-2 hover:bg-gray-700 transition-colors">
          Get A Quote
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-900 text-2xl"
        >
          {isOpen ? 'x' :  "="}
        </button>
      </div>
      </nav>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 pb-2 list-none">
          <li><a href="/services" className="text-gray-600 text-sm">Services</a></li>
          <li><a href="/projects" className="text-gray-600 text-sm">Projects</a></li>
          <li><a href="/about" className="text-gray-600 text-sm">About</a></li>
          <li><a href="/contact" className="text-gray-600 text-sm">Contact</a></li>
          <li><a href="/quote" className="text-gray-900 text-sm font-semibold">Get A Quote</a></li>
        </ul>
      )}
  </header>
  )
}