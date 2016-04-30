var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var version = "1";

module.exports = {
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './src/index.js'
        ]
    },
    output: {
        path: __dirname + '/build/',
        filename: version + '.bundle.js',
        publicPath: '/build/',
        chunkFilename: '[id].[hash].chunk.js',
    },
    module: {
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                // include: [/./, /src/],
                loaders: ['react-hot', 'babel'],
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
            }
        ]
    },
    resolve: {
        modulesDirectories: ["web_loaders", "web_modules", "node_loaders", "node_modules", ""],
        extensions: ["", ".webpack-loader.js", ".web-loader.js", ".loader.js", ".js", ".jsx"],
    },
    plugins: [
        // new uglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // new HtmlWebpackPlugin({
        //     filename: "index.html",
        //     template: "./index.html",
        //     version: version,
        //     inject: false,
        // })
        ]
}
