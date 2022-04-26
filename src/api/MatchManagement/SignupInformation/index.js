import http from "@/utils/request";

const apis = {
  // 获取报名记录
  getSignUpRecordList(paginations, data) {
    return http.get({
      url: "/pc/competitionSignUpRecord/getCompetitionSignUpRecordList",
      data: Object.assign(paginations, data)
    });
  },
  // 添加或修改
  addOrUpdateSignUpRecord(data) {
    return http.post({
      url: "/pc/competitionSignUpRecord/addOrUpdateSignUpRecord",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 删除
  deleteSignupRecord(id) {
    return http.delete({
      url: "/pc/competitionSignUpRecord/del",
      data: {
        id
      }
    });
  },
  // 批量导入报名数据
  batchImport(data) {
    return http.post({
      url: '/pc/competitionSignUpRecord/batchImport',
      data: {
        code: 200,
        msg: "执行成功",
        data: data
      },
      typea: 1
    });
  }
};
export default apis;
