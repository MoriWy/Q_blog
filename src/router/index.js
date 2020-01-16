import Vue from 'vue'
import VueRouter from "vue-router"
const login=()=>import('../views/login/login')
const mindex = ()=>import('../views/manage/index')
const article = ()=>import('../views/article/article')
const addinfo = ()=>import('../views/addArticle/addinfo')
const classify = ()=>import('../views/articleClassify/classify')
const blogindex = ()=>import('../views/blog/index')
const addclassify = ()=>import('../views/articleClassify/addclassify')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/login'
  },
  {
    path:'/login',
    component:login
  },
  {
    path:'/index',
    component:mindex,
    children:[
      {
        path:'/article',
        component:article
      },
      {
        path:'/addinfo',
        component:addinfo
      },
      {
        path:'/classify',
        component:classify
      },
      {
        path:'/addclassify',
        component:addclassify
      }
    ]
  },
  {
    path:'/blog/index',
    component:blogindex
  }
]
const router = new VueRouter({
  mode:'history',
  routes
})
export default router
