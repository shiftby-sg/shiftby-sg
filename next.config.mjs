/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/perspective",
        destination: "/insights",
        permanent: true
      },
      {
        source: "/contact",
        destination: "/discuss-a-concern",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
