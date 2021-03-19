import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/register.vue'
import Login from '../views/Login.vue'
import Userinfo from '../views/userinfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/userinfo',
    component: Userinfo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('token') && localStorage.getItem('id')) {
    next()
  }
  router.push('/login')
})

export default router
