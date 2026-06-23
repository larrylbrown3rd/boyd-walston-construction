export default function SocialLinks({ className = '' }) {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <a
        href="https://www.instagram.com/buildwithboyd/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-inter text-sm text-[#111111] border border-[#E8E8E8] px-5 py-2.5 rounded-lg hover:border-brand-gold hover:text-brand-gold-dark transition-colors"
      >
        Instagram
      </a>
      <a
        href="https://www.facebook.com/Buildwithboyd/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-inter text-sm text-[#111111] border border-[#E8E8E8] px-5 py-2.5 rounded-lg hover:border-brand-gold hover:text-brand-gold-dark transition-colors"
      >
        Facebook
      </a>
    </div>
  )
}
