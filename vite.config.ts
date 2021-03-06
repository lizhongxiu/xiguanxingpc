import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import Components from 'unplugin-vue-components/vite'
import {
    ElementPlusResolver,
    AntDesignVueResolver,
    VantResolver,
    HeadlessUiResolver,
    ElementUiResolver
} from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import postCssPxToRem from "postcss-pxtorem";
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        //设置别名
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    css: {
        postcss: {
            plugins: [
                postCssPxToRem({
                    rootValue: 19.2, // （设计稿/10）1rem的大小
                    propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
                })
            ]
        }
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
            imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/head', '@vueuse/core'],
        }),
        Components({
            // ui库解析器，也可以自定义
            resolvers: [
                ElementPlusResolver(),
                AntDesignVueResolver(),
                VantResolver(),
                HeadlessUiResolver(),
                ElementUiResolver()
            ]
        })
    ],
    server: {
        port: 8080, //启动端口
        hmr: {
            host: 'localhost',
            port: 8080
        },
        // 设置代理
        proxy: {
            '/api': {
                target: 'your https address',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, '')
            }
        }
    }
});
