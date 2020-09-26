import Vue from 'vue'
import VueRouter from 'vue-router'
import Read from '../views/Read.vue'
import Login from "@/views/Login";
import Bookcase from "@/views/Bookcase";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Read',
    name: 'Read',
    component: Read
  },
  {
    path: '/bookcase',
    name:"Bookcase",
    component: Bookcase
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
