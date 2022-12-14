import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Service from '/src/components/Service.vue'

let history = createWebHistory()
let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  }
]

export default createRouter({
  history,
  routes ,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.name != from.name && to.hash) {
      return {
        el: to.hash,
      }
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      }
    } else {
      return {
        top: 0,
      }
    }
  }
})