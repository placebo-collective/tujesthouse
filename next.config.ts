import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  output: 'export',
  // No basePath needed when using custom domain (tujesthouse.pl)
  // basePath is only for username.github.io/repository-name URLs
  outputFileTracingRoot: path.join(__dirname),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
