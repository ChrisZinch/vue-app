import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/todos',
    name: 'Todos',
    component: () => import('../views/Todos.vue'),
    beforeEnter: (from, to, next) => {
      if (localStorage.getItem('auth') === 'true') next()
      else next('./login')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, { path: '/', redirect: { name: 'Login' } }]
})

export default router
