import http from "@/utils/request";

const apis = {
  // 查询用户订单列表
  getSkipOrderList(page, data) {
    return http.get({
      url: "/pc/skipOrder/getSkipOrderList",
      data: Object.assign(page, data),
      typea: 1
    });
  },
  // 删除用户订单
  delSkipOrder(orderId) {
    return http.delete({
      url: "/pc/skipOrder/delSkipOrder",
      data: {
        id: orderId
      }
    });
  },
  // 订单设置快递单号
  setExpressNum(data) {
    return http.post({
      url: "/pc/skipOrder/setExpressNum",
      data: Object.assign(data),
      typea: 1
    });
  },
  // 根据订单id查询详情
  updateSkipOrder(data) {
    return http.post({
      url: "/pc/skipOrder/updateSkipOrder",
      data: Object.assign(data),
      typea: 1
    });
  }
};

export default apis;
