import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import login from '@/components/login/login.vue'
import home from '@/components/home/home.vue'
import admin from '@/components/admin/admin.vue'
import studentList from '@/components/studentList.vue'

Vue.use(Router)

export default new Router({
	mode:'history',//历史记录模式  angular cache:
	base:__dirname+'/',//基础路径
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/login',
    	component:login
    },
    {
    	path:'/home',
    	component:home
    },
    {
    	path:'/admin',
    	component:admin
    },
    {
    	path:'/student',
    	component:studentList
    	
    }
  ]
})
