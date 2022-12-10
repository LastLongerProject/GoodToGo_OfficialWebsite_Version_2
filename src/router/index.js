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

export default createRouter({ history, routes })