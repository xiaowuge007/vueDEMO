/**
 * Created by pactera on 2018/1/15.
 */
import router from './router'
import store from './store'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to, from, next) => {
  nprogress.start()
  if (store.getters.token) {
    if (to.path === '/login') {
      next({path: '/'})
      nprogress.done()
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next({path: '/login'})
    }
  }
})

router.afterEach(() => {
  nprogress.done()
})
