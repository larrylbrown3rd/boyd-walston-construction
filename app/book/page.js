import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JobberForm from '@/components/JobberForm'
import ResponsePromise from '@/components/ResponsePromise'

export default function Book() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="relative overflow-hidden bg-[#111111] text-white py-24 px-8">
        <div className="absolute inset-0">
          <Image
            src="/frame-construction.jpg"
            alt="Boyd Walston Construction"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
        </div>
        <div className="relative max-w-6xl mx-auto z-10">
          <p className="text-eyebrow text-sm mb-4">
            Schedule A Walkthrough
          </p>
          <h1 className="text-display text-6xl md:text-7xl text-white mb-6">
            Book A Site Visit
          </h1>
          <p className="text-lead-dark">
            Ready to move forward? Request a free walkthrough and we will
            come to your site with a detailed quote.
          </p>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto mb-16">
            <ResponsePromise />
            <JobberForm />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-display text-6xl md:text-7xl text-[#111111] mb-3">01</p>
              <h3 className="text-display text-2xl md:text-3xl text-[#111111] mb-2">
                Submit Your Request
              </h3>
              <p className="font-lato font-light text-sm text-[#9B9B9B]">
                Share your project details and preferred timing
                through our request form.
              </p>
            </div>
            <div className="text-center">
              <p className="text-display text-6xl md:text-7xl text-[#111111] mb-3">02</p>
              <h3 className="text-display text-2xl md:text-3xl text-[#111111] mb-2">
                We Come To You
              </h3>
              <p className="font-lato font-light text-sm text-[#9B9B9B]">
                Our team visits your site for a
                free consultation and assessment.
              </p>
            </div>
            <div className="text-center">
              <p className="text-display text-6xl md:text-7xl text-[#111111] mb-3">03</p>
              <h3 className="text-display text-2xl md:text-3xl text-[#111111] mb-2">
                Get Your Quote
              </h3>
              <p className="font-lato font-light text-sm text-[#9B9B9B]">
                Receive a detailed project quote
                within 48 hours of your walkthrough.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
