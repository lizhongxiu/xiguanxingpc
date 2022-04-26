import http from "@/utils/request";

const apis = {
    //常见问题
    getQuestionList(data) {
        return http.get({
            url: "/pc/sysCommonQuestion/getQuestionList",
            data: {
                ...data
            },
            typea: 1
        });
    },
    getQuestion(data) {
        return http.get({
            url: "/pc/sysCommonQuestion/getQuestion",
            data: {
                ...data
            },
            typea: 1
        });
    },
    saveQuestion(data) {
        return http.post({
            url: "/pc/sysCommonQuestion/saveQuestion",
            data: {
                ...data
            },
            typea: 1
        });
    },
    delQuestion(data) {
        return http.delete({
            url: "/pc/sysCommonQuestion/delQuestion",
            data: {
                ...data
            },
            typea: 1
        });
    },
    //意见反馈
    getFeedBackSetList(data) {
        return http.get({
            url: "/pc/feedback/getFeedbackList",
            data: {
                ...data
            },
            typea: 1
        });
    },
    dispose(data) {
        return http.post({
            url: "/pc/feedback/dispose",
            data: {
                ...data
            },
            typea: 1
        });
    }
};
export default apis;