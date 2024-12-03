import { createRouter, createWebHashHistory } from 'vue-router'
import LoginGoogleView from '@/views/LoginGoogleView'
import DashboardView from '@/views/DashboardView'
import store from '../store';

const routes = [
  {
    path: '/',
    component: LoginGoogleView
  },
  { path: '/dashboard',
    component: DashboardView,
    meta: { requiresAuth: true }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.user) {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
