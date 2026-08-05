import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Pre-Sales-Entwurf: Header ergänzt die robots-Metadata, damit auch
  // Nicht-HTML-Antworten (z. B. Bilder, JSON) nicht indexiert werden.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
