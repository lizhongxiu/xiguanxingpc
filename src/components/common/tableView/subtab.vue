<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      hasInit: false,
      paneVisible: {},
      subVisible: {},
      activeName: "",
      paneIndex: [],
      paneAuth: {},
      ctrlPaneShow: true
    };
  },

  created() {
    this.activeName = this.getActivePane();
    this.paneVisible[this.activeName] = true;
    console.log("activeName", this.activeName);
  },

  activated() {
    if (this.hasInit) {
      this.$refs[this.activeName].getDataList &&
        this.$refs[this.activeName].getDataList(true);
    }
    this.hasInit = true;
  },

  methods: {
    getActivePane() {
      for (let paneName of this.paneIndex) {
        if (this.isAuth(this.paneAuth[paneName])) {
          return paneName;
        }
      }
      return this.activeName;
    },
    // 切换tab
    selectTab(val) {
      console.log(val.name);
      if (this.$refs[val.name]) {
        this.ctrlPaneShow = this.$refs[val.name].searchViewVisible;
        setTimeout(() => {
          if (this.$refs[val.name].tableInfo.autoRequest) {
            if (this.$refs[val.name].tableInfo.getDataFunc) {
              this.$refs[val.name].tableInfo.getDataFunc();
            } else {
              this.$refs[val.name].getDataList(true);
            }
          }
          this.$nextTick(() => {
            if (this.$refs[val.name]) {
              this.$refs[val.name].onResize && this.$refs[val.name].onResize();
            }
          });
        }, 500);
      } else {
        this.$set(this.paneVisible, val.name, true);
        this.$nextTick(() => {
          if (this.$refs[val.name]) {
            this.ctrlPaneShow = this.$refs[val.name].searchViewVisible;
          }
        });
      }
    },
    // 打开子页面
    openSubPage({ page, pageFrom, params }) {
      if (this.$utils.common.isNullOrNullStr(page)) {
        this.$message.error("子页面page为空");
        return;
      }
      this.$set(this.subVisible, page, true);
      this.$nextTick(() => {
        this.$refs[page].init(params);
        if (pageFrom) {
          this.$refs[page].$el.style.zIndex = 1100;
          this.$refs[pageFrom].$el.style.zIndex = 1001;
        }
      });
    },
    // 刷新子页面
    refreshSubPage({ page, resetIndex }) {
      if (this.$refs[page]) {
        this.$refs[page].refreshPage(resetIndex);
      }
    },
    topCtrl() {
      let pane = this.$refs[this.activeName];
      this.ctrlPaneShow = pane.toggleSearchView();
      this.$nextTick(() => {
        pane.onResize && pane.onResize();
      });
    }
  }
};
</script>

<style lang="scss">
.sub-page-tab {
  width: 100%;
  height: 100%;
  position: relative;

  > .el-tabs {
    height: 100%;

    .el-tabs__nav-wrap {
      padding: 0 20px;
    }

    .el-tabs__nav-wrap::after {
      background-color: #ffffff;
    }

    .el-tabs__header {
      height: 50px;
      padding-top: 10px;
      margin: 0;
    }

    .el-tabs__content {
      height: calc(100% - 50px) !important;
      //margin-top: 1px;
    }
  }

  .sub-page-pane {
    height: calc(100% - 50px);
  }

  .sub-page-ctrl {
    position: absolute;
    right: 13px;
    top: 15px;
  }
}
</style>
