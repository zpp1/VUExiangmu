import Vue from 'vue'
import Router from 'vue-router'
import shopcar from '@/components/page/shopcaar.vue'
import test from '@/components/page/test.vue'
import xiangqing from '@/components/page/xiangqing.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'xiangqing',
      component: xiangqing
    },
    {path:'/test',component:test},
    {path:'/shopcar',component:shopcar},

  ]
})
