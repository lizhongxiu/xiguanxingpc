import http from "@/utils/request";

const apis = {
  // 查询跳绳知识列表
  getKnowledgeList(page, data) {
    return http.get({
      url: "/pc/find/knowledgeInfo/getKnowledgeList",
      data: Object.assign(page, data)
    });
  },
  // 保存跳绳知识
  saveKnowledge(data) {
    return http.post({
      url: "/pc/find/knowledgeInfo/saveKnowledge",
      data: Object.assign(data),
      typea: 1
    });
  },

  // 查询跳绳知识
  getKnowledge(data) {
    return http.get({
      url: "/pc/find/knowledgeInfo/getKnowledge",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 查询所有知识分类
  getKnowledgeClasss(data) {
    return http.get({
      url: "/pc/find/knowledgeClass/getKnowledgeClasss",
      data: {
        ...data
      },
      typea: 1
    });
  },

  // 删除跳绳知识
  delKnowledge(data) {
    return http.delete({
      url: "/pc/find/knowledgeInfo/delKnowledge",
      data: {
        ...data
      }
    });
  },

  // 发布/撤回
  releaseOrRevoke(data) {
    return http.post({
      url: "/pc/find/knowledgeInfo/releaseOrRevoke",
      data: Object.assign(data),
      typea: 1
    });
  }
};

export default apis;
