'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ResponsePromise from '@/components/ResponsePromise'

const labelClass = "block text-eyebrow-muted text-sm mb-2"
const inputClass = "w-full border border-[#E8E8E8] px-4 py-3 font-lato font-light text-sm text-[#111111] focus:border-[#111111] focus:outline-none"

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

      <section className="bg-[#111111] text-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-eyebrow text-sm mb-4">
            Get In Touch
          </p>
          <h1 className="text-display text-6xl md:text-7xl text-white mb-6">
            Contact Us
          </h1>
          <p className="font-lato font-thin text-lg text-[#9B9B9B] max-w-2xl leading-relaxed">
            Ready to start your project? We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          <div>
            <h2 className="text-display text-5xl text-[#111111] mb-8">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="border border-[#E8E8E8] p-8">
                <p className="text-display text-[#111111] mb-2">
                  Message Received
                </p>
                <p className="font-lato font-light text-sm text-[#9B9B9B]">
                  Thank you for reaching out. We will be in touch
                  within one business day.
                </p>
              </div>
            ) : (
              <>
              <ResponsePromise />
              <form onSubmit={handleSubmit} className="space-y-6">

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
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={inputClass}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="font-inter font-medium text-white text-sm py-4 w-full rounded-lg hover:bg-[#2C2C2C] transition-colors duration-300"
                >
                  Send Message
                </button>

              </form>
              </>
            )}
          </div>

          <div>
            <h2 className="text-display text-5xl text-[#111111] mb-8">
              Contact Information
            </h2>
            <ul className="space-y-6 list-none">
              <li>
                <p className="text-eyebrow-muted text-xs mb-1">Address</p>
                <p className="font-lato text-sm text-[#111111]">P.O. Box 640313</p>
                <p className="font-lato text-sm text-[#111111]">Pike Road, Alabama</p>
              </li>
              <li>
                <p className="text-eyebrow-muted text-xs mb-1">Phone</p>
                <a href="tel:3346093504" className="font-lato text-sm text-[#111111] hover:text-[#9B9B9B] transition-colors">
                  334-609-3504
                </a>
              </li>
              <li>
                <p className="text-eyebrow-muted text-xs mb-1">Email</p>
                <a href="mailto:Info@buildwithboyd.com" className="font-lato text-sm text-[#111111] hover:text-[#9B9B9B] transition-colors">
                  Info@buildwithboyd.com
                </a>
              </li>
              <li>
                <p className="text-eyebrow-muted text-xs mb-1">Hours</p>
                <p className="font-lato text-sm text-[#111111]">Monday – Friday</p>
                <p className="font-lato text-sm text-[#111111]">8:00 AM – 5:00 PM</p>
              </li>
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
