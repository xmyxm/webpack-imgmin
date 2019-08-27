



const config = require('./webpack.base.config.js');

config.module.rules.push(
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
            {
                loader: 'url-loader',
                options: {
                    name: "[name].[ext]",
                    publicPath: "../img/",
                    outputPath: "img/",
                    limit: 1000
                }
            },
            {
                loader: 'image-webpack-loader',
                options: {
                    disable: false, // process.env.NODE_ENV === 'production'
                    mozjpeg: {
                        progressive: true,
                        quality: 75
                    },
                    optipng: {
                        enabled: false, // 禁用optipng
                    },
                    pngquant: {
                        quality: '75-90',
                        speed: 4
                    },
                    gifsicle: {
                        interlaced: false,
                    }
                    // webp: { // webp选项将启用webp
                    //     quality: 75
                    // }
                }
            }
        ]
    }
)

module.exports = config;
