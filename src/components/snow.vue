<template>
    <div>
        <canvas id="canvas_snow"></canvas>
    </div>
</template>
<script>
// 导入下雪脚本，我把下雪脚本放在plugins这个目录
    import mySnow from '@/plugins/snow_show'
    export default {
        data() {
            return {};
        },
        mounted() {
            mySnow.startSnow();
        }
    };
</script>
<style>
    body {
        background-color: #000;
    }
    .canvas_snow {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        pointer-events: none;
    }
</style>
