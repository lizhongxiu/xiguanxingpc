<template>
  <div>
    <section class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped lang="scss">
.breadcrumb {
  width: 100%;
}
</style>
