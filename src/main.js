// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引用API文件
import api from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api

// 引用工具文件
import utils from './utils/index.js'
// 将工具方法绑定到全局
Vue.prototype.$utils = utils

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
  //监听路由检查登录
  // watch:{
  //   "$route" : 'checkLogin'
  // },
  // created:function(){
  //   this.checkLogin();
  // },
  // methods:{
  //   checkLogin(){
  //     //检查是否存在session
  //     //cookie操作方法在源码里有或者参考网上的即可
  //     if(!window.sessionStorage.getItem('session')){
  //       //如果没有登录状态则跳转到登录页
  //       this.$router.push('/login')
  //     }else{
  //       //否则跳转到登录后的页面
  //       console.log(this.$router)
  //       //this.$router.push('/index')
  //     }
  //   }
  // }

})
