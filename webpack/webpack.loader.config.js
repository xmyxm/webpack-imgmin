



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
                    disable: false// process.env.NODE_ENV === 'production'
                }
            }
        ]
    }
)

module.exports = config;
