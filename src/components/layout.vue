<template>
  <div id="layout">
    <img src="../assets/logo.png">
    <div class="layout">
      <!--<p>当前正在进行第 {{ current + 1 }} 步</p>-->
      <Steps :current="current" size="small" class="steps">
        <Step title="注册用户" class="step stepFlex"></Step>
        <Step title="授权公众号" class="step stepFlex"></Step>
        <Step title="开始使用" class="step"></Step>
      </Steps>
      <router-view @next="next"></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        current: 0
      }
    },
    methods: {
      next (str) {
        console.log(str)
        if(str === '0'){
          this.current = 0
        }else if(str === '1'){
          this.current = 1
        }else if(str === '2'){
          this.current = 2
        }
      }
    }
  }
</script>
<style lang="scss" type="text/css">
#layout{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top:5%;
  img{
    width: 80px;
  }
  .layout{
    width: 600px;
  }
  .steps{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding-left: 10px;
    margin-top: 20px;
    .step{
      width: auto!important;
    }
    .stepFlex{
      flex-grow: 1;
    }
  }
}



</style>
