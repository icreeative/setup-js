var ExtractTextPlugin  = require("extract-text-webpack-plugin");
var CopyPlugin = require('copy-webpack-plugin');

let config = {
    entry: [
        './src/index.js',
        './src/style.scss',
        './index.html'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract([
                    'css-loader',
                    'sass-loader'
                ]),
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin({
            filename: 'style.css'
        }),
        new CopyPlugin([
            {
                from: 'src/img',
                to: 'img'
            }
        ])
    ]
}

module.exports = config;
