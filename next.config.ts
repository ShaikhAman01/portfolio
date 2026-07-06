import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  // Ensure the OG-image fonts are bundled into the serverless function on Vercel
  outputFileTracingIncludes: {
    "/projects/[slug]/opengraph-image": ["./assets/fonts/*"]
  }
};

export default nextConfig;
