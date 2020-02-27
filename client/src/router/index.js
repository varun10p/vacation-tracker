import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Trips from '@/components/trips'
import Files from '@/components/files'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Hello
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/trips',
      name: 'trips',
      component: Trips
    },
    {
      path: '/files',
      name: 'files',
      component: Files
    }
  ]
})
