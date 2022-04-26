import http from "@/utils/request";

const apis = {
  //用户列表
  userList(data) {
    return http.get({
      url: "/pc/userInfo/getAppUserList",
      data: {
        ...data
      },
      typea: 1
    });
  },
  //用户冻结
  userFreeze(data) {
    return http.post({
      url: "/pc/userInfo/openOrCloseAppUser",
      data: {
        ...data
      },
      typea: 1
    });
  },
  //绑定设备列表
  bindingDevice(data) {
    return http.get({
      url: "/pc/device/getDeviceList",
      data: {
        ...data
      },
      typea: 1
    });
  },
  //跳绳记录
  getDataSkipTest(data) {
    return http.get({
      url: "/pc/dataSkipTest/getDataSkipTest",
      data: {
        ...data
      },
      typea: 1
    });
  },
  //训练记录
  getSkipUserRecordGroupList(data) {
    return http.get({
      url: "/pc/skipUserRecord/getSkipUserRecordGroupList",
      data: {
        ...data
      },
      typea: 1
    });
  },
  //训练记录详情
  getSkipUserRecordList(data) {
    return http.get({
      url: "/pc/skipUserRecord/getSkipUserRecordList",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 修改用户赛事权限  裁判
  updateUserCompetition(id, competition) {
    return http.post({
      url: '/pc/userInfo/updateCompetition',
      data: {
        id,
        competition,
      },
      typea: 1
    });
  },
};

export default apis;
