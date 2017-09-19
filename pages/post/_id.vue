<template>
  <div class="container">
    <h1>Post!</h1>
    <h3>{{$route.params.id}}</h3>
    <h3>{{$route.query}}</h3>
    <h3>{{$route.hash}}</h3>
    <h3>{{$route.fullPath}}</h3>
    <h3>{{$route.name}}</h3> 
  </div>
</template>

<script>
export default {
  layout: 'admin'
}
</script>
