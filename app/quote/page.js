'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TrustBadges from '@/components/TrustBadges'
import ResponsePromise from '@/components/ResponsePromise'

const ParticleTunnel = dynamic(
  () => import('@/components/ParticleTunnel'),
  { ssr: false }
)

const labelClass = "block font-inter text-xs tracking-[0.2em] uppercase text-[#9B9B9B] mb-2"
const inputClass = "w-full border border-[#E8E8E8] px-4 py-3 font-inter text-sm text-[#111111] focus:border-[#111111] focus:outline-none"

export default function Quote() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
  })

  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (formData.name && formData.email && formData.projectType) {
      setSubmitted(true)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="relative overflow-hidden bg-[#111111] text-white py-24 px-8">
        <ParticleTunnel />
        <div className="absolute inset-0 bg-[#111111]/70" style={{ zIndex: 1 }} />
        <div className="relative max-w-6xl mx-auto" style={{ zIndex: 2 }}>
          <p className="font-inter text-xs tracking-[0.25em] uppercase text-[#C4A882] mb-4">
            Free Consultation
          </p>
          <h1 className="font-bebas text-6xl md:text-7xl text-white leading-none mb-6">
            Get A Quote
          </h1>
          <p className="font-inter text-[#9B9B9B] text-lg max-w-2xl">
            Tell us about your project and we will get back to you
            within one business day with a free estimate.
          </p>
        </div>
      </section>

      <TrustBadges />

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto">

          {submitted ? (
            <div className="border border-[#E8E8E8] p-12 text-center">
              <h2 className="font-bebas text-5xl text-[#111111] mb-4">
                Quote Request Received
              </h2>
              <p className="font-inter text-[#9B9B9B]">
                Thank you for reaching out. We will review your project
                details and follow up within one business day.
              </p>
            </div>
          ) : (
            <>
            <ResponsePromise />
            <form onSubmit={handleSubmit} className="space-y-8">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a project type</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Build-Out</option>
                    <option value="renovation">Home Renovation</option>
                    <option value="management">Construction Management</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>
                    Estimated Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a budget range</option>
                    <option value="under-50k">Under $50,000</option>
                    <option value="50k-100k">$50,000 – $100,000</option>
                    <option value="100k-250k">$100,000 – $250,000</option>
                    <option value="250k-500k">$250,000 – $500,000</option>
                    <option value="over-500k">Over $500,000</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>
                    Desired Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a timeline</option>
                    <option value="asap">As soon as possible</option>
                    <option value="1-3months">1 – 3 months</option>
                    <option value="3-6months">3 – 6 months</option>
                    <option value="6-12months">6 – 12 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass}>
                  Project Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={6}
                  className={inputClass}
                  placeholder="Describe your project in as much detail as possible..."
                />
              </div>

              <button
                type="submit"
                className="bg-[#111111] text-white font-inter font-medium text-sm py-4 w-full rounded-full hover:bg-[#2C2C2C] transition-colors duration-300"
              >
                Submit Quote Request
              </button>

            </form>
            </>
          )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
