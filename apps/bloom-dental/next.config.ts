import type { NextConfig } from 'next';
import { BASE_URL } from '@/utils/constants';

const nextConfig: NextConfig = {
  basePath: BASE_URL,
  images: {
    domains: ['placehold.co', 'images.unsplash.com'], // Add the specific hostname here
  },
};

export default nextConfig;
