<template>
  <div id="sideMenu">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "sideMenu",
  inject: ["reload"],
  data() {
    return {
      defaultRouter: "",
      isCollapse: false, // 是否需要折叠菜单
      userType: "" // 用户类型 0 管理员 1 普通用户
    };
  },
  computed: {
    getMenuIcon() {
      // 菜单图标
      return data => {
        if (data) {
          return "";
        } else {
          return "";
        }
      };
    }
  },
  created() {
    this.permissionJudge(); // 调用权限判断方法
    this.userType = this.$utils.getSession("USER_Type"); // 获取用户类型  // 用户类型 0 管理员 1 普通用户
    this.defaultRouter = this.$route.path;
  },
  methods: {
    jump(pathName, id) {
      this.$emit("changeTitle", "/" + pathName); // 触发当前页面包屑改变

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
    controlMenuStatus() {
      this.isCollapse = !this.isCollapse;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$emit("changeTitle", key); // 触发当前页面包屑改变
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
