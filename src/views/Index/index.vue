
<template>
  <div class="cont-Box">
    <div class="wejhfs">
      <div class="left_box_one">
        <div class="left_top_box">
          <span class="left_top_one_span">园所数量</span>
          <span class="left_top_two_span">总数：{{ schoolData.number }}家</span>
        </div>
        <div class="left_center_btn">
          <span class="left_center_dian"></span>
          <span class="left_center_wenzi">今日新增</span>
        </div>

        <div class="left_right_box">
          <span class="left_right_box_dian"></span>
          <span class="left_right_box_wenzi">昨日新增</span>
        </div>
        <!-- echart图表 -->
        <div class="echart_one" ref="action"></div>
      </div>
      <!-- 左下图表 -->
      <div class="left_box_bottom mati_yop">
        <div class="left_top_box">
          <span class="left_top_one_span">教师人数</span>
          <span class="left_top_two_span"
            >总人数：{{ teacherData.number }}人</span
          >
        </div>

        <!-- echart图表 -->
        <div class="echart_one" ref="teacherNum"></div>
      </div>
    </div>
    <!-- 中间模块地图 -->
    <div class="ditu_box">
      <div class="ditu_box_box">
        <span class="left_top_one_span">园所地区分布</span>
      </div>
      <div class="ditu_box_box_cont" ref="mapDataAll"></div>
    </div>

    <!-- 右边模块 -->
    <div class="wejhfs">
      <div class="left_box_one">
        <div class="left_top_box">
          <span class="left_top_one_span">学生人数</span>
          <span class="left_top_two_span"
            >总人数：{{ studentData.number }}人</span
          >
        </div>
        <!-- echart图表 -->
        <div class="echart_one" ref="studentNum"></div>
      </div>
      <!-- 右下图表 -->
      <div class="left_box_bottom mati_yop">
        <div class="left_top_box">
          <span class="left_top_one_span">设备总览</span>
        </div>
        <!-- echart图表 -->
        <div class="echart_one" ref="golbeLook"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import * as echarts from "echarts";
