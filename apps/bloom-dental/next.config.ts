import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/bloom-dental',
  trailingSlash: true,
  images: {
    domains: ['placehold.co', 'images.unsplash.com'], // Add the specific hostname here
  },
};

export default nextConfig;
