<template>
  <div class="up">
    <el-upload
      :disabled="sirIf"
      :action="$serverUrl + '/pc/common/uploadImage/'"
      :headers="headers"
      :limit="parseInt(limit)"
      name="fileName"
      list-type="picture-card"
      :file-list="urlList"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-success="uploadBannerSuccess"
      :before-upload="beforeUploadBanner"
      :on-exceed="onExceed"
      :class="{ 'avatar-uploader-cover': show }"
    >
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
    <p class="up_text">{{ size }}</p>
  </div>
</template>

<script type="text/ecmascript-6">
import { getStorage } from "@/utils/auth";

export default {
  props: {
    sirProps: {
      type: [Object, String],
      default: "",
    },
    // 图片列表
    sirUrl: {
      type: [Object, Array],
      default: () => [],
    },
    // 上传数量
    limit: { type: [Number, String], default: 2 },
    //   是否只读
    sirIf: {
      type: [Boolean],
      default: false,
    },
    size: {
      type: String,
    },
  },

  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      urlList: [],
      arrList: this.sirUrl,
      show: false,
    };
  },
  computed: {
    headers() {
      return {
        Authorization: getStorage("token"), // 直接从本地获取token就行
      };
    },
  },
  created() {
    // this.urlList
    let urlCon = [];
    this.sirUrl.forEach((val) => {
      let item = {
        url: val,
      };
      urlCon.push(item);
    });
    this.urlList = urlCon;
  },
  mounted() {},
  methods: {
    // 移除图片
    handleRemove(file, fileList) {},
    // 点击文件列表中已上传的文件时的钩子
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 超出最大上传个数
    onExceed() {
      this.$message({
        showClose: true,
        message: "超出最大上传数量",
        type: "error",
      });
    },
    // 上传成功
    uploadBannerSuccess(res, file, fileList) {
      this.arrList = fileList.map((val) => {
        return val.response.data;
      });
      this.$emit("upSuccess", this.arrList);
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
  .up_text {
    color: red;
    margin-left: 20px;
  }
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
