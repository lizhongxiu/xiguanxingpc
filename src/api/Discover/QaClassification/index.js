import http from "@/utils/request";

const apis = {
  // 查询百问百答分类列表
  getClassList(page, data) {
    return http.get({
      url: "/pc/find/questionAnswerClass/getClassList",
      data: Object.assign(page, data)
    });
  },
  // 保存百问百答分类
  saveClass(data) {
    return http.post({
      url: "/pc/find/questionAnswerClass/saveClass",
      data: Object.assign(data),
      typea: 1
    });
  },
  // 查询百问百答分类
  getClass(data) {
    return http.get({
      url: "/pc/find/questionAnswerClass/getClass",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 删除百问百答分类
  delClass(data) {
    return http.delete({
      url: "/pc/find/questionAnswerClass/delClass",
      data: {
        ...data
      }
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
  }
};

export default apis;
