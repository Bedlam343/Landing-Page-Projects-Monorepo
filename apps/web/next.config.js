const BLOOM_BASE_URL = process.env.BLOOM_BASE_URL || 'http://localhost:3002';
const FLOWPULSE_BASE_URL =
  process.env.FLOWPULSE_BASE_URL || 'http://localhost:3003';

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/bloom-dental',
        destination: `${BLOOM_BASE_URL}/bloom-dental`,
      },
      {
        source: '/bloom-dental/:path*',
        destination: `${BLOOM_BASE_URL}/bloom-dental/:path*`,
      },
      {
        source: '/flowpulse-ai',
        destination: `${FLOWPULSE_BASE_URL}/flowpulse-ai`,
      },
      {
        source: '/flowpulse-ai/:path*',
        destination: `${FLOWPULSE_BASE_URL}/flowpulse-ai/:path*`,
      },
    ];
  },
};

export default nextConfig;
