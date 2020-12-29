import Vue from 'vue'
import Router from 'vue-router'
import notFound from '@/components/404'
Vue.use(Router)

const PC = () => import('@/views/PC/pc')
import pcRouter from './pc/index';

const routes = [{
    path: '/',
    beforeEnter(to, from, next) {
      let path;
        console.log('-----这里是电脑端-----');
        path = '/PC'
      }
    
  },
  {
    path: '/PC',
    component: PC,
    children: pcRouter
  }, 
]

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  routes,
})

//路由跳转后，页面回到顶部
router.afterEach(() => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

export default router;
