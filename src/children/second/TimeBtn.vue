<template>
  <Button id="timebut" plain :disabled="disabled || time > 0" style="">
    {{ text }}
  </Button>
</template>

<script>
  export default {
    name: 'timer-btn',
    props: {
      second: {
        type: Number,
        default: 60
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data: function () {
      return {
        time: 0
      }
    },
    computed: {
      text: function () {
        return this.time > 0 ? this.time + 's 后重新获取' : '获取验证码';
      }
    },
    methods: {
      run: function () {
        this.time = this.second
        this.timer()
      },
      timer: function () {
        if (this.time > 0) {
          this.time--;
          setTimeout(this.timer, 1000);
        }
      }
    }
  }
</script>

<style scoped>
  #timebut{
    min-width: 100px;
    text-align: center;
    padding: 6px 0;
  }
</style>
