export default function ServiceCard({ title, description }) {
  return (
    <div className="bg-white border border-[#E8E8E8] p-10 hover:border-[#111111] hover:shadow-sm hover:-translate-y-1 transition-all duration-300">
      <h3 className="font-playfair text-xl text-[#111111] mb-4">
        {title}
      </h3>
      <p className="font-inter text-sm text-[#9B9B9B] leading-relaxed">
        {description}
      </p>
    </div>
  )
}
