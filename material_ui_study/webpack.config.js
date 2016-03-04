var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './index.js'
        ]
    },
    output: {
        path: __dirname + '/build/',
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders:[
          {
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel'],
          },
        ]
    },
    plugins: [
        // new uglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
        ]
}
