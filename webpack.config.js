const path = require('path');

module.exports = {
    mode: 'development',
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        libraryTarget: 'umd',
        globalObject: 'this',
        library: 'resource'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            }
        ]
    },
    node: {
        fs: 'empty'
    }
};