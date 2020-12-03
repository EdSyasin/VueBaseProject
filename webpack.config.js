const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: __dirname + "/app/index.ts",
    devtool: 'source-map',
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        chunkFilename: "[id].js",
        publicPath: "/"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html",
            inject: 'body'
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({filename: 'style.css'})
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        ts: 'ts-loader'
                    },
                    esModule: true
                }
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: [/node_modules/],
                options: {
                    configFile: 'tsconfig.json',
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: [
                    /node_modules/
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
            // {
            //     test: /\.(scss|css)$/,
            //     use: ['vue-style-loader',  'css-loader', "sass-loader", MiniCssExtractPlugin.loader]
            // }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            "@": __dirname + "/app"
        }
    },
    devServer: {
        contentBase: './public',
        port: 7700
    }
}