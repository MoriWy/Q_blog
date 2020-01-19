<template>
    <el-dialog title="栏目信息修改"
        :visible.sync="editDialogVisible"
        :append-to-body="true"
         width="30%"
         center>
       <el-form ref="modifyform" :key="this.index" label-width="100px">
         <el-form-item label="栏目分类" label-width="100px">
           <el-input v-model="modifyform.classify"></el-input>
         </el-form-item>
         <el-form-item label="添加人" label-width="100px">
           <el-input v-model="modifyform.username"></el-input>
         </el-form-item>
         <el-form-item label="创建时间" label-width="100px">
           <el-input v-model="modifyform.createdTime"></el-input>
         </el-form-item>
       </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="cancel">取消</el-button>
          <el-button type="primary" @click="doSubmit">确定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        name: "editForm",
        props:{
            editDialogVisible:{
                type:Boolean,
                default:null
            },
            index:{
                type: String,
                default: null
            },
            row:{
                type: String,
                default: null
            }
        },
        watch:{
            index(newval){
                this.getindex = newval
                this.modifyform = this.row
                console.log("新index",newval)
            }
        },
        data(){
          return{
              getindex:'',
              modifyform:{
                  classify:this.row.classify,
                  username:this.row.username,
                  createdTime:this.row.createdTime
              }
          }
        },
        methods:{
            cancel(){
                this.editDialogVisible = false
                // console.log("打出来index：",this.getindex)
                // console.log("打出来：",this.modifyform )
                // console.log("取消：",this.editDialogVisible)
            },
            doSubmit(){
                this.editDialogVisible = false
                // console.log("确定：",this.editDialogVisible)

            }
        }
    }
</script>

<style scoped>

</style>
