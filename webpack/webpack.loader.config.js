



let config = require('./webpack.base.config.js');

config.module.rules.push(
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
            {
                loader: 'url-loader',
                options: {
                    name: "img/[name].[ext]",
                    limit: 1
                }
            },
            {
                loader: 'image-webpack-loader',
                options: {
                    disable: process.env.NODE_ENV === 'production'
                }
            }
        ]
    }
)

module.exports = config;
