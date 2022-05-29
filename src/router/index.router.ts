import {
  createRouter,
  createWebHashHistory,
  Router,
  RouteRecordRaw
} from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import Axios from '@/views/modules/axios/Axios.vue'
import IdCardOCR from '@/common/components/idv/IdCardOCR.vue'
import IdvComponent from '@/common/components/idv/IdvComponent.vue'

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
    component: () => import('@/views/modules/test/Test.vue')
  },
  {
    path: '/common',
    name: 'Common',
    component: IdvComponent,
    children: [
      {
        path: 'idv',
        name: 'IdCardOCR',
        component: IdCardOCR
      }
    ]
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
