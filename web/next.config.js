
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' }
    ],
  },
  // Ensure the build doesn't fail due to legacy root files
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
