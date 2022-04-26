import http from "@/utils/request";

const apis = {
  getExcel(data) {
    return http.get({
      url: "/pc/dataSkipTest/downExcel",
      data: {
        ...data
      }
    });
  },
  getSignExcel(data) {
    return http.get({
      url: "/pc/dataSkipTest/downExcel",
      data: {
        ...data
      }
    });
  }
};
export default apis;
