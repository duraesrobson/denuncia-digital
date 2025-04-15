module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './app',
            '@components': './app/components',
            '@screens': './app/screens',
            '@assets': './assets',
            '@tabs': './app/tabs',
            '@styles': './app/styles',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};