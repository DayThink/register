<template>
  <div class="payMessage">
    <h2>购买支付</h2>
    <div class="payMes">
      <span>您当前购买的版本：</span>
      <b>{{ sidenavTitle }}</b>
    </div>
    <div class="payMes">
      <span>应付金额：</span>
      <b>{{ payMes.fee/100 }}元</b>
    </div>
    <div class="payMes">
      <span>会员有效期至：</span>
      <b>{{ payMes.time }}</b>
    </div>
    <div class="payMes">
      <span>支付方式：</span>
        <qrcode
          :value="url"
          :options="{ size: 120 }">
        </qrcode>
      <span class="payUrl">微信扫码支付</span>
    </div>
    <div class="payMes">
      <Button type="primary" @click="paySuc">我已支付完成</Button>
    </div>
  </div>
</template>
<script>
  import QRCode from '@xkeshi/vue-qrcode'
  import { payMessage } from '../../api/payment'
  export default {
    name:'pay-message',
    props: ['payMes','sidenavTitle'],
    components: {
      qrcode: QRCode
    },
    data(){
      return{
        url:this.payMes.url
      }
    },
    methods:{
      paySuc:function () {
        let orderId = this.payMes.orderid
        payMessage(orderId).then(res =>{
            let code = res.data.code
            this.$emit('code',code)
          })
      }
    }
  }
</script>
<style lang="scss">
.payMessage{
    display: flex;
    flex-direction: column;
    padding:0 0 30px 20px;
  .payMes{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 6%;
    span{
      font-size: 14px;
      margin-bottom: 8px;
    }
    b{
      font-size: 16px;
    }
    .payUrl{
      width: 120px;
      margin-top: 8px;
      text-align: center;
    }
  }
}
</style>
