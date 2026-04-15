const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' }
    ],
  },

  typescript: {
    ignoreBuildErrors: false,
  },


    outputFileTracingRoot: path.join(__dirname, '../'),   // Points to your root folder (calculatorhub-sa)

}

module.exports = nextConfig