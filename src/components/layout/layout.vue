<template>
  <div id="layout">
    <el-container>
      <el-aside :width="isCollapse ? '80px' : '200px'">
        <div class="logo-container">
          <!-- <img class="logo-img" src="../../assets/img/common/logo.png" alt /> -->
          <!-- <div class="logo-title">公司名称</div> -->
          <img
            style="width:60%"
            class="logo-img"
            :src="isCollapse ? logo : logo2"
            alt
          />
        </div>
        <vue-scroll :ops="ops">
          <sideMenu
            ref="sideMenu"
            @changeTitle="changePositionTitle($event)"
          ></sideMenu>
        </vue-scroll>
      </el-aside>
      <el-container>
        <el-header>
          <Header @changeMenuStatus="changeMenuStatus($event)"></Header>
        </el-header>
        <el-main>
          <!-- 当前所处位置 -->
          <div class="position-info-title-container">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item
                v-for="(item, key) in positionData"
                :key="key"
                >{{ item.title }}</el-breadcrumb-item
              >
            </el-breadcrumb>
            <div class="current-page-title-container"></div>
            <div class="position-info-title-right"></div>
          </div>
          <div class="router-view-container">
            <vue-scroll :ops="ops" class="mainrig-content">
              <transition name="fade-transform" mode="out-in">
                <router-view />
              </transition>
            </vue-scroll>
          </div>
        </el-main>
        <!-- <el-footer>
          <Foot></Foot>
        </el-footer>-->
      </el-container>
    </el-container>
  </div>
</template>
<script>
import sideMenu from "./sideMenu";
export default {
  name: "layout",
  inject: ["reload"],
  data() {
    return {
      positionTitle: "系统首页",
      defaultRouter: "",
      currentPath: "", // 当前路由
      selectCurrentYear: new Date(), // 波段列表保存切换的年份
      positionData: [],
      ops: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          detectResize: true
        },
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: true,
          scrollingY: true,
          speed: 300,
          easing: undefined,
          verticalNativeBarPos: "right"
        },
        rail: {
          background: "#01a99a",
          opacity: 0,
          size: "6px",
          specifyBorderRadius: false,
          gutterOfEnds: null,
          gutterOfSide: "2px",
          keepShow: false
        },
        bar: {
          showDelay: 500,
          onlyShowBarOnScroll: true,
          keepShow: false,
          background: "#c1c1c1",
          opacity: 1,
          hoverStyle: false,
          specifyBorderRadius: false,
          minSize: false,
          size: "6px",
          disable: false
        }
      },
      isCollapse: false // 是否需要折叠菜单( 这里控制logo是否显示精简图标 )
    };
  },
  components: {
    sideMenu
  },
  created() {
    this.permissionJudge(); // 调用权限判断方法
    this.defaultRouter = this.$route.path;
  },
  beforeUpdate() {
    // 监听vuex 数据变化
  },
  methods: {
    changeMenuStatus() {
      // 控制菜单折叠与展开
      this.isCollapse = !this.isCollapse;
      this.$refs.sideMenu.controlMenuStatus(); // 调用子组件的方法
    },
    changePositionTitle(currentPath) {
      console.log(currentPath, "currentPath");

      // currentPath 刷新页面时，是string  路由切换时是 Array
      if (typeof currentPath == "string") {
        this.currentPath = currentPath;
      } else {
        this.currentPath = currentPath[1];
      }

      let arr = [];

      let routerData = this.$router.options.routes;

      if (typeof currentPath == "string") {
        // 根据路由信息，匹配相应的路由内容，生成面包屑
        // 总路由 -- 一级路由
        for (let i = 0, len = routerData.length; i < len; i++) {
          // 二级路由
          for (
            let j = 0,
              leng = routerData[i].children ? routerData[i].children.length : 0;
            j < leng;
            j++
          ) {
            // 三级路由
            if (routerData[i].children[j].children) {
              for (
                let k = 0,
                  klen = routerData[i].children[j].children
                    ? routerData[i].children[j].children.length
                    : 0;
                k < klen;
                k++
              ) {
                if (currentPath == routerData[i].children[j].children[k].path) {
                  arr.push(routerData[i].children[j]); // 选中上级路由
                  arr.push(routerData[i].children[j].children[k]); // 本级路由
                }
              }
            } else {
              if (currentPath == routerData[i].children[j].path) {
                arr.push(routerData[i].children[j]); // 选中上级路由
              }
            }
          }
        }
      } else {
        // 根据路由信息，匹配相应的路由内容，生成面包屑
        // 总路由 -- 一级路由
        for (let i = 0, len = routerData.length; i < len; i++) {
          // 二级路由
          for (
            let j = 0,
              leng = routerData[i].children ? routerData[i].children.length : 0;
            j < leng;
            j++
          ) {
            if (currentPath[0] == routerData[i].children[j].path) {
              arr.push(routerData[i].children[j]);
              // 三级路由
              for (
                let k = 0,
                  klen = routerData[i].children[j].children
                    ? routerData[i].children[j].children.length
                    : 0;
                k < klen;
                k++
              ) {
                if (
                  currentPath[1] == routerData[i].children[j].children[k].path
                ) {
                  arr.push(routerData[i].children[j].children[k]);
                }
              }
            }
          }
        }
      }

      this.positionData = arr;
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
  },
  mounted() {
    // 页面加载，选中当前页对应的导航
    var routePath = this.$route.path;
    this.changePositionTitle(routePath);
  }
};
</script>
<style lang="scss"></style>
