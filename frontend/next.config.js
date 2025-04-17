/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // required for static hosting on Azure
};

module.exports = nextConfig;



