import http from "@/utils/request";
const apis = {
  getMatchRecordList(data) {
    return http.get({
      url: "/pc/dataSkipTest/getDataSkipTest",
      data: {
        ...data
      }
    });
  }
};
export default apis;
