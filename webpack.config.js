const path = require( 'path' );
const plugins = require( './webpack.config/plugins' );

const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve( __dirname, 'build' ),
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.s[ca]ss/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: [{ loader: 'file-loader' }]
      },
    ]
  }

};

module.exports = (env, argv) => {

  switch (argv.mode) {
    case 'development':

      return config;
    case 'production':

      return config;
    default:
      return config;
  }

};
