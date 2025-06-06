module.exports = {
  reactStrictMode: true,
  images: { domains: ['localhost'] },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};
