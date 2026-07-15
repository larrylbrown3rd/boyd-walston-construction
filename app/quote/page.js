import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JobberForm from '@/components/JobberForm'
import ResponsePromise from '@/components/ResponsePromise'
import RiskReversal from '@/components/RiskReversal'
import TrustStrip from '@/components/TrustStrip'

export default function Quote() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="relative overflow-hidden bg-[#111111] text-white py-24 px-8">
        <div className="absolute inset-0">
          <Image
            src="/aerial-construction.png"
            alt="Boyd Walston Construction project site"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
        </div>
        <div className="relative max-w-6xl mx-auto z-10">
          <p className="text-eyebrow text-sm mb-4">
            Free Consultation
          </p>
          <h1 className="text-display text-6xl md:text-7xl text-white mb-6">
            Get A Quote
          </h1>
          <p className="text-lead-dark">
            Tell us about your project and we will get back to you
            within 48 hours with a free estimate.
          </p>
        </div>
      </section>

      <TrustStrip />

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <ResponsePromise />
            <JobberForm />
          </div>
        </div>
      </section>

      <RiskReversal />
      <Footer />
    </main>
  )
}
