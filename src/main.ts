import { createApp, App as AppInstance } from 'vue'
import { createRouter, createWebHashHistory, Router, RouterHistory } from 'vue-router'

import routes from './router'
// import { setupRouterGuard, setUserDataFromParent } from './router/guards'
import App from './App.vue'

import 'windi.css'
import './styles/index.less'
// 与基座进行数据交互
function handleMicroData(router: Router) {
  if (window.eventCenterForViteApp1) {
    // 主动获取基座下发的数据
    console.log('child-vite getData:', window.eventCenterForViteApp1.getData())
    window.eventCenterForViteApp1.addDataListener((data: Record<string, unknown>) => {
      if (data.path && typeof data.path === 'string') {
        router.push(data.path)
      }
    })
  }
}
/* ----------------------分割线-umd模式--------------------- */
let app: AppInstance | null = null
let router: Router | null = null
let history: RouterHistory | null = null
// 将渲染操作放入 mount 函数
function mount() {
  console.log('start mount')
  history = createWebHashHistory()
  router = createRouter({
    history,
    routes
  })
  app = createApp(App)
  app.use(router)
  // setupRouterGuard(router)
  app.mount('#micro-app')

  console.log('微应用child-vite渲染了')

  handleMicroData(router)
  setTimeout(() => {
    document.title = 'SSA环境服务自动化'
  }, 0)

  // fixBugForVueRouter4(router)
}

// 将卸载操作放入 unmount 函数
function unmount() {
  console.log('unmount')
  app?.unmount()
  history?.destroy()
  // 卸载所有数据监听函数
  window.eventCenterForViteApp1?.clearDataListener()
  app = null
  router = null
  history = null
  console.log('微应用child-vite卸载了')
}

// 微前端环境下，注册mount和unmount方法
if (window.__MICRO_APP_BASE_APPLICATION__) {
  console.log('__MICRO_APP_BASE_APPLICATION__', window)
  // @ts-ignore
  window['app1'] = { mount, unmount }
  mount()
} else {
  // 非微前端环境直接渲染
  mount()
}
