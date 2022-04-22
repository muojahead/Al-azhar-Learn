import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register-student/:serve_id/:title',
    name: 'RegisterStudent',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterStudent.vue')
  },
  {
    path: '/register-student/:serve_id/:title',
    name: 'NewStudent',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewStudent.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // scrollBehavior() {
  //   return { x: 0, y: 0 };
  // }
})

export default router
