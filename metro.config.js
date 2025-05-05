const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  config.resolver = {
    ...config.resolver,
    extraNodeModules: {
      '@': `${__dirname}/src`,
      '@components': `${__dirname}/app/components`,
      '@screens': `${__dirname}/app/screens`,
      '@assets': `${__dirname}/assets`,
      '@tabs': `${__dirname}/app/tabs`,
      '@styles': `${__dirname}/app/styles`,
    },
  };

  return config;
})();