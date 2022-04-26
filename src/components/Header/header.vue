<template>
  <div>
    <header class="header">
      <div class="header-logo">
        <img src="../../assets/img/home/logo.png" alt />
        <!-- <p>智能跳绳后台管理系统</p> -->
      </div>
      <div class="header-user">
        <p class="header-user-time">{{ time }}</p>
        <div class="header-user-logo">
          <img src="../../assets/img/home/userLogo.png" alt />
        </div>

        <div>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              {{ user }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <p @click="outClick()">退出</p>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </header>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      timer: null,
      time: null,
      user:window.localStorage.getItem("username")
    };
  },
  mounted() {
    // let _this = this
    this.timer = setInterval(() => {
      let date = new Date();
      let dateYear = date.getFullYear(); //获取年
      let dateMonth = this.repair(date.getMonth() + 1); //获取月
      let dateDate = this.repair(date.getDate()); //获取当日
      let dateHours = this.repair(date.getHours()); //获取小时
      let dateMinutes = this.repair(date.getMinutes()); //获取分钟
      let dateSeconds = this.repair(date.getSeconds()); //获取秒
      this.time = `${dateYear}-${dateMonth}-${dateDate} ${dateHours}:${dateMinutes}:${dateSeconds}`;
    }, 1000);
  },
  methods: {
    repair(data) {
      return data < 10 ? "0" + data : data;
    },
    handleCommand(command) {
      this.$message("click on item " + command);
    },
    outClick() {
      this.$store.dispatch("LogOut").then(async () => {
        this.$message({
          message: "已退出",
          type: "success"
        });
        this.$router.push({ path: "/login" });
      });
    }
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  width: 100%;
  height: 79px;
  padding-right: 28px;
  justify-content: space-between;
  background: rgba(0, 0, 51, 1);
  color: #fff;
  .header-logo {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    img {
      margin-left: 20px;
      width: 186px;
    }
    p {
      font-size: 30px;
      padding-left: 30px;
    }
  }
  .header-user {
    display: flex;
    align-items: center;
    .header-user-time {
      font-size: 16px;
      margin-right: 11px;
    }
    .header-user-logo {
      margin-right: 7px;
    }
  }
}
.nav {
  width: 100%;
  height: 64px;
  background: #fff;
  padding: 14px 23px;
  .nav-list {
    width: 132px;
    height: 36px;
    line-height: 36px;
    background: #499bfc;
    border-radius: 12px 0 12px 0;
    .nav-list-txt {
      position: relative;
      margin-left: 45px;
      font-size: 17px;
      /*font-weight: bold;*/
      color: #fff;
      display: block;
      &:before {
        position: absolute;
        content: "";
        width: 17px;
        height: 17px;
        left: -25px;
        top: 10px;
        background: url("../../assets/img/home/navIcon.png") no-repeat;
      }
    }
    /*img {*/
    /*margin-left: 24px;*/
    /*vertical-align: top;*/
    /*}*/
  }
}
.el-dropdown-link {
  cursor: pointer;
  font-size: 14px;
  color: #fff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
/deep/.el-dropdown-menu__item {
  padding: 0 20px !important;
}
</style>
