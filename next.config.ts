import type { NextConfig } from "next";

// GitHub Pages static export is opt-in: EXPORT=1 npm run build
// (used by .github/workflows/deploy-pages.yml only).
// Local dev and normal builds are unaffected.
const exportForPages = process.env.EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = exportForPages
  ? {
      output: "export",
      trailingSlash: true,
      ...(basePath ? { basePath } : {}),
      // Plain <img> rendering; required for static export hosting.
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;