import http from "@/utils/request";

const apis = {
  // 查询精选活动列表
  getActivityList(page, data) {
    return http.get({
      url: "/pc/find/activity/getActivityList",
      data: Object.assign(page, data)
    });
  },
  // 查询报名记录
  getJoinActivityList(page, data) {
    return http.get({
      url: "/pc/find/activity/getJoinActivityList",
      data: Object.assign(page, data)
    });
  },
  // 保存精选活动
  saveActivity(data) {
    return http.post({
      url: "/pc/find/activity/saveActivity",
      data: Object.assign(data),
      typea: 1
    });
  },

  // 查询精选活动
  getActivity(data) {
    return http.get({
      url: "/pc/find/activity/getActivity",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 删除精选活动
  delActivity(data) {
    return http.delete({
      url: "/pc/find/activity/delActivity",
      data: {
        ...data
      }
    });
  }
};

export default apis;
