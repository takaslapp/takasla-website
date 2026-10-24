import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  compress: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  allowedDevOrigins: ["192.168.1.218", "localhost:3000", "0.0.0.0:3000"],
  async redirects() {
    return [
      // WWW -> non-WWW permanent redirect (HTTP 308)
      // Excludes /.well-known to keep Apple Universal Links (apple-app-site-association) working without redirect
      {
        source: "/:path((?!\\.well-known).*)",
        has: [
          {
            type: "host",
            value: "www.takaslapp.com",
          },
        ],
        destination: "https://takaslapp.com/:path",
        permanent: true,
      },
      { source: "/app", destination: "/indir", permanent: false },
      { source: "/ios", destination: "/indir", permanent: false },
      { source: "/download", destination: "/indir", permanent: false },
      { source: "/yukle", destination: "/indir", permanent: false },
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
