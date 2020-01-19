<template>
    <el-form label-width="100px" ref="modifyform" :key="this.index">$ref<el-form-item label="栏目分类" prop="classify">
        <el-input v-model="modifyform.classify"></el-input>
      </el-form-item>
      <el-form-item label="添加人" prop="username">
        <el-input v-model="modifyform.username"></el-input>
      </el-form-item>
      <el-form-item label="修改时间" prop="createdTime">
        <el-input v-model="modifyform.createdTime"></el-input>
      </el-form-item>
    </el-form>
<!--  <el-dialog-->
<!--    title="栏目信息修改"-->
<!--    :visible.sync="editDialogVisible"-->
<!--    width="30%"-->
<!--    center>-->
<!--    <eForm :contentData="classifyData" :index="index" :row="row" ref="eform"></eForm>-->
<!--    <span slot="footer" class="dialog-footer">-->
<!--          <el-button @click="editDialogVisible = false">取 消</el-button>-->
<!--          <el-button type="primary" @click="doSubmit">确 定</el-button>-->
<!--         </span>-->
<!--  </el-dialog>-->
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
        watch:{
          index(newval){
              // console.log("传递2：",this.index,this.row)
              this.modifyform = this.row
              this.index = newval
              console.log("index:",this.index)
          }
        },
        // mounted(){
        //     this.form = this.row
        //   //   this.contentData.forEach((element)=>{
        //   //     this.list.push({
        //   //         classify:element.classify,
        //   //         username:element.username,
        //   //         createdTime:element.createdTime
        //   //     })
        //   // })
        //     console.log("传递：",this.index,this.row)
        // },
        data(){
          return{
              modifyform:{
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
