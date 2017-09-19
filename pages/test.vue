<template>
  <div id="app">
    <img src="logo.png">
    <h1>{{ msg }}</h1>
    <i class="material-icons">face</i>
    <br/>
    <el-button @click.native="startHacking">Yes!</el-button>
    <br/>
    <nuxt-link :to="{path:'/', meta:{title: 'balabala'}}">home page</nuxt-link>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data: function(){
    return {
      title: "测试",
      msg: 'Want something new?'
    }
  },
  methods: {
    startHacking () {
      this.$notify({
        title: 'Shhh',
        message: 'Just be patient...',
        duration: 6000
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
  h1 {
    background-color: lightgrey;
  }
}

</style>
