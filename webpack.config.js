const fs = require('fs')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const resolve = require('path').resolve

function getEntries(path, isForJsFiles) {
  return fs
    .readdirSync(path)
    .filter(file => file.match(isForJsFiles ? /.*\.js$/ : /.*\.css$/))
    .map(file => {
      return {
        name: file.substring(0, file.length - 3),
        path: path + file,
      }
    })
    .reduce((memo, file) => {
      memo[file.name] = file.path
      return memo
    }, {})
}

const jsConfig = {
  rules: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },
  ],
}

const cssConfig = {
  rules: [
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader?minimize=true',
      }),
    },
  ],
  plugins: [
    new ExtractTextPlugin('[name]css'), // css file will override generated js file
  ],
}

function createBuildConfig(path, isForJsFiles) {
  const config = isForJsFiles ? jsConfig : cssConfig
  return {
    mode: 'production',
    entry: getEntries(path, isForJsFiles),
    output: {
      path: resolve(path),
      filename: '[name]' + (isForJsFiles ? '.js' : 'css'),
    },
    module: {
      rules: config.rules,
    },
    plugins: config.plugins,
  }
}

module.exports = [
  createBuildConfig('./app/', true),
  createBuildConfig('./app/scripts/', true),
  createBuildConfig('./app/'),
  createBuildConfig('./app/styles/'),
]
