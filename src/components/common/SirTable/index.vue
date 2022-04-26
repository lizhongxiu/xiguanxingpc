<template>
  <div>
    <el-scrollbar class="table-wrap">
      <el-table
        v-loading="loading"
        :data="tableData"
        :height="height"
        :stripe="stripe"
        :border="border"
        :max-height="maxHeight"
        :header-cell-style="tabHeadStyle"
        :cell-style="tabcellStyle"
        :row-style="rowStyle"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <!-- 多选 -->
        <el-table-column
          v-if="isSelection"
          type="selection"
          align="center"
          :is-selection="selectable"
        />
        <!-- 索引 -->
        <el-table-column
          v-if="isIndex"
          :label="indexLabel"
          type="index"
          align="center"
          width="50"
        />
        <template v-for="(item, index) in tableCols">
          <!-- 合并单元格 -->
          <el-table-column
            v-if="item.type == 'table_column'"
            :key="index"
            :label="item.label"
            :width="item.width"
            :min-width="item['min-width']"
            :fixed="item.fixed"
            :align="item.align"
            :header-align="item['header-align'] || 'left'"
            :show-overflow-tooltip="item['show-overflow-tooltip'] || true"
          >
            <el-table-column
              v-for="(itema, index) in item.prop"
              :key="index"
              :label="itema.label"
              :prop="itema.prop"
              :width="itema.width"
              :min-width="itema['min-width']"
              :fixed="itema.fixed"
              :align="itema.align"
              :header-align="itema['header-align'] || 'left'"
              :show-overflow-tooltip="itema['show-overflow-tooltip'] || true"
            />
          </el-table-column>
          <!-- 需要插槽 -->
          <el-table-column
            v-if="item.slot && !item.type"
            :key="index"
            :label="item.label"
            :prop="item.prop"
            :width="item.width"
            :min-width="item['min-width']"
            :fixed="item.fixed"
            :align="item.align"
            :header-align="item['header-align'] || 'left'"
            :show-overflow-tooltip="item['show-overflow-tooltip'] || true"
          >
            <template v-if="item.slot" slot-scope="scope" :name="item.slot">
              <slot :name="item.slot" :row="scope.row" />
            </template>
          </el-table-column>
          <!--不需要插槽-->
          <el-table-column
            v-if="!item.slot && !item.type"
            :key="index"
            :label="item.label"
            :prop="item.prop"
            :width="item.width"
            :min-width="item['min-width']"
            :fixed="item.fixed"
            :align="item.align"
            :header-align="item['header-align'] || 'left'"
            :show-overflow-tooltip="item['show-overflow-tooltip'] || true"
          />
        </template>
      </el-table>
    </el-scrollbar>
    <el-pagination
      v-if="pagInationIf"
      :current-page="pagInation.pageNum"
      :total="pagInation.count"
      :page-size="pagInation.pageSize"
      layout="prev, pager, next,total"
      background
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script type="text/ecmascript-6">
// let h=document.body.clientHeight-300
export default {
    name: 'SirTable',
    props: {
        // 加载状态
        loading: {type: Boolean, default: false},
        // 表格列配置
        tableCols: {type: [Array], default: () => []},
        // 表格内数据
        tableData: {type: [Array], default: () => []},
        // 表格是否显示斑马线
        stripe: {type: [Boolean, String], default: false},
        // 表格边框
        border: {type: [Boolean, String], default: false},
        height: {type: [Number, String], default: (document.body.clientHeight) - 400},
        // 最大高度
        maxHeight: {type: [Number, String], default: null},
        // 是否显示表格复选框
        isSelection: {type: [Boolean], default: false},
        // 是否显示表格索引
        isIndex: {type: Boolean, default: true},
        // 索引lable
        indexLabel: {type: String, default: '序号'},
        // 分页数据
        pagInation: {type: Object, default: () => ({pageSize: 10, pageNo: 1, total: 0})},
        pagInationIf: {type: [Boolean], default: true},
    },
    data() {
        return {
            // 表头样式
            tabHeadStyle: {
                'background-color': '#FAFAFA',
                color: '#333333', 'font-weight': 'bold',
                'text-align': 'center'
            },
            // 行样式
            tabcellStyle: {
                color: '#666'
            },
            rowStyle: {
                height: '50px'
            }
        }
    },
    methods: {
        // 据条件禁用某个列表项的选择框
        selectable(row) {
            if ((row.prohibit == null) || (row.prohibit == '')) {
                return true
            } else {
                return false
            }
        },
        // 多选事件，保存选择项到指定参数
        handleSelectionChange(val) {
            this.$emit('checkbox-data', val)
        },
        // 翻页触发
        handleCurrentChange(val) {
            this.pagInation.pageNum = val
            this.$emit('refresh', this.pagInation)

        }
    }
}
</script>

<style lang="scss" scoped>
.el-table td {
  /*min-height: 40px;*/
  /*padding: 0 !important;*/
}

/deep/ .el-table--enable-row-transition .el-table__body td {
  min-height: 40px;
  padding: 0;
  text-align: center !important;
}

/deep/ .el-scrollbar__wrap {
  //height: $tableCalc;
}

/*分页*/
.el-pagination {
  float: right;
  margin-top: 25px;
}

/deep/ .el-pagination.is-background {
  .number,
  .btn-prev,
  .btn-next {
    background-color: #fff;
    border: 1px solid #ebedf0;
  }

  .el-pager li {
    background-color: #fff;
  }
}

/deep/ .el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #499bfc;
}

/deep/ .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #499bfc;
  color: #fff;
}
</style>
