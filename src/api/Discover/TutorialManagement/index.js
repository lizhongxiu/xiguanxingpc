import http from "@/utils/request";

const apis = {
  // 查询课程信息列表
  getCourseInfoList(page, data) {
    return http.get({
      url: "/pc/find/courseInfo/getCourseInfoList",
      data: Object.assign(page, data)
    });
  },
  // 保存课程信息
  saveCourseInfo(data) {
    return http.post({
      url: "/pc/find/courseInfo/saveCourseInfo",
      data: Object.assign(data),
      typea: 1
    });
  },

  // 查询课程信息
  getCourseInfo(data) {
    return http.get({
      url: "/pc/find/courseInfo/getCourseInfo",
      data: {
        ...data
      },
      typea: 1
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
  },
  // 删除课程信息
  delCourseInfo(data) {
    return http.delete({
      url: "/pc/find/courseInfo/delCourseInfo",
      data: {
        ...data
      }
    });
  },
  // 上架/下架
  upOrDown(data) {
    return http.post({
      url: "/pc/find/courseInfo/upOrDown",
      data: Object.assign(data),
      typea: 1
    });
  },

  //  教程视频↓
  // 查询课程视频列表
  getCourseVideoList(page, data) {
    return http.get({
      url: "/pc/find/courseVideo/getCourseVideoList",
      data: Object.assign(page, data)
    });
  },
  // 保存课程视频
  saveCourseVideo(data, id) {
    return http.post({
      url: "/pc/find/courseVideo/saveCourseVideo",
      data: Object.assign(data, id),
      typea: 1
    });
  },

  // 查询课程视频
  getCourseVideo(data) {
    return http.get({
      url: "/pc/find/courseVideo/getCourseVideo",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 删除课程视频
  delCourseVideo(data) {
    return http.delete({
      url: "/pc/find/courseVideo/delCourseVideo",
      data: {
        ...data
      }
    });
  }
};

export default apis;
