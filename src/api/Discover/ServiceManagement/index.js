import http from "@/utils/request";

const apis = {
  // 查询列表
  getServiceTypeList(data) {
    return http.get({
      url: "/pc/serviceType/getServiceTypeList",
      data: Object.assign(data)
    });
  },
  // 服务设置列表
  getServiceSetList(data) {
    return http.get({
      url: "/pc/serviceSet/getServiceSetList",
      data: Object.assign(data)
    });
  },
  // 上架服务设置
  upServiceSet(data) {
    return http.post({
      url: "/pc/serviceSet/upServiceSet",
      data: Object.assign(data),
      typea: 1
    });
  },
  // 添加服务设置
  saveServiceSet(data) {
    return http.post({
      url: "/pc/serviceSet/saveServiceSet",
      data: Object.assign(data),
      typea: 1
    });
  },
  // 修改服务设置
  updateServiceSet(data) {
    return http.post({
      url: "/pc/serviceSet/updateServiceSet",
      data: Object.assign(data),
      typea: 1
    });
  },
  // 服务设置详情
  getServiceSet(data) {
    return http.get({
      url: "/pc/serviceSet/getServiceSet",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 删除服务设置
  delServiceSet(data) {
    return http.delete({
      url: "/pc/serviceSet/delServiceSet",
      data: {
        ...data
      }
    });
  },
  // 保存
  saveServiceType(data) {
    return http.post({
      url: "/pc/serviceType/saveServiceType",
      data: Object.assign(data),
      typea: 1
    });
  },

  //查询详情
  getServiceTypeInfo(data) {
    return http.get({
      url: "/pc/serviceType/getServiceType",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 修改
  updateServiceType(data) {
    return http.post({
      url: "/pc/serviceType/updateServiceType",
      data: Object.assign(data),
      typea: 1
    });
  },
  // 删除
  delServiceType(data) {
    return http.delete({
      url: "/pc/serviceType/delServiceType",
      data: {
        ...data
      }
    });
  }
};

export default apis;
