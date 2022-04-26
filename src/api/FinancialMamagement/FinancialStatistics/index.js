import http from "@/utils/request";

const apis = {
  // 查询跳绳人员订单列表
  getSkipOrderList(page, data) {
    return http.get({
      url: "/pc/skipOrder/getSkipOrderList",
      data: Object.assign(page, data)
    });
  },
  // 查询跳绳人员订单总计
  getTotalSkipOrder(page, data) {
    return http.get({
      url: "/pc/skipOrder/getTotalSkipOrder",
      data: Object.assign(page, data)
    });
  },
  // 保存跳绳人员订单
  saveSkipOrder(data) {
    return http.post({
      url: "/pc/skipOrder/saveSkipOrder",
      data: Object.assign(data),
      typea: 1
    });
  },

  // 查询跳绳人员订单
  getSkipOrder(data) {
    return http.get({
      url: "/pc/skipOrder/getSkipOrder",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 修改跳绳人员订单
  updateSkipOrder(data) {
    return http.post({
      url: "/pc/skipOrder/updateSkipOrder",
      data: Object.assign(data),
      typea: 1
    });
  },
  // 删除跳绳人员订单
  delSkipOrder(data) {
    return http.delete({
      url: "/pc/skipOrder/delSkipOrder",
      data: {
        ...data
      }
    });
  }
};

export default apis;
