<template>
  <div class="login">
    <el-form  style="width: 400px;margin:0 auto;" :model="form" :rules="loginRules" ref="loginform">
      <h2>博客管理系统平台</h2>
      <el-form-item label="账号:" label-width="50px">
        <el-input v-model="form.username" type="text" placeholder="username"></el-input>
      </el-form-item>
      <el-form-item label="密码:" label-width="50px">
        <el-input v-model="form.password" type="password" placeholder="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="primary" @click.native.prevent="handleLogin">
          <span v-if="!loading">立即登录</span>
          <span v-else>登录中</span>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                form:{
                    username:'',
                    password:''
                },
                loading:false,
                loginRules:{
                    username: [{required:true,trigger:'blur',message:'用户名不能为空！'}],
                    password: [{required:true,trigger: 'blur',message: '密码不能为空！'}]
                },
                token:''
            }
        },
        methods:{
            handleLogin(){
                this.$refs.loginform.validate(valid=>{
                   if(valid){
                       this.loading = true
                       this.axios.get("/api/auth",{params:{
                               username:this.form.username,
                               password:this.form.password
                           }})
                           .then((res)=>{
                               this.loading = true
                               // console.log("res:",res)
                               // const token = JSON.stringify(res.data.data['token'])  字符串
                               this.token = res.data.data['token']
                               console.log("token:",this.token)
                               // console.log("status:",res.status)
                               if(res.status===200){
                                   this.$notify.success({
                                       title:'提示！',
                                       message:'恭喜你，登录成功！',
                                       duration:1000
                                   })
                               }
                              this.getToken()
                               this.$router.push({path:'/index'})
                           }).catch((error)=>{
                               this.loading = false
                               // console.log(error)
                               this.$notify.error({
                               title:'提示！',
                               message:'账号或密码错误，登录失败！',
                               duration:1000
                           })
                       })
                   }else{
                       this.loading = false
                   }
                })
            },
            getToken(){
                if(typeof(Storage)!==undefined){
                    localStorage.setItem("token",this.token)
                    // var localtoken = localStorage.getItem("token")
                    // console.log(localtoken)
                }else{
                    console.log("sorry,no LocalStorage!")
                }
            }
        }
    }
</script>
<style>
  .login{
    background-image: url(../../assets/images/bg.png);
    background-size:cover;
    height:925px;
    display: flex;
    justify-content: center;  /* 项目位于中心*/
    align-items: center;/*居中对齐div元素*/
    text-align: center;
  }
</style>












