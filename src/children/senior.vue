<template>
  <div>
    <pay-card :paylist="paylist" @money="money"></pay-card>
    <div class="paycontent">
      <div>
        <span>应付金额：<b>{{ payMoneys.fee/100 }}</b>元</span>
      </div>
      <div>
        <Button type="primary"
                class="but"
                @click="paybut()">微信支付</Button>
        <Button type="primary"
                class="but"
                @click="paybut2()">对公支付</Button>
      </div>
    </div>
    <side-bar :isShow ="sidenavShow" :sidenavTitle="sidenavTitle" @closeSidenav="closeSidebar">
      <pay-message v-if="payShow" :payMes="payMoneys" :sidenavTitle="sidenavTitle" :paylist="paylist" @code="code"></pay-message>
      <pay-company v-else="payShow"></pay-company>
    </side-bar>
    <Modal
      v-model="modal3"
      width="360"
      :mask-closable="false">
      <p slot="header" style="text-align: center">
        <span>提示</span>
      </p>
      <p>{{ payCon }}</p>
      <p class="cus">
        <span>若有疑问请联系客服。</span>
        <img id="cusicon" src="../assets/code.png" @mouseenter="qrcode = !qrcode" @mouseleave="qrcode = !qrcode" style="width: 16px">
        <img id="cuscode" src="../assets/qr-code-01-new.jpeg" v-show="qrcode" style="width: 100px;height: 100px;">
      </p>
      <div slot="footer">
        <div class="modBut">
          <div v-if="modbut" class="butstyle">
            <Button class="buts" size="large" @click="">回到控制台</Button>
          </div>
          <div v-else="modbut" class="butstyle">
            <Button class="buts" size="large" @click="close">取消</Button>
            <Button class="buts" type="primary" size="large" @click="paybut">继续支付</Button>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>
<script>
  import SideBar from './second/SideNav'
  import payCard from './second/PayCard'
  import payMessage from './second/PayMessage'
  import payCompany from './second/PayCompany'
  export default {
    components:{
      payCard,
      SideBar,
      payMessage,
      payCompany
    },
    data(){
      return{
        payMoneys:'',
        payMes:'',
        sidenavShow : false,
        modal3:false,
        payShow:false,
        qrcode:false,
        modbut:false,
        sidenavTitle:'企业高级版',
        payCon:'',
        paylist:[
          {
            "name":"年",
            "rec":'推荐',
            "new":"3388",
            "old":"4788",
            "type":2,
            "time":3
          },
          {
            "name":"半年",
            "new":"1999",
            "old":"2304",
            "type":2,
            "time":2
          },
          {
            "name":"月",
            "new":"399",
            "type":2,
            "time":1
          }
        ]
      }
    },
    methods: {
      paybut:function () {
        this.sidenavShow = !this.sidenavShow
        this.payShow = true
        this.modal3 = false
      },
      paybut2:function () {
        this.sidenavShow = !this.sidenavShow
        this.payShow = false
      },
      closeSidebar:function () {
        this.sidenavShow = !this.sidenavShow
        this.payShow = !this.payShow
      },
      close:function () {
        this.modal3 = !this.modal3
      },
      money:function (str) {
        this.payMoneys = str
        console.log(this.payMoneys)
      },
      code:function (str) {
        if(str == 1){
          this.sidenavShow = false
          this.modal3 = !this.modal3
          this.payCon = '支付成功！您已经是{{ sidenavTitle }}会员！'
          this.modbut = true
        }else if(str == 10001){
          this.sidenavShow = false
          this.modal3 = !this.modal3
          this.payCon = '未进行支付。'
          this.modbut = false
        }else if(str == 10002){
          this.sidenavShow = false
          this.modal3 = !this.modal3
          this.payCon = '支付失败！'
          this.modbut = false
        }else if(str == 10003){
          this.sidenavShow = false
          this.modal3 = !this.modal3
          this.payCon = '支付异常！'
          this.modbut = true
        }else if(str == 10004){
          this.sidenavShow = false
          this.modal3 = !this.modal3
          this.payCon = '系统繁忙，请稍后再试！'
          this.modbut = true
        }
      }
    }
  }
</script>
<style lang="scss">
  .cus{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    line-height: 1;
    #cusicon{
      cursor:pointer;
    }
  }
  .ivu-modal-body{
    position: relative;
    min-height: 100px;
  }
  #cuscode{
    position: absolute;
    right: 80px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .modBut{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .butstyle{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      width: 100%;
      .buts{
        width: 100%;
      }
    }
  }
</style>
