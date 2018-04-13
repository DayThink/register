import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import payment from '@/components/payment'

import register from '@/children/register'
import accredit from '@/children/accredit'
import end from '@/children/end'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/register'//默认根目录跳转
    },
    {
      path: '/',
      component: layout,
      children:[
        {
          path:'/register',
          name:'register',
          component:register
        }
      ]
    },
    {
      path: '/',
      component: layout,
      children:[
        {
          path:'/accredit',
          name:'accredit',
          component:accredit
        }
      ]
    },
    {
      path: '/',
      component: layout,
      children:[
        {
          path:'/end',
          name:'end',
          component:end
        }
      ]
    },
    {
      path:'/payment',
      name:'payment',
      component:payment
    },
  ]
})
