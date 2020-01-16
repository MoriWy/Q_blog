<template>
    <div class="header">
      <h3>O(∩_∩)O哈哈~blog博客系统平台</h3>
      <template>
        <div class="tx">
          <span>admin</span>
          <img src="../../../assets/images/timg1.jpg" height="65" width="65"/>
        </div>
      </template>
    </div>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>
.header{
  width: 100%;
  background: goldenrod;
  height:80px;
}
  h3{
    font-family:"华文行楷";
    font-size:30px;
    float: left;
    margin:0px;
    padding: 20px 20px;
  }
  img{
    float: left;
    border-radius: 50%;
  }
  .tx{
    float: right;
    width: 150px;
    margin:8px;
    height: auto;
    /*background: blueviolet;*/
  }
  .tx span{
    font-size: 25px;
    float: right;
    margin-top:20px;
  }
</style>
