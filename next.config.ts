import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pages/Login', // This must match your actual URL path
        permanent: true, 
      },
    ];
  },
};

export default nextConfig;