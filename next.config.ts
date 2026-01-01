import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    return config;
  },
  
  transpilePackages: ["three"],
};

export default nextConfig;