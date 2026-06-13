'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="bg-gray-900 text-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">
            Get In Touch
          </p>
          <h1 className="text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Ready to start your project? We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="border border-gray-200 p-8">
                <p className="text-gray-900 font-semibold mb-2">
                  Message Received
                </p>
                <p className="text-gray-600 text-sm">
                  Thank you for reaching out. We will be in touch
                  within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

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
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="bg-gray-900 text-white px-8 py-4 text-sm font-semibold hover:bg-gray-700 transition-colors w-full"
                >
                  Send Message
                </button>

              </form>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </h2>
            <ul className="space-y-6 list-none">
              <li>
                <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">Location</p>
                <p className="text-gray-900">Pike Road, Alabama</p>
              </li>
              <li>
                <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">Phone</p>
                <p className="text-gray-900">(555) 000-0000</p>
              </li>
              <li>
                <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">Email</p>
                <p className="text-gray-900">info@boydwalston.com</p>
              </li>
              <li>
                <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">Hours</p>
                <p className="text-gray-900">Monday – Friday · 7am – 5pm</p>
              </li>
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}