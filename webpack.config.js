require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'client');


module.exports = {
  entry: {
    path: `${APP_DIR}/App.jsx`
  },
  output: {
    path: path.resolve(__dirname, 'client/public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        include: APP_DIR,
        exclude: '/node_modules/',
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    moduleExtensions: [
      'node_modules',
      path.resolve(__dirname, 'src/scripts'),
      path.resolve(__dirname, 'src')
    ]
  }
};
