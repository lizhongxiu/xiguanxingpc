import http from "@/utils/request";

const apis = {
  // 查询列表
  getFirmwareList(page, data) {
    return http.get({
      url: "/pc/firmwareVersionInfo/getFirmwareList",
      data: Object.assign(page, data)
    });
  },
  // 保存
  saveFirmware(data) {
    return http.post({
      url: "/pc/firmwareVersionInfo/saveFirmware",
      data: Object.assign(data),
      typea: 1
    });
  },

  // 查询详情
  getFirmware(data) {
    return http.get({
      url: "/pc/firmwareVersionInfo/getFirmware",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 修改
  updateFirmware(data) {
    return http.post({
      url: "/pc/firmwareVersionInfo/updateFirmware",
      data: Object.assign(data),
      typea: 1
    });
  },
  // 删除
  delFirmware(data) {
    return http.delete({
      url: "/pc/firmwareVersionInfo/delFirmware",
      data: {
        ...data
      }
    });
  }
};

export default apis;
