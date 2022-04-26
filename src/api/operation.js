import http from "@/utils/request";

const apis = {
  //任务管理
  getTaskInfoList(data) {
    return http.get({
      url: "/pc/taskInfo/getTaskInfoList",
      data: {
        ...data
      },
      typea: 1
    });
  },
  getTaskInfo(data) {
    return http.get({
      url: "/pc/taskInfo/getTaskInfo",
      data: {
        ...data
      },
      typea: 1
    });
  },
  saveTaskInfo(data) {
    return http.post({
      url: "/pc/taskInfo/saveTaskInfo",
      data: {
        ...data
      },
      typea: 1
    });
  },
  upOrDown(data) {
    return http.post({
      url: "/pc/taskInfo/upOrDown",
      data: {
        ...data
      },
      typea: 1
    });
  },
  delTaskInfo(data) {
    return http.delete({
      url: "/pc/taskInfo/delTaskInfo",
      data: {
        ...data
      },
      typea: 1
    });
  },
  //能量等级
  getEnergyLevelList(data) {
    return http.get({
      url: "/pc/energyLevelInfo/getEnergyLevelList",
      data: {
        ...data
      },
      typea: 1
    });
  },
  getEnergyLevel(data) {
    return http.get({
      url: "/pc/energyLevelInfo/getEnergyLevel",
      data: {
        ...data
      },
      typea: 1
    });
  },
  saveEnergyLevel(data) {
    return http.post({
      url: "/pc/energyLevelInfo/saveEnergyLevel",
      data: {
        ...data
      },
      typea: 1
    });
  },
  delEnergyLevel(data) {
    return http.delete({
      url: "/pc/energyLevelInfo/delEnergyLevel",
      data: {
        ...data
      },
      typea: 1
    });
  },
  //能量规则
  getEnergyRuleSetList(data) {
    return http.get({
      url: "/pc/energyRuleSet/getEnergyRuleSetList",
      data: {
        ...data
      },
      typea: 1
    });
  },
  getEnergyRuleSet(data) {
    return http.get({
      url: "/pc/energyRuleSet/getEnergyRuleSet",
      data: {
        ...data
      },
      typea: 1
    });
  },
  saveEnergyRuleSet(data) {
    return http.post({
      url: "/pc/energyRuleSet/saveEnergyRuleSet",
      data: {
        ...data
      },
      typea: 1
    });
  },
  delEnergyRuleSet(data) {
    return http.delete({
      url: "/pc/energyRuleSet/delEnergyRuleSet",
      data: {
        ...data
      },
      typea: 1
    });
  },
  //PK等级
  getPkLevelInfoList(data) {
    return http.get({
      url: "/pc/pkLevelInfo/getPkLevelInfoList",
      data: {
        ...data
      },
      typea: 1
    });
  },
  getPkLevelInfo(data) {
    return http.get({
      url: "/pc/pkLevelInfo/getPkLevelInfo",
      data: {
        ...data
      },
      typea: 1
    });
  },
  savePkLevelInfo(data) {
    return http.post({
      url: "/pc/pkLevelInfo/savePkLevelInfo",
      data: {
        ...data
      },
      typea: 1
    });
  },
  delPkLevelInfo(data) {
    return http.delete({
      url: "/pc/pkLevelInfo/delPkLevelInfo",
      data: {
        ...data
      },
      typea: 1
    });
  },
  //PK获取规则
  getPkRuleSetList(data) {
    return http.get({
      url: "/pc/pkRuleSet/getPkRuleSetList",
      data: {
        ...data
      },
      typea: 1
    });
  },
  getPkRuleSet(data) {
    return http.get({
      url: "/pc/pkRuleSet/getPkRuleSet",
      data: {
        ...data
      },
      typea: 1
    });
  },
  savePkRuleSet(data) {
    return http.post({
      url: "/pc/pkRuleSet/savePkRuleSet",
      data: {
        ...data
      },
      typea: 1
    });
  },
  delPkRuleSet(data) {
    return http.delete({
      url: "/pc/pkRuleSet/delPkRuleSet",
      data: {
        ...data
      },
      typea: 1
    });
  },
  //PK挑战场
  getPkChallengeInfoList(data) {
    return http.get({
      url: "/pc/pkChallengeInfo/getPkChallengeInfoList",
      data: {
        ...data
      },
      typea: 1
    });
  },
  getPkChallengeInfo(data) {
    return http.get({
      url: "/pc/pkChallengeInfo/getPkChallengeInfo",
      data: {
        ...data
      },
      typea: 1
    });
  },
  savePkChallengeInfo(data) {
    return http.post({
      url: "/pc/pkChallengeInfo/savePkChallengeInfo",
      data: {
        ...data
      },
      typea: 1
    });
  },
  delPkChallengeInfo(data) {
    return http.delete({
      url: "/pc/pkChallengeInfo/delPkChallengeInfo",
      data: {
        ...data
      },
      typea: 1
    });
  },
  //荣誉证书
  getHonorList(data) {
    return http.get({
      url: "/pc/honorCertificateInfo/getHonorList",
      data: {
        ...data
      },
      typea: 1
    });
  },
  getHonor(data) {
    return http.get({
      url: "/pc/honorCertificateInfo/getHonor",
      data: {
        ...data
      },
      typea: 1
    });
  },
  saveHonor(data) {
    return http.post({
      url: "/pc/honorCertificateInfo/saveHonor",
      data: {
        ...data
      },
      typea: 1
    });
  },
  delHonor(data) {
    return http.delete({
      url: "/pc/honorCertificateInfo/delHonor",
      data: {
        ...data
      },
      typea: 1
    });
  },
  //勋章成就
  getMedalList(data) {
    return http.get({
      url: "/pc/medalAchievementInfo/getMedalList",
      data: {
        ...data
      },
      typea: 1
    });
  },
  getMedal(data) {
    return http.get({
      url: "/pc/medalAchievementInfo/getMedal",
      data: {
        ...data
      },
      typea: 1
    });
  },
  saveMedal(data) {
    return http.post({
      url: "/pc/medalAchievementInfo/saveMedal",
      data: {
        ...data
      },
      typea: 1
    });
  },
  delMedal(data) {
    return http.delete({
      url: "/pc/medalAchievementInfo/delMedal",
      data: {
        ...data
      },
      typea: 1
    });
  },
  //背景音乐
  getMusicList(data) {
    return http.get({
      url: "/pc/backgroundMusicInfo/getMusicList",
      data: {
        ...data
      },
      typea: 1
    });
  },
  getMusic(data) {
    return http.get({
      url: "/pc/backgroundMusicInfo/getMusic",
      data: {
        ...data
      },
      typea: 1
    });
  },
  saveMusic(data) {
    return http.post({
      url: "/pc/backgroundMusicInfo/saveMusic",
      data: {
        ...data
      },
      typea: 1
    });
  },
  delMusic(data) {
    return http.delete({
      url: "/pc/backgroundMusicInfo/delMusic",
      data: {
        ...data
      },
      typea: 1
    });
  },
  //参数设置
  getSet(data) {
    return http.get({
      url: "/pc/sysSet/getSet",
      data: {
        ...data
      },
      typea: 1
    });
  },
  saveSet(data) {
    return http.post({
      url: "/pc/sysSet/saveSet",
      data: {
        ...data
      },
      typea: 1
    });
  }
};

export default apis;
