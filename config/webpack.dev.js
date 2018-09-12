/**
 * @file webpack开发环境
 * @Author wangjie19
 * @Date 2018-09-11 17:33:45
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-09-11 17:47:37
 */

const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackBase = require('./webpack.base');

module.exports = webpackMerge(
    webpackBase,
    {
        mode: 'development',
        devServer: {
            inline: true,
            contentBase: path.join(__dirname, '../dist'),
            port: 8081,
            host: '0.0.0.0',
            publicPath: '/',
            // 开启gzip压缩
            compress: true,
            open: true,
            allowedHosts: [
                'test.baidu.com'
            ],
            historyApiFallback: true
        }
    }
);
