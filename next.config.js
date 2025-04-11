/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 300,
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true, // Disable image optimization
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/images/',
            outputPath: 'static/images/',
            name: '[name].[ext]',
          },
        },
      ],
    });
    return config;
  },
  // Disable image optimization during development
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

module.exports = nextConfig 