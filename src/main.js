import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import directives from "./utils/directives";
import "@/permission";
// ElementUI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/style/index.scss";

import "xe-utils";
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";
Vue.use(VXETable);
// import "@/style/elementTheme/theme/index.css";
// 必须要写在 ElementUI css 样式后面 这样icon的样式才能起作用，不然会把icon的样式覆盖掉
// import "./assets/icon/iconfont.css";
Vue.use(ElementUI);
import VueQuillEditor from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
Vue.use(VueQuillEditor);

import "./assets/icon/iconfont.css";
import echarts from "echarts";
Vue.prototype.$echarts = echarts;
// 自定义公共组件
import Sir from "@/components/common";
Vue.use(Sir);

// 引入全局类
import utils from "@/utils/utils.js"; // 公共工具
import api from "@/api/index.js"; // api 请求接口
import toaster from "@/utils/toaster"; // 提示信息

// 绑定在原型上
Vue.prototype.$utils = utils;
Vue.prototype.$api = api;
Vue.prototype.$toaster = toaster;

// 引入serverUrl   ---  请求接口
import serverUrl from "@/utils/server";
Vue.prototype.$serverUrl = serverUrl.apiurl;

// 路由重定向 --- 路由权限控制
import "@/permission/permission.js"; // permission control

//引入filter 过滤器
import * as filters from "@/utils/filters.js";
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});
Object.keys(directives).forEach(k => Vue.directive(k, directives[k]));

Vue.config.productionTip = false;
Vue.directive("allow", {
    bind: function(el, binding) {
        let permissionList = binding.value; //在页面上绑定的 对应权限显示
        let roles = window.localStorage.getItem("arr"); //获取的用户权限
        roles = JSON.parse(roles);
        el.style.display = "none";
        for (let i = 0; i < roles.length; i++) {
            if (permissionList === roles[i]) {
                el.style.display = "inline-block";
                break;
            }
        }
    }
});
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");