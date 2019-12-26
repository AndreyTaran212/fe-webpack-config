const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = new HtmlWebpackPlugin(
  {
    template: './public/index.html',
    meta: {
      viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
    },
    title: 'Webpack App',
  }
);