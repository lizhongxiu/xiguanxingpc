import http from "@/utils/request";

const apis = {
  // 查询用户活跃度
  getUserActivation(data) {
    return http.get({
      url: "/pc/statistic/getUserActivation",
      data: {
        ...data
      }
    });
  },
  // 查询用户活跃度(列表)
  getUserActivationList(page, data) {
    return http.get({
      url: "/pc/statistic/getUserActivationList",
      data: Object.assign(page, data)
    });
  }
};

export default apis;
