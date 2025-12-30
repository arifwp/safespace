import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    domains: ["picsum.photos"],
    qualities: [75, 85, 90, 100],
  },
};

export default nextConfig;
