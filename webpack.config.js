const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
module.exports = {
    devtool: 'eval-source-map',
    entry:  __dirname + '/app/main.jsx', //入口文件地址
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './build',//本地服务器所加载的页面所在目录
        historyApiFallback: true,//不跳转
        inline: true //实时刷新
    },
    //    "@babel/core": "^7.1.0",
    //  "@babel/preset-env": "^7.1.0",
    //  "@babel/preset-react": "^7.0.0",
    //  "babel-loader": "^8.0.2",
    // 这里需要转换的babel es6 bable-core babel -preset-env支持es6babel  react 用来支持jsx
    // babel就是将一些原本浏览器不支持的文件，转换为浏览器支持的js或者css
    // 这里就是正则，
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            },
            {
                // 这里是对一个文件进行了多个处理,
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader',
                        options:{
                            minmize:true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
               	exclude: [/node_modules/],
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "typings-for-css-modules-loader", // 在ts文件中，生成.d.ts导出类型 同时进行css module 化
                        options: {                                // 不过好像对css-loader的版本有问题，目前看起来支持1.0.0
                            modules: true,
                            namedExport: true,
                            camelCase: true,
                            localIdentName: "[name]_[hash:base64:5]"
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sassOptions:{
                                outputStyle: 'expanded', 
                                sourceMap: true
                            }
                           
                        } // 处理sass文件
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: 'postcss.config.js'  // 这个得在项目根目录创建此文件
                            }
                        }
                    }	// 自动添加css3前缀，post css同时可以合并相同css规则，达到压缩文件
                ]
            }
            // loader 是针对某个单一文件，比如jsx文件，Plugins是整个构建过程都会生效
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html", //html 模板
            filename:__dirname + "/build/index.html", 
            hash:true
        }),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
}