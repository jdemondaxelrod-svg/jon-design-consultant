import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "jondemondaxelrodstudio.com" }],
        destination: "https://www.jondemondaxelrodstudio.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
