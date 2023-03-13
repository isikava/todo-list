module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    browser: true,
  },
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: true,
      peerDependencies: true,
    },
  ],
};
