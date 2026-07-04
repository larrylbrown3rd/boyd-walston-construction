/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/quote',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
