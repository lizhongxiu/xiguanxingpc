import http from "@/utils/request";

const apis = {
  // 查询课程分类列表
  getActivityList(page, data) {
    return http.get({
      url: "/pc/find/courseClass/getCourseClassList",
      data: Object.assign(page, data)
    });
  },
  // 保存课程分类
  saveCourseClass(data) {
    return http.post({
      url: "/pc/find/courseClass/saveCourseClass",
      data: Object.assign(data),
      typea: 1
    });
  },
  // 查询课程分类
  getCourseClass(data) {
    return http.get({
      url: "/pc/find/courseClass/getCourseClass",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 删除课程分类
  delCourseClass(data) {
    return http.delete({
      url: "/pc/find/courseClass/delCourseClass",
      data: {
        ...data
      }
    });
  },
  // 查询所有课程分类
  getCourseClasss(data) {
    return http.get({
      url: "/pc/find/courseClass/getCourseClasss",
      data: {
        ...data
      },
      typea: 1
    });
  }
};

export default apis;
