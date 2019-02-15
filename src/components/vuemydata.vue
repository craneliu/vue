<template>
  <div class="mydiv">


{{myGetData}}
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        myGetData:[],
      }
    },
    methods: {
  test(){

  },
      getData() {
        this.axios.post("/api/report/public/queryPerformance", {
          dateRange: '2018-10-01,2018-12-20',
          memId: 17,
          sumAll: true
        }).then((res) => {
          this.myGetData=res.data;
  });

  
      }
  
    },
    mounted() {
      this.getData();
      
    }
  
  }
</script>
<style>
.mydiv li
{
list-style: none;
}
</style>
