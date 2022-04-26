/* eslint-disable prettier/prettier */ /* eslint-disable prettier/prettier */
<template>
  <div>
    <section class="main">
      <img class="main-banner" src="../../assets/img/login/banner.png" alt />
      <div class="main-con-wrap">
        <img class="main-logo" src="../../assets/logo.png" alt />
        <div class="main-con">
          <p class="main-con-title">智能跳绳后台管理系统</p>
          <el-form class="userform" ref="form" :model="form" :rules="rules">
            <el-row>
              <el-col style="margin-bottom: 20px" :span="24">
                <el-form-item prop="user">
                  <el-input
                    v-model="form.user"
                    class="userform-user"
                    :maxlength="20"
                    placeholder="请输入用户名"
                    @keyup.enter.native="loginClick('form')"
                  ></el-input>
                  <div class="userform-mask">
                    <i class="iconfont iconyonghu1"></i>
                  </div>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item prop="pwd">
                  <el-input
                    v-model="form.pwd"
                    class="userform-pwd"
                    type="password"
                    :maxlength="20"
                    placeholder="请输入密码"
                    @keyup.enter.native="loginClick('form')"
                  ></el-input>
                  <div class="userform-mask">
                    <i class="iconfont iconmm"></i>
                  </div>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item prop="remember" class="userform-remember">
                  <el-checkbox-group v-model="form.remember">
                    <el-checkbox label="记住密码" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item>
                  <el-button
                    class="logon-btn"
                    type="primary"
                    @click="loginClick('form')"
                    >登录</el-button
                  >
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "login",
  data() {
    return {
      form: {
        user: "",
        pwd: "",
        remember: false,
      },
      rules: {
        user: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: "blur",
          },
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {
    this.getCookie();
  },
  methods: {
    getAuthority(id) {
      this.$api.system.authority(id).then((res) => {
        if (res.code == 200) {
          let datas = res.data;
          let arr = [];
          for (let i of datas) {
            if (i.isCheck == 1) {
              arr.push(i.code);
            }
            for (let j of i.nextMenus) {
              if (j.isCheck == 1) {
                arr.push(j.code);
              }
              for (let k of j.nextMenus) {
                if (k.isCheck == 1) {
                  arr.push(k.code);
                }
              }
            }
          }
          let arr1 = JSON.stringify(arr);
          window.localStorage.setItem("arr", arr1);
          setTimeout(() => {
            this.$router.push({
              path: "/index/index",
            });
          }, 500);
        }
      });
    },
    loginClick(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$api.system
            .login(this.form.user, this.$utils.calcuMD5(this.form.pwd))
            .then((res) => {
              if (res.code == 200) {
                window.localStorage.setItem("username", this.form.user);
                this.$store
                  .dispatch("Login", res.data)
                  .then(async () => {
                    if (this.form.remember) {
                      // 执行记住密码
                      //传入账号，密码，保存天数
                      this.setCookie(this.form.user, this.form.pwd, 7);
                    } else {
                      //清空Cookie
                      this.clearCookie();
                    }
                    this.getAuthority(res.data.id);
                    this.$message({
                      message: "登录成功",
                      type: "success",
                    });
                  })
                  .catch(() => {
                    this.$message({
                      message: "用户名密码错误",
                      type: "warning",
                    });
                  });
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //设置cookie方法
    setCookie(username, password, days) {
      var saveDays = new Date(); //获取时间
      saveDays.setTime(saveDays.getTime() + 24 * 60 * 60 * 1000 * days); //保存的天数
      //字符串拼接cookie
      window.document.cookie =
        "username" +
        "=" +
        username +
        ";path=/;saveDays=" +
        saveDays.toGMTString();
      window.document.cookie =
        "password" +
        "=" +
        password +
        ";path=/;saveDays=" +
        saveDays.toGMTString();
    },
    //读取cookie
    getCookie() {
      console.log("document.cookie", document.cookie);
      if (document.cookie.length > 0) {
        var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("="); //再次切割
          //这里会切割出以mobile为第0项的数组、以password为第0项的数组，判断查找相对应的值
          if (arr2[0] == "username") {
            this.form.user = arr2[1]; //拿到账号
          } else if (arr2[0] == "password") {
            // var bytes = CryptoJS.AES.decrypt(arr2[1].toString(), 'secret key 123');
            // var plaintext = bytes.toString(CryptoJS.enc.Utf8); //拿到解密后的密码（登录时输入的密码）
            this.form.pwd = arr2[1];
          }
        }
        if (this.form.user) {
          this.form.remember = true;
        }
      }
    },
    //清除cookie
    clearCookie() {
      this.setCookie("", "", 0); //账号密码置空，天数置0
    },
  },
};
</script>

<style scoped lang="scss">
.main {
  position: relative;
  width: 100%;
  height: calc(100vh);
  display: flex;
  align-items: center;
  justify-content: center;
  .main-banner {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  .main-con-wrap {
    width: 683px;
    height: 368px;
    padding: 0 49px 0 51px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .main-logo {
      width: 169px;
      height: 206px;
    }
    .main-con {
      width: 315px;
      .main-con-title {
        font-size: 24px;
        color: #333;
        border-left: solid 5px #458dff;
        padding-left: 10px;
        margin: 20px 0;
      }
      .userform {
        .userform-user {
          /deep/.el-input__inner {
            padding-left: 70px;
          }
        }
        .userform-pwd {
          /deep/.el-input__inner {
            padding-left: 70px;
          }
        }
        .userform-mask {
          position: absolute;
          left: 0;
          top: 0;
          width: 60px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          i {
            font-size: 20px;
            color: #7d878e;
          }
          &:before {
            content: "";
            position: absolute;
            right: 0;
            top: 12px;
            width: 1px;
            height: 18px;
            background: #dddddd;
          }
        }
        .userform-remember {
          float: left;
          /deep/.el-checkbox__label {
            font-size: 16px;
            color: #7c868d;
          }
        }
        .userform-retrieve {
          line-height: 39px;
          float: right;
          color: #7c868d;
          font-size: 16px;
        }
        .logon-btn {
          width: 100%;
          height: 40px;
          border-radius: 0;
        }
        .register {
          text-align: center;
          color: #499bfc;
          font-size: 14px;
          margin-top: 25px;
          cursor: pointer;
        }
        .modify {
          text-align: center;
          font-size: 14px;
          color: #707070;
          margin-top: 5px;
          cursor: pointer;
        }
      }
    }
  }
}
/deep/.el-input__inner {
  height: 40px;
  line-height: 40px;
}
</style>
