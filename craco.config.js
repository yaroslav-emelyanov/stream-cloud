const CracoAlias = require('craco-alias');

const isTest = process.env.NODE_ENV === 'test';

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
  babel: {
    plugins: isTest ? ['effector/babel-plugin'] : [],
  },
};
