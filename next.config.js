const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");

const nextConfig = {
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  }
};

module.exports = withPlugins([withSass], nextConfig);
