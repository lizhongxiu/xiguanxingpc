<template>
  <div class="up-box">
    <el-upload
      class="avatar-uploader"
      :action="$serverUrl + '/pc/common/uploadImage/'"
      :show-file-list="false"
      :on-success="upSuccess"
      :before-upload="upBefore"
      :headers="headers"
      name="fileName"
      :style="styles"
    >
      <img :style="styles" v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i :style="styles" v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <p v-if="isScale === false" class="up-prompt">
      尺寸：{{ imageWidth }}*{{ imageHeight }}
    </p>
    <p v-if="isScale === true" class="up-prompt">
      宽高：{{ imageWidth }}:{{ imageHeight }}
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
import { getStorage } from "@/utils/auth";

export default {
  props: {
    styles: {
      type: Object
    },
    imageUrl: {
      type: String,
      default: ""
    },
    upRule: {
      type: Boolean,
      default: true
    },
    imageWidth: {
      type: Number
    },
    imageHeight: {
      type: Number
    },
    size: {
      type: Number,
      default:1
    },
    isScale: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      banner: this.sirUrl
    };
  },
  computed: {
    headers() {
      return {
        Authorization: getStorage("token") // 直接从本地获取token就行
      };
    }
  },
  methods: {
    // 上传成功
    upSuccess(res) {
      if(res.code=="200"){
        this.$emit("setImage", res.data);
      }else {
        this.$message.error(res.msg)
      }
    },
    // 上传前
    upBefore(file) {
      // const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      // const isLtM = file.size / 1024 / 1024 < this.size;

      // if (!isJPG) {
      //   this.$message.error("图片只能是 JPG、PNG 格式!");
      // }
      // if (!isLtM) {
      //   this.$message.error(`图片大小不能超过 ${this.size}MB!`);
      // }
      // let _this = this;
      // let imgWidth = "";
      // let imgHight = "";
      // const isSize = new Promise(function(resolve, reject) {
      //   let width = _this.imageWidth;
      //   let height = _this.imageHeight;
      //   let _URL = window.URL || window.webkitURL;
      //   let img = new Image();
      //   img.onload = function() {
      //     imgWidth = img.width;
      //     imgHight = img.height;
      //     if (_this.isScale === true) {
      //       let valid = img.width / img.height == width / height;
      //       valid ? resolve() : reject();
      //     } else {
      //       let valid = img.width == width && img.height == height;
      //       valid ? resolve() : reject();
      //     }
      //   };
      //   img.src = _URL.createObjectURL(file);
      // }).then(
      //   () => {
      //     return file;
      //   },
      //   () => {
      //     let message = "";
      //     if (_this.isScale === true) {
      //       message = `上传文件的图片大小不合符标准,宽:高需要为${_this.imageWidth}:${_this.imageHeight}。当前上传图片的宽:高：${imgWidth}:${imgHight}`;
      //     } else {
      //       message = `上传文件的图片大小不合符标准,宽需要为${_this.imageWidth}px，高需要为${_this.imageHeight}px。当前上传图片的宽高分别为：${imgWidth}px和${imgHight}px`;
      //     }
      //     _this.$message.error({
      //       message: message,
      //       btn: false
      //     });
      //     return Promise.reject();
      //   }
      // );
      // return isSize;
    }
  }
};
</script>

<style scoped lang="scss">
.up-box {
  display: flex;
  align-items: center;
  .up-prompt {
    margin-left: 30px;
    color: red;
  }
}
.avatar-uploader-icon {
  text-align: center;
  border: solid 1px #dddddd;
}
</style>
