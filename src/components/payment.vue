<template>
    <div class="paymentbox">
      <div class="title">
          <img src="../assets/logo.png">
          <span>15035876023</span>
      </div>
      <div class="payment">
        <h2 class="paytitle">升级会员</h2>
        <span class="payname">当前账号：15035876023</span>
        <div class="table">
          <div v-for="(list,index) in navLists"
               class="tab"
               :class="{active:index == isActive}"
               @click="toggleTab(list.name,index)">{{ list.text }}</div>
        </div>
        <prince :is="currentTab"></prince>
        <h2 class="paytitle">会员权益对比</h2>
        <Table border :columns="columns1" :data="data1"></Table>
      </div>
      <Modal
        v-model="modal1"
        width="360"
        :mask-closable="false">
        <p slot="header" style="text-align: center">
          <span>提示</span>
        </p>
        <p>您选择的是“基础版会员”，支持授权一个公众号，您已绑定多个公众号，选择“继续”保留1个公众号，其他账号功能将被禁用。</p>
        <p>选择“升级高级版”可以授权5个公众号，每月服务调用量升级为100000次</p>
        <div slot="footer">
          <div class="modBut">
            <Button class="buts" size="large" @click="con">继续</Button>
            <Button class="buts" type="primary" size="large" @click="upgrade">升级高级版</Button>
          </div>
        </div>
      </Modal>
      <Modal
        v-model="modal2"
        width="360"
        :mask-closable="false">
        <p slot="header" style="text-align: center">
          <span>提示</span>
        </p>
        <p>您目前是“基础版会员”，仅支持1个公众号，请选中你要保留的公众号，点击【确认选择】，其他账号功能将被禁用。</p>
        <p>选择“升级高级版”可以最多授权5个公众号，每月服务调用量升级为100000次。</p>
        <p>
          <RadioGroup  v-model="animal">
            <Radio v-for="(wechat,index) in nickArray"
                   :key="index"
                   :label="wechat.appId"
                   @click="wechat(index)">{{ wechat.nickName }}</Radio>
          </RadioGroup>
        </p>
        <div slot="footer">
          <div class="modBut">
            <Button class="buts" size="large" @click="up">确认选择</Button>
            <Button class="buts" type="primary" size="large" @click="upgrade">升级高级版</Button>
          </div>
        </div>
      </Modal>
    </div>
</template>
<script>
  import senior from '@/children/senior';
  import basis from '@/children/basis';
  import { login,up } from '../api/payment'
  export default {
    data () {
      return {
        currentTab: 'senior',
        isActive: 0,
        nickArray:'',
        modal1: false,
        modal2: false,
        animal:'',
        appid:'',
        columns1: [
          {
            title: '版本对比',
            key: 'name'
          },
          {
            title: '企业高级版',
            align:'center',
            key: 'senior'
          },
          {
            title: '企业基础版',
            align:'center',
            key: 'basis'
          }
        ],
        data1: [
          {
            name: '适用公司范围',
            senior: '运营多个认证公众号',
            basis: '运营一个认证公众号'
          },
          {
            name: '授权公众号数量',
            senior: '5',
            basis: '1'
          },
          {
            name: '服务调用量',
            senior: '10W次/月',
            basis: '1W次/月'
          },
          {
            name: '是否支持回复多条消息',
            senior: '支持',
            basis: '支持'
          },
          {
            name: '是否支持自动回复',
            senior: '支持',
            basis: '支持'
          },
          {
            name: '自动回复是否区分粉丝性别',
            senior: '区分性别',
            basis: '区分性别'
          },
          {
            name: '是否支持插入粉丝昵称',
            senior: '支持',
            basis: '支持'
          },
          {
            name: '是否支持插入粉丝数量',
            senior: '支持',
            basis: '支持'
          },
          {
            name: '是否显示头像',
            senior: '支持',
            basis: '支持'
          }
        ],
        navLists:[
          {
            "text":"企业高级版",
            "name":"senior"
          },
          {
            "text":"企业基础版",
            "name":"basis"
          }
        ]
      }
    },
    components: {
      senior,
      basis
    },
    methods: {
      toggleTab: function(tab,index) {
        this.currentTab = tab;
        this.isActive = index;
        if(tab == 'basis'){
          if(this.nickArray.length>0){
            this.modal1 = true
          }
        }
      },
      con:function () {
        this.modal1 = false
        this.modal2 = true
      },
      upgrade:function () {
        this.modal1 = false;
        this.currentTab = 'senior';
        this.isActive = 0
      },
      up:function () {
        let appId = this.animal
        up(appId).then(res =>{
            if(res.data.code == 20000){
              this.$Message.success('设置成功')
              this.modal2 = !this.modal2
            }else {
              this.$Message.error('设置错误，请重新选择')
            }

          })
      }
    },
    beforeCreate:function () {
      login().then(res =>{
          this.nickArray = res.data.data
          this.animal = this.nickArray[0].appId
        })
    }
  }
</script>
<style lang="scss">
.paymentbox{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #F6F8FB;
  padding: 0 0 50px;
  .title{
    width: 100%;
    height: 50px;
    background: #324053;
    display: flex;
    justify-content:space-between;
    align-items: center;
    flex-direction: row;
    padding:0 10px;
    img{
      width: 120px;
    }
  }
  .payment{
    background: #ffffff;
    width: 1200px;
    padding:20px 120px;
    .paytitle{
      margin-bottom: 20px;
    }
    .payname{
      font-size: 14px;
      font-weight: bold;
    }
    .table{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content:space-between;
      margin:30px 0;
      .tab{
        width: 350px;
        height: 120px;
        text-align: center;
        line-height: 120px;
        font-size: 20px;
        color:#000;
        &:first-child{
          background: #DBC498;
         }
        &:last-child{
          background: #CBCDD9;
        }
      }
      .active{
        box-shadow:2px 2px 6px rgba(0,0,0,0.5);
      }
    }
    .paycontent{
      margin: 40px 0;
      font-size: 16px;
      letter-spacing: 1px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-direction: row;
      b{
        font-size: 18px;
      }
      .but{
        width: 120px;
        font-size: 14px;
        letter-spacing: 1px;
        margin-left: 20px;
      }
    }
  }
}
.modBut{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .buts{
    width: 100%;
  }
}
.ivu-modal-body{
  font-size: 14px;
  padding:20px;
  p+p{
    margin-top: 10px;
  }
}
.ivu-modal-footer button+button{
  margin-left: 20px;
}
.ivu-modal-header p, .ivu-modal-header-inner{
  font-size: 16px;
  letter-spacing: 2px;
}
</style>
