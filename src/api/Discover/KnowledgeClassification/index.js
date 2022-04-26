import http from "@/utils/request";

const apis = {
  // 查询知识分类列表
  getKnowledgeClassList(page, data) {
    return http.get({
      url: "/pc/find/knowledgeClass/getKnowledgeClassList",
      data: Object.assign(page, data)
    });
  },
  // 保存知识分类
  saveKnowledgeClass(data) {
    return http.post({
      url: "/pc/find/knowledgeClass/saveKnowledgeClass",
      data: Object.assign(data),
      typea: 1
    });
  },
  // 查询知识分类
  getKnowledgeClass(data) {
    return http.get({
      url: "/pc/find/knowledgeClass/getKnowledgeClass",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 删除知识分类
  delKnowledgeClass(data) {
    return http.delete({
      url: "/pc/find/knowledgeClass/delKnowledgeClass",
      data: {
        ...data
      }
    });
  },
  // 查询所有课程分类
  getKnowledgeClasss(data) {
    return http.get({
      url: "/pc/find/knowledgeClass/getKnowledgeClasss",
      data: {
        ...data
      },
      typea: 1
    });
  }
};

export default apis;
