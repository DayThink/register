<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted: function () {
    this.$Message.config({
      top: 20,
      duration: 5
    })
  }
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>
