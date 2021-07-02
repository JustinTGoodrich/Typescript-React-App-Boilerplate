const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  mode:'production',
  watchOptions: {
    poll: 1000, 
  },
  stats:'summary',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000,
    historyApiFallback:true,
  },
  plugins: [
      new HtmlWebpackPlugin({
    template: path.resolve( __dirname, 'public/index.html' ),
  }),
  new CleanWebpackPlugin({
    cleanStaleWebpackAssets: false,

  })
],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
 

};