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
            <el-button type="primary"  @click="editClassify(scope.$index,scope.row)">编辑</el-button>
            <el-button type="danger" v-popover:pop>删除</el-button>
              <el-popover
                ref="pop"
                placement="top"
                v-model="popvisible">
                <p>这是一段内容</p>
                <div style="text-align: right; margin: 0">
                  <el-button @click="popvisible=false">取消</el-button>
                  <el-button @click="popvisible=false">确定</el-button>
                </div>
              </el-popover>
          </template>
        </el-table-column>
      </el-table>
<!--      <eForm v-show="editDialogVisible" :index="index"></eForm>-->
      <template>
        <eForm v-show="editDialogVisible"
        :editDialogVisible="editDialogVisible"
        :index="index"
        :row="row"
        :editClassify="editClassify">
        </eForm>
      </template>
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
              popvisible:false,
              row:'',
              index:'',
              editDialogVisible:false,
              classifyData:[]
          }
        },
        mounted(){
            this.queryClassify()
        },
        methods:{
            editClassify(index,row){
                this.editDialogVisible = true
                console.log("dialog",this.editDialogVisible)
                console.log("index:",index,row)
                this.index = index
                this.row = row
                console.log("row:",this.row)
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
