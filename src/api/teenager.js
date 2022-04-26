import http from "@/utils/request";

const apis = {
    //问题分析
    getQuestionAnalysisList(data) {
        return http.get({
            url: "/pc/questionAnalysis/getQuestionAnalysisList",
            data: {
                ...data
            },
            typea: 1
        });
    },
    getQuestionAnalysis(data) {
        return http.get({
            url: "/pc/questionAnalysis/getQuestionAnalysis",
            data: {
                ...data
            },
            typea: 1
        });
    },
    saveQuestionAnalysis(data) {
        return http.post({
            url: "/pc/questionAnalysis/saveQuestionAnalysis",
            data: {
                ...data
            },
            typea: 1
        });
    },
    delQuestionAnalysis(data) {
        return http.delete({
            url: "/pc/questionAnalysis/delQuestionAnalysis",
            data: {
                ...data
            },
            typea: 1
        });
    },
    //改良方案
    getImprovePlanList(data) {
        return http.get({
            url: "/pc/improvePlan/getImprovePlanList",
            data: {
                ...data
            },
            typea: 1
        });
    },
    getImprovePlan(data) {
        return http.get({
            url: "/pc/improvePlan/getImprovePlan",
            data: {
                ...data
            },
            typea: 1
        });
    },
    getQuestionCodes(data) {
        return http.get({
            url: "/pc/improvePlan/getQuestionCodes",
            data: {
                ...data
            },
            typea: 1
        });
    },
    saveImprovePlan(data) {
        return http.post({
            url: "/pc/improvePlan/saveImprovePlan",
            data: {
                ...data
            },
            typea: 1
        });
    },
    delImprovePlan(data) {
        return http.delete({
            url: "/pc/improvePlan/delImprovePlan",
            data: {
                ...data
            },
            typea: 1
        });
    },
    schoollistPage(data) {
        return http.get({
            url: "/pc/school/listPage",
            data,
            typea: 1
        });
    },
};

export default apis;