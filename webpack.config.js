var path = require('path');

module.exports = {
  entry: './src/app.js',
  devServer: {
    writeToDisk: true,
    contentBase: path.join(__dirname, './'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   include: path.resolve(__dirname, 'src'),
      //   exclude: /(node_modules|bower_components|build)/,
      //   loader: 'babel-loader'
      // },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      }
    ]
  }
};