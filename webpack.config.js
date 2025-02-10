const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/App/index.tsx',
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
    extensions: ['.tsx', '.ts', '.js'], // Поддержка расширений для импорта
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
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон для HTML
    }),
  ]
}