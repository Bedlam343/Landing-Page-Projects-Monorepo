import { BASE_URL } from '@/utils/constants';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: BASE_URL,
  images: {
    domains: ['i.pravatar.cc'], // Add the specific hostname here
  },
};

export default nextConfig;
