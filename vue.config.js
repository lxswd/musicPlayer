const  path = require('path')
function resolve (dir) {
    return path.join(__dirname, './', dir)
}

module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "./", //部署应用包时的基本URL
    outputDir: "dist", //打包构建时的输出目录
    assetsDir: "static", // 放置生成的静态资源的目录
    indexPath: "index.html", // html输出路径
    filenameHashing: true, // 文件名哈希
    // pages: {} // 用于多页配置，默认是undefind
    lintOnSave: true, // 保存时是否用'eslint-loader'检查
    runtimeCompiler: false, // 是否使用包含运行时编译器的Vue构建版本

    //把productionSourceMap这个改为false。不然在最终打包的文件中会出现一些map文件
    //map文件的作用：项目打包后，代码都是经过压缩加密的
    //如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。 
    //有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
    productionSourceMap: false, // 生产环境的source map 默认为true，设为false，加速生产环境的构建
    devServer: {
        host: "0.0.0.0", // 局域网和本地访问
        port: 8080, // 端口号
        hot: true, // 热更新
        open: true, // 是否自动打开浏览器
    },
    // configureWebpack: config => {
  
    // },
    chainWebpack: config => {
       config.resolve.alias
       /* 设置别名 以.set("", resolve("")) 格式添加 */
        .set("@", resolve("./src"))
    }
}