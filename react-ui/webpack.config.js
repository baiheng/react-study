var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './src/app.js'
        ]
    },
    output: {
        path: __dirname + '/build/',
        filename: 'bundle.js',
        publicPath: '/build/',
        chunkFilename: '[id].chunk.js',
    },
    module: {
        loaders:[
          {
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel'],
          },
          // {
          //   test: require.resolve('jquery'), 
          //   loader: 'expose?jQuery'
          // },
        ]
    },
    plugins: [
        // new uglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery"
        // }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
        ]
}
