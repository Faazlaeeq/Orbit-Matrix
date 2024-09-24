/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(pdf|mp4|webm|ogg|mp3|wav|flac|aac)$/,
      type: "asset/resource",
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/media/',
          outputPath: 'static/media/',
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
};

export default nextConfig;