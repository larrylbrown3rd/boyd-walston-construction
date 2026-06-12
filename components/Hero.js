export default function Hero() {
  return (
    <section className="bg-gray-900 text-white py-32 px-8">
      <div className="max-w-6xl mx-auto">

        <p className="text-sm tracking-widest text-gray-400 uppercase mb-6">
          Pike Road, Alabama
        </p>

        <h1 className="text-6xl font-bold text-white leading-tight mb-6">
          Building What<br />
          Matters Most
        </h1>

        <p className="text-xl text-gray-400 max-w-xl mb-10">
          Quality residential and commercial construction
          delivered on time and built to last.
        </p>

        <div className="flex gap-4">
          <a href="/quote" className="bg-white text-gray-900 px-8 py-4 font-semibold text-sm hover:bg-gray-100 transition-colors">
            Get A Quote
          </a>
          <a href="/projects" className="border border-white text-white px-8 py-4 font-semibold text-sm hover:bg-white hover:text-gray-900 transition-colors">
            View Projects
          </a>
        </div>

      </div>
    </section>
  )
}