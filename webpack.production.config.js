const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // context:path.resolve(__dirname,'1231231') 这里是配合entry入口文件的相对文件地址
    // devtool: 'eval-source-map', // 开发环境下 调试代码时使用,
    entry: __dirname + '/app/main', //入口文件地址 ,可以有多个导入文件,用于多页面应用
    // 如果 entery: './app/main.js'  那么就会加上context设置的相对路径前缀
    /*
        多个页面使用方法
        entry:{
            pageOne: './src/pageOne',
            pageTwo: './src/pageTwo'
        }
    */
    target: 'web', //不同的环境进行打包
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[hash].js',
        chunkFilename: '[name].[chunkhash:8].js'
        //  publicPath:"http://www.cdn.com/" 在知道最终url的情况下，可以直接使用，补全引入文件的路径
        // 可以在入口文件设置 __webpack_public_path = myPath
    },
    // 这里的名称可以使用hash 对于分离出来的chunk，可以有不同的名称，避免缓存
    mode: 'production',
    //  这里的mode可以设置打包配置的环境可以再package中设置
    // development 开发环境  production 生产环境 node默认
    // 
    devServer: {
        contentBase: './build',//本地服务器所加载的页面所在目录
        historyApiFallback: true,//不跳转
        inline: true, //实时刷新
        hot:true
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                venders: {
                    test: /node_modules/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
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
                test: /(\.js|\.jsx|\.tsx|\.ts)$/,
                use: [{
                    loader: "babel-loader",
                }, /*{
                    loader: 'eslint-loader',

                }*/],
                enforce: 'pre',
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(eot|ttf|svg|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        esModule: false, // 新版本中esModule默认为true，会导致文件的地址变为[object Module],因此这里设置为false
                        name: '[name]_[hash].[ext]', // 输出的文件名为[原名称]_[哈希值].[原后缀]
                        outputPath: 'fonts/',       // 文件存储路径（output.path + 值）（物理路径, 存储路径）
                        // 负责输出目录, 即打包后的写在磁盘的位置
                        publicPath: 'dist/fonts/',   // 输出解析文件的目录，url 相对于 HTML 页面（index.html所在文件夹的绝对路径 + 值）（文件引用路径就是看这个）
                        //                             // 如果output设置了publicPath， options也设置了publicPath，优先以options的publicPath为主
                        //                             // 是对页面引入资源的补充,比如img标签引入或者css引入等.
                        //                             // 千万不能设错，应该观察文件和HTML页面的存储地址位置，进行设置，否则引用时地址会错误，找不到文件
                        // 一般只设置output的publicPath，方便统一管理
                        limit: 1024                 // 限制当文件小于1KB的时候，就将文件转为base64存储于js中，以减少http请求次数，当文件大于1KB，则打包文件到指定目录，避免js过大
                    }
                }
            },
            {
                // 这里是对一个文件进行了多个处理,
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                },  "css-loader"]

            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/],

                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
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
                            sassOptions: {
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
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        /*alias: {   用来配置一些全局路径设置
           '@': path.join('src'),
           '@assets': path.join('src/assets'),
           '@static': path.join('static')
       }*/
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html", //html 模板
            filename: __dirname + "/build/index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new webpack.optimize.OccurrenceOrderPlugin(),  // 
        new MiniCssExtractPlugin({
            filename: '[hash:8].css',
            chunkFilename: '[id].css'
        }),// 分离css webpack4.0 版本进行的css文件分离
        // new BundleAnalyzerPlugin(),
        new CleanWebpackPlugin() // 删除output的文件
    ],
}