import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // build to static files in out/
  basePath: isProd ? "/nextbites" : "", // GitHub Pages serves under /<repo-name>
  images: { unoptimized: true },
  trailingSlash: true, // GitHub Pages likes trailing slashes
};

export default nextConfig;
