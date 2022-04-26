import http from "@/utils/request";

const apis = {
  // 获取banner列表
  getBannerList() {
    return http.post({
      url: '/pc/banner/list',
      typea: 1
    });
  },
  // 新增banner
  addBanner(data) {
    return http.post({
      url: '/pc/banner/add',
      data,
      typea: 1
    });
  },
  // 修改banner列表
  updateBanner(data) {
    return http.post({
      url: '/pc/banner/update',
      data,
      typea: 1
    });
  },
  // 删除banner
  deleteBanner(data) {
    return http.post({
      url: '/pc/banner/delete',
      data,
      typea: 1
    });
  },
};
export default apis;
