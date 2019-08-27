### 一、目标
    实现项目构建时图片的最优图片压缩方案

### 一、压缩方案
    loader: image-webpack-loader
    plugin: imagemin-webpack-plugin
    两种方案任选其一即可，demo中提供了两种方案的配置和详细说明

### 三、如何体验
1、安装与启动
```bash
    yarn install
    yarn start
```
2、打包构建
```bash
    yarn build  // 采用 image-webpack-loader 方案来打包
    yarn build:plugin // 采用 imagemin-webpack-plugin 方案来打包
```

### 四、图片压缩分析
```
一. 常见的图片压缩工具？

tinypng  png 压缩率 66%；网站；一次可提供20张图片压缩，提供开发API需要申请免费key，每月可压缩500张图片。

优图压缩 png  压缩率 -6%；网站；惊悚，压缩之后变大了。

图好快 png 压缩率 79%；网站；提供免费API，但是限速，有点慢，vip充值可提高并发数，唯一好的是不限制压缩数量，但是价格也不便宜；界面丑，可能没前端

Optimizilla png 压缩率 68%；网站；支持中文，没有提供API，压缩速度很快体验和tinypng一样，卖广告，一次可提供20张图片压缩

腾讯智图 png 压缩率35%； 网站；智图是腾讯ISUX前端团队开发的一个专门用于图片压缩和图片格式转换的平台，其功能包括针对png,jpeg,gif等各类格式图片的压缩，以及为上传图片自动选择最优的图片格式。同时，智图平台还会为用户转换一份webp格式的图片，网站不收费无广告不提供对外API但提供各种安装客户端，其实使用感觉一般。

建议使用：Optimizilla 或 tinypng 压缩几乎无损

还有很多其它一些：https://www.zhihu.com/question/19779256?sort=created

二. webpack图片压缩plugin

image-webpack-loader 基于webpack的图片压缩工具，压缩方案采用 imagemin ，代码实现比较全面，支持 Minify PNG, JPEG, GIF, SVG and WEBP images 等，支持各个版本 webpack，github start 1625

imagemin-webpack-plugin 同上，写法和用法略有不同，github start 561

对比：相比较两者实现的处理流程不同，loader的方式是先找到图片压缩后再交给file-loader处理，plugin是在生成资源到 output 目录之前再来压缩，如果要结合雪碧图的插件建议用后者，如果是普通使用或结合图片base64使用建议用前者

三. gulp图片压缩plugin

gulp-imageisux 来源于腾讯智图提供，其实是在线压缩，所有图片都要上传；github start 370

gulp-imagemin 基于imagemin系下的各类工具， github start 1688

四. 相关工具

本地转换命令 tinypng 安装 tinypng-cli 传入申请的key 和文件，纯野生工具，在线压缩图片，使用tinypng服务，技术方案可参考，github start 128

五. 各类工具测试结果分析

通过测试Demo比较 image-webpack-loader 和 imagemin-webpack-plugin  

测试结果：

压缩效率都为 67% 左右和 tinypng 在线压缩数据一致

  2. 压缩之后图片基本无损

  3. 会导致webpack打包时间变长，两者效率一致

  4. 可配置压缩质量 quality，设为75质量还是不错的，体积可再减小 15%

  5. 观其代码发现图片资源都是本地压缩，安装各类图片的压缩工具

六. 测试Demo

测试地址: https://github.com/xmyxm/webpack-imgmin.git

提供 loader 与plugin 配置方案

七. 打包转雪碧图方案

webpack-spritesmith github start 385     相关插件gulp.spritesmith 有1.1k的start

spritesmith 方案是以配置的文件路径为入口来合并雪碧图并生成雪碧图的css样式，再需要使用的地方引入这个css文件即可，属于图片预处理器。

postcss-sprites github start 373

postcss-sprites 方案是解析css的语法，并根据配置的规则来生成雪碧图且根据配置生成符合业务的样式替换原有的图片引入方案。

六. 开发好用的图片压缩插件

目前调研结果是当前插件暂时满足项目要求，如果项目图片资源庞大，需要思考如何加快压缩速度，优化打包时间成本。
```