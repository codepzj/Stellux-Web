import type { NextConfig } from 'next'
import path from 'path'

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      '@': path.resolve(__dirname, 'src'),
    },
    resolveExtensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: '**',
      },
    ],
  },
}

export default withBundleAnalyzer(nextConfig)
