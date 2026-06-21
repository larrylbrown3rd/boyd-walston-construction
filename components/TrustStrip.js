const items = [
  'Licensed & Insured',
  '200+ Projects Completed',
  '5.0 Client Rating',
  'Reply Within 48 Hours',
]

export default function TrustStrip() {
  return (
    <section className="bg-white border-b border-[#E8E8E8] py-5 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((item) => (
            <p
              key={item}
              className="font-barlow text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#4A4A4A]"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
