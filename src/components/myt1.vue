<template>
  <div class="main">


  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
myfun(){

// function ProA(name,skill){
//   this.name=name;
//   this.skill=skill;
//   this.fn=function(){
//     console.log("my name is "+this.name+", my skills are"+this.skill);
//   }
// }
// function ProB(name,skill)
// {

// }
// var A=new ProA("lisa","sing");
// A.fn();
// var B=new ProB("coco","run");
// B.fn();


function ProA(name,skill)
{
  this.name=name;
  this.skill=skill;
  this.fn=function(){
    console.log("my name is"+this.name+"my skills are"+this.skill)
  }
}
function ProB(name,skill)
{
  ProA.call(this,name,skill)
}
var A=new ProA("lisa","sing");
A.fn();
var B=new ProB("coco","dance");
B.fn();



}
    },
    mounted(){
      this.myfun();
    }

  };
</script>



<style>
  .main {
    margin-top: 50px;
    margin-left: 300px;
    display: flex;
    text-align: left;
  }
  
  .main span {
    margin-right: 30px;
  }
</style>
