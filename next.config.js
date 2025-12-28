/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable type checking during production builds
    ignoreBuildErrors: true,
  },
  // Netlify handles the output, so we don't need static export
  // output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig



