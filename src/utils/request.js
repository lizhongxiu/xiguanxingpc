"use strict";
import QS from "qs";
import Axios from "axios";
// import url from "@/utils/server";
import utils from "@/utils/utils";
import toaster from "@/utils/toaster";
import store from "@/store/index";
import { MessageBox } from "element-ui";
// const baseurl = url.apiurl;

// const baseurl = "http://47.102.154.245:9990"; // 测试环境
const baseurl = "https://star.tohabit.com:9990"; // 正式环境

const BASTURL =
    process.env.VUE_APP_BASE_API === "production" ?
    baseurl :
    "/rope_skipping_webservice/";

console.log(BASTURL, "地址");
Axios.defaults.baseURL = BASTURL;
// http request 拦截器
Axios.interceptors.request.use(
    config => {
        // config.baseURL = baseurl;
        if (!config["params"]) {
            config["params"] = {};
        }
        config.params["token"] = store.state.user.token;
        config.headers["AUTHORIZATION"] = store.state.user.token;
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// 添加响应拦截器
Axios.interceptors.response.use(
    res => {
        // 对响应数据做点什么
        console.log(res, '拿到数据')
        switch (res.data.code) {
            case 200:
                return res.data;
            case 402:
                MessageBox.confirm(
                    `${res.data.msg}，可以取消继续留在该页面，或者重新登录`,
                    "确定登出", {
                        confirmButtonText: "重新登录",
                        cancelButtonText: "取消",
                        type: "warning"
                    }
                ).then(() => {
                    utils.delAllStorage();
                    utils.delAllSession();
                    location.reload(); // 为了重新实例化vue-router对象 避免bug
                });
                break;
            case undefined:
                return res;
            default:
                toaster.error("", res.data.msg, 1500);
                // return Promise.reject(res.data)
                return res.data;
        }
    },
    error => {
        // 如果需要通过服务端返回的数据在组件内进行判定，
        // 由于拦截器是reject的错误，并不能在组件中读取err信息，可以改reject为 resolve 并且返回err.response
        // 对响应错误做点什么
        let code = error.response.status; // 获取错误状态码
        let msg = error.response.data.msg; // 获取提示信息
        switch (code) {
            case 401:
                MessageBox.confirm(
                    `${msg}，可以取消继续留在该页面，或者重新登录`,
                    "确定登出", {
                        confirmButtonText: "重新登录",
                        cancelButtonText: "取消",
                        type: "warning"
                    }
                ).then(() => {
                    utils.delAllStorage();
                    utils.delAllSession();
                    location.reload(); // 为了重新实例化vue-router对象 避免bug
                });
                break;
            case undefined:
                toaster.error("网络异常", "", 1500);
                return Promise.reject(error);
            default:
                toaster.error("网络异常", "", 1500);
                return Promise.reject(error);
        }
    }
);
export default {
    get: option => {
        var options = {
            url: option.url,
            timeout: 10000,
            method: option.method || "get",
            params: option.data || {},
            success: option.succ || function() {},
            error: option.error || function() {}
        };
        return Axios.request(options);
    },
    post: option => {
        var options = {
            url: option.url,
            timeout: 1000000,
            headers: {
                "Content-Type": "application/ x - www - form - urlencoded; charset=utf - 8"
            },
            method: option.method || "post",
            data: option.data,
            success: option.succ || function() {},
            error: option.error || function() {}
        };
        if (option.data && option.typea == 1) {
            options.headers["content-Type"] = "application/json;charset=utf-8";
            options.beforeSend = function(xhr) {
                xhr.setRequestHeader("Test", "testheadervalue");
            };
        } else if (option.data && option.typeb == "excel") {
            options.responseType = "blob";
            options.data = QS.stringify(options.data);
        } else if (option.data && option.typea == 2) {
            options.headers["content-Type"] = "multipart/form-data";
        } else {
            options.data = QS.stringify(options.data);
        }
        return Axios.request(options);
    },
    delete: option => {
        var options = {
            url: option.url,
            timeout: 10000,
            method: option.method || "delete",
            params: option.data || {},
            success: option.succ || function() {},
            error: option.error || function() {}
        };
        return Axios.request(options);
    },
    put: option => {
        var options = {
            url: option.url,
            timeout: 10000,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            method: option.method || "PUT",
            params: option.data || {},
            success: option.succ || function() {},
            error: option.error || function() {}
        };
        if (option.data && option.typea == 1) {
            options.headers["content-Type"] = "application/json;charset=utf-8";
            options.data = QS.stringify(options.data);
        }
        return Axios.request(options);
    }
};