<template>
  <div class="main">


      <input type="text" v-model="searchText" />

<p>{{searchText}}</p>

  </div>
</template>
<script>
export default {
  data() {
    return {
        searchText:''
    };
  }
};
</script>




<style>
.main {
  margin-top: 30px;
  overflow: hidden;
  clear: both;
}
</style>
