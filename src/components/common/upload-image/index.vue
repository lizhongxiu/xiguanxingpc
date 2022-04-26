<template>
  <div class="img-upload">
    <el-upload
      ref="upload"
      name="fileName"
      :action="$serverUrl + '/pc/common/uploadImage/'"
      list-type="picture-card"
      :limit="imgCountLimit"
      :on-exceed="limitTip"
      :headers="headers"
      :on-success="upSuccess"
      :before-upload="beforeUploadImg"
      :on-change="changeImg"
      :on-remove="removeImg"
      :on-preview="onClickImg"
    >
      <i class="el-icon-plus"></i>
      <div style="margin-top: 0;height: 28px" class="el-upload__tip" slot="tip">
        建议图片尺寸: <span style="color: red">1125*350</span>
      </div>
      <div style="margin-top: 0;height: 28px" class="el-upload__tip" slot="tip">
        只支持jpg、png、gif格式的图片，每张图片不大于4M！
      </div>
    </el-upload>
    <el-image
      v-if="type === 'view'"
      :style="{ width: width + 'px', height: height + 'px' }"
      :src="imageUrl"
      @click="onClickImg(img)"
    >
    </el-image>
  </div>
</template>

<script>
import { getStorage } from "@/utils/auth";

export default {
  props: {
    width: {
      type: Number,
      default: 146
    },
    height: {
      type: Number,
      default: 146
    },
    imgCountLimit: {
      // 最多上传9张图片
      type: Number,
      default: 9
    },
    imageUrl: {
      type: String,
      default: ""
    },
    imgSizeLimit: {
      // 每张图片不超过2m
      type: Number,
      default: 4
    },
    fontSize: {
      type: String,
      default: "12px"
    }
  },
  data() {
    return {
      type: 0, //0add，1view
      imgList: [],
      imgUrl: "",
      imageName: "",
      deleteFileNames: [],
      uploadForm: null
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
    init(imgList = [], type = "add") {
      this.type = type;
      console.log(imgList, "imgList");
      this.deleteFileNames = [];
    },
    //上限提示
    limitTip() {
      this.$message.error("最多上传" + this.imgCountLimit + "张图片");
    },
    // 上传成功
    upSuccess(res, file) {
      console.log(res, "res11111111111111111111");
      this.$emit("setImage", res.data, file);
    },
    changeImg(fileRaw, fileList) {
      console.log(fileRaw);
      const file = fileRaw.raw;
      if (
        file.type !== "image/jpg" &&
        file.type !== "image/jpeg" &&
        file.type !== "image/png" &&
        file.type !== "image/gif"
      ) {
        this.$message.error("只支持jpg、png、gif格式的图片！");
        fileList.pop();
        this.imgList = fileList;
      } else if (file.size / 1024 / 1024 > this.imgSizeLimit) {
        this.$message.error(`图片大小不能超过${this.imgSizeLimit}M`);
        fileList.pop();
        this.imgList = fileList;
      } else {
        // this.imgList.push(fileRaw)
      }
      console.log("changeImg");
      console.log("fileList", fileList);
      console.log("imgList", this.imgList);
    },
    removeImg(file) {
      this.$emit("removeImage", file);
      // console.log(fileList)
      // console.log(file)
      // if (file.status === 'success') {
      //   this.deleteFileNames.push(file.name)
      // }
      // this.imgList = fileList
      // console.log('removeImg')
      // console.log('deleteFileNames', this.deleteFileNames)
      // console.log('imgList', this.imgList)
    },
    beforeUploadImg(file) {
      console.log("beforeUploadImg");
      if (
        file.type !== "image/jpg" &&
        file.type !== "image/jpeg" &&
        file.type !== "image/png" &&
        file.type !== "image/gif"
      ) {
        this.$message.error("只支持jpg、png、gif格式的图片！");
        return false;
      }
      // this.uploadForm.append('file', file)
      // return false
    },
    //查看
    onClickImg(img) {
      // console.log('onClickImg', img)
      // let list = this.imgList.map(item => {
      //   return item.url
      // })
      // let index = this.imgList.findIndex(value => value.url === img.url)
      // this.$ImgViewer.show({
      //   imgList: list,
      //   imgIndex: index
      // })
    }
  }
};
</script>

<style lang="scss">
.img-upload {
  .el-image {
    margin-right: 10px;
    border-radius: 6px;
    border: 1px solid #c0ccda;
    cursor: pointer;
  }

  img {
    object-fit: cover;
  }
}

.img-large {
  display: inline-block;
  width: auto;
}
</style>
