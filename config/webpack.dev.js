const path = require("path");

module.exports = {
    // 入口：有并且可以有多个
    entry: {
        main:"./src/main.js"
    },
    // 打包环境：开发 & 生产
    mode:"development",
    // 出口：有且只能有一个
    output:{
        filename: "[name]-bundle.js", // main-bound.js
        path: path.resolve(__dirname, "../dist"),
        publicPath:"/"  // 如果“/”，在index.html文件中引入main-bundle.js。这么写：<script src="/main-bundle.js"></script> 。 如果写的是：“/js”，在index.html文件中引入main-bundle.js。这么写：<script src="/js/main-bundle.js"></script>
    },
    // 本地服务器
    devServer:{
        contentBase:"dist"  // 服务器 默认进入dist文件夹下
    }
}