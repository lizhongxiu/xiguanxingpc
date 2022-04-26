import http from "@/utils/request";

const apis = {
  // 上传
  uploadImage(data) {
    return http.post({
      url: "/pc/common/uploadImage",
      data: {
        ...data
      },
      typea: 2
    });
  }
};

export default apis;
