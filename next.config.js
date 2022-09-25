/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["localhost"],
  },

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },

  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/#projects",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
