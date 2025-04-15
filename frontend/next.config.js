/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // ← THIS FIXES IT
  },
};

module.exports = nextConfig;


