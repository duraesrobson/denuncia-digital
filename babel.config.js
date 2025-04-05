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
            '@': './app/src',
            '@components': './app/src/components',
            '@screens': './app/src/screens',
            '@assets': './assets',
            '@routes': './app/src/routes',
            '@pages': './/app/src/pages'
          },
        },
      ],
    ],
  };
}; 