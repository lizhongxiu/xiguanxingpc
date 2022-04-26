<template>
  <div>
    <el-scrollbar>
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm form-rules-show"
        :class="{ 'form-rules-show': seeType }"
      >
        <el-row>
          <el-col :span="24">
            <el-form-item label="客户名称:" prop="customer">
              <el-input
                :disabled="seeType"
                maxlength="20"
                v-model="ruleForm.customer"
                placeholder="请输入客户名称"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="客户类型:" prop="type">
              <el-select
                clearable
                :disabled="seeType"
                v-model="ruleForm.type"
                placeholder="请选择客户类型"
              >
                <el-option
                  v-for="(item, index) in dictType"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="客户地址:" prop="address">
              <el-input
                :disabled="seeType"
                maxlength="200"
                v-model="ruleForm.address"
                placeholder="请输入客户地址"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="客户电话:" prop="phone">
              <el-input
                maxlength="11"
                :disabled="seeType"
                v-model="ruleForm.phone"
                placeholder="请输入客户电话"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="客户负责人:" prop="principal">
              <el-input
                :disabled="seeType"
                maxlength="20"
                v-model="ruleForm.principal"
                placeholder="请输入客户负责人"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button
            v-if="!seeType"
            type="primary"
            @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-scrollbar>
  </div>
</template>

<script type="text/ecmascript-6">
import { validate } from '@/utils/validate.js' // 正则

export default {
  props: {
    status: {
      type: String,
      default: 'create'
    },
    tabledata: {
      type: [Object, String, Array],
      default: ()=> {}
    }
  },
  data() {
    return {
      ruleForm: {
        customer: '',
        type: '',
        address: '',
        phone: '',
        principal: '',
      },
      dictType:[
        {label: '类型1',value: '1'},
        {label: '类型2',value: '2'},
      ],
      // 查看状态，禁止修改
      seeType: false,
      rules: {
        customer: [
          { required: true, message: '请输入客户名称', trigger: 'blur' },
        ],
        type: [
          { required: true, message: '请选择客户类型', trigger: 'blur' },
        ],
        address: [
          { required: true, message: '请输入客户地址', trigger: 'blur' },
        ],
        phone: [
          { required: true, message: '请输入客户电话', trigger: 'blur' },
          { validator: validate('phone') }
        ],
        principal: [
          { required: true, message: '请输入客户负责人', trigger: 'blur' },
        ],
      }
    };
  },
  created() {
    // 判断是编辑就赋值
    if (this.status != 'create') {
      this.ruleForm = this.tabledata
    }
    // 如果是查看就禁止输入
    if (this.status == 'see') {
      this.seeType = true
    }
  },
  methods: {
    // 新增||修改
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.status == 'create') {
            this.$message({
              type: 'success',
              message: '添加成功'
            })
            this.$emit('CloseClick',this.ruleForm)
          } else {
            this.$message({
              type: 'success',
              message: '修改成功'
            })
            this.$emit('CloseClick',this.ruleForm)
          }
          console.log(this.ruleForm)
          // 执行完毕关闭窗口
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      // 执行完毕关闭窗口
      this.$emit('CloseClick',this.ruleForm)
    }
  }
}
</script>

<style scoped lang="scss">
.demo-ruleForm {
  width: 600px;
  margin: 0 auto;
  padding-top: 45px;
  .el-col {
    margin-bottom: 24px;
  }
}
/deep/.el-scrollbar__wrap {
  height: calc(100vh - 251px);
}
/* 下拉框 */
/deep/.el-select {
  display: block;
}
</style>
