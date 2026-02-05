
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' }
    ],
  },
  // Ensure the App Router is prioritized
  experimental: {
    // any experimental features can go here
  }
};

module.exports = nextConfig;
