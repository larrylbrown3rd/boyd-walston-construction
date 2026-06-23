'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import SocialLinks from '@/components/SocialLinks'

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="bg-[#111111] text-white py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-eyebrow text-sm mb-4">About Us</p>
          <h1 className="text-display text-6xl md:text-7xl text-white mb-6">
            Company History
          </h1>
        </div>
      </section>

      <section className="py-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="font-lato font-light text-base text-[#4A4A4A] leading-relaxed mb-6">
              Boyd Walston Construction is a family-owned construction company founded in 2025, built on a legacy of craftsmanship that began generations ago. In 1960, our great-grandfather, Elsie Walston, started his plumbing company in Black Creek, North Carolina — laying the foundation for skilled trades, hard work, and pride in quality workmanship.
            </p>
            <p className="font-lato font-light text-base text-[#4A4A4A] leading-relaxed mb-6">
              Today, we continue building on that legacy three generations later, expanding from plumbing into full-service construction to serve homeowners, businesses, and communities across central Alabama.
            </p>
            <p className="font-lato font-light text-base text-[#4A4A4A] leading-relaxed mb-16">
              From renovations and additions to tenant build-outs, our team is committed to craftsmanship, transparency, and delivering projects the right way. We take pride in providing quality service while consistently striving to exceed customer expectations.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <span className="accent-bar mb-4" />
            <p className="text-eyebrow-dark text-sm mb-4">Leadership</p>
            <h2 className="text-display text-4xl md:text-5xl text-[#111111] mb-6">
              Boyd Walston
            </h2>
            <p className="font-lato font-light text-base text-[#4A4A4A] leading-relaxed mb-6">
              Boyd Walston leads Boyd Walston Construction with a hands-on approach rooted in three generations of trade experience. From residential remodels to commercial build-outs and civil site work, Boyd is committed to honest communication, quality craftsmanship, and delivering every project on time.
            </p>
            <a
              href="https://www.linkedin.com/in/dboyd5620"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-inter text-sm text-[#111111] border-b border-[#111111] pb-1 hover:text-brand-gold-dark hover:border-brand-gold-dark transition-colors"
            >
              Connect on LinkedIn
              <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-16 pt-12 border-t border-[#E8E8E8]">
              <p className="text-eyebrow-dark text-sm mb-4">Follow Us</p>
              <SocialLinks />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
