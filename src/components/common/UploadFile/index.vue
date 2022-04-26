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
    >
      <p class="fileUrl" v-if="fileUrl">{{ fileUrl }}</p>
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <p class="up-prompt">{{ upRule }}</p>
  </div>
</template>

<script type="text/ecmascript-6">
import { getStorage } from "@/utils/auth";

export default {
  props: {
    fileUrl: {
      type: String,
      default: ""
    },
    upRule: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      loading : null
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
      // this.loading.close()
      if(res.code==200){
        this.$emit("setFile", res.data);
      }else {
        this.$message.error(res.msg)
      }
    },
    // 上传前
    upBefore(file) {
      let name=(file.name).split(".")
      let nameLength=name.length
      const isJPG = name[nameLength-1] === 'mp3';
      // const isJPG = file.type === 'audio/mp3'||file.type === 'audio/mpeg';
      if (!isJPG) {
        this.$message.error(`只能上传 MP3 格式!当前格式${name[nameLength-1]}`);
        return false
      }
      // this.loading=this.$loading({
      //     lock: true,
      //     text: '上传中',
      //     spinner: 'el-icon-loading',
      //     background: 'rgba(0, 0, 0, 0.7)'
      //   });
      // console.log(file)
      return isJPG;
    }
  }
};
</script>

<style scoped lang="scss">
.up-box {
  display: flex;
  align-items: center;
  justify-content: center;
  .up-prompt {
    margin-left: 30px;
    color: red;
  }
}
.avatar-uploader {
  width: 400px;
  height: 60px;
  border: solid 1px #dddddd;
  display: flex;
  align-items: center;
}
.el-upload {
  width: 100%;
}
.avatar-uploader-icon {
  width: 400px;
  display: block;
  line-height: 60px;
  font-size: 30px;
}
.fileUrl {
  font-size: 12px;
  text-align: left;
}
</style>
