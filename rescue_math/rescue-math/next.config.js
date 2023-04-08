/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'static/videos', // or any other directory you prefer
          publicPath: '/_next/static/videos', // make sure this matches the above outputPath
          name: '[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
};
  
