import http from "@/utils/request";

const apis = {
    // 查询系统消息列表
    getMessageList(page, data) {
        return http.get({
            url: "/pc/message/getSysMessageList",
            data: Object.assign(page, data)
        });
    }
};

export default apis;