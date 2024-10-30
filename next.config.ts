import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Ensures the app exports static HTML (for static hosting like GitHub Pages)
  images: {
    domains: ['images.unsplash.com'], // Allow images from specific domains
    unoptimized: true, // Disable image optimization if hosting statically (e.g., GitHub Pages)
  },
  basePath: '/jansenaccountants', // Set the base path to match your GitHub Pages repo name
  assetPrefix: '/jansenaccountants/', // Ensure assets are served correctly with GitHub Pages
};

export default nextConfig;
