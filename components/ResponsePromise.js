export default function ResponsePromise() {
  return (
    <div className="flex items-center gap-3 bg-[#F8F7F5] border border-[#E8E8E8] px-6 py-4 mb-8">
      <div className="w-8 h-8 rounded-full bg-[#111111] flex items-center justify-center flex-shrink-0">
        <span className="text-white text-xs">⚡</span>
      </div>
      <div>
        <p className="font-inter font-semibold text-sm text-[#111111]">
          We respond within 2 hours
        </p>
        <p className="font-inter text-xs text-[#9B9B9B]">
          Monday – Friday · 7am – 5pm ·
          After hours responses by 8am next day
        </p>
      </div>
    </div>
  )
}
