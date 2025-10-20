import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includeParths: [".src/styles"]
  }
};

export default nextConfig;
