import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="bg-gray-900 text-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">
            What We Do
          </p>
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            From custom homes to commercial build-outs — we handle
            every phase of construction with precision and care.
          </p>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="border border-gray-200 p-10 hover:border-gray-900 transition-colors duration-300">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Residential Construction
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Custom home builds designed around your vision and
              budget. From foundation to finish we handle every
              detail of your new home construction.
            </p>
            <ul className="text-gray-600 text-sm space-y-2 list-none">
              <li>— Custom home builds</li>
              <li>— Home additions</li>
              <li>— Full renovations</li>
              <li>— Kitchen and bath remodels</li>
            </ul>
          </div>

          <div className="border border-gray-200 p-10 hover:border-gray-900 transition-colors duration-300">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Commercial Build-Out
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Professional commercial spaces built on time and on
              budget. We work with business owners to deliver
              functional and impressive commercial environments.
            </p>
            <ul className="text-gray-600 text-sm space-y-2 list-none">
              <li>— Office build-outs</li>
              <li>— Retail spaces</li>
              <li>— Warehouse construction</li>
              <li>— Restaurant build-outs</li>
            </ul>
          </div>

          <div className="border border-gray-200 p-10 hover:border-gray-900 transition-colors duration-300">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Construction Management
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Full project oversight from planning through
              completion. We coordinate subcontractors, manage
              timelines, and keep your project on budget.
            </p>
            <ul className="text-gray-600 text-sm space-y-2 list-none">
              <li>— Project planning</li>
              <li>— Subcontractor coordination</li>
              <li>— Budget management</li>
              <li>— Timeline oversight</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="bg-gray-900 text-white py-20 px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-400 mb-8">
            Contact us today for a free consultation and quote.
          </p>
          <a href="/quote" className="bg-white text-gray-900 px-8 py-4 font-semibold text-sm hover:bg-gray-100 transition-colors">
            Get A Free Quote
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}