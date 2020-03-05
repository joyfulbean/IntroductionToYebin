import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/aboutme',
      name: 'aboutme',
      component: () =>
        import(/* webpackChunkName: "about" */ '@/components/aboutme.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
