'use client'

import { useState } from 'react'

export default function Navbar({ companyName }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false)

  const linkClass =
    'font-inter text-xs tracking-[0.15em] uppercase text-[#9B9B9B] hover:text-[#111111] transition-colors duration-300'

  const projectsLinkClass =
    'font-inter text-xs tracking-[0.15em] uppercase text-[#9B9B9B] hover:text-[#111111] transition-colors duration-300 flex items-center gap-1'

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const projectLinks = [
    { href: '/projects', label: 'All Projects' },
    { href: '/projects/residential', label: 'Residential' },
    { href: '/projects/commercial', label: 'Commercial' },
  ]

  const dropdownLinkClass =
    'block px-5 py-3 font-inter text-xs tracking-[0.15em] uppercase text-[#9B9B9B] hover:text-[#111111] hover:bg-[#F8F7F5] transition-colors border-b border-[#E8E8E8] last:border-b-0'

  const quoteButtonClass =
    'font-inter font-medium text-xs tracking-wide bg-[#111111] text-white px-6 py-2.5 rounded-full hover:bg-[#2C2C2C] transition-colors'

  return (
    <header className="bg-white border-b border-[#E8E8E8] px-10 py-5">
      <nav className="max-w-6xl mx-auto grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-4">
        <a
          href="/"
          className="font-bebas text-xl tracking-wider text-[#111111] justify-self-start"
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
          <li className="relative group">
            <a href="/projects" className={projectsLinkClass}>
              Projects
              <span className="text-xs">▾</span>
            </a>

            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-[#E8E8E8] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {projectLinks.map((link) => (
                <a key={link.href} href={link.href} className={dropdownLinkClass}>
                  {link.label}
                </a>
              ))}
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
            className="md:hidden font-inter text-[#111111] text-2xl leading-none"
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
                  <li key={link.href}>
                    <a href={link.href} className={linkClass}>
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
