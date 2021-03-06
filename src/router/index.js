import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/blog-details',
    name: 'Blog Details',
    component: () => import('../views/BlogDetails')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/admin/registration',
    name: 'Sign up',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/admin/login',
    name: 'Login',
    component: () => import('../views/Signin.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
