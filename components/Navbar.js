'use client'
import { useState } from 'react'

export default function Navbar({ companyName }) {

  const [isOpen, setIsOpen] = useState(false)

  const linkClass = "font-inter font-medium text-xs tracking-[0.15em] uppercase text-[#9B9B9B] hover:text-[#111111] transition-colors duration-300"

  return (
    <header className="bg-white border-b border-[#E8E8E8] px-8 py-4">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">

        <a href="/" className="font-playfair font-bold text-[#111111] text-lg">
          {companyName}
        </a>

        <ul className="hidden md:flex items-center gap-8 list-none">
          <li><a href="/services" className={linkClass}>Services</a></li>
          <li><a href="/projects" className={linkClass}>Projects</a></li>
          <li><a href="/about" className={linkClass}>About</a></li>
          <li><a href="/contact" className={linkClass}>Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="/quote"
            className="bg-[#111111] text-white font-inter text-xs tracking-[0.15em] uppercase px-6 py-2.5 hover:bg-[#2C2C2C] transition-colors"
          >
            Get A Quote
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden font-inter text-[#111111] text-2xl"
            aria-label="Toggle menu"
          >
            {isOpen ? '×' : '≡'}
          </button>
        </div>
      </nav>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 pt-4 pb-2 list-none max-w-6xl mx-auto">
          <li><a href="/services" className={linkClass}>Services</a></li>
          <li><a href="/projects" className={linkClass}>Projects</a></li>
          <li><a href="/about" className={linkClass}>About</a></li>
          <li><a href="/contact" className={linkClass}>Contact</a></li>
          <li>
            <a
              href="/quote"
              className="inline-block bg-[#111111] text-white font-inter text-xs tracking-[0.15em] uppercase px-6 py-2.5 hover:bg-[#2C2C2C] transition-colors"
            >
              Get A Quote
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
