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
      v-model="modal4"
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
        modal4:false,
        payShow:false,
        qrcode:false,
        modbut:false,
        sidenavTitle:'企业基础版',
        payCon:'',
        paylist:[
          {
            "name":"年",
            "rec":'推荐',
            "new":"888",
            "old":"1188",
            "type":1,
            "time":3
          },
          {
            "name":"半年",
            "new":"499",
            "old":"594",
            "type":1,
            "time":2
          },
          {
            "name":"月",
            "new":"99",
            "type":1,
            "time":1
          }
        ]
      }
    },
    methods: {
      paybut:function () {
        this.sidenavShow = !this.sidenavShow
        this.payShow = true
        this.modal4 = false
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
        this.modal4 = !this.modal4
      },
      money:function (str) {
        this.payMoneys = str
        console.log(this.payMoneys)
      },
      code:function (str) {
        if(str == 1){
          this.sidenavShow = false
          this.modal4 = !this.modal4
          this.payCon = '支付成功！您已经是{{ sidenavTitle }}会员！'
          this.modbut = true
        }else if(str == 10001){
          this.sidenavShow = false
          this.modal4 = !this.modal4
          this.payCon = '未进行支付。'
          this.modbut = false
        }else if(str == 10002){
          this.sidenavShow = false
          this.modal4 = !this.modal4
          this.payCon = '支付失败！'
          this.modbut = false
        }else if(str == 10003){
          this.sidenavShow = false
          this.modal4 = !this.modal4
          this.payCon = '支付异常！'
          this.modbut = true
        }else if(str == 10004){
          this.sidenavShow = false
          this.modal4 = !this.modal4
          this.payCon = '系统繁忙，请稍后再试！'
          this.modbut = true
        }
      }
    }
  }
</script>
<style lang="scss">
  .seniorbox{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  .senior{
    width: 250px;
    height: 80px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #dddddd;
  .newPay{
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: 1px;
  b{
    font-size: 18px;
  }
  }
  .oldPay{
    font-size: 12px;
    text-decoration:line-through;
    color: #cccccc;
    letter-spacing: 1px;
  }
  .recommend{
    position: absolute;
    left: 0;
    top:0;
    font-size: 12px;
    color: #ffffff;
    line-height: 1;
    background: #FF5001;
    padding: 2px 5px;
  }
  }
  .active{
    background-image: url(../assets/active.png);
    background-repeat: no-repeat;
    background-size: 25px;
    background-position: right bottom;
    border: 2px solid #FF5001;
  }
  }
</style>
