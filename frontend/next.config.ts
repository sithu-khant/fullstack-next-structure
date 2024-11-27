import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/subscriptions',
        permanent: true, // use `false` for a temporary redirect
      },
    ]
  },
}

export default nextConfig;
