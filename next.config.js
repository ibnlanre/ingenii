// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/products",
        destination: "/products/point-of-sale",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
