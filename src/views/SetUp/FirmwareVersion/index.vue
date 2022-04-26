/* eslint-disable no-unused-vars */
<template>
  <div>
    <section class="main">
      <article class="main-breadcrumb">
        <el-breadcrumb separator="/" class="main-breadcrumb-wrap">
          <el-breadcrumb-item>
            <span class="main-breadcrumb-home">设置管理</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <span class="main-breadcrumb-sp" @click="hiddenVideo"
              >固件信息</span
            >
          </el-breadcrumb-item>
        </el-breadcrumb>
        <el-button
          v-allow="'060402'"
          size="small"
          type="primary"
          @click="_openAddEdit({}, 'add')"
          >添加</el-button
        >
      </article>
      <div class="main-content">
        <article class="main-form">
          <el-form
            ref="ruleForm"
            :inline="true"
            :model="formData"
            class="demo-form-inline"
          >
            <el-form-item label="固件信息:" prop="name">
              <el-input
                placeholder="版本号/内容"
                v-model="formData.key"
                maxlength="20"
              ></el-input>
            </el-form-item>
            <el-form-item v-allow="'060401'">
              <el-button type="primary" @click="search">查询</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </article>
        <article class="main-table">
          <SirTable
            :table-cols="tableCols"
            :table-data="tableData"
            :pag-ination="pagination"
            class="table-wrap"
            @refresh="refresh"
            @checkbox-data="checkBoxData"
          >
            <!--                        <template slot="url" slot-scope="scope">-->
            <!--                            <span class="videoTitle" @click="videoPlay(scope.row.url)">{{scope.row.url}}</span>-->
            <!--                        </template>-->
            <!--按钮-->
            <template slot="operation" slot-scope="scope">
              <span
                v-allow="'060403'"
                class="main-table-btn"
                @click="_openAddEdit(scope.row, 'edit')"
                >编辑</span
              >
              <span
                v-allow="'060404'"
                class="main-table-btn main-table-delete"
                @click="_delete(scope.$index, scope.row)"
                >删除</span
              >
            </template>
          </SirTable>
        </article>
      </div>
      <addEditDialog
        ref="addEditDialog"
        :addEditForm="addEditForm"
        :isAddEditDialog="isAddEditDialog"
      />
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
import {Page} from "@/utils/commonDataModel";
import AddEditDialog from "./components/addEditDialog";

