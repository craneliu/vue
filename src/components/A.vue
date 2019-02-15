<template>
  <div>
    <my-com v-model="lovingVue"></my-com>
    {{lovingVue}}
  </div>
</template>

<script>
  import myCom from '@/components/B.vue';
  export default {
    components: {
      myCom
    },
    data() {
      return {
        lovingVue:''
      }
    },
    methods: {
  
    }
  }
</script>


