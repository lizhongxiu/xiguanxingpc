import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
// import 'element-plus/dist/index.css'
import 'vue-global-api'
// 创建vue实例
const app = createApp(App);

app.use(store);
app.use(router);

// 挂载实例
app.mount('#app');
