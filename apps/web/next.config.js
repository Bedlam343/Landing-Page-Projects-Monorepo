const BLOOM_BASE_URL = process.env.BLOOM_BASE_URL || 'http://localhost:3002';
const FLOWPULSE_BASE_URL =
  process.env.FLOWPULSE_BASE_URL || 'http://localhost:3003';
const CAMPUS_BAZAAR_BASE_URL =
  process.env.CAMPUS_BAZAAR_BASE_URL || 'http://localhost:3004';

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
      {
        source: '/campus-bazaar',
        destination: `${CAMPUS_BAZAAR_BASE_URL}/campus-bazaar`,
      },
      {
        source: '/campus-bazaar/:path*',
        destination: `${CAMPUS_BAZAAR_BASE_URL}/campus-bazaar/:path*`,
      },
    ];
  },
};

export default nextConfig;
