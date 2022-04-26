<template>
  <div class="up">
    <el-upload
      :disabled="sirIf"
      class="avatar-uploader edit-form-banner"
      :action="$serverUrl + '/pc/common/uploadImage/'"
      :headers="headers"
      name="fileName"
      :show-file-list="false"
      :on-success="uploadBannerSuccess"
      :before-upload="beforeUploadBanner"
    >
      <img v-if="banner" :src="banner" class="avatar" />
      <div v-else class="upload-txt">
        <i class="avatar-uploader-icon iconfont icontupian"></i>
      </div>
    </el-upload>
    <p class="size">{{ size }}</p>
    <p class="edit-proposal" :class="[{ 'proposal-must': sirMust == 'true' }]">
      <span>{{ sirTitle }}</span>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
import { getStorage } from "@/utils/auth";

export default {
  props: {
    sirProps: {
      type: String,
      default: "",
    },
    sirTitle: {
      type: String,
      default: "",
    },
    sirMust: {
      type: [String, Boolean],
      default: "false",
    },
    sirUrl: {
      type: String,
      default: "",
    },
    sirIf: {
      type: [String, Boolean],
      default: false,
    },
    size: {
      type: String,
    },
  },

  data() {
    return {
      banner: this.sirUrl,
    };
  },
  computed: {
    headers() {
      return {
        Authorization: getStorage("token"), // 直接从本地获取token就行
      };
    },
  },
  mounted() {},
  methods: {
    // 自定义上传方法 未使用
    upload(options) {
      let formData = new FormData();
      formData.append("file", options.file);
      this.$api.Common.uploadImage({
        file: formData,
      })
        .then((res) => {
          console.log("res", res);
          // options.onSuccess({ fileId: res.fileId }) // 上传成功出现成功提示，同时把id传入
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 上传成功
    uploadBannerSuccess(res) {
      const data = {
        sirProps: this.sirProps,
        url: res.data,
      };
      this.banner = res.data;
      this.$emit("upSuccess", data);
    },
    // 上传前
    beforeUploadBanner(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG、PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style scoped lang="scss">
/deep/.el-upload.el-upload--text {
  height: 100px;
}
.up {
  display: flex;
  align-items: center;
}
.size {
  color: red;
  margin-left: 20px;
}
.edit-form-banner {
  width: 130px;
  height: 130px;
  line-height: 100px;
  text-align: center;
  border-radius: 3px;
  border: 1px dotted #d9d9d9;
  /deep/.el-upload--text {
    display: block;
  }
  .avatar {
    width: 130px;
    height: 130px;
    object-fit: cover;
  }
  .avatar-uploader-icon {
    font-size: 30px;
    color: #999999;
  }
}
.edit-proposal {
  position: relative;
  width: 177px;
  height: 20px;
  color: #333333;
  font-size: 14px;
  text-align: center;
  span {
    position: relative;
  }
}
.proposal-must {
  span:before {
    position: absolute;
    content: "*";
    color: #f04c60;
    left: -9px;
    top: -3px;
  }
}
</style>
