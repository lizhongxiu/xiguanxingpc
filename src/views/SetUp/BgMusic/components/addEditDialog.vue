/* eslint-disable vue/no-parsing-error */ /* eslint-disable prettier/prettier */
<template>
  <div>
    <el-dialog
      :title="addEditForm_c.formType === 'edit' ? '编辑' : '添加'"
      :visible.sync="isAddEditDialog_c"
      @close="_cancel('formName')"
      width="600px"
    >
      <el-form :model="addEditForm_c" :rules="rules" ref="formName">
        <el-form-item
          prop="name"
          label="音乐名称:"
          :label-width="formLabelWidth"
          class="formItem"
        >
          <el-input
            placeholder="请输入音乐名称"
            show-word-limit
            maxlength="10"
            v-model="addEditForm_c.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="orderNum"
          label="排序号:"
          :label-width="formLabelWidth"
          class="formItem"
        >
          <el-input
            placeholder="请输入排序号(整数1-99999999)"
            maxlength="8"
            onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
            v-model="addEditForm_c.orderNum"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="url"
          label="音乐地址:"
          :label-width="formLabelWidth"
          class="formItem"
        >
          <UploadFile
            :fileUrl="addEditForm_c.url"
            @setFile="setFile"
          ></UploadFile>
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
  import { validate } from "@/utils/validate.js"; // 正则
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
    return {
      formLabelWidth: "120px",
      isAddEditDialog_c: false,
      addEditForm_c: {},
      rules: {
        name: [
          { required: true, message: "请输入音乐名称", trigger: "blur" }
        ],
        url: [
          { required: true, message: "请上传音乐", trigger: "blur" }
        ],
        orderNum: [
          { required: true, message: "请输入排序号", trigger: "blur" },
          {
            required: true,
            validator: validate("just")
          }
        ],
      }
    };
  },
  watch: {
    isAddEditDialog(val) {
      this.isAddEditDialog_c = val;
    },
    addEditForm: {
      handler: function(newVal) {
        this.addEditForm_c = newVal;
      },
      deep: true
    },
  },
  methods: {
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
          let addEditForm = this.addEditForm_c;
          delete addEditForm.formType;
          this.$api.operation.saveMusic(addEditForm).then(res => {
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
