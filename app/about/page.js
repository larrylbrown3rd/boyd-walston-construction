'use client'

import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import SocialLinks from '@/components/SocialLinks'
import ConstructionIcon from '@/components/ConstructionIcon'

const BOYD_PROPERTY_SOLUTIONS_ARTICLE =
  'https://www.faulkner.edu/news/devoski-boyds-entrepreneurial-journey-inspired-by-legacy-and-driven-by-education/'

function BoydPropertySolutionsLink() {
  return (
    <a
      href={BOYD_PROPERTY_SOLUTIONS_ARTICLE}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-[#111111] underline underline-offset-2 decoration-[#111111] hover:text-brand-gold-dark hover:decoration-brand-gold-dark transition-colors cursor-pointer relative z-10"
    >
      Boyd&apos;s Property Solutions
    </a>
  )
}

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="bg-[#111111] text-white py-24 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/framing-crew.png"
            alt="Boyd Walston Construction framing crew"
            fill
            className="object-cover object-center opacity-40"
          />
        </div>
        <div className="relative max-w-6xl mx-auto z-10">
          <p className="text-eyebrow text-sm mb-4">About Us</p>
          <h1 className="text-display text-6xl md:text-7xl text-white mb-6">
            Company History
          </h1>
        </div>
      </section>

      <section className="py-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="space-y-6 text-body-muted mb-16">
              <p>
                At the beginning of 2026, Boyd Walston Construction was launched through the rebranding of{' '}
                <BoydPropertySolutionsLink />
                , marking the next chapter in a business that has grown steadily since its founding in 2018.
              </p>
              <p>
                While attending college, Devoski Boyd started <BoydPropertySolutionsLink /> as a pressure washing and pool cleaning business to earn extra income during his undergraduate years. What began as a side business quickly became something more. As he built relationships with customers, they began asking if he could help with additional projects around their homes and businesses. One opportunity led to another, and those &ldquo;odd jobs&rdquo; gradually evolved into repairs, remodeling, renovations, additions, commercial build-outs, construction management, and owner representation.
              </p>
              <p>
                The decision to rebrand as Boyd Walston Construction reflects not only the company&apos;s growth but also its long-term vision. It honors Devoski&apos;s family&apos;s construction heritage, paying tribute to his great-grandfather, who founded Walston &amp; Son&apos;s Plumbing Company in Black Creek, North Carolina, in 1960. Today, Boyd Walston Construction proudly carries that legacy forward while serving homeowners, businesses, developers, and communities throughout Alabama.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <span className="accent-bar mb-4" />
            <p className="text-eyebrow-dark text-sm mb-4">Leadership</p>
            <h2 className="text-display text-4xl md:text-5xl text-[#111111] mb-8">
              Devoski Boyd
            </h2>

            <div className="space-y-6 text-body-muted">
              <p>
                As President, Devoski leads the company with a commitment to craftsmanship, integrity, and excellence. His experience spans residential renovations, additions, commercial construction, construction management, and real estate development, allowing him to guide projects from the earliest planning stages through completion.
              </p>
              <p>
                Devoski earned a Bachelor of Science in Political Science from Alabama State University and an Executive MBA from Faulkner University. Before leading Boyd Walston Construction full-time, he built a career in government affairs and economic development, experiences that continue to shape his approach to construction by emphasizing collaboration, strategic planning, and long-term community impact.
              </p>
              <p>
                Beyond his work in construction, Devoski remains actively engaged in civic and community leadership. He serves on multiple nonprofit boards and currently serves as a board chairman. He also serves on the Industrial Development Board for the City of Montgomery, where he works alongside fellow leaders to help support economic growth, business investment, and job creation throughout the region.
              </p>
              <p>
                Devoski believes construction is about more than completing projects—it&apos;s about earning trust, creating opportunities, and building spaces where families can make memories, businesses can grow, and communities can thrive. Every project is an opportunity to leave a lasting impact and continue a legacy of service built on integrity, relationships, and quality workmanship.
              </p>
            </div>

            <p className="text-display text-2xl md:text-3xl text-[#111111] mt-12 pt-8 border-t border-[#E8E8E8]">
              When the foundation matters, Build with Boyd
            </p>

            <a
              href="https://www.linkedin.com/in/dboyd5620"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-inter text-sm text-[#111111] border-b border-[#111111] pb-1 hover:text-brand-gold-dark hover:border-brand-gold-dark transition-colors mt-8"
            >
              Connect on LinkedIn
              <ConstructionIcon name="link" className="w-4 h-4" />
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