import resfullData from "@/components/geojson";
export default {
  name: "Index",
  data() {
    return {
      mapJson: "",
      mapData: [],
      matData: [],
      schoolData: "",
      studentData: "",
      teacherData: "",
      macBindNumber: "",
    };
  },
  mounted() {
    this.getAddSchoolDataList(); //拿到园所新增数据
    this.getAddStudentDataList(); //获取学生数量及新增信息
    this.getAddTeacherDataList(); //获取教师数量及新增信息
    this.getgolbeLookDataFunList(); //获取设备总览
    this.mapDataFun();//拿到地图数据
  },
  methods: {
    // 拿到园所新增数据
    getAddSchoolDataList() {
      this.$api.xingstar.getAddSchoolData().then((res) => {
        console.log(res, "拿到园所新增数据");
        if (res.code == 200) {
          this.schoolData = res.data;
          this.theGardenNum();
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    // 获取学生数量及新增信息
    getAddStudentDataList() {
      this.$api.xingstar.getAddStudentData().then((res) => {
        console.log(res, "获取学生数量及新增信息");
        if (res.code == 200) {
          this.studentData = res.data;
          this.studentDataFun();
        } else {
          this.$message.error(res.msg);
        }
      });
    },

    //获取教师数量及新增信息
    getAddTeacherDataList() {
      this.$api.xingstar.getAddTeacherData().then((res) => {
        console.log(res, "获取教师数量及新增信息");
        if (res.code == 200) {
          this.teacherData = res.data;
          this.teacherDataFun();
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    // 获取绳柄使用次数
    getgolbeLookDataFunList() {
      this.$api.xingstar.getMacBindNumber().then((res) => {
        console.log(res, "获取绳柄使用次数");
        if (res.code == 200) {
          this.macBindNumber = res.data;
          this.golbeLookDataFun();
        } else {
          this.$message.error(res.msg);
        }
      });
    },

    // 今日新增和昨天新增园所
    theGardenNum() {
      var actionData;
      let myChart = echarts.init(this.$refs.action);
      actionData = {
        tooltip: {
          trigger: "item",
        },

        color: ["#5F85F6", "#F9C96B"],
        series: [
          {
            type: "pie",
            radius: ["20%", "60%"],
            center: ["50%", "50%"],
            avoidLabelOverlap: true,
            roseType: "area",
            labelLine: {
              show: true,
            },
            data: [
              {
                value: this.schoolData.addSchoolNumber.yesterdayNumber,
                name: "昨日新增",
              },
              {
                value: this.schoolData.addSchoolNumber.todayNumber,
                name: "今日新增",
              },
            ],
          },
        ],
      };
      actionData && myChart.setOption(actionData);
    },
    // 拿到地图数据
    mapDataFun() {
      console.log(resfullData, "resfullData");
      this.mapJson = resfullData;
      //对获取的每个子区域添加 name:省市区名称  value 要展示的值  level 此区域的省市区等级  cityCode：省市区的code
      //可通过需求自行添加和修改
      this.$api.xingstar.getSchoolDetail().then((res) => {
        console.log(res, "拿到后台园所数据");
        if (res.code == 200) {
          this.mapData = this.mapJson.features.map((item) => {
            return {
              name: item.properties.name,
              // schoolNumber: item.properties.schoolNumber,
              areaCode: item.properties.adcode,
              value: item.properties.schoolNumber,
            };
            // userNumber: item.properties.userNumber,
          });
          for (let i = 0; i < this.mapData.length; i++) {
            for (let j = 0; j < res.data.length; j++) {
              if (this.mapData[i].areaCode == res.data[j].code) {
                this.mapData[i].value = res.data[j].schoolNumber;
                // console.log(this.mapData, "  this.mapData所数据");
              }
            }
          }

          console.log(this.mapData, " this.mapData");
          this.renderingView();
        }
      });
      // this.mapData = this.mapJson.features.map((item) => {
      //   console.log(item, "item");
      // });
    },

    // 地图图表
    renderingView() {
      // 渲染地图
      var myChartMap = echarts.init(this.$refs.mapDataAll);
      echarts.registerMap("cityMap", this.mapJson, {}); //加载自定义边界数据地图

      var mapChangeData = {
        tooltip: {
          trigger: "item",
          // 鼠标移入的时候显示该地区
          formatter: (p) => {
            console.log(p);
            let val = p.value;
            if (window.isNaN(val)) {
              val = 0;
            }
            let txtCon =
              "<div style='text-align:center'> 地区：" +
              p.data.name +
              "<br />园所数量：" +
              p.data.value;
            ("</div>");
            //
            return txtCon;
          },
        },

        dataRange: {
          orient: "horizontal",
          x: "center",
          itemWidth: 20, // 值域图形宽度，线性渐变水平布局宽度为该值 * 10
          itemHeight: 10, // 值域图形高度，线性渐变垂直布局高度为该值 * 10

          itemGap: 10,
          padding: 10,

          splitList: [
            { start: -1000, end: 0, label: "缺失值", color: "#E0E0E0" },
            { start: 35, label: ">35", color: "#2066AC" },
            { start: 25, end: 35, label: "25-35", color: "#5996B7" },
            { start: 15, end: 25, label: "15-25", color: "#92C5DE " },
            { start: 5, end: 15, label: "5-15", color: "#FCDBC7" },
            { start: 0, end: 4, label: "<5", color: "#F3A482" },
          ],
          textStyle: {
            color: "#8C8C8C", // 值域文字颜色
          },
          selectedMode: false,
          color: ["#E0022B", "#E09107", "#A3E00B"],
        },
        series: [
          {
            name: "地图",
            type: "map",
            mapType: "cityMap",
            aspectScale: 0.85, //地图长度比
            color: ["#5F85F6", "#F9C96B"],

            itemStyle: {
              normal: {
                show: true,
              },
              emphasis: {
                // 鼠标移入时区域的样式
                areaColor: "#FFBD5A", // 鼠标移入的背景色
                borderWidth: 0,
                color: "green",
              },
            },

            label: {
              normal: {
                show: false,
                textStyle: {
                  color: "#000000", //省市区字体颜色
                  fontSize: 13,
                },
              },
            },
            data: this.mapData, // 上面添加了 name,value,level,cityCode的数据
          },
        ],
      };
      myChartMap.setOption(mapChangeData);
    },

    // 学生人数的图表
    studentDataFun() {
      var studentNumData;
      let studentMyChart = echarts.init(this.$refs.studentNum);

      studentNumData = {
        tooltip: {
          trigger: "axis",
        },
        color: "#FFC100",
        xAxis: {
          type: "category",
          data: this.studentData.addStudentNumber.dateTime,
          axisLabel: {
            interval: 0, //横轴信息全部显示
            rotate: -30, //-30度角倾斜显示
            textStyle: {
              fontSize: "10",
            },
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            center: ["50%", "50%"],
            data: this.studentData.addStudentNumber.number,
            type: "line",
            smooth: true,
          },
        ],
      };

      studentNumData && studentMyChart.setOption(studentNumData);
    },

    // 教师人数图表
    teacherDataFun() {
      var teacherNumData;
      let teacherMyChart = echarts.init(this.$refs.teacherNum);

      teacherNumData = {
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          data: this.teacherData.addTeacherNumber.dateTimes,
          axisLabel: {
            interval: 0, //横轴信息全部显示
            rotate: -30, //-30度角倾斜显示
            textStyle: {
              fontSize: "10",
            },
          },
        },
        yAxis: {
          type: "value",
        },
        itemStyle: {
          normal: {
            //柱形图圆角，初始化效果
            barBorderRadius: [15, 15, 20, 20],
          },
        },

        series: [
          {
            type: "bar",
            barWidth: 30, //柱图宽度
            data: this.teacherData.addTeacherNumber.teacherNumbers,
            itemStyle: {
              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
              normal: {
                //柱形图圆角，初始化效果
                // 第一个值表示顶部的左上角，第二个值表示顶部右上角
                // 第三个值表示底部左下角，第四个值表示底部右下角
                barBorderRadius: [6, 6, 0, 0],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#FFA181",
                  },
                  {
                    offset: 1,
                    color: "#F5CB77",
                  },
                ]),
              },
            },
          },
        ],
      };

      teacherNumData && teacherMyChart.setOption(teacherNumData);
    },

    // 设备图表
    golbeLookDataFun() {
      var golbeLookData;
      let golbeLookMyChart = echarts.init(this.$refs.golbeLook);

      golbeLookData = {
        tooltip: {
          trigger: "axis",
        },
        color: "#426AE1",
        xAxis: {
          type: "category",
          data: this.macBindNumber.dataTime,
          axisLabel: {
            interval: 0, //横轴信息全部显示
            rotate: -30, //-30度角倾斜显示
            textStyle: {
              fontSize: "10",
            },
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            center: ["50%", "50%"],
            data: this.macBindNumber.macBindNumber,
            type: "line",
            smooth: true,
          },
        ],
      };

      golbeLookData && golbeLookMyChart.setOption(golbeLookData);
    },
  },
};
</script>

<style scoped lang="scss">
.cont-Box {
  min-width: 1300px;
}
.left_box_one {
  width: 100%;
  height: 351px;
  background: #ffffff;
  border-radius: 4px;
  vertical-align: top;
  display: inline-block;
}
.wejhfs {
  display: inline-block;
  width: 30%;
  height: 700px;
  vertical-align: top;
}
.left_box_bottom {
  width: 100%;
  height: 351px;
  background: #ffffff;
  border-radius: 4px;
  vertical-align: top;
  display: inline-block;
}
.mati_yop {
  margin-top: 16px;
}
.left_top_box {
  width: 100%;
  height: 56px;
  box-shadow: inset 0px -1px 0px 0px rgba(0, 0, 0, 0.05);
  border-radius: 4px 4px 0px 0px;
}
.left_top_one_span {
  line-height: 56px;
  padding-left: 16px;
  font-size: 18px;
  font-weight: 400;
  font-family: PingFangSC-Regular, PingFang SC;
  color: #1d2129;
}

.left_top_two_span {
  line-height: 56px;
  float: right;
  font-size: 16px;
  color: #4e5969;
  font-family: PingFangSC-Regular, PingFang SC;
  padding-right: 16px;
}
.left_center_btn {
  display: inline-block;
  width: 88px;
  height: 32px;
  background: #f1f3f5;
  border-radius: 16px;
  margin-left: 16px;
  margin-top: 12px;
}
.left_center_dian {
  display: inline-block;
  width: 9px;
  height: 9px;
  background: #f9c96b;
  margin-top: 12px;
  margin-left: 12px;
}
.left_center_wenzi {
  width: 48px;
  height: 17px;
  font-size: 12px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #008cff;
  line-height: 17px;
  padding-left: 7px;
}
.left_right_box {
  display: inline-block;
  margin-left: 30px;
}
.left_right_box_dian {
  display: inline-block;
  width: 9px;
  height: 9px;
  background: #5f85f6;
  border-radius: 50%;
}
.left_right_box_wenzi {
  width: 48px;
  height: 17px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #909aa9;
  line-height: 17px;
  padding-left: 7px;
}
.echart_one {
  width: 90%;
  height: 280px;
  margin: 0 auto;
}
.ditu_box {
  display: inline-block;
  width: 36%;
  height: 717px;
  background: #ffffff;
  border-radius: 4px;
  margin-left: 16px;
  margin-right: 16px;
  vertical-align: top;
}
.ditu_box_box {
  width: 100%;
  height: 56px;
  box-shadow: inset 0px -1px 0px 0px rgba(0, 0, 0, 0.05);
  border-radius: 4px 4px 0px 0px;
}
.ditu_box_box_cont {
  width: 100%;
  height: 600px;
  margin: 0 auto;
}
</style>
