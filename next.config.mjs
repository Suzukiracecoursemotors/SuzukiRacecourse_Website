import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
  },
  async redirects() {
    return [
      {
        source: "/ceni",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/contacts",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/disinfection",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
