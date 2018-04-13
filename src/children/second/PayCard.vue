<template>
  <div class="seniorbox">
    <div class="senior"
         v-for="(pay,index) in paylist"
         :class="{active:index == isActive}"
         @click="payTab(index)">
      <div class="recommend" v-if="pay.rec">{{ pay.rec }}</div>
      <span class="newPay">￥<b>{{ pay.new }}</b>/{{ pay.name }}</span>
      <span class="oldPay" v-if="pay.old">￥{{ pay.old }}/{{pay.name}}</span>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import { payCard } from '../../api/payment'
    export default {
      name:'pay-card',
      data(){
        return{
          isActive:0
        }
      },
      props:{
        paylist:Array
      },
      created:function () {
        this.payAxios(this.isActive)
        this.$emit('money',this.paylist[this.isActive].new);
      },
      methods: {
        payTab: function(index) {
          this.isActive = index;
          this.payAxios(index)
        },
        payAxios:function (index) {
          let type = this.paylist[index].type
          let time = this.paylist[index].time
          payCard(type,time)
            .then(res =>{
            this.$emit('money',res.data.data);
          })

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
    background-image: url(../../assets/active.png);
    background-repeat: no-repeat;
    background-size: 25px;
    background-position: right bottom;
    border: 2px solid #FF5001;
  }
}
</style>
