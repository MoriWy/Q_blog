<template>
  <div style="width:1530px;float: left;margin-top:20px;margin: 20px;border:2px solid #DCDCDC;">
    <el-form v-model="form" style="margin: 20px;">
      <el-form-item label="文章分类" label-width="100px">
        <el-select v-model="value" placeholder="请选择">
          <el-option
          v-for="item in options"
          :key="item.label"
          :label="item.label"
          :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章标题" label-width="100px" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="文章作者" label-width="100px" prop="author">
        <el-input v-model="form.author"></el-input>
      </el-form-item>
      <!---------富文本编辑器-------------------------->
      <el-form-item>
          <editor></editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import editor from './markdown'
    export default {
        name: "addinfo",
        components: {editor},
        data(){
            return{
                form:{
                  title:'',
                  author:''
                },
                options:[
                    {value:'1',label:'计算机'},
                    {value:'2',label:'文学'},
                    {value:'3',label:'哲学'}
                ],
                value:''
            }
        }
    }
</script>

<style scoped>

</style>
