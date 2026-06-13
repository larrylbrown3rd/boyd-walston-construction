export default function Hero() {
  return (
    <section className="bg-[#111111] text-white py-32 px-8">
      <div className="max-w-6xl mx-auto">

        <p className="font-inter text-xs tracking-[0.25em] uppercase text-[#C4A882] mb-6">
          Pike Road, Alabama
        </p>

        <h1 className="font-playfair text-6xl md:text-7xl font-bold text-white leading-tight mb-8">
          Building What<br />
          Matters Most
        </h1>

        <p className="font-inter font-light text-lg text-[#9B9B9B] max-w-xl mb-12">
          Quality residential and commercial construction
          delivered on time and built to last.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/quote"
            className="bg-[#C4A882] text-[#111111] font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#B8966E] transition-colors"
          >
            Get A Quote
          </a>
          <a
            href="/projects"
            className="border border-white text-white font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-white hover:text-[#111111] transition-colors"
          >
            View Projects
          </a>
        </div>

      </div>
    </section>
  )
}
