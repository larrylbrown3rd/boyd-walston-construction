import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="bg-gray-900 text-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">
            About Us
          </p>
          <h1 className="text-5xl font-bold text-white mb-6">
            Built on Trust.<br />Driven by Quality.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Boyd Walston Construction has been serving Pike Road
            and the surrounding Alabama communities with quality
            residential and commercial construction.
          </p>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded with a commitment to quality craftsmanship
              and honest work, Boyd Walston Construction has grown
              into one of the most trusted names in Pike Road, AL.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We specialize in residential construction, commercial
              build-outs, and full construction management services.
              Every project is handled with the same care and
              attention to detail — no matter the size.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When you work with Boyd Walston Construction you get
              a team that shows up, communicates clearly, and
              delivers results you can be proud of.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="border border-gray-200 p-8 text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">10+</p>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
            <div className="border border-gray-200 p-8 text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">200+</p>
              <p className="text-gray-600 text-sm">Projects Completed</p>
            </div>
            <div className="border border-gray-200 p-8 text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">100%</p>
              <p className="text-gray-600 text-sm">Client Satisfaction</p>
            </div>
            <div className="border border-gray-200 p-8 text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">AL</p>
              <p className="text-gray-600 text-sm">Licensed & Insured</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}