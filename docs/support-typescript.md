# Typescript support

## Install typescript dev
```bash
yarn add typescript @types/node @types/react @types/react-dom
```

## Webpack support
```bash
yarn add --dev awesome-typescript-loader
```
then set webpack config
```js
const { CheckerPlugin } = require('awesome-typescript-loader')
module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: ['awesome-typescript-loader']
      }
    ],
  },
  plugins: [
      new CheckerPlugin()
  ]
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
}
```

## Module.hot 报错
> [resolve issue](https://github.com/webpack-contrib/webpack-hot-middleware/issues/89)
```bash
yarn add --dev @types/webpack-env
```