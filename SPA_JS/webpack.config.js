const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [{
            test: /\.m?js/,
            exclude: /node_module/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.css/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
        }), new MiniCssExtractPlugin({
            filename: './assets/styles/[name].css'
        })
    ]
}