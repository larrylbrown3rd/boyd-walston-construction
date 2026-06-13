import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Projects() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="bg-gray-900 text-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">
            Our Work
          </p>
          <h1 className="text-5xl font-bold text-white mb-6">
            Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Residential and commercial work across Pike Road
            and the surrounding Alabama communities.
          </p>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="border border-gray-200 hover:border-gray-900 transition-colors duration-300">
              <div className="bg-gray-100 h-48 w-full" />
              <div className="p-6">
                <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
                  Residential
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Custom Home Build
                </h3>
                <p className="text-gray-600 text-sm">
                  Pike Road, AL — 2024
                </p>
              </div>
            </div>

            <div className="border border-gray-200 hover:border-gray-900 transition-colors duration-300">
              <div className="bg-gray-100 h-48 w-full" />
              <div className="p-6">
                <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
                  Commercial
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Office Build-Out
                </h3>
                <p className="text-gray-600 text-sm">
                  Montgomery, AL — 2024
                </p>
              </div>
            </div>

            <div className="border border-gray-200 hover:border-gray-900 transition-colors duration-300">
              <div className="bg-gray-100 h-48 w-full" />
              <div className="p-6">
                <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
                  Renovation
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Full Home Renovation
                </h3>
                <p className="text-gray-600 text-sm">
                  Pike Road, AL — 2023
                </p>
              </div>
            </div>

            <div className="border border-gray-200 hover:border-gray-900 transition-colors duration-300">
              <div className="bg-gray-100 h-48 w-full" />
              <div className="p-6">
                <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
                  Commercial
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Warehouse Construction
                </h3>
                <p className="text-gray-600 text-sm">
                  Montgomery, AL — 2023
                </p>
              </div>
            </div>

            <div className="border border-gray-200 hover:border-gray-900 transition-colors duration-300">
              <div className="bg-gray-100 h-48 w-full" />
              <div className="p-6">
                <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
                  Residential
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Home Addition
                </h3>
                <p className="text-gray-600 text-sm">
                  Pike Road, AL — 2023
                </p>
              </div>
            </div>

            <div className="border border-gray-200 hover:border-gray-900 transition-colors duration-300">
              <div className="bg-gray-100 h-48 w-full" />
              <div className="p-6">
                <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
                  Commercial
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Restaurant Build-Out
                </h3>
                <p className="text-gray-600 text-sm">
                  Montgomery, AL — 2022
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-20 px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Project Today
          </h2>
          <p className="text-gray-400 mb-8">
            Contact us for a free consultation and quote.
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