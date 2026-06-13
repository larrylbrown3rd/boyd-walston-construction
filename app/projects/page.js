import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const projects = [
  { category: 'Residential', title: 'Custom Home Build', location: 'Pike Road, AL — 2024' },
  { category: 'Commercial', title: 'Office Build-Out', location: 'Montgomery, AL — 2024' },
  { category: 'Renovation', title: 'Full Home Renovation', location: 'Pike Road, AL — 2023' },
  { category: 'Commercial', title: 'Warehouse Construction', location: 'Montgomery, AL — 2023' },
  { category: 'Residential', title: 'Home Addition', location: 'Pike Road, AL — 2023' },
  { category: 'Commercial', title: 'Restaurant Build-Out', location: 'Montgomery, AL — 2022' },
]

export default function Projects() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar companyName="Boyd Walston Construction" />

      <section className="bg-[#111111] text-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="font-inter text-xs tracking-[0.25em] uppercase text-[#C4A882] mb-4">
            Our Work
          </p>
          <h1 className="font-playfair text-5xl font-bold text-white mb-6">
            Projects
          </h1>
          <p className="font-inter text-[#9B9B9B] text-lg max-w-2xl">
            Residential and commercial work across Pike Road
            and the surrounding Alabama communities.
          </p>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white border border-[#E8E8E8] hover:border-[#111111] hover:-translate-y-1 hover:shadow-sm transition-all duration-300"
              >
                <div className="bg-[#F0EFED] h-48 w-full" />
                <div className="p-6">
                  <p className="font-inter text-xs tracking-[0.2em] uppercase text-[#C4A882] mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-playfair text-lg text-[#111111] mb-2">
                    {project.title}
                  </h3>
                  <p className="font-inter text-sm text-[#9B9B9B]">
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] text-white py-20 px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl text-white mb-4">
            Start Your Project Today
          </h2>
          <p className="font-inter text-[#9B9B9B] mb-8">
            Contact us for a free consultation and quote.
          </p>
          <a
            href="/quote"
            className="inline-block bg-[#C4A882] text-[#111111] font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#B8966E] transition-colors"
          >
            Get A Free Quote
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
