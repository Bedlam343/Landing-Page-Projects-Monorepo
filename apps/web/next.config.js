const BASE_URL = process.env.BASE_URL || 'http://localhost:3002';

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/bloom-dental',
        destination: `${BASE_URL}/bloom-dental`,
      },
      {
        source: '/bloom-dental/:path*',
        destination: `${BASE_URL}/bloom-dental/:path*`,
      },
    ];
  },
};

export default nextConfig;
