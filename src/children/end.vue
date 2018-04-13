<template>
  <div id="endBox">
    <div class="sucbox">
      <Icon v-bind:type="type" size="50" :color="color"></Icon>
      <span>{{ msgword }}</span>
    </div>
    <div class="conbox">
      <Button @click="add">继续授权+</Button>
      <Button type="primary" @click="console" v-if="open">进入控制台</Button>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
    export default {
      beforeCreate:function () {
        this.$emit('next',"2");
      },
      data(){
        return{
          msg:this.$route.query.msg,
          msgword:'',
          username:this.$route.query.username,
          type:'',
          color:'',
          open:false
        }
      },
      methods:{
        add (){
          location.href='http://testopen.playhudong.com/index.html?username='+this.username
        },
        console(){
          axios.post('http://testopen.playhudong.com/login/getToken',{
           username:this.username
          })
            .then(res =>{
              alert(res.data.data)
              window.open('http://lh.playhudong.com/#/login?username='+this.username+'&wx=true&code='+res.data.data)
//              location.href='http://localhost:9527/#/login?username='+this.username+'&wx=true&code='+res.data.data
            })
        }
      },
      mounted:function () {
        if(this.msg == 0){
          this.msgword = '授权失败'
          this.type = 'ios-close'
          this.color = '#ED3F14'
          this.open = false
        }else if(this.msg == 1){
          this.msgword = '授权成功'
          this.type = 'checkmark-circled'
          this.color = '#1888F5'
          this.open = true
        }else if(this.msg == 2){
          this.msgword = '已经授权过了'
          this.type = 'checkmark-circled'
          this.color = '#1888F5'
          this.open = true
        }else if(this.msg == 3){
          this.msgword = '非认证的公众号无法授权，请去公众号后台取消授权'
          this.type = 'ios-information'
          this.color = '#ED3F14'
          this.open = false
        }else if(this.msg == -1){
          this.msgword = '您的VIP已经过期'
          this.type = 'ios-information'
          this.color = '#FF9900'
          this.open = true
        }else if(this.msg == -2) {
          this.msgword = '授权数量超出，请进入控制台或者取消其他公众号授权'
          this.type = 'ios-close'
          this.color = '#FF9900'
          this.open = true
        };
      }
    }
</script>
<style>
  #endBox{
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
  #endBox .sucbox{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  #endBox .sucbox span{
    font-size: 14px;
    margin-top: 5px;
    letter-spacing: 1px;
  }
  .conbox{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 400px;
    margin-top: 80px;
  }
  .conbox button{
    letter-spacing: 1px;
    width: 150px;
    margin: 0 auto;
  }
</style>
