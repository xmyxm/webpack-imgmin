const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const open = require('open');
// const config = require('./webpack/webpack.loader.config');
const config = require('./webpack/webpack.plugin.config');
const port =  config.devServer.port;
const host = config.devServer.host || '127.0.0.1';

// 在热加载时直接返回更新文件名，而不是文件的id。
config.plugins.push(new webpack.NamedModulesPlugin());
//开发环境热更新配置
config.plugins.push(new webpack.HotModuleReplacementPlugin());

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, config.devServer);

server.listen(port, host, (err)=>{
	if(err){
		console.log('启动出错：' + err);
	}
	open('http://' + host + ':' + port + '/index.html');
});
