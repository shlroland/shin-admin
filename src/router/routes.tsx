import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
  },
  {
    path: '/login',
    component: () => import('../pages/Login/index.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/Error404.vue'),
  },
]
