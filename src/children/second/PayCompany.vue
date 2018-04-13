<template>
  <div class="payMessage">
    <h2>购买支付</h2>
    <div class="payMes">
      <span>开户名称：</span>
      <b>北京小黄人科技有限公司</b>
    </div>
    <div class="payMes">
      <span>开户银行：</span>
      <b>招商银行北京海淀支行</b>
    </div>
    <div class="payMes">
      <span>开户账号：</span>
      <b>110911033610802</b>
    </div>
    <div class="payMes">
      <span>联系客服：</span>
      <span>Playhudong011</span>
        <img src="../../assets/qr-code-01-new.jpeg" style="width: 120px">
        <span class="payUrl">微信扫码添加客服</span>
    </div>
  </div>
</template>
<script>
    export default {
      name:'pay-company',
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
    text-align: center;
  }
  }
  }
</style>
