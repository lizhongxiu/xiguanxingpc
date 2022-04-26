<template>
  <div class="login-page">
    <div class="login-main-container">
      <div class="login-container">
        <el-row class="login-content-container">
          <el-col :span="10">
            <div class="system-logo-container"></div>
          </el-col>
          <el-col :span="14" class="right-ruleForm-container">
            <p class="system-title">
              <span class="left-line"></span>
              <span>
                欢迎登录
              </span>
            </p>
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="0"
              class="login-ruleForm"
            >
              <el-form-item label prop="userName">
                <el-input
                  @keyup.enter.native="submitForm('ruleForm')"
                  v-model="ruleForm.userName"
                  placeholder="请输入用户名"
                  :prefix-icon="userNameIcon"
                  :maxlength="20"
                  @change="filteremojifun($event, 'userName', 'ruleForm')"
                ></el-input>
              </el-form-item>
              <el-form-item label prop="pwd">
                <span
                  :class="'showOrhide_pwdIcon ' + showOrhide_pwdIcon"
                  @click="showpsd()"
                ></span>
                <el-input
                  @keyup.enter.native="submitForm('ruleForm')"
                  v-model="ruleForm.pwd"
                  :type="pwdType"
                  placeholder="请输入密码"
                  :prefix-icon="pwdIcon"
                  :maxlength="20"
                  @change="filteremojifun($event, 'pwd', 'ruleForm')"
                ></el-input>
              </el-form-item>
              <el-form-item label prop class="rememberPassword-container">
                <el-checkbox
                  label="记住密码"
                  name
                  v-model="rememberPassword"
                ></el-checkbox>
              </el-form-item>
              <el-form-item>
                <el-button
                  class="login-btn"
                  type="primary"
                  @click="submitForm('ruleForm')"
                  >登录</el-button
                >
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      userNameIcon:
        "FontFamily login-input-icon el-icon-fault-location-zhanghao1",
      pwdIcon: "FontFamily login-input-icon el-icon-fault-location-mima",
      showOrhide_pwdIcon: "FontFamily el-icon-fault-location-tubiao-",
      pwdType: "password",
      rememberPassword: false,
      ruleForm: {
        userName: "",
        pwd: "",
        code: ""
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ]
        // code: [{ required: true, validator: validatePass, trigger: "blur" }]
      },
      imgString: "",
      codeString: ""
    };
  },
  created() {},
  mounted() {
    this.$utils.getCookie(this);
    // this.getCodeImg();
  },
  methods: {
    getCodeImg() {
      this.$api.designManagement.getCodeImg().then(res => {
        // console.log(res, "============rr");
        if (res.code == 200) {
          this.imgString = res.data.imgString;
          this.codeString = res.data.codeString.toUpperCase();
        }
      });
    },
    jump2() {
      this.$router.push({
        name: "homePage"
      });
    },
    submitForm2() {
      this.$router.push({
        name: "home"
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$api.system
            .login(
              this.ruleForm.userName,
              this.$utils.calcuMD5(this.ruleForm.pwd)
            )
            .then(res => {
              if (res.code == 200) {
                this.$store.commit("user/SET_TOKEN", res.data.token);
                // this.$store.commit("user/SET_USER_NAME", res.data.username);
                // this.$store.commit("user/SET_USER_name", res.data.name);
                // this.$store.commit(
                //   "user/SET_USER_COMPANYNAME",
                //   res.data.companyName
                // );
                // if (res.data.roleId) {
                //   this.$store.commit("user/SET_ROLEID", res.data.roleId);
                // }
                if (res.data.permissions) {
                  this.$store.commit(
                    "user/SET_PERMISSION",
                    res.data.permissions
                  );
                }
                sessionStorage.setItem("USER_ID", res.data.id);
                sessionStorage.setItem("USER_inst", res.data.organization);
                sessionStorage.setItem("USER_induData", res.data.inductionDate);
                sessionStorage.setItem("USER_name", res.data.username);
                sessionStorage.setItem("USER_companyId", res.data.companyId);

                sessionStorage.setItem(
                  "USER_companyName",
                  res.data.companyName
                );
                sessionStorage.setItem("USER_Type", res.data.userType); // 用户类型 0 管理员 1 普通用户
                sessionStorage.setItem("Company_Id", res.data.companyId); // 公司id
                var remeberFlag;
                if (this.rememberPassword == true) {
                  // 是否需要保存密码
                  remeberFlag = "true";
                  this.$utils.setCookie(
                    this.ruleForm.userName,
                    this.ruleForm.pwd,
                    7,
                    remeberFlag
                  );
                } else {
                  remeberFlag == "false";
                  this.$utils.clearCookie();
                }
                this.$toaster.ok("登录成功");
                this.$router.push({
                  name: "homePage"
                });
              }
            })
            // eslint-disable-next-line no-unused-vars
            .catch(res => {});
        } else {
          if (!this.ruleForm.userName && this.ruleForm.pwd) {
            this.$toaster.info("用户名不能为空");
          } else if (this.ruleForm.userName && !this.ruleForm.pwd) {
            this.$toaster.info("密码不能为空");
          }
          return false;
        }
      });
    },
    showpsd() {
      // 改变密码的显示状态
      if (
        this.showOrhide_pwdIcon == "FontFamily el-icon-fault-location-tubiao-"
      ) {
        this.showOrhide_pwdIcon = "el-icon-view";
        this.pwdType = "text";
      } else {
        this.showOrhide_pwdIcon = "FontFamily el-icon-fault-location-tubiao-";
        this.pwdType = "password";
      }
    },
    filteremojifun(e, name, ruleForm) {
      this.$utils.filteremojifun(this, e, name, ruleForm);
    }
  }
};
</script>
<style lang="scss">
@import "@/style/login.scss";
</style>
