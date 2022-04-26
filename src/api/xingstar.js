import http from "@/utils/request";
const apis = {

    schoollistPage(data) {
        return http.get({
            url: "/pc/school/listPage",
            data,
            typea: 1
        });
    },

    schoolSave(data) {
        return http.post({
            url: "/pc/school/save",
            data,
            typea: 1
        });
    },
    schoolEdit(data) {
        return http.post({
            url: "/pc/school/edit",
            data,
            typea: 1
        });
    },

    schoolRemove(data) {
        return http.post({
            url: "/pc/school/remove",
            data,
            typea: 1
        });
    },

    schoolMasterlistPage(data) {
        return http.get({
            url: "/pc/schoolMaster/listPage",
            data,
            typea: 1
        });
    },
    schoolMasterSave(data) {
        return http.post({
            url: "/pc/schoolMaster/save",
            data,
            typea: 1
        });
    },
    schoolMasterEdit(data) {
        return http.post({
            url: "/pc/schoolMaster/edit",
            data,
            typea: 1
        });
    },

    schoolMasterRemove(data) {
        return http.post({
            url: "/pc/schoolMaster/remove",
            data,
            typea: 1
        });
    },

    getAddSchoolData(data) {
        return http.get({
            url: "/pc/homePage/getAddSchoolData",
            data,
            typea: 1
        });
    },
    getAddStudentData(data) {
        return http.get({
            url: "/pc/homePage/getAddStudentData",
            data,
            typea: 1
        });
    },

    getAddTeacherData(data) {
        return http.get({
            url: "/pc/homePage/getAddTeacherData",
            data,
            typea: 1
        });
    },

    getMacBindNumber(data) {
        return http.get({
            url: "/pc/homePage/getMacBindNumber",
            data,
            typea: 1
        });
    },

    getAddUserDataNumber(data) {
        return http.get({
            url: "/pc/homePage/getAddUserDataNumber",
            data,
            typea: 1
        });
    },
    getUserActivity(data) {
        return http.get({
            url: "/pc/homePage/getUserActivity",
            data,
            typea: 1
        });
    },

    getUserAgeScatter(data) {
        return http.get({
            url: "/pc/homePage/getUserAgeScatter",
            data,
            typea: 1
        });
    },

    getUserSexScatterResult(data) {
        return http.get({
            url: "/pc/homePage/getUserSexScatterResult",
            data,
            typea: 1
        });
    },

    listCoachPage(data) {
        return http.get({
            url: "/pc/schoolMaster/listCoachPage",
            data,
            typea: 1
        });
    },

    getSchoolDetail(data) {
        return http.get({
            url: "/pc/homePage/getSchoolDetail",
            data,
            typea: 1
        });
    },


};
export default apis;