module.exports = {
  entry: './src/bootstrap.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'stage-0',
            'react'
          ],
          plugins: []
        }
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader: 'elm-webpack'
      }
    ],
    noParse: /\.elm$/
  }
}
