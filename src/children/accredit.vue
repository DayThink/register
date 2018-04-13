<template>
    <div id="accreditBox">
      <Button @click="end">微信公众号授权登陆</Button>
      <div class="notice">
        <span>授权登录须知：</span>
        <span>1.授权登录方式由微信公众号官方提供，无需输入账号密码，请放心授权</span>
        <span>2.以授权形式使用火眼金睛，公众号已设置的关键词、菜单等不受影响</span>
        <span>3.取消授权请到微信公众号后台-添加功能插件-插件管理-详情中取消</span>
      </div>
    </div>
</template>
<script>
    export default {
      methods:{
        end(){
          location.href='http://testopen.playhudong.com/index.html?username='+this.$route.params.username
        }
      },
      beforeCreate:function () {
        this.$emit('next',"1");
      }
    }
</script>
<style>
  #accreditBox{
    width: 600px;
    min-height:400px;
    margin: 20px auto;
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 0 10px rgba(0,0,0,0.4);
  }
  #accreditBox .notice{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 50px;
    font-size: 12px;
    line-height: 1.8;
  }
</style>
