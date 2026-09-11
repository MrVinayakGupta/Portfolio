/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { dev }) => {
    if (dev) {
      // Increase chunk load timeout to prevent timeout errors on slow compilation
      config.output.chunkLoadTimeout = 60000;
    }
    return config;
  },
};

export default nextConfig;

