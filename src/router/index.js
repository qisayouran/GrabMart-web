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
    component: () => import('@/views/layout/AdminView.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/admin/IndexView.vue')
      },
      {
        path: 'users',
        name: 'userlist',
        component: () => import('@/views/admin/UserList.vue')
      },
      {
        path: 'manage/role',
        name: 'roleManage',
        component: () => import('@/views/admin/RoleManage.vue')
      },
      {
        path: 'manage/permissions',
        name: 'permissionsManage',
        component: () => import('@/views/admin/PermissionsManage.vue')
      },
      {
        path: 'manage/product',
        name: 'productManage',
        component: () => import('@/views/admin/ProductManage.vue')
      },
      {
        path: 'manage/order',
        name: 'orderManage',
        component: () => import('@/views/admin/OrderManage.vue')
      }
    ]
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
