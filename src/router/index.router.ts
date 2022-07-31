import {
  createRouter,
  createWebHashHistory,
  Router,
  RouteRecordRaw
} from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import Axios from '@/views/Axios.vue'
import MediaComponent from '@/views/Media.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/index',
    name: 'Index',
    component: HomePage
  },
  {
    path: '/axios',
    name: 'Axios',
    component: Axios
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/Test.vue')
  },
  {
    path: '/media',
    name: 'Media',
    component: MediaComponent
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
