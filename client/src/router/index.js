import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Trips from '@/components/trips'
import CreateTrip from '@/components/CreateTrip'
import ViewTrip from '@/components/ViewTrip'
import EditTrip from '@/components/EditTrip'

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
      path: '/trips/create',
      name: 'trips-create',
      component: CreateTrip
    },
    {
      path: '/trips/:tripId',
      name: 'trip',
      component: ViewTrip
    },
    {
      path: '/trips/:tripId/edit',
      name: 'trip-edit',
      component: EditTrip
    },
    {
      path: '*',
      redirect: 'trips'
    }
  ]
})
