/* eslint-disable vue/no-parsing-error */ /* eslint-disable prettier/prettier */
<template>
  <div>
    <el-dialog
      :title="type === 'edit' ? '编辑' : '添加'"
      :visible.sync="isAddEditDialog_c"
      @close="_cancel('formName')"
      width="600px"
    >
      <el-form :model="addEditForm_c" ref="formName" label-width="120px">
        <el-form-item
          prop="version"
          label="版本号:"
          :label-width="formLabelWidth"
          class="formItem"
        >
          <el-input
            v-model="addEditForm_c.version"
            placeholder="版本号"
          ></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content" class="formItem">
          <span
            :class="{ wordtip: true, red: addEditForm_c.content.length > 200 }"
            >{{ addEditForm_c.content.length }}/200字</span
          >
          <el-input
            type="textarea"
            :rows="10"
            v-model="addEditForm_c.content"
            placeholder="内容"
          ></el-input>
        </el-form-item>
        <el-form-item prop="url" label="zip:" class="formItem">
          <UploadApk
            :fileUrl="addEditForm_c.url"
            @setFile="setFile"
          ></UploadApk>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="_cancel('formName')">取 消</el-button>
        <el-button type="primary" @click="submitForm('formName')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import { validate } from '@/utils/validate.js' // 正则

export default {
  props: {
    addEditForm: {
      type: Object
    },
    isAddEditDialog: {
      type: Boolean
    }
  },
  data() {
    var wordLengthFunc = (rule, value, callback) => {
      if (value && value.length > 200) {
        callback(new Error(rule.message));
      } else {
        callback();
      }
    };
    return {
      formLabelWidth: "120px",
      isAddEditDialog_c: false,
      addEditForm_c: {
        id:'',
        version: '',
        content: '',
        url: '',
      },
      type: '',
      rules: {
        content: [
          {validator: wordLengthFunc, message: '内容描述字数不能超过200', trigger: 'blur'}
        ]
      }
    };
  },
  watch: {
    isAddEditDialog(val) {
      this.isAddEditDialog_c = val;
    },
  },
  methods: {
    init (type,row) {
      this.type = type
      let obj = {};
      console.log(type)
      if (type == "edit") {
        this.$api.FirmwareVersion.getFirmware({id: row.id}).then(res => {
           obj = {
            ...obj,
            ...res.data
          };
          this.addEditForm_c.id = res.data.id
          this.addEditForm_c.version = res.data.version
          this.addEditForm_c.content = res.data.content
          this.addEditForm_c.url = res.data.url
        });
      }
    },
    setFile(url) {
      this.addEditForm_c = {
        ...this.addEditForm_c,
        url: url
      };
    },
    // 新增||修改
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.addEditForm_c.content)
          var addEditForm = {
            id: this.addEditForm_c.id,
            version: this.addEditForm_c.version,
            content: this.addEditForm_c.content,
            url: this.addEditForm_c.url
          }
          var tick = this.type == 'edit' ? this.$api.FirmwareVersion.updateFirmware(addEditForm) : this.$api.FirmwareVersion.saveFirmware(addEditForm)
          tick.then(res => {
            if (res.code == 200) {
              this.$parent._closeaddEdit();
              this.$refs[formName].resetFields();
              this.$parent._getList();
              this.$message({
                type: "success",
                message: res.msg
              });
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    _cancel(formName) {
      this.$refs[formName].resetFields();
      this.$parent._closeaddEdit();
    }
  }
};
</script>

<style scoped lang="scss">
.formItem {
  margin-bottom: 40px;
}
</style>
