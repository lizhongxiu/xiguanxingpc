import http from "@/utils/request";

const apis = {
  // 查询日志列表
  getLogList(page, data) {
    return http.get({
      url: "/pc/log/getLogList",
      data: Object.assign(page, data)
    });
  }
};

export default apis;
