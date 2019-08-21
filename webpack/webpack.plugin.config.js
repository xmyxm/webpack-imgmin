




let config = require('./webpack.base.config.js');
let ImageminPlugin = require('imagemin-webpack-plugin').default

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
            }
        ]
    }
)

config.plugins.push(
    new ImageminPlugin({
        disable: process.env.NODE_ENV === 'production', // Disable during development
        pngquant: {
          quality: '75'
        }
    })
)

module.exports = config;

