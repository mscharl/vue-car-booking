const path              = require('path');
const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry      : ['./src/main.js', './src/scss/main.scss'],
    output     : {
        path      : path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename  : 'build.js',
    },
    module     : {
        rules: [
            {
                test: /\.css$/,
                use : ExtractTextPlugin.extract({
                    fallback: 'vue-style-loader',
                    use     : [
                        {
                            loader : 'css-loader',
                            options: { sourceMap: true },
                        }, {
                            loader : 'postcss-loader',
                            options: { sourceMap: true },
                        },
                    ],
                }),
            }, {
                test: /\.scss$/,
                use : ExtractTextPlugin.extract({
                    fallback: 'vue-style-loader',
                    use     : [
                        {
                            loader : 'css-loader',
                            options: { sourceMap: true },
                        }, {
                            loader : 'postcss-loader',
                            options: { sourceMap: true },
                        }, {
                            loader : 'sass-loader',
                            options: { sourceMap: true },
                        },
                    ],
                }),
            }, {
                test   : /\.vue$/,
                loader : 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        /*'scss': 'vue-style-loader!css-loader!sass-loader',*/ // NO STYLES IN VUE FILES
                        /*'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',*/ // NO STYLES IN VUE FILES
                    }, // other vue-loader options go here
                },
            }, {
                test   : /\.js$/,
                loader : 'babel-loader',
                exclude: /node_modules/,
            }, {
                test   : /\.ts$/,
                loaders: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/,
            }, {
                test   : /\.(png|jpg|gif|svg)$/,
                loader : 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                },
            },
        ],
    },
    resolve    : {
        alias     : {
            'vue$': 'vue/dist/vue.esm.js',
        },
        extensions: ['*', '.js', '.ts', '.vue', '.json'],
    },
    devServer  : {
        historyApiFallback: true,
        stats             : 'normal',
        progress          : true,
    },
    performance: {
        hints: false,
    },
    devtool    : '#eval-source-map',
    plugins    : [
        new ExtractTextPlugin('styles.css'),
    ],
};

if(process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
        }), new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress : {
                warnings: false,
            },
        }), new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
    ])
}
