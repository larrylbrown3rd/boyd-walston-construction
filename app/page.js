import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />
      <Hero />
      <section className="bg-[#F8F7F5] py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-4xl text-[#111111] mb-3">
            Our Services
          </h2>
          <div className="w-12 h-px bg-[#C4A882] mb-6" />
          <p className="font-inter text-[#9B9B9B] text-sm tracking-wide mb-16">
            From custom homes to commercial build-outs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              title="Residential Construction"
              description="Custom home builds and renovations tailored to your vision"
            />
            <ServiceCard
              title="Commercial Build-Out"
              description="Professional commercial spaces built on time and on budget."
            />
            <ServiceCard
              title="Construction Management"
              description="Full project oversight from planning through completion."
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
