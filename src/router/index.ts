import { RouteRecordRaw } from 'vue-router'
import Home from '@/pages/home/index.vue'
import BasicLayout from '@/layout/BasicLayout.vue'
import Setting from './modules/setting'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    meta: { title: '' },
    component: BasicLayout,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        meta: { title: '欢迎页', keepAlive: true },
        component: Home
      },
      ...Setting
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    meta: {
      title: '404',
      keepAlive: false,
      requireAuth: false
    },
    component: () => import('../pages/NotFound/index.vue')
  },
  {
    path: '/403',
    component: () => import('../pages/403/403.vue')
  }
]
export default routes
