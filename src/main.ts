import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import { setHtmlRem } from '@/utils/rem'
setHtmlRem() //两个参数，第一个为设计稿屏幕宽度，第二个为此设计稿下的基础字号
// import 'element-plus/dist/index.css'
import 'vue-global-api'
// 创建vue实例
const app = createApp(App);

app.use(store);
app.use(router);

// 挂载实例
app.mount('#app');
