/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  presets: ["next/babel"],
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
};
