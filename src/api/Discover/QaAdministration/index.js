import http from "@/utils/request";

const apis = {
  // 查询问答列表
  getInfoList(page, data) {
    return http.get({
      url: "/pc/find/questionAnswerInfo/getInfoList",
      data: Object.assign(page, data)
    });
  },
  // 保存问答
  saveInfo(data) {
    return http.post({
      url: "/pc/find/questionAnswerInfo/saveInfo",
      data: Object.assign(data),
      typea: 1
    });
  },

  // 查询问答
  getInfoById(data) {
    return http.get({
      url: "/pc/find/questionAnswerInfo/getInfoById",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 查询所有百问百答分类
  getClasss(data) {
    return http.get({
      url: "/pc/find/questionAnswerClass/getClasss",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 删除问答
  delInfo(data) {
    return http.delete({
      url: "/pc/find/questionAnswerInfo/delInfo",
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
  }
};

export default apis;
