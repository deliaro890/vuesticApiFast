import { createRouter, createWebHashHistory } from 'vue-router'
import LoginGoogleView from '@/views/LoginGoogleView'
import DashboardView from '@/views/DashboardView'


const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginGoogleView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
