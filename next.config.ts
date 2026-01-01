import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@appletosolutions/reactbits'],
  experimental: {
    optimizePackageImports: ['@appletosolutions/reactbits'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;
