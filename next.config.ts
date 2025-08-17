import type { NextConfig } from "next";
import withPlaiceholder from "@plaiceholder/next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.myportfolio.com'
      },
            {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]
  }
};

export default withPlaiceholder(nextConfig);
