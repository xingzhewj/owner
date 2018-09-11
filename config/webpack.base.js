/**
 * @file webpack基础脚本
 * @Author wangjie19
 * @Date 2018-09-11 17:22:03
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-09-11 18:06:31
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]-[hash:5].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: []
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname, '../index.html'),
                filename: path.resolve(__dirname, '../dist/index.html'),
                inject: 'body'
            }
        )
    ]
};
