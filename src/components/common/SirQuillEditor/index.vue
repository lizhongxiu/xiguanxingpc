<template>
  <div>
    <quill-editor
      :disabled="sirIf"
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    >
    </quill-editor>
    <el-upload
      style="height: 0;line-height: 0"
      class="avatar-uploader quill-uploader"
      :action="$serverUrl + '/pc/common/uploadImage/'"
      :headers="headers"
      name="fileName"
      :show-file-list="false"
      :on-success="uploadBannerSuccess"
      :before-upload="beforeUploadBanner"
    >
    </el-upload>
  </div>
</template>

<script type="text/ecmascript-6">
import { getStorage } from '@/utils/auth'

export default {
  props: {
    sirProps: {
      type: String, default: '',
    },
    sirIf: {
      type: [String,Boolean], default: false,
    }
  },
  mounted() {
  },
  data() {
    const toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'], //加粗，斜体，下划线，删除线
      ['blockquote', 'code-block'],  //引用，代码块
      [{ 'header': 1 }, { 'header': 2 }],  // 标题，键值对的形式；1、2表示字体大小
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],  //列表
      [{ 'script': 'sub'}, { 'script': 'super' }], // 上下标
      [{ 'indent': '-1'}, { 'indent': '+1' }],  // 缩进
      [{ 'direction': 'rtl' }],    // 文本方向
      [{ 'size': ['small', false, 'large', 'huge'] }], // 字体大小
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],  //几级标题
      [{ 'color': [] }, { 'background': [] }],  // 字体颜色，字体背景颜色
      [{ 'font': [] }],  //字体
      [{ 'align': [] }], //对齐方式
      ['clean'], //清除字体样式
      // ['image','video'] //上传图片、上传视频
      ['image'] //上传图片、上传视频

    ]
    const sirIfCon= this.sirIf
    return {
      content: this.sirProps, // 内容
      adw: 'adwa',
      editorOption: {
        theme:'snow',
        modules:{
          toolbar:{
            container: toolbarOptions,  // 工具栏
            handlers: {
              'image': function (value) {
                if (value) {
                  if (!sirIfCon) {
                    document.querySelector('.quill-uploader.avatar-uploader input').click()
                  }
                } else {
                  console.log('失败')
                  this.quill.format('image', false);
                }
              },
            }
          }
        },
      }, // 富文本工具栏

    }
  },
  watch: {
    'sirProps' :function (val) {
      this.content = val
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
    headers() {
      return{
        "Authorization": getStorage('token') // 直接从本地获取token就行
      }
    }
  },
  methods: {
    onEditorReady(editor) { // 准备编辑器
      console.log('准备编辑器',editor)
    },
    onEditorBlur(){}, // 失去焦点事件
    onEditorFocus(){}, // 获得焦点事件
    onEditorChange(){
      this.$emit('returnData',this.content)
    }, // 内容改变事件
    // 上传成功
    uploadBannerSuccess(res) {
      // 获取富文本组件实例
      const quill = this.$refs.myQuillEditor.quill
      if (res.data) {
        // 获取光标所在位置
        const length = quill.getSelection().index
        // 插入图片 res.fileId为服务器返回的图片地址
        // const imageDome= `<img :src="${res.fileId} | getImg" class="avatar">`
        // quill.insertEmbed(length, divDome)
        quill.insertEmbed(length, 'image', res.data)
        // 调整光标到最后
        quill.setSelection(length + 1)
      }

    },
    // 上传前
    beforeUploadBanner(file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG、PNG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
  }
}
</script>

<style lang="scss">
.quill-editor {
  .ql-container.ql-snow {
    min-height: 120px;
    max-height: 300px;
    overflow: auto;
  }
  .quill-uploader {
    height: 0;
  }
}
</style>
