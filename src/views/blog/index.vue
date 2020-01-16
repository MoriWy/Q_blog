<template>
    <div class="blog">
      <eHeader></eHeader>
      <template>
        <div style="background: #f9f9f9;">
         <el-main class="content">
           <h3>主内容</h3>
         </el-main>
          <el-aside class="carousel">
            <el-carousel width="800px" height="200px">
              <el-carousel-item>
                <img src="../../assets/images/timg1.jpg" height="200" width="800"/>
              </el-carousel-item>
              <el-carousel-item>
                <img src="../../assets/images/bg.png"  height="200" width="800"/>
              </el-carousel-item>
              <el-carousel-item>
                <img src="../../assets/images/timg1.jpg" height="200" width="800"/>
              </el-carousel-item>
            </el-carousel>
          </el-aside>
          <el-aside class="recommend">
              <a style="color: red;font-size:32px;margin:">|</a>
              <span>推荐阅读</span>
            <el-divider></el-divider>
            <div class="look" v-for="item in content" :key="item.id">
              <a>{{item.title}}</a>
              <span>阅读量：{{item.number}}</span>
            </div>
          </el-aside>
        </div>
      </template>
    </div>
</template>

<script>
  import eHeader from '../blog/module/header'
    export default {
        name: "index",
        components:{eHeader},
        data(){
            return {
              content:[
                  {id:'1',title:'vue项目开发',number:'230'},
                  {id:'2',title:'vue 移动端适配',number:'560'},
                  {id:'3',title:'var 与 let 区别',number:'230'},
                  {id:'4',title:'java开发实战问题',number:'450'},
              ]
            }
        }
    }
</script>

<style scoped>
.blog{
  position: relative;
  background:#DCDCDC ;
}
  .content{
    width:40%;
    height: 900px;
    margin: 100px 450px;
    background: #ffffff;
    box-shadow: 0 2px 10px rgba(0,0,0,.05);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .carousel{
    width:800px;
    box-shadow: 0 2px 10px rgba(0,0,0,.05);
    background: #ffffff;
    position: absolute;
    margin: 100px 1230px;
    float: right;
  }
  .recommend{
    width:300px;
    box-shadow: 0 2px 10px rgba(0,0,0,.05);
    background: #ffffff;
    position: absolute;
    margin:330px 1230px;
    float: right;
  }
  .look{
    margin:10px 0px 10px 20px;
  }
  .look a{
    display: block;
    font-size: 16px;
  }
  .look span{
    color: #969696;
    font-size: 12px;
  }
</style>
