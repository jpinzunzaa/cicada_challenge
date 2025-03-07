import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, '../../packages/ui/src/styles')],
  },
  experimental: {},
}

export default nextConfig;
