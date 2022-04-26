import router from "./router";
// import store from './store'
import { getStorage } from "@/utils/auth"; // get token from cookie

const whiteList = ["/login"]; // 不重定向白名单

router.beforeEach(async (to, from, next) => {
  if (getStorage("token")) {
    if (to.path === "/login") {
      next({ path: "/information/commodityInformation" });
    } else {
      next();
      // if (store.getters.roles.length === 0) {
      //   await store.dispatch('GetInfo')
      //   const { result } = await getUserMenuTree()
      //   const accessRoutes = await store.dispatch('permission/generateRoutes', result)
      //   // dynamically add accessible routes
      //   await router.addRoutes(accessRoutes)
      //   next({ ...to, replace: true })
      // } else {
      //   next()
      // }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login`); // 否则全部重定向到登录页
    }
  }
});
