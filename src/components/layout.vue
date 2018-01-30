<template>
    <div class="layout">
      <p>当前正在进行第 {{ current + 1 }} 步</p>
      <Steps :current="current" size="small" class="steps">
        <Step title="注册用户" class="step stepFlex"></Step>
        <Step title="授权登录" class="step stepFlex"></Step>
        <Step title="开始使用" class="step"></Step>
      </Steps>
      <Register @next="next"></Register>
      <Button type="primary" @click="next">Next step</Button>
    </div>
</template>
<script>
  import Register from './Register'

  export default {
    components:{
      Register
    },
    data () {
      return {
        current: 0
      }
    },
    methods: {
      next (str) {
        console.log(str)
        /*if(str === 'ok'){

        }*/
        if (this.current == 2) {
          this.current = 0;
        } else {
          this.current += 1;
        }
      }
    }
  }
</script>
<style>
.layout{
  width: 600px;
}
.steps{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-left: 10px;
}
  .step{
    width: auto!important;
  }
  .stepFlex{
    flex-grow: 1;
  }
</style>
