const WebpackDevServer = require('webpack-dev-server');
const DashboardPlugin = require('webpack-dashboard/plugin');
const webpack = require('webpack');
const open = require('open');
const config = require('./webpack.image.loader.config');
const port =  config.devServer.port;
const host = config.devServer.host || '127.0.0.1';

for (let key in config.entry) {
	let ar = config.entry[key];
	if (key != 'common') {
		ar.unshift('webpack-dev-server/client?http://'+ host +':'+ port +'/', 'webpack/hot/dev-server');
	}
}

//开发环境热更新配置
config.plugins.push(new webpack.HotModuleReplacementPlugin());
//改善开发人员使用webpack时控制台用户体验的一款工具
config.plugins.push(new DashboardPlugin());

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, config.devServer);

server.listen(port, host, (err)=>{
	if(err){
		console.log('启动出错：' + err);
	}
	open('http://' + host + ':' + port + '/index.html');
});
