import http from "@/utils/request";

const apis = {
  // 查询用户活跃度
  getUserGrowth(data) {
    return http.get({
      url: "/pc/statistic/getUserGrowth",
      data: {
        ...data
      }
    });
  },
  // 查询用户增长量(列表)
  getUserGrowthList(page, data) {
    return http.get({
      url: "/pc/statistic/getUserGrowthList",
      data: Object.assign(page, data)
    });
  }
};

export default apis;
