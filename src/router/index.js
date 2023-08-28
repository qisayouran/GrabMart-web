import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/layout/IndexView.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/layout/UserView.vue')
  },
  {
    path: '/merchant',
    name: 'merchant',
    component: () => import('@/views/layout/MerchantView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/layout/AdminView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
