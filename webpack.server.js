const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // Inform webpack that we are building a bundle for node js and not the browser.
    target: 'node',

    // Tell webpack the entry point of our server application
    entry: './src/index.js',

    // Tell webpack where to place the bundle
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },

    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
