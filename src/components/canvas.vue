<template>
    <div>
        <canvas id="myCanvas" width="500" height="500"></canvas>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        methods: {
            mycas() {
                let sun;
                let earth;
                let moon;
                let ctx;
                function init(){
                    sun=new Image();
                    earth=new Image();
                    moon=new Image();
                    sun.src="http://gnmro-img.oss-cn-shanghai.aliyuncs.com/test/t3.png!ora";
                    earth.src="http://gnmro-img.oss-cn-shanghai.aliyuncs.com/test/t1.png!ora";
                    moon.src="http://gnmro-img.oss-cn-shanghai.aliyuncs.com/test/t2.png!ora";
                    let canvas=document.querySelector("#myCanvas");
                    ctx=canvas.getContext("2d");
                    sun.onload=function(){
                        draw();
                    }
                }
                init();
                function draw(){
                    ctx.clearRect(0,0,300,300);
                    ctx.drawImage(sun,0,0,300,300);
                    ctx.save();
                    ctx.translate(150,150);

                    ctx.beginPath();
                    ctx.strokeStyle="#000";
                    ctx.arc(0,0,100,0,2*Math.PI);
                    ctx.stroke();

                    let time=new Date();
                    ctx.rotate(2*Math.PI/60*time.getSeconds()+2*Math.PI/60000*time.getMilliseconds());
                    ctx.translate(100,0);
                    ctx.drawImage(earth,-12,-12);

                    ctx.beginPath();
                    ctx.strokeStyle="#ff5200";
                    ctx.arc(0,0,40,0,2*Math.PI);
                    ctx.stroke();

                    ctx.rotate(2*Math.PI/6*time.getSeconds()+2*Math.PI/6000*time.getMilliseconds());
                    ctx.translate(40,0);
                    ctx.drawImage(moon,-3.5,-3.5);
                    ctx.restore();
                    requestAnimationFrame(draw);












                }





    
    
            }
        },
        mounted() {
            this.mycas();
        }
    };
</script>

