const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/pages/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ]
  },
  images: {
    domains: [
      'i.imgur.com',
      'cdn-icons-png.flaticon.com',
      "cdn.hashnode.com",
    ],
  },
  

  swcMinify: true,
};

module.exports = withContentlayer(nextConfig);
