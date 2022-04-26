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
            <span class="main-breadcrumb-sp">参数设置</span>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </article>
      <div class="main-content">
        <article class="main-form">
          <el-form :rules="rules" :model="formData" class="demo-form-inline" :label-width="formLabelWidth" ref="formName">
            <!-- <el-form-item class="form-item-bottom" label="正常平均速度:" prop="normalAverageVelocity">
              <el-input
                class="input-width"
                onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                v-model="formData.normalAverageVelocity"
                maxlength="20"
                placeholder="请输入正常平均速度"
              ></el-input>
              <span>（单位：个/分钟）</span>
            </el-form-item>
            <el-form-item class="form-item-bottom" label="正常加速度:" prop="normalAccelerateVelocity">
              <el-input
                class="input-width"
                onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                v-model="formData.normalAccelerateVelocity"
                maxlength="20"
                placeholder="请输入正常加速度"
              ></el-input>
              <span>（单位：个/分钟^2）</span>
            </el-form-item> -->
            <el-form-item
              class="form-item-bottom"
              label="计时时间:"
              prop="maxTime"
            >
              <el-input
                class="input-width"
                onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                v-model.number="formData.maxTime"
                maxlength="8"
                placeholder="请输入计时时间(整数1-99999999)"
              ></el-input>
              <span>（单位：秒）</span>
            </el-form-item>
            <el-form-item
              class="form-item-bottom"
              label="计数数量:"
              prop="maxNum"
            >
              <el-input
                class="input-width"
                onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                v-model.number="formData.maxNum"
                maxlength="8"
                placeholder="请输入计数数量(整数1-99999999)"
              ></el-input>
              <span>（单位：个）</span>
            </el-form-item>
            <el-form-item
              class="form-item-bottom"
              label="跳绳数量转化能量值:"
              prop="skipEnergyRadio"
            >
              <el-input
                class="input-width"
                onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                v-model.number="formData.skipEnergyRadio"
                maxlength="8"
                placeholder="请输入跳绳数量转化能量值(整数1-99999999)"
              ></el-input>
              <span>（单位：n:1）</span>
            </el-form-item>
            <el-form-item class="form-item-bottom" label="客服号码:" prop="telephone">
              <el-input class="input-width" v-model="formData.telephone" maxlength="16" placeholder="请输入客服号码"></el-input>
            </el-form-item>
            <el-form-item class="form-item-bottom" label="小队人数上限:" prop="teamMaxMemberCount">
              <el-input class="input-width" v-model="formData.teamMaxMemberCount" placeholder="请输入小队人数上限"></el-input>
            </el-form-item>
            <el-form-item v-allow="'060301'">
              <el-button type="primary" @click="submitForm('formName')">保存</el-button>
            </el-form-item>
          </el-form>
        </article>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
import { validate } from "@/utils/validate.js"; // 正则
export default {
  name: "ParaSet",
  data() {
    return {
      formLabelWidth: "180px",
      formData: {},
      rules: {
        // normalAverageVelocity: [
        //   { required: true, message: "请输入正常平均速度", trigger: "blur" },
        //   {
        //     required: true,
        //     validator: validate("just")
        //   }
        // ],
        // normalAccelerateVelocity: [
        //   { required: true, message: "请输入正常加速度", trigger: "blur" },
        //   {
        //     required: true,
        //     validator: validate("just")
        //   }
        // ],
        maxTime: [
          { required: true, message: "请输入计时时间", trigger: "blur" },
          { required: true, validator: validate("just")}
        ],
        maxNum: [
          { required: true, message: "请输入计数数量", trigger: "blur" },
          { required: true, validator: validate("just")}
        ],
        skipEnergyRadio: [
          {
            required: true,
            message: "请输入跳绳数量转化能量值",
            trigger: "blur"
          },
          {
            required: true,
            validator: validate("just")
          }
        ],
        telephone:[
          { required: true, message: "请输入客服号码", trigger: "blur"}
        ],
        teamMaxMemberCount: [
          {required: true, message: "请输入小队人数上限", trigger: "blur"}
        ]
      }
    };
  },
  mounted() {
    this._getList();
  },
  methods: {
    _getList() {
      this.$api.operation.getSet(this.formData).then(res => {
        if (res.code == 200) {
          this.formData = res.data==null?{}:res.data;
        }
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$api.operation.saveSet({
            id:this.formData.id,
            maxNum:this.formData.maxNum,
            maxTime:this.formData.maxTime,
            skipEnergyRadio:this.formData.skipEnergyRadio,
            telephone:this.formData.telephone,
            teamMaxMemberCount: parseInt(this.formData.teamMaxMemberCount)
          }).then(res => {
            if (res.code == 200) {
              this.$message({
                type: "success",
                message: res.msg
              });
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.main {
  background: #f2f2f2;
  .main-breadcrumb {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 68px;
    padding: 0 25px;
    border-bottom: 1px solid #ececec;
    background: #fff;
    .main-breadcrumb-wrap {
      font-size: 16px;
      line-height: 68px;
      .main-breadcrumb-home {
        cursor: pointer;
        color: #999999;
      }
      .main-breadcrumb-sp {
        color: #5e687a;
      }
    }
  }
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
    .input-width {
      width: 300px;
    }
    .form-item-bottom {
      margin-bottom: 30px;
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
}
</style>
