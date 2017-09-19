<template>
  <section>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="12" :md="8" :lg="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
  </section>
</template>

<script>
export default {
  layout: "admin"
}
</script>

<style lang="scss" scoped>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>


