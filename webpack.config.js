const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-floating-window-plugin.js',
    library: {
      name: 'ReactFloatingWindowPlugin',
      type: 'umd',
    },
    globalObject: 'this',
  },
  externals: {
    // 这些依赖将不会被打包进插件，而是在宿主项目中寻找
    react: 'react',
    'react-dom': 'react-dom'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
};