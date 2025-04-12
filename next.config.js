/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  transpilePackages: ["framer-motion"],
  experimental: {
    serverComponentsExternalPackages: ["framer-motion"],
  },
};

module.exports = nextConfig;
