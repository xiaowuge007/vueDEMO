import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login'
import Index from '@/page/index'
import Content from '@/page/content'
import Detail from '@/page/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/content/:id',
      component: Content
    },
    {
      path: '/detail',
      component: Detail
    }
  ]
})
