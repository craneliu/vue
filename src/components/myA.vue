<template>
    <div>
        <my-b v-model="bb" @lisaClick="lisaClick"></my-b>
        <button @click="clickBtn">点击</button>
    </div>
</template>

<script>
    import myB from "./myB";
    export default {
        components: {
            myB
        },
        data() {
            return {
                bb: 1
            }
        },
        methods: {
            clickBtn() {
                this.bb = this.bb + 1;
            },
            lisaClick(v) {
                console.log('lisaClick ' + v);
            }
        }
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //     import myB from "./myB"; //导入子组件
    //     export default {
    //         //注册子组件
    //         components: {
    //             myB
    //         },
    //         data() {
    //             return {
    //                 test:''
    //             };
    //         },
    //         methods: {
    //             fn(){
    //                 this.test+=1;
    //             }
    //         }
    //     };
</script>
