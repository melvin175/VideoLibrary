/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  presets: ["next/babel"],
  images: {
    domains: ["localhost", "media.graphassets.com"], // <== Domain name
  },
};

module.exports = nextConfig;
