'use client'

import { useState } from 'react'

export default function Navbar({ companyName }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false)

  const linkClass =
    'font-barlow font-semibold text-base text-[#9B9B9B] hover:text-[#111111] transition-colors duration-300'

  const projectsLinkClass =
    'font-barlow font-semibold text-base text-[#9B9B9B] hover:text-[#111111] transition-colors duration-300 flex items-center gap-1'

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const projectLinks = [
    { href: '/projects/residential', label: 'Residential' },
    { href: '/projects/commercial', label: 'Commercial' },
    { href: '/projects/government', label: 'Government' },
  ]

  const dropdownLinkClass =
    'block px-5 py-3 font-barlow font-semibold text-sm text-[#9B9B9B] hover:text-[#111111] hover:bg-[#F8F7F5] transition-colors border-b border-[#E8E8E8] last:border-b-0'

  const quoteButtonClass =
    'font-inter font-medium text-sm bg-[#111111] text-white px-6 py-2.5 rounded-lg hover:bg-[#2C2C2C] transition-colors duration-300'

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E8E8E8] px-6 md:px-10 py-4">
      <nav className="max-w-6xl mx-auto grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-4">
        <a
          href="/"
          className="text-display text-xl tracking-wider text-[#111111] justify-self-start"
        >
          {companyName}
        </a>

        <ul className="hidden md:flex items-center justify-center gap-8 list-none">
          <li>
            <a href="/" className={linkClass}>
              Home
            </a>
          </li>
          <li>
            <a href="/services" className={linkClass}>
              Services
            </a>
          </li>
          <li className="relative group list-none">
            <a href="/projects" className={projectsLinkClass}>
              Projects
              <span className="text-xs">▾</span>
            </a>

            <div className="absolute top-full left-0 pt-2 w-48 z-50 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-200">
              <div className="bg-white border border-[#E8E8E8] shadow-md">
                {projectLinks.map((link) => (
                  <a key={link.label} href={link.href} className={dropdownLinkClass}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </li>
          {navLinks.slice(2).map((link) => (
            <li key={link.href}>
              <a href={link.href} className={linkClass}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-4 justify-self-end">
          <a
            href="/quote"
            className={`hidden md:inline-block ${quoteButtonClass}`}
          >
            Get A Quote
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden font-barlow font-semibold text-[#111111] text-2xl leading-none"
            aria-label="Toggle menu"
          >
            {isOpen ? '×' : '≡'}
          </button>
        </div>
      </nav>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 pt-6 pb-2 list-none max-w-6xl mx-auto">
          <li>
            <a href="/" className={linkClass}>
              Home
            </a>
          </li>
          <li>
            <a href="/services" className={linkClass}>
              Services
            </a>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
              className={`${projectsLinkClass} bg-transparent border-0 cursor-pointer p-0`}
            >
              Projects
              <span className="text-xs">
                {mobileProjectsOpen ? '▴' : '▾'}
              </span>
            </button>
            {mobileProjectsOpen && (
              <ul className="mt-3 ml-4 flex flex-col gap-3 list-none">
                {projectLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={dropdownLinkClass}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {navLinks.slice(2).map((link) => (
            <li key={link.href}>
              <a href={link.href} className={linkClass}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="/quote" className={`inline-block ${quoteButtonClass}`}>
              Get A Quote
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
