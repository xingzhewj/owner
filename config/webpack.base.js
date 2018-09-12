/**
 * @file webpack基础脚本
 * @Author wangjie19
 * @Date 2018-09-11 17:22:03
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-09-12 12:11:16
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]-[hash:5].js',
        publicPath: '/',
        chunkFilename: '[name].[chunkhash:5].chunk.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.css', '.json'],
        alias: {}
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, '../src/'),
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname, '../index.html'),
                filename: path.resolve(__dirname, '../dist/index.html'),
                inject: 'body',
                favicon: path.resolve(__dirname, '../src/assets/favicon.ico')
            }
        )
    ]
};
