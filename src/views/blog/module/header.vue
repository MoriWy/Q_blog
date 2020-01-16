<template>
    <div class="header">
        <span>简书</span>
        <a>首页</a>
        <el-input  suffix-icon="el-icon-search" style="width: 200px;border-radius: 19px;float: right;margin:20px 200px;" placeholder="搜索"></el-input>
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
  position: fixed;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,.05);
  z-index: 200;
}
  .header span{
    font-size: 60px;
    font-family: 华文隶书;
    color: goldenrod;
    margin-left:300px;
  }
  .header a{
    font-size: 40px;
    font-family:华文隶书;
    color: goldenrod;
    margin-left:100px;
    cursor: pointer;
  }
</style>
