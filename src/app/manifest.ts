import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Wixtory Apps & Games Studio",
    short_name: "Wixtory Apps",
    description:
      "Official flagship mobile applications and game ecosystem portal by Wixtory.",
    start_url: "/",
    display: "standalone",
    background_color: "#080c18",
    theme_color: "#10b981",
    icons: [
      {
        src: "/general/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/general/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}

