import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Takasla - Parayla Değil, Takasla",
    short_name: "Takasla",
    description:
      "Kullanmadığın eşyaları ilana koy, aradığın ürünleri keşfet ve yeni bir şey satın almadan güvenle takas yap.",
    start_url: "/",
    // "browser": site, Android Chrome'da "uygulama olarak yükle" önerisi çıkarmaz (PWA kurulumu kapalı).
    // Gerçek uygulama yerine site kısayolu yüklenmesin diye bilerek böyle bırakıldı.
    display: "browser",
    prefer_related_applications: true,
    related_applications: [{ platform: "play", id: "com.takaslapp.app" }, { platform: "itunes", url: "https://apps.apple.com/tr/app/takasla-yeni-nesil-takas/id6812309534" }],
    background_color: "#FAF9F5",
    theme_color: "#151716",
    icons: [
      {
        src: "/images/takasla-icon.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/images/takasla-icon.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
