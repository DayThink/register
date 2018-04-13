<template>
    <div>
      <ul>
        <li>{{ value }}</li>
      </ul>
    </div>
</template>
<script>
  // 子组件
  export default {
    name: 'ceshi',
    model: {
      prop: 'msg',
      event: 'cc'
    },
    props: {
      // 通过value获取绑定message值
      value: {
        msg: ''
      }
    },
    data: {
      // 你的数据
    },
    methods: {
      changeMessage() {
        // 通过触发组件的input事件改变message的值，
        // 此时父组件中的message值就改变为你设置的值了
        this.$emit('input', '')
      }
    }
  }
</script>
<style>

</style>
