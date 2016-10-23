var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');


new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    proxy: {  
            '/lhb/*': {  
            	changeOrigin: true,
                target: 'http://gp.xiaoshutech.com/',  
                secure: false  
            }  
        }  
}).listen(3000, function (err, result) {
if (err) console.log(err);
    console.log('Listening at localhost:3000');
});