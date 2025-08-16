import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // This will ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
