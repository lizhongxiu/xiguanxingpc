<template>
  <div></div>
</template>

<script type="text/ecmascript-6">

export default {
  props: {
    fileUrl: {
      type: String,
      default: ""
    },
    upRule: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      tableInfo: {
        visible: true,
        id: null,  // 没有自定义获取数据方法时必须
        api: null, // 没有自定义获取数据方法时必须
        searchType: 1,
        data: [],
        dataPath: null,
        dataCount: 0,
        pageIndex: 1,
        pageSize: 20,
        noPaging: null,
        requirement: {},
        key: '',
        exportParam: {},
        sort: {
          prop: '',
          order: ''
        },
      },
      tableHeight: 600,
      isLoading: false,
    };
  },
  created () {
    this.initDefaultValue()
    window.addEventListener('resize', this.calTableHeight)
    this.initCreated()
    this.initCreatedAfter()
  },
  mounted () {
    this.initRoute()
    this.initMounted()
    this.initMountedAfter()
    this.$nextTick(() => {
      this.calTableHeight()
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.calTableHeight)
  },
  methods: {
    // 计算表格高度
    calTableHeight () {
      if (this.$refs.container && this.$refs.top && this.$refs.bottom) {
        this.tableHeight = this.$refs.container.offsetHeight - 24 - this.$refs.top.offsetHeight - this.$refs.bottom.offsetHeight
      }
    },
    initDefaultValue () {
      if (!this.tableInfo.id) {
        this.$alert('表格id为空')
      } else if (!this.tableInfo.api) {
        this.$alert('表格数据接口为空')
      }
    },
    // 获取数据列表
    getDataList (resetPageIndex = false, customParam, customCallBack) {
      if (resetPageIndex) {
        this.tableInfo.pageIndex = 1
      }
      let params = this.getParam(customParam)
      if (this.tableInfo.api) {
        this.isLoading = true
        this.tableInfo.api(params).then(({data}) => {
          if (data && data.code === 0) {
            let size = data.page.exResults.mergeTableMaxSize || 6
            this.tableInfo.excessRows = Math.ceil(size / 2) + 3
            if (this.tableInfo.dataPath) {
              let dataResult = data
              for (let i in this.tableInfo.dataPath) {
                dataResult = dataResult[this.tableInfo.dataPath[i]]
              }
              if (this.tableInfo.reloadData) {
                if (this.tableInfo.setColorTwo) {
                  this.$refs[this.tableInfo.id].reloadData(this.setColorHandle(dataResult))
                } else {
                  this.$refs[this.tableInfo.id].reloadData(dataResult)
                }
              } else {
                if (this.tableInfo.setColorTwo) {
                  this.tableInfo.data = this.setColorHandle(dataResult)
                } else {
                  this.tableInfo.data = dataResult
                }
              }
            } else {
              if (this.tableInfo.reloadData) {
                if (this.tableInfo.setColorTwo) {
                  this.$refs[this.tableInfo.id].reloadData(this.setColorHandle(data.page.list))
                } else {
                  this.$refs[this.tableInfo.id].reloadData(data.page.list)
                }
              } else {
                if (this.tableInfo.setColorTwo) {
                  this.tableInfo.data = this.setColorHandle(data.page.list)
                } else {
                  this.tableInfo.data = data.page.list
                }
              }
            }
            if (!this.tableInfo.noPaging) {
              this.tableInfo.dataCount = data.page.totalCount
            }
            if (this.tableInfo.setBgColor) {
              this.$nextTick(() => {
                setTimeout(() => {
                  this.$api.commonSelectComplexTable.renderEvenOdd(this.tableInfo.id,
                          this.$api.commonSelectComplexTable.renderColor(),
                          this.$api.commonSelectComplexTable.ifRenderEvenOdd())
                }, 200)
              })
            }
            if (typeof (this.tableInfo.getDataCallBack) === 'function') {
              this.tableInfo.getDataCallBack(true, params, data)
            }
          } else {
            this.tableInfo.data = []
            this.tableInfo.dataCount = 0
            this.tableInfo.pageIndex = 1
            if (typeof (this.tableInfo.getDataCallBack) === 'function') {
              this.tableInfo.getDataCallBack(false, params, data)
            }
          }
          if (this.tableInfo.routeParam) {
            this.tableInfo.routeParam = null
          }
          if (customCallBack) {
            customCallBack()
          }
          // 设置颜色
          // if (this.tableInfo.setColorTwo) {
          //   let idNum = -1
          //   let counNumber = 0
          //   let colorT = ['odd', 'even']
          //   let rowSpanList = []
          //   this.tableInfo.data.forEach(item => {
          //     if (item.rowspan) {
          //       rowSpanList.push(item.rowspan)
          //     }
          //     if (item.id === idNum) {
          //       item.colorType = colorT[counNumber % 2]
          //     } else {
          //       counNumber = counNumber + 1
          //       idNum = item.id
          //       item.colorType = colorT[counNumber % 2]
          //     }
          //   })
          //   this.maxRowSpan = Math.max(...rowSpanList) // 拿到合并最大值
          // }
          this.isLoading = false
          this.tableDoLayout()
        })
      }
    },
    // 组装请求参数
    getParam (customParam) {
      let params = {
        page: this.tableInfo.pageIndex,
        limit: this.tableInfo.pageSize,
        order: this.tableInfo.sort.order
      }
      if (this.tableInfo.sort.order) {
        params.sidx = this.tableInfo.sort.prop
      }
      for (let k in this.tableInfo.requirement) {
        params[k] = this.getParamValue(this.tableInfo.requirement[k])
      }
      if (this.tableInfo.searchType === 1) {
        params.key = this.tableInfo.key
        if (this.tableInfo.quickSearch) {
          for (let k in this.tableInfo.quickSearch) {
            params[k] = this.getParamValue(this.tableInfo.quickSearch[k])
          }
        }
      }
      if (customParam) {
        for (let key in customParam) {
          if (customParam[key]) {
            params[key] = customParam[key]
          }
        }
      }
      this.exportParam = JSON.parse(JSON.stringify(params))
      return params
    },
    getParamValue (value) {
      if (value instanceof Array) {
        return value.join(',')
      }
      return value
    },
    initCreated() {},
    initCreatedAfter() {},
    initMountedAfter() {},
    initMounted() {},
    initRoute() {},

  }
};
</script>

<style scoped lang="scss">
.up-box {
  display: flex;
  align-items: center;
  justify-content: center;
  .up-prompt {
    margin-left: 30px;
    color: red;
  }
}
.avatar-uploader {
  width: 400px;
  height: 60px;
  border: solid 1px #dddddd;
  display: flex;
  align-items: center;
}
.el-upload {
  width: 100%;
}
.avatar-uploader-icon {
  width: 400px;
  display: block;
  line-height: 60px;
  font-size: 30px;
}
.fileUrl {
  font-size: 12px;
  text-align: left;
}
</style>
