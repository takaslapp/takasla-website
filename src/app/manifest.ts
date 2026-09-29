import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Takasla - Parayla Değil, Takasla",
    short_name: "Takasla",
    description:
      "Kullanmadığın eşyaları ilana koy, aradığın ürünleri keşfet ve yeni bir şey satın almadan güvenle takas yap.",
    start_url: "/",
    display: "standalone",
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
