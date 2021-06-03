module.exports = {
  root: true,
  extends: '@react-native-community',
  settings: {
    'import/resolver': {
      alias: [
        ['@assets', './src/assets'],
        ['@components', './src/components'],
        ['@screens', './src/screens'],
        ['@routes', './src/routes'],
        ['@storage', './src/storage'],
      ],
    },
  },
};
