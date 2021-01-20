// You can add other webpack configuration (plugins, loaders, etc).
// Apart from ES6 Import/Export, Gulp was able to do all my other work so this file is mainly empty.

const entry = require('./entry');

module.exports = {
    entry,
    mode: 'production',
    devtool: false,
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules\//,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    useBuiltIns: 'usage',
                                    corejs: 3,
                                    modules: false
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    }
};
