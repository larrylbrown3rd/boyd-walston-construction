import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Book() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="bg-[#111111] text-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-eyebrow text-sm mb-4">
            Schedule A Walkthrough
          </p>
          <h1 className="text-display text-6xl md:text-7xl text-white mb-6">
            Book A Site Visit
          </h1>
          <p className="text-lead-dark">
            Ready to move forward? Book a free walkthrough
            directly onto our calendar. We will come to
            your site and give you a detailed quote.
          </p>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto">

          {/* Calendly embed placeholder */}
          <div className="border border-[#E8E8E8] p-16 text-center mb-16">
            <p className="text-eyebrow text-sm mb-4">
              Live Calendar
            </p>
            <h2 className="text-display text-5xl text-[#111111] mb-4">
              Booking Widget Coming Soon
            </h2>
            <p className="font-lato font-light text-sm text-[#9B9B9B] mb-8 max-w-md mx-auto">
              We are setting up our scheduling system.
              In the meantime please call or email us
              directly to schedule your walkthrough.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5550000000"
                className="font-inter text-sm text-white px-7 py-3.5 rounded-lg hover:bg-[#2C2C2C] transition-colors"
              >
                Call Us Now
              </a>
              <a
                href="/quote"
                className="border border-[#111111] text-[#111111] font-inter text-sm px-7 py-3.5 rounded-lg hover:bg-[#111111] hover:text-white transition-colors"
              >
                Send A Message
              </a>
            </div>
          </div>

          {/* What to expect */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-display text-6xl md:text-7xl text-[#111111] mb-3">01</p>
              <h3 className="text-display text-2xl md:text-3xl text-[#111111] mb-2">
                Book Your Slot
              </h3>
              <p className="font-lato font-light text-sm text-[#9B9B9B]">
                Pick a time that works for you from
                our available slots.
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
