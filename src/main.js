// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'
import router from './router'
//引入axios
import axios from 'axios'

//关于使用axios的时候，允许跨域时携带 cookie
axios.defaults.withCredentials=true;

//设置请求的基础路径
//var myAxios=axios.create({
//	baseURL:'http://localhost:3000'
//})

//赋到原型上，方便使用
Vue.prototype.$axios=axios//以后直接使用this.$axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
//components: { App },
//template: '<App/>'
})
