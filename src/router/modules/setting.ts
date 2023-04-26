import { RouteRecordRaw } from 'vue-router'
import SettingRole from '@/pages/setting/role/index.vue'
import SettingUser from '@/pages/setting/user/index.vue'
const Setting: RouteRecordRaw[] = [
  {
    path: '/setting/user',
    name: 'user',
    meta: { keepAlive: true },
    component: SettingUser
    // component: defineAsyncComponent(() => import('@/pages/page2.vue'))
    // component: page2
  },
  {
    path: '/setting/role',
    name: 'role',
    meta: { keepAlive: true },
    component: SettingRole
    // component:page3
    // component:  defineAsyncComponent(() => import('@/pages/page3.vue'))
  }
]
export default Setting
