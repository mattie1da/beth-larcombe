/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["www.oliverpetcare.com", "www.portseattle.org"],
  },
};

module.exports = nextConfig;
