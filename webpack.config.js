const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.txt$/i,
        use: 'raw-loader',
      },
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: ['awesome-typescript-loader']
      },
    ],
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CheckerPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
