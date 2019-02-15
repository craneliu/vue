<template>
  <div>
      <!-- 定义一个按钮修改父组件的值 -->
    <button type="button" @click="addNum">点击改变父组件值</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      n: 0
    };
  },
  methods: {
    addNum() {
      this.n = this.n + 1;
    //   通过input事件把当前的值传给父组件
      this.$emit("input", this.n);
    }
  }
};
</script>
