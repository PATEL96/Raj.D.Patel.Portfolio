/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['upload.wikimedia.org', 'cdn.animixplay.to', 'static.wikia.nocookie.net'],
  }
}