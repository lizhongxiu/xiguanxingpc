import http from "@/utils/request";

const apis = {
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
  // 保存角色
  saveRole(data) {
    return http.post({
      url: "/pc/role/saveRole",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 查询角色列表
  getRoleList(page, data) {
    return http.get({
      url: "/pc/role/getRoleList",
      data: Object.assign(page, data)
    });
  },
  // 查询角色
  getRole(data) {
    return http.get({
      url: "/pc/role/getRole",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 删除删除角色
  delRole(data) {
    return http.delete({
      url: "/pc/role/delRole",
      data: {
        ...data
      }
    });
  },
  // 获取权限列表
  getRoleMenus(data) {
    return http.get({
      url: "/pc/role/getRoleMenus",
      data: {
        ...data
      }
    });
  },
  // 保存权限
  saveRoleMenus(data) {
    return http.post({
      url: "/pc/role/saveRoleMenus",
      data: {
        ...data
      },
      typea: 1
    });
  }
};

export default apis;
