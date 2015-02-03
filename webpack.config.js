module.exports = {
  entry: './index.jsx',
  output: {
    filename: 'bundle.js',
    publicPath: 'http://dev.vm:8090/assets'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'jsx-loader?harmony'
      }
    ]
  },
  externals: {
    'react': 'React'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
