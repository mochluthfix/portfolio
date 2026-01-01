
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  experimental: {
    turbopack: false,
  },

  
  webpack(config) {
    
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
    });

    return config;
  },

  
  transpilePackages: [
    "three",
    "@react-three/fiber",
    "@react-three/drei",
    "postprocessing",
  ],
};

export default nextConfig;