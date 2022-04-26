const webpack = require("webpack");
const path = require("path");
const resolve = dir => path.join(__dirname, dir);
module.exports = {
    // 基本路径
    // publicPath: './',
    publicPath: "/back",
    outputDir: "rope_skipping_web",
    productionSourceMap: false,
    lintOnSave: false,
    chainWebpack: config => {
        config.resolve.aliascnpm.set("@", resolve("src"));
    },
    devServer: {
        open: false,
        port: 8009,
        proxy: {
            "/rope_skipping_webservice": {
                // target: "http://47.102.154.245:9990", // 测试地址
                // target: "http://120.26.46.114:9990", // 测试地址
                // target: "http://192.168.1.62:9990", // 开发地址
                // target: "http://192.168.1.169:9990", // 开发地址
                target: "http://192.168.5.148:9990", // 本地地址
                changeOrigin: true,
                ws: true, //代理websockets
                changeOrigin: true,
                pathRewrite: {
                    "^/rope_skipping_webservice": ""
                }
            },
            "/rope_skipping_web": {
                // target: "http://192.168.1.69:9990",
                target: "http://120.26.46.114:9990",
                changeOrigin: true,
                pathRewrite: {
                    "^/rope_skipping_web": "/"
                }
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                // @是src的别名
                prependData: `
            @import "@/style/index.scss";
          `
            }
        }
    },
    // 修复热更新失效问题 ( ps: 没发现特别明显的作用 )
    chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true);
    }
};