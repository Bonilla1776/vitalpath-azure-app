/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out', // <-- this is critical
  trailingSlash: true,
};

module.exports = nextConfig;


