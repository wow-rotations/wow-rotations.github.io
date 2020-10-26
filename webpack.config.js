var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "source-map" : null,
  entry: "./js/client.js",
  output: {
    path: __dirname + "/built/",
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js"
  },
  devServer: {
    historyApiFallback: true,
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      },
      {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader", options: {limit: 10000, mimetype: "application/font-woff"}},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader", options: {limit: 10000, mimetype: "application/octet-stream" }},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
      {test: /\.(jpe?g|png|gif)$/, loader: "file-loader" },
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader", options: {limit: 10000, mimetype: "image/svg+xml"}}
    ]
  },
  plugins: debug ? [
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery",
      "window.jQuery":"jquery"
    })
  ] : [
      new webpack.ProvidePlugin({
        "$": "jquery",
        "jQuery": "jquery",
        "window.jQuery":"jquery"
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new UglifyJSPlugin({ mangle: false, sourcemap: false}),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      })
    ],
    resolve: {
      alias: {
              jquery: path.join(__dirname, 'node_modules/jquery/src/jquery')
      },
    },
};
