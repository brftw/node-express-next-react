
const path = require("path");

module.exports = {
  staticPageGenerationTimeout: 600,
  useFileSystemPublicRoutes: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "scss")],
    prependData: `@import "scss/mixins/media_queries.scss", "scss/variables/variables.scss" ;`,
  },
  env:{
    KEY: "value",
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },{
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload;',
          }
        ],
      },
    ]
  },
};