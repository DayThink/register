<template>
  <div id="app">
      <img src="./assets/logo.44de126.png">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
  img{
    width: 200px;
  }
</style>
