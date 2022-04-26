import http from "@/utils/request";

const apis = {
  // 查询商品列表
  getGoodList(page, data) {
    return http.get({
      url: "/pc/find/interestGoodInfo/getGoodList",
      data: Object.assign(page, data)
    });
  },
  // 保存商品
  saveGood(data) {
    return http.post({
      url: "/pc/find/interestGoodInfo/saveGood",
      data: Object.assign(data),
      typea: 1
    });
  },

  // 查询商品详情
  getGood(data) {
    return http.get({
      url: "/pc/find/interestGoodInfo/getGood",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 删除商品
  delGood(data) {
    return http.delete({
      url: "/pc/find/interestGoodInfo/delGood",
      data: {
        ...data
      }
    });
  },
  // 上架/下架
  upOrDown(data) {
    return http.post({
      url: "/pc/find/interestGoodInfo/upOrDown",
      data: Object.assign(data),
      typea: 1
    });
  },
  // 是否推荐
  isRecommend(data) {
    return http.post({
      url: "/pc/find/interestGoodInfo/isRecommend",
      data: Object.assign(data),
      typea: 1
    });
  }
};

export default apis;
