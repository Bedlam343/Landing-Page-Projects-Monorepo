import type { NextConfig } from 'next';
import { BASE_URL } from '@/utils/constants';

const nextConfig: NextConfig = {
  basePath: BASE_URL,
};

export default nextConfig;
