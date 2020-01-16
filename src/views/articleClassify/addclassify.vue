<template>
  <div style="width:1530px;float: left;margin-top:20px;margin: 20px;border:2px solid #DCDCDC;">
    <el-form v-model="form" style="margin: 20px;">
      <el-form-item label="栏目" label-width="100px" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="作者" label-width="100px" prop="author">
        <el-input v-model="form.author"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="doSubmit">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {getToken} from "../../utils/auth";

  export default {
        data(){
            return{
              form:{
                  title:'',
                  author:''
              },
              state:'0'
            }
        },
      methods:{
          doSubmit(){
              this.state="1"
             const object = {
                 name:this.form.title,
                 created_by:this.form.author,
                 state:this.state
             }
             console.log("栏目提交对象",object)
             const contenttitle = this.qs.stringify(object)
             console.log("栏目提交内容：",contenttitle)
              this.axios.post("/api/api/v1/tags?token="+getToken(),contenttitle)
                  .then(res=>{
                      console.log("打印:",res)
                      this.$notify.success({
                          title:'提示：',
                          message:'添加栏目成功！',
                          duration:1000
                      })
                  }).catch(error=>{
                      console.log("错误：",error)
                    this.$notify.error({
                      title:'失败：',
                      message:'添加栏目失败！',
                      duration:1000
                  })
              })
          }
      }
  }
</script>
<style>
  .add{
    margin-top:20px;
    padding-left: 20px;
    margin-left:300px;
  }
</style>
