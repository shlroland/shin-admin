import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory('/admin'),
  routes,
})

export const useVueRouter = (app: App<Element>) => {
  app.use(router)
}
