<template>
    <el-form label-width="100px" ref="form">
      <el-form-item label="栏目分类" prop="classify">
        <el-input v-model="form.classify"></el-input>
      </el-form-item>
      <el-form-item label="添加人" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="修改时间" prop="createdTime">
        <el-input v-model="form.createdTime"></el-input>
      </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "editForm",
        props:{
            contentData:{
              type:Array,
              default:null
          },
            index:{
                type:Number,
                default: null
            },
            row:{
                type:Object,
                default:null
            }
        },
        mounted(){
          //   this.contentData.forEach((element)=>{
          //     this.list.push({
          //         classify:element.classify,
          //         username:element.username,
          //         createdTime:element.createdTime
          //     })
          // })
            console.log("传递：",this.index,this.row)
        },
        data(){
          return{
              form:{
                  classify:this.row.classify,
                  username:this.row.username,
                  createdTime:this.row.createdTime
              }
          }
        }
    }
</script>

<style scoped>

</style>
