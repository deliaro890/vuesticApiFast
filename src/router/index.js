import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue';
import SignUpView from '../views/SignUpView.vue'
import UserUpdateFormView from '../views/UserUpdateFormView'
import LoginGoogleView from '../views/LoginGoogleView'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path:'/signup',
    name: 'SignUp',
    component: SignUpView,
  },
  {
    path: '/updateform',
    name: 'UpdateFrom',
    component: UserUpdateFormView
  },
  {
    path: '/logingoogle',
    name: 'LoginGoogle',
    component: LoginGoogleView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
