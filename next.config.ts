import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  allowedDevOrigins: ["192.168.1.218", "localhost:3000", "0.0.0.0:3000"],
  async redirects() {
    return [
      { source: "/kvkk", destination: "/kvkk-aydinlatma-metni", permanent: true },
      { source: "/terms", destination: "/kullanim-kosullari", permanent: true },
      { source: "/kullanim-sartlari", destination: "/kullanim-kosullari", permanent: true },
      { source: "/privacy", destination: "/gizlilik-politikasi", permanent: true },
      { source: "/topluluk", destination: "/topluluk-kurallari", permanent: true },
      { source: "/veri-silme", destination: "/hesap-ve-veri-silme", permanent: true },
      { source: "/hesap-silme", destination: "/hesap-ve-veri-silme", permanent: true },
    ];
  },
};

export default nextConfig;
