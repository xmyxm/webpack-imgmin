// webpackruntime.js
// 执行命令 webpack --config ./webpackdemo/webpackruntime.config.js

const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//webpack插件，用于清除目录文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const packageFilePath = path.join(__dirname, '../dist');
const DEV_MODE = "development"

module.exports = {
    mode: "development",
    entry: {
        index: ['./src/page/index.js'],
        detail: ['./src/page/detail.js'],
        home: ['./src/page/home.js'],
        list: ['./src/page/list.js']
    },
    output: {
        path: packageFilePath,
        filename: 'js/[name].js'
    },
    mode: DEV_MODE, //'production',
    cache: true,
    devtool: "source-map",
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        },
        runtimeChunk: {
            // manifest文件用来引导所有模块的交互。manifest文件包含了加载和处理模块的逻辑。
            // 当webpack编译器处理和映射应用代码时，它把模块的详细的信息都记录到了manifest文件中。当模块被打包并运输到浏览器上时，
            name: 'manifest'
        },
        nodeEnv: 'production' // 取代webpack3使用的 DefinePlugin
    },
    module: {
        rules: [{
            test: /\.(es6|jsx|js)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    babelrc: false,// 使用 .babelrc 文件
                    cacheDirectory: true, // 指定的目录将用来缓存 loader 的执行结果。之后的 webpack 构建，将会尝试读取缓存
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                "modules": false, // "amd" | "umd" | "systemjs" | "commonjs" | "cjs" | false, defaults to "commonjs". 转换 es6 模块语法到其他 模块规范， false不会转换
                                "useBuiltIns": "usage", // false 只做了语法转换， entry 引入了所有的es扩展包，不管用不用得着一股脑都打包进来，只有 usage 会自动检测代码中用到的功能自动引入模块（注：babel默认不会检测第三方依赖包代码，所以使用 usage 时，可能会出现引入第三方的代码包未注入模块而引发bug）
                                "loose": false, // 默认值 false， Babel 默认使用 strict 模式；
                                "debug": true, //  默认值 false， 调试模式，会打印转换时的一些信息；
                                "targets": { // 当前项目所支持的浏览器配置
                                    "browsers": [
                                        "last 2 versions",
                                        "Firefox ESR",
                                        "> 1%",
                                        "ie >= 9",
                                        "iOS >= 8",
                                        "Android >= 4"
                                    ]
                                },
                                "include": [], // 如果你 使用了某个新特性（如es6.array.from），无论browserslist 如何你都想 转化它， 则 include: ['es6.array.from']
                                "exclude": [],
                                "corejs": 3 // 针对Babel > 7.4.0, 官方不再推荐使用@babel/polyfill，请选择core-js，根据安装core-js版本在corejs选项填写数字2或3，其实polyfill本身就是stable版本的core-js和regenerator-runtime的合集，所以在针对Babel >= 7.4.0 的情况，我们需要安装 core-js 替代 babel-polyfill,而 regenerator-runtime 会在我们安装 @babel/runtime 时自动安装，所以不必单独安装了
                            }
                        ],
                        "@babel/preset-react"
                    ],
                    plugins: [
                        [
                            "@babel/plugin-proposal-class-properties"
                        ],
                        [
                            "@babel/plugin-transform-runtime",
                            {
                                //"corejs": 3, // 来决定来决定是否使用 babel/runtime-corejs，以及其对应版本。2和3版本的区别在于出现在 Babel 7.4.0 之后，你可以选择引入 @babel/runtime-corejs3，设置 corejs: 3 来帮助您实现对实例方法(Object.assign, Array.from)的支持, 2的版本默认支持 Promise, Set, Symbol，默认false,
                                "regenerator": true, // 默认true, 默认情况下回根据 browserslist 来确认是否转化 generator 函数 或 async 函数，如果 @babel/preset-env -> ignoreBrowserslistConfig = true 则都转换 generator 和 async 语法。
                                "helpers": true, // 默认true, 是否将内联的 babel helpers 代码抽离到单独的 module 文件，避免内联的 helper 代码在多个文件重复出现。
                                "useESModules": true // 使用 es modules helpers, 减少 commonJS 语法代码
                            }
                        ]
                    ]
                }
            }
        },
        {
            test: /\.less$/,
            use: [
                {
                    loader: DEV_MODE ? 'style-loader' : MiniCssExtractPlugin.loader,
                    options: {
                        // 您可以在这里指定公共路径,默认情况下，它在webpackOptions.output中使用publicPath
                    }
                },
                'css-loader',
                'postcss-loader',
                'less-loader'
            ]
        },
        {
            test: /\.woff|ttf|woff2|eot$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }
            ]
        }]
    },
    plugins: [
        new webpack.BannerPlugin('点评平台研发中心-图片压缩方案测试'),
        new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['/dist'] }),//每次打包清理上次的打包文件
        // css文件抽离设置
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new DashboardPlugin(),
        new HtmlWebpackPlugin({
            template: './src/html/index.html'
            , filename: 'index.html'//可以使用hash命名
            , title: 'index'
            , inject: 'body'//脚本包含到body 也可以写到head里面
            , chunks: ['manifest', 'commons', 'index']//指定当前模板需要打入哪些js模块
            , minify: {//启用代码代码压缩
                removeComments: false,//移除注释
                collapseWhitespace: false//移除空格
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/html/detail.html'
            , filename: 'detail.html'//可以使用hash命名
            , title: 'detail'
            , inject: 'body'//脚本包含到body 也可以写到head里面
            , chunks: ['manifest', 'commons', 'detail']//指定当前模板需要打入哪些js模块
            , minify: {//启用代码代码压缩
                removeComments: false,//移除注释
                collapseWhitespace: false//移除空格
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/html/list.html'
            , filename: 'list.html'//可以使用hash命名
            , title: 'list'
            , inject: 'body'//脚本包含到body 也可以写到head里面
            , chunks: ['manifest', 'commons', 'list']//指定当前模板需要打入哪些js模块
            , minify: {//启用代码代码压缩
                removeComments: false,//移除注释
                collapseWhitespace: false//移除空格
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/html/home.html'
            , filename: 'home.html'//可以使用hash命名
            , title: 'home'
            , inject: 'body'//脚本包含到body 也可以写到head里面
            , chunks: ['manifest', 'commons', 'home']//指定当前模板需要打入哪些js模块
            , minify: {//启用代码代码压缩
                removeComments: false,//移除注释
                collapseWhitespace: false//移除空格
            }
        })
    ],
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*' //支持服务跨域
        },
        contentBase: packageFilePath,
        watchContentBase: true,//告诉服务器监视那些通过 devServer.contentBase 选项提供的文件。文件改动将触发整个页面重新加载。默认被禁用。
        compress: true,//一切服务都启用gzip 压缩：
        inline: true,//应用程序启用内联模式,默认内联模式,当源文件改变时会自动刷新页面
        hot: true,//启用 webpack 的模块热替换特性
        host: 'localhost',//指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问，指定为ip
        stats: { colors: true },// 用颜色标识
        historyApiFallback: {//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
            index: 'dist/index.html'
        },
        port: 3000, // 如果是小于1000的端口号，是需要sudo权限的，启用方式 sudo node server.js即可(可使用默认80端口)
        proxy: {
            '/content': {
                target: 'http://m.dianping.com',
                changeOrigin: true,
                secure: false
            },
        }
    }
}