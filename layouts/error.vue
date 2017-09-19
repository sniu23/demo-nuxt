<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">页面未找到！</h1>
    <h1 v-else>错误发生！</h1>
    <div>{{error.message}}</div>
    <nuxt-link to="/">回到首页</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style scoped>
.container {
  font-family: sans-serif;
  padding-top: 10%;
  text-align: center;
}
h1 {
  font-size: 20px;
}
</style>