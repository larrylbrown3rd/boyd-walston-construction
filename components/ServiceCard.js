export default function ServiceCard({ title, description, visual: Visual }) {
  return (
    <div className="bg-white border border-[#E8E8E8] overflow-hidden hover:border-[#111111] hover:shadow-sm hover:-translate-y-1 transition-all duration-300">
      {Visual && (
        <Visual className="h-44 md:h-48 border-b border-[#E8E8E8]" />
      )}
      <div className="p-8 md:p-10">
        <h3 className="font-lato text-lg md:text-xl font-semibold text-[#111111] leading-snug mb-4">
          {title}
        </h3>
        <p className="font-lato text-base font-normal text-[#4A4A4A] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
