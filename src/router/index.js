import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/firstPrj',
    name: 'firstPrj',
    component: () => import('../views/firstPrj.vue')
  },
  {
    path: '/secondPrj',
    name: 'secondPrj',
    component: () => import('../views/secondPrj.vue')
  },
  {
    path: '/third',
    name: 'third',
    component: () => import('../views/third.vue')
  },
  {
    path: '/FourthPrj',
    name: 'FourthPrj',
    component: () => import('../views/FourthPrj.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
