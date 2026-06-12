import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />
      <Hero />
      <div className="max-w-6xl mx-auto px-8 py-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Our Services
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          From custom homes to commercial build-outs
        </p>
        <div className="grid grid-cols-3 gap-6">
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
      <Footer />
    </main>
  )
}