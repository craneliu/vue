<template>
    <div>
        <img src="http://gnmro-img.oss-cn-shanghai.aliyuncs.com/VMI/homebanner03_1080.png!ora">
    </div>
</template>
<script>
import aa from '@/plugins/view'
export default {
    data(){
        return{

        }
    },
    methods:{

    },
    mounted(){
aa.mypre();
    }
}
</script>
<style>
body {
	/* background-image: linear-gradient(6deg, #214, #000); */
	/* background-size: 100% 100%; */
        overflow:hidden
}
body,html
{width: 100%;}
img
{
    width:100%;
    position: absolute;
    left: 0;
    top: 0;

}
canvas { display: block; position: absolute; top: 0; left: 0;}
</style>

