module.exports = {
  entry: './static/app.jsx',

  output: {
    path: __dirname + '/bundle',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'jsx-loader?harmony' }
    ]
  }
};
