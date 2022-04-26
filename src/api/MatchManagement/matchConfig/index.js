import http from "@/utils/request";

const apis = {
    // 获取区域信息
    getAreaList(data) {
        return http.post({
            url: '/pc/competitionArea/listPage',
            data,
            typea: 1
        });
    },
    // 添加区域信息
    addAreaList(data) {
        return http.post({
            url: '/pc/competitionArea/add',
            data,
            typea: 1
        });
    },
    // 更新区域信息
    updateAreaList(data) {
        return http.post({
            url: '/pc/competitionArea/update',
            data: {...data },
            typea: 1
        });
    },
    // 删除区域信息
    deleteAreaList(data) {
        return http.post({
            url: '/pc/competitionArea/delete',
            data: {...data },
            typea: 1
        });
    },
    //根据区域id获取赛点列表
    getSiteList(data) {
        return http.post({
            url: '/pc/competitionSite/listByAreaId',
            data: {...data },
            typea: 1
        });
    },


    //根据区域id获取赛点列表
    deleteSite(data) {
        return http.post({
            url: '/pc/competitionSite/delete',
            data: {...data },
            typea: 1
        });
    },
    // 添加赛点信息
    addSite(data) {
        return http.post({
            url: '/pc/competitionSite/add',
            data: {...data },
            typea: 1
        });
    },
    // 更新赛点信息
    updateSite(data) {
        return http.post({
            url: '/pc/competitionSite/update',
            data: {...data },
            typea: 1
        });
    },
    // 获取赛点申请信息
    getSiteApply(data) {
        return http.post({
            url: '/pc/competitionSiteApply/listPage',
            data: {...data },
            typea: 1
        });
    },
    // 删除赛点申请信息
    deleteSiteApply(data) {
        return http.post({
            url: '/pc/competitionSiteApply/delete',
            data,
            typea: 1
        });
    },
    // 添加赛点申请信息
    addSiteApply(data) {
        return http.post({
            url: '/pc/competitionSiteApply/add',
            data,
            typea: 1
        });
    },
    // 更新赛点申请信息
    updateSiteApply(data) {
        return http.post({
            url: '/pc/competitionSiteApply/update',
            data,
            typea: 1
        });
    },
    // 查询所有组别
    getGroupList() {
        return http.post({
            url: '/pc/competition/group/listAll',
            typea: 1
        });
    },
    // 新增组别
    addGroup(data) {
        return http.post({
            url: '/pc/competition/group/add',
            data,
            typea: 1
        });
    },
    // 修改组别
    updateGroup(data) {
        return http.post({
            url: '/pc/competition/group/update',
            data,
            typea: 1
        });
    },
    // 修改组别
    deleteGroup(data) {
        return http.post({
            url: '/pc/competition/group/delete',
            data,
            typea: 1
        });
    },
    // 获取赛事列表
    getMatchList(data) {
        return http.post({
            url: '/pc/competition/listPage',
            data,
            typea: 1
        });
    },
    // 根据id查询赛事详情
    getMatchDetail(data) {
        return http.post({
            url: '/pc/competition/detail',
            data,
            typea: 1
        });
    },
    // 添加赛事
    addMatch(data) {
        return http.post({
            url: '/pc/competition/add',
            data,
            typea: 1
        });
    },
    // 添加赛事
    updateMatch(data) {
        return http.post({
            url: '/pc/competition/update',
            data,
            typea: 1
        });
    },
    // 删除赛事
    deleteMatch(data) {
        return http.post({
            url: '/pc/competition/delete',
            data,
            typea: 1
        });
    },
    // 根据赛事id查询该赛事的阶段列表
    getStageList(data) {
        return http.post({
            url: '/pc/competition/stage/list',
            data,
            typea: 1
        });
    },
    // 新增阶段
    addStage(data) {
        return http.post({
            url: '/pc/competition/stage/add',
            data,
            typea: 1
        });
    },
    // 修改阶段
    updateStage(data) {
        return http.post({
            url: '/pc/competition/stage/update',
            data,
            typea: 1
        });
    },
    // 删除阶段
    deleteStaeg(data) {
        return http.post({
            url: '/pc/competition/stage/delete',
            data,
            typea: 1
        });
    },
    // 获取阶段中赛点列表
    getStageSiteList(data) {
        return http.post({
            url: '/pc/competitionStageSite/listByStageId',
            data,
            typea: 1
        });
    },
    // 添加或更新赛事赛点信息
    addOrUpdateStageSite(data) {
        return http.post({
            url: '/pc/competitionStageSite/addOrUpdate',
            data,
            typea: 1
        });
    },
    // 删除当前赛事的某个赛点信息
    deleteStageSite(data) {
        return http.post({
            url: '/pc/competitionStageSite/delete',
            data,
            typea: 1
        });
    },
    // 删除当前赛事阶段中所有的赛点信息
    deleteAllStageSite(data) {
        return http.post({
            url: '/pc/competitionStageSite/deleteAllByStageId',
            data,
            typea: 1
        });
    },
    // 查询赛事的所有组别
    getMatchGroupList(data) {
        return http.post({
            url: '/pc/competition/groupInfo/listByCompetitionId',
            data,
            typea: 1
        });
    },
    // 指定组别
    addMatchGroup(data) {
        return http.post({
            url: '/pc/competition/groupInfo/add',
            data,
            typea: 1
        });
    },
    // 修改组别
    updateMatchGroup(data) {
        return http.post({
            url: '/pc/competition/groupInfo/update',
            data,
            typea: 1
        });
    },
    // 移除组别
    deleteMatchGroup(data) {
        return http.post({
            url: '/pc/competition/groupInfo/delete',
            data,
            typea: 1
        });
    },
    // 查看成绩
    getMatchScore(page, data) {
        return http.post({
            url: '/pc/competition/score/listVoPage',
            data: Object.assign(page, data),
            typea: 1
        });
    },
    getMacBindSignUpList(page, data) {
        return http.post({
            url: '/pc/competition/score/getMacBindSignUpList',
            data: Object.assign(page, data),
            typea: 1
        });
    },

    // 获取电子证书列表
    getMatchCertList(page, data) {
        return http.post({
            url: '/pc/competitionCert/listVoPage',
            data: Object.assign(page, data),
            typea: 1
        });
    },
    // 添加证书图片
    addCert(data) {
        return http.post({
            url: '/pc/competitionCert/add',
            data,
            typea: 1
        });
    },
    // 修改证书
    updateCert(data) {
        return http.post({
            url: '/pc/competitionCert/update',
            data,
            typea: 1
        });
    },
    // 删除证书
    deleteCert(data) {
        return http.post({
            url: '/pc/competitionCert/delete',
            data,
            typea: 1
        });
    },
    // 执行自动晋级
    autoRise(data) {
        return http.post({
            url: '/pc/competitionRise/autoRise',
            data,
            typea: 1
        });
    },
    // 晋级预览
    autoRisePreview(data) {
        return http.post({
            url: '/pc/competitionRise/autoRisePreview',
            data,
            typea: 1
        });
    },
    // 晋级管理列表
    getMatchRiseList(paginations, data) {
        return http.post({
            url: '/pc/competitionRise/listVoPage',
            data: Object.assign(paginations, data),
            typea: 1
        });
    },
    // 取消晋级资格
    deleteMatchRise(data) {
        return http.post({
            url: '/pc/competitionRise/delete',
            data,
            typea: 1
        });
    },
    // 添加晋级
    addMatchRise(data) {
        return http.post({
            url: '/pc/competitionRise/add',
            data,
            typea: 1
        });
    },
    // 修改晋级
    updateMatchRise(data) {
        return http.post({
            url: '/pc/competitionRise/update',
            data,
            typea: 1
        });
    },
    // 根据阶段列表获取晋级人数
    getStageRiseList(data) {
        return http.post({
            url: '/pc/competitionStageRise/listByStageId',
            data,
            typea: 1
        });
    },
    // 新增晋级人数设定
    addStageRise(data) {
        return http.post({
            url: '/pc/competitionStageRise/add',
            data,
            typea: 1
        });
    },
    // 更新晋级人数设定
    updateStageRise(data) {
        return http.post({
            url: '/pc/competitionStageRise/update',
            data,
            typea: 1
        });
    },
    // 删除晋级人数设定
    deleteStageRise(data) {
        return http.post({
            url: '/pc/competitionStageRise/delete',
            data,
            typea: 1
        });
    },
    // 按阶段删除删除晋级人数设定
    deleteAllStageRise(data) {
        return http.post({
            url: '/pc/competitionStageRise/deleteAllByStageId',
            data,
            typea: 1
        });
    },
    // 获取轻量赛事列表
    getSmallMatchList() {
        return http.post({
            url: '/pc/competition/listName',
            typea: 1
        });
    },
    // 获取决赛阶段成绩列表
    getLastStageScoreList(competitionId, groupId) {
        return http.post({
            url: '/pc/competition/score/listLastStageScoreVoPage',
            data: {
                competitionId,
                groupId,
                pageNum: 1,
                pageSize: 10000
            },
            typea: 1
        });
    },
    // 查询小队列表
    getSmallTeamlist(data) {
        return http.post({
            url: '/pc/team/listPage',
            data,
            typea: 1
        });
    },
    // 加入小队申请记录
    getJoinApplySmallTeamlist(data) {
        return http.post({
            url: '/pc/team/joinApply/listVoPage',
            data,
            typea: 1
        });
    },
    // 查询队员列表
    getSmallTeamMemberlist(data) {
        return http.post({
            url: '/pc/team/member/listVoPage',
            data,
            typea: 1
        });
    },
};
export default apis;