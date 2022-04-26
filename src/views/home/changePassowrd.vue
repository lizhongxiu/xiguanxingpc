<template>
  <div class="changePassowrd-page">
    <el-dialog
      title="修改密码"
      :visible.sync="dialogVisibleForm"
      :close-on-click-modal="false"
      width="25%"
      center
      custom-class="el-dialogForm-container"
      @close="handleCloseForm"
    >
      <el-form
        :model="dialogRuleForm"
        :rules="dialogRules"
        ref="dialogRuleForm"
        label-width="80px"
        label-position="left"
        class="dialog-dialogRuleForm one-columnForm"
      >
        <el-form-item label="旧密码" prop="oldPassword">
          <el-input
            type="password"
            :show-password="true"
            v-model="dialogRuleForm.oldPassword"
            :maxlength="20"
            placeholder="请输入旧密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input
            type="password"
            :show-password="true"
            v-model="dialogRuleForm.newPassword"
            :maxlength="20"
            placeholder="请输入新密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input
            type="password"
            :show-password="true"
            v-model="dialogRuleForm.confirmPassword"
            :maxlength="20"
            placeholder="请输入确认密码"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm('dialogRuleForm')">取 消</el-button>
        <el-button type="primary" @click="handleDialogSubmit('dialogRuleForm')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "changePassowrd",
  data() {
    var isPassword = (rule, value, callback) => {
      //密码验证
      if (!value) {
        return callback(new Error("密码不能为空"));
      }
      if (this.password == value) {
        callback();
      } else {
        if (!this.$utils.isString(value)) {
          return callback(new Error("密码为6~20个字符"));
        } else {
          // if (!this.$utils.isPsd(value)) {
          //   return callback(new Error("密码需包含大写字母、小写字母、数字、英文符号至少三种"));
          // } else {
          //   callback();
          // }
          callback();
        }
      }
    };
    var isNewPassword = (rule, value, callback) => {
      //密码验证
      if (!value) {
        return callback(new Error("密码不能为空"));
      }
      if (this.password == value) {
        callback();
      } else {
        if (!this.$utils.isString(value)) {
          return callback(new Error("密码为6~20个字符"));
        } else {
          // if (!this.$utils.isPsd(value)) {
          //   return callback(new Error("密码需包含大写字母、小写字母、数字、英文符号至少三种"));
          // } else {
          //   callback();
          // }
          callback();
        }
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.dialogRuleForm.newPassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      dialogVisibleForm: false, // 控制弹框是否显示
      dialogRuleForm: {
        // 弹框表单数据
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
      },
      dialogRules: {
        // 弹框校验规则
        oldPassword: [
          {
            required: true,
            validator: isPassword,
            trigger: "blur"
          }
        ],
        newPassword: [
          { required: true, message: "请输入新密码", trigger: "blur" },
          {
            required: true,
            validator: isNewPassword,
            trigger: "blur"
          }
        ],
        confirmPassword: [
          { required: true, validator: validatePass, trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.init();
  },
  mounted() {},
  methods: {
    init() {},
    show() {
      this.dialogVisibleForm = true;
    },
    goTo(pathStr) {
      this.$router.push({
        name: pathStr
      });
    },
    handleCloseForm() {
      this.dialogVisibleForm = false;
    },
    resetForm(formName) {
      this.handleCloseForm();
      this.$refs[formName].resetFields();
    },
    handleDialogSubmit(formName) {
      // 提交正常单
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.updatePassword();
        } else {
          return false;
        }
      });
    },

    updatePassword() {
      this.$api.system
        .updatePassword(
          this.$utils.calcuMD5(this.dialogRuleForm.oldPassword),
          this.$utils.calcuMD5(this.dialogRuleForm.newPassword)
        )
        .then(res => {
          if (res.code == 200) {
            this.$toaster.ok(res.msg);
            this.$utils.delAllStorage();
            this.$utils.delAllSession();
            this.$utils.clearCookie();
            this.goTo("login");
          } else {
            this.$toaster.error(res.msg);
          }
        })
        .catch(() => {});
    }
  }
};
</script>
