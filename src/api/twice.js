import http from "@/utils/request";

const apis = {
    // 新增教练
    addTrainerInfo(data) {
        return http.post({
            url: "/pc/schCoachClass/addCoach",
            data,
            typea: 1
        });
    },
    //编辑教练
    updateTrainerInfo(data) {
        return http.post({
            url: "/pc/schCoachClass/updateCoach",
            data,
            typea: 1
        });
    },
    //教练分页查询
    trainerPageList(data) {
        return http.get({
            url: "/pc/schCoachClass/pageCoach",
            data,
            typea: 1
        });
    },
    //教练删除
    deleteTrainerInfo(data) {
        return http.post({
            url: "/pc/schCoachClass/deleteCoach",
            data,
            typea: 1
        });
    },
    //教练禁用启用

    updateStatus(data) {
        return http.post({
            url: "/pc/schSysUser/updateStatus",
            data,
            typea: 1
        });
    },

    //班级分页查询
    pageSchClass(data) {
        return http.get({
            url: "/pc/schClass/pageSchClass",
            data,
            typea: 1
        });
    },

    // 新增班级
    addSchClass(data) {
        return http.post({
            url: "/pc/schClass/addSchClass",
            data,
            typea: 1
        });
    },
    // 编辑班级
    updateSchClass(data) {
        return http.post({
            url: "/pc/schClass/updateSchClass",
            data,
            typea: 1
        });
    },

    // 删除班级
    deleteSchClass(data) {
        return http.post({
            url: "/pc/schClass/deleteSchClass",
            data,
            typea: 1
        });
    },

    //学生分页查询
    pageSchStudent(data) {
        return http.get({
            url: "/pc/schStudent/pageSchStudent",
            data,
            typea: 1
        });
    },

    // 新增学生
    addSchStudent(data) {
        return http.post({
            url: "/pc/schStudent/addSchStudent",
            data,
            typea: 1
        });
    },

    // 编辑学生
    updateSchStudent(data) {
        return http.post({
            url: "/pc/schStudent/updateSchStudent",
            data,
            typea: 1
        });
    },

    // 删除班级
    deleteSchStudent(data) {
        return http.post({
            url: "/pc/schStudent/deleteSchStudent",
            data,
            typea: 1
        });
    },

    //获取年级
    selectGrade(data) {
        return http.get({
            url: "/pc/schClass/selectGrade",
            data,
            typea: 1
        });
    },
    //获取班级
    selectClass(data) {
        return http.get({
            url: "/pc/schClass/selectClass",
            data,
            typea: 1
        });
    },

    // 获取年级分页

    pageGrade(data) {
        return http.get({
            url: "/pc/schGrade/pageGrade",
            data,
            typea: 1
        });
    },

    // 新增年级

    addGrade(data) {
        return http.post({
            url: "/pc/schGrade/addGrade?gradeName=" + data.gradeName,
            typea: 1
        });
    },
    // 编辑年级
    updateGrade(data) {
        return http.post({
            url: "/pc/schGrade/updateGrade",
            data,
            typea: 1
        });
    },

    // 年级
    deleteGrade(data) {
        return http.post({
            url: "/pc/schGrade/deleteGrade",
            data,
            typea: 1
        });
    },

    //获取分别信息
    PageTrainerClassInfo(data) {
        return http.get({
            url: "/pc/schCoachClass/coachClassPage",
            data,
            typea: 1
        });
    },

    // 号码绑定列表查询

    pageMacBindInfo(data) {
        return http.get({
            url: "/pc/macBindInfo/pageMacBindInfo",
            data,
            typea: 1
        });
    },
    // 号码新增绑定
    addMacBindInfo(data) {
        return http.post({
            url: "/pc/macBindInfo/addMacBindInfo",
            data,
            typea: 1
        });
    },

    // 号码新增绑定
    updateMacBindInfo(data) {
        return http.post({
            url: "/pc/macBindInfo/updateMacBindInfo",
            data,
            typea: 1
        });
    },

    // 号码绑定删除
    deleteMacBindInfo(data) {
        return http.post({
            url: "/pc/macBindInfo/deleteMacBindInfo",
            data,
            typea: 1
        });
    },

    // 分班管理的保存

    AddTrainerClassInfo(data) {
        return http.post({
            url: "/pc/schCoachClass/manageCoachClass",
            data,
            typea: 1
        });
    },

    // 通过学生id查询学生信息
    selectById(id) {
        return http.get({
            url: "/pc/userInfo/getUserDetail?userId=" + id,
            typea: 1
        });
    },
    getUserTrainingRecordList(data) {
        return http.get({
            url: "/pc/userInfo/getUserTrainingRecordList?userId=" + data.userId + '&startDate=' + data.startDate + '&endDate=' + data.endDate + '&video=' + data.video,
            typea: 1
        });
    },

    // 学生训练数据统计
    trainDate(data) {
        return http.get({
            url: "/pc/userInfo/getSkipStatistics?userId=" + data.id + '&video=' + data.video,
            typea: 1
        });
    },
    // 训练记录分页查询
    pageTrainData(data) {
        return http.get({
            url: "/pc/schStudent/pageTrainData",
            data,
            typea: 1
        });
    },

    // 首页姿态统计
    statisticScore(data) {
        return http.get({
            url: "/pc/trainStatistic/getSkipPostureStatistic",
            data,
            typea: 1
        });
    },

    // 分段人数统计
    subsectionNumber(data) {
        return http.get({
            url: "/pc/trainStatistic/getSegmentedPopulationStatistic?flag=" + data.flag,
            typea: 1
        });
    },
    listStageByCompetitionId(data) {
        return http.post({
            url: "/pc/competition/groupInfo/listStageByCompetitionId",
            data,
            typea: 1
        });
    },

    avgSpeedNumberAll(data) {
        return http.get({
            url: "/pc/trainStatistic/avgSpeedNumberAll",
            data,
            typea: 1
        });
    },

    // 首页生成报告
    exportReport(data) {
        return http.get({
            url: "/pc/trainStatistic/exportReport?currUserId=" +
                data.currUserId +
                "&ownerName=" +
                data.ownerName +
                "&schoolId=" +
                data.schoolId +
                "&imageUrl=" +
                data.imageUrl,
            typea: 1
        });
    },

    // 个人生成报告
    gerenxrtReport(data) {
        return http.get({
            url: "/pc/trainStatistic/userExportReport?userId=" +
                data.userId +
                "&ownerName=" +
                data.ownerName,
            responseType: "blob",
            typea: 1
        });
    },

    avgSpeedNumWM(data) {
        return http.get({
            url: "/pc/trainStatistic/avgSpeedNumWM",
            data,
            typea: 1
        });
    },
    //  学生姿态分析报告
    StudentReport(data) {
        return http.get({
            url: "/pc/trainStatistic/getUserReport?userId=" + data.userId,
            typea: 1
        });
    },

    //  学生姿态分析报告
    getSchoolReport(data) {
        return http.get({
            url: "/pc/trainStatistic/getSchoolReport?schoolId=" + data.schoolId,
            typea: 1
        });
    },

    //个人姿态统计
    attitudeDate(id) {
        return http.get({
            url: "/pc/schStudent/getAttitudeDetail?userId=" + id,
            typea: 1
        });
    },

    // 上传图片
    uploadImageFile(data) {
        return http.post({
            url: "/pc/common/uploadImage/",
            data,
            typea: 1
        });
    },

    dateDetail(data) {
        return http.get({
            url: "/pc/trainStatistic/getAllAvgSkipDetail?flag=" +
                data.flag +
                "&classIds=" +
                data.classIds,
            typea: 1
        });
    },

    pageDateDetail(data) {
        return http.get({
            url: "/pc/trainStatistic/getSkipDetailData?flag=" +
                data.flag +
                "&classIds=" +
                data.classIds +
                "&pageNo=" +
                data.pageNo +
                "&pageSize=" +
                data.pageSize,
            typea: 1
        });
    },

    selectClassByUser(data) {
        return http.get({
            url: "/pc/trainStatistic/selectClassByUser",
            typea: 1
        });
    },

    // 导出
    downExcel(data) {
        return http.get({
            url: "/pc/trainStatistic/downExcel?flag=" +
                data.flag +
                "&classIds=" +
                data.classIds +
                "&pageNo=" +
                data.pageNo +
                "&pageSize=" +
                data.pageSize,
            responseType: "blob",
            typea: 1
        });
    }
};

export default apis;