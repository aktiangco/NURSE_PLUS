const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.js"),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss']
  },
  output: {
    path:path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, 'src'),
            exclude: /node_modules/,
            use: ['babel-loader'],

        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
      },
      {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
      },
      {
          test: /\.(png|jpe?g|gif|woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
          }
      }
      ]
      
      },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
}