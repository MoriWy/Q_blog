<template>
    <div class="article">
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
       style="border-bottom: 2px solid lightskyblue;">
        {{tag}}
      </el-tag>
      <el-table style="width:1550px;border:2px solid #DCDCDC;margin-top:10px;" :data="articleData">
        <el-table-column label="标题" prop="title"></el-table-column>
        <el-table-column label="所属分类" prop="classify"></el-table-column>
        <el-table-column label="文章封面" prop="image">
          <img src="../../assets/images/timg1.jpg" style="width: 30px;height: 30px;">
        </el-table-column>
        <el-table-column label="发布时间" prop="uploadtime"></el-table-column>
        <el-table-column label="更新时间" prop="updatetime"></el-table-column>
        <el-table-column label="浏览量" prop="pageviews"></el-table-column>
        <el-table-column label="操作">
          <template>
            <el-button type="success">编辑</el-button>
            <el-button type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
        name: "article",
        data(){
            return{
                articleData:[
                    {title:'articleData',classify:'计算机',image:'../../assets/images/timg1.jpg',uploadtime:'2019-9-8',updatetime:'2019-12-30',pageviews:'120'},
                    {title:'articleData',classify:'计算机',image:'../../assets/images/timg1.jpg',uploadtime:'2019-9-8',updatetime:'2019-12-30',pageviews:'120'},
                    {title:'articleData',classify:'计算机',image:'../../assets/images/timg1.jpg',uploadtime:'2019-9-8',updatetime:'2019-12-30',pageviews:'120'},
                    {title:'articleData',classify:'计算机',image:'../../assets/images/timg1.jpg',uploadtime:'2019-9-8',updatetime:'2019-12-30',pageviews:'120'}
                ],
                dynamicTags:["文章管理","栏目管理"]
            }
        },
        methods:{
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },
        }
    }
    </script>
<style>
  .article{
    margin-top:20px;
    padding-left: 20px;
    margin-left:300px;
  }
</style>
