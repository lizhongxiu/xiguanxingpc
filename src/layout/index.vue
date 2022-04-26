<template>
  <div class="main-wrap site-wrapper">
    <Header></Header>
    <div class="main">
      <SideBar class="sidebar-container"></SideBar>
      <AppMain class="main-container"></AppMain>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '@/components/Header/header.vue'
import SideBar from './components/SideBar'
import AppMain from './components/AppMain'
export default {
  components: {
    Header,
    SideBar,
    AppMain
  }
}
</script>

<style scoped lang="scss">
.main-wrap {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  .main {
    position: relative;
    width: 100%;
    /*可视区高度减去头部高度 和底部padding*/
    height: calc(100vh - (79px));
    padding: 20px;
    /*overflow: hidden;*/
    background: #f2f2f2;
    .sidebar-container {
      position: absolute;
      top: 15px;
      left: 20px;
    }
    .main-container {
      position: absolute;
      left: 240px;
      top: 15px;
      /*减去左边导航然宽度*/
      width: calc(100% - (240px + 20px));
      height: calc(100% - 15px);
     
    }
  }
}
</style>
