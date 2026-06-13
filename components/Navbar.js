'use client'
import { useState } from 'react'

export default function Navbar({ companyName }) {

  const [isOpen, setIsOpen] = useState(false)

  const linkClass = "font-inter font-medium text-xs tracking-[0.15em] uppercase text-[#9B9B9B] hover:text-[#111111] transition-colors duration-300"

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="bg-white border-b border-[#E8E8E8] px-10 py-5">
        <nav className="max-w-6xl mx-auto grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-4">

          <a href="/" className="font-playfair font-bold text-[#111111] text-lg justify-self-start">
            {companyName}
          </a>

          <ul className="hidden md:flex items-center justify-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-4 justify-self-end">
            <a
              href="/quote"
              className="hidden md:inline-block bg-[#111111] text-white rounded-full px-6 py-2.5 font-inter text-sm hover:bg-[#2C2C2C] transition-colors"
            >
              Get A Quote
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden font-inter text-[#111111] text-2xl leading-none"
              aria-label="Toggle menu"
            >
              {isOpen ? '×' : '≡'}
            </button>
          </div>
        </nav>

        {isOpen && (
          <ul className="md:hidden flex flex-col gap-4 pt-6 pb-2 list-none max-w-6xl mx-auto">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>{link.label}</a>
              </li>
            ))}
            <li>
              <a
                href="/quote"
                className="inline-block bg-[#111111] text-white rounded-full px-6 py-2.5 font-inter text-sm hover:bg-[#2C2C2C] transition-colors"
              >
                Get A Quote
              </a>
            </li>
          </ul>
        )}
    </header>
  )
}