export default {
    name: "firmwareVersion",
    components: {
        AddEditDialog
    },
    data() {
        return {
            videoSrc: "",
            dialogFormVisible: false,
            formData: {
                key: "",
                pageNum: 1,
                pageSize: 10
            },
            tscoreRubricArr: [
                {
                    id: 0,
                    name: "动作标准度"
                },
                {
                    id: 1,
                    name: "节奏性"
                },
                {
                    id: 2,
                    name: "协调性"
                },
                {
                    id: 3,
                    name: "稳定性"
                },
                {
                    id: 4,
                    name: "耐力"
                }
            ],
            tableData: [],
            tableCols: [
                {
                    label: "版本号",
                    prop: "version",
                    width: '250px'
                },
                {
                    label: "app地址",
                    // slot: "url"
                    prop: "url",
                    // width: '250px'
                },
                {
                    label: "内容",
                    prop: "content",
                    width: '250px'
                },
                {
                    label: "操作",
                    align: "center",
                    "header-align": "center",
                    fixed: "right",
                    width: "150px",
                    slot: "operation"
                }
            ],
            // 表格分页
            pagination: new Page(),
            addEditForm: {},
            isAddEditDialog: false
        };
    },
    mounted() {
        this._getList();
    },
    methods: {
        _getList() {
            this.$api.FirmwareVersion.getFirmwareList(this.formData).then(res => {
                if (res.code == 200) {
                    this.tableData = res.data;
                    this.pagination.count = res.count;
                }
            });
        },
        search(){
            this.formData.pageNum=1
            this._getList()
        },
        _closeaddEdit() {
            this.isAddEditDialog = false;
        },
        hiddenVideo() {
            this.dialogFormVisible = false;
        },
        _openAddEdit(row, type) {
            //add新增，//edit编辑
            let obj = {};
            obj["formType"] = type;
            if (type == "edit") {
                this.$api.FirmwareVersion.getFirmware({id: row.id}).then(res => {
                    obj = {
                        ...obj,
                        ...res.data
                    };
                    this.addEditForm = obj;
                });
            } else {
                this.addEditForm = obj;
            }
            this.$refs.addEditDialog.init(type,row)
            this.isAddEditDialog = true;
        },
        // 搜索框重置
        resetForm(formName) {
            this.$refs[formName].resetFields();
            this._getList();
        },
        // 分页多选操作
        checkBoxData(val) {
            console.log(val);
        },
        // 分页
        refresh(val) {
            this.formData = {
                ...this.formData,
                pageSize: val.pageSize,
                pageNum: val.pageNum
            };
            // 执行查询列表
            this._getList(this.formData);
        },
        _delete(index, row) {
            console.log(index, row);
            this.$confirm(`您是否确定删除`, "提示", {
                distinguishCancelAndClose: true,
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                confirmButtonClass: "subDelete"
            })
                .then(() => {
                    this.$api.FirmwareVersion.delFirmware({id: row.id}).then(res => {
                        if (res.code == 200) {
                            this.$message({
                                type: "success",
                                message: res.msg
                            });
                            this._getList();
                        } else {
                            this.$message({
                                type: "error",
                                message: res.meg
                            });
                        }
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                });
        }
    }
};
</script>

<style scoped lang="scss">
.main {
  background: #f2f2f2;
  /*.main-breadcrumb {*/
  /*    display: flex;*/
  /*    justify-content: space-between;*/
  /*    align-items: center;*/
  /*    width: 100%;*/
  /*    height: 68px;*/
  /*    padding: 0 25px;*/
  /*    border-bottom: 1px solid #ececec;*/
  /*    background: #fff;*/
  /*    .main-breadcrumb-wrap {*/
  /*        font-size: 16px;*/
  /*        line-height: 68px;*/
  /*        .main-breadcrumb-home {*/
  /*            color: #999999;*/
  /*        }*/
  /*        .main-breadcrumb-sp {*/
  /*            color: #5e687a;*/
  /*            cursor: pointer;*/
  /*        }*/
  /*    }*/
  /*}*/
  .main-form {
    width: 100%;
    min-height: 80px;
    padding: 0 25px 15px 25px;
    overflow: hidden;
    background: #fff;
    .demo-form-inline {
      margin-top: 24px;
    }
    .el-form-item {
      margin-bottom: 5px;
    }
  }
  .main-table {
    width: 100%;
    padding: 0 25px;
    padding-top: 20px;
    overflow: hidden;
    margin-top: 20px;
    background: #fff;
    .table-wrap {
      height: calc(100vh - (306px));
    }
    .main-table-btn {
      color: #499bfc;
      cursor: pointer;
      margin-right: 10px;
      font-size: 14px;
      .main-table-frozen {
        color: #804c75;
      }
      .main-table-enable {
        color: #1fbba6;
      }
      i {
        font-size: 14px;
        vertical-align: baseline;
      }
      &:last-child {
        margin-right: 0;
      }
      &.main-table-delete {
        color: #fd5254;
        i {
          color: #fd5254;
        }
      }
    }
  }
  .main-dialog {
    height: calc(100vh - 251px);
    background: #fff;
  }

  /deep/.el-form-item__label {
    line-height: 32px;
  }
  /deep/.el-form-item__content {
    line-height: 32px;
    .el-input__inner {
      height: 32px;
      line-height: 32px;
    }
  }
  /*分页*/
  .el-pagination {
    float: right;
    margin-top: 25px;
  }
  /deep/.el-pagination.is-background {
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
  /deep/.el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #499bfc;
  }
  /deep/.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #499bfc;
    color: #fff;
  }
  .videoTitle {
    color: blue;
    cursor: pointer;
  }
  .video {
    margin-top: 20px;
  }
}
</style>
