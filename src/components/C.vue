<template>
<!-- 有两个值，c1是去A组件中获取值，bb是去B组件中获取值 -->
  <div>我是组件C,我要说"{{c1}}",我给B发消息{{bb}}</div>
</template>
<script>
export default {
  // 通过props到处变量bb,c1
  props: ["bb", "c1"],
  data() {
    return {};
  }
};
</script>
