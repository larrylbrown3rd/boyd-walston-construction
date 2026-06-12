import Navbar from '@/components/Navbar'

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
        <Navbar companyName="Boyd Walston Construction" />
        <div className="max-w-6xl mx-auto px-8 py-24">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Contact
            </h1>
            <p className="text-xl text-gray-600">
                Get in touch with Boyd Walston Construction today.
            </p>
        </div>
    </main>
  )
}