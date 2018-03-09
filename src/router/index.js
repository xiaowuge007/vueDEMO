import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login'
import Index from '@/page/index'
import Content from '@/page/content'
import Detail from '@/page/detail'
import Operation from '@/page/operation/index'
import Report from '@/page/report/index'
import System from '@/page/system/index'
import Other from '@/page/other'
import Aa from '@/page/aa'
import Page1 from '@/page/operation/page1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      redirect: '/index/operation'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/index',
      redirect: '/index/operation',
      component: Index,
      children: [
        {
          path: '/index/operation',
          component: Operation
        },
        {
          path: '/index/report',
          component: Report
        },
        {
          path: '/index/system',
          component: System
        },
        {
          path: '/index/operation/page1',
          component: Page1
        }
      ]
    },
    {
      path: '/content/:id',
      component: Content
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/other',
      component: Other,
      childre: [
        {
          path: '/aa',
          component: Aa
        }
      ]
    }
  ]
})
