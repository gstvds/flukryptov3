module.exports = function (api) {
  api.cache(true);
  
  return {
    plugins: [
      'babel-plugin-styled-components',
      [
        'babel-plugin-root-import',
        {
          rootPathSuffix: 'src',
        },
      ],
    ],
    presets: ['module:metro-react-native-babel-preset'],
  };
};