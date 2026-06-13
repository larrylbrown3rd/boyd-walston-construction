'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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

      <section className="bg-gray-900 text-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">
            Free Consultation
          </p>
          <h1 className="text-5xl font-bold text-white mb-6">
            Get A Quote
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Tell us about your project and we will get back to you
            within one business day with a free estimate.
          </p>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-3xl mx-auto">

          {submitted ? (
            <div className="border border-gray-200 p-12 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Quote Request Received
              </h2>
              <p className="text-gray-600">
                Thank you for reaching out. We will review your project
                details and follow up within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest text-gray-600 uppercase mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest text-gray-600 uppercase mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest text-gray-600 uppercase mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest text-gray-600 uppercase mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
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
                  <label className="block text-xs tracking-widest text-gray-600 uppercase mb-2">
                    Estimated Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
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
                  <label className="block text-xs tracking-widest text-gray-600 uppercase mb-2">
                    Desired Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
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
                <label className="block text-xs tracking-widest text-gray-600 uppercase mb-2">
                  Project Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={6}
                  className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                  placeholder="Describe your project in as much detail as possible..."
                />
              </div>

              <button
                type="submit"
                className="bg-gray-900 text-white px-8 py-4 text-sm font-semibold hover:bg-gray-700 transition-colors w-full"
              >
                Submit Quote Request
              </button>

            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}