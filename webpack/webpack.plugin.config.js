




const config = require('./webpack.base.config.js');
const ImageminPlugin = require('imagemin-webpack-plugin').default

config.module.rules.push(
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: "[name].[ext]",
                    publicPath: "../img/",
                    outputPath: "img/",
                    limit: 1
                }
            }
        ]
    }
)

config.plugins.push(
    new ImageminPlugin({
        disable: false, // process.env.NODE_ENV === 'production', // Disable during development
        pngquant: {
          quality: '75'
        }
    })
)

module.exports = config;

