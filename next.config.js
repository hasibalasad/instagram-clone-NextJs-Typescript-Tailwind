/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["upload.wikimedia.org", "1000logos.net", "cdn.pixabay.com"]
  }
}

module.exports = nextConfig
