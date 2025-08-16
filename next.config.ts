import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // This will ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'www.vyomanexgen.com',
      'intileo.com'
    ],
  },
};

export default nextConfig;
