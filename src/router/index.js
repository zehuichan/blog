import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'Root',
    component: () => import('@/views/cv.vue')
  }
]

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

// config router
export function setupRouter(app) {
  app.use(router)
}
