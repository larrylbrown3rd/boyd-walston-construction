'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const ParticleTunnel = dynamic(
  () => import('@/components/ParticleTunnel'),
  { ssr: false }
)

const steps = [
  {
    id: 1,
    question: 'What type of project are you planning?',
    field: 'projectType',
    options: [
      { label: 'Residential Renovation', value: 'renovation' },
      { label: 'Commercial Build-Out', value: 'commercial' },
      { label: 'Addition', value: 'addition' },
      { label: 'Concrete / Site Work', value: 'concrete' },
      { label: 'Other', value: 'other' },
    ],
  },
  {
    id: 2,
    question: 'What is your estimated budget?',
    field: 'budget',
    options: [
      { label: 'Under $50,000', value: 'under-50k' },
      { label: '$50,000 – $150,000', value: '50k-150k' },
      { label: '$150,000 – $300,000', value: '150k-300k' },
      { label: '$300,000 – $500,000', value: '300k-500k' },
      { label: 'Over $500,000', value: 'over-500k' },
    ],
  },
  {
    id: 3,
    question: 'When are you looking to start?',
    field: 'timeline',
    options: [
      { label: 'Immediately', value: 'immediate' },
      { label: 'Within 1–3 months', value: '1-3-months' },
      { label: 'Within 3–6 months', value: '3-6-months' },
      { label: 'Within 6–12 months', value: '6-12-months' },
      { label: 'Just exploring', value: 'exploring' },
    ],
  },
  {
    id: 4,
    question: 'Where is your project located?',
    field: 'location',
    type: 'text',
    placeholder: 'City, State',
  },
  {
    id: 5,
    question: 'How can we reach you?',
    field: 'contact',
    type: 'contact',
  },
]

export default function Estimate() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [contact, setContact] = useState({
    name: '', email: '', phone: '',
  })

  const step = steps[currentStep]
  const progress = (currentStep / steps.length) * 100

  function handleOption(value) {
    setAnswers({ ...answers, [step.field]: value })
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  function handleSubmit() {
    if (contact.name && contact.email) {
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
          <p className="text-eyebrow text-sm mb-4">
            Free Estimate
          </p>
          <h1 className="text-display text-6xl md:text-7xl text-white mb-6">
            Get Your Estimate
          </h1>
          <p className="font-lato font-thin text-lg text-[#9B9B9B] max-w-2xl leading-relaxed">
            Answer 5 quick questions and we will send you
            a ballpark estimate within one business day.
          </p>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-2xl mx-auto">

          {submitted ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-[#F8F7F5] rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-2xl">✓</span>
              </div>
              <h2 className="text-display text-5xl text-[#111111] mb-4">
                We Got Your Request
              </h2>
              <p className="font-lato font-light text-base text-[#9B9B9B] leading-relaxed">
                Thank you {contact.name}. We will review
                your project details and send a ballpark
                estimate within one business day.
              </p>
            </div>
          ) : (
            <>
              {/* Progress bar */}
              <div className="mb-12">
                <div className="flex justify-between font-lato font-light text-xs text-[#9B9B9B] mb-3">
                  <span>Step {currentStep + 1} of {steps.length}</span>
                  <span>{Math.round(progress)}% complete</span>
                </div>
                <div className="w-full h-px bg-[#E8E8E8]">
                  <div
                    className="h-px bg-[#111111] transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <h2 className="text-display text-5xl text-[#111111] mb-10">
                {step.question}
              </h2>

              {/* Options */}
              {step.options && (
                <div className="space-y-3">
                  {step.options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleOption(option.value)}
                      className="w-full text-left border border-[#E8E8E8] px-6 py-4 font-inter text-sm text-[#111111] rounded-lg hover:border-[#111111] hover:bg-[#F8F7F5] transition-all duration-200 flex items-center justify-between"
                    >
                      {option.label}
                      <span className="text-[#9B9B9B]">→</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Text input step */}
              {step.type === 'text' && (
                <div>
                  <input
                    type="text"
                    placeholder={step.placeholder}
                    className="w-full border border-[#E8E8E8] px-4 py-4 font-lato font-light text-sm text-[#111111] focus:border-[#111111] focus:outline-none mb-6"
                    onChange={(e) => setAnswers({
                      ...answers,
                      [step.field]: e.target.value,
                    })}
                  />
                  <button
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="bg-[#111111] text-white font-inter text-sm px-7 py-3.5 rounded-lg hover:bg-[#2C2C2C] transition-colors"
                  >
                    Continue →
                  </button>
                </div>
              )}

              {/* Contact step */}
              {step.type === 'contact' && (
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full border border-[#E8E8E8] px-4 py-4 font-lato font-light text-sm text-[#111111] focus:border-[#111111] focus:outline-none"
                    onChange={(e) => setContact({
                      ...contact, name: e.target.value,
                    })}
                  />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full border border-[#E8E8E8] px-4 py-4 font-lato font-light text-sm text-[#111111] focus:border-[#111111] focus:outline-none"
                    onChange={(e) => setContact({
                      ...contact, email: e.target.value,
                    })}
                  />
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full border border-[#E8E8E8] px-4 py-4 font-lato font-light text-sm text-[#111111] focus:border-[#111111] focus:outline-none"
                    onChange={(e) => setContact({
                      ...contact, phone: e.target.value,
                    })}
                  />
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#111111] text-white font-inter text-sm py-3.5 rounded-lg hover:bg-[#2C2C2C] transition-colors"
                  >
                    Send My Estimate Request
                  </button>
                </div>
              )}

              {/* Back button */}
              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="mt-8 font-inter text-xs text-[#9B9B9B] hover:text-[#111111] transition-colors"
                >
                  ← Back
                </button>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
