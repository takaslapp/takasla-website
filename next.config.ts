import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  allowedDevOrigins: ["192.168.1.218", "localhost:3000", "0.0.0.0:3000"],
};

export default nextConfig;
