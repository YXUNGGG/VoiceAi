const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/app/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    historyApiFallback: true,
    hot: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      "process": require.resolve("process/browser")
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Тест для TypeScript файлов
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,  // Добавляем поддержку для CSS файлов
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }, {
        test: /\.(jpg|png|gif|woff2|ttf|svg)/,
        use: {
          loader: 'url-loader', // this need file-loader
          options: {
          limit: 50000
          }
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон для HTML
    }),
    new Dotenv(),
  ]
}