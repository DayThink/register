<template>
  <div id="registerBox">
    <div class="title">
      <Icon type="android-person-add" color="#2D8CF0" size="20"></Icon>
      <span>注册</span>
    </div>
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="请输入手机号/账号">
        <Icon type="iphone" slot="prepend" size="20"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="code" class="codeBox">
        <Input type="text" v-model="formInline.code" placeholder="输入验证码" class="code">
        <Icon type="ios-locked-outline" slot="prepend" size="15"></Icon>
        </Input>
        <Button class="codeButton">发送验证码</Button>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="请设置6-16位新密码包括数字和字母">
        <Icon type="ios-locked-outline" slot="prepend" size="15"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="passwords">
        <Input type="password" v-model="formInline.passwords" placeholder="请再次确认密码">
        <Icon type="ios-locked-outline" slot="prepend" size="15"></Icon>
        </Input>
      </FormItem>
      <div class="checkbox">
        <FormItem prop="checkbox">
          <CheckboxGroup v-model="formInline.checkbox">
            <Checkbox label="我同意火眼金睛"></Checkbox>
            <a href="javascript:;" @click="modal1 = true" class="protocol">服务协议</a>
          </CheckboxGroup>
          <Modal
            width="300px"
            :styles="{top: '200px'}"
            v-model="modal1"
            ok-text="同意"
            title="Common Modal dialog box title"
            @on-ok="ok">
            <p>Content of dialog</p>
          </Modal>
        </FormItem>
        <a href="javascript:;" style="margin-top: 8px">返回登录</a>
      </div>
      <FormItem>
        <Button type="primary" long @click="handleSubmit('formInline')">创建账号</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import { isvalidUsername,isvalidPassword } from '@/router/validate'

  export default {
    data () {
      const validateUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)) {
          callback(new Error('请输入正确的手机号'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule,value,callbacks) =>{
        if(!isvalidPassword(value)){
          callbacks(new Error('密码中必须包括字母和数字'))
        }else {
          callbacks()
        }
      }
      const validatePasswords = (rule,value,callbacks) =>{
        if(value != this.formInline.password){
          callbacks(new Error('两次密码不同，请重新输入'))
        }else {
          callbacks()
        }
      }
      return {
        modal1: false,
        formInline: {
          user: '',
          code:'',
          password: '',
          passwords:'',
          checkbox: []
        },
        ruleInline: {
          code:[
            { required: true, message: '请输入验证码',trigger: 'blur'},
            { type: 'string', min: 4, message: '验证码不少于4位', trigger: 'blur' }
          ],
          user: [
            { required: true, message: '请输入您的手机号/账号', trigger: 'blur'},
            { required: true, trigger: 'blur',validator:validateUsername}
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码不能少于6位', trigger: 'blur' },
            {required:true,trigger:'blur',validator:validatePassword}
          ],
          passwords:[
            { required: true, message: '请再次输入密码', trigger: 'blur' },
            { required: true, trigger:'blur',validator:validatePasswords}
          ],
          checkbox: [
            { required: true, type: 'array', min: 1, message: '请选择', trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('创建成功');
            this.$emit('next','ok');
          } else {
            this.$Message.error('创建失败');
          }
        })
      },
      ok () {
        if(this.formInline.checkbox.length === 0){
          this.formInline.checkbox.push('我同意火眼金睛')
        }
      }
    }
  }

</script>

<style>
  #registerBox{
    width: 300px;
    margin: 20px auto;
    padding: 20px 20px 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.4);
  }
  #registerBox .title{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 10px;
  }
  #registerBox .title span{
    font-size: 16px;
    margin-left: 5px;
  }
  #registerBox .ivu-input-group-prepend{
    background: none;
    border-radius: 0;
    border: 0;
    position: absolute;
    left: 0;
    z-index: 20;
    width: 25px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #registerBox .ivu-input{
    padding-left: 25px;
    border-radius: 0;
  }
  #registerBox .codeBox .ivu-form-item-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  #registerBox .codeBox .code{
    position: inherit;
    width: 60%;
  }
  #registerBox .codeBox .codebutton{
    width: 30%;
  }
  #registerBox .protocol{
    font-size: 12px;
    display:flex;
    align-items: center;
    line-height: 1;
  }
  #registerBox .checkbox{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
  }
  #registerBox .ivu-checkbox-group{
    display: flex;
    flex-direction: row;
  }
  #registerBox .ivu-checkbox-wrapper{
    margin-right: 0;
  }
  #registerBox .ivu-checkbox+span{
    margin-right: 2px;
  }
</style>
