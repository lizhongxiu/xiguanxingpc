
<template>
  <div class="sidebar-wrap">
    <el-menu
      :default-active="this.$route.path"
      router
      class="el-menu-vertical-demo"
      @select="handleSelect"
    >
      <el-scrollbar style="height: 100%">
        <el-submenu index="首页" v-allow="'10'">
          <template slot="title">
            <i class="iconfont icon-home"></i>
            <span>首页</span>
          </template>
          <el-menu-item-group v-allow="'1001'">
            <el-menu-item index="/index/index">园所数据</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group v-allow="'1001'">
            <el-menu-item index="/index/userDataView">用户数据</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="设置管理" v-allow="'06'">
          <template slot="title">
            <i class="iconfont icon-shezhiguanli"></i>
            <span>设置管理</span>
          </template>
          <el-menu-item-group v-allow="'0601'">
            <el-menu-item index="/setUp/bgMusic">背景音乐</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group v-allow="'0602'">
            <el-menu-item index="/setUp/rhythm">节拍设置</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group v-allow="'0603'">
            <el-menu-item index="/setUp/paraSet">参数设置</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group v-allow="'0604'">
            <el-menu-item index="/setUp/firmwareVersion">固件信息</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-scrollbar>
    </el-menu>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    handleSelect(key, path) {
      console.log(key, path);
    },
  },
};
</script>

<style scoped lang="scss">
.sidebar-wrap {
  position: relative;
  /*可视区高度 减去 头部高度和底部padding*/
  height: calc(100vh - (143px + 40px));
  width: 200px;
  background: rgba(0, 0, 51, 1);
}
.el-menu-vertical-demo {
  height: calc(100vh - (77px));
}
.el-scrollbar__wrap {
  height: 100%;
}
.el-submenu .el-menu-item {
  font-size: 16px;
  color: #666666;
  &.is-active {
    color: #0290fe;
  }
}
/deep/.el-submenu__title {
  color: #333;
  font-size: 16px;
  font-weight: bold;
}
/* 图标颜色 */
/deep/.el-submenu__title i {
  color: #333333;
  margin-right: 14px;
  margin-left: 10px;
}
/* 导航菜单样式 */
/deep/.el-submenu .el-menu-item {
  /*text-align: center;*/
  padding-left: 58px !important;
  &.is-active {
    background: #edf5ff;
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 4px;
      height: 100%;
      background: #0290fe;
    }
  }
}
</style>
