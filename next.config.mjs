/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/where-shiftby-helps",
        destination: "/capabilities",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
