/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  // Enable static exports for better performance
  output: 'export',
  // Disable server components when exporting
  experimental: {
    appDir: true,
  },
}
