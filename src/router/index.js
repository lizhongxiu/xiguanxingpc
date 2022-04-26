import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import Layout from "@/layout/index";
/**
 * 将modules中的文件全部导入进来
 */
const routerList = []
function inportAll(r) {
    r.keys().forEach((key) => {
        routerList.push(r(key).default)
    })
}
inportAll(require.context('./modules', true, /\.js/))
const routes = [{
    path: "/login", // 登录
    leftNavType: "login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    component: () =>
        import("@/views/login/login")
},
// 设置管理
{
    path: "/setUp",
    component: Layout,
    name: "SetUp",
    redirect: "/setUp/rhythm",
    meta: { title: "设置管理" },
    children: [{
        path: "rhythm",
        name: "Rhythm",
        component: () =>
            import("@/views/SetUp/Rhythm/index"),
        meta: { title: "节拍设置" }
    },
    {
        path: "bgMusic",
        name: "BgMusic",
        component: () =>
            import("@/views/SetUp/BgMusic/index"),
        meta: { title: "背景音乐" }
    },
    {
        path: "paraSet",
        name: "ParaSet",
        component: () =>
            import("@/views/SetUp/ParaSet/index"),
        meta: { title: "参数设置" }
    },
    {
        path: "firmwareVersion",
        name: "firmwareVersion",
        component: () =>
            import("@/views/SetUp/FirmwareVersion/index"),
        meta: { title: "固件信息" }
    }
    ]
},
...routerList,
];

const router = new VueRouter({
    routes
});

export default router;