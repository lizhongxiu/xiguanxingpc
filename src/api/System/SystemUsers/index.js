import http from "@/utils/request";

const apis = {
  // 查询系统用户列表
  getSysUserList(page, data) {
    return http.get({
      url: "/pc/sysUser/getSysUserList",
      data: Object.assign(page, data)
    });
  },
  // 查询所有系统用户
  getUsers(data) {
    return http.get({
      url: "/pc/sysUser/getUsers",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 保存系统用户
  saveUser(data) {
    return http.post({
      url: "/pc/sysUser/saveUser",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 查询系统用户
  getUser(data) {
    return http.get({
      url: "/pc/sysUser/getUser",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 查询所有角色
  getRoles(data) {
    return http.get({
      url: "/pc/role/getRoles",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 启用/冻结系统用户
  openOrCloseSysUser(data) {
    return http.post({
      url: "/pc/sysUser/openOrCloseSysUser",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 删除系统用户
  delUser(data) {
    return http.delete({
      url: "/pc/sysUser/delUser",
      data: {
        ...data
      }
    });
  }
};

export default apis;
