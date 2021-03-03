const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/money-3/'
      : '/',
  lintOnSave: false,
  chainWebpack:config=>{
    const dir = path.resolve(__dirname, 'src/assets/icons')
    /*获取你想要请求的文件*/
    /*webpack被vue封装后暴露的一个config对象*/
    config.module
        .rule('svg-sprite')
        .test(/\.svg$/)
        /*只包含dir(icons)的目录*/
        .include.add(dir).end()
        .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()
        .use('svgo-loader').loader('svgo-loader')
        .tap(options=>({...options,plugins:[{removeAttrs:{attrs:'fill'}}]})).end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'),[{plainSprite: true}])
    /*其他svg loader排除icons目录*/
    config.module.rule('svg').exclude.add(dir)






  }
}
