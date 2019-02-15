<template>
    <div>
        父组件传入：{{value}}<br/> 内部值:{{valueRef}}
        <br/>
        <!-- <button @click="myfun1">同步</button> -->
        <button @click="myfun2">子组件点击</button>
    </div>
</template>

<script>
    export default {
        props: {
            value: Number
        },
        data() {
            return {
                valueRef: 0
            };
        },
        created() {
            this.valueRef = this.value;
        },
        watch: {
            valueRef(newdata) {
                this.$emit('input', newdata);
            },
            value(newdata) {
                this.valueRef = newdata;
            }
        },
        methods: {
            // myfun1() {
            //     this.$emit('input', this.valueRef);
            // },
            myfun2() {
                this.valueRef++;
                this.$emit("lisaClick", this.valueRef);
            }
        }
    };
</script>
