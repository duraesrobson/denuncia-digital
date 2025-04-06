const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg', 'mjs'],
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