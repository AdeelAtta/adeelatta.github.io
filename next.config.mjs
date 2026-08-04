/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 🔥 REQUIRED for GitHub Pages

  images: {
    unoptimized: true, // 🔥 REQUIRED (remotePatterns won't work in static export)
  },
}

export default nextConfig
