<template>
  <div class="Header-page">
    <div class="Header-nav-container">
      <div class="header-left-functionalArea">
        <div class="menu-control">
          <i
            :class="
              'el-icon-s-isfold ' +
                (isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold')
            "
            @click="changeMenuStatus"
          ></i>
        </div>
      </div>
      <!-- 头部右侧功能区域 -->
      <div class="header-right-functionalArea">
        <el-avatar
          size="medium"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          class="user-header-img"
        ></el-avatar>
        <div class="user-fun-container">
          <el-dropdown>
            <span class="el-dropdown-link">
              {{ user_name }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu
              class="user-funDropdown-container"
              slot="dropdown"
            >
              <el-dropdown-item @click.native="changePassowrd()">
                <span
                  class="FontFamily el-icon-erp el-icon-erp-changepassword"
                ></span>
                <span class="user-fun-text">修改密码</span>
              </el-dropdown-item>
              <el-dropdown-item @click.native="loginOut()">
                <span class="FontFamily el-icon-erp el-icon-erp-tuichu"></span>
                <span class="user-fun-text">退出</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <changePassowrd ref="changePassowrd"></changePassowrd>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { mapState } from "vuex";
import changePassowrd from "@/views/home/changePassowrd";
export default {
  name: "Header",
  components: {
    changePassowrd
  },
  data() {
    return {
      user_name: "",
      isCollapse: false // 是否需要折叠菜单 ， 这里判断显示哪个控制图标
    };
  },
  computed: {
    // 获取并显示当前登录的用户名
    // ...mapState("user", ["user_name"])
  },
  created() {
    this.permissionJudge(); // 调用权限判断方法
    this.user_name = sessionStorage.getItem("USER_name");
  },
  methods: {
    jump(pathName, id) {
      if (id) {
        this.$router.push({
          name: pathName,
          query: {
            id: id
          }
        });
      } else {
        this.$router.push({
          name: pathName
        });
      }
    },
    changeMenuStatus() {
      // 控制菜单折叠与展开
      this.isCollapse = !this.isCollapse;
      this.$emit("changeMenuStatus"); // 通过触发父组件 ，在通过父组件调用子组件的方法
    },
    changePassowrd() {
      // 修改密码
      this.$refs.changePassowrd.show();
    },
    goTo(pathStr) {
      this.$router.push({
        name: pathStr
      });
    },
    loginOut() {
      this.$utils.delAllStorage();
      this.$utils.delAllSession();
      this.goTo("login");
      this.$toaster.ok("退出成功");
    },
    permissionJudge() {
      // 权限判断
      this.permission = this.$utils.getSession("PERMISSION");
      // eslint-disable-next-line no-empty
      if (this.$utils.getSession("PERMISSION")) {
      } else {
        this.isAdmin = true;
      }
    }
  }
};
</script>
<style lang="scss"></style>
