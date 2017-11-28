const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: './src',
    output: { path: __dirname + '/build', filename: 'bundle.js' },
    module: {
        loaders: [{
            test: [ /\.jsx$/, /\.js$/, /\.es6$/ ],
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: [ 'react', 'es2015' ]
            },
        }]
    },
    resolve: {
        extensions: [ '.js', '.es6', '.jsx' ]
    },
};