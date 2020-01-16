<template>
    <div class="classify">
      <el-table  style="width:1550px;border:2px solid #DCDCDC;" :data="classifyData">
        <el-table-column label="序号" prop="id"></el-table-column>
        <el-table-column label="栏目分类" prop="classify"></el-table-column>
        <el-table-column label="添加人"  prop="username"></el-table-column>
        <el-table-column label="创建时间" prop="createdTime"></el-table-column>
        <el-table-column label="修改时间" prop="modifiedTime"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary"  @click="editClassify(scope.row.id,scope.row)">编辑</el-button>
            <el-button type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        title="栏目信息修改"
        :visible.sync="editDialogVisible"
        width="30%"
        center>
        <eForm :contentData="classifyData" :index="index" :row="row"></eForm>
        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="editDialogVisible = false">确 定</el-button>
         </span>
      </el-dialog>
    </div>
</template>

<script>
    import {getToken} from "../../utils/auth"
    import eForm from "../articleClassify/editForm"
    import moment from 'moment'
    export default {
        name: "classify",
        components:{eForm},
        data(){
          return{
              classifyData:[],
              editDialogVisible:false,
              index:'',
              row:''
          }
        },
        mounted(){
            this.queryClassify()
        },
        methods:{
            editClassify(index,row){
                // console.log("你好！")
                this.editDialogVisible = true
                console.log(index,row)
                this.index = index
                this.row = row
                // console.log(this.editDialogVisible)
            },
            queryClassify() {
                this.axios.get("/api/api/v1/tags?token="+getToken())
                    .then((res)=>{
                        const classifyData = res.data.data.lists
                        const list = []
                        classifyData.forEach((element)=>{
                            list.push({
                                classify:element.name,
                                id:element.id,
                                username:element.created_by,
                                createdTime: moment.unix(element.created_on).format('YYYY-MM-DD HH:mm:ss'),
                                modifiedTime: moment.unix(element.modified_on).format('YYYY-MM-DD HH:mm:ss')
                            })
                        })
                        // console.log("list:",list)
                        this.classifyData = list
                    }).catch((error)=>{
                    console.log("error:",error)
                })
            }
        }
    }
</script>

<style scoped>
.classify{
  margin-top:20px;
  padding-left: 20px;
  margin-left:300px;
}
</style>
