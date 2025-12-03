import type { NextConfig } from 'next';

const BASE_PATH = '/bloom-dental';

const nextConfig: NextConfig = {
  basePath: BASE_PATH,
  trailingSlash: true,
  images: {
    domains: ['placehold.co', 'images.unsplash.com'], // Add the specific hostname here
  },
};

export default nextConfig;
