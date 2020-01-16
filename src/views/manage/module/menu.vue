<template>
    <div style="width: 300px;float: left;">
      <el-menu
        :default-active="this.$router.path"
        class="el-menu-vertical-demo"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-tools"></i>
            <span>系统管理</span>
          </template>
          <el-menu-item>账户管理</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>文章管理</span>
          </template>
          <el-menu-item index="/article">文章列表</el-menu-item>
          <el-menu-item index="/addinfo">添加文章</el-menu-item>
        </el-submenu>
        <el-submenu>
          <template slot="title">
            <i class="el-icon-news"></i>
            <span>栏目管理</span>
          </template>
          <el-menu-item index="/classify">栏目列表</el-menu-item>
          <el-menu-item index="/addclassify">添加栏目</el-menu-item>
        </el-submenu>
        <el-submenu>
          <template slot="title">
            <i class="el-icon-chat-dot-square"></i>
            <span>留言管理</span>
          </template>
          <el-menu-item>留言</el-menu-item>
        </el-submenu>
        <el-submenu>
          <template slot="title">
            <i class="el-icon-s-data"></i>
            <span>操作管理</span>
          </template>
          <el-menu-item>导出列表</el-menu-item>
        </el-submenu>
        <el-menu-item>
          <template slot="title">
            <i class="el-icon-switch-button"></i>
            <span>退出登录</span>
          </template>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
    export default {
        name: "menu",
        methods:{
            handleSelect(key,keypath){
                console.log(key,keypath)
            }
        }
    }
</script>

<style scoped>

</style>
