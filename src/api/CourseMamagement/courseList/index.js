import http from "@/utils/request";

const apis = {
  // 查询列表
  getSkipCourseList(page, data) {
    return http.get({
      url: "/pc/skipCourse/getSkipCourseList",
      data: Object.assign(page, data)
    });
  },
  // 规则列表
  getSkipSetRuleList(page, data) {
    return http.get({
      url: "/pc/skipSetRule/getSkipSetRuleList",
      data: Object.assign(page, data)
    });
  },
  // 训练列表
  getSkipSetTrainList(page, data) {
    return http.get({
      url: "/pc/skipSetTrain/getSkipSetTrainList",
      data: Object.assign(page, data)
    });
  },
  // 保存
  saveSkipCourse(data) {
    return http.post({
      url: "/pc/skipCourse/saveSkipCourse",
      data: Object.assign(data),
      typea: 1
    });
  },
  // 训练保存
  saveSkipSetTrain(data) {
    return http.post({
      url: "/pc/skipSetTrain/saveSkipSetTrain",
      data: Object.assign(data),
      typea: 1
    });
  },
  // 规则保存
  saveSkipSetRule(data) {
    return http.post({
      url: "/pc/skipSetRule/saveSkipSetRule",
      data: Object.assign(data),
      typea: 1
    });
  },

  // 查询详情
  getSkipCourse(data) {
    return http.get({
      url: "/pc/skipCourse/getSkipCourse",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 训练详情
  getSkipSetTrain(data) {
    return http.get({
      url: "/pc/skipSetTrain/getSkipSetTrain",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 规则详情
  getSkipSetRule(data) {
    return http.get({
      url: "/pc/skipSetRule/getSkipSetRule",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 查询跳绳训练列表
  getSkipCourseStageList(page, data) {
    return http.get({
      url: "/pc/skipSetTrain/getSkipCourseStageList",
      data: Object.assign(page, data)
    });
  },
  // 修改
  updateSkipCourse(data) {
    return http.post({
      url: "/pc/skipCourse/updateSkipCourse",
      data: Object.assign(data),
      typea: 1
    });
  },
  // 训练修改
  updateSkipSetTrain(data) {
    return http.post({
      url: "/pc/skipSetTrain/updateSkipSetTrain",
      data: Object.assign(data),
      typea: 1
    });
  },
  // 规则修改
  updateSkipSetRule(data) {
    return http.post({
      url: "/pc/skipSetRule/updateSkipSetRule",
      data: Object.assign(data),
      typea: 1
    });
  },
  // 删除
  delSkipCourse(data) {
    return http.delete({
      url: "/pc/skipCourse/delSkipCourse",
      data: {
        ...data
      }
    });
  },

  // 训练删除
  delSkipSetTrain(data) {
    return http.delete({
      url: "/pc/skipSetTrain/delSkipSetTrain",
      data: {
        ...data
      }
    });
  },
  // 规则删除
  delSkipSetRule(data) {
    return http.delete({
      url: "/pc/skipSetRule/delSkipSetRule",
      data: {
        ...data
      }
    });
  },
  // 课程上架下架
  downSkipCourse(data) {
    return http.post({
      url: '/pc/skipCourse/skipCourseStatus',
      data: Object.assign(data),
      typea: 1
    })
  }
};

export default apis;
