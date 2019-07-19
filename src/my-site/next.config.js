const { join } = require('path');

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack: (config, options) => {

      config.module.rules[0].include.push(join(__dirname, 'node_modules', 'my-components'));
      // config.module.rules[1].exclude = /((?!(node_modules\/my-components)).)*/;

      console.log(join(__dirname, 'node_modules', 'my-components'));

      return config;
    },
  });
};