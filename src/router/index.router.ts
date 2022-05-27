import {
  createRouter,
  createWebHashHistory,
  Router,
  RouteRecordRaw
} from 'vue-router'
import Index from '@/views/HomePage.vue'
import Axios from '@/views/modules/axios/Axios.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/axios',
    name: 'Axios',
    component: Axios
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/modules/test/Test.vue')
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
