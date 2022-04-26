export default {
    path: "/index",
    component: () =>import("@/layout/index"),
    name: "Index",
    mode: "history",
    redirect: "/index",
    meta: { title: "首页" },
    children: [{
        path: "index",
        name: "Index",
        component: () =>
            import("@/views/Index/index"),
        meta: { title: "园所数据" }
    },
    {
        path: "userDataView",
        name: "userDataView",
        component: () =>
            import("@/views/Index/userDataView"),
        meta: { title: "用户数据" }
    }
    ]
}
