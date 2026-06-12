import Navbar from '@/components/Navbar'

export default function Projects() {
    return (
      <main className="min-h-screen bg-white">
        <Navbar companyName="Boyd Walston Construction" />
        <div className="max-w-6xl mx-auto px-8 py-24">
         <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Projects
         </h1>
         <p className="text-xl text-gray-600">
            Residential and commercial work across Pike Road, AL
         </p>
        </div>
      </main>
    )
}