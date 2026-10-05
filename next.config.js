module.exports = {
  reactStrictMode: true,

  // Server-rendered feeds read MDX files at request time; make sure they ship with the deployment
  outputFileTracingIncludes: {
    '/sitemap.xml': ['./src/content/blog/**/*'],
    '/blog/rss.xml': ['./src/content/blog/**/*'],
  },

  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
};
