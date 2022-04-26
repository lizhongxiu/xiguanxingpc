import http from "@/utils/request";

const apis = {
  // 登录
  login(username, password) {
    return http.post({
      url: "/pc/sysUser/login",
      data: {
        username,
        password
      },
      typea: 1
    });
  },
  //获取用户权限
  authority() {
    return http.get({
      url: "/pc/role/getUserRoleMenus",
      typea: 1
    });
  }
};

export default apis;
