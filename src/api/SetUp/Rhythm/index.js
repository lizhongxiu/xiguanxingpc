import http from "@/utils/request";

const apis = {
  // 查询节拍列表
  getBeatList(page, data) {
    return http.get({
      url: "/pc/backgroundMusicBeat/getBeatList",
      data: Object.assign(page, data)
    });
  },
  // 保存节拍
  saveBeat(data) {
    return http.post({
      url: "/pc/backgroundMusicBeat/saveBeat",
      data: Object.assign(data),
      typea: 1
    });
  },

  // 查询详情
  getBeat(data) {
    return http.get({
      url: "/pc/backgroundMusicBeat/getBeat",
      data: {
        ...data
      },
      typea: 1
    });
  },
  // 删除节拍
  delBeat(data) {
    return http.delete({
      url: "/pc/backgroundMusicBeat/delBeat",
      data: {
        ...data
      }
    });
  }
};

export default apis;
